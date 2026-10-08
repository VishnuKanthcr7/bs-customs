import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <Container className="py-24">
      <Seo title="Page not found — BS CUSTOMS" description="This page is not part of the BS CUSTOMS website." path="/404" />
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/50">404</p>
      <h1 className="mt-3 font-display text-6xl font-extrabold tracking-[-0.05em]">Page not found.</h1>
      <Button href="/" className="mt-8" variant="secondary">
        Back home
      </Button>
    </Container>
  )
}
