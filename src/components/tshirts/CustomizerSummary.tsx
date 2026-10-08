import type { CustomizerDraft } from '@/config/customizer'
import { sizeSummary } from '@/config/customizer'

const rows = (draft: CustomizerDraft) => [
  ['Garment', draft.garment ? `${draft.garment}${draft.garmentNote ? ` — ${draft.garmentNote}` : ''}` : '—'],
  ['Colour', draft.color || '—'],
  ['Sizes', draft.sizesLater ? 'Confirm on WhatsApp' : sizeSummary(draft.sizes) || '—'],
  ['Sides', draft.sides.join(', ') || '—'],
  ['Artwork', draft.artwork || '—'],
  ['Text', draft.text.trim() || '—'],
  ['Quantity', draft.quantity || '—'],
  ['Needed by', draft.flexibleDate ? 'Flexible' : draft.neededBy || '—'],
]

export function CustomizerSummary({ draft, compact = false }: { draft: CustomizerDraft; compact?: boolean }) {
  const items = rows(draft)
  if (compact) {
    const brief = items
      .filter(([, value]) => value !== '—')
      .slice(0, 3)
      .map(([label, value]) => `${label}: ${value}`)
      .join(' · ')
    return (
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ink/60 lg:hidden">
        {brief || 'Your enquiry builds as you choose.'}
      </p>
    )
  }

  return (
    <aside className="night dark-ui hidden bg-ink p-6 text-cream lg:block">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-lime">Enquiry</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em]">Your brief</h2>
      <dl className="mt-6 space-y-4">
        {items.map(([label, value]) => (
          <div key={label}>
            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/45">{label}</dt>
            <dd className="mt-1 text-sm leading-snug">{value}</dd>
          </div>
        ))}
      </dl>
      {draft.startingPoint ? <p className="mt-6 text-xs text-cream/55">Starting point: {draft.startingPoint}</p> : null}
    </aside>
  )
}
