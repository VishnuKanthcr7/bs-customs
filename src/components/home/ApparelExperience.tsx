import { Link } from 'react-router-dom'
import { campaign, type CampaignPhoto } from '@/config/campaign'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { Container } from '@/components/ui/Container'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { CallButton } from '@/components/actions/CallButton'

function Shot({
  photo,
  label,
  aspect = 'portrait',
  className,
}: {
  photo: CampaignPhoto
  label: string
  aspect?: 'portrait' | 'square' | 'landscape' | 'tall' | 'hero'
  className?: string
}) {
  return (
    <MediaFrame
      label={label}
      alt={photo.alt}
      src={photo.src}
      position={photo.position}
      positionMobile={photo.positionMobile}
      kind="tee"
      aspect={aspect}
      className={className}
    />
  )
}

const rail = [
  {
    href: '/t-shirts/custom-printed',
    title: 'Custom T-Shirts',
    note: 'Your artwork on a shirt',
    photo: campaign.closeup,
    width: 'w-[84vw] max-w-[24rem] lg:w-[26rem] lg:max-w-none',
    aspect: 'portrait' as const,
  },
  {
    href: '/t-shirts/custom-printed',
    title: 'Oversized T-Shirts',
    note: 'Relaxed cut, large graphic',
    photo: campaign.street,
    width: 'w-[84vw] max-w-[26rem] lg:w-[28rem] lg:max-w-none',
    aspect: 'portrait' as const,
  },
  {
    href: '/t-shirts/personalized',
    title: 'Regular T-Shirts',
    note: 'Everyday colours, made to order',
    photo: campaign.folded,
    width: 'w-[78vw] max-w-[28rem] lg:w-[32rem] lg:max-w-none',
    aspect: 'portrait' as const,
  },
  {
    href: '/t-shirts/staff-apparel',
    title: 'Polo T-Shirts',
    note: 'A collar, a colour, a brief',
    photo: campaign.polo,
    width: 'w-[86vw] max-w-[32rem] lg:w-[34rem] lg:max-w-none',
    aspect: 'landscape' as const,
  },
  {
    href: '/t-shirts/design',
    title: 'Sports Jerseys',
    note: 'Cricket whites and team kits',
    photo: campaign.cricket,
    width: 'w-[80vw] max-w-[24rem] lg:w-[24rem] lg:max-w-none',
    aspect: 'portrait' as const,
  },
  {
    href: '/t-shirts/staff-apparel',
    title: 'Corporate T-Shirts',
    note: 'A set for a business',
    photo: campaign.rack,
    width: 'w-[88vw] max-w-[36rem] lg:w-[40rem] lg:max-w-none',
    aspect: 'landscape' as const,
  },
  {
    href: '/t-shirts/event-batch',
    title: 'Event / Team T-Shirts',
    note: 'One design for the group',
    photo: campaign.football,
    width: 'w-[88vw] max-w-[36rem] lg:w-[40rem] lg:max-w-none',
    aspect: 'landscape' as const,
  },
]

