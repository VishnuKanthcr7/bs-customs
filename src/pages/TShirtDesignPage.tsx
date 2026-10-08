import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { TShirtCustomizer } from '@/components/tshirts/TShirtCustomizer'

export function TShirtDesignPage() {
  return (
    <>
      <Seo
        title="Design Your T-Shirt — BS CUSTOMS"
        description="Build a custom T-shirt enquiry with BS CUSTOMS in Bidar. Choose garment, colour, size, artwork, and send it on WhatsApp."
        path="/t-shirts/design"
      />
      <Container className="min-h-[calc(100dvh-4.5rem)] py-8 md:min-h-0 md:py-16 lg:py-20">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink/50">Enquiry builder</p>
        <TShirtCustomizer />
      </Container>
    </>
  )
}
