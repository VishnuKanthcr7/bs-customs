import { useRef, type PointerEvent } from 'react'
import {
  AcrylicSheet,
  BottleMark,
  CutShape,
  FrameMark,
  GiftMark,
  LedBoard,
  MetalPlate,
  NeonMark,
  PenMark,
  ShirtMark,
} from '@/components/CraftObjects'

const APPS = [
  { id: 'PRINT.EXE', Object: ShirtMark },
  { id: 'MARK.EXE', Object: MetalPlate },
  { id: 'CUT.EXE', Object: CutShape },
  { id: 'LIGHT.EXE', Object: NeonMark },
  { id: 'FRAME.EXE', Object: FrameMark },
  { id: 'LED.EXE', Object: LedBoard },
  { id: 'BOTTLE.EXE', Object: BottleMark },
  { id: 'PEN.EXE', Object: PenMark },
  { id: 'GIFT.EXE', Object: GiftMark },
] as const

export default function Workstation() {
  const stageRef = useRef<HTMLDivElement>(null)

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--wx', `${x * 5}deg`)
    el.style.setProperty('--wy', `${-y * 3.5}deg`)
  }

  const onLeave = () => {
    const el = stageRef.current
    if (!el) return
    el.style.setProperty('--wx', '0deg')
    el.style.setProperty('--wy', '0deg')
  }

  return (
    <section className="section station-section" aria-labelledby="lab-title">
      <p className="tech-label">01 / CUSTOM LAB</p>
      <h2 id="lab-title" className="display mt-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}>
        THE WORKSTATION.
      </h2>
      <p className="mt-4 max-w-xl text-[color:var(--muted)]">
        A retro-futuristic creative desk for print, mark, cut, light and create.
      </p>

      <div
        ref={stageRef}
        className="station"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div className="station-diagram" aria-hidden>
          <span>PRINT</span>
          <span>MARK</span>
          <span>CUT</span>
          <span>LIGHT</span>
          <span>CREATE</span>
        </div>

        <div className="station-sphere" aria-hidden>
          <div className="sphere-core" />
          <div className="sphere-antenna" />
          <div className="sphere-cap" />
        </div>

        <div className="station-tower" aria-hidden>
          <div className="tower-face">
            <span className="lamp lamp-a" />
            <span className="lamp lamp-b" />
            <span className="lamp lamp-c" />
            <div className="tower-slot" />
            <div className="tower-slot" />
            <div className="tower-knobs">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>

        <div className="station-monitor">
          <div className="crt-bezel">
            <div className="crt-screen">
              <div className="crt-scan" aria-hidden />
              <div className="crt-glow" aria-hidden />
              <p className="crt-os">BS_CUSTOMS.OS</p>
              <p className="crt-title">
                BS CUSTOMS<span className="crt-cursor">_</span>
              </p>
              <p className="crt-line">PRINT. MARK. CUT. LIGHT. CREATE.</p>
              <ul className="crt-apps">
                {APPS.map((app) => (
                  <li key={app.id}>
                    <app.Object />
                    <span>{app.id}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="crt-neck" aria-hidden />
          <div className="crt-base" aria-hidden />
        </div>

        <div className="station-panel" aria-hidden>
          <button type="button" className="neo-btn" tabIndex={-1} aria-hidden />
          <button type="button" className="neo-btn" tabIndex={-1} aria-hidden />
          <button type="button" className="neo-btn is-accent" tabIndex={-1} aria-hidden />
        </div>

        <div className="station-keys" aria-hidden>
          {Array.from({ length: 28 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="station-mouse" aria-hidden />

        <svg className="station-cables" viewBox="0 0 800 200" aria-hidden>
          <path d="M120 20 C 140 80, 220 90, 300 70" />
          <path d="M520 40 C 580 90, 640 80, 720 30" />
        </svg>

        <div className="station-sat sat-a">
          <ShirtMark />
        </div>
        <div className="station-sat sat-b">
          <BottleMark />
        </div>
        <div className="station-sat sat-c">
          <AcrylicSheet />
        </div>
      </div>
    </section>
  )
}
