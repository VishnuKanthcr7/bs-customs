export default function Manifesto() {
  return (
    <section className="section manifesto" aria-labelledby="manifesto-title">
      <p className="tech-label">SEC / 02</p>
      <h2 id="manifesto-title" className="display">
        WE DON&apos;T JUST PRINT.
      </h2>
      <p className="display" style={{ fontSize: 'clamp(2rem, 7vw, 5.4rem)', color: 'var(--accent)' }}>
        WE TRANSFORM.
      </p>
      <p className="display" style={{ fontSize: 'clamp(2.4rem, 8vw, 6.2rem)' }}>
        IDEAS
        <br />
        INTO
        <br />
        OBJECTS.
      </p>
    </section>
  )
}
