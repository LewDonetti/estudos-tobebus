/* =========================================================================
 * storage.js — Camada de dados do Caderno de Estudos
 *
 * Guarda tudo no navegador (localStorage) para que nada se perca ao
 * fechar e reabrir. Também permite exportar/importar um arquivo de backup,
 * para que ela nunca perca o conteúdo de verdade.
 *
 * Arquitetado de forma limpa para que, numa próxima fase, seja fácil
 * trocar por um banco de dados real na nuvem (só reimplementar os métodos
 * de leitura/escrita abaixo).
 * ========================================================================= */

(function (global) {
  'use strict';

  var STORAGE_KEY = 'cadernoEstudos:v1';

  // ----- Utilidades -------------------------------------------------------

  function uid() {
    return (
      Date.now().toString(36) +
      '-' +
      Math.random().toString(36).slice(2, 8)
    );
  }

  function now() {
    return new Date().toISOString();
  }

  function emptyDB() {
    return { version: 1, subjects: [], sessions: [], recalls: [], quizzes: [] };
  }

  // ----- Leitura / escrita bruta -----------------------------------------

  function load() {
    try {
      var raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return seedDefaults();
      var data = JSON.parse(raw);
      // garante que todas as coleções existam
      if (!data.subjects) data.subjects = [];
      if (!data.sessions) data.sessions = [];
      if (!data.recalls) data.recalls = [];
      if (!data.quizzes) data.quizzes = [];
      return data;
    } catch (e) {
      console.warn('Não consegui ler os dados salvos, começando limpo.', e);
      return seedDefaults();
    }
  }

  function save(data) {
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Não consegui salvar os dados.', e);
      return false;
    }
  }

  // ----- Matérias comuns de concurso (só na primeira vez) ----------------

  function seedDefaults() {
    var db = emptyDB();
    var seeds = [
      { name: 'Português', color: '#ff7eb6', emoji: '📖' },
      { name: 'Matemática', color: '#7eb6ff', emoji: '🔢' },
      { name: 'Raciocínio Lógico', color: '#b57edc', emoji: '🧩' },
      { name: 'Direito Constitucional', color: '#ffb570', emoji: '⚖️' },
      { name: 'Direito Administrativo', color: '#70d6a3', emoji: '🏛️' },
      { name: 'Informática', color: '#70d9ff', emoji: '💻' },
      { name: 'Atualidades', color: '#ff9eb5', emoji: '🌍' }
    ];
    seeds.forEach(function (s) {
      db.subjects.push({
        id: uid(),
        name: s.name,
        color: s.color,
        emoji: s.emoji,
        createdAt: now()
      });
    });
    save(db);
    return db;
  }

  // ----- API pública ------------------------------------------------------

  var Store = {
    uid: uid,

    // --- Matérias ---
    getSubjects: function () {
      return load().subjects.slice();
    },

    getSubject: function (id) {
      return load().subjects.filter(function (s) {
        return s.id === id;
      })[0] || null;
    },

    // Procura matéria por nome (ignora acentos e maiúsculas).
    findSubjectByName: function (name) {
      var norm = (name || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .trim();
      return load().subjects.filter(function (s) {
        return (
          s.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .trim() === norm
        );
      })[0] || null;
    },

    addSubject: function (name, color, emoji) {
      var db = load();
      var subject = {
        id: uid(),
        name: (name || 'Nova matéria').trim(),
        color: color || '#ff7eb6',
        emoji: emoji || '📚',
        createdAt: now()
      };
      db.subjects.push(subject);
      save(db);
      return subject;
    },

    updateSubject: function (id, patch) {
      var db = load();
      db.subjects.forEach(function (s) {
        if (s.id === id) Object.assign(s, patch);
      });
      save(db);
    },

    deleteSubject: function (id) {
      var db = load();
      db.subjects = db.subjects.filter(function (s) {
        return s.id !== id;
      });
      // remove também os cadernos e recalls daquela matéria
      db.sessions = db.sessions.filter(function (x) {
        return x.subjectId !== id;
      });
      db.recalls = db.recalls.filter(function (x) {
        return x.subjectId !== id;
      });
      save(db);
    },

    // --- Cadernos / sessões de estudo ---
    getSessions: function (subjectId) {
      var sessions = load().sessions.filter(function (x) {
        return x.subjectId === subjectId;
      });
      // mais recentes primeiro
      sessions.sort(function (a, b) {
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });
      return sessions;
    },

    getSession: function (id) {
      return load().sessions.filter(function (x) {
        return x.id === id;
      })[0] || null;
    },

    // A última (mais recente) sessão de uma matéria
    getLastSession: function (subjectId) {
      return this.getSessions(subjectId)[0] || null;
    },

    addSession: function (subjectId, data) {
      var db = load();
      var count = db.sessions.filter(function (x) {
        return x.subjectId === subjectId;
      }).length;
      var session = {
        id: uid(),
        subjectId: subjectId,
        module: count + 1,
        title: (data && data.title) || 'Módulo ' + (count + 1),
        content: (data && data.content) || '',
        postits: (data && data.postits) || [],
        createdAt: now(),
        updatedAt: now()
      };
      db.sessions.push(session);
      save(db);
      return session;
    },

    updateSession: function (id, patch) {
      var db = load();
      db.sessions.forEach(function (x) {
        if (x.id === id) {
          Object.assign(x, patch);
          x.updatedAt = now();
        }
      });
      save(db);
    },

    deleteSession: function (id) {
      var db = load();
      db.sessions = db.sessions.filter(function (x) {
        return x.id !== id;
      });
      save(db);
    },

    // --- Tentativas de recordação ("Você se lembra?") ---
    getRecalls: function (subjectId) {
      var recalls = load().recalls.filter(function (x) {
        return x.subjectId === subjectId;
      });
      recalls.sort(function (a, b) {
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });
      return recalls;
    },

    addRecall: function (data) {
      var db = load();
      var recall = {
        id: uid(),
        subjectId: data.subjectId,
        sessionId: data.sessionId,
        text: data.text || '',
        score: data.score || 0,
        matched: data.matched || [],
        missed: data.missed || [],
        createdAt: now()
      };
      db.recalls.push(recall);
      save(db);
      return recall;
    },

    // --- Resultados de questionários ---
    getQuizzes: function (subjectId) {
      var quizzes = load().quizzes.filter(function (x) {
        return x.subjectId === subjectId;
      });
      quizzes.sort(function (a, b) {
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });
      return quizzes;
    },

    addQuiz: function (data) {
      var db = load();
      var quiz = {
        id: uid(),
        subjectId: data.subjectId,
        sessionId: data.sessionId || null,
        scope: data.scope || 'modulo', // 'modulo' ou 'materia'
        score: data.score || 0,
        total: data.total || 0,
        correct: data.correct || 0,
        createdAt: now()
      };
      db.quizzes.push(quiz);
      save(db);
      return quiz;
    },

    // --- Backup (para nunca perder nada de verdade) ---
    exportJSON: function () {
      return JSON.stringify(load(), null, 2);
    },

    importJSON: function (jsonString) {
      var data = JSON.parse(jsonString);
      if (!data.subjects || !data.sessions) {
        throw new Error('Arquivo de backup inválido.');
      }
      if (!data.recalls) data.recalls = [];
      if (!data.quizzes) data.quizzes = [];
      if (!data.version) data.version = 1;
      save(data);
      return data;
    },

    // Zera tudo (usado só com confirmação)
    resetAll: function () {
      save(emptyDB());
    }
  };

  global.Store = Store;
})(window);
