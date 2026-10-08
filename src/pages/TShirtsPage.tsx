import { useMemo, useState } from 'react'
import { teeCategories, teeProducts } from '@/config/products'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CategoryRail } from '@/components/tshirts/CategoryRail'
import { TShirtCard } from '@/components/tshirts/TShirtCard'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'

export function TShirtsPage() {
  const [category, setCategory] = useState<string>(teeCategories[0])
  const visible = useMemo(
    () => (category === 'All' ? teeProducts : teeProducts.filter((product) => product.category === category)),
    [category],
  )

  return (
    <>
      <Seo
        title="Custom T-Shirts in Bidar — BS CUSTOMS"
        description="Design and enquire about custom printed, personalized, event, and staff T-shirts from BS CUSTOMS in Bidar."
        path="/t-shirts"
      />
      <Container className="pb-2 pt-10 md:pt-16">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/50">Apparel — Bidar</p>
        <div className="mt-4 grid items-end gap-8 lg:grid-cols-12">
          <div className="@container min-w-0 lg:col-span-8">
            <h1 className="font-display text-[clamp(2.35rem,11.4cqw,6.4rem)] font-extrabold leading-[0.84] tracking-[-0.055em]">
              <span className="block">The T-shirt</span>
              <span className="block">experience</span>
            </h1>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-soft lg:col-span-4 lg:pb-3">
            Custom T-shirts sit at the center of BS CUSTOMS. The photographs are campaign images — bring your own design when you enquire.
          </p>
        </div>
      </Container>
      <div className="mt-6 border-y border-ink/10">
        <Container>
          <CategoryRail categories={teeCategories} active={category} onChange={setCategory} />
        </Container>
      </div>
      <div className="rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-8 md:gap-5 md:px-8 md:py-12 lg:px-12">
        {visible.map((product, index) => (
          <TShirtCard key={product.slug} product={product} index={index} />
        ))}
      </div>
      <Container className="flex flex-col gap-2 pb-16 sm:flex-row">
        <Button href="/t-shirts/design">Design Your T-Shirt</Button>
        <WhatsAppButton message={whatsappTemplates.teeHub()}>WhatsApp Us</WhatsAppButton>
      </Container>
    </>
  )
}
