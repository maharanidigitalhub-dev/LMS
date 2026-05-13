import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

const QUICK_LINKS = [
  { href: '/modules', label: 'Lanjut Belajar', desc: 'Level 3 — Meta Ads Foundation', color: 'bg-meta-light text-meta-dark border-meta-blue/20' },
  { href: '/slides/MDH_04_Slide_Materi.html', label: 'Slide Materi', desc: 'Meta Ads — Dari Nol Sampai Jalan', color: 'bg-mdh-warm text-mdh-dark border-mdh-border', external: true },
  { href: '/assignments', label: 'Tugas Aktif', desc: '2 tugas menunggu submission', color: 'bg-mdh-blush/40 text-mdh-dark border-mdh-terra/20' },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const name = user?.user_metadata?.full_name?.split(' ')[0] || 'Student'

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-mdh-dark mb-1">
          Halo, {name}!
        </h1>
        <p className="text-mdh-mid text-sm">Lanjutkan perjalanan belajarmu hari ini.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Level selesai', val: '2/9' },
          { label: 'Quiz passed', val: '8' },
          { label: 'Hari streak', val: '3' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-mdh-border p-4">
            <div className="font-display text-2xl font-bold text-mdh-dark">{s.val}</div>
            <div className="text-xs text-mdh-mid mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="bg-white rounded-xl border border-mdh-border p-5 mb-8">
        <div className="flex justify-between text-sm mb-3">
          <span className="font-semibold text-mdh-dark">Overall Progress</span>
          <span className="text-mdh-mid">22%</span>
        </div>
        <div className="bg-mdh-warm rounded-full h-2">
          <div className="bg-mdh-gold h-2 rounded-full" style={{ width: '22%' }} />
        </div>
        <p className="text-xs text-mdh-mid mt-2">Level 2 of 9 complete — kamu di track yang benar!</p>
      </div>

      {/* Quick links */}
      <h2 className="font-display text-xl font-bold text-mdh-dark mb-4">Akses Cepat</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {QUICK_LINKS.map(q => (
          <Link
            key={q.href}
            href={q.href}
            target={q.external ? '_blank' : undefined}
            className={`rounded-xl border p-4 hover:opacity-80 transition-opacity ${q.color}`}
          >
            <div className="font-semibold text-sm mb-1">{q.label}</div>
            <div className="text-xs opacity-60">{q.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
