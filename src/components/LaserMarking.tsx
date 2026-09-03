const EXAMPLES = [
  'stainless steel',
  'aluminium',
  'brass',
  'copper',
  'suitable mild / painted metals',
  'anodized / coated metal where compatible',
  'metal nameplates',
  'metal tags',
  'keychains',
  'trophies',
  'tools',
  'suitable industrial components',
  'metal bottles / flasks',
  'personalized metal gifts',
  'corporate branding items',
  'product identification marking',
] as const

export default function LaserMarking() {
  return (
    <section className="section">
      <p className="tech-label">MARK / METAL</p>
      <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}>
            PRECISION
            <br />
            LEAVES
            <br />A MARK.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[color:var(--muted)]">
            Laser marking lets us add names, logos, designs, identifiers and details to
            suitable products and surfaces with a clean, precise finish.
          </p>
        </div>
        <div className="rounded-[1.5rem] border border-[color:var(--line)] p-8">
          <p className="tech-label">SUITABLE EXAMPLES</p>
          <ul className="mt-6 columns-1 gap-x-8 sm:columns-2">
            {EXAMPLES.map((item) => (
              <li key={item} className="mb-2 text-sm capitalize">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-[color:var(--muted)]">
            Suitable materials and finishes vary by product. Ask us about compatibility.
          </p>
        </div>
      </div>
    </section>
  )
}
