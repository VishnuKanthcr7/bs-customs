import { site } from '@/config/site'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { CallButton } from '@/components/actions/CallButton'
import { InstagramLink } from '@/components/actions/InstagramLink'
import { DirectionsButton } from '@/components/actions/DirectionsButton'
import { QuoteCta } from '@/components/actions/QuoteCta'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Shrinath Beldar — BS CUSTOMS Bidar"
        description="BS CUSTOMS is a custom apparel and personalization studio in Bidar, founded by Shrinath Beldar."
        path="/about"
      />
      <Container className="grid gap-10 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-7">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/50">{site.brandName}</p>
          <h1 className="mt-4 font-display text-[clamp(3.2rem,7vw,6rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
            {site.founderName}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-ink/55">{site.founderRole}</p>
          <div className="mt-8 border border-ink/15 bg-cream-muted p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em]">{site.founderBioPlaceholder}</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
              Approved founder copy will replace this block. Until then, the studio is {site.brandName} in {site.cityLine}.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 md:col-span-5 md:pt-16">
          <WhatsAppButton message={whatsappTemplates.home()}>WhatsApp</WhatsAppButton>
          <CallButton />
          <InstagramLink />
          <DirectionsButton />
          <QuoteCta />
          <Button href="/t-shirts/design" variant="secondary">
            Design Your T-Shirt
          </Button>
        </div>
      </Container>
    </>
  )
}
