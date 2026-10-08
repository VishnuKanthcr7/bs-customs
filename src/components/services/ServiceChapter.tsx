import type { ReactNode } from 'react'
import type { ServiceDef } from '@/config/services'
import { campaign } from '@/config/campaign'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { MediaFrame, type MediaKind } from '@/components/ui/MediaFrame'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { CallButton } from '@/components/actions/CallButton'
import { QuoteCta } from '@/components/actions/QuoteCta'
import { Container } from '@/components/ui/Container'

const kindFor: Record<ServiceDef['slug'], MediaKind> = {
  'custom-gifts': 'gift',
  'laser-engraving': 'macro',
  'stone-personalization': 'stone',
  'led-neon': 'glow',
  'corporate-bulk': 'workshop',
}

export function ServiceActions({ service, inverse = false }: { service: ServiceDef; inverse?: boolean }) {
  const message = whatsappTemplates[service.whatsappKey]()
  return (
    <div className="mt-8 flex flex-col gap-2 sm:flex-row">
      <WhatsAppButton message={message} tone={inverse ? 'inverse' : 'default'}>
        WhatsApp
      </WhatsAppButton>
      <QuoteCta tone={inverse ? 'inverse' : 'default'}>Get a Quote</QuoteCta>
    </div>
  )
}

export function ServiceChapter({ service, children }: { service: ServiceDef; children?: ReactNode }) {
  return (
    <article className="@container min-w-0">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] opacity-60">{service.index}</p>
      <h1 className="mt-3 font-display text-[clamp(2rem,9.4cqw,3.8rem)] font-extrabold leading-[0.9] tracking-[-0.045em] text-balance">
        {service.title}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-80">{service.lede}</p>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed">
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {children}
    </article>
  )
}

export function GiftsChapter({ service }: { service: ServiceDef }) {
  return (
    <div className="bg-cream-muted">
    <Container className="grid items-start gap-10 py-12 lg:grid-cols-12 lg:py-20">
      <div className="min-w-0 lg:sticky lg:top-24 lg:col-span-5">
        <ServiceChapter service={service} />
        <ul className="mt-8 space-y-3">
          {service.enquireAbout.map((item) => (
            <li key={item} className="border-t border-ink/15 pt-3 text-sm font-medium">
              {item}
            </li>
          ))}
        </ul>
        <ServiceActions service={service} />
      </div>
      <div className="grid gap-4 lg:col-span-7">
        <MediaFrame label="Gift" alt={campaign.gift.alt} src={campaign.gift.src} kind="gift" aspect="landscape" />
        <div className="ml-0 md:ml-16">
          <MediaFrame label="Gifts" alt={campaign.giftDetail.alt} src={campaign.giftDetail.src} kind="gift" aspect="portrait" tone="cream" />
        </div>
      </div>
    </Container>
    </div>
  )
}

export function LaserChapter({ service }: { service: ServiceDef }) {
  return (
    <div className="night dark-ui bg-ink text-cream">
      <Container className="grid gap-12 py-14 lg:grid-cols-12 lg:py-24">
        <div className="min-w-0 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
          <ServiceChapter service={service}>
            <ol className="mt-8 space-y-4">
              {['Share the item or the idea', 'We confirm what is possible', 'You approve the mark'].map((step, index) => (
                <li key={step} className="flex gap-4 border-t border-cream/15 pt-3">
                  <span className="font-mono text-xs text-lime">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </ServiceChapter>
          <ServiceActions service={service} inverse />
        </div>
        <div className="grid gap-4 lg:col-span-7">
          <MediaFrame label="Objects" alt={campaign.laser.alt} src={campaign.laser.src} kind={kindFor[service.slug]} aspect="portrait" />
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/50">
            Campaign photograph of objects — not a photograph of BS CUSTOMS engraving.
          </p>
        </div>
      </Container>
    </div>
  )
}

export function StoneChapter({ service }: { service: ServiceDef }) {
  return (
    <div className="bg-cream">
      <MediaFrame label="Ceramic pieces" alt={campaign.stone.alt} src={campaign.stone.src} kind="stone" aspect="hero" className="max-h-[78vh] w-full" />
      <p className="px-5 pt-3 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45 md:px-8">
        Campaign photograph — not a photograph of BS CUSTOMS stone work.
      </p>
      <Container className="grid gap-10 py-16 md:grid-cols-12 md:py-28">
        <div className="min-w-0 md:col-span-7">
          <ServiceChapter service={service} />
          <ServiceActions service={service} />
        </div>
        <ul className="md:col-span-4 md:col-start-9 md:pt-24">
          {service.enquireAbout.map((item) => (
            <li key={item} className="border-t border-ink/15 py-4 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export function LedChapter({ service }: { service: ServiceDef }) {
  return (
    <div className="night dark-ui bg-ink text-cream">
      <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="min-w-0 lg:col-span-5">
          <ServiceChapter service={service} />
          <ServiceActions service={service} inverse />
        </div>
        <div className="lg:col-span-7 lg:pt-10">
          <MediaFrame label="Neon sign" alt={campaign.neon.alt} src={campaign.neon.src} kind="glow" aspect="landscape" />
          <p className="mt-4 max-w-md text-sm text-cream/60">
            Share the words, a rough size, and where the sign will live.
          </p>
        </div>
      </Container>
    </div>
  )
}

export function CorporateChapter({ service, form }: { service: ServiceDef; form?: ReactNode }) {
  return (
    <div className="night dark-ui bg-ink-soft text-cream">
      <Container className="grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="min-w-0 lg:col-span-5">
          <ServiceChapter service={service} />
          <ul className="mt-8">
            {service.enquireAbout.map((item) => (
              <li key={item} className="border-b border-cream/15 py-3 text-lg">
                {item}
              </li>
            ))}
          </ul>
          {form ? (
            <div className="mt-8 flex flex-col gap-2 sm:flex-row">
              <WhatsAppButton message={whatsappTemplates.bulk()} tone="inverse">
                WhatsApp
              </WhatsAppButton>
              <CallButton tone="inverse" />
            </div>
          ) : (
            <ServiceActions service={service} inverse />
          )}
        </div>
        <div className="lg:col-span-7">
          <MediaFrame label="Team apparel" alt={campaign.corporate.alt} src={campaign.corporate.src} kind="workshop" aspect="landscape" className="mb-6" />
          {form ? <p className="mb-4 text-sm text-cream/70">The form opens WhatsApp with your brief. It does not place an order.</p> : null}
          {form}
        </div>
      </Container>
    </div>
  )
}
