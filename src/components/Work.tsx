import { useEffect, useRef, type CSSProperties, type PointerEvent, type ReactElement } from 'react'
import { WORK_ATLAS, type SpecimenKind, type WorkEntry } from '@/data/workAtlas'
import {
  CreateSpecimen,
  CutSpecimen,
  LightSpecimen,
  MarkSpecimen,
  PersonalizeSpecimen,
  PrintSpecimen,
} from '@/components/WorkSpecimens'

const VISUAL: Record<SpecimenKind, () => ReactElement> = {
  print: PrintSpecimen,
  mark: MarkSpecimen,
  light: LightSpecimen,
  cut: CutSpecimen,
  personalize: PersonalizeSpecimen,
  create: CreateSpecimen,
}

function pulseField(el: HTMLElement) {
  const r = el.getBoundingClientRect()
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

function AtlasCard({ entry, delay }: { entry: WorkEntry; delay: number }) {
  const ref = useRef<HTMLElement>(null)
  const pulseAt = useRef(0)
  const Visual = VISUAL[entry.kind]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      ([obs]) => {
        if (obs.isIntersecting) {
          el.classList.add('is-in')
          io.disconnect()
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ax', `${x * 3.6}deg`)
    el.style.setProperty('--ay', `${-y * 2.8}deg`)
    el.style.setProperty('--px', `${x * 8}px`)
    el.style.setProperty('--py', `${y * 6}px`)
    el.style.setProperty('--hx', `${48 + x * 28}%`)
    el.style.setProperty('--hy', `${38 + y * 22}%`)

    const now = performance.now()
    if (now - pulseAt.current > 420) {
      pulseAt.current = now
      pulseField(el)
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--ax', '0deg')
    el.style.setProperty('--ay', '0deg')
    el.style.setProperty('--px', '0px')
    el.style.setProperty('--py', '0px')
    el.style.setProperty('--hx', '50%')
    el.style.setProperty('--hy', '40%')
  }

  return (
    <figure
      ref={ref}
      className={`atlas-cell atlas-${entry.kind}`}
      style={{ '--d': `${delay}ms` } as CSSProperties}
      tabIndex={0}
      aria-label={`${entry.index} ${entry.title}. ${entry.label}. ${entry.study}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerEnter={(e) => pulseField(e.currentTarget)}
    >
      <div className="atlas-tech" aria-hidden>
        <span className="atlas-cross" />
        <span className="atlas-orbit" />
        <span className="atlas-index">
          {entry.index} / {entry.title}
        </span>
      </div>
      <div className="atlas-stage">
        {entry.image ? (
          <img className="atlas-photo" src={entry.image} alt={`${entry.title} — ${entry.category ?? entry.label}`} />
        ) : (
          <Visual />
        )}
        <span className="atlas-sheen" />
      </div>
      <figcaption className="atlas-cap">
        <span className="tech-label">{entry.label}</span>
        <span className="atlas-hint">
          {entry.hint}
          <i />
        </span>
      </figcaption>
      <p className="atlas-note">{entry.description ?? entry.study}</p>
    </figure>
  )
}

export default function Work() {
  return (
    <section id="work" className="section atlas-section">
      <div className="atlas-head">
        <p className="tech-label">SEC / 05 — OUR WORK</p>
        <h2 className="display atlas-title">
          WORK IN
          <br />
          THE MAKING.
        </h2>
        <p className="atlas-lead">
          A visual atlas of print, mark, cut, light and personalization.
        </p>
      </div>
      <div className="atlas">
        {WORK_ATLAS.map((entry, i) => (
          <AtlasCard key={entry.id} entry={entry} delay={i * 70} />
        ))}
      </div>
    </section>
  )
}
