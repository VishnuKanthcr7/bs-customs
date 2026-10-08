import { Link, useParams } from 'react-router-dom'
import { getTeeProduct } from '@/config/products'
import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { ProductGallery } from '@/components/tshirts/ProductGallery'
import { ProductInfo } from '@/components/tshirts/ProductInfo'
import { Button } from '@/components/ui/Button'

export function TShirtProductPage() {
  const { slug = '' } = useParams()
  const product = getTeeProduct(slug)

  if (!product) {
    return (
      <Container className="py-24">
        <Seo
          title="T-shirt not found — BS CUSTOMS"
          description="That T-shirt page is not part of BS CUSTOMS."
          path={`/t-shirts/${slug}`}
        />
        <h1 className="font-display text-5xl font-extrabold tracking-[-0.04em]">This piece is not listed.</h1>
        <Button href="/t-shirts" className="mt-8" variant="secondary">
          Back to T-shirts
        </Button>
      </Container>
    )
  }

  return (
    <>
      <Seo
        title={`${product.title} — BS CUSTOMS Bidar`}
        description={product.description}
        path={`/t-shirts/${product.slug}`}
      />
      <Container className="py-6 md:py-12">
        <Link to="/t-shirts" className="inline-flex min-h-11 items-center text-sm font-semibold">
          T-Shirts
        </Link>
        <div className="mt-3 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="-mx-5 lg:col-span-7 lg:mx-0">
            <ProductGallery product={product} />
            <p className="mt-3 px-5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink/45 lg:px-0">
              Campaign photography — not a BS CUSTOMS customer order
            </p>
          </div>
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>
      </Container>
    </>
  )
}
