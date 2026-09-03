import { WHATSAPP_URL } from '@/lib/site'
import MiniLab from '@/components/MiniLab'

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="diagram" aria-hidden>
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M40 700h200M40 700v-80" />
          <path d="M1100 640 1160 640 1160 700" />
        </svg>
      </div>
      <div className="hero-grid">
        <p className="kicker">01 / PRINT &nbsp; 02 / MARK &nbsp; 03 / CUT &nbsp; 04 / LIGHT &nbsp; 05 / CREATE</p>
        <h1 className="display hero-brand">
          BS
          <br />
          CUSTOMS
        </h1>
        <p className="display hero-lead">
          WE MAKE
          <br />
          ORDINARY
          <br />
          OBJECTS
          <br />
          UNFORGETTABLE.
        </p>
        <p className="kicker mt-8">PRINT. MARK. CUT. LIGHT. CREATE.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta">
            START A CUSTOM ORDER
          </a>
          <a href="#services" className="cta cta-ghost">
            EXPLORE OUR SERVICES
          </a>
        </div>
      </div>
      <MiniLab />
    </section>
  )
}
