import { useId } from 'react'

function useInk() {
  return useId().replace(/:/g, '')
}

export function PrintSpecimen() {
  const id = useInk()
  const g = `${id}g`
  const fold = `${id}f`
  const hi = `${id}h`
  return (
    <div className="sp sp-print">
      <span className="sp-ground" />
      <svg viewBox="0 0 280 330" className="sp-svg" aria-hidden>
        <defs>
          <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--obj-b)" />
            <stop offset="0.42" stopColor="#e8dcc6" />
            <stop offset="1" stopColor="#c4b39a" />
          </linearGradient>
          <linearGradient id={fold} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9d8c74" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="#fff8ec" stopOpacity="0.12" />
            <stop offset="1" stopColor="#6f624f" stopOpacity="0.28" />
          </linearGradient>
          <radialGradient id={hi} cx="0.32" cy="0.22" r="0.7">
            <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="148" cy="302" rx="78" ry="10" fill="currentColor" opacity="0.18" />
        <path
          d="M96 78c2-18 28-32 48-32s42 12 46 32l22 12 18 8-10 28-22-10v132c0 14-18 24-54 24s-56-10-56-24V116l-22 10-10-28 20-8z"
          fill="#e4d7c0"
        />
        <path
          d="M96 78c2-18 28-32 48-32s42 12 46 32l22 12 18 8-10 28-22-10v132c0 14-18 24-54 24s-56-10-56-24V116l-22 10-10-28 20-8z"
          fill={`url(#${g})`}
          stroke="var(--obj-line)"
          strokeWidth="1.2"
        />
        <path d="M108 78c4 16 28 24 36 24s32-8 36-24" fill="none" stroke="#8a7a64" strokeWidth="2.2" />
        <path d="M118 72c6 10 26 12 28 0" fill="var(--obj-b)" stroke="#b7a890" />
        <path d="M96 118h96" stroke={`url(#${fold})`} strokeWidth="10" opacity="0.55" />
        <path d="M102 168h86" stroke="#6d5f4c" strokeWidth="1.1" opacity="0.22" />
        <path d="M108 214h74" stroke="#fff8ec" strokeWidth="1.2" opacity="0.18" />
        <path d="M88 92 62 104l8 24 20-10" fill="#d4c4aa" stroke="var(--obj-line)" />
        <path d="M192 92l26 12-8 24-20-10" fill="#cbbba0" stroke="var(--obj-line)" />
        <rect x="118" y="128" width="52" height="64" rx="3" fill="var(--violet)" opacity="0.92" />
        <rect x="122" y="132" width="8" height="56" fill="var(--accent)" />
        <circle cx="156" cy="160" r="16" fill="none" stroke="var(--cream)" strokeWidth="1.1" opacity="0.7" />
        <circle cx="156" cy="160" r="8" fill="none" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="2 3" />
        <path d="M148 160h16M156 152v16" stroke="var(--cream)" strokeWidth="0.6" opacity="0.55" />
        <text x="144" y="198" fill="var(--cream)" fontSize="5.2" letterSpacing="1.4" fontFamily="Inter, sans-serif">
          PRINT
        </text>
        <path d="M108 86 172 250" fill="none" stroke={`url(#${hi})`} strokeWidth="18" opacity="0.45" />
      </svg>
    </div>
  )
}

