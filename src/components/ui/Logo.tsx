import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function Logo({ tone = 'ink', className }: { tone?: 'ink' | 'cream'; className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center gap-2 font-display text-[1.2rem] font-extrabold tracking-[-0.05em] leading-none min-h-11',
        tone === 'cream' ? 'text-cream' : 'text-ink',
        className,
      )}
    >
      <span className="size-2.5 bg-lime shrink-0" aria-hidden />
      BS CUSTOMS
    </Link>
  )
}
