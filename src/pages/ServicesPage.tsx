import { Link } from 'react-router-dom'
import { services } from '@/config/services'
import { campaign } from '@/config/campaign'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Button } from '@/components/ui/Button'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { QuoteCta } from '@/components/actions/QuoteCta'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { CallButton } from '@/components/actions/CallButton'

export function ServicesPage() {
  const gifts = services[0]
  const laser = services[1]
  const stone = services[2]
  const led = services[3]
  const bulk = services[4]

  return (
    <>
      <Seo
        title="Custom Services in Bidar — BS CUSTOMS"
        description="Custom printing, laser engraving, stone personalization, LED signage, and bulk orders from BS CUSTOMS in Bidar."
        path="/services"
      />
      <Container className="pb-4 pt-12 md:pt-16">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/50">Services</p>
        <h1 className="mt-3 max-w-4xl font-display text-[clamp(3.2rem,7vw,6.2rem)] font-extrabold leading-[0.86] tracking-[-0.055em]">
          Custom services
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">
          T-shirts lead the studio. The chapters below are the rest of the work — each one starts as an enquiry.
        </p>
        <Button href="/t-shirts" className="mt-6" variant="secondary">
          Explore T-Shirts
        </Button>
      </Container>

      {gifts ? (
        <section className="bg-cream-muted">
          <Container className="grid items-end gap-8 py-14 md:grid-cols-12 md:py-20">
            <div className="md:col-span-7 md:-ml-6">
              <MediaFrame label="Gift" alt={campaign.gift.alt} src={campaign.gift.src} kind="gift" aspect="portrait" tone="cream" />
            </div>
            <div className="md:col-span-5 md:pb-8">
              <p className="font-mono text-xs text-ink/45">{gifts.index}</p>
              <h2 className="mt-3 font-display text-[clamp(2.4rem,4vw,4.2rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
                {gifts.title}
              </h2>
              <p className="mt-4 max-w-sm text-ink-soft">{gifts.lede}</p>
              <Link to={`/services/${gifts.slug}`} className="mt-6 inline-flex min-h-11 items-center border-b-2 border-lime font-semibold">
                Open chapter
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      {laser ? (
        <section className="night bg-ink text-cream">
          <Container className="py-16 md:py-24">
            <p className="font-display text-[clamp(5rem,14vw,10rem)] font-extrabold leading-none tracking-[-0.07em] text-cream/15">
              {laser.index}
            </p>
            <h2 className="-mt-8 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.4rem)] font-extrabold leading-[0.9] tracking-[-0.045em] md:-mt-16">
              {laser.title}
            </h2>
            <p className="mt-4 max-w-md text-cream/75">{laser.lede}</p>
            <div className="mt-10 md:w-3/5">
              <MediaFrame label="Objects" alt={campaign.laser.alt} src={campaign.laser.src} kind="macro" aspect="landscape" />
            </div>
            <Link to={`/services/${laser.slug}`} className="mt-6 inline-flex min-h-11 items-center border-b-2 border-lime font-semibold">
              Open chapter
            </Link>
          </Container>
        </section>
      ) : null}

      {stone ? (
        <section className="bg-cream py-16 md:py-28">
          <Container>
            <p className="font-mono text-xs text-ink/45">{stone.index}</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              {stone.title}
            </h2>
          </Container>
          <div className="mt-10">
            <MediaFrame label="Ceramic pieces" alt={campaign.stone.alt} src={campaign.stone.src} kind="stone" aspect="landscape" tone="cream" className="max-h-[70vh]" />
          </div>
          <Container>
            <p className="mt-8 max-w-lg text-lg text-ink-soft">{stone.lede}</p>
            <Link
              to={`/services/${stone.slug}`}
              className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4"
            >
              Open chapter
            </Link>
          </Container>
        </section>
      ) : null}

      {led ? (
        <section className="night bg-ink text-cream">
          <Container className="grid items-center gap-10 py-16 md:grid-cols-12 md:py-24">
            <div className="md:col-span-5">
              <p className="font-mono text-xs text-lime">{led.index}</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">{led.title}</h2>
              <p className="mt-4 text-cream/75">{led.lede}</p>
              <Link to={`/services/${led.slug}`} className="mt-6 inline-flex min-h-11 items-center border-b-2 border-lime font-semibold">
                Open chapter
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <MediaFrame label="Neon sign" alt={campaign.neon.alt} src={campaign.neon.src} kind="glow" aspect="square" />
            </div>
          </Container>
        </section>
      ) : null}

      {bulk ? (
        <section className="border-t border-ink/10 bg-cream">
          <Container className="py-16 md:py-24">
            <p className="font-mono text-xs text-ink/45">{bulk.index}</p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4.8rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
              {bulk.title}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-ink-soft">{bulk.lede}</p>
            <p className="mt-3 max-w-lg text-sm text-ink/60">
              BS CUSTOMS handles bulk and custom work for businesses and events. Tell us the brief.
            </p>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <QuoteCta>Get a Quote</QuoteCta>
              <WhatsAppButton message={whatsappTemplates.bulk()}>WhatsApp</WhatsAppButton>
              <CallButton />
            </div>
            <Link to={`/services/${bulk.slug}`} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4">
              Open the brief
            </Link>
          </Container>
        </section>
      ) : null}

      <Container className="pb-20 pt-4">
        <h2 className="font-display text-3xl font-extrabold tracking-[-0.04em]">Index</h2>
        <div className="mt-4">
          <ServiceGrid />
        </div>
      </Container>
    </>
  )
}
