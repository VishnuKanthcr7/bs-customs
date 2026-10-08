import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { localBusinessJsonLd } from '@/lib/seo'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { StickyMobileBar } from '@/components/layout/StickyMobileBar'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function PageShell() {
  const jsonLd = localBusinessJsonLd()
  return (
    <div className="min-h-dvh bg-cream text-ink">
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main id="content" className="pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <StickyMobileBar />
      <ScrollToTop />
    </div>
  )
}
