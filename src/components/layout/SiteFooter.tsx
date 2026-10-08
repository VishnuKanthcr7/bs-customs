import { Link } from 'react-router-dom'
import { mainNav } from '@/config/navigation'
import { site } from '@/config/site'
import { Container } from '@/components/ui/Container'
import { InstagramLink } from '@/components/actions/InstagramLink'
import { DirectionsButton } from '@/components/actions/DirectionsButton'

export function SiteFooter() {
  return (
    <footer className="night no-print overflow-hidden border-t border-cream/10 bg-ink pb-[calc(4.75rem+env(safe-area-inset-bottom))] text-cream md:pb-0">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.95fr)_minmax(12rem,0.75fr)] lg:items-start lg:gap-x-10">
          <div className="min-w-0">
            <p className="max-w-full font-display text-[clamp(3.25rem,14vw,5.5rem)] font-extrabold leading-[0.78] tracking-[-0.06em] lg:text-[clamp(2.7rem,3.5vw,4.6rem)]">
              <span className="block">BS</span>
              <span className="block">CUSTOMS</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Custom apparel and personalization in {site.cityLine}. Founded by {site.founderName}.
            </p>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cream/50">Visit</p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-cream/85">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-4 flex flex-col items-start gap-1">
              <a href={site.phoneTel} className="min-h-11 text-sm font-semibold hover:text-lime">
                {site.phoneDisplay}
              </a>
              <DirectionsButton inverse />
            </div>
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cream/50">Index</p>
            <ul className="mt-4 space-y-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="inline-flex min-h-11 items-center text-sm hover:text-lime">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/t-shirts/design" className="inline-flex min-h-11 items-center text-sm hover:text-lime">
                  Design Your T-Shirt
                </Link>
              </li>
            </ul>
            <InstagramLink inverse className="mt-2" />
          </div>
        </div>
      </Container>
      <div className="border-t border-cream/10">
        <Container className="flex flex-wrap items-center justify-between gap-3 py-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} {site.brandName}</p>
          <p className="font-mono uppercase tracking-[0.14em]">{site.cityLine}</p>
        </Container>
      </div>
    </footer>
  )
}
