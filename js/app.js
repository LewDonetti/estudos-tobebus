/* =========================================================================
 * app.js — Interface da plataforma (matéria → módulo → aula)
 * ========================================================================= */

(function () {
  'use strict';

  var root = document.getElementById('app');

  var SUBJECT_COLORS = ['#5b4fd6', '#2f80ed', '#2aa79b', '#e2902b', '#c0493e', '#8e5bc9', '#3f7f5b', '#d35b8a'];
  var SUBJECT_EMOJIS = ['📖', '🔢', '🧩', '⚖️', '🏛️', '💻', '🌍', '📝', '🧠', '📐', '🔬', '🗺️', '💡', '📚', '🎯', '📊'];
  var POSTIT_COLORS = ['#fdf3c4', '#d6e6fb', '#d6efdd', '#f7dcd9', '#e4dcf5', '#f7e4c9'];

  var state = { view: 'home', courseId: null, subjectId: null, moduleId: null, lessonId: null };
  var quizCtx = null;
  var recallCtx = null;
  var noteKeyHandler = null; // handler do "modo caderno" ativo
  var ytPlayer = null, ytTimer = null; // player de vídeo atual

  function clearNoteMode() {
    if (noteKeyHandler) { document.removeEventListener('keydown', noteKeyHandler, true); noteKeyHandler = null; }
  }
  function clearPlayer() {
    if (ytTimer) { clearInterval(ytTimer); ytTimer = null; }
    if (ytPlayer) { try { ytPlayer.destroy && ytPlayer.destroy(); } catch (e) {} ytPlayer = null; }
  }

  // ----- cronômetro de estudo (conta tempo numa aula) --------------------
  var studyCtx = null;
  var STUDY_EVENTS = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
  function studyStart(subjectId) {
    studyStop();
    studyCtx = { subjectId: subjectId, seconds: 0, last: Date.now() };
    studyCtx.bump = function () { if (studyCtx) studyCtx.last = Date.now(); };
    STUDY_EVENTS.forEach(function (ev) { document.addEventListener(ev, studyCtx.bump, true); });
    studyCtx.timer = setInterval(function () {
      if (!studyCtx) return;
      if (document.visibilityState && document.visibilityState !== 'visible') return;
      var playing = false;
      try { playing = ytPlayer && ytPlayer.getPlayerState && ytPlayer.getPlayerState() === 1; } catch (e) {}
      if (playing) studyCtx.last = Date.now(); // vídeo tocando conta como atividade
      var active = (Date.now() - studyCtx.last) < 180000; // 3 min de tolerância
      if (active) studyCtx.seconds++;
    }, 1000);
  }
  function studyStop() {
    if (!studyCtx) return;
    clearInterval(studyCtx.timer);
    STUDY_EVENTS.forEach(function (ev) { document.removeEventListener(ev, studyCtx.bump, true); });
    if (studyCtx.seconds >= 5) Store.addStudyTime(studyCtx.subjectId, studyCtx.seconds);
    studyCtx = null;
  }
  window.addEventListener('beforeunload', studyStop);

  // ----- helpers ----------------------------------------------------------
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }
  function esc(s) {
    return (s == null ? '' : String(s)).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = el('<div class="toast"></div>'); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }
  function go(view, ids) {
    ids = ids || {};
    state.view = view;
    if ('courseId' in ids) state.courseId = ids.courseId;
    if ('subjectId' in ids) state.subjectId = ids.subjectId;
    if ('moduleId' in ids) state.moduleId = ids.moduleId;
    if ('lessonId' in ids) state.lessonId = ids.lessonId;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function shade(hex, pct) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    r = Math.max(0, Math.min(255, Math.round(r + (r * pct) / 100)));
    g = Math.max(0, Math.min(255, Math.round(g + (g * pct) / 100)));
    b = Math.max(0, Math.min(255, Math.round(b + (b * pct) / 100)));
    return '#' + [r, g, b].map(function (v) { return ('0' + v.toString(16)).slice(-2); }).join('');
  }
  function hexA(hex, a) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return 'rgba(' + parseInt(h.substr(0, 2), 16) + ',' + parseInt(h.substr(2, 2), 16) + ',' + parseInt(h.substr(4, 2), 16) + ',' + a + ')';
  }
  function progressBar(done, total) {
    var pct = total ? Math.round((done / total) * 100) : 0;
    return '<div class="progress-row"><div class="progress"><span style="width:' + pct + '%"></span></div>' +
      '<span class="progress-label">' + done + '/' + total + '</span></div>';
  }
  function ytId(url) {
    if (!url) return null;
    var m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/i);
    return m ? m[1] : null;
  }
  function videoPlatform(url) {
    if (/estrategiaconcursos\.com\.br/i.test(url || '')) return 'Estratégia';
    if (/gran(cursos|concursos)/i.test(url || '')) return 'Gran Cursos';
    if (/alura\.com\.br/i.test(url || '')) return 'Alura';
    if (/hotmart/i.test(url || '')) return 'Hotmart';
    if (/vimeo\.com/i.test(url || '')) return 'Vimeo';
    return null;
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + ('0' + s).slice(-2);
  }
  // Duração amigável: "2h 15min", "45min", "0min"
  function fmtDur(sec) {
    sec = Math.max(0, Math.floor(sec || 0));
    var h = Math.floor(sec / 3600), m = Math.round((sec % 3600) / 60);
    if (h && m) return h + 'h ' + m + 'min';
    if (h) return h + 'h';
    return m + 'min';
  }
  // Carrega a API do YouTube uma vez e chama o callback quando pronta.
  var ytReady = false, ytQueue = [];
  function ensureYT(cb) {
    if (window.YT && window.YT.Player) return cb();
    ytQueue.push(cb);
    if (ytReady) return;
    ytReady = true;
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof prev === 'function') prev();
      ytQueue.forEach(function (f) { f(); }); ytQueue = [];
    };
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }

  // ===== RENDER ============================================================
  function render() {
    clearNoteMode();
    clearPlayer();
    studyStop();
    root.innerHTML = '';
    var v = state.view;
    if (v === 'home') return renderHome();
    if (v === 'course') return renderCourse();
    if (v === 'subject') return renderSubject();
    if (v === 'module') return renderModule();
    if (v === 'lesson') return renderLesson();
    if (v === 'recall') return renderRecall();
    if (v === 'quiz') return renderQuiz();
    if (v === 'import') return renderImport();
    if (v === 'profile') return renderProfile();
  }

  // Soma o progresso (aulas concluídas/total) de um curso já carregado.
  function courseProgress(courseId) {
    var subs = Store.getSubjectsByCourse(courseId);
    var done = 0, total = 0;
    subs.forEach(function (s) { var p = Store.subjectProgress(s.id); done += p.done; total += p.total; });
    return { done: done, total: total, started: subs.length > 0 };
  }

  // Card de matéria (reutilizado no curso e em "minhas matérias").
  function subjectCard(s) {
    var mods = Store.getModules(s.id).length;
    var pr = Store.subjectProgress(s.id);
    var card = el(
      '<div class="subject-card">' +
        '<div class="accent" style="background:' + s.color + '"></div>' +
        '<button class="del" title="Remover">✕</button>' +
        '<div class="s-top">' +
          '<div class="emoji" style="background:' + hexA(s.color, 0.12) + '">' + s.emoji + '</div>' +
          '<div><h3>' + esc(s.name) + '</h3>' +
          '<div class="meta">' + mods + ' módulo' + (mods === 1 ? '' : 's') + '</div></div>' +
        '</div>' +
        (pr.total ? progressBar(pr.done, pr.total) : '<div class="meta">Sem aulas ainda</div>') +
      '</div>'
    );
    card.addEventListener('click', function () { go('subject', { subjectId: s.id }); });
    card.querySelector('.del').addEventListener('click', function (e) {
      e.stopPropagation();
      confirmModal('Remover "' + s.name + '"?', 'Isso apaga os módulos e aulas desta matéria (só na sua conta).', function () {
        Store.deleteSubject(s.id); toast('Matéria removida.'); render();
      });
    });
    return card;
  }

  // ===== INÍCIO (catálogo de cursos) =======================================
  function renderHome() {
    var courses = window.COURSES || [];
    if (courses.length) {
      root.appendChild(el('<div class="section-title">Cursos</div>'));
      var cg = el('<div class="subjects-grid"></div>');
      courses.forEach(function (c) {
        var pr = courseProgress(c.id);
        var nSub = (c.subjects || []).length;
        var card = el(
          '<div class="subject-card course-card">' +
            '<div class="accent" style="background:' + c.color + '"></div>' +
            '<div class="s-top">' +
              '<div class="emoji" style="background:' + hexA(c.color, 0.12) + '">' + c.emoji + '</div>' +
              '<div><h3>' + esc(c.title) + '</h3>' +
              '<div class="meta">' + esc(c.subtitle || (nSub + ' matérias')) + '</div></div>' +
            '</div>' +
            (pr.started && pr.total ? progressBar(pr.done, pr.total)
              : '<div class="meta" style="margin-top:8px;color:' + c.color + ';font-weight:600">Começar →</div>') +
          '</div>'
        );
        card.addEventListener('click', function () {
          Store.seedCourse(c);                 // carrega o curso na conta (1x)
          go('course', { courseId: c.id });
        });
        cg.appendChild(card);
      });
      root.appendChild(cg);
    }

    // Matérias criadas/importadas pela própria pessoa (fora de um curso)
    var mine = Store.getSubjects().filter(function (s) { return !s.courseId; });
    root.appendChild(el('<div class="section-title" style="margin-top:22px">Minhas matérias</div>'));
    var grid = el('<div class="subjects-grid"></div>');
    mine.forEach(function (s) { grid.appendChild(subjectCard(s)); });
    var add = el('<div class="subject-card add"><span style="font-size:1.3rem">＋</span> Adicionar matéria</div>');
    add.addEventListener('click', openSubjectModal);
    grid.appendChild(add);
    root.appendChild(grid);
  }

  // ===== CURSO (matérias do curso) =========================================
  function renderCourse() {
    var course = (window.COURSES || []).filter(function (c) { return c.id === state.courseId; })[0];
    if (!course) return go('home');
    var back = el('<div class="back-link">← Início</div>');
    back.addEventListener('click', function () { go('home'); });
    root.appendChild(back);

    var pr = courseProgress(course.id);
    root.appendChild(el(
      '<div class="page-head">' +
        '<div class="ph-icon" style="background:' + course.color + '">' + course.emoji + '</div>' +
        '<div><h2>' + esc(course.title) + '</h2>' +
          '<div class="ph-sub">' + esc(course.subtitle || '') + '</div></div>' +
        '<div class="ph-right">' + (pr.total ? progressBar(pr.done, pr.total) : '') + '</div>' +
      '</div>'
    ));

    var subs = Store.getSubjectsByCourse(course.id);
    if (!subs.length) { Store.seedCourse(course); subs = Store.getSubjectsByCourse(course.id); }
    var grid = el('<div class="subjects-grid"></div>');
    subs.forEach(function (s) { grid.appendChild(subjectCard(s)); });
    root.appendChild(grid);
  }

  // ===== MATÉRIA (lista de módulos) =======================================
  function renderSubject() {
    var s = Store.getSubject(state.subjectId);
    if (!s) return go('home');
    var mods = Store.getModules(s.id);
    var pr = Store.subjectProgress(s.id);

    var back = el('<div class="back-link">← ' + (s.courseId ? 'Curso' : 'Início') + '</div>');
    back.addEventListener('click', function () {
      if (s.courseId) go('course', { courseId: s.courseId }); else go('home');
    });
    root.appendChild(back);

    root.appendChild(el(
      '<div class="page-head">' +
        '<div class="ph-icon" style="background:' + s.color + '">' + s.emoji + '</div>' +
        '<div><h2>' + esc(s.name) + '</h2>' +
          '<div class="ph-sub">' + mods.length + ' módulo' + (mods.length === 1 ? '' : 's') + '</div></div>' +
        '<div class="ph-right">' + (pr.total ? progressBar(pr.done, pr.total) : '') + '</div>' +
      '</div>'
    ));

    var tb = el('<div class="toolbar"></div>');
    var addMod = el('<button class="btn">＋ Novo módulo</button>');
    addMod.addEventListener('click', function () {
      promptModal('Novo módulo', 'Nome do módulo', 'Ex: Módulo 1 — Introdução', function (name) {
        var m = Store.addModule(s.id, name); go('module', { subjectId: s.id, moduleId: m.id });
      });
    });
    var imp = el('<button class="btn ghost">📥 Importar conteúdo</button>');
    imp.addEventListener('click', function () { go('import', { subjectId: s.id }); });
    tb.appendChild(addMod); tb.appendChild(imp);
    root.appendChild(tb);

    if (!mods.length) {
      root.appendChild(el('<div class="empty-state"><div class="big">📂</div><p>Nenhum módulo ainda. Crie um módulo ou importe o conteúdo.</p></div>'));
      return;
    }
    root.appendChild(el('<div class="section-title">Módulos</div>'));
    var list = el('<div class="module-list"></div>');
    mods.forEach(function (m, i) {
      var p = Store.moduleProgress(m.id);
      var card = el(
        '<div class="module-card">' +
          '<div class="mc-top">' +
            '<div class="mc-num">' + (i + 1) + '</div>' +
            '<div class="mc-title">' + esc(m.title) + '</div>' +
            '<div class="mc-chev">›</div>' +
          '</div>' +
          '<div class="mc-prog">' + progressBar(p.done, p.total) + '</div>' +
        '</div>'
      );
      card.addEventListener('click', function () { go('module', { subjectId: s.id, moduleId: m.id }); });
      list.appendChild(card);
    });
    root.appendChild(list);
  }

  // ===== MÓDULO (lista de aulas) ==========================================
  function renderModule() {
    var s = Store.getSubject(state.subjectId);
    var m = Store.getModule(state.moduleId);
    if (!s || !m) return go('subject', { subjectId: state.subjectId });
    var lessons = Store.getLessons(m.id);
    var p = Store.moduleProgress(m.id);

    var back = el('<div class="back-link">← ' + esc(s.name) + '</div>');
    back.addEventListener('click', function () { go('subject', { subjectId: s.id }); });
    root.appendChild(back);

    root.appendChild(el(
      '<div class="page-head">' +
        '<div class="ph-icon" style="background:' + s.color + '">' + s.emoji + '</div>' +
        '<div><h2>' + esc(m.title) + '</h2>' +
          '<div class="ph-sub">' + lessons.length + ' aula' + (lessons.length === 1 ? '' : 's') + '</div></div>' +
        '<div class="ph-right">' + (p.total ? progressBar(p.done, p.total) : '') + '</div>' +
      '</div>'
    ));

    var tb = el('<div class="toolbar"></div>');
    var addVid = el('<button class="btn">▶ Aula de vídeo</button>');
    addVid.addEventListener('click', function () { lessonModal(m.id, 'video'); });
    var addTxt = el('<button class="btn">📄 Aula de conteúdo</button>');
    addTxt.addEventListener('click', function () {
      var l = Store.addLesson(m.id, { type: 'texto', title: 'Nova aula' });
      go('lesson', { subjectId: s.id, moduleId: m.id, lessonId: l.id });
    });
    tb.appendChild(addVid); tb.appendChild(addTxt);
    if (Store.moduleContent(m.id).replace(/\s/g, '').length > 40) {
      var qz = el('<button class="btn outline">🎯 Simulado</button>');
      qz.addEventListener('click', function () {
        startQuiz({ subjectId: s.id, moduleId: m.id, subjectName: s.name, moduleTitle: m.title, content: Store.moduleContent(m.id), scope: 'modulo', label: 'Simulado — ' + m.title });
      });
      var rc = el('<button class="btn outline">🧠 Você se lembra?</button>');
      rc.addEventListener('click', function () {
        recallCtx = { subjectId: s.id, moduleId: m.id, content: Store.moduleContent(m.id), label: m.title };
        go('recall', { subjectId: s.id, moduleId: m.id });
      });
      tb.appendChild(qz); tb.appendChild(rc);
    }
    root.appendChild(tb);

    if (!lessons.length) {
      root.appendChild(el('<div class="empty-state"><div class="big">🎬</div><p>Nenhuma aula ainda. Adicione um vídeo ou um conteúdo.</p></div>'));
      return;
    }
    root.appendChild(el('<div class="section-title">Aulas</div>'));
    var list = el('<div class="lesson-list"></div>');
    lessons.forEach(function (l) {
      var icon = l.type === 'video' ? '<div class="lesson-icon video">▶</div>' : '<div class="lesson-icon texto">📄</div>';
      var bits = [];
      if (l.type === 'video') {
        var pf = ytId(l.videoUrl) ? 'YouTube' : (videoPlatform(l.videoUrl) || (l.videoUrl ? 'Externo' : ''));
        bits.push('Vídeo' + (pf ? ' · ' + pf : ''));
      }
      if (l.content && l.content.trim()) bits.push('Conteúdo');
      if (l.links && l.links.length) bits.push(l.links.length + ' link' + (l.links.length === 1 ? '' : 's'));
      var row = el(
        '<div class="lesson-row">' +
          '<div class="lesson-check' + (l.done ? ' on' : '') + '">' + (l.done ? '✓' : '') + '</div>' +
          icon +
          '<div class="lesson-main">' +
            '<div class="lesson-title' + (l.done ? ' done' : '') + '">' + esc(l.title) + '</div>' +
            '<div class="lesson-meta">' + (bits.join(' · ') || '—') + '</div>' +
          '</div>' +
          '<div class="row-actions"><button class="mini-x" title="Remover">✕</button></div>' +
        '</div>'
      );
      row.querySelector('.lesson-check').addEventListener('click', function (e) {
        e.stopPropagation(); Store.toggleLessonDone(l.id); renderModule();
      });
      row.querySelector('.lesson-main').addEventListener('click', function () {
        go('lesson', { subjectId: s.id, moduleId: m.id, lessonId: l.id });
      });
      row.querySelector('.mini-x').addEventListener('click', function (e) {
        e.stopPropagation();
        confirmModal('Remover aula?', 'Essa ação não pode ser desfeita.', function () {
          Store.deleteLesson(l.id); toast('Aula removida.'); renderModule();
        });
      });
      list.appendChild(row);
    });
    root.appendChild(list);
  }

  // ===== AULA (player / editor) ===========================================
  function renderLesson() {
    var s = Store.getSubject(state.subjectId);
    var m = Store.getModule(state.moduleId);
    var l = Store.getLesson(state.lessonId);
    if (!s || !m || !l) return go('module', { subjectId: state.subjectId, moduleId: state.moduleId });

    studyStart(s.id); // começa a contar o tempo de estudo nesta matéria

    var links = JSON.parse(JSON.stringify(l.links || []));
    var postits = JSON.parse(JSON.stringify(l.postits || []));

    var back = el('<div class="back-link">← ' + esc(m.title) + '</div>');
    back.addEventListener('click', function () { go('module', { subjectId: s.id, moduleId: m.id }); });
    root.appendChild(back);

    // cabeçalho com título editável + concluir + apagar
    var head = el(
      '<div class="lesson-head">' +
        '<h2 contenteditable="false"></h2>' +
        '<button class="btn ' + (l.done ? 'success' : 'ghost') + ' small" id="doneBtn">' +
          (l.done ? '✓ Concluída' : 'Marcar como concluída') + '</button>' +
        '<button class="btn ghost small" id="delBtn">🗑</button>' +
      '</div>'
    );
    root.appendChild(head);

    var titleInput = el('<input type="text" class="field-title" value="' + esc(l.title) + '" style="font-size:1.25rem;font-weight:700;border:none;border-bottom:1px solid var(--line);padding:4px 2px;width:100%;margin-bottom:16px;font-family:inherit;color:var(--ink)" />');
    head.querySelector('h2').replaceWith(titleInput);
    titleInput.addEventListener('focus', function(){ this.style.borderColor = 'var(--primary)'; });
    titleInput.addEventListener('blur', function(){ this.style.borderColor = 'var(--line)'; });

    head.querySelector('#doneBtn').addEventListener('click', function () {
      Store.toggleLessonDone(l.id); go('lesson', { subjectId: s.id, moduleId: m.id, lessonId: l.id });
    });
    head.querySelector('#delBtn').addEventListener('click', function () {
      confirmModal('Remover aula?', 'Essa ação não pode ser desfeita.', function () {
        Store.deleteLesson(l.id); toast('Aula removida.'); go('module', { subjectId: s.id, moduleId: m.id });
      });
    });

    var notebook = null, videoNotes = null, videoInput = null;

    if (l.type === 'video') {
      var id = ytId(l.videoUrl);
      var frameId = null, modeBtn = null, vwrap = null;

      if (id) {
        // --- YouTube: player embutido + Modo caderno ---
        frameId = 'yt-' + Math.random().toString(36).slice(2, 8);
        vwrap = el('<div class="video-wrap">' +
          '<div id="' + frameId + '"></div>' +
          '<div class="v-cover"></div>' +
          '<div class="v-center">▶</div>' +
          '<div class="v-controls">' +
            '<button class="v-btn v-play" title="Play/Pause">▶</button>' +
            '<div class="v-time">0:00 / 0:00</div>' +
            '<div class="v-seek"><div class="v-seek-fill"></div></div>' +
            '<button class="v-btn v-fs" title="Tela cheia">⛶</button>' +
          '</div>' +
        '</div>');
        root.appendChild(vwrap);
        var on = localStorage.getItem('cadernoModo') === '1';
        var bar = el('<div class="note-mode-bar">' +
          '<button class="btn ' + (on ? 'success' : 'ghost') + ' small" id="noteModeBtn">📝 Modo caderno: ' + (on ? 'ligado' : 'desligado') + '</button>' +
          '<span class="nm-hint">Com o modo ligado, é só começar a digitar que o vídeo pausa e o caderno abre.</span></div>');
        root.appendChild(bar);
        modeBtn = bar.querySelector('#noteModeBtn');

        root.appendChild(el('<div class="block-label">🔗 Link do vídeo</div>'));
        videoInput = el('<input type="text" class="q-input" style="min-height:auto" placeholder="https://youtube.com/watch?v=..." value="' + esc(l.videoUrl || '') + '" />');
        root.appendChild(videoInput);
        root.appendChild(el('<div class="block-label">📝 Minhas anotações</div>'));
        videoNotes = el('<textarea class="q-input" placeholder="Anote os pontos importantes da aula...">' + esc(l.content || '') + '</textarea>');
        root.appendChild(videoNotes);

        buildPlayer(vwrap, frameId, id);
        setupNoteMode(l, modeBtn, videoNotes, function () { return ytPlayer; });
      } else if (l.videoUrl && l.videoUrl.trim()) {
        // --- Vídeo externo (plataforma com login): botão + caderno ---
        var plat = videoPlatform(l.videoUrl);
        root.appendChild(el(
          '<div class="ext-video">' +
            '<div class="ext-left"><div class="ext-icon">🔒</div>' +
              '<div><div class="ext-title">Vídeo' + (plat ? ' · ' + esc(plat) : ' na plataforma') + '</div>' +
              '<div class="ext-sub">Abre na plataforma (é preciso estar logada). Anote aqui do lado.</div></div></div>' +
            '<a class="btn" href="' + esc(l.videoUrl) + '" target="_blank" rel="noopener">▶ Assistir' + (plat ? ' no ' + esc(plat) : ' na plataforma') + '</a>' +
          '</div>'
        ));
        root.appendChild(el('<div class="block-label">🔗 Link do vídeo</div>'));
        videoInput = el('<input type="text" class="q-input" style="min-height:auto" placeholder="https://..." value="' + esc(l.videoUrl || '') + '" />');
        root.appendChild(videoInput);
        root.appendChild(el('<div class="block-label">📒 Caderno de anotações</div>'));
        notebook = buildNotebook(l, postits);
        root.appendChild(notebook);
      } else {
        // --- Sem link ainda ---
        root.appendChild(el('<div class="video-empty">Cole o link do vídeo abaixo. Se for YouTube, toca aqui dentro; se for de uma plataforma (ex.: Estratégia), vira um botão "Assistir".</div>'));
        root.appendChild(el('<div class="block-label">🔗 Link do vídeo</div>'));
        videoInput = el('<input type="text" class="q-input" style="min-height:auto" placeholder="Cole o link do YouTube ou da plataforma" value="" />');
        root.appendChild(videoInput);
        root.appendChild(el('<div class="block-label">📒 Caderno de anotações</div>'));
        notebook = buildNotebook(l, postits);
        root.appendChild(notebook);
      }
    } else {
      root.appendChild(el('<div class="block-label">📒 Conteúdo</div>'));
      notebook = buildNotebook(l, postits);
      root.appendChild(notebook);
    }

    // links de apoio
    root.appendChild(el('<div class="block-label">🔗 Links de apoio</div>'));
    var linkWrap = el('<div class="link-list"></div>');
    root.appendChild(linkWrap);
    function drawLinks() {
      linkWrap.innerHTML = '';
      links.forEach(function (lk, i) {
        var item = el('<div class="link-item"><span class="li-icon">🔗</span>' +
          '<a href="' + esc(lk.url) + '" target="_blank" rel="noopener">' + esc(lk.title || lk.url) + '</a>' +
          '<button class="mini-x" title="Remover">✕</button></div>');
        item.querySelector('.mini-x').addEventListener('click', function () { links.splice(i, 1); drawLinks(); });
        linkWrap.appendChild(item);
      });
      var addRow = el('<div class="add-inline"><input type="text" placeholder="Cole um link..." /><button class="btn ghost small">Adicionar</button></div>');
      var inp = addRow.querySelector('input');
      function addLink() {
        var v = inp.value.trim();
        if (!v) return;
        var url = /^https?:\/\//i.test(v) ? v : 'https://' + v;
        links.push({ url: url, title: '' }); inp.value = ''; drawLinks();
      }
      addRow.querySelector('button').addEventListener('click', addLink);
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') addLink(); });
      linkWrap.appendChild(addRow);
    }
    drawLinks();

    // salvar
    var actions = el('<div class="q-actions" style="justify-content:flex-start;margin-top:20px"></div>');
    var saveBtn = el('<button class="btn success">💾 Salvar aula</button>');
    saveBtn.addEventListener('click', function () {
      var patch = { title: titleInput.value.trim() || 'Aula', links: links };
      if (videoInput) patch.videoUrl = videoInput.value.trim();
      if (notebook) {
        patch.content = notebook.querySelector('.paper-text').value;
        patch.postits = postits;
      } else if (videoNotes) {
        patch.content = videoNotes.value;
      }
      var urlChanged = videoInput && (videoInput.value.trim() !== (l.videoUrl || ''));
      Store.updateLesson(l.id, patch);
      toast('Aula salva.');
      // se o link mudou (ex.: colou um do YouTube), recarrega para montar o player certo
      if (l.type === 'video' && urlChanged) go('lesson', { subjectId: s.id, moduleId: m.id, lessonId: l.id });
    });
    actions.appendChild(saveBtn);
    root.appendChild(actions);
  }

  // Player próprio: controla o vídeo por cima (iframe sem foco de teclado).
  function buildPlayer(wrap, frameId, id) {
    var cover = wrap.querySelector('.v-cover');
    var center = wrap.querySelector('.v-center');
    var playBtn = wrap.querySelector('.v-play');
    var timeEl = wrap.querySelector('.v-time');
    var seek = wrap.querySelector('.v-seek');
    var fill = wrap.querySelector('.v-seek-fill');
    var fsBtn = wrap.querySelector('.v-fs');

    function toggle() {
      if (!ytPlayer || !ytPlayer.getPlayerState) return;
      if (ytPlayer.getPlayerState() === 1) ytPlayer.pauseVideo(); else ytPlayer.playVideo();
    }
    cover.addEventListener('click', toggle);
    center.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
    playBtn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
    seek.addEventListener('click', function (e) {
      if (!ytPlayer || !ytPlayer.getDuration) return;
      var r = seek.getBoundingClientRect();
      var frac = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      ytPlayer.seekTo(frac * (ytPlayer.getDuration() || 0), true);
    });
    fsBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (document.fullscreenElement) { document.exitFullscreen(); }
      else if (wrap.requestFullscreen) { wrap.requestFullscreen(); }
    });

    function setPlaying(p) {
      playBtn.textContent = p ? '⏸' : '▶';
      center.style.display = p ? 'none' : 'flex';
    }
    function update() {
      try {
        if (ytPlayer && ytPlayer.getDuration) {
          var c = ytPlayer.getCurrentTime() || 0, d = ytPlayer.getDuration() || 0;
          timeEl.textContent = fmtTime(c) + ' / ' + fmtTime(d);
          fill.style.width = (d ? (c / d) * 100 : 0) + '%';
        }
      } catch (e) {}
    }

    ensureYT(function () {
      try {
        ytPlayer = new YT.Player(frameId, {
          videoId: id, host: 'https://www.youtube-nocookie.com',
          playerVars: { controls: 0, rel: 0, modestbranding: 1, playsinline: 1, disablekb: 1, fs: 0 },
          events: {
            onReady: update,
            onStateChange: function (ev) { setPlaying(ev.data === 1); }
          }
        });
      } catch (e) {}
    });
    ytTimer = setInterval(update, 500);
  }

  // Modo caderno: ao digitar, pausa o vídeo e abre o caderno rápido.
  function setupNoteMode(lesson, btn, notesTa, getPlayer) {
    var on = localStorage.getItem('cadernoModo') === '1';
    var overlayOpen = false;

    function onKey(e) {
      if (overlayOpen) return;
      var ae = document.activeElement;
      if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (!e.key || e.key.length !== 1) return; // só teclas de escrita
      e.preventDefault();
      openNote(e.key);
    }

    function attach() {
      if (!noteKeyHandler) { noteKeyHandler = onKey; document.addEventListener('keydown', noteKeyHandler, true); }
    }

    function applyBtn() {
      if (!btn) return;
      btn.className = 'btn ' + (on ? 'success' : 'ghost') + ' small';
      btn.textContent = '📝 Modo caderno: ' + (on ? 'ligado' : 'desligado');
    }

    if (btn) btn.addEventListener('click', function () {
      on = !on;
      localStorage.setItem('cadernoModo', on ? '1' : '0');
      applyBtn();
      if (on) { attach(); toast('Modo caderno ligado. Comece a digitar para anotar.'); }
      else { clearNoteMode(); toast('Modo caderno desligado.'); }
    });
    applyBtn();
    if (on) attach();

    function openNote(firstChar) {
      overlayOpen = true;
      var p = getPlayer && getPlayer();
      var t = 0;
      try { if (p && p.pauseVideo) { p.pauseVideo(); t = p.getCurrentTime ? p.getCurrentTime() : 0; } } catch (e) {}
      var stamp = fmtTime(t);
      var overlay = el('<div class="note-overlay"><div class="note-card">' +
        '<div class="note-head"><span>📝 Anotação rápida</span><span class="note-time">⏱ ' + stamp + '</span></div>' +
        '<textarea class="note-ta" placeholder="Escreva sua anotação..."></textarea>' +
        '<div class="note-hint">Enter para salvar e voltar ao vídeo · Shift+Enter para nova linha · Esc para cancelar</div>' +
        '</div></div>');
      (document.fullscreenElement || document.body).appendChild(overlay);
      var ta = overlay.querySelector('.note-ta');
      ta.value = firstChar === ' ' ? '' : firstChar;
      ta.focus();
      try { ta.setSelectionRange(ta.value.length, ta.value.length); } catch (e) {}

      function close(saveIt) {
        overlayOpen = false;
        if (saveIt) {
          var txt = ta.value.trim();
          if (txt) {
            var line = '[' + stamp + '] ' + txt;
            notesTa.value = notesTa.value ? (notesTa.value.replace(/\s+$/, '') + '\n' + line) : line;
            Store.updateLesson(lesson.id, { content: notesTa.value });
            toast('Anotação salva em ' + stamp + '.');
          }
        }
        overlay.remove();
        try { if (p && p.playVideo) p.playVideo(); } catch (e) {}
      }
      ta.addEventListener('keydown', function (ev) {
        if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); close(true); }
        else if (ev.key === 'Escape') { ev.preventDefault(); close(false); }
      });
      overlay.addEventListener('mousedown', function (ev) { if (ev.target === overlay) close(true); });
    }
  }

  // caderno (papel pautado + post-its)
  function buildNotebook(lesson, postits) {
    var notebook = el(
      '<div class="notebook">' +
        '<div class="notebook-top">' +
          '<span style="font-size:.8rem;color:var(--ink-3);font-weight:600">Caderno</span>' +
          '<div class="postit-tools"><span class="pt-label">Post-it:</span></div>' +
        '</div>' +
        '<div class="notebook-body"><div class="paper-area">' +
          '<textarea class="paper-text" placeholder="Escreva o conteúdo estudado...">' + esc(lesson.content || '') + '</textarea>' +
          '<div class="postit-layer"></div>' +
        '</div></div>' +
      '</div>'
    );
    var tools = notebook.querySelector('.postit-tools');
    var layer = notebook.querySelector('.postit-layer');
    POSTIT_COLORS.forEach(function (c) {
      var dot = el('<div class="color-dot" style="background:' + c + '" title="Adicionar post-it"></div>');
      dot.addEventListener('click', function () {
        postits.push({ id: Store.uid(), text: '', color: c, x: 24 + Math.random() * 90, y: 20 + Math.random() * 60, rot: Math.random() * 4 - 2 });
        drawPostits();
      });
      tools.appendChild(dot);
    });
    function drawPostits() {
      layer.innerHTML = '';
      postits.forEach(function (p) {
        var node = el('<div class="postit" style="left:' + p.x + 'px;top:' + p.y + 'px;background:' + p.color +
          ';transform:rotate(' + (p.rot || 0) + 'deg)"><button class="close" title="Remover">✕</button>' +
          '<textarea placeholder="anotação">' + esc(p.text) + '</textarea></div>');
        node.querySelector('textarea').addEventListener('input', function (e) { p.text = e.target.value; });
        node.querySelector('.close').addEventListener('click', function () {
          var i = postits.indexOf(p); if (i >= 0) postits.splice(i, 1); drawPostits();
        });
        makeDraggable(node, p, layer);
        layer.appendChild(node);
      });
    }
    drawPostits();
    return notebook;
  }

  function makeDraggable(node, model, bounds) {
    var sx, sy, ox, oy, dragging = false;
    function down(e) {
      if (e.target.tagName === 'TEXTAREA' || e.target.classList.contains('close')) return;
      dragging = true; node.classList.add('dragging');
      var pt = point(e); sx = pt.x; sy = pt.y; ox = model.x; oy = model.y; e.preventDefault();
      document.addEventListener('mousemove', move); document.addEventListener('mouseup', up);
      document.addEventListener('touchmove', move, { passive: false }); document.addEventListener('touchend', up);
    }
    function move(e) {
      if (!dragging) return;
      var pt = point(e);
      model.x = Math.max(0, Math.min(ox + (pt.x - sx), Math.max(0, bounds.clientWidth - node.offsetWidth)));
      model.y = Math.max(0, Math.min(oy + (pt.y - sy), Math.max(0, bounds.clientHeight - node.offsetHeight)));
      node.style.left = model.x + 'px'; node.style.top = model.y + 'px';
      if (e.cancelable) e.preventDefault();
    }
    function up() {
      dragging = false; node.classList.remove('dragging');
      document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up);
      document.removeEventListener('touchmove', move); document.removeEventListener('touchend', up);
    }
    function point(e) { return e.touches && e.touches[0] ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY }; }
    node.addEventListener('mousedown', down);
    node.addEventListener('touchstart', down, { passive: false });
  }

  // ===== RECORDAÇÃO ("você se lembra?") ===================================
  function renderRecall() {
    var ctx = recallCtx;
    if (!ctx) return go('module', { subjectId: state.subjectId, moduleId: state.moduleId });
    var back = el('<div class="back-link">← Voltar</div>');
    back.addEventListener('click', function () { go('module', { subjectId: ctx.subjectId, moduleId: ctx.moduleId }); });
    root.appendChild(back);

    var screen = el(
      '<div class="recall-screen">' +
        '<div class="big-emoji">🧠</div>' +
        '<h2>Você se lembra do que estudou?</h2>' +
        '<p class="lead">Escreva com suas palavras o que você lembra de <strong>' + esc(ctx.label) + '</strong>. Sem consultar.</p>' +
        '<textarea id="recallText" placeholder="Escreva aqui tudo que vem à memória..."></textarea>' +
        '<div class="q-actions" style="justify-content:center;margin-top:14px">' +
          '<button class="btn" id="checkRecall">Analisar</button>' +
        '</div>' +
        '<div id="recallResult"></div>' +
      '</div>'
    );
    root.appendChild(screen);
    screen.querySelector('#checkRecall').addEventListener('click', function () {
      var txt = screen.querySelector('#recallText').value;
      if (txt.trim().length < 10) { toast('Escreva um pouco mais para analisar.'); return; }
      var r = Recall.analyze(ctx.content, txt);
      var fb = Recall.feedback(r.score);
      Store.addRecall({ subjectId: ctx.subjectId, moduleId: ctx.moduleId, text: txt, score: r.score, matched: r.matched, missed: r.missed });
      var box = screen.querySelector('#recallResult');
      var ring = r.score >= 85 ? '#15a872' : r.score >= 65 ? '#2f80ed' : r.score >= 40 ? '#e0962a' : '#c0493e';
      box.innerHTML = '';
      box.appendChild(el(
        '<div style="margin-top:8px">' +
          '<div class="score-ring" style="background:linear-gradient(135deg,' + ring + ',' + shade(ring, -16) + ')">' +
            '<div class="num">' + r.score + '%</div><div class="lbl">recordação</div></div>' +
          '<div class="feedback-box"><div style="font-size:1.6rem">' + fb.emoji + '</div><h3>' + fb.title + '</h3><p>' + fb.message + '</p></div>' +
          '<div class="recall-cols">' +
            '<div class="col"><h4>✅ Você lembrou (' + r.matched.length + ')</h4><div class="chips">' +
              (r.matched.length ? r.matched.map(function (x) { return '<span class="chip hit">' + esc(x) + '</span>'; }).join('') : '<span class="rev-ans">—</span>') + '</div></div>' +
            '<div class="col"><h4>📌 Vale revisar (' + r.missed.length + ')</h4><div class="chips">' +
              (r.missed.length ? r.missed.slice(0, 20).map(function (x) { return '<span class="chip miss">' + esc(x) + '</span>'; }).join('') : '<span class="rev-ans">Nada faltou!</span>') + '</div></div>' +
          '</div>' +
        '</div>'
      ));
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ===== QUESTIONÁRIO ======================================================
  function _normKey(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
  }
  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  // Procura no banco de simulados prontos (window.SIMULADOS) as questões
  // do módulo pelo nome da matéria + título do módulo.
  function bankLookup(subjectName, moduleTitle) {
    var bank = window.SIMULADOS;
    if (!bank || !subjectName || !moduleTitle) return null;
    // tolera o prefixo "Noções de" (varia conforme a versão do importador)
    var sk = _normKey(subjectName).replace(/^noc(?:oes|ao) de /, '');
    var mods = bank[sk];
    if (!mods || !mods.length) return null;
    var mt = _normKey(moduleTitle).replace(/^modulo\s+\d+\s+/, ''); // tira "modulo N "
    for (var i = 0; i < mods.length; i++) {
      var k = mods[i].key;
      if (k && (mt.indexOf(k) !== -1 || k.indexOf(mt) !== -1)) return mods[i].questions;
    }
    return null;
  }

  function startQuiz(ctx) { quizCtx = ctx; go('quiz', { subjectId: ctx.subjectId, moduleId: ctx.moduleId }); }

  function renderQuiz() {
    var ctx = quizCtx;
    if (!ctx) return go('home');
    var back = el('<div class="back-link">← Voltar</div>');
    back.addEventListener('click', function () { go('module', { subjectId: ctx.subjectId, moduleId: ctx.moduleId }); });
    root.appendChild(back);

    var screen = el('<div class="quiz-screen"></div>');
    root.appendChild(screen);
    var questions, idx, scoreSum, review;

    // 1) banco de questões pronto (simulados oficiais da matéria);
    // 2) senão, gerador básico a partir do próprio texto do módulo.
    var banked = bankLookup(ctx.subjectName, ctx.moduleTitle);
    var fromBank = !!(banked && banked.length);
    questions = fromBank ? banked.slice() : Quiz.generate(ctx.content, { mc: 8, diss: 0, max: 8 });

    if (!questions.length) {
      screen.innerHTML = '<div style="text-align:center"><div style="font-size:2.4rem">📝</div>' +
        '<h2>Ainda não dá pra montar o simulado</h2><p style="color:var(--ink-3);margin-top:8px">' +
        'Adicione mais conteúdo nas aulas deste módulo.</p></div>';
      return;
    }
    if (fromBank) questions = shuffleArr(questions); // ordem varia a cada tentativa
    if (!fromBank) {
      root.insertBefore(el(
        '<div class="ai-note" style="margin:0 0 12px;padding:10px 14px;border-radius:12px;' +
        'background:#fff6e6;border:1px solid #ffe0a3;color:#8a5a00;font-size:.88rem;line-height:1.4">' +
        'ℹ️ Simulado básico, gerado a partir das suas anotações deste módulo.</div>'
      ), screen);
    }
    idx = 0; scoreSum = 0; review = [];
    renderQuestion();

    function shell() {
      var pct = Math.round((idx / questions.length) * 100);
      screen.innerHTML = '';
      screen.appendChild(el('<div class="quiz-progress"><span>' + esc(ctx.label || 'Questionário') +
        '</span><span>Questão ' + (idx + 1) + ' de ' + questions.length + '</span></div>'));
      screen.appendChild(el('<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>'));
    }
    function renderQuestion() { shell(); var q = questions[idx]; if (q.type === 'mc') renderMC(q); else renderDiss(q); }

    function renderMC(q) {
      screen.appendChild(el('<span class="q-type-badge mc">Múltipla escolha</span>'));
      screen.appendChild(el('<div class="q-text">' + esc(q.stem) + (q.concept ? ' <span class="concept">' + esc(q.concept) + '</span>:' : '') + '</div>'));
      var wrap = el('<div class="mc-options"></div>');
      var answered = false;
      // embaralha a ordem das alternativas a cada exibição (distribui a correta
      // de forma justa e muda a cada tentativa). order[pos] = índice original.
      var order = shuffleArr(q.options.map(function (_, i) { return i; }));
      var correctPos = order.indexOf(q.correctIndex);
      order.forEach(function (origIdx, pos) {
        var btn = el('<button class="mc-option"><span class="mc-letter">' + String.fromCharCode(65 + pos) + '</span><span class="mc-opt-text">' + esc(q.options[origIdx]) + '</span></button>');
        btn.addEventListener('click', function () {
          if (answered) return; answered = true;
          var r = Quiz.grade(q, origIdx); var credit = r.correct ? 1 : 0; scoreSum += credit;
          var all = wrap.querySelectorAll('.mc-option');
          all[correctPos].classList.add('correct');
          if (!r.correct) btn.classList.add('wrong');
          all.forEach(function (b) { b.disabled = true; });
          review.push({ type: 'mc', concept: q.concept || q.stem, correct: r.correct, credit: credit, chosenText: q.options[origIdx], correctText: q.options[q.correctIndex] });
          screen.appendChild(el('<div class="answer-feedback ' + (r.correct ? 'ok' : 'bad') + '" style="margin-top:16px"><h4>' +
            (r.correct ? '✅ Correta.' : '❌ A correta é a letra ' + String.fromCharCode(65 + correctPos) + '.') + '</h4>' +
            (q.explanation ? '<div style="margin-top:6px;font-size:.9rem;line-height:1.45">' + esc(q.explanation) + '</div>' : '') + '</div>'));
          screen.appendChild(nextBtn());
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
        wrap.appendChild(btn);
      });
      screen.appendChild(wrap);
    }

    function renderDiss(q) {
      screen.appendChild(el('<span class="q-type-badge diss">Dissertativa</span>'));
      screen.appendChild(el('<div class="q-text">' + esc(q.stem) + (q.concept ? ' <span class="concept">' + esc(q.concept) + '</span>:' : '') + '</div>'));
      var ta = el('<textarea class="q-input" placeholder="Desenvolva sua resposta..."></textarea>');
      screen.appendChild(ta);
      var actions = el('<div class="q-actions"></div>');
      var send = el('<button class="btn">Responder e ver gabarito</button>');
      actions.appendChild(send); screen.appendChild(actions);
      send.addEventListener('click', function () {
        if (ta.value.trim().length < 10) { toast('Desenvolva um pouco mais.'); return; }
        ta.disabled = true;
        send.remove(); showSelf(q, ta.value);
      });
      setTimeout(function () { ta.focus(); }, 50);
    }

    function showSelf(q, ans) {
      var r = Quiz.grade(q, ans);
      var extra = (typeof r.hit === 'number') ? 'Você mencionou cerca de <strong>' + r.hit + ' de ' + r.total + '</strong> ideias-chave. ' : '';
      var box = el('<div class="answer-feedback reveal" style="margin-top:16px"><h4>Resposta esperada:</h4>' +
        '<div class="reveal-note">' + esc(r.reveal || q.reveal || '') + '</div>' +
        '<p style="margin-top:12px;color:var(--ink-3);font-size:.86rem">' + extra + 'Como você avalia sua resposta?</p>' +
        '<div class="self-assess"><button class="btn success small" data-c="1">Respondi bem</button>' +
        '<button class="btn ghost small" data-c="0.5">Parcialmente</button>' +
        '<button class="btn ghost small" data-c="0">Preciso revisar</button></div></div>');
      screen.appendChild(box);
      box.querySelectorAll('.self-assess button').forEach(function (b) {
        b.addEventListener('click', function () {
          var c = parseFloat(b.getAttribute('data-c')); scoreSum += c;
          review.push({ type: 'diss', concept: q.concept || q.stem, credit: c, user: ans, selfLabel: c === 1 ? 'Respondi bem' : c === 0.5 ? 'Parcialmente' : 'Preciso revisar' });
          nextStep();
        });
      });
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    function nextBtn() {
      var w = el('<div class="q-actions"></div>');
      var b = el('<button class="btn">' + (idx + 1 < questions.length ? 'Próxima →' : 'Ver resultado') + '</button>');
      b.addEventListener('click', nextStep); w.appendChild(b); return w;
    }
    function nextStep() { idx++; if (idx < questions.length) { renderQuestion(); window.scrollTo({ top: 0, behavior: 'smooth' }); } else renderResult(); }

    function renderResult() {
      var score = Math.round((scoreSum / questions.length) * 100);
      var fb = Recall.feedback(score);
      var full = review.filter(function (r) { return r.credit === 1; }).length;
      var partial = review.filter(function (r) { return r.credit > 0 && r.credit < 1; }).length;
      var zero = review.filter(function (r) { return r.credit === 0; }).length;
      Store.addQuiz({ subjectId: ctx.subjectId, moduleId: ctx.moduleId, scope: ctx.scope, score: score, total: questions.length, correct: full });
      var ring = score >= 85 ? '#15a872' : score >= 65 ? '#2f80ed' : score >= 40 ? '#e0962a' : '#c0493e';
      screen.innerHTML = '';
      screen.appendChild(el('<div style="text-align:center"><div class="score-ring" style="background:linear-gradient(135deg,' + ring + ',' + shade(ring, -16) + ')">' +
        '<div class="num">' + score + '%</div><div class="lbl">nota</div></div>' +
        '<div class="feedback-box"><div style="font-size:1.6rem">' + fb.emoji + '</div><h3>' + fb.title + '</h3><p>' + fb.message + '</p></div>' +
        '<div class="summary-line">✅ ' + full + ' certa(s) · 🟡 ' + partial + ' parcial(is) · 📌 ' + zero + ' a revisar</div></div>'));
      var rev = el('<div class="quiz-review"><div class="section-title">Revisão</div></div>');
      review.forEach(function (r) {
        if (r.type === 'mc') {
          rev.appendChild(el('<div class="review-item"><span class="rev-icon">' + (r.correct ? '✅' : '❌') + '</span><div>' +
            '<div><strong>Múltipla escolha:</strong> ' + esc(r.concept) + '</div><div class="rev-ans">Você marcou: ' + esc(r.chosenText) + '</div>' +
            (r.correct ? '' : '<div class="rev-ans" style="color:#198a5f">Correta: ' + esc(r.correctText) + '</div>') + '</div></div>'));
        } else {
          var ic = r.credit === 1 ? '✅' : r.credit === 0.5 ? '🟡' : '📌';
          rev.appendChild(el('<div class="review-item"><span class="rev-icon">' + ic + '</span><div>' +
            '<div><strong>Dissertativa:</strong> ' + esc(r.concept) + ' <span class="rev-ans">(' + esc(r.selfLabel) + ')</span></div>' +
            '<div class="rev-ans">Sua resposta: ' + (r.user ? esc(r.user) : '—') + '</div></div></div>'));
        }
      });
      screen.appendChild(rev);
      var actions = el('<div class="q-actions" style="justify-content:center;margin-top:18px"></div>');
      var again = el('<button class="btn ghost">Refazer</button>');
      again.addEventListener('click', function () { startQuiz(ctx); });
      var done = el('<button class="btn">Voltar ao módulo</button>');
      done.addEventListener('click', function () { go('module', { subjectId: ctx.subjectId, moduleId: ctx.moduleId }); });
      actions.appendChild(again); actions.appendChild(done); screen.appendChild(actions);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // ===== IMPORTAÇÃO ========================================================
  function renderImport() {
    var subj = state.subjectId ? Store.getSubject(state.subjectId) : null;
    var back = el('<div class="back-link">← Voltar</div>');
    back.addEventListener('click', function () { subj ? go('subject', { subjectId: subj.id }) : go('home'); });
    root.appendChild(back);

    var screen = el(
      '<div class="import-screen">' +
        '<h2>📥 Importar conteúdo</h2>' +
        '<p class="lead">Cole o conteúdo de estudo (ou envie um arquivo). O sistema reconhece as matérias e organiza em módulos. Links do YouTube viram aulas de vídeo automaticamente.</p>' +
        '<textarea class="import-textarea" id="importText" placeholder="Cole aqui...&#10;&#10;Ex:&#10;Direito Constitucional&#10;Módulo 1 - Princípios&#10;A Constituição Federal de 1988...&#10;https://youtube.com/watch?v=..."></textarea>' +
        '<div class="import-hint">💡 Dica: deixe o nome de cada matéria em uma linha (ex.: <code>Direito Constitucional</code>) e separe os módulos com <code>Módulo 1</code>, <code>Aula 2</code>. Aceita texto, Word (.docx), PDF, .txt e .md.</div>' +
        '<div class="import-toolbar">' +
          '<button class="btn ghost" id="pickFile">📎 Enviar arquivo</button>' +
          '<button class="btn" id="analyzeBtn">Analisar</button>' +
        '</div>' +
        '<div id="importPreview"></div>' +
      '</div>'
    );
    root.appendChild(screen);
    var ta = screen.querySelector('#importText');

    screen.querySelector('#pickFile').addEventListener('click', function () {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt,.md,.markdown,.docx,.pdf,.csv,text/plain,application/pdf';
      input.addEventListener('change', function () {
        var file = input.files[0]; if (!file) return;
        if (/\.(docx|pdf)$/i.test(file.name)) toast('Lendo ' + file.name + '...');
        FileReaders.extractFile(file).then(function (text) {
          if (!text || !text.trim()) { toast('Não achei texto nesse arquivo.'); return; }
          ta.value = text.trim(); toast('Arquivo lido. Agora clique em Analisar.');
        }).catch(function (err) { toast(err.message || 'Não consegui ler o arquivo.'); });
      });
      input.click();
    });

    screen.querySelector('#analyzeBtn').addEventListener('click', function () {
      var text = ta.value.trim();
      if (text.length < 20) { toast('Cole um pouco mais de conteúdo.'); return; }
      renderImportPreview(screen.querySelector('#importPreview'), Importer.analyze(text).subjects);
    });
  }

  function renderImportPreview(container, detected) {
    container.innerHTML = '';
    if (!detected.length) {
      container.appendChild(el('<div class="empty-state"><div class="big">🤔</div><p>Não identifiquei matérias. Deixe o nome de cada matéria em uma linha.</p></div>'));
      return;
    }
    detected.forEach(function (s) { s.include = true; var ex = Store.findSubjectByName(s.name); s.existingId = ex ? ex.id : null; });
    container.appendChild(el('<div class="section-title" style="margin-top:22px">Veja o que entendi</div>'));
    var list = el('<div></div>');
    container.appendChild(list);

    function draw() {
      list.innerHTML = '';
      detected.forEach(function (s, si) {
        var card = el('<div class="detected-subject"><div class="detected-head">' +
          '<span class="d-emoji">' + (s.emoji || '📚') + '</span>' +
          '<input class="d-name" type="text" value="' + esc(s.name) + '" />' +
          '<span class="badge-tag ' + (s.existingId ? 'exist' : 'new') + '">' + (s.existingId ? 'já existe' : 'nova') + '</span>' +
          '<button class="mini-x">✕</button></div><div class="detected-modules"></div></div>');
        var nameInput = card.querySelector('.d-name');
        nameInput.addEventListener('input', function () {
          s.name = nameInput.value; var ex = Store.findSubjectByName(s.name); s.existingId = ex ? ex.id : null;
          var b = card.querySelector('.badge-tag'); b.className = 'badge-tag ' + (s.existingId ? 'exist' : 'new'); b.textContent = s.existingId ? 'já existe' : 'nova';
        });
        card.querySelector('.detected-head .mini-x').addEventListener('click', function () { detected.splice(si, 1); draw(); updateSummary(); });
        var mods = card.querySelector('.detected-modules');
        s.modules.forEach(function (m, mi) {
          var bits = [];
          if (m.content) bits.push('conteúdo');
          if (m.videos && m.videos.length) bits.push(m.videos.length + ' vídeo' + (m.videos.length === 1 ? '' : 's'));
          if (m.links && m.links.length) bits.push(m.links.length + ' link' + (m.links.length === 1 ? '' : 's'));
          var mod = el('<div class="detected-module"><div class="m-info"><div class="m-title">' + esc(m.title) + '</div>' +
            '<div class="m-preview">' + esc(bits.join(' · ') || 'vazio') + '</div></div><button class="mini-x">✕</button></div>');
          mod.querySelector('.mini-x').addEventListener('click', function () {
            s.modules.splice(mi, 1); if (!s.modules.length) detected.splice(si, 1); draw(); updateSummary();
          });
          mods.appendChild(mod);
        });
        list.appendChild(card);
      });
    }

    var summary = el('<div class="import-summary"></div>');
    var importBtn = el('<button class="btn success">Importar tudo</button>');
    var actions = el('<div class="q-actions" style="justify-content:center;margin-top:10px"></div>');
    actions.appendChild(importBtn);
    function updateSummary() {
      var nm = detected.reduce(function (a, s) { return a + s.modules.length; }, 0);
      summary.textContent = detected.length + ' matéria(s) · ' + nm + ' módulo(s) serão importados';
      importBtn.style.display = detected.length ? '' : 'none';
    }
    importBtn.addEventListener('click', function () {
      var ns = 0, nm = 0;
      detected.forEach(function (s) {
        if (!s.name || !s.modules.length) return;
        var ex = Store.findSubjectByName(s.name); var sid;
        if (ex) sid = ex.id; else { sid = Store.addSubject(s.name, s.color, s.emoji).id; ns++; }
        s.modules.forEach(function (m) {
          var mod = Store.addModule(sid, m.title); nm++;
          if (m.content && m.content.trim()) {
            Store.addLesson(mod.id, { type: 'texto', title: 'Conteúdo', content: m.content, links: m.links || [] });
          } else if (m.links && m.links.length) {
            Store.addLesson(mod.id, { type: 'texto', title: 'Material', content: '', links: m.links });
          }
          (m.videos || []).forEach(function (v, i) {
            Store.addLesson(mod.id, { type: 'video', title: (v.title && v.title.trim()) || ('Vídeo ' + (i + 1)), videoUrl: v.url });
          });
        });
      });
      toast('Importado! ' + ns + ' matéria(s) nova(s), ' + nm + ' módulo(s).');
      state.subjectId ? go('subject', { subjectId: state.subjectId }) : go('home');
    });
    container.appendChild(summary);
    container.appendChild(actions);
    draw(); updateSummary();
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ===== PERFIL / PROGRESSO ===============================================
  function renderProfile() {
    var u = Auth.currentUser();
    var st = Store.studyStats();

    var back = el('<div class="back-link">← Matérias</div>');
    back.addEventListener('click', function () { go('home'); });
    root.appendChild(back);

    root.appendChild(el(
      '<div class="page-head">' +
        '<div class="ph-icon" style="background:var(--primary)">👤</div>' +
        '<div><h2>' + esc(u ? u.name : 'Meu progresso') + '</h2>' +
          '<div class="ph-sub">Seu progresso e tempo de estudo</div></div>' +
      '</div>'
    ));

    // cartões de tempo
    root.appendChild(el('<div class="section-title">Tempo de estudo</div>'));
    root.appendChild(el(
      '<div class="stat-grid">' +
        statCard('Hoje', fmtDur(st.today), '📅') +
        statCard('Esta semana', fmtDur(st.week), '🗓️') +
        statCard('Este mês', fmtDur(st.month), '📆') +
        statCard('Total', fmtDur(st.total), '⏱️') +
      '</div>'
    ));

    // gráfico dos últimos 7 dias
    var maxSec = Math.max.apply(null, st.perDay.map(function (d) { return d.seconds; }).concat([1]));
    var bars = st.perDay.map(function (d) {
      var h = maxSec ? Math.round((d.seconds / maxSec) * 100) : 0;
      var isToday = d.date === st.perDay[st.perDay.length - 1].date;
      return '<div class="bar-col">' +
        '<div class="bar-val">' + (d.seconds ? fmtDur(d.seconds) : '') + '</div>' +
        '<div class="bar-track"><div class="bar-fill' + (isToday ? ' today' : '') + '" style="height:' + Math.max(h, d.seconds ? 6 : 0) + '%"></div></div>' +
        '<div class="bar-lbl">' + d.label + '</div>' +
      '</div>';
    }).join('');
    root.appendChild(el('<div class="section-title" style="margin-top:22px">Últimos 7 dias</div>'));
    root.appendChild(el('<div class="week-chart">' + bars + '</div>'));

    // por matéria
    root.appendChild(el('<div class="section-title" style="margin-top:22px">Progresso por matéria</div>'));
    if (!st.perSubject.length) {
      root.appendChild(el('<div class="empty-state"><p>Nenhuma matéria ainda.</p></div>'));
      return;
    }
    var list = el('<div class="subj-stats"></div>');
    st.perSubject.forEach(function (s) {
      var row = el(
        '<div class="subj-stat">' +
          '<div class="ss-emoji" style="background:' + hexA(s.color, 0.14) + '">' + s.emoji + '</div>' +
          '<div class="ss-main">' +
            '<div class="ss-top"><span class="ss-name">' + esc(s.name) + '</span>' +
              '<span class="ss-hours">⏱️ ' + fmtDur(s.seconds) + '</span></div>' +
            '<div class="ss-prog"><div class="progress"><span style="width:' + s.pct + '%;background:' + s.color + '"></span></div>' +
              '<span class="progress-label">' + s.pct + '% · ' + s.done + '/' + s.total + ' aulas</span></div>' +
          '</div>' +
        '</div>'
      );
      row.addEventListener('click', function () { go('subject', { subjectId: s.id }); });
      list.appendChild(row);
    });
    root.appendChild(list);
  }

  function statCard(label, value, icon) {
    return '<div class="stat-card"><div class="stat-icon">' + icon + '</div>' +
      '<div class="stat-value">' + esc(value) + '</div><div class="stat-label">' + esc(label) + '</div></div>';
  }

  // ===== MODAIS ============================================================
  function openSubjectModal() {
    var selColor = SUBJECT_COLORS[0], selEmoji = SUBJECT_EMOJIS[0];
    var overlay = el('<div class="modal-overlay"></div>');
    var modal = el('<div class="modal"><h3>Nova matéria</h3>' +
      '<div class="field"><label>Nome</label><input type="text" id="subjName" placeholder="Ex: Direito Penal" /></div>' +
      '<div class="field"><label>Ícone</label><div class="emoji-pick"></div></div>' +
      '<div class="field"><label>Cor</label><div class="color-pick"></div></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="cancel">Cancelar</button><button class="btn" id="create">Criar</button></div></div>');
    overlay.appendChild(modal);
    var ep = modal.querySelector('.emoji-pick');
    SUBJECT_EMOJIS.forEach(function (em, i) {
      var sp = el('<span' + (i === 0 ? ' class="sel"' : '') + '>' + em + '</span>');
      sp.addEventListener('click', function () { ep.querySelectorAll('span').forEach(function (x) { x.classList.remove('sel'); }); sp.classList.add('sel'); selEmoji = em; });
      ep.appendChild(sp);
    });
    var cp = modal.querySelector('.color-pick');
    SUBJECT_COLORS.forEach(function (c, i) {
      var d = el('<div class="color-dot' + (i === 0 ? ' sel' : '') + '" style="background:' + c + '"></div>');
      d.addEventListener('click', function () { cp.querySelectorAll('.color-dot').forEach(function (x) { x.classList.remove('sel'); }); d.classList.add('sel'); selColor = c; });
      cp.appendChild(d);
    });
    function close() { overlay.remove(); }
    modal.querySelector('#cancel').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    modal.querySelector('#create').addEventListener('click', function () {
      var name = modal.querySelector('#subjName').value.trim();
      if (!name) { toast('Dê um nome à matéria.'); return; }
      Store.addSubject(name, selColor, selEmoji); close(); toast('Matéria criada.'); render();
    });
    document.body.appendChild(overlay);
    modal.querySelector('#subjName').focus();
  }

  function lessonModal(moduleId, type) {
    var overlay = el('<div class="modal-overlay"></div>');
    var modal = el('<div class="modal"><h3>Nova aula de vídeo</h3>' +
      '<div class="field"><label>Título</label><input type="text" id="lTitle" placeholder="Ex: Aula 1 — Introdução" /></div>' +
      '<div class="field"><label>Link do vídeo</label><input type="text" id="lUrl" placeholder="YouTube ou plataforma (ex.: Estratégia)" />' +
      '<div class="field-hint">YouTube toca aqui dentro (com Modo caderno). Link de plataforma vira botão "Assistir".</div></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="cancel">Cancelar</button><button class="btn" id="create">Adicionar</button></div></div>');
    overlay.appendChild(modal);
    function close() { overlay.remove(); }
    modal.querySelector('#cancel').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    modal.querySelector('#create').addEventListener('click', function () {
      var title = modal.querySelector('#lTitle').value.trim() || 'Aula de vídeo';
      var url = modal.querySelector('#lUrl').value.trim();
      var l = Store.addLesson(moduleId, { type: type, title: title, videoUrl: url });
      close();
      go('lesson', { subjectId: state.subjectId, moduleId: moduleId, lessonId: l.id });
    });
    document.body.appendChild(overlay);
    modal.querySelector('#lTitle').focus();
  }

  function promptModal(title, label, placeholder, onOk) {
    var overlay = el('<div class="modal-overlay"></div>');
    var modal = el('<div class="modal"><h3>' + esc(title) + '</h3>' +
      '<div class="field"><label>' + esc(label) + '</label><input type="text" id="pmInput" placeholder="' + esc(placeholder) + '" /></div>' +
      '<div class="modal-actions"><button class="btn ghost" id="cancel">Cancelar</button><button class="btn" id="ok">Criar</button></div></div>');
    overlay.appendChild(modal);
    function close() { overlay.remove(); }
    function ok() { var v = modal.querySelector('#pmInput').value.trim(); if (!v) { toast('Digite um nome.'); return; } close(); onOk(v); }
    modal.querySelector('#cancel').addEventListener('click', close);
    modal.querySelector('#ok').addEventListener('click', ok);
    modal.querySelector('#pmInput').addEventListener('keydown', function (e) { if (e.key === 'Enter') ok(); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.body.appendChild(overlay);
    modal.querySelector('#pmInput').focus();
  }

  function confirmModal(title, message, onYes) {
    var overlay = el('<div class="modal-overlay"></div>');
    var modal = el('<div class="modal"><h3>' + esc(title) + '</h3>' +
      '<p style="color:var(--ink-2);margin-bottom:6px">' + esc(message) + '</p>' +
      '<div class="modal-actions"><button class="btn ghost" id="no">Cancelar</button><button class="btn danger" id="yes">Confirmar</button></div></div>');
    overlay.appendChild(modal);
    function close() { overlay.remove(); }
    modal.querySelector('#no').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    modal.querySelector('#yes').addEventListener('click', function () { close(); onYes(); });
    document.body.appendChild(overlay);
  }

  // ===== BACKUP ============================================================
  function exportBackup() {
    var blob = new Blob([Store.exportJSON()], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'estudos-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    toast('Backup salvo.');
  }
  function importBackup() {
    var input = document.createElement('input'); input.type = 'file'; input.accept = 'application/json,.json';
    input.addEventListener('change', function () {
      var f = input.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () { try { Store.importJSON(r.result); toast('Backup restaurado.'); go('home'); } catch (e) { toast('Arquivo inválido.'); } };
      r.readAsText(f);
    });
    input.click();
  }

  // ===== LOGIN =============================================================
  // ===== CONTA / SESSÃO (local ou nuvem) ==================================
  var cloudReady = false;      // true só após Cloud.init() com sucesso
  var accountName = '';        // nome exibido no topo
  var lastSyncAt = null;       // updated_at da última sincronização

  function debounce(fn, ms) {
    var t = null;
    return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  function renderLogin() {
    clearNoteMode(); clearPlayer(); studyStop();
    root.innerHTML = '';
    var cloud = cloudReady;
    var mode = (!cloud && Auth.userCount() === 0) ? 'register' : 'login';
    var card = el(
      '<div class="auth-screen"><div class="auth-card">' +
        '<div class="auth-logo">📚</div><h1>Cantinho de Estudos</h1>' +
        '<p class="auth-sub">Entre para acessar seus estudos' + (cloud ? ' de qualquer lugar' : '') + '</p>' +
        '<div class="auth-tabs"><button class="auth-tab" data-tab="login">Entrar</button>' +
        '<button class="auth-tab" data-tab="register">Criar conta</button></div>' +
        '<div id="authForm"></div></div>' +
        '<div class="auth-foot">' + (cloud ? '🔒 Seus dados ficam salvos na nuvem.' : 'Sua plataforma de estudos pessoal.') + '</div></div>'
    );
    root.appendChild(card);
    var formBox = card.querySelector('#authForm');
    function setTab(m) { mode = m; card.querySelectorAll('.auth-tab').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-tab') === m); }); drawForm(); }
    card.querySelectorAll('.auth-tab').forEach(function (b) { b.addEventListener('click', function () { setTab(b.getAttribute('data-tab')); }); });

    var idLabel = cloud ? 'E-mail' : 'Usuário';
    var idPlaceholder = cloud ? 'seu@email.com' : 'ex: maria';

    function drawForm() {
      if (mode === 'register') {
        formBox.innerHTML =
          '<div class="field"><label>Seu nome</label><input type="text" id="rgName" placeholder="Como quer ser chamada(o)?" /></div>' +
          '<div class="field"><label>' + idLabel + '</label><input type="text" id="rgUser" placeholder="' + idPlaceholder + '" autocapitalize="none" /></div>' +
          '<div class="field"><label>Senha</label><input type="password" id="rgPass" placeholder="crie uma senha" /></div>' +
          '<div class="field"><label>Confirmar senha</label><input type="password" id="rgPass2" placeholder="repita a senha" /></div>' +
          '<button class="btn block" id="rgBtn">Criar conta</button>';
        var rg = formBox.querySelector('#rgBtn');
        function doReg() {
          var name = formBox.querySelector('#rgName').value;
          var idv = formBox.querySelector('#rgUser').value;
          var p = formBox.querySelector('#rgPass').value, p2 = formBox.querySelector('#rgPass2').value;
          if (p !== p2) { toast('As senhas não bateram.'); return; }
          if (cloud && p.length < 6) { toast('A senha precisa de ao menos 6 caracteres.'); return; }
          rg.disabled = true; rg.textContent = 'Criando...';
          var op = cloud ? Cloud.signUp(name, idv.trim(), p) : Auth.register(name, idv, p);
          op.then(function (acct) { onLoggedIn(cloud ? acct : Auth.currentUser()); })
            .catch(function (e) {
              if (e && e.code === 'CONFIRM') {
                toast('Conta criada! Confirme pelo e-mail e depois entre.');
                setTab('login'); return;
              }
              toast(e.message || 'Erro'); rg.disabled = false; rg.textContent = 'Criar conta';
            });
        }
        rg.addEventListener('click', doReg);
        formBox.querySelector('#rgPass2').addEventListener('keydown', function (e) { if (e.key === 'Enter') doReg(); });
        formBox.querySelector('#rgName').focus();
      } else {
        formBox.innerHTML =
          '<div class="field"><label>' + idLabel + '</label><input type="text" id="lgUser" placeholder="' + idPlaceholder + '" autocapitalize="none" /></div>' +
          '<div class="field"><label>Senha</label><input type="password" id="lgPass" placeholder="sua senha" /></div>' +
          '<button class="btn block" id="lgBtn">Entrar</button>';
        var lg = formBox.querySelector('#lgBtn');
        function doLogin() {
          var idv = formBox.querySelector('#lgUser').value;
          var p = formBox.querySelector('#lgPass').value;
          lg.disabled = true; lg.textContent = 'Entrando...';
          var op = cloud ? Cloud.signIn(idv.trim(), p) : Auth.login(idv, p);
          op.then(function (acct) { onLoggedIn(cloud ? acct : Auth.currentUser()); })
            .catch(function (e) { toast(e.message || 'Erro'); lg.disabled = false; lg.textContent = 'Entrar'; });
        }
        lg.addEventListener('click', doLogin);
        formBox.querySelector('#lgPass').addEventListener('keydown', function (e) { if (e.key === 'Enter') doLogin(); });
        formBox.querySelector('#lgUser').focus();
      }
    }
    setTab(mode);
  }

  // ----- sincronização com a nuvem ---------------------------------------
  function pushNow() {
    if (!cloudReady) return Promise.resolve();
    return Cloud.push(Store.snapshot()).then(function (ts) { if (ts) lastSyncAt = ts; }).catch(function () {});
  }
  var pushDebounced = debounce(function () { pushNow(); }, 1200);

  function enableAutoPush() {
    window.__onStoreSaved = function () { pushDebounced(); };
  }
  function syncPull() {
    return Cloud.pull().then(function (row) {
      if (row && row.data) {
        Store.writeRaw(row.data);
        lastSyncAt = row.updated_at || null;
      } else {
        return pushNow(); // nuvem vazia → envia o que há local (seed)
      }
    });
  }

  function showBootLoading(msg) {
    document.getElementById('topbar').classList.add('hidden');
    root.innerHTML = '<div class="auth-screen"><div style="text-align:center"><div class="spinner"></div>' +
      '<p style="margin-top:14px;color:var(--ink-2)">' + esc(msg || 'Carregando...') + '</p></div></div>';
  }

  function onLoggedIn(acct) {
    if (!acct) { showLogin(); return; }
    window.__userId = acct.id;
    accountName = acct.name || 'Você';
    if (cloudReady) {
      enableAutoPush();
      showBootLoading('Carregando seus dados...');
      syncPull().then(function () { showApp(); })
        .catch(function () { toast('Não consegui buscar da nuvem; usando dados locais.'); showApp(); });
    } else {
      showApp();
    }
  }

  // ===== botões do topo + início ==========================================
  document.getElementById('homeBtn').addEventListener('click', function () { go('home'); });
  document.getElementById('profileBtn').addEventListener('click', function () { go('profile'); });
  document.getElementById('importContentBtn').addEventListener('click', function () { go('import', { subjectId: null }); });
  document.getElementById('exportBtn').addEventListener('click', exportBackup);
  document.getElementById('importBtn').addEventListener('click', importBackup);
  document.getElementById('logoutBtn').addEventListener('click', function () {
    confirmModal('Sair da conta?', 'Seus estudos continuam salvos.', function () {
      studyStop();
      if (cloudReady) { pushNow().then(function () { return Cloud.signOut(); }).then(done).catch(done); }
      else { Auth.logout(); done(); }
      function done() { window.__userId = null; window.__onStoreSaved = null; showLogin(); }
    });
  });

  // sincroniza da nuvem ao voltar o foco (fora das telas de edição)
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'visible' || !cloudReady || !Cloud.account()) return;
    if (['lesson', 'quiz', 'recall', 'import'].indexOf(state.view) !== -1) return;
    Cloud.pull().then(function (row) {
      if (row && row.updated_at && row.updated_at !== lastSyncAt) {
        Store.writeRaw(row.data); lastSyncAt = row.updated_at; render();
      }
    }).catch(function () {});
  });

  function showApp() {
    document.getElementById('topbar').classList.remove('hidden');
    var chip = document.getElementById('userChip');
    if (chip) chip.textContent = accountName || (currentAccount() ? currentAccount().name : '');
    try { Store.cleanupImportArtifacts(); } catch (e) {} // limpa sobras de import antigo
    go('home');
  }
  function showLogin() { document.getElementById('topbar').classList.add('hidden'); renderLogin(); }
  function currentAccount() { return cloudReady ? Cloud.account() : Auth.currentUser(); }

  // ----- início -----
  if (Cloud.enabled()) {
    showBootLoading('Conectando...');
    Cloud.init().then(function (acct) {
      cloudReady = true;
      if (acct) onLoggedIn(acct); else showLogin();
    }).catch(function (e) {
      toast('Nuvem indisponível (' + (e.message || 'erro') + '). Usando modo local.');
      cloudReady = false;
      if (Auth.isLoggedIn()) onLoggedIn(Auth.currentUser()); else showLogin();
    });
  } else {
    if (Auth.isLoggedIn()) onLoggedIn(Auth.currentUser()); else showLogin();
  }
})();
