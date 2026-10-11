/* =========================================================================
 * ai.js — Integração opcional com a IA da Claude (API da Anthropic)
 *
 * Quando ativada, gera questões (múltipla escolha + dissertativa) de nível
 * concurso a partir do material da aluna e corrige as dissertativas de
 * verdade. Tudo configurável; se desligada ou se der erro, o app usa o
 * gerador offline (quiz.js) automaticamente.
 *
 * Dois modos de conexão:
 *   - "direct": chama a API da Anthropic direto do navegador (a chave fica
 *     só no navegador dela, em localStorage). Prático para uso pessoal.
 *   - "proxy": chama uma URL que você hospeda e que guarda a chave em
 *     segredo. Recomendado se o site for público.
 * ========================================================================= */

(function (global) {
  'use strict';

  var CFG_KEY = 'cadernoAI:v1';
  var API_URL = 'https://api.anthropic.com/v1/messages';
  var API_VERSION = '2023-06-01';

  var MODELS = [
    { id: 'claude-opus-5-5', label: 'Claude Opus 5.5 — mais inteligente' },
    { id: 'claude-sonnet-5-5', label: 'Claude Sonnet 5.5 — equilibrado' },
    { id: 'claude-haiku-5-5', label: 'Claude Haiku 5.5 — mais rápido e barato' }
  ];

  function defaults() {
    return {
      mode: 'offline', // 'offline' | 'ia'
      endpoint: 'direct', // 'direct' | 'proxy'
      apiKey: '',
      proxyUrl: '',
      model: 'claude-opus-5-5'
    };
  }

  function getConfig() {
    try {
      var raw = global.localStorage.getItem(CFG_KEY);
      if (!raw) return defaults();
      return Object.assign(defaults(), JSON.parse(raw));
    } catch (e) {
      return defaults();
    }
  }

  function setConfig(patch) {
    var cfg = Object.assign(getConfig(), patch || {});
    try {
      global.localStorage.setItem(CFG_KEY, JSON.stringify(cfg));
    } catch (e) {}
    return cfg;
  }

  function isReady() {
    var c = getConfig();
    if (c.mode !== 'ia') return false;
    if (c.endpoint === 'proxy') return !!c.proxyUrl;
    return !!c.apiKey;
  }

  // ----- Chamada de baixo nível à API ------------------------------------
  function callClaude(opts) {
    var cfg = getConfig();
    var body = {
      model: cfg.model || 'claude-opus-5-5',
      max_tokens: opts.maxTokens || 8000,
      output_config: { effort: opts.effort || 'low' },
      messages: [{ role: 'user', content: opts.user }]
    };
    if (opts.system) body.system = opts.system;

    var url, headers;
    if (cfg.endpoint === 'proxy') {
      url = cfg.proxyUrl;
      headers = { 'content-type': 'application/json' };
    } else {
      url = API_URL;
      headers = {
        'content-type': 'application/json',
        'x-api-key': cfg.apiKey,
        'anthropic-version': API_VERSION,
        // necessário para chamar a API direto do navegador
        'anthropic-dangerous-direct-browser-access': 'true'
      };
    }

    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }).then(function (res) {
      return res.text().then(function (txt) {
        var data;
        try {
          data = JSON.parse(txt);
        } catch (e) {
          throw new Error('Resposta inesperada da IA.');
        }
        if (!res.ok) {
          var msg = (data && data.error && data.error.message) ||
            ('Erro ' + res.status);
          throw new Error(msg);
        }
        if (data.stop_reason === 'refusal') {
          throw new Error('A IA recusou gerar esse conteúdo.');
        }
        // concatena os blocos de texto da resposta
        var text = '';
        (data.content || []).forEach(function (b) {
          if (b.type === 'text') text += b.text;
        });
        return text;
      });
    });
  }

  // Extrai o primeiro bloco JSON do texto (tolera cercas ```json).
  function extractJSON(text) {
    if (!text) throw new Error('IA não retornou conteúdo.');
    var t = text.trim();
    t = t.replace(/^```(json)?/i, '').replace(/```$/,'').trim();
    var start = t.indexOf('{');
    var arrStart = t.indexOf('[');
    if (arrStart !== -1 && (arrStart < start || start === -1)) start = arrStart;
    if (start === -1) throw new Error('IA não retornou JSON.');
    // acha o fechamento correspondente
    var open = t[start];
    var close = open === '{' ? '}' : ']';
    var depth = 0;
    for (var i = start; i < t.length; i++) {
      if (t[i] === open) depth++;
      else if (t[i] === close) {
        depth--;
        if (depth === 0) {
          return JSON.parse(t.slice(start, i + 1));
        }
      }
    }
    return JSON.parse(t.slice(start));
  }

  // ----- Gera o questionário ---------------------------------------------
  function generateQuiz(content, options) {
    options = options || {};
    var nMC = options.mc != null ? options.mc : 5;
    var nDiss = options.diss != null ? options.diss : 2;

    var material = (content || '').slice(0, 30000);

    var system =
      'Você é um examinador experiente de concursos públicos brasileiros. ' +
      'Crie questões de alta qualidade baseadas EXCLUSIVAMENTE no material de ' +
      'estudo fornecido. Não invente fatos fora do material. Escreva em ' +
      'português do Brasil. Responda SOMENTE com JSON válido, sem nenhum texto fora do JSON.';

    var user =
      'Crie um simulado com ' + nMC + ' questões de MÚLTIPLA ESCOLHA e ' +
      nDiss + ' questões DISSERTATIVAS sobre o material abaixo.\n\n' +
      'Regras:\n' +
      '- Múltipla escolha: enunciado claro no estilo de banca, 4 alternativas ' +
      '(índices 0 a 3), apenas 1 correta, com distratores plausíveis baseados ' +
      'no conteúdo. Inclua uma breve explicação da resposta correta.\n' +
      '- Dissertativa: pergunta que exija desenvolvimento; forneça uma ' +
      'resposta-modelo e os pontos-chave esperados.\n' +
      '- Baseie tudo apenas no material. Dificuldade compatível com concurso.\n\n' +
      'Formato de saída (JSON), exatamente nesta estrutura:\n' +
      '{"questions":[' +
      '{"type":"mc","stem":"...","options":["...","...","...","..."],"correctIndex":0,"explanation":"..."},' +
      '{"type":"dissertativa","stem":"...","model_answer":"...","key_points":["...","..."]}' +
      ']}\n\n' +
      'MATERIAL:\n"""' + material + '"""';

    return callClaude({
      system: system,
      user: user,
      maxTokens: 8000,
      effort: 'low'
    }).then(function (text) {
      var parsed = extractJSON(text);
      var list = (parsed.questions || []).map(normalizeQuestion).filter(Boolean);
      if (!list.length) throw new Error('A IA não retornou questões válidas.');
      return list;
    });
  }

  // Converte a questão da IA para o formato que o app já usa.
  function normalizeQuestion(q) {
    if (!q || !q.type) return null;
    if (q.type === 'mc') {
      if (!Array.isArray(q.options) || q.options.length < 2) return null;
      var ci = typeof q.correctIndex === 'number' ? q.correctIndex : 0;
      if (ci < 0 || ci >= q.options.length) ci = 0;
      return {
        type: 'mc',
        concept: '', // o enunciado da IA já é completo
        stem: String(q.stem || 'Assinale a alternativa correta:'),
        options: q.options.map(String),
        correctIndex: ci,
        explanation: q.explanation ? String(q.explanation) : '',
        ai: true
      };
    }
    if (q.type === 'dissertativa') {
      return {
        type: 'dissertativa',
        concept: '',
        stem: String(q.stem || 'Disserte sobre o tema estudado:'),
        reveal: String(q.model_answer || ''),
        expected: Array.isArray(q.key_points) ? q.key_points.map(String) : [],
        ai: true
      };
    }
    return null;
  }

  // ----- Corrige uma dissertativa ----------------------------------------
  function gradeDissertativa(question, answer) {
    var system =
      'Você é um examinador de concursos corrigindo uma questão dissertativa. ' +
      'Seja justo, rigoroso porém construtivo e carinhoso. Escreva em português ' +
      'do Brasil. Responda SOMENTE com JSON válido.';

    var user =
      'Pergunta: ' + question.stem + '\n' +
      'Resposta-modelo: ' + (question.reveal || '') + '\n' +
      'Pontos-chave esperados: ' + ((question.expected || []).join('; ')) + '\n' +
      'Resposta do aluno: """' + (answer || '') + '"""\n\n' +
      'Avalie a resposta do aluno comparando com a resposta-modelo e os ' +
      'pontos-chave. Formato JSON:\n' +
      '{"score": <0 a 100>, "verdict": "bem" | "parcial" | "revisar", ' +
      '"feedback": "comentário curto e gentil", "missing": ["ponto que faltou", "..."]}';

    return callClaude({
      system: system,
      user: user,
      maxTokens: 1200,
      effort: 'low'
    }).then(function (text) {
      var r = extractJSON(text);
      var score = typeof r.score === 'number' ? Math.max(0, Math.min(100, r.score)) : 0;
      return {
        score: score,
        verdict: r.verdict || (score >= 75 ? 'bem' : score >= 40 ? 'parcial' : 'revisar'),
        feedback: r.feedback || '',
        missing: Array.isArray(r.missing) ? r.missing : []
      };
    });
  }

  global.AI = {
    getConfig: getConfig,
    setConfig: setConfig,
    isReady: isReady,
    MODELS: MODELS,
    generateQuiz: generateQuiz,
    gradeDissertativa: gradeDissertativa,
    _callClaude: callClaude,
    _extractJSON: extractJSON
  };
})(window);
