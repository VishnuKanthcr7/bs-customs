import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { mainNav } from '@/config/navigation'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { QuoteCta } from '@/components/actions/QuoteCta'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { MobileNav } from '@/components/layout/MobileNav'
import { SiteHeaderMobile } from '@/components/layout/SiteHeaderMobile'
import { cn } from '@/lib/cn'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="no-print sticky top-0 z-40 border-b border-ink/10 bg-cream">
      <Container>
        <SiteHeaderMobile open={open} onToggle={() => setOpen((value) => !value)} />
        <div className="hidden h-16 items-center gap-8 md:flex">
          <Logo />
          <nav className="flex items-center gap-6" aria-label="Primary">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'relative inline-flex min-h-11 items-center text-sm font-medium text-ink/75 hover:text-ink',
                    isActive && 'text-ink',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={cn(
                        'absolute bottom-2 left-0 h-0.5 bg-lime transition-transform duration-300 origin-left',
                        isActive ? 'w-full scale-x-100' : 'w-full scale-x-0',
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <QuoteCta />
            <WhatsAppButton message={whatsappTemplates.home()} className="px-4">
              WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </Container>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
