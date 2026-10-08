import { cn } from '@/lib/cn'

export function SectionHeading({
  eyebrow,
  title,
  body,
  inverse = false,
  as = 'h2',
}: {
  eyebrow?: string
  title: string
  body?: string
  inverse?: boolean
  as?: 'h1' | 'h2'
}) {
  const Title = as
  return (
    <div className={cn('max-w-3xl', inverse && 'text-cream')}>
      {eyebrow ? (
        <p className={cn('font-mono text-[0.72rem] uppercase tracking-[0.18em]', inverse ? 'text-cream/70' : 'text-ink/60')}>
          {eyebrow}
        </p>
      ) : null}
      <Title
        className={cn(
          'font-display font-extrabold tracking-[-0.045em] leading-[0.92] text-[clamp(2.4rem,5vw,4.6rem)]',
          eyebrow && 'mt-3',
        )}
      >
        {title}
      </Title>
      {body ? (
        <p className={cn('mt-5 max-w-xl text-base leading-relaxed md:text-lg', inverse ? 'text-cream/80' : 'text-ink-soft')}>
          {body}
        </p>
      ) : null}
    </div>
  )
}
