import { useLocation } from 'react-router-dom'
import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { QuoteForm, type QuoteSeed } from '@/components/forms/QuoteForm'

export function QuotePage() {
  const location = useLocation()
  const seed = (location.state ?? undefined) as QuoteSeed | undefined

  return (
    <>
      <Seo
        title="Get a Quote — BS CUSTOMS Bidar"
        description="Request a quote from BS CUSTOMS in Bidar for custom T-shirts, gifts, engraving, signage, or bulk orders."
        path="/quote"
      />
      <Container className="grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink/50">Enquiry</p>
          <h1 className="mt-3 font-display text-[clamp(3rem,6vw,5rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
            Get a Quote
          </h1>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
            The form writes a WhatsApp message. There is no checkout and no price until the brief is clear.
          </p>
        </div>
        <div className="md:col-span-7">
          <QuoteForm seed={seed} />
        </div>
      </Container>
    </>
  )
}