export function MarkSpecimen() {
  const id = useInk()
  const metal = `${id}m`
  const brush = `${id}b`
  return (
    <div className="sp sp-mark">
      <svg viewBox="0 0 260 170" className="sp-svg" aria-hidden>
        <defs>
          <linearGradient id={metal} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#efe8d8" />
            <stop offset="0.28" stopColor="#b8b0a0" />
            <stop offset="0.52" stopColor="#dcd4c4" />
            <stop offset="0.78" stopColor="#9a9384" />
            <stop offset="1" stopColor="#e7e0d0" />
          </linearGradient>
          <pattern id={brush} width="4" height="48" patternUnits="userSpaceOnUse">
            <rect width="4" height="48" fill="transparent" />
            <rect x="0" y="0" width="1" height="48" fill="#fff" opacity="0.18" />
            <rect x="2" y="0" width="0.6" height="48" fill="#2a241c" opacity="0.08" />
          </pattern>
        </defs>
        <ellipse cx="132" cy="152" rx="86" ry="8" fill="currentColor" opacity="0.16" />
        <g className="sp-metal-plate">
          <rect x="28" y="28" width="204" height="108" rx="7" fill="#cfc6b4" />
          <rect x="28" y="28" width="204" height="108" rx="7" fill={`url(#${metal})`} />
          <rect x="28" y="28" width="204" height="108" rx="7" fill={`url(#${brush})`} />
          <rect x="28" y="28" width="204" height="108" rx="7" fill="none" stroke="#6d665a" strokeWidth="1.2" />
          <rect x="36" y="36" width="188" height="92" rx="4" fill="none" stroke="#fff" strokeOpacity="0.22" />
          <circle cx="48" cy="48" r="4.5" fill="#8c8578" stroke="#4a453c" />
          <circle cx="212" cy="48" r="4.5" fill="#8c8578" stroke="#4a453c" />
          <circle cx="48" cy="116" r="4.5" fill="#8c8578" stroke="#4a453c" />
          <circle cx="212" cy="116" r="4.5" fill="#8c8578" stroke="#4a453c" />
          <text
            x="130"
            y="86"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="13"
            letterSpacing="3.4"
            fill="#2a241c"
            opacity="0.55"
          >
            BS CUSTOMS
          </text>
          <text
            x="130.6"
            y="86.6"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="13"
            letterSpacing="3.4"
            fill="#efe8d8"
            opacity="0.28"
          >
            BS CUSTOMS
          </text>
          <text
            x="130"
            y="104"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontSize="6.5"
            letterSpacing="3.2"
            fill="#3d372e"
            opacity="0.5"
          >
            MARK / 02
          </text>
          <path d="M70 114h120" stroke="#2a241c" strokeWidth="0.5" opacity="0.28" />
        </g>
      </svg>
    </div>
  )
}

export function LightSpecimen() {
  const id = useInk()
  const glow = `${id}gl`
  const ac = `${id}ac`
  return (
    <div className="sp sp-light">
      <svg viewBox="0 0 220 260" className="sp-svg" aria-hidden>
        <defs>
          <linearGradient id={ac} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--obj-glass)" />
            <stop offset="1" stopColor="var(--violet)" stopOpacity="0.18" />
          </linearGradient>
          <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse cx="110" cy="228" rx="54" ry="8" fill="currentColor" opacity="0.16" />
        <path
          d="M58 196h104l10 22H48z"
          fill={`url(#${ac})`}
          stroke="var(--obj-line)"
          strokeWidth="1.1"
        />
        <path d="M66 196 54 218" stroke="white" strokeOpacity="0.28" />
        <rect x="96" y="168" width="10" height="30" rx="1" fill="var(--obj-glass)" stroke="var(--obj-line)" />
        <rect x="116" y="168" width="8" height="30" rx="1" fill="var(--obj-glass)" stroke="var(--obj-line)" />
        <g filter={`url(#${glow})`} className="sp-neon">
          <path
            d="M72 158c0-46 28-78 70-78 18 0 34 8 42 22"
            fill="none"
            stroke="var(--violet)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M72 158c0-46 28-78 70-78 18 0 34 8 42 22"
            fill="none"
            stroke="#e9d7ff"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="184" cy="102" r="4.5" fill="var(--accent)" className="sp-neon-tip" />
        </g>
        <path d="M80 204h60" stroke="var(--violet)" strokeOpacity="0.25" strokeWidth="6" />
      </svg>
    </div>
  )
}

