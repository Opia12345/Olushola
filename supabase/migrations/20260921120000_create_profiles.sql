-- Profiles: one row per auth user, carrying the portal role (admin | client)
-- and the client-facing details the director's dashboard needs.

create type public.user_role as enum ('admin', 'client');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null,
  role public.user_role not null default 'client',
  phone text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Individuals can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Individuals can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Security-definer helper avoids the self-referencing RLS recursion that
-- would happen from checking role directly inside a profiles policy.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

create policy "Admins can view all profiles"
  on public.profiles for select
  using (public.is_admin());

-- Auto-provision a profile row for every new auth user, reading
-- full_name/role/phone out of user_metadata when present.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role, phone)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)),
    coalesce((new.raw_user_meta_data ->> 'role')::public.user_role, 'client'),
    new.raw_user_meta_data ->> 'phone'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Backfill profiles for auth users created before this migration existed.
insert into public.profiles (id, full_name, role, phone)
select
  id,
  coalesce(raw_user_meta_data ->> 'full_name', split_part(email, '@', 1)),
  coalesce((raw_user_meta_data ->> 'role')::public.user_role, 'client'),
  raw_user_meta_data ->> 'phone'
from auth.users
on conflict (id) do nothing;
