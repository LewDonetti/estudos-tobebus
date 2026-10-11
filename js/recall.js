/* =========================================================================
 * recall.js — Motor de análise "Você se lembra do que estudou?"
 *
 * Compara o que ela escreveu DE MEMÓRIA com o caderno original e devolve:
 *   - uma nota (0 a 100) de quanto do conteúdo-chave ela recordou;
 *   - a lista de conceitos que ela acertou e os que faltaram;
 *   - uma mensagem carinhosa de acordo com o desempenho.
 *
 * É uma análise honesta feita em JavaScript puro (cobertura de conceitos
 * + comparação difusa para perdoar pequenas diferenças de grafia). Não é
 * um "LLM"; na próxima fase dá para plugar uma IA de verdade aqui dentro
 * (basta trocar a função analyze por uma chamada à API e manter o formato
 * do retorno).
 * ========================================================================= */

(function (global) {
  'use strict';

  // Palavras muito comuns do português que não contam como "conteúdo".
  var STOPWORDS = {};
  (
    'a o as os um uma uns umas de do da dos das em no na nos nas por para ' +
    'com sem sob sobre entre ate ao aos e ou mas que se como quando onde ' +
    'qual quais quem cujo cuja o que isso isto aquilo este esta esse essa ' +
    'aquele aquela ele ela eles elas eu tu voce nos vos seu sua seus suas ' +
    'meu minha teu tua nosso nossa dele dela deles delas lhe lhes me te ' +
    'nao sim muito pouco mais menos tambem ja ainda entao assim ser estar ' +
    'ter haver fazer foi era sao e sera tem tinha havia ha num numa pelo ' +
    'pela pelos pelas dum duma dizer pode podem deve devem ' +
    'coisa coisas forma formas caso casos vez vezes etc'
  )
    .split(' ')
    .forEach(function (w) {
      STOPWORDS[w] = true;
    });

  // Remove acentos, deixa minúsculo, tira pontuação.
  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '') // remove acentos
      .replace(/[^a-z0-9\s]/g, ' ') // só letras/números/espaço
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Simplifica para o "radical" aproximado, perdoando plural e terminações
  // comuns, para que "constitucional" ≈ "constituicao" não quebre tudo.
  function stem(word) {
    var w = word;
    // plural simples
    if (w.length > 4 && /s$/.test(w)) w = w.replace(/s$/, '');
    // terminações comuns
    w = w.replace(/(cao|coes|mente|dade|dades|ismo|ista|ância|ancia)$/, '');
    return w;
  }

  function tokens(text) {
    return normalize(text)
      .split(' ')
      .filter(function (t) {
        return t && t.length > 2 && !STOPWORDS[t] && !/^\d+$/.test(t);
      });
  }

  // Distância de edição (Levenshtein) — para aceitar pequenos erros.
  function editDistance(a, b) {
    var m = a.length,
      n = b.length;
    if (!m) return n;
    if (!n) return m;
    var prev = [],
      cur = [],
      i,
      j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      for (j = 0; j <= n; j++) prev[j] = cur[j];
    }
    return prev[n];
  }

  // Dois tokens "batem" se forem iguais, tiverem o mesmo radical, ou forem
  // muito parecidos (perdoa 1 erro de digitação em palavras curtas, 2 nas
  // longas).
  function wordsMatch(a, b) {
    if (a === b) return true;
    var sa = stem(a),
      sb = stem(b);
    if (sa && sa === sb) return true;
    if (a.length >= 4 && (a.indexOf(b) === 0 || b.indexOf(a) === 0)) return true;
    var tolerance = Math.max(a.length, b.length) >= 8 ? 2 : 1;
    return editDistance(a, b) <= tolerance;
  }

  // Extrai os conceitos-chave do caderno original, com peso por frequência.
  // Mantém também a "melhor" forma original (com acento) para exibir bonito.
  function keyConcepts(originalText) {
    var toks = tokens(originalText);
    var original = normalize(originalText).split(' ');
    void original;
    var freq = {};
    toks.forEach(function (t) {
      freq[t] = (freq[t] || 0) + 1;
    });
    var list = Object.keys(freq).map(function (t) {
      return { term: t, weight: freq[t] };
    });
    // termos mais frequentes/relevantes primeiro
    list.sort(function (a, b) {
      return b.weight - a.weight || b.term.length - a.term.length;
    });
    // limita a um número razoável de conceitos para a análise
    return list.slice(0, 40);
  }

  // Recupera a forma "bonita" (com acento, como ela escreveu) de um termo
  // normalizado, procurando no texto original.
  function prettyForm(normTerm, originalText) {
    var words = (originalText || '').split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      var clean = words[i].replace(/[^A-Za-zÀ-ÿ0-9]/g, '');
      if (normalize(clean) === normTerm) return clean;
    }
    return normTerm;
  }

  /**
   * analyze(originalText, recallText)
   * Retorna: { score, matched:[...], missed:[...], total, hit }
   */
  function analyze(originalText, recallText) {
    var concepts = keyConcepts(originalText);
    var recallToks = tokens(recallText);

    var matched = [];
    var missed = [];
    var totalWeight = 0;
    var hitWeight = 0;

    concepts.forEach(function (c) {
      totalWeight += c.weight;
      var found = recallToks.some(function (rt) {
        return wordsMatch(c.term, rt);
      });
      var pretty = prettyForm(c.term, originalText);
      if (found) {
        hitWeight += c.weight;
        matched.push(pretty);
      } else {
        missed.push(pretty);
      }
    });

    var score =
      totalWeight > 0 ? Math.round((hitWeight / totalWeight) * 100) : 0;

    return {
      score: score,
      matched: matched,
      missed: missed,
      total: concepts.length,
      hit: matched.length
    };
  }

  // Mensagem carinhosa de acordo com a nota.
  function feedback(score) {
    if (score >= 85) {
      return {
        level: 'otimo',
        emoji: '🌟',
        title: 'Você mandou MUITO bem, amor!',
        message:
          'Você lembrou de quase tudo que estudou. Está voando! ' +
          'Pode seguir tranquila para o próximo módulo. 💖'
      };
    }
    if (score >= 65) {
      return {
        level: 'bom',
        emoji: '💪',
        title: 'Muito bom!',
        message:
          'Você lembrou da maior parte do conteúdo. Dá uma olhadinha ' +
          'rápida no que faltou e você fixa de vez. 😊'
      };
    }
    if (score >= 40) {
      return {
        level: 'medio',
        emoji: '📚',
        title: 'Bom começo!',
        message:
          'Você lembrou de uma parte, mas vale revisar o caderno antes de ' +
          'seguir. Nada que uma revisãozinha não resolva. Você consegue! 💛'
      };
    }
    return {
      level: 'revisar',
      emoji: '🤍',
      title: 'Vamos revisar juntos?',
      message:
        'Parece que esse conteúdo precisa de mais uma passada. Sem pressão: ' +
        'reler o caderno agora vai fazer tudo encaixar. Eu acredito em você! ❤️'
    };
  }

  global.Recall = {
    analyze: analyze,
    feedback: feedback,
    // expostos para testes/depuração
    _normalize: normalize,
    _tokens: tokens,
    _wordsMatch: wordsMatch
  };
})(window);
