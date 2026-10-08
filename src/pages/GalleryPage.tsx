import { Seo } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { InstagramLink } from '@/components/actions/InstagramLink'

export function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery — BS CUSTOMS Bidar"
        description="Campaign photographs of custom apparel, gifts, and signage. These are not photographs of BS CUSTOMS customer work."
        path="/gallery"
      />
      <Container className="py-12 md:py-16">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <h1 className="font-display text-[clamp(3.4rem,8vw,6.5rem)] font-extrabold leading-[0.86] tracking-[-0.055em] md:col-span-7">
            Gallery
          </h1>
          <p className="text-base leading-relaxed text-ink-soft md:col-span-5">
            Campaign photography for apparel, gifts, and signage. These pictures are not BS CUSTOMS customer projects. Real studio photographs can replace them later without changing the layout.
          </p>
        </div>
        <div className="mt-10">
          <GalleryGrid />
        </div>
        <div className="mt-10 border-t border-ink/10 pt-6">
          <InstagramLink />
        </div>
      </Container>
    </>
  )
}
