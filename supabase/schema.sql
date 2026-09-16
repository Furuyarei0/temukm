-- Jalankan di SQL Editor Supabase.
-- Setelah itu: Authentication > Users > add admin user,
-- lalu (opsional) insert ke public.admins.

create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null check (category in ('UKK', 'UKM')),
  summary text not null,
  description text not null,
  cover_image_url text not null,
  qr_image_url text not null,
  join_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.organizations enable row level security;
alter table public.admins enable row level security;

drop policy if exists "organizations_public_read" on public.organizations;
create policy "organizations_public_read"
  on public.organizations for select
  using (true);

drop policy if exists "organizations_auth_write" on public.organizations;
create policy "organizations_auth_write"
  on public.organizations for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "admins_self_read" on public.admins;
create policy "admins_self_read"
  on public.admins for select
  to authenticated
  using (auth.uid() = user_id);

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "media_public_read" on storage.objects;
create policy "media_public_read"
  on storage.objects for select
  using (bucket_id = 'media');

drop policy if exists "media_auth_insert" on storage.objects;
create policy "media_auth_insert"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'media');

drop policy if exists "media_auth_update" on storage.objects;
create policy "media_auth_update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'media');

drop policy if exists "media_auth_delete" on storage.objects;
create policy "media_auth_delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'media');

do $$
begin
  alter publication supabase_realtime add table public.organizations;
exception
  when duplicate_object then null;
end $$;

-- Seed diisi dari landing (lib/seed.ts) jika tabel kosong.
-- Setelah CMS menyimpan data, landing memakai tabel ini secara realtime.
