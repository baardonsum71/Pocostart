-- poco start · Supabase schema
-- Run in Supabase SQL editor

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  preferred_locale text not null default 'en',
  xp integer not null default 0,
  streak integer not null default 0,
  last_study_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Safe for existing projects
alter table public.profiles
  add column if not exists preferred_locale text not null default 'en';

create table if not exists public.lesson_progress (
  id bigserial primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  unique (user_id, lesson_id)
);

create index if not exists lesson_progress_user_idx on public.lesson_progress (user_id);

alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;

create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_upsert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

create policy "progress_select_own"
  on public.lesson_progress for select
  using (auth.uid() = user_id);

create policy "progress_insert_own"
  on public.lesson_progress for insert
  with check (auth.uid() = user_id);

create policy "progress_update_own"
  on public.lesson_progress for update
  using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Account deletion (App Store 5.1.1) — callable by the signed-in user
create or replace function public.delete_own_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Not authenticated';
  end if;
  delete from public.lesson_progress where user_id = uid;
  delete from public.profiles where id = uid;
  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_own_account() from public;
grant execute on function public.delete_own_account() to authenticated;
