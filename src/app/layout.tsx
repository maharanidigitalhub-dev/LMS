import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Ultimate Digital Advertiser | MDH',
  description: 'Sistem belajar media buying paling lengkap — Meta Ads & TikTok Ads dari nol sampai jalan.',
  openGraph: {
    title: 'The Ultimate Digital Advertiser | MDH',
    description: 'Sistem belajar media buying paling lengkap — Meta Ads & TikTok Ads.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-mdh-cream text-mdh-dark antialiased">
        {children}
      </body>
    </html>
  )
}