export function ApparelExperience() {
  return (
    <>
      <section className="border-y border-ink/10 bg-cream-muted">
        <Container className="grid items-end gap-8 py-12 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 items-start gap-3">
              <div className="col-span-12 sm:col-span-7">
                <Shot photo={campaign.white} label="Printed T-shirt" aspect="portrait" />
              </div>
              <div className="col-span-7 sm:col-span-5 sm:mt-16">
                <Shot photo={campaign.typography} label="Print close-up" aspect="square" />
              </div>
              <div className="col-span-5 sm:col-span-6 sm:-mt-8">
                <Shot photo={campaign.minimal} label="Small printed mark" aspect="portrait" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pb-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/55">Your idea → your T-shirt</p>
            <h2 className="mt-3 font-display text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.86] tracking-[-0.05em]">
              Your idea.
              <br />
              Your T-shirt.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              Bring your design, artwork, photo or idea. Create custom apparel for your style, team, event or business.
            </p>
            <Button href="/t-shirts/design" className="mt-8">
              Design Your T-Shirt
            </Button>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">
              Campaign photography — not BS CUSTOMS work
            </p>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-cream">
        <Container className="flex items-end justify-between gap-6 py-10 lg:py-14">
          <h2 className="font-display text-[clamp(2.1rem,5vw,3.8rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
            Custom apparel
          </h2>
          <Link
            to="/t-shirts"
            className="hidden min-h-11 items-center text-sm font-semibold underline decoration-lime decoration-2 underline-offset-4 sm:inline-flex"
          >
            All T-shirts
          </Link>
        </Container>
        <div className="rail flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-12 md:gap-4 md:px-8 lg:px-12">
          {rail.map((item) => (
            <Link key={item.title} to={item.href} className={`${item.width} shrink-0 snap-start`}>
              <Shot photo={item.photo} label={item.title} aspect={item.aspect} className="min-h-[16rem]" />
              <p className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.04em]">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-ink/60">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <Container className="py-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
              Black. White. Worn with a print.
            </h2>
          </div>
          <div className="mt-8 grid items-start gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <Shot photo={campaign.black} label="Black T-shirt" aspect="portrait" className="md:aspect-[4/5]" />
              <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em]">Black</p>
              <p className="mt-1 text-sm text-ink/55">A graphic, worn. Campaign photograph.</p>
            </div>
            <div className="md:col-span-5 md:mt-20">
              <Shot photo={campaign.white} label="White T-shirt" aspect="portrait" />
              <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em]">White</p>
              <p className="mt-1 text-sm text-ink/55">Illustrated print, strong light. Campaign photograph.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-muted">
        <Container className="grid items-center gap-8 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <h2 className="font-display text-[clamp(2.6rem,5vw,4.4rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              Front. Back. Your call.
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
              Choose your preferred print placement when you enquire.
            </p>
            <Button href="/t-shirts/design" className="mt-8">
              Design Your T-Shirt
            </Button>
          </div>
          <div className="lg:col-span-5">
            <Shot photo={campaign.fashion} label="Front" aspect="portrait" className="aspect-[3/4]" />
            <p className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em]">Front</p>
          </div>
          <div className="lg:col-span-3 lg:mt-16">
            <Shot photo={campaign.backPrint} label="Back" aspect="portrait" />
            <p className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em]">Back</p>
          </div>
        </Container>
      </section>

      <section className="night bg-ink text-cream">
        <Container className="grid items-center gap-8 py-14 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Shot photo={campaign.cricket} label="Cricket apparel" aspect="portrait" className="aspect-[4/5] lg:aspect-[5/4]" />
          </div>
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-lime">Cricket</p>
            <h2 className="mt-3 font-display text-[clamp(2.7rem,5vw,4.6rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              Match day. Your way.
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-cream/75">
              Custom sports apparel for teams, events and groups.
            </p>
            <Button href="/quote" tone="inverse" className="mt-8">
              Enquire for Sports Apparel
            </Button>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/45">
              Campaign photograph — not a club kit
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid items-center gap-8 py-14 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5 lg:order-2">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/55">Football</p>
            <h2 className="mt-3 font-display text-[clamp(2.6rem,5vw,4.4rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              Built for the team.
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
              A name, a number, a colour. Custom sports apparel for your group.
            </p>
            <Button href="/quote" className="mt-8">
              Enquire Now
            </Button>
          </div>
          <div className="grid grid-cols-12 gap-3 lg:order-1 lg:col-span-7">
            <div className="col-span-12 sm:col-span-7">
              <Shot photo={campaign.football} label="Names and numbers" aspect="landscape" className="aspect-[5/4] sm:aspect-[4/5]" />
            </div>
            <div className="col-span-5 mt-10">
              <Shot photo={campaign.footballFront} label="Football jersey" aspect="portrait" />
            </div>
          </div>
          <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45 lg:col-span-12">
            Campaign photographs — names and numbers shown as examples, not an official club kit
          </p>
        </Container>
      </section>

      <section className="bg-cream-muted">
        <Container className="grid items-center gap-8 py-14 lg:grid-cols-12 lg:py-24">
          <div className="grid grid-cols-12 gap-3 lg:col-span-7">
            <div className="col-span-12 sm:col-span-7">
              <Shot photo={campaign.polo} label="Polo shirts" aspect="landscape" className="aspect-[4/5] sm:aspect-[4/5]" />
            </div>
            <div className="col-span-12 sm:col-span-5 sm:mt-10">
              <Shot photo={campaign.rack} label="Colour set" aspect="portrait" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/55">Corporate apparel</p>
            <h2 className="mt-3 font-display text-[clamp(2.6rem,5vw,4.4rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
              Built for teams.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              Custom apparel for businesses, events, teams and organizations.
            </p>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Button href="/quote">Request a Bulk Quote</Button>
              <WhatsAppButton message={whatsappTemplates.bulk()}>WhatsApp</WhatsAppButton>
              <CallButton />
            </div>
            <p className="mt-4 text-sm text-ink/55">Campaign photographs — not a client order.</p>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-cream">
        <div className="grid items-stretch lg:grid-cols-12">
          <div className="flex flex-col justify-end px-5 py-12 md:px-8 lg:col-span-5 lg:px-12 lg:py-20">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-ink/50">Oversized</p>
            <h2 className="mt-3 font-display text-[clamp(3.2rem,9vw,6.4rem)] font-extrabold leading-[0.82] tracking-[-0.06em]">
              Made for
              <span className="block">
                your{' '}
                <span className="underline decoration-lime decoration-[6px] underline-offset-[6px]">style.</span>
              </span>
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
              Large graphics. Relaxed shapes. Apparel you actually want to wear.
            </p>
            <Button href="/t-shirts/design" className="mt-8 w-fit">
              Design Your T-Shirt
            </Button>
          </div>
          <div className="lg:col-span-7">
            <Shot photo={campaign.street} label="Streetwear T-shirt" aspect="portrait" className="aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[36rem]" />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <Container className="py-14 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
              Bring the idea.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              Turn your design into something you can wear.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-5">
              <Shot photo={campaign.closeup} label="Lettering" aspect="portrait" />
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">Lettering</p>
            </div>
            <div className="col-span-6 md:col-span-3 md:mt-14">
              <Shot photo={campaign.typography} label="Printed line" aspect="square" />
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">Type</p>
            </div>
            <div className="col-span-6 md:col-span-4">
              <Shot photo={campaign.white} label="Illustration" aspect="portrait" />
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">Illustration</p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <Shot photo={campaign.hangers} label="Printed apparel" aspect="landscape" className="aspect-[3/2]" />
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">Print</p>
            </div>
            <div className="col-span-8 md:col-span-4 md:col-start-9 md:-mt-8">
              <Shot photo={campaign.minimal} label="Small mark" aspect="square" />
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45">Minimal mark</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm text-ink/55">
            Campaign photographs of printed apparel. Not BS CUSTOMS customer work.
          </p>
        </Container>
      </section>
    </>
  )
}
