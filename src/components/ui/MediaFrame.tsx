import { cn } from '@/lib/cn'

export type MediaKind = 'tee' | 'macro' | 'stone' | 'glow' | 'gift' | 'workshop' | 'plain'
export type MediaAspect = 'portrait' | 'square' | 'landscape' | 'tall' | 'hero'

const aspectClass: Record<MediaAspect, string> = {
  portrait: 'aspect-[4/5]',
  tall: 'aspect-[3/5]',
  square: 'aspect-square',
  landscape: 'aspect-[16/10]',
  hero: 'aspect-[4/5]',
}

const plates: Record<MediaKind, { word: string; crop: string }> = {
  tee: { word: 'TEE', crop: '-left-[6%] top-[8%] text-[42cqw]' },
  macro: { word: 'DETAIL', crop: '-right-[8%] top-[8%] text-[22cqw] text-right' },
  stone: { word: 'STONE', crop: 'left-1/2 top-[42%] -translate-x-1/2 text-[16cqw]' },
  glow: { word: 'LIGHT', crop: 'left-1/2 top-[38%] -translate-x-1/2 text-[26cqw]' },
  gift: { word: 'GIFT', crop: '-left-[2%] top-[6%] text-[28cqw]' },
  workshop: { word: 'STUDIO', crop: '-right-[6%] bottom-[-6%] text-[24cqw] text-right' },
  plain: { word: 'FRAME', crop: '-left-[4%] top-[30%] text-[26cqw]' },
}

export function MediaFrame({
  label,
  alt,
  src,
  aspect = 'portrait',
  tone = 'ink',
  kind = 'plain',
  className,
  priority = false,
  position = 'center',
  positionMobile,
  sizes = '(min-width: 1024px) 42vw, 92vw',
}: {
  label: string
  alt?: string
  src?: string
  aspect?: MediaAspect
  tone?: 'ink' | 'cream'
  kind?: MediaKind
  className?: string
  priority?: boolean
  position?: string
  positionMobile?: string
  sizes?: string
}) {
  const ink = tone === 'ink'
  return (
    <figure
      className={cn(
        '@container group relative overflow-hidden rounded-none',
        aspectClass[aspect],
        ink ? 'bg-ink text-cream' : 'bg-cream-muted text-ink',
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          sizes={sizes}
          style={{
            ['--media-pos' as string]: position,
            ['--media-pos-sm' as string]: positionMobile ?? position,
          }}
          className="h-full w-full object-cover [object-position:var(--media-pos-sm)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02] md:[object-position:var(--media-pos)]"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'low'}
        />
      ) : (
        <Placeholder kind={kind} ink={ink} label={label} />
      )}
      <figcaption className="sr-only">
        {src ? (alt ?? label) : `${label}. Placeholder plate. Not a photograph of BS CUSTOMS work.`}
      </figcaption>
    </figure>
  )
}

function Placeholder({ kind, ink, label }: { kind: MediaKind; ink: boolean; label: string }) {
  const plate = plates[kind]
  return (
    <div className="absolute inset-0">
      {kind === 'glow' ? (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,255,0,0.22),transparent_64%)]" />
      ) : null}
      <p
        aria-hidden
        className={cn(
          'pointer-events-none absolute font-display font-extrabold leading-none tracking-[-0.07em] select-none',
          ink ? 'text-cream/20' : 'text-ink/15',
          plate.crop,
        )}
      >
        {plate.word}
      </p>
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-3 py-3 md:px-4',
          ink ? 'bg-ink' : 'bg-cream-muted',
        )}
      >
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] opacity-70">Placeholder</span>
        <span className="text-right font-mono text-[0.62rem] uppercase tracking-[0.12em]">{label}</span>
      </div>
    </div>
  )
}
