import { Link } from 'react-router-dom'
import { services } from '@/config/services'
import { galleryItems } from '@/config/gallery'
import { campaign } from '@/config/campaign'
import { hoursLabel, isConfiguredUrl, site } from '@/config/site'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { Seo } from '@/lib/seo'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/Container'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Button } from '@/components/ui/Button'
import { Hero } from '@/components/hero/Hero'
import { ApparelExperience } from '@/components/home/ApparelExperience'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { CallButton } from '@/components/actions/CallButton'
import { QuoteCta } from '@/components/actions/QuoteCta'
import { DirectionsButton } from '@/components/actions/DirectionsButton'
import { InstagramLink } from '@/components/actions/InstagramLink'
import { ReviewsSection } from '@/components/reviews/ReviewsSection'

const serviceVisual: Record<string, { src: string; alt: string }> = {
  'custom-gifts': campaign.gift,
  'laser-engraving': campaign.laser,
  'stone-personalization': campaign.stone,
  'led-neon': campaign.neon,
  'corporate-bulk': campaign.stack,
}

const steps = [
  { n: '01', title: 'Tell us the idea', body: 'Use the design flow, WhatsApp, or a call.' },
  { n: '02', title: 'We confirm the brief', body: 'Colour, size, artwork, and what is possible.' },
  { n: '03', title: 'You approve', body: 'Nothing is produced before you agree the details.' },
  { n: '04', title: 'We make the order', body: 'Timing is confirmed with the brief, not assumed here.' },
]

export function HomePage() {
  const preview = galleryItems.filter((_, index) => [0, 4, 7, 10, 11].includes(index))

  return (
    <>
      <Seo
        title="BS CUSTOMS — Custom T-Shirts & Personalization in Bidar"
        description="BS CUSTOMS in Bidar makes custom T-shirts, personalized gifts, engraving, and signage. Design a shirt or enquire on WhatsApp."
        path="/"
      />
      <Hero />
      <ApparelExperience />

      <section className="bg-cream">
        <Container className="py-16 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              Custom services
            </h2>
            <Link to="/services" className="hidden min-h-11 items-center text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4 sm:inline-flex">
              All services
            </Link>
          </div>
          <ul className="mt-8 border-t border-ink/15">
            {services.map((service, index) => {
              const photo = serviceVisual[service.slug] ?? campaign.fashion
              const flip = index % 2 === 1
              return (
                <li key={service.slug} className="border-b border-ink/15">
                  <Link
                    to={`/services/${service.slug}`}
                    className="grid items-center gap-5 py-6 md:grid-cols-12 md:py-8"
                  >
                    <div className={cn('md:col-span-5', flip && 'md:col-start-8 md:order-2')}>
                      <MediaFrame label={service.title} alt={photo.alt} src={photo.src} kind="plain" aspect="landscape" />
                    </div>
                    <div className={cn('md:col-span-6', flip ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7')}>
                      <p className="font-mono text-xs text-ink/45">{service.index}</p>
                      <h3 className="mt-2 font-display text-[clamp(1.8rem,3vw,3rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
                        {service.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{service.lede}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <section className="border-y border-ink/10 bg-cream-muted">
        <Container className="py-16 md:py-24">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/55">How an order starts</p>
          <ol className="mt-8 grid gap-0 md:grid-cols-4 md:divide-x md:divide-ink/15">
            {steps.map((step) => (
              <li key={step.n} className="border-t border-ink/15 py-6 md:border-t-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <p className="font-mono text-xs text-ink/50">STEP {step.n}</p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-16 md:py-24">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold tracking-[-0.045em]">Gallery</h2>
            <Link to="/gallery" className="min-h-11 text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4">
              Open gallery
            </Link>
          </div>
          <div className="grid grid-cols-12 gap-3">
            {preview.map((item, index) => (
              <Link
                key={item.id}
                to="/gallery"
                className={
                  index === 0
                    ? 'col-span-12 md:col-span-7'
                    : index < 3
                      ? 'col-span-6 md:col-span-5'
                      : index === 3
                        ? 'col-span-7 md:col-span-4'
                        : 'col-span-5 md:col-span-8 md:mt-8'
                }
              >
                <MediaFrame
                  label={item.label}
                  alt={item.alt}
                  src={item.src}
                  kind={item.kind}
                  aspect={index === 0 ? 'portrait' : item.aspect === 'tall' ? 'portrait' : item.aspect}
                  className={index === 0 ? 'md:aspect-[5/4]' : undefined}
                />
              </Link>
            ))}
          </div>
          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/45">
            Campaign photography — not BS CUSTOMS customer work
          </p>
        </Container>
      </section>

      <section className="night bg-ink text-cream">
        <Container className="grid items-end gap-10 py-16 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-lime">Bulk</p>
            <h2 className="mt-3 font-display text-[clamp(2.8rem,6vw,5.4rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              Orders for a team, an event, a business.
            </h2>
          </div>
          <div className="md:col-span-5">
            <ul className="space-y-3 text-lg">
              {['Apparel batches', 'Staff / event tees', 'Business branding', 'Signage', 'Mixed orders'].map((item) => (
                <li key={item} className="border-b border-cream/15 pb-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <QuoteCta tone="inverse">Get a Quote</QuoteCta>
              <WhatsAppButton message={whatsappTemplates.bulk()} tone="inverse">
                WhatsApp
              </WhatsAppButton>
              <CallButton tone="inverse" />
            </div>
            <Link to="/services/corporate-bulk" className="mt-5 inline-flex min-h-11 items-center border-b-2 border-lime text-sm font-semibold">
              Corporate & bulk
            </Link>
          </div>
        </Container>
      </section>

      <section id="visit" className="scroll-mt-20 bg-cream">
        <Container className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="font-display text-[clamp(4rem,10vw,8rem)] font-extrabold leading-none tracking-[-0.06em]">
              Bidar
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-ink/50">Karnataka</p>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em]">The studio address</h2>
            <address className="mt-4 text-base not-italic leading-relaxed">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-ink/60">{hoursLabel()}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1">
              <a href={site.phoneTel} className="inline-flex min-h-11 items-center font-semibold">
                {site.phoneDisplay}
              </a>
              <DirectionsButton />
              <InstagramLink />
            </div>
            <div className="mt-8 border border-ink/15 bg-cream-muted px-4 py-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/50">Map</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed">
                {isConfiguredUrl(site.googleMapsUrl)
                  ? 'Open the official map for directions.'
                  : 'The official Google Maps link is not on the site yet. The address above is the one to use.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream-muted">
        <Container className="grid gap-8 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/55">{site.founderRole}</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold tracking-[-0.045em]">{site.founderName}</h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-xl text-lg leading-relaxed">
              {site.brandName} is run by {site.founderName} in Bidar. A founder story will replace this note when it is approved.
            </p>
            <Button href="/about" variant="secondary" className="mt-8">
              About the studio
            </Button>
          </div>
        </Container>
      </section>

      <ReviewsSection />

      <section className="bg-cream">
        <Container className="grid items-end gap-8 py-20 md:grid-cols-12 md:py-28">
          <h2 className="font-display text-[clamp(3rem,7vw,6.2rem)] font-extrabold leading-[0.86] tracking-[-0.055em] md:col-span-8">
            Tell us what you want made.
          </h2>
          <div className="flex flex-col gap-2 md:col-span-4">
            <Button href="/t-shirts/design" full>
              Design Your T-Shirt
            </Button>
            <QuoteCta full />
            <WhatsAppButton message={whatsappTemplates.home()} full>
              WhatsApp Us
            </WhatsAppButton>
          </div>
        </Container>
      </section>
    </>
  )
}
