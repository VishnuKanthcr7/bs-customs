import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apparelSizes, preferredColours, type TeeProduct } from '@/config/products'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { ColourSwatch } from '@/components/tshirts/ColourSwatch'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { QuoteCta } from '@/components/actions/QuoteCta'

export function ProductInfo({ product }: { product: TeeProduct }) {
  const navigate = useNavigate()
  const [color, setColor] = useState<string>(preferredColours[0]?.label ?? 'Black')
  const [size, setSize] = useState<string>('M')
  const [quantity, setQuantity] = useState(1)

  const details = useMemo(
    () => [`Preferred colour: ${color}`, `Size: ${size}`, `Quantity: ${quantity}`, 'Pricing confirmed on enquiry.'].join('\n'),
    [color, size, quantity],
  )

  return (
    <div>
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink/50">{product.category}</p>
      <h1 className="mt-3 font-display text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
        {product.title}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-ink-soft">{product.description}</p>
      <p className="mt-4 text-sm font-medium">Pricing is confirmed on enquiry.</p>

      <fieldset className="mt-8">
        <legend className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/55">Colour preference</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {preferredColours.map((swatch) => (
            <ColourSwatch
              key={swatch.id}
              label={swatch.label}
              hex={swatch.hex}
              selected={color === swatch.label}
              onSelect={() => setColor(swatch.label)}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-ink/55">A preference for the enquiry, not a stock promise.</p>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/55">Size</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {apparelSizes.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={size === option}
              onClick={() => setSize(option)}
              className={`min-h-11 min-w-11 border px-3 text-sm font-semibold ${size === option ? 'border-lime bg-ink text-cream' : 'border-ink/25'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="qty" className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/55">
          Quantity
        </label>
        <div className="mt-3 flex items-center gap-2">
          <button type="button" className="size-11 border border-ink/25 text-lg" onClick={() => setQuantity((n) => Math.max(1, n - 1))} aria-label="Decrease quantity">
            −
          </button>
          <input
            id="qty"
            inputMode="numeric"
            className="h-11 w-16 border border-ink/25 bg-cream text-center text-base"
            value={quantity}
            onChange={(event) => {
              const next = Number(event.target.value)
              if (Number.isFinite(next)) setQuantity(Math.max(1, Math.floor(next)))
            }}
          />
          <button type="button" className="size-11 border border-ink/25 text-lg" onClick={() => setQuantity((n) => n + 1)} aria-label="Increase quantity">
            +
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <Button
          full
          onClick={() =>
            navigate(`/t-shirts/design?piece=${product.slug}`, {
              state: { color, size, quantity, title: product.title },
            })
          }
        >
          Customize
        </Button>
        <WhatsAppButton message={whatsappTemplates.product(product.title, details)} full>
          WhatsApp
        </WhatsAppButton>
        <QuoteCta full />
      </div>
    </div>
  )
}
