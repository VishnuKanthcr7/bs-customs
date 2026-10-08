import { hoursLabel, isConfiguredUrl, site } from '@/config/site'
import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { InstagramLink } from '@/components/actions/InstagramLink'
import { DirectionsButton } from '@/components/actions/DirectionsButton'
import { whatsappTemplates } from '@/config/whatsappTemplates'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact BS CUSTOMS in Bidar"
        description="WhatsApp, call, or visit BS CUSTOMS on KEB Road, Bidar. Custom T-shirts, gifts, engraving, and signage."
        path="/contact"
      />
      <Container className="py-10 md:py-16">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/50">Contact</p>
        <h1 className="mt-3 font-display text-[clamp(3.2rem,8vw,6.4rem)] font-extrabold leading-[0.86] tracking-[-0.055em]">
          {site.brandName}
        </h1>
        <p className="mt-4 max-w-md text-lg text-ink-soft">Custom apparel, gifts, personalization, and branding in Bidar.</p>

        <div className="mt-8 grid gap-10 border-t border-ink/10 pt-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/50">Phone</p>
            <a href={site.phoneTel} className="mt-2 inline-flex min-h-12 items-center font-display text-3xl font-bold tracking-[-0.03em]">
              {site.phoneDisplay}
            </a>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <WhatsAppButton message={whatsappTemplates.home()}>WhatsApp</WhatsAppButton>
              <Button href="/t-shirts/design" variant="secondary">
                Design Your T-Shirt
              </Button>
            </div>
            <div className="mt-4">
              <InstagramLink />
            </div>
          </div>
          <div id="visit" className="scroll-mt-24 md:col-span-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/50">Address</p>
            <address className="mt-3 text-lg not-italic leading-relaxed">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-4">
              <DirectionsButton />
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
              {isConfiguredUrl(site.googleMapsUrl)
                ? 'Directions opens the official map.'
                : 'The official Google Maps link is not on the site yet. Use the address above until it is added.'}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink/70">{hoursLabel()}</p>
            <Button href="/quote" className="mt-6">
              Get a Quote
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
