export default function CertificatePage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold text-mdh-dark mb-2">Certificate</h1>
      <p className="text-mdh-mid text-sm mb-8">Sertifikat tersedia setelah menyelesaikan seluruh Level 0–8.</p>
      <div className="bg-white rounded-2xl border-2 border-dashed border-mdh-border p-12 text-center">
        <div className="text-5xl mb-4">🏆</div>
        <h2 className="font-display text-xl font-bold text-mdh-dark mb-2">Belum tersedia</h2>
        <p className="text-mdh-mid text-sm">Selesaikan semua 9 level untuk membuka sertifikat kelulusanmu sebagai <strong>Beginner Digital Advertiser</strong>.</p>
        <div className="mt-6 bg-mdh-warm rounded-xl p-4 text-left max-w-xs mx-auto">
          <div className="text-xs text-mdh-mid mb-2">Progress sertifikat</div>
          <div className="bg-mdh-border rounded-full h-2">
            <div className="bg-mdh-gold h-2 rounded-full" style={{ width: '22%' }} />
          </div>
          <div className="text-xs text-mdh-mid mt-1">2 dari 9 level selesai</div>
        </div>
      </div>
    </div>
  )
}
