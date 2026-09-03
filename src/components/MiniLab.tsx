import { useRef, type PointerEvent } from 'react'

const WORDS = ['PRINT', 'MARK', 'CUT', 'LIGHT', 'CREATE'] as const

export default function MiniLab() {
  const rootRef = useRef<HTMLDivElement>(null)
  const pulseRef = useRef(0)

  const tilt = (e: PointerEvent<HTMLDivElement>) => {
    const el = rootRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--lx', `${x * 7}deg`)
    el.style.setProperty('--ly', `${-y * 5}deg`)
    el.style.setProperty('--hx', `${x * 8}px`)
    el.style.setProperty('--hy', `${y * 6}px`)

    const now = performance.now()
    if (now - pulseRef.current > 360) {
      pulseRef.current = now
      window.dispatchEvent(
        new CustomEvent('bs-field', {
          detail: {
            mode: 'pulse',
            x: (r.left + r.width / 2) / window.innerWidth,
            y: (r.top + r.height / 2) / window.innerHeight,
          },
        }),
      )
    }
  }

  const rest = () => {
    const el = rootRef.current
    if (!el) return
    el.style.setProperty('--lx', '0deg')
    el.style.setProperty('--ly', '0deg')
    el.style.setProperty('--hx', '0px')
    el.style.setProperty('--hy', '0px')
  }

  return (
    <div
      ref={rootRef}
      className="mini-lab"
      onPointerMove={tilt}
      onPointerLeave={rest}
      aria-hidden
    >
      <div className="mini-hud">
        <svg viewBox="0 0 420 420" className="mini-hud-rings">
          <g className="hud-spin-slow">
            <circle cx="210" cy="210" r="168" className="hud-ring" />
            <circle className="hud-dot hud-dot-b" cx="378" cy="210" r="3" />
          </g>
          <circle cx="210" cy="210" r="198" className="hud-ring" />
          <circle cx="210" cy="210" r="128" className="hud-ring hud-dash" />
          <circle cx="210" cy="210" r="86" className="hud-ring" />
          <line x1="210" y1="12" x2="210" y2="42" />
          <line x1="210" y1="378" x2="210" y2="408" />
          <line x1="12" y1="210" x2="42" y2="210" />
          <line x1="378" y1="210" x2="408" y2="210" />
          <circle className="hud-dot hud-dot-a" cx="210" cy="42" r="3" />
          <circle className="hud-dot hud-dot-a" cx="42" cy="210" r="2.5" />
          <g className="hud-scan-g">
            <circle className="hud-scan" cx="210" cy="210" r="168" />
          </g>
        </svg>
        <p className="mini-hud-tag">CUSTOM LAB / 01</p>
      </div>

      <div className="mini-device">
        <span className="dev-orb" />
        <span className="dev-fin" />
        <span className="dev-tube" />
        <div className="dev-shell">
          <span className="dev-core" />
          <div className="dev-screen">
            {WORDS.map((word) => (
              <b key={word}>{word}</b>
            ))}
          </div>
          <span className="dev-jewel" />
        </div>
      </div>
    </div>
  )
}
