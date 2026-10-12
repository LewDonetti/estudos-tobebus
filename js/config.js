/* =========================================================================
 * config.js — Configuração da nuvem (contas em qualquer dispositivo)
 *
 * Preenchido com o projeto Supabase "cantinho-estudos".
 * Estes dois valores são PÚBLICOS e seguros de ficar aqui: a chave
 * "publishable" é feita para o navegador; a segurança real é garantida
 * pelas regras do banco (RLS). Veja supabase/README.md.
 *
 * Para voltar ao modo local (sem nuvem), deixe os dois em branco.
 * ========================================================================= */

window.APP_CONFIG = {
  SUPABASE_URL: 'https://dqifxbaejgsehognouoq.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_pG_KaTdFp3qYYYqe6hyI0Q_pS4_Yq32'
};

window.CloudEnabled = function () {
  return !!(window.APP_CONFIG && window.APP_CONFIG.SUPABASE_URL && window.APP_CONFIG.SUPABASE_ANON_KEY);
};
