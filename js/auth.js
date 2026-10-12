/* =========================================================================
 * auth.js — Contas e login (vários usuários)
 *
 * Cada pessoa cria sua conta e vê só os estudos dela. As contas ficam
 * salvas neste navegador (localStorage). A senha NÃO é guardada: salvamos
 * apenas um "resumo" dela (hash PBKDF2 + salt), então ninguém lê a senha
 * olhando os dados salvos.
 *
 * IMPORTANTE (honestidade): isto é um login do lado do navegador — ótimo
 * para começar e para vários usuários no mesmo computador. Para um sistema
 * de verdade na internet (login em qualquer dispositivo, recuperação de
 * senha, segurança real), o próximo passo é um servidor com banco de dados.
 * A estrutura aqui já está pronta para trocar por isso depois.
 * ========================================================================= */

(function (global) {
  'use strict';

  var KEY = 'cadernoAccounts:v1';
  var ITER = 100000;

  function load() {
    try {
      var raw = global.localStorage.getItem(KEY);
      if (!raw) return { users: [], currentUserId: null };
      var d = JSON.parse(raw);
      if (!d.users) d.users = [];
      return d;
    } catch (e) {
      return { users: [], currentUserId: null };
    }
  }

  function save(d) {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(d));
    } catch (e) {}
  }

  function uid() {
    return 'u-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }

  function normUser(u) {
    return (u || '').trim().toLowerCase();
  }

  function toHex(buf) {
    var b = new Uint8Array(buf);
    var s = '';
    for (var i = 0; i < b.length; i++) {
      s += ('0' + b[i].toString(16)).slice(-2);
    }
    return s;
  }

  function randomSalt() {
    var a = new Uint8Array(16);
    (global.crypto || {}).getRandomValues
      ? global.crypto.getRandomValues(a)
      : a.forEach(function (_, i) { a[i] = Math.floor(Math.random() * 256); });
    return toHex(a);
  }

  function hexToBytes(hex) {
    var a = new Uint8Array(hex.length / 2);
    for (var i = 0; i < a.length; i++) {
      a[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return a;
  }

  // Deriva o hash da senha (PBKDF2). Se o navegador não tiver crypto.subtle
  // (contexto não seguro), usa um hash simples só para não quebrar.
  function hashPassword(password, saltHex) {
    var subtle = global.crypto && global.crypto.subtle;
    if (!subtle) {
      return Promise.resolve('plain$' + simpleHash(saltHex + ':' + password));
    }
    var enc = new TextEncoder();
    return subtle
      .importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
      .then(function (keyMaterial) {
        return subtle.deriveBits(
          {
            name: 'PBKDF2',
            salt: hexToBytes(saltHex),
            iterations: ITER,
            hash: 'SHA-256'
          },
          keyMaterial,
          256
        );
      })
      .then(function (bits) {
        return 'pbkdf2$' + toHex(bits);
      });
  }

  function simpleHash(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) {
      h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
    }
    return h.toString(16);
  }

  var Auth = {
    isLoggedIn: function () {
      return !!this.currentUser();
    },

    currentUser: function () {
      var d = load();
      if (!d.currentUserId) return null;
      return d.users.filter(function (u) {
        return u.id === d.currentUserId;
      })[0] || null;
    },

    userCount: function () {
      return load().users.length;
    },

    // Cria uma conta e já entra nela. Retorna Promise<user>.
    register: function (name, username, password) {
      var d = load();
      var un = normUser(username);
      if (!name || !name.trim()) return Promise.reject(new Error('Coloque seu nome.'));
      if (un.length < 3) return Promise.reject(new Error('Usuário precisa de ao menos 3 letras.'));
      if ((password || '').length < 4) return Promise.reject(new Error('Senha precisa de ao menos 4 caracteres.'));
      if (d.users.some(function (u) { return u.username === un; })) {
        return Promise.reject(new Error('Esse usuário já existe. Tente outro.'));
      }
      var salt = randomSalt();
      return hashPassword(password, salt).then(function (hash) {
        var user = {
          id: uid(),
          name: name.trim(),
          username: un,
          salt: salt,
          hash: hash,
          createdAt: new Date().toISOString()
        };
        d.users.push(user);
        d.currentUserId = user.id;
        save(d);
        return user;
      });
    },

    // Faz login. Retorna Promise<user>.
    login: function (username, password) {
      var d = load();
      var un = normUser(username);
      var user = d.users.filter(function (u) { return u.username === un; })[0];
      if (!user) return Promise.reject(new Error('Usuário não encontrado.'));
      return hashPassword(password, user.salt).then(function (hash) {
        if (hash !== user.hash) throw new Error('Senha incorreta.');
        d.currentUserId = user.id;
        save(d);
        return user;
      });
    },

    logout: function () {
      var d = load();
      d.currentUserId = null;
      save(d);
    }
  };

  global.Auth = Auth;
})(window);
