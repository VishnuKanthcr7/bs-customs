import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'whatsapp' | 'secondary' | 'call'
type Tone = 'default' | 'inverse'

const base =
  'inline-flex items-center justify-center gap-2 min-h-11 px-5 text-[0.95rem] font-semibold tracking-[-0.011em] rounded-[6px] transition-transform duration-150 motion-safe:active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40 disabled:pointer-events-none'

const variants: Record<Variant, Record<Tone, string>> = {
  primary: {
    default: 'bg-lime text-on-lime hover:brightness-95 focus-visible:outline-ink',
    inverse: 'bg-lime text-on-lime hover:brightness-95 focus-visible:outline-lime',
  },
  whatsapp: {
    default: 'bg-whatsapp text-white hover:bg-whatsapp-hover focus-visible:outline-ink',
    inverse: 'bg-whatsapp text-white hover:bg-whatsapp-hover focus-visible:outline-lime',
  },
  secondary: {
    default: 'bg-transparent text-ink border border-ink/35 hover:border-ink focus-visible:outline-ink',
    inverse:
      'bg-transparent text-cream border border-cream/40 hover:border-cream focus-visible:outline-lime',
  },
  call: {
    default: 'bg-transparent text-ink border border-ink/55 hover:bg-ink hover:text-cream focus-visible:outline-ink',
    inverse:
      'bg-transparent text-cream border border-cream/55 hover:bg-cream hover:text-ink focus-visible:outline-lime',
  },
}

type Props = {
  variant?: Variant
  tone?: Tone
  href?: string
  external?: boolean
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  full?: boolean
  disabled?: boolean
  ariaLabel?: string
}

export function Button({
  variant = 'primary',
  tone = 'default',
  href,
  external,
  children,
  className,
  type = 'button',
  onClick,
  full,
  disabled,
  ariaLabel,
}: Props) {
  const classes = cn(base, variants[variant][tone], full && 'w-full', className)

  if (href) {
    const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href)
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
