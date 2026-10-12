/* =========================================================================
 * config.js — Configuração da nuvem (contas em qualquer dispositivo)
 *
 * Preencha com os dados do SEU projeto Supabase para ligar a nuvem.
 * Deixe em branco para usar contas locais (sem nuvem) — útil para testar.
 *
 * Esses dois valores são PÚBLICOS e seguros de ficar aqui (a "anon key" é
 * feita para o navegador; a segurança real é garantida pelas regras do
 * banco — RLS). Veja supabase/README.md para o passo a passo.
 * ========================================================================= */

window.APP_CONFIG = {
  SUPABASE_URL: '',       // ex.: https://xxxxxxxx.supabase.co
  SUPABASE_ANON_KEY: ''   // a chave "anon public"
};

window.CloudEnabled = function () {
  return !!(window.APP_CONFIG && window.APP_CONFIG.SUPABASE_URL && window.APP_CONFIG.SUPABASE_ANON_KEY);
};
