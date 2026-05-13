'use client'
import Link from 'next/link'
import { useState } from 'react'

type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'cards'; items: { icon: string; title: string; desc: string; color: string }[] }
  | { type: 'funnel'; steps: { label: string; sub: string; color: string }[] }
  | { type: 'comparison'; left: { label: string; items: string[] }; right: { label: string; items: string[] } }
  | { type: 'highlight'; icon: string; title: string; content: string; color: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'steps'; items: { num: string; title: string; desc: string }[] }
  | { type: 'quote'; text: string; author: string }

type LessonContent = {
  title: string
  subtitle: string
  duration: string
  blocks: ContentBlock[]
  quiz?: { question: string; options: string[]; correct: number; explanation: string }[]
}

const LESSONS: Record<string, LessonContent> = {
  'level-0/intro-digital-ads': {
    title: 'Introduction to Digital Advertising',
    subtitle: 'Apa itu iklan digital dan kenapa ini skill yang paling dicari di era sekarang',
    duration: '10 min',
    blocks: [
      { type: 'highlight', icon: '💡', color: 'bg-amber-50 border-amber-200',
        title: 'Satu kalimat yang harus kamu ingat',
        content: 'Iklan digital adalah cara membayar platform (Meta, TikTok, Google) untuk menampilkan pesan bisnismu kepada orang yang tepat, di waktu yang tepat.' },
      { type: 'heading', content: 'Bedanya iklan digital vs iklan konvensional' },
      { type: 'comparison',
        left: { label: '📺 Iklan Konvensional', items: ['Billboard, TV, Radio, Koran', 'Semua orang lihat — relevan atau tidak', 'Tidak bisa diukur dengan tepat', 'Mahal, mulai ratusan juta', 'Tidak bisa diubah setelah tayang'] },
        right: { label: '📱 Iklan Digital', items: ['Meta, TikTok, Google, YouTube', 'Hanya orang yang relevan yang lihat', 'Setiap klik, view, dan beli tercatat', 'Mulai Rp 10.000/hari', 'Bisa diubah kapan saja secara real-time'] } },
      { type: 'heading', content: 'Bagaimana cara kerja iklan digital?' },
      { type: 'steps', items: [
        { num: '1', title: 'Platform kumpulkan data user', desc: 'Meta dan TikTok tahu usia, lokasi, minat, kebiasaan belanja, dan behavior jutaan pengguna mereka.' },
        { num: '2', title: 'Kamu tentukan target', desc: 'Kamu bilang ke platform: "tampilkan iklanku ke perempuan 20-30 tahun di Denpasar yang suka skincare."' },
        { num: '3', title: 'Platform cocokkan & tampilkan', desc: 'Algoritmanya mencari orang yang paling cocok dengan kriteriamu dan menampilkan iklanmu di feed mereka.' },
        { num: '4', title: 'Kamu bayar berdasarkan hasil', desc: 'Bayar per klik (CPC), per 1000 tayangan (CPM), atau per konversi — bukan per jam tayang.' },
      ]},
      { type: 'highlight', icon: '🇮🇩', color: 'bg-blue-50 border-blue-200',
        title: 'Konteks Indonesia',
        content: 'Indonesia adalah pasar digital terbesar ke-4 di dunia. 212 juta pengguna internet, 167 juta aktif di media sosial. Ini artinya target marketmu — apapun bisnisnya — pasti ada di platform digital.' },
      { type: 'quote', text: 'Iklan digital bukan soal teknologi. Ini soal psikologi manusia yang difasilitasi teknologi.', author: 'MDH' },
    ],
    quiz: [
      { question: 'Apa keunggulan utama iklan digital dibanding iklan konvensional?',
        options: ['Lebih murah selalu', 'Bisa diukur dan ditarget dengan presisi', 'Lebih kreatif', 'Lebih cepat viral'],
        correct: 1, explanation: 'Keunggulan terbesar iklan digital adalah kemampuan targeting yang presisi dan pengukuran yang akurat — kamu tahu persis siapa yang lihat, klik, dan beli.' },
      { question: 'Platform apa yang termasuk iklan digital?',
        options: ['Billboard dan TV', 'Meta Ads, TikTok Ads, Google Ads', 'Radio dan koran', 'Semua di atas'],
        correct: 1, explanation: 'Meta Ads (Facebook + Instagram), TikTok Ads, dan Google Ads adalah platform iklan digital utama.' },
    ],
  },

  'level-0/what-is-media-buying': {
    title: 'What is Media Buying',
    subtitle: 'Profesi media buyer — apa yang mereka lakukan dan kenapa dibutuhkan setiap bisnis',
    duration: '8 min',
    blocks: [
      { type: 'highlight', icon: '🎯', color: 'bg-purple-50 border-purple-200',
        title: 'Media Buyer = ?',
        content: 'Media buyer adalah orang yang bertugas membeli "ruang" di platform digital untuk menampilkan iklan — seefisien mungkin dengan budget yang tersedia. Mereka adalah penghubung antara bisnis dan algoritmanya platform.' },
      { type: 'heading', content: 'Apa yang dilakukan media buyer setiap hari?' },
      { type: 'cards', items: [
        { icon: '📊', title: 'Setup Campaign', desc: 'Buat campaign baru, tentukan objective, audience, dan budget di Ads Manager.', color: 'bg-blue-50 border-blue-200' },
        { icon: '🔍', title: 'Analisis Data', desc: 'Baca dashboard setiap hari — CTR, CPM, ROAS. Cari mana yang perform, mana yang tidak.', color: 'bg-green-50 border-green-200' },
        { icon: '✂️', title: 'Kill atau Scale', desc: 'Matikan iklan yang boros, naikkan budget iklan yang bagus. Ini yang membedakan media buyer ahli vs pemula.', color: 'bg-red-50 border-red-200' },
        { icon: '🎨', title: 'Test Creative', desc: 'Selalu punya 2-3 versi iklan yang sedang ditest. Hook berbeda, visual berbeda, angle berbeda.', color: 'bg-amber-50 border-amber-200' },
      ]},
      { type: 'highlight', icon: '💰', color: 'bg-green-50 border-green-200',
        title: 'Kenapa skill ini sangat dicari?',
        content: 'Setiap bisnis yang mau tumbuh butuh iklan. Media buyer yang bisa menghasilkan ROAS (Return on Ad Spend) tinggi adalah aset yang sangat berharga. Di Indonesia, media buyer freelance bisa dapat Rp 5-30 juta per bulan per klien.' },
      { type: 'quote', text: 'Kamu tidak harus jadi programmer atau desainer untuk sukses di digital marketing. Tapi kamu harus paham angka dan psikologi manusia.', author: 'MDH' },
    ],
  },

  'level-0/how-ads-work': {
    title: 'How Modern Ads Work',
    subtitle: 'Di balik layar — bagaimana algoritma memutuskan iklan siapa yang ditampilkan',
    duration: '12 min',
    blocks: [
      { type: 'heading', content: 'Proses di balik 1 iklan yang kamu lihat' },
      { type: 'steps', items: [
        { num: '⚡', title: 'Real-time auction (lelang)', desc: 'Setiap kali seseorang buka Instagram, terjadi lelang iklan dalam milidetik. Ratusan pengiklan bersaing untuk slot iklan itu.' },
        { num: '📐', title: 'Platform hitung "Ad Relevance"', desc: 'Meta tidak hanya lihat siapa yang bayar paling mahal. Mereka nilai relevansi iklan dengan user — makin relevan, makin murah biayamu.' },
        { num: '🏆', title: 'Pemenang ditampilkan', desc: 'Iklan dengan kombinasi terbaik antara bid (berapa kamu bayar) + relevance score (seberapa relevan) yang menang.' },
        { num: '📈', title: 'Algoritma belajar', desc: 'Semakin banyak data (klik, purchase, form isi), semakin pintar algoritma mencarikan audience yang tepat untukmu.' },
      ]},
      { type: 'highlight', icon: '🧠', color: 'bg-purple-50 border-purple-200',
        title: 'Learning Phase — fase paling kritis',
        content: '3-7 hari pertama setelah iklan launch, Meta sedang "belajar" siapa yang paling responsif terhadap iklanmu. Di fase ini jangan matikan iklan, jangan ubah budget drastis. Biarkan algoritmanya belajar dulu.' },
      { type: 'cards', items: [
        { icon: '✅', title: 'Yang mempercepat learning', desc: 'Audience yang cukup besar (50K+), budget yang konsisten, creative yang relevan.', color: 'bg-green-50 border-green-200' },
        { icon: '❌', title: 'Yang menghambat learning', desc: 'Audience terlalu kecil, budget terlalu kecil, terlalu sering ubah setting.', color: 'bg-red-50 border-red-200' },
      ]},
    ],
  },

  'level-0/ecosystem-overview': {
    title: 'Advertising Ecosystem Overview',
    subtitle: 'Peta lengkap dunia digital advertising — platform, tools, dan siapa yang berperan',
    duration: '10 min',
    blocks: [
      { type: 'heading', content: 'Platform utama yang perlu kamu tahu' },
      { type: 'cards', items: [
        { icon: '📘', title: 'Meta Ads', desc: 'Facebook + Instagram. 3.2 miliar user aktif. Targeting terbaik berdasarkan interest & behavior. Cocok untuk hampir semua bisnis.', color: 'bg-blue-50 border-blue-200' },
        { icon: '🎵', title: 'TikTok Ads', desc: '1 miliar user aktif. Dominan Gen Z dan Millennial. Format video vertikal. Viral potential tertinggi saat ini.', color: 'bg-pink-50 border-pink-200' },
        { icon: '🔍', title: 'Google Ads', desc: 'Search dan Display. Menjangkau orang yang sedang aktif mencari produkmu. Intent-based targeting.', color: 'bg-green-50 border-green-200' },
        { icon: '▶️', title: 'YouTube Ads', desc: 'Video advertising terbesar. Pre-roll, mid-roll, dan display ads. Bagus untuk awareness.', color: 'bg-red-50 border-red-200' },
      ]},
      { type: 'highlight', icon: '🎯', color: 'bg-amber-50 border-amber-200',
        title: 'Di kursus ini kita fokus ke mana?',
        content: 'LMS ini fokus ke Meta Ads dan TikTok Ads — dua platform yang paling relevan untuk UMKM Indonesia saat ini. Kenapa? Karena keduanya punya format yang accessible, budget fleksibel, dan audience terbesar di Indonesia.' },
      { type: 'heading', content: 'Tools yang dipakai media buyer' },
      { type: 'table',
        headers: ['Tool', 'Fungsi', 'Gratis?'],
        rows: [
          ['Meta Ads Manager', 'Buat & monitor campaign Meta', '✅ Gratis'],
          ['TikTok Ads Manager', 'Buat & monitor campaign TikTok', '✅ Gratis'],
          ['Meta Ads Library', 'Spy iklan kompetitor', '✅ Gratis'],
          ['Canva', 'Buat creative (gambar/video)', '✅ Gratis (basic)'],
          ['Meta Pixel', 'Tracking konversi di website', '✅ Gratis'],
        ],
      },
    ],
  },

  'level-0/student-roadmap': {
    title: 'Student Roadmap',
    subtitle: 'Peta perjalanan belajarmu dari hari ini sampai lulus sebagai beginner media buyer',
    duration: '5 min',
    blocks: [
      { type: 'highlight', icon: '🗺️', color: 'bg-blue-50 border-blue-200',
        title: 'Target akhir kursus ini',
        content: 'Setelah menyelesaikan semua 9 level, kamu harus bisa: setup dan publish campaign di Meta & TikTok, baca dashboard metrics, identifikasi masalah iklan, dan lakukan optimasi dasar.' },
      { type: 'funnel', steps: [
        { label: 'Level 0-1', sub: 'Fondasi — paham ekosistem & cara kerja iklan', color: 'bg-gray-100 border-gray-300' },
        { label: 'Level 2', sub: 'Creative — bisa buat hook & copywriting yang convert', color: 'bg-purple-100 border-purple-300' },
        { label: 'Level 3-4', sub: 'Platform — bisa setup Meta Ads & TikTok Ads', color: 'bg-blue-100 border-blue-300' },
        { label: 'Level 5', sub: 'Launch — bisa publish campaign pertama', color: 'bg-green-100 border-green-300' },
        { label: 'Level 6-7', sub: 'Optimize — bisa baca data & troubleshoot', color: 'bg-amber-100 border-amber-300' },
        { label: 'Level 8', sub: '🏆 Graduation — Beginner Digital Advertiser', color: 'bg-yellow-100 border-yellow-300' },
      ]},
      { type: 'highlight', icon: '⚡', color: 'bg-green-50 border-green-200',
        title: 'Tips belajar efektif',
        content: 'Jangan cuma baca — langsung buka Ads Manager sambil belajar. Setiap konsep yang dipelajari, coba langsung di platform. Learning by doing adalah cara tercepat untuk paham digital advertising.' },
    ],
  },

  'level-3/meta-ecosystem': {
    title: 'Meta Ads Ecosystem',
    subtitle: 'Semua yang perlu disiapkan sebelum bisa mulai beriklan di Meta',
    duration: '15 min',
    blocks: [
      { type: 'highlight', icon: '📱', color: 'bg-blue-50 border-blue-200',
        title: 'Meta = Facebook + Instagram (sekaligus)',
        content: '1 campaign di Meta Ads otomatis bisa muncul di Facebook DAN Instagram. Setting sekali, jangkauan dua platform. Ini yang membuat Meta Ads sangat efisien untuk UMKM.' },
      { type: 'heading', content: 'Infrastruktur yang harus disiapkan' },
      { type: 'steps', items: [
        { num: '1', title: 'Facebook Personal Account', desc: 'Wajib aktif minimal 30 hari. Ini adalah "pintu masuk" ke semua produk bisnis Meta. Tanpa akun personal yang aktif, kamu tidak bisa buat Page atau Ads Manager.' },
        { num: '2', title: 'Facebook Page', desc: 'Identitas bisnis kamu di Facebook. Iklan akan keluar atas nama Page ini, bukan nama personal. Buat di facebook.com → Pages → Create New Page.' },
        { num: '3', title: 'Meta Business Suite', desc: 'Dashboard manajemen bisnis. Hubungkan Page-mu ke sini di business.facebook.com. Dari sini kamu bisa manage semua aset bisnis.' },
        { num: '4', title: 'Meta Ads Manager', desc: 'Tempat buat dan monitor semua campaign. Akses di adsmanager.facebook.com. Ini yang akan kita pakai sepanjang kursus ini.' },
        { num: '5', title: 'Metode Pembayaran', desc: 'Kartu Visa/Mastercard atau PayPal. Harus ditambahkan sebelum iklan bisa running. Masuk ke Billing & Payments di Ads Manager.' },
      ]},
      { type: 'cards', items: [
        { icon: '✅', title: 'Sudah siap?', desc: 'FB Account aktif, Page dibuat, bisa akses Ads Manager, payment method tersimpan, creative sudah siap.', color: 'bg-green-50 border-green-200' },
        { icon: '⚠️', title: 'Masalah umum pemula', desc: 'Akun baru (< 30 hari) sering dibatasi. Verifikasi identitas di Business Settings → Security Center.', color: 'bg-amber-50 border-amber-200' },
      ]},
      { type: 'highlight', icon: '📊', color: 'bg-blue-50 border-blue-200',
        title: 'Kenapa Meta Ads untuk UMKM?',
        content: 'Indonesia adalah pasar terbesar Meta di Asia Tenggara. Budget mulai Rp 20.000/hari. Targeting berdasarkan lokasi radius (cocok bisnis lokal). 1 campaign bisa jangkau Facebook + Instagram sekaligus.' },
    ],
    quiz: [
      { question: 'Apa yang WAJIB disiapkan sebelum bisa beriklan di Meta?',
        options: ['Website bisnis', 'Facebook Page', 'TikTok account', 'Email marketing'],
        correct: 1, explanation: 'Facebook Page adalah syarat utama — iklan Meta akan keluar atas nama Page ini. Tanpa Page, kamu tidak bisa buat campaign.' },
      { question: 'Meta Ads Manager bisa diakses di alamat?',
        options: ['facebook.com/ads', 'adsmanager.facebook.com', 'business.facebook.com', 'meta.com/ads'],
        correct: 1, explanation: 'Meta Ads Manager ada di adsmanager.facebook.com — ini dashboard utama untuk buat dan monitor semua campaign.' },
    ],
  },

  'level-3/campaign-setup': {
    title: 'Campaign Setup — Step by Step',
    subtitle: 'Dari klik Create sampai campaign siap publish — panduan lengkap beserta contoh nyata',
    duration: '25 min',
    blocks: [
      { type: 'highlight', icon: '🏗️', color: 'bg-blue-50 border-blue-200',
        title: 'Struktur 3 Level yang wajib dipahami',
        content: 'Campaign = Tujuan. Ad Set = Siapa & Kapan & Berapa. Ad = Apa yang dilihat audience. 1 Campaign bisa punya banyak Ad Set, 1 Ad Set bisa punya banyak Ad. Ini fondasi A/B Testing.' },
      { type: 'heading', content: 'Step 1 — Buat Campaign & Pilih Objective' },
      { type: 'table',
        headers: ['Objective', 'Pilih kalau...', 'Contoh UMKM'],
        rows: [
          ['📢 Awareness', 'Brand baru, mau dikenal dulu', 'Warung baru buka di area kampus'],
          ['🔗 Traffic', 'Arahkan ke WA/website/link', 'HUNGR. → order via WA'],
          ['❤️ Engagement', 'Perbanyak like, comment, share', 'Seloyang Pizza → viral lokal'],
          ['📋 Leads', 'Kumpulkan data kontak', 'GTX Motor → kontak calon pembeli'],
          ['🛒 Sales', 'Butuh website + Meta Pixel', 'E-commerce dengan website'],
        ],
      },
      { type: 'highlight', icon: '⚠️', color: 'bg-red-50 border-red-200',
        title: 'Perhatian penting!',
        content: 'Objective TIDAK BISA diubah setelah campaign dibuat. Kalau salah pilih, harus buat campaign baru dari awal. Pastikan kamu yakin sebelum klik Next.' },
      { type: 'heading', content: 'Step 2 — Setup Ad Set (Level paling kritis)' },
      { type: 'cards', items: [
        { icon: '📍', title: 'Location', desc: 'Ketik nama kota → atur radius. Min. 1 mile (±1.6km). Pilih "People currently in this location" untuk bisnis yang butuh orang datang secara fisik.', color: 'bg-blue-50 border-blue-200' },
        { icon: '👥', title: 'Audience', desc: 'Usia, gender, dan Detailed Targeting (interests + behaviors). Tips: ketik interest di kolom search, klik Suggestions untuk ide lebih banyak.', color: 'bg-purple-50 border-purple-200' },
        { icon: '💰', title: 'Budget', desc: 'Daily Budget minimum Rp 20.000/hari. Durasi minimal 5 hari — 3 hari pertama adalah "learning phase". Jangan matikan di fase ini!', color: 'bg-green-50 border-green-200' },
        { icon: '📲', title: 'Placement', desc: 'Untuk pemula: pilih Advantage+ Placements (otomatis). Meta akan distribusikan ke placement paling efektif. Manual placement hanya untuk yang sudah punya data.', color: 'bg-amber-50 border-amber-200' },
      ]},
      { type: 'heading', content: 'Contoh real — HUNGR. (food delivery kampus)' },
      { type: 'table',
        headers: ['Setting', 'Value', 'Alasan'],
        rows: [
          ['Objective', 'Traffic → Messaging', 'Order via WA, bukan website'],
          ['Nama Campaign', 'HUNGR-TRF-Mei2025', 'Format konsisten untuk analisis'],
          ['Location', 'Denpasar + 2km dari INSTIKI', 'Sesuai jangkauan delivery'],
          ['Usia', '18-28, All gender', 'Core audience mahasiswa'],
          ['Interests', 'Student life, Food delivery, Indonesian food', 'Match psikografi target'],
          ['Budget', 'Rp 30.000/hari × 7 hari', 'Data awal cukup, realistis UMKM'],
          ['Placement', 'Advantage+ (otomatis)', 'Pemula, biarkan Meta optimasi'],
        ],
      },
      { type: 'highlight', icon: '💡', color: 'bg-green-50 border-green-200',
        title: 'Target audience ideal untuk UMKM lokal',
        content: 'Terlalu kecil (< 1.000 orang)? Kurangi filter atau perluas usia. Terlalu besar (> 1 juta)? Tambah interest yang lebih spesifik. Target ideal UMKM lokal: 50.000–500.000 orang.' },
    ],
    quiz: [
      { question: 'Objective mana yang paling tepat untuk UMKM kuliner yang mau terima order via WhatsApp?',
        options: ['Awareness', 'Traffic → Messaging', 'Sales', 'App Promotion'],
        correct: 1, explanation: 'Traffic dengan destination "Messaging" akan mengarahkan orang langsung ke WhatsApp atau DM — cocok untuk UMKM yang terima order via chat.' },
      { question: 'Berapa minimum budget harian yang direkomendasikan untuk pemula?',
        options: ['Rp 5.000', 'Rp 10.000', 'Rp 20.000', 'Rp 100.000'],
        correct: 2, explanation: 'Meta merekomendasikan minimum Rp 20.000/hari agar iklan bisa running dan learning phase berjalan dengan baik.' },
    ],
  },

  'level-3/audience-targeting': {
    title: 'Audience Targeting',
    subtitle: 'Kekuatan terbesar Meta Ads — cara menemukan orang yang paling mungkin jadi pelangganmu',
    duration: '18 min',
    blocks: [
      { type: 'highlight', icon: '🎯', color: 'bg-blue-50 border-blue-200',
        title: 'Kenapa targeting Meta berbeda?',
        content: 'Meta mengumpulkan data dari miliaran interaksi user setiap hari — apa yang mereka like, share, komentar, beli, dan bahkan berapa lama mereka berhenti di sebuah konten. Data inilah yang membuat targeting Meta sangat presisi.' },
      { type: 'heading', content: '4 Layer targeting yang bisa dikombinasikan' },
      { type: 'cards', items: [
        { icon: '📍', title: 'Location', desc: 'Negara, kota, atau radius dari titik tertentu. Untuk bisnis lokal: pilih "Currently in location" bukan "Living in" — supaya menjangkau orang yang sedang berada di area tersebut.', color: 'bg-blue-50 border-blue-200' },
        { icon: '👤', title: 'Demographics', desc: 'Usia, gender, bahasa, pendidikan, status hubungan, pekerjaan. Paling basic tapi selalu relevan. Kombinasikan dengan layer lain untuk hasil lebih presisi.', color: 'bg-purple-50 border-purple-200' },
        { icon: '💡', title: 'Interests', desc: 'Topik, brand, halaman FB yang disukai user. INI kuncinya. Contoh: target orang yang interested di "Coffee", "Entrepreneur", "Indonesian Food" untuk bisnis kuliner.', color: 'bg-amber-50 border-amber-200' },
        { icon: '⚡', title: 'Behaviors', desc: 'Kebiasaan digital: frequent traveler, pembeli online, admin bisnis Facebook, pengguna iPhone vs Android. Data perilaku nyata, bukan sekadar minat.', color: 'bg-green-50 border-green-200' },
      ]},
      { type: 'highlight', icon: '🧩', color: 'bg-purple-50 border-purple-200',
        title: 'Cara kombinasikan layer targeting',
        content: 'Buat targeting seperti kalimat: "Perempuan (Demographics), usia 22-35, di Denpasar 5km (Location), yang suka skincare dan Korean beauty (Interests), dan sering belanja online (Behaviors)." Semakin spesifik kombinasinya, semakin relevan audiencemu.' },
      { type: 'table',
        headers: ['UMKM', 'Location', 'Age', 'Interests'],
        rows: [
          ['HUNGR. (food delivery)', 'Radius 2km dari kampus', '18-25', 'Student life, Food delivery, Instant food'],
          ['Atomico (coffee)', 'Kota Denpasar', '20-35', 'Coffee, Specialty coffee, Cafe hopping'],
          ['GTX Motor (otomotif)', 'Bali', '25-45', 'Motorcycle, Automotive, Commuting'],
          ['Seloyang Pizza', 'Radius 5km', '17-30', 'Pizza, Fast food, College life'],
        ],
      },
    ],
  },

  'level-3/ad-creative': {
    title: 'Ad Creative & Copywriting',
    subtitle: 'Kamu punya 1.7 detik menarik perhatian — begini cara membuat iklan yang tidak di-skip',
    duration: '20 min',
    blocks: [
      { type: 'highlight', icon: '⏱️', color: 'bg-red-50 border-red-200',
        title: '1.7 detik',
        content: 'Rata-rata orang scrolling Instagram berhenti di sebuah konten hanya 1.7 detik. Kalau dalam 1.7 detik pertama iklanmu tidak menarik — mereka scroll dan pergi. Selamanya.' },
      { type: 'heading', content: 'Format creative yang tersedia di Meta' },
      { type: 'cards', items: [
        { icon: '🎬', title: 'Video / Reels', desc: 'Engagement tertinggi. Durasi ideal 15-30 detik. Hook di 3 detik pertama WAJIB kuat. Format 9:16 untuk Reels/Story.', color: 'bg-blue-50 border-blue-200' },
        { icon: '🖼️', title: 'Single Image', desc: 'Paling mudah dibuat. Cocok untuk promo produk yang straightforward. Rasio 1:1 (1080x1080) atau 4:5 (1080x1350).', color: 'bg-green-50 border-green-200' },
        { icon: '🎠', title: 'Carousel', desc: 'Multiple gambar yang bisa digeser. Cocok untuk katalog produk atau menu. Storytelling yang lebih panjang.', color: 'bg-purple-50 border-purple-200' },
        { icon: '📱', title: 'Story / Fullscreen', desc: 'Format vertikal immersive. Engagement tinggi di mobile. Durasi video max 15 detik untuk Story.', color: 'bg-amber-50 border-amber-200' },
      ]},
      { type: 'heading', content: 'Formula copywriting PAS' },
      { type: 'steps', items: [
        { num: 'P', title: 'Problem — Sebutkan masalah yang audience rasakan', desc: '"Udah jam 10 malem, belum makan, tapi mager keluar..." (HUNGR. — targeting mahasiswa)' },
        { num: 'A', title: 'Agitate — Perkuat rasa sakitnya', desc: '"Antri panjang, GoFood mahal, masak sendiri males... Kapan makan?!"' },
        { num: 'S', title: 'Solve — Tawarkan solusimu sebagai jawaban', desc: '"HUNGR. antar ke kamu dalam 20 menit. Harga mahasiswa, gratis ongkir area kampus. Order sekarang →"' },
      ]},
      { type: 'highlight', icon: '✍️', color: 'bg-green-50 border-green-200',
        title: 'Spesifikasi teknis yang wajib diingat',
        content: 'Headline: max 40 karakter. Primary text: optimal 125 karakter (sisanya terpotong di mobile). Teks di gambar: max 20% area gambar — lebih dari itu reach-nya turun drastis.' },
      { type: 'quote', text: 'Iklan yang bagus bukan yang paling kreatif. Tapi yang paling relevan dengan masalah audiencemu.', author: 'MDH' },
    ],
    quiz: [
      { question: 'P dalam formula PAS singkatan dari?',
        options: ['Promotion', 'Problem', 'Product', 'Platform'],
        correct: 1, explanation: 'PAS = Problem, Agitate, Solve. Mulai dengan menyebutkan masalah yang dirasakan audience, perkuat masalahnya, lalu tawarkan solusimu.' },
      { question: 'Berapa karakter optimal untuk Primary Text di Meta Ads?',
        options: ['40 karakter', '80 karakter', '125 karakter', '280 karakter'],
        correct: 2, explanation: 'Primary text optimal 125 karakter — di atas itu akan terpotong di feed mobile dan user harus klik "more" untuk baca sisanya.' },
    ],
  },

  'level-3/meta-pixel': {
    title: 'Meta Pixel Basics',
    subtitle: 'Snippet kode kecil yang membuat iklanmu jauh lebih pintar dan terukur',
    duration: '15 min',
    blocks: [
      { type: 'highlight', icon: '🔮', color: 'bg-blue-50 border-blue-200',
        title: 'Apa itu Meta Pixel?',
        content: 'Meta Pixel adalah sepotong kode JavaScript yang dipasang di website bisnismu. Fungsinya: melacak siapa yang mengunjungi website, apa yang mereka lakukan, dan apakah mereka akhirnya beli. Data ini dikirim ke Meta untuk optimasi iklanmu.' },
      { type: 'heading', content: 'Apa yang bisa dilacak Pixel?' },
      { type: 'cards', items: [
        { icon: '👁️', title: 'Page View', desc: 'Siapa yang mengunjungi halaman mana di websitemu.', color: 'bg-blue-50 border-blue-200' },
        { icon: '🛒', title: 'Add to Cart', desc: 'Siapa yang tambahkan produk ke keranjang belanja.', color: 'bg-amber-50 border-amber-200' },
        { icon: '💳', title: 'Purchase', desc: 'Siapa yang benar-benar beli — ini data paling berharga.', color: 'bg-green-50 border-green-200' },
        { icon: '📋', title: 'Lead', desc: 'Siapa yang mengisi form kontak atau mendaftar.', color: 'bg-purple-50 border-purple-200' },
      ]},
      { type: 'highlight', icon: '💡', color: 'bg-amber-50 border-amber-200',
        title: 'Kenapa Pixel sangat penting?',
        content: 'Tanpa Pixel: kamu tidak tahu apakah orang yang klik iklanmu benar-benar beli. Dengan Pixel: Meta bisa optimasi iklanmu untuk menjangkau orang yang PALING MUNGKIN beli — bukan hanya yang paling mungkin klik.' },
      { type: 'highlight', icon: '⚠️', color: 'bg-red-50 border-red-200',
        title: 'Relevan untuk siapa?',
        content: 'Pixel hanya relevan kalau kamu punya website. Untuk UMKM yang jualan via WA atau DM Instagram, Pixel belum diperlukan di tahap ini. Fokus ke setup campaign dan targeting dulu.' },
    ],
  },
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case 'text':
      return <p key={idx} className="text-mdh-dark/80 text-sm leading-relaxed mb-4">{block.content}</p>

    case 'heading':
      return <h2 key={idx} className="font-display text-xl font-bold text-mdh-dark mt-8 mb-4">{block.content}</h2>

    case 'highlight':
      return (
        <div key={idx} className={`rounded-xl border p-5 mb-5 ${block.color}`}>
          <div className="flex gap-3 items-start">
            <span className="text-2xl flex-shrink-0">{block.icon}</span>
            <div>
              <div className="font-semibold text-mdh-dark text-sm mb-1">{block.title}</div>
              <p className="text-mdh-dark/70 text-sm leading-relaxed">{block.content}</p>
            </div>
          </div>
        </div>
      )

    case 'cards':
      return (
        <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {block.items.map((item, i) => (
            <div key={i} className={`rounded-xl border p-4 ${item.color}`}>
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-mdh-dark text-sm mb-1">{item.title}</div>
              <p className="text-mdh-dark/60 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      )

    case 'funnel':
      return (
        <div key={idx} className="mb-6 space-y-1">
          {block.steps.map((step, i) => (
            <div key={i} className={`rounded-xl border px-5 py-3 flex items-center gap-4 ${step.color}`}
              style={{ marginLeft: `${i * 16}px`, marginRight: `${i * 16}px` }}>
              <div className="font-semibold text-mdh-dark text-sm">{step.label}</div>
              <div className="text-mdh-dark/60 text-xs">{step.sub}</div>
            </div>
          ))}
        </div>
      )

    case 'comparison':
      return (
        <div key={idx} className="grid grid-cols-2 gap-3 mb-6">
          {[block.left, block.right].map((side, i) => (
            <div key={i} className={`rounded-xl border p-4 ${i === 0 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
              <div className="font-semibold text-sm mb-3 text-mdh-dark">{side.label}</div>
              <ul className="space-y-2">
                {side.items.map((item, j) => (
                  <li key={j} className="text-xs text-mdh-dark/70 flex gap-2">
                    <span className={i === 0 ? 'text-red-400' : 'text-green-500'}>
                      {i === 0 ? '✗' : '✓'}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )

    case 'steps':
      return (
        <div key={idx} className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-4 bg-white rounded-xl border border-mdh-border p-4">
              <div className="w-9 h-9 rounded-full bg-mdh-gold flex items-center justify-center font-bold text-mdh-dark text-sm flex-shrink-0">
                {item.num}
              </div>
              <div>
                <div className="font-semibold text-mdh-dark text-sm mb-1">{item.title}</div>
                <p className="text-mdh-mid text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <div key={idx} className="mb-6 overflow-x-auto rounded-xl border border-mdh-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mdh-dark">
                {block.headers.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 text-xs font-semibold text-mdh-gold uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-mdh-warm'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-xs text-mdh-dark/80 border-b border-mdh-border">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'quote':
      return (
        <div key={idx} className="border-l-4 border-mdh-gold bg-mdh-warm rounded-r-xl px-5 py-4 mb-6">
          <p className="text-mdh-dark italic text-sm leading-relaxed mb-2">"{block.text}"</p>
          <p className="text-mdh-mid text-xs font-semibold">— {block.author}</p>
        </div>
      )

    default:
      return null
  }
}

export default function LessonPage({ params }: { params: { moduleId: string; lessonId: string } }) {
  const key = `${params.moduleId}/${params.lessonId}`
  const lesson = LESSONS[key]
  const [activeTab, setActiveTab] = useState('overview')
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  if (!lesson) {
    return (
      <div>
        <Link href={`/modules/${params.moduleId}`} className="text-xs text-mdh-mid hover:text-mdh-dark mb-6 inline-block">
          ← Kembali ke Modul
        </Link>
        <div className="bg-white rounded-2xl border border-mdh-border p-12 text-center">
          <div className="text-4xl mb-4">🚧</div>
          <h2 className="font-display text-xl font-bold text-mdh-dark mb-2">Konten sedang disiapkan</h2>
          <p className="text-mdh-mid text-sm">Lesson ini akan segera tersedia. Coba lesson lainnya dulu!</p>
          <Link href={`/modules/${params.moduleId}`} className="inline-block mt-6 text-sm text-mdh-gold hover:underline">
            ← Kembali ke daftar lesson
          </Link>
        </div>
      </div>
    )
  }

  const score = lesson.quiz
    ? lesson.quiz.filter((q, i) => quizAnswers[i] === q.correct).length
    : 0

  return (
    <div>
      <Link href={`/modules/${params.moduleId}`} className="text-xs text-mdh-mid hover:text-mdh-dark mb-6 inline-block">
        ← Kembali ke Modul
      </Link>

      <div className="mb-6">
        <div className="text-xs text-mdh-gold font-semibold uppercase tracking-wider mb-2">{params.moduleId.replace('-', ' ').toUpperCase()}</div>
        <h1 className="font-display text-3xl font-bold text-mdh-dark mb-2">{lesson.title}</h1>
        <p className="text-mdh-mid text-sm">{lesson.subtitle}</p>
        <span className="inline-block mt-2 text-xs bg-mdh-warm text-mdh-mid px-3 py-1 rounded-full">⏱ {lesson.duration}</span>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-mdh-border overflow-hidden mb-6">
        <div className="flex border-b border-mdh-border overflow-x-auto">
          {['overview', ...(lesson.quiz ? ['quiz'] : [])].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'text-mdh-gold border-b-2 border-mdh-gold'
                  : 'text-mdh-mid hover:text-mdh-dark'
              }`}>
              {tab === 'overview' ? 'Materi' : 'Quiz'}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              {lesson.blocks.map((block, idx) => renderBlock(block, idx))}
            </div>
          )}

          {activeTab === 'quiz' && lesson.quiz && (
            <div>
              <h2 className="font-display text-xl font-bold text-mdh-dark mb-6">Quiz — {lesson.title}</h2>
              <div className="space-y-6">
                {lesson.quiz.map((q, qi) => (
                  <div key={qi} className="bg-mdh-warm rounded-xl p-5">
                    <p className="font-semibold text-mdh-dark text-sm mb-4">{qi + 1}. {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => {
                        const selected = quizAnswers[qi] === oi
                        const correct = quizSubmitted && oi === q.correct
                        const wrong = quizSubmitted && selected && oi !== q.correct
                        return (
                          <button key={oi} disabled={quizSubmitted}
                            onClick={() => setQuizAnswers(prev => ({ ...prev, [qi]: oi }))}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-colors ${
                              correct ? 'bg-green-100 border-green-400 text-green-800' :
                              wrong ? 'bg-red-100 border-red-400 text-red-800' :
                              selected ? 'bg-mdh-gold/20 border-mdh-gold text-mdh-dark' :
                              'bg-white border-mdh-border text-mdh-dark hover:border-mdh-gold/50'
                            }`}>
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                    {quizSubmitted && (
                      <div className={`mt-3 text-xs p-3 rounded-lg ${quizAnswers[qi] === q.correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {quizAnswers[qi] === q.correct ? '✅ Benar! ' : '❌ Kurang tepat. '}
                        {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < lesson.quiz!.length}
                  className="mt-6 w-full bg-mdh-gold text-mdh-dark font-bold py-3 rounded-xl text-sm hover:opacity-80 transition-opacity disabled:opacity-40">
                  Submit Jawaban
                </button>
              ) : (
                <div className="mt-6 bg-white rounded-xl border border-mdh-border p-5 text-center">
                  <div className="font-display text-3xl font-bold text-mdh-dark mb-1">
                    {score}/{lesson.quiz!.length}
                  </div>
                  <p className="text-mdh-mid text-sm mb-3">
                    {score === lesson.quiz!.length ? '🎉 Sempurna! Kamu paham materi ini.' :
                     score >= lesson.quiz!.length / 2 ? '👍 Bagus! Review materi yang salah ya.' :
                     '📚 Review materi lagi, lalu coba ulang.'}
                  </p>
                  <button onClick={() => { setQuizSubmitted(false); setQuizAnswers({}) }}
                    className="text-sm text-mdh-gold hover:underline">
                    Coba lagi
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link href={`/modules/${params.moduleId}`} className="text-sm text-mdh-mid hover:text-mdh-dark">
          ← Lesson sebelumnya
        </Link>
        <Link href={`/modules/${params.moduleId}`}
          className="bg-mdh-gold text-mdh-dark font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-80 transition-opacity">
          Lesson berikutnya →
        </Link>
      </div>
    </div>
  )
}