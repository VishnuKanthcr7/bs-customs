import { useState } from 'react'
import type { TeeProduct } from '@/config/products'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { cn } from '@/lib/cn'

export function ProductGallery({ product }: { product: TeeProduct }) {
  const [active, setActive] = useState(0)
  const frame = product.frames[active] ?? product.frames[0]

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row">
      <div className="rail flex gap-2 overflow-x-auto sm:w-24 sm:flex-col sm:overflow-visible" aria-label="Product views">
        {product.frames.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(index)}
            aria-label={item.label}
            aria-current={index === active ? 'true' : undefined}
            className={cn('w-20 shrink-0 sm:w-full', index === active && 'ring-2 ring-lime ring-offset-2 ring-offset-cream')}
          >
            <MediaFrame label={item.label} alt={item.alt} src={item.src} kind={item.kind} aspect="square" position={item.position} positionMobile={item.positionMobile} />
          </button>
        ))}
      </div>
      <div className="min-w-0 flex-1">
        {frame ? (
          <MediaFrame
            label={frame.label}
            alt={frame.alt}
            src={frame.src}
            kind={frame.kind}
            aspect="portrait"
            position={frame.position}
            positionMobile={frame.positionMobile}
            priority
          />
        ) : null}
      </div>
    </div>
  )
}
