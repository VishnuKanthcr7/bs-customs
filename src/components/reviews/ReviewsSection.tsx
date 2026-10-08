import { isConfiguredUrl, site } from '@/config/site'
import { Container } from '@/components/ui/Container'

export function ReviewsSection() {
  const googleReady = isConfiguredUrl(site.googleBusinessUrl)
  return (
    <section className="night bg-ink text-cream">
      <Container className="py-20 md:py-28">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-cream/50">Reviews</p>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.045em]">
          What customers say
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
          We&apos;re building our review showcase. See recent feedback on Google.
        </p>
        <div className="mt-8">
          {googleReady ? (
            <a
              href={site.googleBusinessUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center border-b-2 border-lime text-base font-semibold"
            >
              See us on Google
            </a>
          ) : (
            <p className="max-w-md text-sm text-cream/60">
              See us on Google — the official profile link will appear here once it is added. Until then, call or
              WhatsApp {site.phoneDisplay}.
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
