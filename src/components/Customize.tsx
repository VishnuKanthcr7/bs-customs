import { useRef, type PointerEvent } from 'react'
import { WHATSAPP_URL } from '@/lib/site'
import {
  AcrylicSheet,
  BottleMark,
  MetalPlate,
  NeonMark,
  PenMark,
  ShirtMark,
} from '@/components/CraftObjects'

export default function Customize() {
  const orbitRef = useRef<HTMLDivElement>(null)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = orbitRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `translate3d(${x * 18}px, ${y * 12}px, 0)`
  }

  return (
    <section id="contact" className="section">
      <p className="tech-label">SEC / 06 — CUSTOMIZATION</p>
      <h2 className="display mt-4" style={{ fontSize: 'clamp(2.4rem, 7vw, 5.6rem)' }}>
        HAVE AN IDEA?
      </h2>
      <p className="display mt-4" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.4rem)', color: 'var(--accent)' }}>
        LET&apos;S MAKE IT REAL.
      </p>
      <div ref={orbitRef} className="orbit mt-10" onPointerMove={onMove}>
        <div className="floater floater-1">
          <ShirtMark />
        </div>
        <div className="floater floater-2">
          <BottleMark />
        </div>
        <div className="floater floater-3">
          <PenMark />
        </div>
        <div className="floater floater-4">
          <AcrylicSheet />
        </div>
        <div className="floater floater-5">
          <MetalPlate />
        </div>
        <div className="floater floater-6">
          <NeonMark />
        </div>
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta mt-8">
        START A CUSTOM ORDER
      </a>
    </section>
  )
}
