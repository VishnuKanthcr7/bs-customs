import { Seo } from '@/lib/seo'
import { QrLanding } from '@/components/qr/QrLanding'

export function QrPage() {
  return (
    <>
      <Seo
        title="BS CUSTOMS — Bidar"
        description="BS CUSTOMS in Bidar. Design a T-shirt, explore custom services, or message on WhatsApp."
        path="/qr"
      />
      <QrLanding />
    </>
  )
}
