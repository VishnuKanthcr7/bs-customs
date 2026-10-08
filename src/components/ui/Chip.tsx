import { cn } from '@/lib/cn'

export function Chip({
  selected,
  children,
  onClick,
  type = 'button',
}: {
  selected?: boolean
  children: string
  onClick?: () => void
  type?: 'button' | 'submit'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'shrink-0 snap-start rounded-full min-h-11 px-4 text-sm font-medium border transition-colors',
        selected ? 'bg-ink text-cream border-ink' : 'bg-transparent text-ink border-ink/25 hover:border-ink',
      )}
    >
      {children}
    </button>
  )
}