export function CutSpecimen() {
  const id = useInk()
  const a = `${id}a`
  const b = `${id}b`
  const c = `${id}c`
  return (
    <div className="sp sp-cut">
      <svg viewBox="0 0 420 220" className="sp-svg" aria-hidden>
        <defs>
          <linearGradient id={a} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--obj-glass)" />
            <stop offset="1" stopColor="var(--violet)" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id={b} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--cream)" stopOpacity="0.28" />
            <stop offset="1" stopColor="var(--obj-glass)" />
          </linearGradient>
          <linearGradient id={c} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="var(--violet)" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <ellipse cx="210" cy="196" rx="120" ry="10" fill="currentColor" opacity="0.12" />
        <g className="sp-cut-layer sp-cut-back">
          <path d="M86 48h168l36 112H122z" fill="rgba(214,196,255,0.22)" stroke="var(--obj-line)" strokeWidth="1.2" />
          <path d="M86 48h168l36 112H122z" fill={`url(#${a})`} stroke="var(--obj-line)" strokeWidth="1.2" />
          <path d="M96 56 84 156" stroke="white" strokeOpacity="0.35" />
        </g>
        <g className="sp-cut-layer sp-cut-mid">
          <path
            d="M168 36 268 72v88l-100 28-72-40V72z"
            fill={`url(#${b})`}
            stroke="var(--obj-line)"
            strokeWidth="1.2"
          />
          <circle cx="196" cy="108" r="22" fill="var(--bg)" fillOpacity="0.35" stroke="var(--accent)" strokeWidth="1" />
          <circle cx="196" cy="108" r="22" fill="none" stroke="white" strokeOpacity="0.35" />
        </g>
        <g className="sp-cut-layer sp-cut-front">
          <path d="M248 58h118l-18 104H230z" fill={`url(#${c})`} stroke="var(--obj-line)" />
          <path d="M258 66 242 154" stroke="white" strokeOpacity="0.4" />
          <path d="M270 86 340 86 328 142 258 142z" fill="none" stroke="var(--accent)" strokeDasharray="3 4" strokeWidth="0.9" />
        </g>
        <circle cx="54" cy="118" r="3" fill="none" stroke="var(--muted)" />
        <path d="M58 118h22" stroke="var(--line)" strokeDasharray="2 3" />
      </svg>
    </div>
  )
}

export function PersonalizeSpecimen() {
  const id = useInk()
  const steel = `${id}s`
  const glass = `${id}g`
  return (
    <div className="sp sp-gift">
      <svg viewBox="0 0 240 300" className="sp-svg" aria-hidden>
        <defs>
          <linearGradient id={steel} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8d877c" />
            <stop offset="0.35" stopColor="#ece7dc" />
            <stop offset="0.7" stopColor="#b9b3a6" />
            <stop offset="1" stopColor="#d8d1c4" />
          </linearGradient>
          <linearGradient id={glass} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6d4aa8" />
            <stop offset="1" stopColor="#241448" />
          </linearGradient>
        </defs>
        <ellipse cx="120" cy="272" rx="78" ry="9" fill="currentColor" opacity="0.16" />
        <path d="M36 248h168" stroke="var(--line)" />
        <g className="sp-flask">
          <rect x="98" y="46" width="22" height="18" rx="3" fill={`url(#${steel})`} stroke="#6d665a" />
          <rect x="102" y="38" width="14" height="10" rx="2" fill="#d8d1c4" />
          <path d="M86 70h46l12 128H74z" fill={`url(#${steel})`} stroke="#6d665a" />
          <path d="M92 86h34l8 96H84z" fill={`url(#${glass})`} opacity="0.35" />
          <path d="M90 78 84 190" stroke="white" strokeOpacity="0.35" strokeWidth="2" />
          <text x="109" y="148" textAnchor="middle" fontSize="8" letterSpacing="1.6" fill="#1a1220" opacity="0.55" fontFamily="Inter, sans-serif">
            BS
          </text>
        </g>
        <g className="sp-pen" transform="translate(28 198) rotate(-18)">
          <path d="M0 10 18 4h92l14 6-14 6H18z" fill={`url(#${steel})`} stroke="#6d665a" />
          <path d="M110 4 128 10 110 16" fill="var(--obj-b)" />
          <rect x="42" y="6" width="28" height="8" fill="var(--violet)" opacity="0.85" />
          <text x="56" y="12.4" textAnchor="middle" fontSize="4.2" fill="var(--cream)" letterSpacing="0.6" fontFamily="Inter, sans-serif">
            MARK
          </text>
        </g>
        <g className="sp-box" transform="translate(158 168)">
          <path d="M8 28 40 16v44L8 72z" fill="var(--violet)" />
          <path d="M40 16 68 28v44L40 60z" fill="#5a3d94" />
          <path d="M8 28 40 16 68 28 36 40z" fill="var(--obj-b)" />
          <rect x="30" y="16" width="8" height="48" fill="var(--accent)" opacity="0.9" />
        </g>
      </svg>
    </div>
  )
}

