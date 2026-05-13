import Sidebar from '@/components/layout/sidebar'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Cek user tapi tidak redirect — biarkan middleware yang handle protected routes
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-mdh-cream">
      <Sidebar user={user} />
      <main className="md:pl-56">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}