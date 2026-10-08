import { useLocation, useParams } from 'react-router-dom'
import { getService } from '@/config/services'
import { Seo } from '@/lib/seo'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import {
  CorporateChapter,
  GiftsChapter,
  LaserChapter,
  LedChapter,
  StoneChapter,
} from '@/components/services/ServiceChapter'
import { QuoteForm, type QuoteSeed } from '@/components/forms/QuoteForm'

export function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const service = getService(slug)
  const location = useLocation()
  const seed = (location.state ?? undefined) as QuoteSeed | undefined

  if (!service) {
    return (
      <Container className="py-24">
        <h1 className="font-display text-5xl font-extrabold">Service not listed.</h1>
        <Button href="/services" className="mt-8" variant="secondary">
          All services
        </Button>
      </Container>
    )
  }

  return (
    <>
      <Seo
        title={`${service.title} in Bidar — BS CUSTOMS`}
        description={service.lede}
        path={`/services/${service.slug}`}
      />
      {service.slug === 'custom-gifts' ? <GiftsChapter service={service} /> : null}
      {service.slug === 'laser-engraving' ? <LaserChapter service={service} /> : null}
      {service.slug === 'stone-personalization' ? <StoneChapter service={service} /> : null}
      {service.slug === 'led-neon' ? <LedChapter service={service} /> : null}
      {service.slug === 'corporate-bulk' ? (
        <CorporateChapter service={service} form={<QuoteForm seed={{ interest: service.title, ...seed }} tone="ink" />} />
      ) : null}
    </>
  )
}
