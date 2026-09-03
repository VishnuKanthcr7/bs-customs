import { useState } from 'react'
import {
  AcrylicSheet,
  BottleMark,
  CorporateMark,
  CutShape,
  FrameMark,
  GiftMark,
  LedBoard,
  MetalPlate,
  NeonMark,
  ShirtMark,
} from '@/components/CraftObjects'

const SERVICES = [
  {
    n: '01',
    name: 'T-SHIRT PRINTING',
    copy: 'High-quality custom T-shirt printing for individuals, teams and events.',
    Object: ShirtMark,
  },
  {
    n: '02',
    name: 'CUSTOM PHOTO FRAMES',
    copy: 'Frames built around the photograph, finished as an object in the room.',
    Object: FrameMark,
  },
  {
    n: '03',
    name: 'LED BOARDS',
    copy: 'Lit signage for shops, events and interiors.',
    Object: LedBoard,
  },
  {
    n: '04',
    name: 'NEON SIGNS',
    copy: 'Custom neon for names, marks and spaces.',
    Object: NeonMark,
  },
  {
    n: '05',
    name: 'ACRYLIC PHOTO PRINTING',
    copy: 'Photographs finished in acrylic depth.',
    Object: AcrylicSheet,
  },
  {
    n: '06',
    name: 'LASER CUTTING',
    copy: 'Precise cuts in suitable sheet materials and custom shapes.',
    Object: CutShape,
  },
  {
    n: '07',
    name: 'LASER METAL MARKING',
    copy: 'Clean, precise marks on compatible metals and products.',
    Object: MetalPlate,
  },
  {
    n: '08',
    name: 'PEN & BOTTLE MARKING',
    copy: 'Personalized marking for pens, bottles, flasks and gifts.',
    Object: BottleMark,
  },
  {
    n: '09',
    name: 'PERSONALIZED GIFTS',
    copy: 'One-off pieces made around a name, date or idea.',
    Object: GiftMark,
  },
  {
    n: '10',
    name: 'CORPORATE / PROMOTIONAL PRODUCT MARKING',
    copy: 'Marking for brands, events and promotional objects.',
    Object: CorporateMark,
  },
] as const

export default function Services() {
  const [open, setOpen] = useState<string | null>(null)

  const activate = (name: string, el: HTMLElement) => {
    const next = open === name ? null : name
    setOpen(next)
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

  return (
    <section id="services" className="section">
      <p className="tech-label">SEC / 03 — LABORATORY</p>
      <h2 className="display mt-4" style={{ fontSize: 'clamp(2.6rem, 7vw, 5.8rem)' }}>
        WHAT WE MAKE.
      </h2>
      <ul className="mt-12">
        {SERVICES.map((item) => (
          <li key={item.name}>
            <div
              className={open === item.name ? 'lab-item is-open' : 'lab-item'}
              role="button"
              tabIndex={0}
              aria-expanded={open === item.name}
              onClick={(e) => activate(item.name, e.currentTarget)}
              onMouseEnter={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                window.dispatchEvent(
                  new CustomEvent('bs-field', {
                    detail: {
                      mode: 'pulse',
                      x: (r.left + r.width / 2) / window.innerWidth,
                      y: (r.top + r.height / 2) / window.innerHeight,
                    },
                  }),
                )
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  activate(item.name, e.currentTarget)
                }
              }}
            >
              <span className="tech-label">{item.n}</span>
              <div>
                <h3 className="font-display text-3xl md:text-5xl">{item.name}</h3>
                <p>{item.copy}</p>
              </div>
              <item.Object className="lab-icon" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
