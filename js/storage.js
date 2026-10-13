/* =========================================================================
 * storage.js — Dados da plataforma (estilo curso: matéria → módulo → aula)
 *
 * Hierarquia:
 *   Matéria (subject)  →  Módulos (module)  →  Aulas (lesson)
 *   - Aula pode ser de VÍDEO (link do YouTube) ou de CONTEÚDO (texto),
 *     com links de apoio e marcação de concluída.
 *   - Cada módulo tem questionário e revisão ("você se lembra?").
 *
 * Tudo salvo no navegador, SEPARADO POR USUÁRIO (cada conta vê só o seu).
 * Pronto para, numa próxima fase, ser trocado por um banco na nuvem.
 * ========================================================================= */

(function (global) {
  'use strict';

  function storageKey() {
    var uidv = global.__userId;
    if (!uidv) {
      var user = global.Auth && global.Auth.currentUser && global.Auth.currentUser();
      uidv = user ? user.id : 'anon';
    }
    return 'cadernoEstudos:v2:' + uidv;
  }

  function uid() {
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  }
  function now() {
    return new Date().toISOString();
  }
  function emptyDB() {
    return { version: 2, subjects: [], modules: [], lessons: [], quizzes: [], recalls: [], studyLog: [] };
  }

  function load() {
    try {
      var raw = global.localStorage.getItem(storageKey());
      if (!raw) return seedDefaults();
      var d = JSON.parse(raw);
      ['subjects', 'modules', 'lessons', 'quizzes', 'recalls', 'studyLog'].forEach(function (k) {
        if (!d[k]) d[k] = [];
      });
      return d;
    } catch (e) {
      return seedDefaults();
    }
  }

  function save(d) {
    try {
      global.localStorage.setItem(storageKey(), JSON.stringify(d));
      if (global.__onStoreSaved) { try { global.__onStoreSaved(); } catch (e) {} }
      return true;
    } catch (e) {
      return false;
    }
  }

  function seedDefaults() {
    // Conta nova começa vazia: o conteúdo vem do catálogo de cursos
    // (window.COURSES), carregado ao abrir cada curso.
    var d = emptyDB();
    save(d);
    return d;
  }

  function byOrder(a, b) {
    return (a.order || 0) - (b.order || 0) || (a.createdAt || '').localeCompare(b.createdAt || '');
  }

  var Store = {
    uid: uid,

    // ---------- Cursos embutidos ----------
    // Carrega um curso (window.COURSES) na conta da pessoa UMA vez. Adota
    // matérias/módulos que já existam (pelo nome), para não duplicar o que
    // ela já importou, e só cria aulas em módulos novos. As anotações e o
    // progresso continuam sendo de cada usuário.
    seedCourse: function (course) {
      if (!course || !course.id) return 0;
      var d = load();
      d.seededCourses = d.seededCourses || [];
      if (d.seededCourses.indexOf(course.id) !== -1) return 0;
      function skey(s) { return norm(s).replace(/^noc(?:oes|ao) de /, ''); }
      var added = 0;
      (course.subjects || []).forEach(function (cs) {
        var subj = d.subjects.filter(function (s) { return skey(s.name) === skey(cs.name); })[0];
        if (!subj) {
          subj = { id: uid(), name: cs.name, color: cs.color || '#6d5bd0', emoji: cs.emoji || '📚', courseId: course.id, createdAt: now() };
          d.subjects.push(subj); added++;
        } else if (!subj.courseId) { subj.courseId = course.id; }
        (cs.modules || []).forEach(function (cm) {
          var mod = d.modules.filter(function (m) { return m.subjectId === subj.id && norm(m.title) === norm(cm.title); })[0];
          var isNew = false;
          if (!mod) {
            var order = d.modules.filter(function (m) { return m.subjectId === subj.id; }).length;
            mod = { id: uid(), subjectId: subj.id, title: cm.title, order: order, createdAt: now() };
            d.modules.push(mod); isNew = true;
          }
          var hasLessons = d.lessons.some(function (l) { return l.moduleId === mod.id; });
          if (isNew || !hasLessons) {
            var lorder = 0;
            var addL = function (obj) {
              d.lessons.push({ id: uid(), moduleId: mod.id, subjectId: subj.id,
                title: obj.title || 'Aula', type: obj.type || 'texto', videoUrl: obj.videoUrl || '',
                content: obj.content || '', links: obj.links || [], postits: [], done: false,
                order: lorder++, createdAt: now(), updatedAt: now() });
            };
            if (cm.content && cm.content.trim()) addL({ type: 'texto', title: 'Conteúdo', content: cm.content, links: cm.links || [] });
            else if (cm.links && cm.links.length) addL({ type: 'texto', title: 'Material', content: '', links: cm.links });
            (cm.videos || []).forEach(function (v, i) { addL({ type: 'video', title: (v.title && v.title.trim()) || ('Vídeo ' + (i + 1)), videoUrl: v.url }); });
          }
        });
      });
      d.seededCourses.push(course.id);
      save(d);
      return added;
    },

    // ---------- Matérias ----------
    getSubjects: function () {
      return load().subjects.slice();
    },
    getSubjectsByCourse: function (courseId) {
      return load().subjects.filter(function (s) { return s.courseId === courseId; });
    },
    getSubject: function (id) {
      return load().subjects.filter(function (s) { return s.id === id; })[0] || null;
    },
    findSubjectByName: function (name) {
      var n = norm(name);
      return load().subjects.filter(function (s) { return norm(s.name) === n; })[0] || null;
    },
    addSubject: function (name, color, emoji) {
      var d = load();
      var s = { id: uid(), name: (name || 'Nova matéria').trim(), color: color || '#6d5bd0', emoji: emoji || '📚', createdAt: now() };
      d.subjects.push(s);
      save(d);
      return s;
    },
    updateSubject: function (id, patch) {
      var d = load();
      d.subjects.forEach(function (s) { if (s.id === id) Object.assign(s, patch); });
      save(d);
    },
    deleteSubject: function (id) {
      var d = load();
      var mods = d.modules.filter(function (m) { return m.subjectId === id; }).map(function (m) { return m.id; });
      d.subjects = d.subjects.filter(function (s) { return s.id !== id; });
      d.modules = d.modules.filter(function (m) { return m.subjectId !== id; });
      d.lessons = d.lessons.filter(function (l) { return l.subjectId !== id; });
      d.quizzes = d.quizzes.filter(function (q) { return q.subjectId !== id; });
      d.recalls = d.recalls.filter(function (r) { return r.subjectId !== id; });
      void mods;
      save(d);
    },

    // ---------- Módulos ----------
    getModules: function (subjectId) {
      return load().modules.filter(function (m) { return m.subjectId === subjectId; }).sort(byOrder);
    },
    getModule: function (id) {
      return load().modules.filter(function (m) { return m.id === id; })[0] || null;
    },
    addModule: function (subjectId, title) {
      var d = load();
      var order = d.modules.filter(function (m) { return m.subjectId === subjectId; }).length;
      var m = { id: uid(), subjectId: subjectId, title: (title || 'Módulo ' + (order + 1)).trim(), order: order, createdAt: now() };
      d.modules.push(m);
      save(d);
      return m;
    },
    updateModule: function (id, patch) {
      var d = load();
      d.modules.forEach(function (m) { if (m.id === id) Object.assign(m, patch); });
      save(d);
    },
    deleteModule: function (id) {
      var d = load();
      d.modules = d.modules.filter(function (m) { return m.id !== id; });
      d.lessons = d.lessons.filter(function (l) { return l.moduleId !== id; });
      d.quizzes = d.quizzes.filter(function (q) { return q.moduleId !== id; });
      d.recalls = d.recalls.filter(function (r) { return r.moduleId !== id; });
      save(d);
    },

    // ---------- Aulas ----------
    getLessons: function (moduleId) {
      return load().lessons.filter(function (l) { return l.moduleId === moduleId; }).sort(byOrder);
    },
    getLesson: function (id) {
      return load().lessons.filter(function (l) { return l.id === id; })[0] || null;
    },
    addLesson: function (moduleId, data) {
      var d = load();
      var mod = d.modules.filter(function (m) { return m.id === moduleId; })[0];
      if (!mod) return null;
      var order = d.lessons.filter(function (l) { return l.moduleId === moduleId; }).length;
      var l = {
        id: uid(),
        moduleId: moduleId,
        subjectId: mod.subjectId,
        title: (data && data.title) || 'Nova aula',
        type: (data && data.type) || 'texto', // 'video' | 'texto'
        videoUrl: (data && data.videoUrl) || '',
        content: (data && data.content) || '',
        links: (data && data.links) || [],
        postits: (data && data.postits) || [],
        done: false,
        order: order,
        createdAt: now(),
        updatedAt: now()
      };
      d.lessons.push(l);
      save(d);
      return l;
    },
    updateLesson: function (id, patch) {
      var d = load();
      d.lessons.forEach(function (l) { if (l.id === id) { Object.assign(l, patch); l.updatedAt = now(); } });
      save(d);
    },
    toggleLessonDone: function (id) {
      var d = load();
      d.lessons.forEach(function (l) { if (l.id === id) l.done = !l.done; });
      save(d);
    },
    deleteLesson: function (id) {
      var d = load();
      d.lessons = d.lessons.filter(function (l) { return l.id !== id; });
      save(d);
    },

    // ---------- Progresso ----------
    moduleProgress: function (moduleId) {
      var ls = this.getLessons(moduleId);
      return { done: ls.filter(function (l) { return l.done; }).length, total: ls.length };
    },
    subjectProgress: function (subjectId) {
      var ls = load().lessons.filter(function (l) { return l.subjectId === subjectId; });
      return { done: ls.filter(function (l) { return l.done; }).length, total: ls.length };
    },
    // Junta o conteúdo (texto) de um módulo, para questionário/revisão.
    moduleContent: function (moduleId) {
      return this.getLessons(moduleId)
        .map(function (l) { return (l.title || '') + '\n' + (l.content || ''); })
        .join('\n\n')
        .trim();
    },
    subjectContent: function (subjectId) {
      var self = this;
      return self.getModules(subjectId)
        .map(function (m) { return self.moduleContent(m.id); })
        .join('\n\n')
        .trim();
    },

    // ---------- Questionários / Revisão ----------
    addQuiz: function (data) {
      var d = load();
      var q = {
        id: uid(), subjectId: data.subjectId, moduleId: data.moduleId || null,
        scope: data.scope || 'modulo', score: data.score || 0, total: data.total || 0,
        correct: data.correct || 0, createdAt: now()
      };
      d.quizzes.push(q);
      save(d);
      return q;
    },
    getQuizzes: function (moduleId) {
      return load().quizzes.filter(function (q) { return q.moduleId === moduleId; })
        .sort(function (a, b) { return (b.createdAt || '').localeCompare(a.createdAt || ''); });
    },
    addRecall: function (data) {
      var d = load();
      var r = {
        id: uid(), subjectId: data.subjectId, moduleId: data.moduleId || null,
        text: data.text || '', score: data.score || 0,
        matched: data.matched || [], missed: data.missed || [], createdAt: now()
      };
      d.recalls.push(r);
      save(d);
      return r;
    },

    // ---------- Tempo de estudo ----------
    // Acumula segundos estudados numa matéria, agregando por dia.
    addStudyTime: function (subjectId, seconds) {
      if (!subjectId || !seconds || seconds < 1) return;
      var d = load();
      var day = localDay(new Date());
      var entry = d.studyLog.filter(function (e) {
        return e.subjectId === subjectId && e.date === day;
      })[0];
      if (entry) entry.seconds += Math.round(seconds);
      else d.studyLog.push({ subjectId: subjectId, date: day, seconds: Math.round(seconds) });
      save(d);
    },

    // Estatísticas para a tela de perfil.
    studyStats: function () {
      var d = load();
      var now = new Date();
      var todayStr = localDay(now);
      var monday = new Date(now); var dow = (now.getDay() + 6) % 7; // 0 = segunda
      monday.setDate(now.getDate() - dow);
      var weekStr = localDay(monday);
      var monthStr = localDay(now).slice(0, 7); // 'YYYY-MM'

      var today = 0, week = 0, month = 0, total = 0;
      var bySubject = {};
      d.studyLog.forEach(function (e) {
        total += e.seconds;
        if (e.date === todayStr) today += e.seconds;
        if (e.date >= weekStr) week += e.seconds;
        if (e.date.slice(0, 7) === monthStr) month += e.seconds;
        bySubject[e.subjectId] = (bySubject[e.subjectId] || 0) + e.seconds;
      });

      // últimos 7 dias (segunda..hoje em ordem cronológica)
      var perDay = [];
      for (var i = 6; i >= 0; i--) {
        var dd = new Date(now); dd.setDate(now.getDate() - i);
        var ds = localDay(dd);
        var sum = 0;
        d.studyLog.forEach(function (e) { if (e.date === ds) sum += e.seconds; });
        perDay.push({ date: ds, seconds: sum, label: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][dd.getDay()] });
      }

      var self = this;
      var perSubject = d.subjects.map(function (s) {
        var pr = self.subjectProgress(s.id);
        return {
          id: s.id, name: s.name, color: s.color, emoji: s.emoji,
          seconds: bySubject[s.id] || 0,
          done: pr.done, total: pr.total,
          pct: pr.total ? Math.round((pr.done / pr.total) * 100) : 0
        };
      }).sort(function (a, b) { return b.seconds - a.seconds; });

      return { today: today, week: week, month: month, total: total, perDay: perDay, perSubject: perSubject };
    },

    // ---------- Sincronização (nuvem) ----------
    snapshot: function () { return load(); },
    // escreve dados vindos da nuvem SEM disparar novo push
    writeRaw: function (obj) {
      try { global.localStorage.setItem(storageKey(), JSON.stringify(obj)); } catch (e) {}
    },

    // Limpeza única: remove sobras de import antigo nas anotações
    // (ex.: "[Título do vídeo]()" cujo link já foi para "Links de apoio")
    // sem tocar nas anotações da pessoa (ex.: "[12:34] minha nota"). Salva e
    // sincroniza só se algo mudou. Retorna quantas aulas foram limpas.
    cleanupImportArtifacts: function () {
      var d = load();
      var changed = 0;
      (d.lessons || []).forEach(function (l) {
        if (!l || typeof l.content !== 'string' || !l.content) return;
        var before = l.content;
        var t = before
          .replace(/\[[^\]\n]*\]\([^)\n]*\)/g, '')   // [título](...) / [título]() mortos
          .replace(/https?:\/\/\S+/gi, '')            // URLs soltas no texto
          .replace(/(^|\s)www\.\S+/gi, ' ')
          .replace(/[ \t]+\n/g, '\n')
          .replace(/\n{3,}/g, '\n\n')
          .replace(/^\s+|\s+$/g, '');
        if (t !== before) { l.content = t; changed++; }
      });
      if (changed) save(d);
      return changed;
    },

    // ---------- Backup ----------
    exportJSON: function () {
      return JSON.stringify(load(), null, 2);
    },
    importJSON: function (jsonString) {
      var d = JSON.parse(jsonString);
      if (!d.subjects) throw new Error('Arquivo inválido.');
      ['modules', 'lessons', 'quizzes', 'recalls', 'studyLog'].forEach(function (k) { if (!d[k]) d[k] = []; });
      d.version = 2;
      save(d);
      return d;
    }
  };

  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
  }

  // Data local no formato YYYY-MM-DD (sem fuso UTC atrapalhar).
  function localDay(dt) {
    var y = dt.getFullYear(), m = ('0' + (dt.getMonth() + 1)).slice(-2), d = ('0' + dt.getDate()).slice(-2);
    return y + '-' + m + '-' + d;
  }

  global.Store = Store;
})(window);
