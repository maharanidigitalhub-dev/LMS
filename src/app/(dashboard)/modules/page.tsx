import Link from 'next/link'

const LEVELS = [
  { id: 'level-0', num: 0, label: 'Orientation',             modules: 5 },
  { id: 'level-1', num: 1, label: 'Advertising Foundation',  modules: 6 },
  { id: 'level-2', num: 2, label: 'Creative Foundation',     modules: 6 },
  { id: 'level-3', num: 3, label: 'Meta Ads Foundation',     modules: 5 },
  { id: 'level-4', num: 4, label: 'TikTok Ads Foundation',   modules: 4 },
  { id: 'level-5', num: 5, label: 'Campaign Launch System',  modules: 5 },
  { id: 'level-6', num: 6, label: 'Metrics & Optimization',  modules: 5 },
  { id: 'level-7', num: 7, label: 'Troubleshooting',         modules: 2 },
  { id: 'level-8', num: 8, label: 'Simulation & Graduation', modules: 3 },
]

export default function ModulesPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-mdh-dark mb-2">Modul Belajar</h1>
      <p className="text-mdh-mid text-sm mb-8">9 Level · Semua bisa diakses dan dipelajari berkali-kali</p>

      <div className="space-y-3">
        {LEVELS.map(level => (
          <Link
            key={level.id}
            href={`/modules/${level.id}`}
            className="flex items-center gap-5 bg-white rounded-xl border border-mdh-border p-5 hover:border-mdh-gold/50 hover:shadow-sm transition-all"
          >
            <span className="font-display text-4xl font-black text-mdh-dark/15 w-10 text-right flex-shrink-0">
              {level.num}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-mdh-dark text-sm">{level.label}</div>
              <div className="text-xs text-mdh-mid mt-0.5">{level.modules} lesson</div>
            </div>
            <span className="text-mdh-gold font-bold text-sm flex-shrink-0">Buka →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}