import Link from 'next/link'

const LEVELS = [
  { id: 'level-0', num: 0, label: 'Orientation',             modules: 1, locked: false, done: true  },
  { id: 'level-1', num: 1, label: 'Advertising Foundation',  modules: 3, locked: false, done: true  },
  { id: 'level-2', num: 2, label: 'Creative Foundation',     modules: 3, locked: false, done: false },
  { id: 'level-3', num: 3, label: 'Meta Ads Foundation',     modules: 3, locked: false, done: false },
  { id: 'level-4', num: 4, label: 'TikTok Ads Foundation',   modules: 3, locked: true,  done: false },
  { id: 'level-5', num: 5, label: 'Campaign Launch System',  modules: 3, locked: true,  done: false },
  { id: 'level-6', num: 6, label: 'Metrics & Optimization',  modules: 3, locked: true,  done: false },
  { id: 'level-7', num: 7, label: 'Troubleshooting',         modules: 2, locked: true,  done: false },
  { id: 'level-8', num: 8, label: 'Simulation & Graduation', modules: 3, locked: true,  done: false },
]

export default function ModulesPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-mdh-dark mb-2">Modul Belajar</h1>
      <p className="text-mdh-mid text-sm mb-8">9 Level · Progressive unlock · Selesaikan satu untuk lanjut berikutnya</p>

      <div className="space-y-3">
        {LEVELS.map(level => (
          <div
            key={level.id}
            className={`rounded-xl border p-5 flex items-center gap-5 ${
              level.done
                ? 'bg-mdh-warm border-mdh-terra/30'
                : level.locked
                ? 'bg-white/60 border-mdh-border opacity-60'
                : 'bg-white border-mdh-border'
            }`}
          >
            <span className="font-display text-4xl font-black text-mdh-dark/15 w-10 text-right flex-shrink-0">
              {level.num}
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-mdh-dark text-sm">{level.label}</div>
              <div className="text-xs text-mdh-mid mt-0.5">{level.modules} modul</div>
            </div>
            <div className="flex-shrink-0">
              {level.done ? (
                <span className="text-xs bg-mdh-terra/20 text-mdh-terra font-semibold px-3 py-1 rounded-full">Selesai</span>
              ) : level.locked ? (
                <span className="text-xs text-mdh-mid">🔒 Locked</span>
              ) : (
                <Link href={`/modules/${level.id}`}
                  className="text-xs bg-mdh-gold text-mdh-dark font-bold px-4 py-1.5 rounded-full hover:opacity-80 transition-opacity">
                  Mulai →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