export function CreateSpecimen() {
  const id = useInk()
  const metal = `${id}m`
  const ac = `${id}a`
  const glow = `${id}g`
  return (
    <div className="sp sp-create">
      <svg viewBox="0 0 340 260" className="sp-svg" aria-hidden>
        <defs>
          <linearGradient id={metal} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9a9384" />
            <stop offset="0.45" stopColor="#ece7dc" />
            <stop offset="1" stopColor="#b8b0a0" />
          </linearGradient>
          <linearGradient id={ac} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="0.22" />
            <stop offset="1" stopColor="var(--violet)" stopOpacity="0.28" />
          </linearGradient>
          <filter id={glow} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse cx="176" cy="232" rx="96" ry="11" fill="currentColor" opacity="0.16" />
        <g className="sp-print-card">
          <rect x="36" y="86" width="54" height="72" rx="3" fill="var(--obj-b)" stroke="var(--obj-line)" transform="rotate(-12 63 122)" />
          <rect x="44" y="98" width="8" height="48" fill="var(--accent)" transform="rotate(-12 63 122)" />
          <rect x="56" y="104" width="26" height="18" fill="var(--violet)" transform="rotate(-12 63 122)" />
        </g>
        <path
          d="M128 48 198 78v92l-70 22-52-32V82z"
          fill={`url(#${ac})`}
          stroke="var(--obj-line)"
          className="sp-cut-layer"
        />
        <path d="M136 58 124 154" stroke="white" strokeOpacity="0.38" />
        <circle cx="162" cy="112" r="16" fill="var(--bg)" fillOpacity="0.25" stroke="var(--cream)" strokeOpacity="0.45" />
        <rect x="118" y="168" width="128" height="44" rx="4" fill={`url(#${metal})`} stroke="#6d665a" />
        <rect x="118" y="168" width="128" height="8" fill="#fff" opacity="0.16" />
        <text x="182" y="196" textAnchor="middle" fontSize="8" letterSpacing="2.8" fill="#2a241c" opacity="0.55" fontFamily="Inter, sans-serif">
          CREATE
        </text>
        <g filter={`url(#${glow})`} className="sp-neon">
          <path d="M232 70c28 8 42 38 34 68" fill="none" stroke="var(--violet)" strokeWidth="6" strokeLinecap="round" />
          <path d="M232 70c28 8 42 38 34 68" fill="none" stroke="#f0e4ff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="266" cy="138" r="3.5" fill="var(--accent)" className="sp-neon-tip" />
        </g>
        <circle cx="248" cy="186" r="7" fill="var(--accent)" />
        <circle cx="248" cy="184" r="3" fill="#fff4c4" opacity="0.7" />
      </svg>
    </div>
  )
}
