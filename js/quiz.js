/* =========================================================================
 * quiz.js — Gerador e corretor de questionários
 *
 * Gera perguntas automaticamente A PARTIR do que ela escreveu no caderno,
 * para que ela se teste sobre o conteúdo real que estudou. Dois tipos:
 *
 *   1) "Complete a frase" (cloze): tira uma palavra-chave de uma frase dela
 *      e pede para completar. Correção automática e exata (tolera acentos e
 *      pequenos erros de digitação).
 *
 *   2) "Explique o conceito": pede para explicar um conceito-chave com as
 *      próprias palavras; depois revela o que ela mesma anotou sobre aquilo
 *      e ela se autoavalia (acertei / preciso revisar). É recordação ativa,
 *      e evita dar uma nota automática injusta num texto livre.
 *
 * Reaproveita o motor de comparação do recall.js. Honesto e offline; dá
 * para plugar uma IA depois (basta trocar generate/grade mantendo o formato).
 * ========================================================================= */

(function (global) {
  'use strict';

  var R = global.Recall; // motor de comparação

  // Conectivos comuns que têm 5+ letras mas NÃO são "conceitos".
  var CONCEPT_BLOCK = {};
  (
    'antes depois porque entao assim tambem quando sempre nunca exemplo ' +
    'sobre apenas muitas muitos algumas alguns varios varias diversos ' +
    'diversas formas forma maneira maneiras porem contudo ainda sendo ' +
    'alem dentro fora atraves durante enquanto'
  )
    .split(' ')
    .forEach(function (w) {
      CONCEPT_BLOCK[w] = true;
    });

  function isStop(word) {
    return R._tokens(word).length === 0;
  }

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
        return s.split(' ').length >= 5;
      });
  }

  // Escolhe a melhor palavra-chave de uma frase para virar lacuna.
  function pickBlank(words, used) {
    var best = null;
    for (var i = 0; i < words.length; i++) {
      var clean = cleanWord(words[i]);
      var norm = R._normalize(clean);
      if (!clean || clean.length < 5) continue;
      if (/^\d+$/.test(clean)) continue;
      if (isStop(clean)) continue;
      if (CONCEPT_BLOCK[norm]) continue;
      if (used[norm]) continue;
      var count = words.filter(function (w) {
        return R._normalize(cleanWord(w)) === norm;
      }).length;
      if (count > 1) continue; // lacuna ambígua
      var score = clean.length;
      if (!best || score > best.score) {
        best = { index: i, clean: clean, norm: norm, score: score };
      }
    }
    return best;
  }

  function makeClozeQuestion(sentence, used) {
    var words = sentence.split(' ');
    var pick = pickBlank(words, used);
    if (!pick) return null;
    used[pick.norm] = true;

    var raw = words[pick.index];
    // lacuna de tamanho fixo (não entrega o tamanho da palavra)
    var blanked = raw.replace(cleanWord(raw), '__________');
    var display = words.slice();
    display[pick.index] = blanked;

    return {
      type: 'cloze',
      prompt: 'Complete a frase:',
      text: display.join(' '),
      answer: pick.clean
    };
  }

  // Conceitos mais relevantes do texto (para as perguntas abertas).
  function topConcepts(text, exclude, limit) {
    var toks = R._tokens(text);
    var freq = {};
    toks.forEach(function (t) {
      freq[t] = (freq[t] || 0) + 1;
    });
    var list = Object.keys(freq)
      .filter(function (t) {
        return !exclude[t] && !CONCEPT_BLOCK[t] && t.length >= 5;
      })
      .map(function (t) {
        return { term: t, weight: freq[t] };
      });
    list.sort(function (a, b) {
      return b.weight - a.weight || b.term.length - a.term.length;
    });
    return list.slice(0, limit || 4);
  }

  function pretty(normTerm, text) {
    var words = (text || '').split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      var c = cleanWord(words[i]);
      if (R._normalize(c) === normTerm) return c;
    }
    return normTerm;
  }

  function makeOpenQuestion(term, text) {
    // frases do caderno dela que falam desse conceito (viram o "gabarito")
    var sentences = splitSentences(text).filter(function (s) {
      return R._tokens(s).indexOf(term.term) !== -1;
    });
    if (!sentences.length) return null;

    return {
      type: 'open',
      prompt: 'Explique com suas palavras:',
      text: pretty(term.term, text),
      // o que ela mesma escreveu, para conferir depois
      reveal: sentences.slice(0, 2).join('. ') + '.'
    };
  }

  /**
   * generate(text, options) -> [questions]
   * options: { max }
   */
  function generate(text, options) {
    options = options || {};
    var max = options.max || 6;
    var used = {};
    var cloze = [];
    var open = [];

    // 1) perguntas de completar a frase (prioridade)
    var sentences = shuffle(splitSentences(text));
    sentences.forEach(function (s) {
      var q = makeClozeQuestion(s, used);
      if (q) cloze.push(q);
    });

    // 2) perguntas abertas de conceito (no máximo 2)
    var concepts = topConcepts(text, used, 4);
    for (var j = 0; j < concepts.length && open.length < 2; j++) {
      var oq = makeOpenQuestion(concepts[j], text);
      if (oq) {
        open.push(oq);
        used[concepts[j].term] = true;
      }
    }

    // monta o questionário: ~70% cloze + 1-2 abertas, respeitando o máximo
    var nOpen = Math.min(open.length, Math.max(1, Math.round(max * 0.3)));
    var nCloze = Math.min(cloze.length, max - nOpen);
    var questions = cloze.slice(0, nCloze).concat(open.slice(0, nOpen));
    return shuffle(questions);
  }

  // Corrige uma resposta. Apenas 'cloze' tem correção automática;
  // 'open' é autoavaliado na interface (a função devolve o gabarito).
  function grade(question, userAnswer) {
    userAnswer = userAnswer || '';
    if (question.type === 'cloze') {
      var expectedNorm = R._normalize(question.answer);
      var ok = R._tokens(userAnswer)
        .concat(R._normalize(userAnswer).split(' '))
        .some(function (t) {
          return t && R._wordsMatch(expectedNorm, t);
        });
      return { correct: ok, auto: true, expected: question.answer };
    }
    return { correct: null, auto: false, expected: question.reveal };
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
    grade: grade
  };
})(window);
