import { site } from '@/config/site'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Logo } from '@/components/ui/Logo'
import { IconMenu, IconPhone, IconWhatsApp } from '@/components/ui/icons'

export function SiteHeaderMobile({
  open,
  onToggle,
}: {
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex h-14 items-center justify-between md:hidden">
      <Logo />
      <div className="flex items-center">
        <a
          href={buildWhatsAppUrl(whatsappTemplates.home())}
          className="inline-flex size-11 items-center justify-center text-whatsapp"
          aria-label="WhatsApp BS CUSTOMS"
        >
          <IconWhatsApp />
        </a>
        <a href={site.phoneTel} className="inline-flex size-11 items-center justify-center" aria-label={`Call ${site.phoneDisplay}`}>
          <IconPhone />
        </a>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={onToggle}
        >
          <IconMenu open={open} />
        </button>
      </div>
    </div>
  )
}
