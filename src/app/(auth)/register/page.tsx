'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const router = useRouter()

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="text-center">
        <div className="text-4xl mb-4">✉️</div>
        <h2 className="font-display text-xl font-bold text-white mb-2">Cek email kamu</h2>
        <p className="text-white/50 text-sm">Kami kirim link konfirmasi ke <strong className="text-white">{email}</strong>. Klik link tersebut untuk aktivasi akun.</p>
      </div>
    )
  }

  return (
    <>
      <h1 className="font-display text-2xl font-bold text-white mb-2">Buat akun</h1>
      <p className="text-white/50 text-sm mb-8">Mulai perjalanan belajarmu hari ini</p>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="text-white/60 text-xs block mb-1.5">Nama lengkap</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-mdh-gold"
            placeholder="Nama kamu"
            required
          />
        </div>
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
            placeholder="Min. 8 karakter"
            minLength={8}
            required
          />
        </div>
        {error && <p className="text-red-400 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-mdh-gold text-mdh-dark font-bold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 text-sm"
        >
          {loading ? 'Membuat akun...' : 'Daftar Sekarang'}
        </button>
      </form>

      <p className="text-center text-white/40 text-xs mt-6">
        Sudah punya akun?{' '}
        <Link href="/login" className="text-mdh-gold hover:underline">Masuk</Link>
      </p>
    </>
  )
}
