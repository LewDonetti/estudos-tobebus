/* =========================================================================
 * app.js — Interface e navegação da plataforma de estudos
 * ========================================================================= */

(function () {
  'use strict';

  var root = document.getElementById('app');

  // cores disponíveis para matérias e post-its
  var SUBJECT_COLORS = [
    '#ff7eb6', '#b57edc', '#7eb6ff', '#70d6a3',
    '#ffb570', '#ff9eb5', '#70d9ff', '#c3a6ff'
  ];
  var SUBJECT_EMOJIS = [
    '📖', '🔢', '🧩', '⚖️', '🏛️', '💻', '🌍', '📝',
    '🧠', '📐', '🔬', '🗺️', '💡', '✏️', '📚', '🎯'
  ];
  var POSTIT_COLORS = [
    '#fff9a8', '#ffd1dc', '#c8f7d4', '#cfe8ff', '#e6d4ff', '#ffe0b3'
  ];

  // estado de navegação simples
  var state = { view: 'home', subjectId: null, sessionId: null };

  // ----- helpers ----------------------------------------------------------

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function esc(s) {
    return (s || '').replace(/[&<>"']/g, function (c) {
      return {
        '&': '&amp;', '<': '&lt;', '>': '&gt;',
        '"': '&quot;', "'": '&#39;'
      }[c];
    });
  }

  function fmtDate(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'short', year: 'numeric'
      });
    } catch (e) {
      return '';
    }
  }

  function daysBetween(iso) {
    var d = new Date(iso);
    var diff = Date.now() - d.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) {
      t = el('<div class="toast"></div>');
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function () {
      t.classList.remove('show');
    }, 2200);
  }

  function go(view, subjectId, sessionId) {
    state.view = view;
    state.subjectId = subjectId || null;
    state.sessionId = sessionId || null;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== RENDER PRINCIPAL ==================================================

  function render() {
    root.innerHTML = '';
    if (state.view === 'home') return renderHome();
    if (state.view === 'subject') return renderSubject();
    if (state.view === 'recall') return renderRecall();
    if (state.view === 'notebook') return renderNotebook();
  }

  // ===== HOME: grade de matérias ==========================================

  function renderHome() {
    var subjects = Store.getSubjects();

    var grid = el('<div class="subjects-grid"></div>');

    subjects.forEach(function (s) {
      var sessions = Store.getSessions(s.id);
      var card = el(
        '<div class="subject-card">' +
          '<div class="bar" style="background:' + s.color + '"></div>' +
          '<button class="del" title="Remover matéria">✕</button>' +
          '<span class="emoji">' + s.emoji + '</span>' +
          '<h3>' + esc(s.name) + '</h3>' +
          '<div class="meta">' +
            (sessions.length
              ? sessions.length + ' caderno' + (sessions.length > 1 ? 's' : '')
              : 'Ainda sem cadernos') +
          '</div>' +
        '</div>'
      );
      card.addEventListener('click', function () {
        go('subject', s.id);
      });
      card.querySelector('.del').addEventListener('click', function (e) {
        e.stopPropagation();
        confirmModal(
          'Remover "' + s.name + '"?',
          'Isso apaga também todos os cadernos dessa matéria. Tem certeza?',
          function () {
            Store.deleteSubject(s.id);
            toast('Matéria removida.');
            render();
          }
        );
      });
      grid.appendChild(card);
    });

    // card de adicionar
    var addCard = el(
      '<div class="subject-card add">' +
        '<span class="plus">＋</span>' +
        '<strong>Adicionar matéria</strong>' +
      '</div>'
    );
    addCard.addEventListener('click', openSubjectModal);
    grid.appendChild(addCard);

    root.appendChild(
      el(
        '<div class="section-title">💗 Suas matérias</div>'
      )
    );
    root.appendChild(grid);

    root.appendChild(
      el(
        '<div class="cute-footer">Feito com muito <span class="heart">❤</span> ' +
          'pra você estudar e arrasar nesse concurso. Você consegue! 🌷</div>'
      )
    );
  }

  // ===== PÁGINA DA MATÉRIA ================================================

  function renderSubject() {
    var s = Store.getSubject(state.subjectId);
    if (!s) return go('home');
    var sessions = Store.getSessions(s.id);

    var back = el('<div class="back-link">← Voltar para as matérias</div>');
    back.addEventListener('click', function () {
      go('home');
    });
    root.appendChild(back);

    var hero = el(
      '<div class="subject-hero" style="background:linear-gradient(135deg,' +
        s.color + ',' + shade(s.color, -18) + ')">' +
        '<div class="hero-emoji">' + s.emoji + '</div>' +
        '<div>' +
          '<h2>' + esc(s.name) + '</h2>' +
          '<p>' + sessions.length + ' caderno' +
            (sessions.length === 1 ? '' : 's') + ' guardado' +
            (sessions.length === 1 ? '' : 's') + '</p>' +
        '</div>' +
      '</div>'
    );
    root.appendChild(hero);

    // botões de ação
    var actions = el('<div class="notebook-actions" style="margin-bottom:22px"></div>');
    var startBtn = el(
      '<button class="btn lilac">🧠 Começar próximo módulo</button>'
    );
    startBtn.addEventListener('click', function () {
      // se já existe caderno anterior → tela de recordação primeiro
      if (Store.getLastSession(s.id)) {
        go('recall', s.id);
      } else {
        go('notebook', s.id);
      }
    });
    var newBtn = el('<button class="btn ghost">＋ Novo caderno direto</button>');
    newBtn.addEventListener('click', function () {
      go('notebook', s.id);
    });
    actions.appendChild(startBtn);
    actions.appendChild(newBtn);
    root.appendChild(actions);

    // timeline
    root.appendChild(el('<div class="section-title">📓 Seus cadernos</div>'));

    if (!sessions.length) {
      root.appendChild(
        el(
          '<div class="empty-state">' +
            '<div class="big">🌱</div>' +
            '<p>Nenhum caderno ainda. Que tal começar o primeiro módulo?</p>' +
          '</div>'
        )
      );
      return;
    }

    var timeline = el('<div class="timeline"></div>');
    sessions.forEach(function (sess) {
      var item = el(
        '<div class="session-item">' +
          '<div class="s-main">' +
            '<div class="s-badge" style="background:' + s.color + '">' +
              sess.module +
            '</div>' +
            '<div>' +
              '<div class="s-title">' + esc(sess.title) + '</div>' +
              '<div class="s-date">' + fmtDate(sess.createdAt) +
                ' · ' + preview(sess.content) + '</div>' +
            '</div>' +
          '</div>' +
          '<div style="color:var(--ink-soft)">›</div>' +
        '</div>'
      );
      item.addEventListener('click', function () {
        go('notebook', s.id, sess.id);
      });
      timeline.appendChild(item);
    });
    root.appendChild(timeline);
  }

  function preview(text) {
    var t = (text || '').replace(/\s+/g, ' ').trim();
    if (!t) return 'em branco';
    return t.length > 40 ? t.slice(0, 40) + '…' : t;
  }

  // ===== TELA "VOCÊ SE LEMBRA?" ===========================================

  function renderRecall() {
    var s = Store.getSubject(state.subjectId);
    var last = Store.getLastSession(state.subjectId);
    if (!s || !last) return go('subject', state.subjectId);

    var days = daysBetween(last.createdAt);
    var when =
      days <= 0 ? 'hoje mesmo' :
      days === 1 ? 'ontem' :
      'há ' + days + ' dias';

    var screen = el(
      '<div class="recall-screen">' +
        '<div class="big-emoji">🧠💭</div>' +
        '<h2>Você se lembra do que estudou?</h2>' +
        '<p class="lead">Antes de seguir, escreva com suas palavras tudo que ' +
          'você lembra do seu último caderno de <strong>' + esc(s.name) +
          '</strong> (estudado ' + when + '). Sem espiar! 😊</p>' +
        '<textarea id="recallText" placeholder="Pode escrever à vontade tudo ' +
          'que vem à sua memória..."></textarea>' +
        '<div class="notebook-actions" style="justify-content:center;margin-top:16px">' +
          '<button class="btn ghost" id="skipRecall">Pular e ir pro caderno</button>' +
          '<button class="btn mint" id="checkRecall">✨ Analisar o que lembrei</button>' +
        '</div>' +
        '<div id="recallResult"></div>' +
      '</div>'
    );
    root.appendChild(screen);

    var back = el('<div class="back-link" style="margin-top:14px">← Voltar</div>');
    back.addEventListener('click', function () {
      go('subject', state.subjectId);
    });
    root.appendChild(back);

    screen.querySelector('#skipRecall').addEventListener('click', function () {
      go('notebook', state.subjectId);
    });

    screen.querySelector('#checkRecall').addEventListener('click', function () {
      var text = screen.querySelector('#recallText').value;
      if (text.trim().length < 10) {
        toast('Escreva um pouquinho mais pra eu poder analisar 💛');
        return;
      }
      var result = Recall.analyze(last.content, text);
      var fb = Recall.feedback(result.score);

      // salva a tentativa
      Store.addRecall({
        subjectId: s.id,
        sessionId: last.id,
        text: text,
        score: result.score,
        matched: result.matched,
        missed: result.missed
      });

      renderRecallResult(screen.querySelector('#recallResult'), result, fb, s);
    });
  }

  function renderRecallResult(container, result, fb, subject) {
    var ringColor =
      result.score >= 85 ? '#70d6a3' :
      result.score >= 65 ? '#7eb6ff' :
      result.score >= 40 ? '#ffb570' : '#ff7eb6';

    container.innerHTML = '';
    var box = el(
      '<div class="result-card">' +
        '<div class="score-ring" style="background:linear-gradient(135deg,' +
          ringColor + ',' + shade(ringColor, -18) + ')">' +
          '<div class="num">' + result.score + '%</div>' +
          '<div class="lbl">de recordação</div>' +
        '</div>' +
        '<div class="feedback-box">' +
          '<div style="font-size:2rem">' + fb.emoji + '</div>' +
          '<h3>' + fb.title + '</h3>' +
          '<p>' + fb.message + '</p>' +
        '</div>' +
        '<div class="recall-cols">' +
          '<div class="col">' +
            '<h4>✅ Você lembrou (' + result.matched.length + ')</h4>' +
            '<div class="chips">' +
              (result.matched.length
                ? result.matched.map(function (m) {
                    return '<span class="chip hit">' + esc(m) + '</span>';
                  }).join('')
                : '<span class="s-date">—</span>') +
            '</div>' +
          '</div>' +
          '<div class="col">' +
            '<h4>📌 Vale revisar (' + result.missed.length + ')</h4>' +
            '<div class="chips">' +
              (result.missed.length
                ? result.missed.slice(0, 20).map(function (m) {
                    return '<span class="chip miss">' + esc(m) + '</span>';
                  }).join('')
                : '<span class="s-date">Nada faltou! 🎉</span>') +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="notebook-actions" style="justify-content:center">' +
          '<button class="btn ghost" id="reviewOld">📖 Reler caderno anterior</button>' +
          '<button class="btn" id="goNotebook">Continuar pro novo caderno →</button>' +
        '</div>' +
      '</div>'
    );
    container.appendChild(box);

    box.querySelector('#goNotebook').addEventListener('click', function () {
      go('notebook', subject.id);
    });
    box.querySelector('#reviewOld').addEventListener('click', function () {
      var last = Store.getLastSession(subject.id);
      go('notebook', subject.id, last.id);
    });

    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ===== CADERNO (editor) =================================================

  function renderNotebook() {
    var s = Store.getSubject(state.subjectId);
    if (!s) return go('home');

    var session = state.sessionId ? Store.getSession(state.sessionId) : null;
    var isNew = !session;
    if (isNew) {
      // objeto temporário em memória (salva só ao clicar em guardar)
      var count = Store.getSessions(s.id).length;
      session = {
        id: null,
        subjectId: s.id,
        module: count + 1,
        title: 'Módulo ' + (count + 1),
        content: '',
        postits: []
      };
    }

    // estado local dos post-its (clonado)
    var postits = JSON.parse(JSON.stringify(session.postits || []));

    var back = el('<div class="back-link">← Voltar</div>');
    back.addEventListener('click', function () {
      go('subject', s.id);
    });
    root.appendChild(back);

    var notebook = el(
      '<div class="notebook">' +
        '<div class="notebook-top">' +
          '<input class="title-input" type="text" value="' +
            esc(session.title) + '" placeholder="Título do caderno..." />' +
          '<div class="postit-tools">' +
            '<span style="font-size:.8rem;color:var(--ink-soft)">Post-it:</span>' +
          '</div>' +
        '</div>' +
        '<div class="notebook-body">' +
          '<div class="paper-area">' +
            '<textarea class="paper-text" placeholder="Escreva aqui tudo que ' +
              'você aprendeu hoje...">' + esc(session.content) + '</textarea>' +
            '<div class="postit-layer"></div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
    root.appendChild(notebook);

    // paleta de cores de post-it
    var tools = notebook.querySelector('.postit-tools');
    POSTIT_COLORS.forEach(function (c) {
      var dot = el('<div class="color-dot" style="background:' + c + '"></div>');
      dot.title = 'Adicionar post-it';
      dot.addEventListener('click', function () {
        var p = {
          id: Store.uid(),
          text: '',
          color: c,
          x: 30 + Math.random() * 120,
          y: 30 + Math.random() * 80,
          rot: (Math.random() * 8 - 4)
        };
        postits.push(p);
        drawPostits();
        toast('Post-it adicionado! Arraste para onde quiser 🎨');
      });
      tools.appendChild(dot);
    });

    var layer = notebook.querySelector('.postit-layer');

    function drawPostits() {
      layer.innerHTML = '';
      postits.forEach(function (p) {
        var node = el(
          '<div class="postit" style="left:' + p.x + 'px;top:' + p.y +
            'px;background:' + p.color + ';transform:rotate(' + (p.rot || 0) +
            'deg)">' +
            '<span class="pin">📌</span>' +
            '<button class="close" title="Remover">✕</button>' +
            '<textarea placeholder="anotação...">' + esc(p.text) + '</textarea>' +
          '</div>'
        );
        // editar texto
        node.querySelector('textarea').addEventListener('input', function (e) {
          p.text = e.target.value;
        });
        // remover
        node.querySelector('.close').addEventListener('click', function () {
          postits = postits.filter(function (x) {
            return x.id !== p.id;
          });
          drawPostits();
        });
        // arrastar
        makeDraggable(node, p, layer);
        layer.appendChild(node);
      });
    }
    drawPostits();

    // ações do caderno
    var actions = el('<div class="notebook-actions"></div>');
    var left = el('<div style="display:flex;gap:10px;flex-wrap:wrap"></div>');

    var saveBtn = el('<button class="btn mint">💾 Guardar caderno</button>');
    saveBtn.addEventListener('click', function () {
      var title = notebook.querySelector('.title-input').value.trim() ||
        'Módulo ' + session.module;
      var content = notebook.querySelector('.paper-text').value;
      var payload = { title: title, content: content, postits: postits };

      if (isNew) {
        var created = Store.addSession(s.id, payload);
        session = created;
        isNew = false;
        state.sessionId = created.id;
      } else {
        Store.updateSession(session.id, payload);
      }
      toast('Caderno guardado com carinho! 💾💛');
    });

    left.appendChild(saveBtn);

    if (!isNew && session.id) {
      var delBtn = el('<button class="btn danger small">🗑 Apagar</button>');
      delBtn.addEventListener('click', function () {
        confirmModal(
          'Apagar este caderno?',
          'Essa ação não pode ser desfeita.',
          function () {
            Store.deleteSession(session.id);
            toast('Caderno apagado.');
            go('subject', s.id);
          }
        );
      });
      left.appendChild(delBtn);
    }

    actions.appendChild(left);
    actions.appendChild(
      el('<div class="s-date">💡 Dica: escreva com suas palavras pra fixar melhor</div>')
    );
    root.appendChild(actions);
  }

  // arrastar post-it dentro da área
  function makeDraggable(node, model, bounds) {
    var startX, startY, origX, origY, dragging = false;

    function onDown(e) {
      // não arrasta quando clicando dentro do textarea para escrever
      if (e.target.tagName === 'TEXTAREA' || e.target.classList.contains('close')) {
        return;
      }
      dragging = true;
      node.classList.add('dragging');
      var pt = point(e);
      startX = pt.x;
      startY = pt.y;
      origX = model.x;
      origY = model.y;
      e.preventDefault();
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('touchend', onUp);
    }

    function onMove(e) {
      if (!dragging) return;
      var pt = point(e);
      var nx = origX + (pt.x - startX);
      var ny = origY + (pt.y - startY);
      var maxX = bounds.clientWidth - node.offsetWidth;
      var maxY = bounds.clientHeight - node.offsetHeight;
      model.x = Math.max(0, Math.min(nx, Math.max(0, maxX)));
      model.y = Math.max(0, Math.min(ny, Math.max(0, maxY)));
      node.style.left = model.x + 'px';
      node.style.top = model.y + 'px';
      if (e.cancelable) e.preventDefault();
    }

    function onUp() {
      dragging = false;
      node.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    }

    function point(e) {
      if (e.touches && e.touches[0]) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    }

    node.addEventListener('mousedown', onDown);
    node.addEventListener('touchstart', onDown, { passive: false });
  }

  // ===== MODAIS ===========================================================

  function openSubjectModal() {
    var selColor = SUBJECT_COLORS[0];
    var selEmoji = SUBJECT_EMOJIS[0];

    var overlay = el('<div class="modal-overlay"></div>');
    var modal = el(
      '<div class="modal">' +
        '<h3>✨ Nova matéria</h3>' +
        '<div class="field">' +
          '<label>Nome da matéria</label>' +
          '<input type="text" id="subjName" placeholder="Ex: Direito Penal" />' +
        '</div>' +
        '<div class="field">' +
          '<label>Escolha um ícone</label>' +
          '<div class="emoji-pick"></div>' +
        '</div>' +
        '<div class="field">' +
          '<label>Escolha uma cor</label>' +
          '<div class="color-pick"></div>' +
        '</div>' +
        '<div class="modal-actions">' +
          '<button class="btn ghost" id="cancel">Cancelar</button>' +
          '<button class="btn" id="create">Criar matéria</button>' +
        '</div>' +
      '</div>'
    );
    overlay.appendChild(modal);

    var ep = modal.querySelector('.emoji-pick');
    SUBJECT_EMOJIS.forEach(function (em, i) {
      var sp = el('<span' + (i === 0 ? ' class="sel"' : '') + '>' + em + '</span>');
      sp.addEventListener('click', function () {
        ep.querySelectorAll('span').forEach(function (x) {
          x.classList.remove('sel');
        });
        sp.classList.add('sel');
        selEmoji = em;
      });
      ep.appendChild(sp);
    });

    var cp = modal.querySelector('.color-pick');
    SUBJECT_COLORS.forEach(function (c, i) {
      var dot = el(
        '<div class="color-dot' + (i === 0 ? ' sel' : '') +
          '" style="background:' + c + '"></div>'
      );
      dot.addEventListener('click', function () {
        cp.querySelectorAll('.color-dot').forEach(function (x) {
          x.classList.remove('sel');
        });
        dot.classList.add('sel');
        selColor = c;
      });
      cp.appendChild(dot);
    });

    function close() {
      overlay.remove();
    }
    modal.querySelector('#cancel').addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    modal.querySelector('#create').addEventListener('click', function () {
      var name = modal.querySelector('#subjName').value.trim();
      if (!name) {
        toast('Dá um nome pra matéria 😊');
        return;
      }
      Store.addSubject(name, selColor, selEmoji);
      close();
      toast('Matéria criada! 🎉');
      render();
    });

    document.body.appendChild(overlay);
    modal.querySelector('#subjName').focus();
  }

  function confirmModal(title, message, onYes) {
    var overlay = el('<div class="modal-overlay"></div>');
    var modal = el(
      '<div class="modal">' +
        '<h3>' + esc(title) + '</h3>' +
        '<p style="color:var(--ink-soft);margin-bottom:8px">' + esc(message) + '</p>' +
        '<div class="modal-actions">' +
          '<button class="btn ghost" id="no">Cancelar</button>' +
          '<button class="btn danger" id="yes">Sim, confirmar</button>' +
        '</div>' +
      '</div>'
    );
    overlay.appendChild(modal);
    function close() {
      overlay.remove();
    }
    modal.querySelector('#no').addEventListener('click', close);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
    modal.querySelector('#yes').addEventListener('click', function () {
      close();
      onYes();
    });
    document.body.appendChild(overlay);
  }

  // ===== BACKUP (exportar / importar) =====================================

  function exportBackup() {
    var data = Store.exportJSON();
    var blob = new Blob([data], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var stamp = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = 'meus-estudos-backup-' + stamp + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast('Backup salvo! Guarde esse arquivo com carinho 💾');
  }

  function importBackup() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.addEventListener('change', function () {
      var file = input.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          Store.importJSON(reader.result);
          toast('Backup restaurado com sucesso! 🎉');
          go('home');
        } catch (e) {
          toast('Arquivo inválido 😕');
        }
      };
      reader.readAsText(file);
    });
    input.click();
  }

  // ===== util de cor (escurecer para gradiente) ===========================

  function shade(hex, percent) {
    var h = hex.replace('#', '');
    if (h.length === 3) {
      h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    }
    var r = parseInt(h.substr(0, 2), 16);
    var g = parseInt(h.substr(2, 2), 16);
    var b = parseInt(h.substr(4, 2), 16);
    r = Math.max(0, Math.min(255, Math.round(r + (r * percent) / 100)));
    g = Math.max(0, Math.min(255, Math.round(g + (g * percent) / 100)));
    b = Math.max(0, Math.min(255, Math.round(b + (b * percent) / 100)));
    return (
      '#' +
      [r, g, b]
        .map(function (v) {
          return ('0' + v.toString(16)).slice(-2);
        })
        .join('')
    );
  }

  // ===== liga os botões do topo ===========================================

  document.getElementById('homeBtn').addEventListener('click', function () {
    go('home');
  });
  document.getElementById('exportBtn').addEventListener('click', exportBackup);
  document.getElementById('importBtn').addEventListener('click', importBackup);

  // start
  render();
})();
