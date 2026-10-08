import { cn } from '@/lib/cn'

export function CategoryRail({
  categories,
  active,
  onChange,
}: {
  categories: readonly string[]
  active: string
  onChange: (value: string) => void
}) {
  return (
    <div className="rail -mx-5 flex snap-x gap-6 overflow-x-auto px-5 md:mx-0 md:px-0" role="tablist" aria-label="T-shirt categories">
      {categories.map((category) => {
        const selected = category === active
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(category)}
            className={cn(
              'shrink-0 snap-start border-b-2 pb-2 pt-3 text-sm font-semibold whitespace-nowrap',
              selected ? 'border-lime text-ink' : 'border-transparent text-ink/55 hover:text-ink',
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
