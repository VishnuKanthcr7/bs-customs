import { useEffect } from 'react'
import { site } from '@/config/site'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string | null) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!href) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function Seo({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    if (site.siteUrl) upsertMeta('property', 'og:url', `${site.siteUrl}${path}`)
    upsertCanonical(site.siteUrl ? `${site.siteUrl}${path}` : null)
  }, [title, description, path])

  return null
}

export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.brandName,
    founder: {
      '@type': 'Person',
      name: site.founderName,
    },
    telephone: '+918970533113',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'KEB Road, near Pooja Travels, Devi Colony, Bank Colony',
      addressLocality: 'Bidar',
      addressRegion: 'Karnataka',
      postalCode: '585401',
      addressCountry: 'IN',
    },
    areaServed: 'Bidar, Karnataka',
    description: 'Custom T-shirts, apparel, gifts, and personalization in Bidar, Karnataka.',
    sameAs: [site.instagramUrl],
  }
  if (site.siteUrl) data.url = site.siteUrl
  return data
}
