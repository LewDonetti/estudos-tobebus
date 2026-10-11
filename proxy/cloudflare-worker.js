/* =========================================================================
 * cloudflare-worker.js — Proxy seguro para a API da Claude (Anthropic)
 *
 * Fica entre o site "Cantinho de Estudos" e a API da Anthropic. A chave da
 * API fica GUARDADA EM SEGREDO no servidor (variável de ambiente), nunca no
 * navegador. O site chama este proxy; o proxy acrescenta a chave e repassa
 * para a Anthropic.
 *
 * Variáveis (configuradas no painel da Cloudflare, nunca no código):
 *   - ANTHROPIC_API_KEY  (secret, obrigatória)  → sua chave sk-ant-...
 *   - ALLOWED_ORIGIN     (var, recomendada)      → origem(ns) do site que
 *       podem usar o proxy, separadas por vírgula. Ex.:
 *       "https://seuusuario.github.io". Use "*" só para testes.
 *   - ACCESS_TOKEN       (secret, opcional)      → se definido, o site tem
 *       que enviar o mesmo valor no header "x-app-token". Evita que alguém
 *       que descubra a URL gaste seus créditos.
 *
 * Veja proxy/README.md para o passo a passo de publicação.
 * ========================================================================= */

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin, env);

    // Pre-flight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== 'POST') {
      return json({ error: { message: 'Método não permitido.' } }, 405, cors);
    }

    // Token de acesso opcional
    if (env.ACCESS_TOKEN) {
      const sent = request.headers.get('x-app-token') || '';
      if (!safeEqual(sent, env.ACCESS_TOKEN)) {
        return json({ error: { message: 'Não autorizado.' } }, 401, cors);
      }
    }

    if (!env.ANTHROPIC_API_KEY) {
      return json(
        { error: { message: 'Proxy sem ANTHROPIC_API_KEY configurada.' } },
        500,
        cors
      );
    }

    // Lê o corpo (o mesmo JSON que a API da Anthropic espera)
    let body;
    try {
      body = await request.text();
    } catch (e) {
      return json({ error: { message: 'Corpo inválido.' } }, 400, cors);
    }

    // (Opcional) rejeita corpos absurdamente grandes
    if (body.length > 200000) {
      return json({ error: { message: 'Requisição muito grande.' } }, 413, cors);
    }

    // Repassa para a Anthropic acrescentando a chave (server-side)
    let upstream;
    try {
      upstream = await fetch(ANTHROPIC_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': ANTHROPIC_VERSION
        },
        body
      });
    } catch (e) {
      return json(
        { error: { message: 'Falha ao falar com a Anthropic.' } },
        502,
        cors
      );
    }

    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: { ...cors, 'content-type': 'application/json' }
    });
  }
};

// ----- helpers -----------------------------------------------------------

function corsHeaders(origin, env) {
  const allow = (env.ALLOWED_ORIGIN || '*').split(',').map((s) => s.trim());
  let allowOrigin;
  if (allow.includes('*')) {
    allowOrigin = '*';
  } else if (origin && allow.includes(origin)) {
    allowOrigin = origin;
  } else {
    // origem não permitida → devolve a primeira da lista (o navegador bloqueia)
    allowOrigin = allow[0] || 'null';
  }
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type, x-app-token',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin'
  };
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { ...cors, 'content-type': 'application/json' }
  });
}

// comparação de tempo constante (evita timing attacks no token)
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
