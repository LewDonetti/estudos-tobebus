/* =========================================================================
 * importer.js — Reconhece e organiza o conteúdo importado
 *
 * Recebe um texto (colado ou de um arquivo) e tenta descobrir sozinho:
 *   - QUAIS matérias estão ali (ex.: "Direito Constitucional", "Português");
 *   - Como dividir cada matéria em MÓDULOS (aulas/temas);
 *
 * Devolve uma estrutura que a tela de importação mostra para conferência
 * antes de salvar. Tudo offline e honesto; a conferência garante que o
 * "qual é qual" ficou certo.
 * ========================================================================= */

(function (global) {
  'use strict';

  // Matérias conhecidas de concurso → ícone e cor sugeridos.
  // A ordem importa: nomes mais específicos antes dos genéricos.
  var KNOWN = [
    { name: 'Direito Constitucional', emoji: '⚖️', color: '#ffb570', keys: ['constitucional', 'constituicao'] },
    { name: 'Direito Administrativo', emoji: '🏛️', color: '#70d6a3', keys: ['administrativo'] },
    { name: 'Direito Penal', emoji: '🔒', color: '#ff9eb5', keys: ['penal'] },
    { name: 'Direito Civil', emoji: '📜', color: '#c3a6ff', keys: ['civil'] },
    { name: 'Direito Tributário', emoji: '💰', color: '#ffd166', keys: ['tributario', 'tributaria'] },
    { name: 'Direito do Trabalho', emoji: '👷', color: '#f4a261', keys: ['trabalho', 'trabalhista'] },
    { name: 'Legislação', emoji: '📋', color: '#8ecae6', keys: ['legislacao', 'legislativo'] },
    { name: 'Português', emoji: '📖', color: '#ff7eb6', keys: ['portugues', 'lingua portuguesa', 'gramatica'] },
    { name: 'Redação', emoji: '✍️', color: '#ffafcc', keys: ['redacao'] },
    { name: 'Matemática', emoji: '🔢', color: '#7eb6ff', keys: ['matematica'] },
    { name: 'Raciocínio Lógico', emoji: '🧩', color: '#b57edc', keys: ['raciocinio logico', 'raciocinio', 'logica'] },
    { name: 'Informática', emoji: '💻', color: '#70d9ff', keys: ['informatica', 'computacao'] },
    { name: 'Atualidades', emoji: '🌍', color: '#ff9eb5', keys: ['atualidades'] },
    { name: 'Inglês', emoji: '🇬🇧', color: '#90be6d', keys: ['ingles', 'english'] },
    { name: 'História', emoji: '🏺', color: '#e9c46a', keys: ['historia'] },
    { name: 'Geografia', emoji: '🗺️', color: '#90e0ef', keys: ['geografia'] },
    { name: 'Contabilidade', emoji: '📊', color: '#a0c4ff', keys: ['contabilidade', 'contabil'] },
    { name: 'Administração', emoji: '🗂️', color: '#bdb2ff', keys: ['administracao', 'administracao geral'] },
    { name: 'Ética', emoji: '🤝', color: '#caffbf', keys: ['etica', 'etica no servico'] },
    { name: 'Estatística', emoji: '📈', color: '#9bf6ff', keys: ['estatistica'] },
    { name: 'Economia', emoji: '💹', color: '#ffc6ff', keys: ['economia', 'economica'] }
  ];

  var FALLBACK_COLORS = [
    '#ff7eb6', '#b57edc', '#7eb6ff', '#70d6a3',
    '#ffb570', '#ff9eb5', '#70d9ff', '#c3a6ff'
  ];

  function normalize(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .trim();
  }

  // Tenta casar uma linha com uma matéria conhecida.
  function matchKnown(line) {
    var n = normalize(line);
    for (var i = 0; i < KNOWN.length; i++) {
      var k = KNOWN[i];
      for (var j = 0; j < k.keys.length; j++) {
        if (n.indexOf(k.keys[j]) !== -1) return k;
      }
    }
    return null;
  }

  function isUrlLine(t) {
    return /https?:\/\//i.test(t) || /(^|\s)www\.\S+/i.test(t);
  }

  // Um palpite: a linha é um TÍTULO DE MATÉRIA?
  function looksLikeSubject(line) {
    var t = line.trim();
    if (!t) return false;
    if (isUrlLine(t)) return false; // URL nunca é título

    // markdown "# Título"
    if (/^#\s+\S/.test(t) && !/^#{2,}/.test(t)) return true;
    // "Matéria: X" / "Disciplina: X"
    if (/^(mat[eé]ria|disciplina)\s*[:\-]/i.test(t)) return true;
    // casa com matéria conhecida e a linha é curta (é um título, não um texto)
    if (matchKnown(t) && t.split(/\s+/).length <= 6) return true;
    // linha curta TODA EM MAIÚSCULAS (título)
    var letters = t.replace(/[^A-Za-zÀ-ÿ]/g, '');
    if (
      letters.length >= 3 &&
      t === t.toUpperCase() &&
      t.split(/\s+/).length <= 6 &&
      !/[.!?]$/.test(t)
    ) {
      return true;
    }
    return false;
  }

  // Um palpite: a linha é um TÍTULO DE MÓDULO (aula/tema)?
  function looksLikeModule(line) {
    var t = line.trim();
    if (!t) return false;
    if (isUrlLine(t)) return false; // URL nunca é título
    if (/^#{2,}\s+\S/.test(t)) return true; // ## ou ###
    if (/^(m[oó]dulo|aula|tema|assunto|cap[ií]tulo|unidade|li[cç][aã]o)\b/i.test(t)) {
      return true;
    }
    // linha curta terminada em ":" (subtítulo)
    if (/:$/.test(t) && t.split(/\s+/).length <= 7) return true;
    return false;
  }

  // Limpa marcadores do título (#, "Matéria:", "Módulo 1 -", etc.)
  function cleanTitle(line, kind) {
    var t = line.trim().replace(/^#{1,6}\s*/, '');
    t = t.replace(/^(mat[eé]ria|disciplina)\s*[:\-]\s*/i, '');
    if (kind === 'module') {
      // mantém "Módulo 1", só tira ":" final
      t = t.replace(/:$/, '').trim();
    } else {
      t = t.replace(/:$/, '').trim();
    }
    return t || (kind === 'module' ? 'Módulo' : 'Matéria');
  }

  /**
   * analyze(text) -> { subjects: [ { name, emoji, color, known, modules:[{title,content}] } ] }
   */
  function analyze(text) {
    var lines = (text || '').replace(/\r\n/g, '\n').split('\n');
    var subjects = [];
    var current = null; // matéria atual
    var currentModule = null; // módulo atual
    var fallbackIdx = 0;

    function newSubject(title) {
      var known = matchKnown(title);
      var name = known ? known.name : cleanTitle(title, 'subject');
      var subj = {
        name: name,
        emoji: known ? known.emoji : '📚',
        color: known ? known.color : FALLBACK_COLORS[fallbackIdx++ % FALLBACK_COLORS.length],
        known: !!known,
        modules: []
      };
      subjects.push(subj);
      current = subj;
      currentModule = null;
      return subj;
    }

    function newModule(title) {
      if (!current) newSubject('Conteúdo importado');
      var mod = { title: cleanTitle(title, 'module'), content: '' };
      current.modules.push(mod);
      currentModule = mod;
      return mod;
    }

    function addContent(line) {
      if (!current) newSubject('Conteúdo importado');
      if (!currentModule) newModule('Módulo 1');
      currentModule.content += (currentModule.content ? '\n' : '') + line;
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var trimmed = line.trim();
      if (!trimmed) {
        // linha em branco → separa parágrafos dentro do módulo
        if (currentModule) currentModule.content += '\n';
        continue;
      }
      if (looksLikeSubject(trimmed)) {
        newSubject(trimmed);
      } else if (looksLikeModule(trimmed)) {
        newModule(trimmed);
      } else {
        addContent(trimmed);
      }
    }

    // limpeza final: extrai vídeos/links e remove módulos vazios
    subjects.forEach(function (s) {
      s.modules.forEach(function (m) {
        var media = extractMedia(m.content);
        m.videos = media.videos;
        m.links = media.links;
        m.content = media.text.replace(/\n{3,}/g, '\n\n').trim();
      });
      s.modules = s.modules.filter(function (m) {
        return m.content.length > 0 || m.videos.length > 0 || m.links.length > 0;
      });
      if (s.modules.length === 1 && /^m[oó]dulo\s*1?$/i.test(s.modules[0].title)) {
        s.modules[0].title = 'Módulo 1';
      }
    });
    subjects = subjects.filter(function (s) {
      return s.modules.length > 0;
    });

    return { subjects: subjects };
  }

  var YOUTUBE_RE = /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?[^\s]*v=[\w-]+|youtu\.be\/[\w-]+|youtube\.com\/embed\/[\w-]+)/i;

  // Separa URLs do texto: YouTube → vídeos; demais → links de apoio.
  function extractMedia(content) {
    var videos = [];
    var links = [];
    var urlRe = /(https?:\/\/[^\s)]+)|(www\.[^\s)]+)/gi;
    var text = (content || '').replace(urlRe, function (url) {
      var full = /^https?:\/\//i.test(url) ? url : 'https://' + url;
      if (YOUTUBE_RE.test(full)) {
        videos.push({ url: full, title: '' });
      } else {
        links.push({ url: full, title: '' });
      }
      return ''; // tira a URL do texto corrido
    });
    return { videos: videos, links: links, text: text };
  }

  global.Importer = {
    analyze: analyze,
    KNOWN: KNOWN,
    _normalize: normalize,
    _matchKnown: matchKnown
  };
})(window);
