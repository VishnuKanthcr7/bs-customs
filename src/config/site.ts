const PLACEHOLDER_MAPS = 'REPLACE_WITH_OFFICIAL_GOOGLE_MAPS_URL'
const PLACEHOLDER_GOOGLE = 'REPLACE_WITH_OFFICIAL_GOOGLE_BUSINESS_URL'

const DEV_PORTS = new Set(['3000', '4173', '5173', '5174', '5180', '8000', '8080', '24678'])

/** Returns an https origin, or '' when the value is missing, local, or a preview host. */
export function resolveProductionOrigin(raw: string | undefined | null): string {
  const value = raw?.trim() ?? ''
  if (!value) return ''
  let url: URL
  try {
    url = new URL(value)
  } catch {
    return ''
  }
  if (url.protocol !== 'https:') return ''
  const host = url.hostname.toLowerCase().replace(/^\[|\]$/g, '')
  if (!host || host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local')) return ''
  if (host === '127.0.0.1' || host === '0.0.0.0' || host === '::1') return ''
  if (host.includes(':') || /^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return ''
  if (
    ['localhost', 'preview', 'ngrok', 'trycloudflare', 'loca.lt', 'localtunnel', 'nip.io', 'sslip.io', 'vite'].some(
      (part) => host.includes(part),
    )
  ) {
    return ''
  }
  if (url.port && DEV_PORTS.has(url.port)) return ''
  return url.origin
}

function readProductionSiteUrl() {
  return resolveProductionOrigin(import.meta.env?.VITE_PUBLIC_SITE_URL)
}

export const site = {
  brandName: 'BS CUSTOMS',
  founderName: 'Shrinath Beldar',
  founderRole: 'Founder & Owner',
  founderBioPlaceholder: 'FOUNDER_BIO_PLACEHOLDER',
  phoneDisplay: '+91 89705 33113',
  phoneTel: 'tel:+918970533113',
  whatsappNumberE164: '918970533113',
  whatsappUrl: 'https://wa.me/918970533113',
  addressLines: [
    'KEB Road, near Pooja Travels',
    'Devi Colony, Bank Colony',
    'Bidar, Karnataka 585401',
    'India',
  ],
  addressFull:
    'KEB Road, near Pooja Travels, Devi Colony, Bank Colony, Bidar, Karnataka 585401, India',
  instagramUrl: 'https://www.instagram.com/bs_customs_25/',
  instagramHandle: '@bs_customs_25',
  googleMapsUrl: PLACEHOLDER_MAPS,
  googleBusinessUrl: PLACEHOLDER_GOOGLE,
  siteUrl: readProductionSiteUrl(),
  hoursPlaceholder: 'HOURS_PLACEHOLDER',
  cityLine: 'Bidar, Karnataka',
} as const

export function isConfiguredUrl(url: string) {
  return url.startsWith('https://') || url.startsWith('http://')
}

/** Printed QR opens the production homepage, not /qr. */
export const qrDestination = site.siteUrl ? `${site.siteUrl}/` : ''

export function hoursLabel() {
  if (site.hoursPlaceholder === 'HOURS_PLACEHOLDER') {
    return 'Business hours are confirmed when you enquire.'
  }
  return site.hoursPlaceholder
}
