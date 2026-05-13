import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mdh-dark flex flex-col items-center justify-center px-4">
      <Link href="/" className="font-display font-bold text-mdh-gold text-2xl mb-10">
        MDH
      </Link>
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">
        {children}
      </div>
    </div>
  )
}
