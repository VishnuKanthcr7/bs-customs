import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { mainNav } from '@/config/navigation'
import { site } from '@/config/site'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { DirectionsButton } from '@/components/actions/DirectionsButton'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { IconInstagram, IconMenu, IconPhone, IconWhatsApp } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="night dark-ui fixed inset-0 z-[80] flex flex-col bg-ink text-cream md:hidden">
      <div className="flex h-14 items-center justify-between px-5">
        <Logo tone="cream" />
        <div className="flex items-center">
          <ThemeToggle className="text-cream" />
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center"
          onClick={onClose}
          aria-label="Close menu"
        >
          <IconMenu open />
        </button>
        </div>
      </div>
      <nav className="flex flex-1 flex-col justify-center gap-1 px-5" aria-label="Mobile">
        {mainNav.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'border-b border-cream/15 py-3 font-display text-[2.4rem] font-extrabold leading-none tracking-[-0.045em]',
                isActive && 'text-lime',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink
          to="/quote"
          onClick={onClose}
          className="mt-4 inline-flex min-h-11 items-center font-display text-2xl font-extrabold tracking-[-0.04em]"
        >
          Get a Quote
        </NavLink>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center text-base font-semibold"
        >
          Instagram
        </a>
        <DirectionsButton inverse />
      </nav>
      <div className="grid grid-cols-2 gap-2 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <a
          href={buildWhatsAppUrl(whatsappTemplates.home())}
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-whatsapp text-sm font-semibold text-white"
        >
          <IconWhatsApp className="size-4" />
          WhatsApp
        </a>
        <a
          href={site.phoneTel}
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-cream/40 text-sm font-semibold"
        >
          <IconPhone className="size-4" />
          Call
        </a>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="col-span-2 inline-flex min-h-12 items-center justify-center gap-2 border border-cream/25 text-sm font-semibold"
        >
          <IconInstagram className="size-4" />
          {site.instagramHandle}
        </a>
      </div>
    </div>,
    document.body,
  )
}
