'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <>
      <h1 className="font-display text-2xl font-bold text-white mb-2">Selamat datang</h1>
      <p className="text-white/50 text-sm mb-8">Masuk ke akun belajarmu</p>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-white/60 text-xs block mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-mdh-gold"
            placeholder="kamu@email.com"
            required
          />
        </div>
        <div>
          <label className="text-white/60 text-xs block mb-1.5">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-mdh-gold"
            placeholder="••••••••"
            required
          />
        </div>
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-mdh-gold text-mdh-dark font-bold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 text-sm"
        >
          {loading ? 'Masuk...' : 'Masuk'}
        </button>
      </form>

      <p className="text-center text-white/40 text-xs mt-6">
        Belum punya akun?{' '}
        <Link href="/register" className="text-mdh-gold hover:underline">Daftar</Link>
      </p>
    </>
  )
}
