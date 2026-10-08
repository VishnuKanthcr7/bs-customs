import { Link, useSearchParams } from 'react-router-dom'
import { site } from '@/config/site'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { QuickActions } from '@/components/actions/QuickActions'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { DirectionsButton } from '@/components/actions/DirectionsButton'
import { InstagramLink } from '@/components/actions/InstagramLink'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { QrCodePrint } from '@/components/qr/QrCodePrint'

export function QrLanding() {
  const [params] = useSearchParams()
  const message = whatsappTemplates.qr(params.get('src'))

  return (
    <Container className="py-8 md:py-12">
      <h1 className="font-display text-[clamp(3.1rem,12vw,6.2rem)] font-extrabold leading-[0.86] tracking-[-0.055em]">
        {site.brandName}
      </h1>
      <p className="mt-4 max-w-lg text-base font-medium leading-snug text-ink-soft">
        Custom Apparel • Gifts • Personalization • Branding
      </p>
      <div className="mt-6 grid gap-2">
        <Button href="/t-shirts/design" full>
          Design Your T-Shirt
        </Button>
        <WhatsAppButton message={message} full>
          WhatsApp Us
        </WhatsAppButton>
        <Button href="/services" variant="secondary" full>
          Explore Services
        </Button>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-ink/10 pt-4">
        <a href={site.phoneTel} className="inline-flex min-h-11 items-center text-sm font-semibold">
          Call
        </a>
        <InstagramLink />
        <DirectionsButton />
        <Link to="/quote" className="inline-flex min-h-11 items-center text-sm font-semibold">
          Get a Quote
        </Link>
      </div>
      <div className="mt-4 border border-ink/15">
        <QuickActions priority="qr" message={message} />
      </div>

      <address className="mt-10 text-base not-italic leading-relaxed">
        {site.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>

      <div className="mt-12">
        <h2 className="font-display text-3xl font-extrabold tracking-[-0.04em]">Work</h2>
        <div className="mt-4">
          <GalleryGrid limit={4} />
        </div>
      </div>

      <div className="mt-12">
        <QrCodePrint />
      </div>
    </Container>
  )
}
