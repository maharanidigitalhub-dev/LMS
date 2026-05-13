import Link from 'next/link'

type Lesson = { id: string; title: string; duration: string; done: boolean }
type ModuleData = { title: string; desc: string; lessons: Lesson[] }

const MODULE_DATA: Record<string, ModuleData> = {
  'level-0': {
    title: 'Orientation',
    desc: 'Kenali dunia digital advertising dan cara kerja LMS ini.',
    lessons: [
      { id: 'intro-digital-ads',  title: 'Introduction to Digital Advertising', duration: '10 min', done: false },
      { id: 'what-is-media-buying', title: 'What is Media Buying',              duration: '8 min',  done: false },
      { id: 'how-ads-work',       title: 'How Modern Ads Work',                 duration: '12 min', done: false },
      { id: 'ecosystem-overview', title: 'Advertising Ecosystem Overview',      duration: '10 min', done: false },
      { id: 'student-roadmap',    title: 'Student Roadmap',                     duration: '5 min',  done: false },
    ],
  },
  'level-1': {
    title: 'Advertising Foundation',
    desc: 'Funnel, customer journey, metrics dasar, dan logika di balik iklan.',
    lessons: [
      { id: 'what-is-advertising', title: 'What is Advertising',    duration: '10 min', done: false },
      { id: 'funnel-basics',       title: 'Funnel Basics',           duration: '12 min', done: false },
      { id: 'customer-journey',    title: 'Customer Journey',        duration: '10 min', done: false },
      { id: 'awareness-vs-conv',   title: 'Awareness vs Conversion', duration: '8 min',  done: false },
      { id: 'ads-psychology',      title: 'Advertising Psychology',  duration: '15 min', done: false },
      { id: 'metrics-foundation',  title: 'Metrics — CTR CPM CPC ROAS', duration: '20 min', done: false },
    ],
  },
  'level-2': {
    title: 'Creative Foundation',
    desc: 'Hook, copywriting, PAS, AIDA, dan sistem UGC untuk iklan yang convert.',
    lessons: [
      { id: 'human-attention',   title: 'Human Attention & Scroll Behavior', duration: '12 min', done: false },
      { id: 'hook-basics',       title: 'Hook Basics',                        duration: '15 min', done: false },
      { id: 'pas-framework',     title: 'PAS Framework',                      duration: '12 min', done: false },
      { id: 'aida-framework',    title: 'AIDA Framework',                     duration: '10 min', done: false },
      { id: 'cta-basics',        title: 'CTA Basics',                         duration: '8 min',  done: false },
      { id: 'ugc-system',        title: 'UGC Creative System',                duration: '18 min', done: false },
    ],
  },
  'level-3': {
    title: 'Meta Ads Foundation',
    desc: 'Pahami ekosistem Meta, struktur campaign 3 level, dan publish iklan pertamamu.',
    lessons: [
      { id: 'meta-ecosystem',   title: 'Meta Ads Ecosystem',              duration: '15 min', done: false },
      { id: 'campaign-setup',   title: 'Campaign Setup — Step by Step',   duration: '25 min', done: false },
      { id: 'audience-targeting', title: 'Audience Targeting',            duration: '18 min', done: false },
      { id: 'ad-creative',      title: 'Ad Creative & Copywriting',       duration: '20 min', done: false },
      { id: 'meta-pixel',       title: 'Meta Pixel Basics',               duration: '15 min', done: false },
    ],
  },
  'level-4': {
    title: 'TikTok Ads Foundation',
    desc: 'TikTok Ads Manager, campaign setup, Spark Ads, dan creative system.',
    lessons: [
      { id: 'tiktok-ecosystem',   title: 'TikTok Ads Ecosystem',          duration: '12 min', done: false },
      { id: 'tiktok-campaign',    title: 'TikTok Campaign Setup',         duration: '20 min', done: false },
      { id: 'spark-ads',          title: 'Spark Ads',                     duration: '15 min', done: false },
      { id: 'tiktok-creative',    title: 'TikTok Creative System',        duration: '18 min', done: false },
    ],
  },
  'level-5': {
    title: 'Campaign Launch System',
    desc: 'Audience targeting lanjut, landing page basics, dan SOP publish campaign.',
    lessons: [
      { id: 'broad-targeting',    title: 'Broad Targeting',               duration: '12 min', done: false },
      { id: 'retargeting',        title: 'Retargeting Basics',            duration: '15 min', done: false },
      { id: 'lookalike',          title: 'Lookalike Audience',            duration: '12 min', done: false },
      { id: 'landing-page',       title: 'Landing Page Basics',           duration: '18 min', done: false },
      { id: 'launch-checklist',   title: 'Pre-Launch Checklist & SOP',   duration: '10 min', done: false },
    ],
  },
  'level-6': {
    title: 'Metrics & Optimization',
    desc: 'Baca dashboard, kapan kill ads, kapan scale, dan creative fatigue.',
    lessons: [
      { id: 'reading-dashboard',  title: 'Reading Ads Dashboard',         duration: '15 min', done: false },
      { id: 'when-to-kill',       title: 'When to Kill Ads',              duration: '12 min', done: false },
      { id: 'when-to-scale',      title: 'When to Scale Ads',             duration: '12 min', done: false },
      { id: 'creative-fatigue',   title: 'Creative Fatigue',              duration: '10 min', done: false },
      { id: 'creative-testing',   title: 'Creative Testing Basics',       duration: '15 min', done: false },
    ],
  },
  'level-7': {
    title: 'Troubleshooting',
    desc: 'Diagnosa masalah umum — high CPM, low CTR, no spend, bad leads.',
    lessons: [
      { id: 'common-problems',    title: 'Beginner Ads Problems',         duration: '20 min', done: false },
      { id: 'account-safety',     title: 'Account Safety Basics',         duration: '15 min', done: false },
    ],
  },
  'level-8': {
    title: 'Simulation & Graduation',
    desc: 'Final campaign simulation, evaluasi, dan sertifikat kelulusan.',
    lessons: [
      { id: 'final-simulation',   title: 'Final Campaign Simulation',     duration: '30 min', done: false },
      { id: 'evaluation',         title: 'Beginner Media Buyer Evaluation', duration: '20 min', done: false },
      { id: 'graduation',         title: 'Graduation & Next Path',        duration: '10 min', done: false },
    ],
  },
}

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  const data = MODULE_DATA[params.moduleId]

  if (!data) {
    return (
      <div>
        <Link href="/modules" className="text-xs text-mdh-mid hover:text-mdh-dark mb-6 inline-block">
          ← Semua Modul
        </Link>
        <div className="bg-white rounded-2xl border border-mdh-border p-12 text-center">
          <div className="text-4xl mb-4">🚧</div>
          <h2 className="font-display text-xl font-bold text-mdh-dark mb-2">Konten belum tersedia</h2>
          <p className="text-mdh-mid text-sm">Modul ini sedang dalam persiapan. Cek kembali soon!</p>
          <Link href="/modules" className="inline-block mt-6 text-sm text-mdh-gold hover:underline">
            ← Kembali ke daftar modul
          </Link>
        </div>
      </div>
    )
  }

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