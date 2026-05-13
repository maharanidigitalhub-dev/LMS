import Link from 'next/link'
import { notFound } from 'next/navigation'

const MODULE_DATA: Record<string, { title: string; desc: string; lessons: { id: string; title: string; duration: string; done: boolean }[] }> = {
  'level-3': {
    title: 'Meta Ads Foundation',
    desc: 'Pahami ekosistem Meta, struktur campaign, dan setup iklan pertamamu.',
    lessons: [
      { id: 'meta-ecosystem',   title: 'Meta Ads Ecosystem',    duration: '15 min', done: false },
      { id: 'campaign-setup',   title: 'Campaign Setup',        duration: '25 min', done: false },
      { id: 'meta-pixel',       title: 'Meta Pixel Basics',     duration: '20 min', done: false },
    ],
  },
}

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  const data = MODULE_DATA[params.moduleId]
  if (!data) notFound()

  return (
    <div>
      <Link href="/modules" className="text-xs text-mdh-mid hover:text-mdh-dark mb-6 inline-block">
        ← Semua Modul
      </Link>
      <h1 className="font-display text-3xl font-bold text-mdh-dark mb-2">{data.title}</h1>
      <p className="text-mdh-mid text-sm mb-8">{data.desc}</p>

      <div className="space-y-2">
        {data.lessons.map((lesson, i) => (
          <Link
            key={lesson.id}
            href={`/modules/${params.moduleId}/${lesson.id}`}
            className="flex items-center gap-4 bg-white rounded-xl border border-mdh-border p-4 hover:border-mdh-gold/50 transition-colors"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
              lesson.done ? 'bg-mdh-terra/20 text-mdh-terra' : 'bg-mdh-warm text-mdh-mid'
            }`}>
              {lesson.done ? '✓' : i + 1}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-mdh-dark text-sm">{lesson.title}</div>
              <div className="text-xs text-mdh-mid">{lesson.duration}</div>
            </div>
            <span className="text-mdh-mid text-sm">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
