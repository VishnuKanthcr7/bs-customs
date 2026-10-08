import { Link } from 'react-router-dom'
import { campaign } from '@/config/campaign'
import { site } from '@/config/site'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/Container'
import { DirectionsButton } from '@/components/actions/DirectionsButton'
import { IconInstagram, IconPhone, IconWhatsApp } from '@/components/ui/icons'

const cell =
  'flex min-h-11 items-center gap-2 px-3 text-sm font-semibold focus-visible:z-10'

function CollageShot({
  src,
  alt,
  position,
  className,
  priority = false,
  sizes,
}: {
  src: string
  alt: string
  position: string
  className?: string
  priority?: boolean
  sizes: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      style={{ objectPosition: position }}
      className={cn('h-full w-full object-cover', className)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}

export function Hero() {
  const whatsapp = buildWhatsAppUrl(whatsappTemplates.home())

  return (
    <section className="bg-cream">
      <div className="flex h-[calc(100svh-7rem)] flex-col lg:hidden">
        <div className="px-5 pt-3">
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-ink/55">{site.cityLine}</p>
          <h1 className="mt-1 max-w-full font-display text-[clamp(2rem,8.6vw,2.85rem)] font-extrabold leading-[0.82] tracking-[-0.055em]">
            {site.brandName}
          </h1>
        </div>

        <div className="relative mx-5 mt-3 min-h-[9.5rem] flex-1 overflow-hidden bg-ink">
          <CollageShot
            src={campaign.fashion.src}
            alt={campaign.fashion.alt}
            position={campaign.fashion.positionMobile ?? 'center 24%'}
            className="absolute inset-0"
            priority
            sizes="92vw"
          />
          <p className="absolute bottom-2 left-2 bg-ink/75 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-cream">
            Campaign photo
          </p>
        </div>

        <div className="shrink-0 px-5 pb-3 pt-3">
          <p className="mb-2 text-[0.82rem] font-medium leading-snug text-ink-soft">
            Custom Apparel • Gifts • Personalization • Branding
          </p>
          <ContactBoard whatsapp={whatsapp} />
        </div>
      </div>

      <Container className="hidden py-8 lg:grid lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10">
        <div className="lg:col-span-5">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/55">{site.cityLine}</p>
          <h1 className="mt-2 font-display text-[clamp(3.4rem,4.6vw,5.4rem)] font-extrabold leading-[0.82] tracking-[-0.06em]">
            {site.brandName}
          </h1>
          <p className="mt-3 max-w-md text-base font-medium leading-snug text-ink-soft">
            Custom Apparel • Gifts • Personalization • Branding
          </p>
          <div className="mt-6">
            <ContactBoard whatsapp={whatsapp} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[5/4] min-h-[28rem] bg-cream">
            <div className="absolute inset-y-0 left-0 w-[70%] overflow-hidden bg-ink">
              <CollageShot
                src={campaign.fashion.src}
                alt={campaign.fashion.alt}
                position={campaign.fashion.position ?? 'center 30%'}
                priority
                sizes="42vw"
              />
            </div>
            <div className="absolute top-[14%] right-0 h-[52%] w-[40%] overflow-hidden bg-ink ring-8 ring-cream">
              <CollageShot
                src={campaign.white.src}
                alt={campaign.white.alt}
                position="center 62%"
                sizes="22vw"
              />
            </div>
            <div className="absolute bottom-[2%] left-[8%] h-[34%] w-[36%] overflow-hidden bg-ink ring-8 ring-cream">
              <CollageShot
                src={campaign.typography.src}
                alt={campaign.typography.alt}
                position={campaign.typography.position ?? 'center 70%'}
                sizes="18vw"
              />
            </div>
          </div>
          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/45">
            Campaign photography — not BS CUSTOMS work
          </p>
        </div>
      </Container>
    </section>
  )
}

function ContactBoard({ whatsapp }: { whatsapp: string }) {
  return (
    <div className="border border-ink/20">
      <p className="border-b border-ink/12 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink/55">
        Quick contact
      </p>
      <div className="grid grid-cols-2">
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(cell, 'border-r border-b border-ink/12 bg-whatsapp text-white')}
        >
          <IconWhatsApp className="size-4 shrink-0" />
          WhatsApp
        </a>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(cell, 'border-b border-ink/12')}
        >
          <IconInstagram className="size-4 shrink-0" />
          <span className="min-w-0 leading-tight">
            Instagram
            <span className="mt-0.5 block truncate font-mono text-[0.6rem] font-normal tracking-normal text-ink/55">
              {site.instagramHandle}
            </span>
          </span>
        </a>
        <a href={site.phoneTel} className={cn(cell, 'border-r border-ink/12')}>
          <IconPhone className="size-4 shrink-0" />
          Call
        </a>
        <div className={cn(cell, 'min-w-0')}>
          <DirectionsButton compact className="min-h-0 w-full min-w-0 justify-start" />
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-ink/12">
        <Link
          to="/t-shirts/design"
          className="flex min-h-11 items-center justify-center bg-lime px-2 text-center text-sm font-semibold text-on-lime"
        >
          Design Your T-Shirt
        </Link>
        <Link
          to="/quote"
          className="flex min-h-11 items-center justify-center border-l border-ink/15 px-2 text-center text-sm font-semibold"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  )
}
