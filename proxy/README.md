# Proxy seguro da IA (Cloudflare Workers)

Este proxy guarda a **chave da API da Anthropic em segredo no servidor**, para
que ela **nunca** apareça no navegador. O site chama o proxy; o proxy adiciona
a chave e repassa para a Claude.

É de graça para o uso de vocês (o plano gratuito da Cloudflare cobre 100.000
requisições por dia) e leva uns 10 minutos para publicar.

---

## Opção A — Pelo painel da Cloudflare (sem instalar nada) ✅ recomendada

1. Crie uma conta grátis em **https://dash.cloudflare.com** (se ainda não tiver).
2. No menu lateral, vá em **Workers & Pages** → **Create** → **Create Worker**.
3. Dê um nome (ex.: `caderno-ia-proxy`) e clique **Deploy** (ele cria um Worker
   de exemplo).
4. Clique em **Edit code**. Apague tudo e **cole o conteúdo de
   `cloudflare-worker.js`** (que está nesta pasta). Clique **Deploy**.
5. Configure as variáveis em **Settings** → **Variables and Secrets**:
   - **ANTHROPIC_API_KEY** → clique *Add*, tipo **Secret**, valor = sua chave
     `sk-ant-...` (pegue em https://console.anthropic.com → *API Keys*).
   - **ALLOWED_ORIGIN** → tipo **Text**, valor = o endereço do site. Ex.:
     `https://SEU-USUARIO.github.io` (sem barra no final). Pode colocar vários
     separados por vírgula. Use `*` só para testar.
   - **ACCESS_TOKEN** *(opcional, recomendado)* → tipo **Secret**, invente uma
     senha qualquer (ex.: um texto aleatório). Isso impede que alguém que
     descubra a URL use seus créditos.
   - Clique **Deploy** de novo para aplicar.
6. Copie a URL do Worker (algo como
   `https://caderno-ia-proxy.SEU-SUBDOMINIO.workers.dev`).

Pronto! Agora é só configurar no app (seção **Configurar no site** abaixo).

---

## Opção B — Pela linha de comando (wrangler)

Precisa do Node instalado.

```bash
cd proxy
# edite wrangler.toml e troque ALLOWED_ORIGIN pelo endereço do seu site
npx wrangler login
npx wrangler secret put ANTHROPIC_API_KEY   # cole a chave sk-ant-... quando pedir
npx wrangler secret put ACCESS_TOKEN        # (opcional) invente uma senha
npx wrangler deploy
```

No final ele mostra a URL publicada (…​.workers.dev).

---

## Configurar no site

1. Abra o **Cantinho de Estudos** → botão **🤖 IA**.
2. Em **Modo**, escolha **IA (Claude)**.
3. Em **Como conectar**, escolha **Servidor (proxy)**.
4. Cole a **URL do Worker** no campo de URL.
5. Se você definiu `ACCESS_TOKEN`, cole o mesmo valor em **Token de acesso**.
6. Escolha o modelo, clique **Testar** e depois **Salvar**.

A partir daí, a chave fica só no servidor. 🔒

---

## Perguntas rápidas

**Preciso pagar?** O proxy em si é grátis (plano da Cloudflare). O que consome
créditos é o uso da **API da Anthropic** (cada questionário/correção) — essa
conta é da Anthropic, e dá para escolher o modelo mais barato (Haiku) no app.

**É seguro?** A chave fica como *secret* na Cloudflare (nunca no navegador nem
no código). O `ALLOWED_ORIGIN` limita quem pode chamar o proxy pelo navegador,
e o `ACCESS_TOKEN` adiciona uma senha. Recomendo configurar os dois.

**Posso trocar a chave depois?** Sim: é só atualizar o secret
`ANTHROPIC_API_KEY` no painel (ou `wrangler secret put`) e dar *Deploy*.
