import { site } from '@/config/site'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { QuoteCta } from '@/components/actions/QuoteCta'

export function StickyMobileBar() {
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-cream pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid h-14 grid-cols-3">
        <a
          href={buildWhatsAppUrl(whatsappTemplates.home())}
          className="inline-flex items-center justify-center bg-whatsapp text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
        <QuoteCta full className="h-14 min-h-14 w-full rounded-none" />
        <a
          href={site.phoneTel}
          className="inline-flex items-center justify-center bg-ink text-sm font-semibold text-cream"
        >
          Call
        </a>
      </div>
    </div>
  )
}
