import { cn } from '@/lib/cn'

export function ColourSwatch({
  label,
  hex,
  selected,
  onSelect,
}: {
  label: string
  hex: string
  selected: boolean
  onSelect: () => void
}) {
  const other = !hex
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className="flex min-h-11 min-w-16 flex-col items-center gap-2"
    >
      <span
        className={cn(
          'size-14 border border-ink/20',
          selected && 'ring-2 ring-lime ring-offset-2 ring-offset-cream',
          other && 'bg-[linear-gradient(135deg,#F4EFE6_50%,#0B0B0C_50%)]',
        )}
        style={hex ? { backgroundColor: hex } : undefined}
      />
      <span className={cn('text-xs font-medium', selected ? 'text-ink' : 'text-ink/55')}>{label}</span>
    </button>
  )
}
