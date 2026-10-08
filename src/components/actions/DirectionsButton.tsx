import { isConfiguredUrl, site } from '@/config/site'
import { cn } from '@/lib/cn'

export function DirectionsButton({
  className,
  inverse = false,
  compact = false,
  children = 'Directions',
}: {
  className?: string
  inverse?: boolean
  compact?: boolean
  children?: string
}) {
  if (isConfiguredUrl(site.googleMapsUrl)) {
    return (
      <a
        href={site.googleMapsUrl}
        target="_blank"
        rel="noreferrer noopener"
        className={cn(
          'inline-flex min-h-11 items-center text-sm font-semibold underline decoration-transparent underline-offset-4 hover:decoration-lime',
          inverse ? 'text-cream' : 'text-ink',
          className,
        )}
      >
        {children}
      </a>
    )
  }

  return (
    <span
      role="note"
      className={cn(
        'inline-flex min-h-11 items-center gap-2 text-sm font-semibold',
        inverse ? 'text-cream/55' : 'text-ink/50',
        className,
      )}
    >
      {children}
      <span className="truncate font-mono text-[0.62rem] font-normal uppercase tracking-[0.14em]">
        {compact ? 'Pending' : 'Map pending'}
      </span>
    </span>
  )
}
