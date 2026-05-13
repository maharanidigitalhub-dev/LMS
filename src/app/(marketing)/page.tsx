import Link from 'next/link'

const LEVELS = [
  { num: '0', label: 'Orientation',             color: 'bg-mdh-warm border-mdh-border',        text: 'text-mdh-mid' },
  { num: '1', label: 'Advertising Foundation',  color: 'bg-white border-mdh-border',            text: 'text-mdh-dark' },
  { num: '2', label: 'Creative Foundation',     color: 'bg-white border-mdh-border',            text: 'text-mdh-dark' },
  { num: '3', label: 'Meta Ads Foundation',     color: 'bg-meta-light border-meta-blue/20',    text: 'text-meta-dark' },
  { num: '4', label: 'TikTok Ads Foundation',   color: 'bg-tiktok-black/5 border-tiktok-black/10', text: 'text-mdh-dark' },
  { num: '5', label: 'Campaign Launch System',  color: 'bg-mdh-blush/40 border-mdh-terra/30',  text: 'text-mdh-dark' },
  { num: '6', label: 'Metrics & Optimization',  color: 'bg-mdh-warm border-mdh-border',        text: 'text-mdh-dark' },
  { num: '7', label: 'Troubleshooting',         color: 'bg-white border-mdh-border',            text: 'text-mdh-dark' },
  { num: '8', label: 'Simulation & Graduation', color: 'bg-mdh-gold/10 border-mdh-gold/30',    text: 'text-mdh-dark' },
]

const OUTCOMES = [
  'Setup & publish Meta Ads campaign',
  'Setup & publish TikTok Ads campaign',
  'Membuat creative yang convert',
  'Baca dashboard & metrics dasar',
  'Troubleshoot masalah iklan',
  'Optimasi campaign underperform',
]

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-mdh-dark text-white">

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-mdh-dark/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-display font-bold text-mdh-gold text-lg tracking-tight">MDH</span>
          <Link href="/modules"
            className="text-sm bg-mdh-gold text-mdh-dark font-semibold px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity">
            Mulai Belajar →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-mdh-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-mdh-terra/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block text-xs tracking-[3px] uppercase text-mdh-gold mb-6 font-semibold">
            Maharani Digital Hub · LMS
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black leading-[1.05] mb-6 text-balance">
            The Ultimate<br />
            <em className="text-mdh-gold not-italic">Digital Advertiser</em>
          </h1>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Dari nol sampai bisa publish iklan, baca metrics, dan optimasi campaign — Meta Ads & TikTok Ads.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/modules"
              className="bg-mdh-gold text-mdh-dark font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm">
              Mulai Belajar Sekarang →
            </Link>
            <Link href="/slides/MDH_04_Slide_Materi.html" target="_blank"
              className="border border-white/20 text-white/80 px-8 py-3.5 rounded-xl hover:bg-white/5 transition-colors text-sm">
              Lihat Contoh Materi
            </Link>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-16 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-10">
            Setelah selesai, kamu bisa:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {OUTCOMES.map((o, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="text-mdh-gold mt-0.5 flex-shrink-0">✓</span>
                <span className="text-white/80 text-sm leading-relaxed">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-3">Kurikulum 9 Level</h2>
            <p className="text-white/50 text-sm">Progressive unlock — selesaikan satu level, baru lanjut ke berikutnya.</p>
          </div>
          <div className="space-y-2">
            {LEVELS.map((l) => (
              <div key={l.num} className={`flex items-center gap-4 rounded-xl px-5 py-4 border ${l.color}`}>
                <span className={`font-display text-3xl font-black opacity-20 w-8 text-right flex-shrink-0 ${l.text}`}>
                  {l.num}
                </span>
                <span className={`font-semibold text-sm ${l.text}`}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">Siap mulai?</h2>
        <p className="text-white/50 text-sm mb-8">Langsung akses semua materi — gratis, tanpa perlu daftar.</p>
        <Link href="/modules"
          className="inline-block bg-mdh-gold text-mdh-dark font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity">
          Buka Modul Sekarang
        </Link>
      </section>

      <footer className="py-8 px-6 border-t border-white/10 text-center text-white/30 text-xs">
        © 2025 Maharani Digital Hub. All rights reserved.
      </footer>
    </main>
  )
}