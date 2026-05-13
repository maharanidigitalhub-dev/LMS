'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/modules',     label: 'Modules',     icon: '◈' },
  { href: '/resources',   label: 'Resources',   icon: '↓' },
  { href: '/dashboard',   label: 'Dashboard',   icon: '⊞' },
  { href: '/assignments', label: 'Assignments', icon: '◻' },
  { href: '/progress',    label: 'Progress',    icon: '◉' },
  { href: '/certificate', label: 'Certificate', icon: '★' },
]

export default function Sidebar() {
  const path = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-56 min-h-screen bg-mdh-dark border-r border-white/10 fixed top-0 left-0 z-40">
      <div className="px-5 py-5 border-b border-white/10">
        <Link href="/">
          <span className="font-display font-bold text-mdh-gold text-lg">MDH</span>
          <p className="text-white/30 text-xs mt-0.5">Ultimate Ads LMS</p>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV.map(item => {
          const active = path === item.href || path.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? 'bg-mdh-gold/15 text-mdh-gold font-semibold'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base w-5 text-center">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/10">
        <Link
          href="/slides/MDH_04_Slide_Materi.html"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-meta-blue hover:bg-white/5 transition-colors"
        >
          <span className="text-base w-5 text-center">▶</span>
          Slide Materi
        </Link>
      </div>
    </aside>
  )
}