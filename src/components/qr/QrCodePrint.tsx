import { useRef } from 'react'
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react'
import { qrDestination, site } from '@/config/site'

export function QrCodePrint() {
  const canvasWrap = useRef<HTMLDivElement>(null)

  function download(kind: 'png' | 'svg') {
    if (!qrDestination) return
    if (kind === 'svg') {
      const svg = document.getElementById('bs-qr-svg')
      if (!svg) return
      const markup = svg.outerHTML.includes('xmlns=')
        ? svg.outerHTML
        : svg.outerHTML.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
      const blob = new Blob([markup], { type: 'image/svg+xml;charset=utf-8' })
      trigger(blob, 'bs-customs-qr.svg')
      return
    }
    const canvas = canvasWrap.current?.querySelector('canvas')
    if (!canvas) return
    canvas.toBlob((blob) => {
      if (blob) trigger(blob, 'bs-customs-qr.png')
    })
  }

  if (!qrDestination) {
    return (
      <div className="border border-ink/15 bg-cream p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/50">QR print sheet</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em]">
          Production QR will be available after the live domain is configured.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
          Set <span className="font-mono">VITE_PUBLIC_SITE_URL</span> to the live https domain. The code will open that
          homepage. Localhost, preview hosts, and IP addresses are not encoded.
        </p>
      </div>
    )
  }

  return (
    <div className="border border-ink bg-cream p-5 md:p-8">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink/50">Print</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em]">{site.brandName}</h2>
      <p className="mt-2 font-mono text-xs text-ink/60">{qrDestination}</p>
      <div className="mt-6 inline-block bg-cream p-4">
        <QRCodeSVG
          id="bs-qr-svg"
          value={qrDestination}
          size={220}
          bgColor="#F4EFE6"
          fgColor="#0B0B0C"
          level="H"
          marginSize={4}
        />
      </div>
      <div ref={canvasWrap} className="pointer-events-none fixed -left-[4000px] top-0" aria-hidden>
        <QRCodeCanvas value={qrDestination} size={1024} bgColor="#F4EFE6" fgColor="#0B0B0C" level="H" marginSize={4} />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <button type="button" className="min-h-11 bg-ink px-4 text-sm font-semibold text-cream" onClick={() => download('png')}>
          Download PNG
        </button>
        <button type="button" className="min-h-11 border border-ink/30 px-4 text-sm font-semibold" onClick={() => download('svg')}>
          Download SVG
        </button>
      </div>
    </div>
  )
}

function trigger(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}
