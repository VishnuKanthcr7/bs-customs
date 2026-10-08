import { site } from '@/config/site'

export function buildWhatsAppUrl(message: string) {
  const base = `https://wa.me/${site.whatsappNumberE164}`
  const text = message.trim()
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}
