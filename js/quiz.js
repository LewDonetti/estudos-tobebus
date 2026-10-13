/* =========================================================================
 * quiz.js — Gerador e corretor de questionários (estilo concurso)
 *
 * Gera perguntas A PARTIR do que ela escreveu/importou, em dois formatos
 * de prova de verdade:
 *
 *   1) MÚLTIPLA ESCOLHA (estilo banca): um enunciado e 4 alternativas, só
 *      uma correta. A alternativa certa é uma afirmação do próprio material
 *      sobre o tema perguntado; as erradas são afirmações do material sobre
 *      OUTROS temas (então só uma responde o enunciado). Correção automática.
 *
 *   2) DISSERTATIVA: ela desenvolve a resposta com as próprias palavras;
 *      depois o sistema revela a "resposta esperada" (tirada do material) e
 *      um indicador de quantas ideias-chave ela mencionou, e ela se
 *      autoavalia — como numa prova discursiva corrigida por um humano.
 *
 * Reaproveita o motor de comparação do recall.js. Offline e honesto; dá
 * para plugar uma IA depois mantendo o formato de generate/grade.
 * ========================================================================= */

(function (global) {
  'use strict';

  var R = global.Recall;

  // Limpa o texto de estudo antes de gerar questões: tira links, a sintaxe
  // de link do import "[título](url)" / "[título]()", marcas de tempo do
  // caderno "[12:34]" e sobras de colchetes/parênteses vazios. Assim nem a
  // IA nem o modo offline usam lixo como alternativa.
  function cleanText(text) {
    var t = String(text || '');
    t = t.replace(/\[([^\]]+)\]\((?:[^)]*)\)/g, '$1');   // [título](url) -> título
    t = t.replace(/https?:\/\/\S+/gi, ' ');
    t = t.replace(/www\.\S+/gi, ' ');
    t = t.replace(/[\[(]\s*\d{1,2}:\d{2}(?::\d{2})?\s*[\])]/g, ' '); // [12:34] (1:02:03)
    t = t.replace(/\(buscar no youtube\)/gi, ' ');
    t = t.replace(/\[\s*\]|\(\s*\)/g, ' ');              // colchetes/parênteses vazios
    t = t.replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n');
    return t.trim();
  }

  var CONCEPT_BLOCK = {};
  (
    'antes depois porque entao assim tambem quando sempre nunca exemplo ' +
    'sobre apenas muitas muitos algumas alguns varios varias diversos ' +
    'diversas formas forma maneira maneiras porem contudo ainda sendo ' +
    'alem dentro fora atraves durante enquanto cada todos todas qualquer ' +
    'segundo conforme assim isso essa esse esta este aquele'
  )
    .split(' ')
    .forEach(function (w) {
      CONCEPT_BLOCK[w] = true;
    });

  function cleanWord(raw) {
    return (raw || '').replace(/^[^0-9A-Za-zÀ-ÿ]+|[^0-9A-Za-zÀ-ÿ]+$/g, '');
  }

  function splitSentences(text) {
    return (text || '')
      .split(/[.!?\n;]+/)
      .map(function (s) {
        return s.replace(/\s+/g, ' ').trim();
      })
      .filter(function (s) {
        var w = s.split(' ').length;
        return w >= 5 && w <= 45; // frases de tamanho razoável
      });
  }

  function hasConcept(sentence, term) {
    return R._tokens(sentence).indexOf(term) !== -1;
  }

  function topConcepts(text, limit) {
    var toks = R._tokens(text);
    var freq = {};
    toks.forEach(function (t) {
      freq[t] = (freq[t] || 0) + 1;
    });
    var list = Object.keys(freq)
      .filter(function (t) {
        return !CONCEPT_BLOCK[t] && t.length >= 5;
      })
      .map(function (t) {
        return { term: t, weight: freq[t] };
      });
    list.sort(function (a, b) {
      return b.weight - a.weight || b.term.length - a.term.length;
    });
    return list.slice(0, limit || 10);
  }

  function pretty(normTerm, text) {
    var words = (text || '').split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      var c = cleanWord(words[i]);
      if (R._normalize(c) === normTerm) return c;
    }
    return normTerm;
  }

  function capText(s, n) {
    s = s.trim();
    // garante ponto final para parecer uma afirmação
    if (!/[.!?]$/.test(s)) s += '.';
    if (s.length <= n) return s;
    return s.slice(0, n).trim() + '…';
  }

  // Monta uma questão de múltipla escolha para um conceito.
  function makeMC(term, prettyTerm, sentences, usedCorrect) {
    // candidata correta: frase que fala do conceito (mais curta e clara)
    var about = sentences.filter(function (s) {
      return hasConcept(s, term) && !usedCorrect[s];
    });
    if (!about.length) return null;
    about.sort(function (a, b) {
      return a.length - b.length;
    });
    var correct = about[0];

    // distratores: frases que NÃO falam do conceito (afirmações sobre
    // outros temas → não respondem o enunciado)
    var pool = sentences.filter(function (s) {
      return !hasConcept(s, term) && s !== correct;
    });
    pool = shuffle(dedupe(pool));
    if (pool.length < 3) return null; // sem distratores suficientes

    var distractors = pool.slice(0, 3);

    var options = shuffle(
      [{ text: capText(correct, 160), correct: true }].concat(
        distractors.map(function (d) {
          return { text: capText(d, 160), correct: false };
        })
      )
    );
    var correctIndex = options
      .map(function (o) {
        return o.correct;
      })
      .indexOf(true);

    usedCorrect[correct] = true;

    return {
      type: 'mc',
      concept: prettyTerm,
      stem:
        'Assinale a alternativa que apresenta uma afirmação correta sobre ',
      options: options.map(function (o) {
        return o.text;
      }),
      correctIndex: correctIndex
    };
  }

  function makeDissertativa(term, prettyTerm, sentences) {
    var about = sentences.filter(function (s) {
      return hasConcept(s, term);
    });
    if (!about.length) return null;

    var expected = {};
    about.slice(0, 3).forEach(function (s) {
      R._tokens(s).forEach(function (t) {
        if (t !== term) expected[t] = true;
      });
    });

    return {
      type: 'dissertativa',
      concept: prettyTerm,
      stem: 'Disserte com suas palavras sobre ',
      reveal: capText(about.slice(0, 3).join('. '), 500),
      expected: Object.keys(expected)
    };
  }

  /**
   * generate(text, options)
   * options: { max, mc, diss }
   */
  function generate(text, options) {
    options = options || {};
    text = cleanText(text);
    var max = options.max || 10;
    var wantDiss = options.diss != null ? options.diss : 0;
    var wantMC = options.mc != null ? options.mc : (wantDiss > 0 ? 5 : max);

    var sentences = dedupe(splitSentences(text));
    var concepts = topConcepts(text, 18);

    var mcQuestions = [];
    var usedCorrect = {};
    for (var i = 0; i < concepts.length && mcQuestions.length < wantMC; i++) {
      var c = concepts[i];
      var mc = makeMC(c.term, pretty(c.term, text), sentences, usedCorrect);
      if (mc) mcQuestions.push(mc);
    }

    var dissQuestions = [];
    for (var j = 0; j < concepts.length && dissQuestions.length < wantDiss; j++) {
      var cd = concepts[j];
      var d = makeDissertativa(cd.term, pretty(cd.term, text), sentences);
      if (d && d.expected.length >= 2) dissQuestions.push(d);
    }

    // monta respeitando o máximo: prioriza múltipla escolha, fecha com
    // dissertativas (se pedidas)
    var nDiss = wantDiss > 0 ? Math.min(dissQuestions.length, wantDiss) : 0;
    var nMC = Math.min(mcQuestions.length, max - nDiss);
    if (nMC < 0) nMC = 0;
    var questions = mcQuestions.slice(0, nMC).concat(dissQuestions.slice(0, nDiss));

    // se não deu para montar múltipla escolha (conteúdo curto), usa o que tiver
    if (!questions.length) {
      questions = dissQuestions.slice(0, Math.min(max, dissQuestions.length));
    }

    return shuffle(questions);
  }

  // Corrige. 'mc' é automática; 'dissertativa' devolve o gabarito e uma
  // medida de cobertura (autoavaliação final fica na interface).
  function grade(question, answer) {
    if (question.type === 'mc') {
      var chosen = typeof answer === 'number' ? answer : -1;
      return {
        type: 'mc',
        correct: chosen === question.correctIndex,
        chosen: chosen,
        correctIndex: question.correctIndex
      };
    }
    // dissertativa
    var userToks = R._tokens(answer || '');
    var hit = 0;
    (question.expected || []).forEach(function (e) {
      if (
        userToks.some(function (t) {
          return R._wordsMatch(e, t);
        })
      ) {
        hit++;
      }
    });
    var total = (question.expected || []).length;
    var coverage = total ? Math.round((hit / total) * 100) : 0;
    return {
      type: 'dissertativa',
      reveal: question.reveal,
      coverage: coverage,
      hit: hit,
      total: total
    };
  }

  function dedupe(arr) {
    var seen = {};
    return arr.filter(function (s) {
      var k = R._normalize(s).slice(0, 60);
      if (seen[k]) return false;
      seen[k] = true;
      return true;
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  global.Quiz = {
    generate: generate,
    grade: grade,
    cleanText: cleanText
  };
})(window);
