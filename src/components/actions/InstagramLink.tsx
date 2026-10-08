import { site } from '@/config/site'
import { cn } from '@/lib/cn'

export function InstagramLink({
  className,
  showHandle = true,
  inverse = false,
}: {
  className?: string
  showHandle?: boolean
  inverse?: boolean
}) {
  return (
    <a
      href={site.instagramUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        'inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-transparent underline-offset-4 hover:decoration-lime',
        inverse ? 'text-cream' : 'text-ink',
        className,
      )}
    >
      Instagram
      {showHandle ? <span className="font-mono text-xs font-normal opacity-70">{site.instagramHandle}</span> : null}
    </a>
  )
}
