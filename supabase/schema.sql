-- =========================================================================
-- Banco do Cantinho de Estudos (Supabase / Postgres)
-- Cole e rode isto no Supabase: SQL Editor → New query → Run.
-- =========================================================================

-- Uma linha por usuário, guardando os dados dele num JSON.
create table if not exists public.user_data (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Segurança por linha (RLS): cada pessoa só acessa a própria linha.
alter table public.user_data enable row level security;

drop policy if exists "own_select" on public.user_data;
drop policy if exists "own_insert" on public.user_data;
drop policy if exists "own_update" on public.user_data;
drop policy if exists "own_delete" on public.user_data;

create policy "own_select" on public.user_data
  for select using (auth.uid() = user_id);

create policy "own_insert" on public.user_data
  for insert with check (auth.uid() = user_id);

create policy "own_update" on public.user_data
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own_delete" on public.user_data
  for delete using (auth.uid() = user_id);
