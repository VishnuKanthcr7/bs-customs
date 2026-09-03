const TILES = [
  { kind: 'metal', title: 'METAL', note: 'Brushed reflections. Permanent marks.' },
  { kind: 'acrylic', title: 'ACRYLIC', note: 'Transparent depth. Printed light.' },
  { kind: 'fabric', title: 'FABRIC', note: 'Soft surface. Wearable graphics.' },
  { kind: 'glass', title: 'GLASS', note: 'Clear planes. Measured edges.' },
  { kind: 'print', title: 'PRINT', note: 'Ink. Halftone. Coverage.' },
  { kind: 'light', title: 'LIGHT', note: 'Neon tubes. LED boards.' },
] as const

export default function Materials() {
  return (
    <section id="materials" className="section">
      <p className="tech-label">SEC / 04 — MATERIAL WORLD</p>
      <h2 className="display mt-4" style={{ fontSize: 'clamp(2.4rem, 7vw, 5.4rem)' }}>
        THE SURFACE
        <br />
        IS THE STORY.
      </h2>
      <div className="materials mt-12">
        {TILES.map((tile) => (
          <article key={tile.kind} className="material-tile" data-kind={tile.kind}>
            <h3 className="font-display text-4xl">{tile.title}</h3>
            <p className="mt-3 max-w-xs text-sm">{tile.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
