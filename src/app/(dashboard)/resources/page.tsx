const RESOURCES = [
  { title: 'Meta Ads — Slide Materi (Pertemuan 9–10)',  type: 'Slide HTML',  href: '/slides/MDH_04_Slide_Materi.html', external: true },
  { title: 'KPI Cheat Sheet — CTR, CPM, CPC, ROAS',   type: 'PDF',         href: '#' },
  { title: 'Campaign Naming Convention Template',       type: 'Template',    href: '#' },
  { title: 'Pre-Launch Campaign Checklist',             type: 'Checklist',   href: '#' },
  { title: 'Meta Ads Library — Lihat Iklan Kompetitor', type: 'External',    href: 'https://www.facebook.com/ads/library/', external: true },
]

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-mdh-dark mb-2">Resources</h1>
      <p className="text-mdh-mid text-sm mb-8">Materi pendukung, template, dan referensi eksternal.</p>
      <div className="space-y-2">
        {RESOURCES.map(r => (
          <a
            key={r.title}
            href={r.href}
            target={r.external ? '_blank' : undefined}
            rel="noreferrer"
            className="flex items-center gap-4 bg-white rounded-xl border border-mdh-border p-4 hover:border-mdh-gold/40 transition-colors"
          >
            <div className="text-xs bg-mdh-warm text-mdh-mid font-semibold px-2 py-1 rounded flex-shrink-0 min-w-16 text-center">
              {r.type}
            </div>
            <div className="flex-1 text-sm font-medium text-mdh-dark">{r.title}</div>
            <span className="text-mdh-mid text-sm flex-shrink-0">{r.external ? '↗' : '↓'}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
