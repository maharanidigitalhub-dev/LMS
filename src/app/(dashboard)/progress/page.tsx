export default function ProgressPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-mdh-dark mb-2">Progress</h1>
      <p className="text-mdh-mid text-sm mb-8">Lacak perjalanan belajarmu.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Level Selesai', val: '2 / 9' },
          { label: 'Lesson Selesai', val: '6 / 27' },
          { label: 'Quiz Score Avg', val: '82%' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl border border-mdh-border p-5">
            <div className="font-display text-2xl font-bold text-mdh-dark">{s.val}</div>
            <div className="text-xs text-mdh-mid mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-mdh-border p-6">
        <h2 className="font-semibold text-mdh-dark text-sm mb-4">Progress per Level</h2>
        {[0,1,2,3,4,5,6,7,8].map(n => (
          <div key={n} className="flex items-center gap-3 mb-3">
            <span className="text-xs text-mdh-mid w-16">Level {n}</span>
            <div className="flex-1 bg-mdh-warm rounded-full h-1.5">
              <div className="bg-mdh-gold h-1.5 rounded-full" style={{ width: n < 2 ? '100%' : n === 2 ? '40%' : '0%' }} />
            </div>
            <span className="text-xs text-mdh-mid w-8 text-right">
              {n < 2 ? '100%' : n === 2 ? '40%' : '0%'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
