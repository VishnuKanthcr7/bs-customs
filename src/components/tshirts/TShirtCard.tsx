import { Link } from 'react-router-dom'
import type { TeeProduct } from '@/config/products'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { cn } from '@/lib/cn'

const widths = [
  'w-[78vw] md:w-[40rem]',
  'w-[58vw] md:mt-14 md:w-[26rem]',
  'w-[70vw] md:w-[32rem]',
  'w-[64vw] md:mt-8 md:w-[30rem]',
  'w-[76vw] md:w-[36rem]',
]

const aspects = ['landscape', 'portrait', 'square', 'landscape', 'portrait'] as const

export function TShirtCard({ product, index }: { product: TeeProduct; index: number }) {
  return (
    <Link
      to={`/t-shirts/${product.slug}`}
      className={cn('shrink-0 snap-start', widths[index % widths.length])}
    >
      <MediaFrame
        label={product.frames[0]?.label ?? product.title}
        alt={product.frames[0]?.alt}
        src={product.frames[0]?.src}
        kind={product.frames[0]?.kind ?? 'tee'}
        aspect={aspects[index % aspects.length]}
      />
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[clamp(1.35rem,2vw,2.15rem)] font-bold leading-tight tracking-[-0.03em]">
          {product.title.replace(/-/g, '\u2011')}
        </h3>
        <span className="font-mono text-[0.68rem] text-ink/45">0{index + 1}</span>
      </div>
      <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft">{product.summary}</p>
    </Link>
  )
}
