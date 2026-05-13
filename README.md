# The Ultimate Digital Advertiser — LMS

Learning Management System untuk kursus Meta Ads & TikTok Ads oleh **Maharani Digital Hub (MDH)**.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS + Framer Motion
- **Backend**: Supabase (PostgreSQL + Auth)
- **Deploy**: Vercel (auto-deploy dari GitHub)

## Setup Lokal

```bash
# 1. Clone repo
git clone https://github.com/username/ultimate-ads-lms.git
cd ultimate-ads-lms

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local
# Edit .env.local dengan nilai dari Supabase & Midtrans dashboard

# 4. Jalankan development server
npm run dev
# Buka http://localhost:3000
```

## Setup Supabase

1. Buat project baru di [supabase.com](https://supabase.com)
2. Buka SQL Editor → paste isi file `supabase/migrations/001_initial.sql` → Run
3. Copy URL dan anon key dari Settings → API → tempel ke `.env.local`

## Deploy ke Vercel

1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import Git Repository
3. Tambahkan environment variables (sama dengan `.env.example`)
4. Deploy

## Tambah Slide Materi

Upload file HTML ke folder `public/slides/`. File akan otomatis accessible via:
```
https://your-domain.vercel.app/slides/nama-file.html
```

## Struktur Project

```
src/
├── app/
│   ├── (auth)/          # Login & register
│   ├── (marketing)/     # Landing page
│   ├── (dashboard)/     # Semua halaman LMS (protected)
│   └── api/             # Backend API routes
├── components/          # Reusable components
├── lib/supabase/        # Supabase client (browser & server)
├── types/               # TypeScript types
└── content/modules/     # Konten JSON per level (0-8)
```

## Konten Modul

Edit file JSON di `src/content/modules/level-X.json` untuk menambah/mengubah lesson, quiz, dan resources.

---

© 2025 Maharani Digital Hub
