import { useMemo, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  artworkOptions,
  emptyDraft,
  garmentOptions,
  sideOptions,
  sizeTotal,
  type CustomizerDraft,
} from '@/config/customizer'
import { apparelSizes, getTeeProduct, preferredColours } from '@/config/products'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { ColourSwatch } from '@/components/tshirts/ColourSwatch'
import { CustomizerStepper } from '@/components/tshirts/CustomizerStepper'
import { CustomizerSummary } from '@/components/tshirts/CustomizerSummary'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { cn } from '@/lib/cn'

const steps = [
  'Choose garment',
  'Choose color',
  'Choose size(s)',
  'Design side',
  'Artwork source',
  'Text',
  'Quantity & timeline',
  'Review & enquire',
]

type Prefill = {
  color?: string
  size?: string
  quantity?: number
  title?: string
}

function canContinue(step: number, draft: CustomizerDraft) {
  if (step === 0) return Boolean(draft.garment) && (draft.garment !== 'Another garment' || draft.garmentNote.trim().length > 1)
  if (step === 1) return Boolean(draft.color)
  if (step === 2) return draft.sizesLater || sizeTotal(draft.sizes) > 0
  if (step === 3) return draft.sides.length > 0
  if (step === 4) return Boolean(draft.artwork)
  if (step === 5) return true
  if (step === 6) return Number(draft.quantity) >= 1 && (draft.flexibleDate || Boolean(draft.neededBy))
  return true
}

function Choice({
  selected,
  title,
  note,
  onClick,
}: {
  selected: boolean
  title: string
  note?: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'w-full border px-4 py-4 text-left min-h-16',
        selected ? 'border-lime bg-ink text-cream' : 'border-ink/20 bg-cream hover:border-ink',
      )}
    >
      <span className="block font-display text-2xl font-bold tracking-[-0.03em]">{title}</span>
      {note ? <span className={cn('mt-1 block text-sm', selected ? 'text-cream/70' : 'text-ink/60')}>{note}</span> : null}
    </button>
  )
}

function seedDraft(piece: string | null, prefill: Prefill | null): CustomizerDraft {
  const draft = emptyDraft()
  const product = piece ? getTeeProduct(piece) : undefined
  if (product || prefill?.title) {
    draft.garment = 'T-shirt'
    draft.startingPoint = prefill?.title || product?.title || ''
  }
  if (prefill?.color) draft.color = prefill.color
  if (prefill?.size) draft.sizes = { [prefill.size]: Math.max(1, prefill.quantity ?? 1) }
  if (prefill?.quantity) draft.quantity = String(prefill.quantity)
  return draft
}

