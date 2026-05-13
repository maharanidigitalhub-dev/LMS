'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { User } from '@supabase/supabase-js'

const NAV = [
  { href: '/modules',     label: 'Modules',      icon: '◈', public: true  },
  { href: '/resources',   label: 'Resources',    icon: '↓', public: true  },
  { href: '/dashboard',   label: 'Dashboard',    icon: '⊞', public: false },
  { href: '/assignments', label: 'Assignments',  icon: '◻', public: false },
  { href: '/progress',    label: 'Progress',     icon: '◉', public: false },
  { href: '/certificate', label: 'Certificate',  icon: '★', public: false },
]

export default function Sidebar({ user }: { user: User | null }) {
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
          // Sembunyikan menu yang butuh login kalau belum login
          if (!item.public && !user) return null
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

      <div className="px-3 py-4 border-t border-white/10 space-y-1">
        <Link href="/slides/MDH_04_Slide_Materi.html" target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-meta-blue hover:bg-white/5 transition-colors">
          <span className="text-base w-5 text-center">▶</span>
          Slide Materi
        </Link>

        {user ? (
          <div className="px-3 py-2 text-xs text-white/30 truncate">
            {user.user_metadata?.full_name || user.email}
          </div>
        ) : (
          <Link href="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-mdh-gold hover:bg-white/5 transition-colors">
            <span className="text-base w-5 text-center">→</span>
            Login
          </Link>
        )}
      </div>
    </aside>
  )
}