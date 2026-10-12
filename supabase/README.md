# Contas na nuvem (Supabase)

Com a nuvem ligada, cada pessoa cria conta com **e-mail e senha** e acessa
seus estudos de **qualquer dispositivo**. O login é seguro (o Supabase cuida
da senha) e cada usuário só vê os próprios dados.

É **de graça** no plano gratuito do Supabase e leva ~10 minutos pra ligar.
Sem configurar, o app continua funcionando com contas locais (só neste
navegador) — então você pode deixar pra depois sem quebrar nada.

---

## Passo a passo

1. Crie uma conta grátis em **https://supabase.com** e clique em
   **New project**. Dê um nome e uma senha ao banco (guarde essa senha).
   Espere ~2 minutos até o projeto ficar pronto.

2. **Crie a tabela e as regras de segurança:**
   - No menu lateral, abra **SQL Editor** → **New query**.
   - Cole todo o conteúdo do arquivo `schema.sql` (desta pasta) e clique
     **Run**. Deve aparecer "Success".

3. **Deixe o login simples (sem confirmação por e-mail):**
   - Menu **Authentication** → **Providers** → **Email**.
   - Desligue **"Confirm email"** (assim a pessoa cria a conta e já entra).
   - *(Se preferir manter a confirmação por e-mail, tudo bem — o app avisa
     a pessoa para confirmar antes de entrar.)*

4. **Pegue as chaves do projeto:**
   - Menu **Project Settings** (engrenagem) → **API**.
   - Copie o **Project URL** e a chave **anon public**.

5. **Cole no app:** abra o arquivo `js/config.js` e preencha:
   ```js
   window.APP_CONFIG = {
     SUPABASE_URL: 'https://xxxxxxxx.supabase.co',
     SUPABASE_ANON_KEY: 'a chave anon public'
   };
   ```
   Salve e publique o site. Pronto — a nuvem está ligada para todo mundo. 🎉

---

## Perguntas rápidas

**Essas chaves podem ficar no código?** Sim. A `anon public` é feita para o
navegador; a segurança real vem das regras do banco (RLS) que o `schema.sql`
cria — cada pessoa só acessa a própria linha.

**Como funciona a sincronização?** O app salva no navegador (rápido e
funciona offline) e sincroniza com a nuvem: baixa ao entrar, envia quando
você muda algo, e atualiza ao voltar o foco na aba. Se a mesma pessoa usar
dois aparelhos ao mesmo tempo, vale a última alteração.

**É seguro?** A senha é tratada pelo Supabase (nunca fica no código nem no
navegador em texto), tudo trafega por HTTPS, e o RLS isola os dados de cada
usuário.
