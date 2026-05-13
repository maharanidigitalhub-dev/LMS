-- Profiles (extends auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  enrolled_at timestamptz default now()
);

-- Lesson progress
create table if not exists public.lesson_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  lesson_id text not null,
  module_id text not null,
  completed boolean default false,
  completed_at timestamptz,
  created_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- Quiz results
create table if not exists public.quiz_results (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  quiz_id text not null,
  module_id text not null,
  score integer not null,
  passed boolean default false,
  created_at timestamptz default now()
);

-- Notes
create table if not exists public.notes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  lesson_id text not null,
  content text,
  updated_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- Row Level Security
alter table public.profiles       enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.quiz_results    enable row level security;
alter table public.notes           enable row level security;

-- Policies: user bisa baca & tulis data mereka sendiri
create policy "Own profile" on public.profiles for all using (auth.uid() = id);
create policy "Own progress" on public.lesson_progress for all using (auth.uid() = user_id);
create policy "Own quiz"     on public.quiz_results    for all using (auth.uid() = user_id);
create policy "Own notes"    on public.notes           for all using (auth.uid() = user_id);

-- Auto-create profile saat user baru daftar
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
