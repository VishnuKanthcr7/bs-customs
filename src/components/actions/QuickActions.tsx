import { Link } from 'react-router-dom'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { isConfiguredUrl, site } from '@/config/site'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/cn'

const itemClass =
  'snap-start shrink-0 min-h-14 inline-flex items-center border-r border-ink/12 px-4 text-sm font-semibold whitespace-nowrap hover:bg-cream-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink'

export function QuickActions({
  message,
  className,
  priority = 'home',
}: {
  message?: string
  className?: string
  priority?: 'home' | 'qr'
}) {
  const wa = buildWhatsAppUrl(message ?? (priority === 'qr' ? whatsappTemplates.qr() : whatsappTemplates.home()))
  const directionsReady = isConfiguredUrl(site.googleMapsUrl)

  const actions = [
    { label: 'WhatsApp Us', href: wa, external: true, accent: 'wa' as const, pending: false },
    { label: 'Call', href: site.phoneTel, external: true, accent: 'none' as const, pending: false },
    { label: 'Instagram', href: site.instagramUrl, external: true, accent: 'none' as const, pending: false },
    { label: 'Directions', href: directionsReady ? site.googleMapsUrl : '', external: directionsReady, accent: 'none' as const, pending: !directionsReady },
    { label: 'Explore Services', href: '/services', external: false, accent: 'none' as const, pending: false },
    { label: 'Design Your T-Shirt', href: '/t-shirts/design', external: false, accent: 'lime' as const, pending: false },
    { label: 'Get a Quote', href: '/quote', external: false, accent: 'lime' as const, pending: false },
  ]

  if (priority === 'qr') {
    const design = actions.findIndex((action) => action.href === '/t-shirts/design')
    const explore = actions.findIndex((action) => action.href === '/services')
    if (design > explore && explore >= 0) {
      const [item] = actions.splice(design, 1)
      if (item) actions.splice(explore, 0, item)
    }
  }

  return (
    <nav aria-label="Quick actions" className={cn('bg-cream', className)}>
      <div className="flex items-center justify-between gap-4 border-b border-ink/12 px-4 py-2">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink/60">Quick actions</p>
        <p className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/45 sm:block">Bidar</p>
      </div>
      <div className="rail flex overflow-x-auto snap-x snap-mandatory">
        {actions.map((action, index) => {
          const inner = (
            <>
              <span className="mr-3 font-mono text-[0.65rem] text-ink/40">0{index + 1}</span>
              <span className={action.accent === 'lime' ? 'border-b-2 border-lime' : undefined}>{action.label}</span>
              {action.pending ? (
                <span className="ml-2 font-mono text-[0.62rem] font-normal uppercase tracking-[0.12em] text-ink/45">Pending</span>
              ) : null}
              {action.accent === 'wa' ? <span className="ml-2 size-1.5 bg-whatsapp" aria-hidden /> : null}
            </>
          )
          if (action.pending) {
            return (
              <span key={action.label} className={cn(itemClass, 'cursor-default opacity-60 hover:bg-transparent')} role="note">
                {inner}
              </span>
            )
          }
          if (action.external) {
            return (
              <a
                key={action.label}
                href={action.href}
                className={itemClass}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noreferrer noopener' : undefined}
              >
                {inner}
              </a>
            )
          }
          return (
            <Link key={action.label} to={action.href} className={itemClass}>
              {inner}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
