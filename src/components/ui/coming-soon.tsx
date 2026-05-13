import Link from 'next/link'

type Props = {
  title: string
  description: string
  icon: string
}

export default function ComingSoon({ title, description, icon }: Props) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-6xl mb-6">{icon}</div>
      <h1 className="font-display text-3xl font-bold text-mdh-dark mb-3">{title}</h1>
      <p className="text-mdh-mid text-sm max-w-sm leading-relaxed mb-8">{description}</p>
      <div className="inline-flex items-center gap-2 bg-mdh-warm border border-mdh-border text-mdh-mid text-xs px-4 py-2 rounded-full">
        <span className="w-2 h-2 rounded-full bg-mdh-gold animate-pulse inline-block"></span>
        Segera hadir
      </div>
      <Link href="/modules" className="mt-6 text-sm text-mdh-gold hover:underline">
        ← Kembali ke Modul
      </Link>
    </div>
  )
}