export function TShirtCustomizer() {
  const navigate = useNavigate()
  const location = useLocation()
  const [params] = useSearchParams()
  const prefill = (location.state ?? null) as Prefill | null
  const [draft, setDraft] = useState(() => seedDraft(params.get('piece'), prefill))
  const [step, setStep] = useState(0)

  const message = useMemo(() => whatsappTemplates.customizer(draft), [draft])
  const ready = canContinue(step, draft)
  const progress = ((step + 1) / steps.length) * 100

  function patch(partial: Partial<CustomizerDraft>) {
    setDraft((current) => ({ ...current, ...partial }))
  }

  function toggleSide(side: string) {
    setDraft((current) => ({
      ...current,
      sides: current.sides.includes(side) ? current.sides.filter((item) => item !== side) : [...current.sides, side],
    }))
  }

  function setSize(size: string, next: number) {
    setDraft((current) => ({
      ...current,
      sizesLater: false,
      sizes: { ...current.sizes, [size]: Math.max(0, next) },
    }))
  }

  function goNext() {
    if (!ready) return
    if (step === 2 && !draft.quantity) {
      const total = sizeTotal(draft.sizes)
      if (total > 0) patch({ quantity: String(total) })
    }
    setStep((value) => Math.min(steps.length - 1, value + 1))
  }

  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-span-8 lg:pr-10">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink/55 lg:hidden">
          Step {step + 1} of {steps.length}
        </p>
        <div className="mt-3 h-1 bg-cream-muted lg:hidden" aria-hidden>
          <div className="h-full bg-lime transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-4 lg:hidden">
          <CustomizerSummary draft={draft} compact />
        </div>
        <div className="mt-6 hidden lg:block">
          <CustomizerStepper steps={steps} current={step} onJump={setStep} />
        </div>

        <h1 className="mt-8 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
          {steps[step]}
        </h1>

        <div className="mt-6">
          {step === 0 ? (
            <div className="grid gap-3">
              {garmentOptions.map((option) => (
                <Choice
                  key={option.id}
                  title={option.id}
                  note={option.note}
                  selected={draft.garment === option.id}
                  onClick={() => patch({ garment: option.id })}
                />
              ))}
              {draft.garment === 'Another garment' ? (
                <label className="block text-sm font-medium">
                  Describe the garment
                  <input
                    value={draft.garmentNote}
                    onChange={(event) => patch({ garmentNote: event.target.value })}
                    className="mt-2 w-full border border-ink/20 bg-cream px-3 py-3 text-base"
                  />
                </label>
              ) : null}
            </div>
          ) : null}

          {step === 1 ? (
            <div>
              <div className="flex flex-wrap gap-4">
                {preferredColours.map((swatch) => (
                  <ColourSwatch
                    key={swatch.id}
                    label={swatch.label}
                    hex={swatch.hex}
                    selected={draft.color === swatch.label}
                    onSelect={() => patch({ color: swatch.label })}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-ink/60">Preferred colour. Availability is confirmed when we reply.</p>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="grid gap-2">
              {apparelSizes.map((size) => {
                const count = draft.sizes[size] ?? 0
                return (
                  <div key={size} className={cn('flex items-center justify-between border px-3 py-2', count > 0 ? 'border-lime bg-ink text-cream' : 'border-ink/15')}>
                    <span className="font-display text-2xl font-bold">{size}</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className={cn('size-11 border', count > 0 ? 'border-cream/30' : 'border-ink/20')} onClick={() => setSize(size, count - 1)} aria-label={`Decrease ${size}`}>
                        −
                      </button>
                      <span className="w-8 text-center font-mono">{count}</span>
                      <button type="button" className={cn('size-11 border', count > 0 ? 'border-lime' : 'border-ink/20')} onClick={() => setSize(size, count + 1)} aria-label={`Increase ${size}`}>
                        +
                      </button>
                    </div>
                  </div>
                )
              })}
              <button
                type="button"
                aria-pressed={draft.sizesLater}
                onClick={() => patch({ sizesLater: !draft.sizesLater })}
                className={cn('mt-2 min-h-12 border px-4 text-left text-sm font-semibold', draft.sizesLater ? 'border-lime bg-ink text-cream' : 'border-ink/20')}
              >
                I&apos;ll confirm sizes on WhatsApp
              </button>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {sideOptions.map((side) => (
                <Choice key={side} title={side} selected={draft.sides.includes(side)} onClick={() => toggleSide(side)} />
              ))}
            </div>
          ) : null}

          {step === 4 ? (
            <div className="grid gap-3">
              {artworkOptions.map((option) => (
                <Choice key={option} title={option} selected={draft.artwork === option} onClick={() => patch({ artwork: option })} />
              ))}
            </div>
          ) : null}

          {step === 5 ? (
            <label className="block">
              <span className="text-sm font-medium">Words to print</span>
              <textarea
                value={draft.text}
                onChange={(event) => patch({ text: event.target.value })}
                rows={5}
                className="mt-2 w-full border border-ink/20 bg-cream px-3 py-3 text-base"
                placeholder="Optional. You can also send this on WhatsApp."
              />
            </label>
          ) : null}

          {step === 6 ? (
            <div className="grid gap-5">
              <label className="block text-sm font-medium">
                Quantity
                <input
                  inputMode="numeric"
                  value={draft.quantity}
                  onChange={(event) => patch({ quantity: event.target.value.replace(/[^\d]/g, '') })}
                  className="mt-2 w-full border border-ink/20 bg-cream px-3 py-3 text-base"
                />
              </label>
              <label className="block text-sm font-medium">
                Needed by
                <input
                  type="date"
                  value={draft.neededBy}
                  disabled={draft.flexibleDate}
                  onChange={(event) => patch({ neededBy: event.target.value, flexibleDate: false })}
                  className="mt-2 w-full border border-ink/20 bg-cream px-3 py-3 text-base disabled:opacity-40"
                />
              </label>
              <button
                type="button"
                aria-pressed={draft.flexibleDate}
                onClick={() => patch({ flexibleDate: !draft.flexibleDate, neededBy: '' })}
                className={cn('min-h-12 border px-4 text-left text-sm font-semibold', draft.flexibleDate ? 'border-lime bg-ink text-cream' : 'border-ink/20')}
              >
                Flexible — I&apos;ll share timing on WhatsApp
              </button>
              <p className="text-sm text-ink/60">A date is a request, not a confirmed turnaround.</p>
            </div>
          ) : null}

          {step === 7 ? (
            <div>
              <dl className="divide-y divide-ink/10 border-y border-ink/10 lg:hidden">
                {[
                  ['Garment', draft.garment],
                  ['Colour', draft.color],
                  ['Artwork', draft.artwork],
                  ['Quantity', draft.quantity],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink/50">{label}</dt>
                    <dd className="text-sm font-medium">{value || '—'}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                This builds an enquiry. It does not place an order or lock a price.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <WhatsAppButton message={message} full>
                  WhatsApp this design
                </WhatsAppButton>
                <Button
                  variant="primary"
                  full
                  onClick={() => navigate('/quote', { state: { message, interest: 'Custom T-shirts' } })}
                >
                  Get a Quote
                </Button>
                <Button variant="secondary" full onClick={() => { setDraft(emptyDraft()); setStep(0) }}>
                  Start over
                </Button>
              </div>
            </div>
          ) : null}
        </div>

        {step < 7 ? (
          <div className="mt-8 grid grid-cols-2 gap-2">
            <Button variant="secondary" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>
              Back
            </Button>
            <Button onClick={goNext} disabled={!ready}>
              Continue
            </Button>
          </div>
        ) : null}
        {!ready && step < 7 ? <p className="mt-3 text-sm text-ink/55">Choose an option to continue.</p> : null}
      </div>
      <div className="mt-10 hidden lg:col-span-4 lg:mt-0 lg:block">
        <div className="lg:sticky lg:top-24">
          <CustomizerSummary draft={draft} />
        </div>
      </div>
    </div>
  )
}
