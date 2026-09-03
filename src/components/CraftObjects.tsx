import { useId, type SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { className?: string }

export function ShirtMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden {...props}>
      <path
        d="M28 38 14 48l10 12 10-6v40h52V54l10 6 10-12-14-10-10-18H38z"
        fill="var(--obj-a)"
        stroke="var(--obj-line)"
        strokeWidth="1.4"
      />
      <path d="M48 22h24l-6 16H54z" fill="var(--obj-b)" />
      <rect x="46" y="58" width="28" height="18" rx="2" fill="var(--accent)" />
    </svg>
  )
}

export function FrameMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden {...props}>
      <rect x="22" y="18" width="76" height="86" rx="4" fill="var(--obj-glass)" stroke="var(--obj-line)" strokeWidth="2" />
      <rect x="32" y="28" width="56" height="54" fill="var(--obj-a)" />
      <circle cx="48" cy="48" r="8" fill="var(--accent)" />
      <path d="M32 82h56L72 58 58 70 48 62z" fill="var(--obj-b)" />
    </svg>
  )
}

export function LedBoard({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 140 90" className={className} aria-hidden {...props}>
      <rect x="8" y="10" width="124" height="58" rx="6" fill="var(--obj-a)" stroke="var(--obj-line)" />
      <rect x="18" y="20" width="104" height="38" fill="#12081c" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={24 + i * 12} y="30" width="8" height="18" rx="1" fill="var(--accent)" opacity={0.45 + (i % 3) * 0.2} />
      ))}
      <rect x="58" y="70" width="24" height="10" fill="var(--obj-b)" />
    </svg>
  )
}

export function NeonMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 140 90" className={className} aria-hidden {...props}>
      <rect x="14" y="18" width="112" height="54" rx="8" fill="var(--obj-a)" />
      <path
        d="M34 46c10-14 28-14 38 0 10 14 28 14 38 0"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M34 46c10-14 28-14 38 0 10 14 28 14 38 0"
        fill="none"
        stroke="var(--magenta)"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  )
}

export function AcrylicSheet({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 110 120" className={className} aria-hidden {...props}>
      <path d="M24 18h62l12 84H36z" fill="var(--obj-glass)" stroke="var(--obj-line)" strokeWidth="1.5" />
      <path d="M30 26h48l9 68H39z" fill="var(--obj-b)" opacity="0.35" />
      <path d="M26 18 18 102h18" fill="none" stroke="white" strokeOpacity="0.35" />
    </svg>
  )
}

export function MetalPlate({ className, ...props }: IconProps) {
  const id = useId()
  return (
    <svg viewBox="0 0 130 80" className={className} aria-hidden {...props}>
      <rect x="10" y="16" width="110" height="48" rx="4" fill={`url(#${id})`} stroke="var(--obj-line)" />
      <text x="65" y="46" textAnchor="middle" fontSize="13" fill="#1a1220" fontFamily="Inter, sans-serif" letterSpacing="2">
        BS
      </text>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ece7dc" />
          <stop offset="0.5" stopColor="#b9b3a6" />
          <stop offset="1" stopColor="#ece7dc" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function BottleMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 70 140" className={className} aria-hidden {...props}>
      <rect x="28" y="8" width="14" height="18" rx="3" fill="var(--obj-b)" />
      <path d="M22 28h26l8 96H14z" fill="var(--obj-a)" stroke="var(--obj-line)" />
      <rect x="24" y="70" width="22" height="18" fill="var(--accent)" />
    </svg>
  )
}

export function PenMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 140 40" className={className} aria-hidden {...props}>
      <path d="M8 20 28 12h92l12 8-12 8H28z" fill="var(--obj-a)" stroke="var(--obj-line)" />
      <path d="M120 12 132 20 120 28" fill="var(--obj-b)" />
      <rect x="48" y="14" width="28" height="12" fill="var(--accent)" />
    </svg>
  )
}

export function CutShape({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 110 110" className={className} aria-hidden {...props}>
      <path
        d="M55 10 96 34v48L55 100 14 82V34z"
        fill="var(--obj-a)"
        stroke="var(--obj-line)"
        strokeDasharray="4 3"
      />
      <circle cx="55" cy="55" r="14" fill="var(--accent)" />
    </svg>
  )
}

export function GiftMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 110 110" className={className} aria-hidden {...props}>
      <rect x="20" y="42" width="70" height="48" rx="4" fill="var(--obj-a)" />
      <rect x="18" y="28" width="74" height="18" rx="3" fill="var(--obj-b)" />
      <rect x="50" y="28" width="10" height="62" fill="var(--accent)" />
      <path d="M55 28c-10-16-24-8-16 4 8-2 16 0 16 8" fill="none" stroke="var(--magenta)" strokeWidth="2" />
    </svg>
  )
}

export function CorporateMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden {...props}>
      <rect x="16" y="22" width="88" height="52" rx="6" fill="var(--obj-a)" stroke="var(--obj-line)" />
      <circle cx="44" cy="48" r="12" fill="var(--obj-b)" />
      <rect x="62" y="40" width="30" height="6" fill="var(--accent)" />
      <rect x="62" y="52" width="22" height="6" fill="var(--obj-line)" opacity="0.4" />
    </svg>
  )
}
