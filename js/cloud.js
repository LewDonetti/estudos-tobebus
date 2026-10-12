/* =========================================================================
 * cloud.js — Contas e sincronização na nuvem (Supabase)
 *
 * Usa o Supabase para login seguro (e-mail + senha) e para guardar os dados
 * de cada usuário na nuvem, para acessar de qualquer dispositivo.
 *
 * Estratégia: offline-first. O app continua salvando no navegador (rápido e
 * funciona offline) e este módulo sincroniza com a nuvem — baixa ao entrar,
 * envia ao mudar. A segurança dos dados é garantida pelas regras do banco
 * (RLS): cada pessoa só acessa a própria linha.
 *
 * A biblioteca do Supabase é carregada só quando a nuvem está configurada.
 * ========================================================================= */

(function (global) {
  'use strict';

  var SB_CDN = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.0/dist/umd/supabase.js';
  var client = null;
  var account = null; // { id, name, email }

  function loadLib() {
    return new Promise(function (resolve, reject) {
      if (global.supabase && global.supabase.createClient) return resolve();
      var s = document.createElement('script');
      s.src = SB_CDN;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('Falha ao carregar a biblioteca da nuvem.')); };
      document.head.appendChild(s);
    });
  }

  function toAccount(user) {
    if (!user) return null;
    var name = (user.user_metadata && user.user_metadata.name) ||
      (user.email ? user.email.split('@')[0] : 'Usuário');
    return { id: user.id, name: name, email: user.email };
  }

  function traduz(msg) {
    msg = msg || '';
    if (/already registered|already been registered|already exists/i.test(msg)) return 'Esse e-mail já tem conta. Faça login.';
    if (/invalid login credentials/i.test(msg)) return 'E-mail ou senha incorretos.';
    if (/password should be at least/i.test(msg)) return 'A senha precisa de ao menos 6 caracteres.';
    if (/unable to validate email|invalid email/i.test(msg)) return 'E-mail inválido.';
    if (/email not confirmed/i.test(msg)) return 'Confirme seu e-mail antes de entrar.';
    return msg;
  }

  var Cloud = {
    enabled: function () { return global.CloudEnabled && global.CloudEnabled(); },
    account: function () { return account; },

    // carrega a lib, cria o client e verifica se já há sessão salva
    init: function () {
      return loadLib().then(function () {
        client = global.supabase.createClient(
          global.APP_CONFIG.SUPABASE_URL,
          global.APP_CONFIG.SUPABASE_ANON_KEY,
          { auth: { persistSession: true, autoRefreshToken: true } }
        );
        return client.auth.getSession();
      }).then(function (res) {
        var sess = res && res.data && res.data.session;
        account = sess ? toAccount(sess.user) : null;
        return account;
      });
    },

    signUp: function (name, email, password) {
      return client.auth.signUp({
        email: email, password: password, options: { data: { name: name } }
      }).then(function (res) {
        if (res.error) throw new Error(traduz(res.error.message));
        if (!res.data.session) { var e = new Error('CONFIRM'); e.code = 'CONFIRM'; throw e; }
        account = toAccount(res.data.user);
        return account;
      });
    },

    signIn: function (email, password) {
      return client.auth.signInWithPassword({ email: email, password: password })
        .then(function (res) {
          if (res.error) throw new Error(traduz(res.error.message));
          account = toAccount(res.data.user);
          return account;
        });
    },

    signOut: function () {
      account = null;
      return client ? client.auth.signOut() : Promise.resolve();
    },

    // baixa a linha do usuário { data, updated_at } ou null
    pull: function () {
      if (!client || !account) return Promise.resolve(null);
      return client.from('user_data').select('data,updated_at').eq('user_id', account.id).maybeSingle()
        .then(function (res) {
          if (res.error) throw new Error(res.error.message);
          return res.data || null;
        });
    },

    // envia (upsert) os dados do usuário
    push: function (data) {
      if (!client || !account) return Promise.resolve(null);
      return client.from('user_data').upsert(
        { user_id: account.id, data: data, updated_at: new Date().toISOString() },
        { onConflict: 'user_id' }
      ).then(function (res) {
        if (res.error) throw new Error(res.error.message);
        return new Date().toISOString();
      });
    }
  };

  global.Cloud = Cloud;
})(window);
