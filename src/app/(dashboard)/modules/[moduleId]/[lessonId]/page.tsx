import Link from 'next/link'

export default function LessonPage({ params }: { params: { moduleId: string; lessonId: string } }) {
  return (
    <div>
      <Link href={`/modules/${params.moduleId}`} className="text-xs text-mdh-mid hover:text-mdh-dark mb-6 inline-block">
        ← Kembali ke Modul
      </Link>

      {/* Video area */}
      <div className="bg-mdh-dark rounded-2xl aspect-video flex items-center justify-center mb-6 relative overflow-hidden">
        <div className="text-center">
          <div className="text-4xl mb-3">▶</div>
          <p className="text-white/50 text-sm">Video akan ditampilkan di sini</p>
          <p className="text-white/30 text-xs mt-1">Embed Vimeo / Bunny Stream</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl border border-mdh-border overflow-hidden">
        <div className="flex border-b border-mdh-border">
          {['Overview', 'Notes', 'Resources', 'Quiz'].map((tab, i) => (
            <button key={tab}
              className={`px-5 py-3 text-sm font-medium transition-colors ${i === 0 ? 'text-mdh-gold border-b-2 border-mdh-gold' : 'text-mdh-mid hover:text-mdh-dark'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="p-6">
          <h2 className="font-display text-xl font-bold text-mdh-dark mb-3">Meta Ads Ecosystem</h2>
          <p className="text-mdh-mid text-sm leading-relaxed">
            Dalam lesson ini kamu akan memahami seluruh ekosistem Meta — dari Facebook Personal Account, Facebook Page, Meta Business Suite, hingga Ads Manager. Fondasi yang solid di sini akan membuat semua step berikutnya lebih mudah dipahami.
          </p>

          <div className="mt-6 pt-6 border-t border-mdh-border">
            <h3 className="font-semibold text-mdh-dark text-sm mb-3">Yang akan kamu pelajari</h3>
            <ul className="space-y-2">
              {[
                'Struktur ekosistem Meta bisnis',
                'Perbedaan Facebook Page vs Personal Account',
                'Navigasi Meta Ads Manager',
                'Checklist sebelum mulai beriklan',
              ].map(item => (
                <li key={item} className="flex gap-2 text-sm text-mdh-mid">
                  <span className="text-mdh-gold flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Next button */}
      <div className="flex justify-end mt-6">
        <button className="bg-mdh-gold text-mdh-dark font-bold px-6 py-2.5 rounded-xl text-sm hover:opacity-80 transition-opacity">
          Selesai & Lanjut →
        </button>
      </div>
    </div>
  )
}
