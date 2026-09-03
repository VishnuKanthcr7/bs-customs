import { useEffect, useRef } from 'react'

type FieldMode = 'field' | 'pulse' | 'converge'

type FieldDetail = {
  mode?: FieldMode
  x?: number
  y?: number
}

function themeColors(): { bg: string; dot: string; accent: string } {
  const light = document.documentElement.classList.contains('light')
  if (light) {
    return { bg: 'rgba(246,241,232,0.18)', dot: 'rgba(76,45,130,0.38)', accent: 'rgba(196,154,20,0.45)' }
  }
  return { bg: 'rgba(8,4,18,0.12)', dot: 'rgba(214,186,255,0.42)', accent: 'rgba(245,208,0,0.5)' }
}

export default function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768

    let w = 0
    let h = 0
    let dpr = 1
    let cols = 0
    let rows = 0
    let count = 0
    let ox = new Float32Array(0)
    let oy = new Float32Array(0)
    let oz = new Float32Array(0)
    let px = new Float32Array(0)
    let py = new Float32Array(0)
    let vx = new Float32Array(0)
    let vy = new Float32Array(0)

    const pointer = { x: -9999, y: -9999, active: false }
    const pulse = { x: 0.5, y: 0.45, t: 0 }
    let converge = 0
    let scroll = 0
    let raf = 0
    let running = true

    const rebuild = () => {
      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.75)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const gap = mobile ? 28 : 22
      cols = Math.ceil(w / gap) + 2
      rows = Math.ceil(h / gap) + 2
      count = cols * rows
      ox = new Float32Array(count)
      oy = new Float32Array(count)
      oz = new Float32Array(count)
      px = new Float32Array(count)
      py = new Float32Array(count)
      vx = new Float32Array(count)
      vy = new Float32Array(count)

      let i = 0
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = (c - 0.5) * gap + (r % 2) * (gap * 0.5)
          const y = (r - 0.5) * gap
          ox[i] = x
          oy[i] = y
          oz[i] = 0.35 + ((c * 13 + r * 7) % 10) / 18
          px[i] = x
          py[i] = y
          i++
        }
      }
    }

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }
    const onLeave = () => {
      pointer.active = false
    }
    const onScroll = () => {
      scroll = window.scrollY
      const finale = document.getElementById('finale')
      if (!finale) return
      const rect = finale.getBoundingClientRect()
      const vis = 1 - Math.min(1, Math.max(0, rect.top / h))
      converge = Math.min(1, Math.max(0, vis))
    }
    const onField = (e: Event) => {
      const detail = (e as CustomEvent<FieldDetail>).detail
      if (!detail) return
      if (detail.mode === 'pulse') {
        pulse.x = detail.x ?? 0.5
        pulse.y = detail.y ?? 0.45
        pulse.t = 1
      }
    }

    rebuild()
    onScroll()
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', rebuild)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('bs-field', onField)

    const tick = () => {
      if (!running) return
      const colors = themeColors()
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = colors.bg
      ctx.fillRect(0, 0, w, h)

      const drift = reduced ? 0 : scroll * 0.035
      const radius = mobile ? 90 : 140
      const strength = reduced || !pointer.active ? 0 : mobile ? 10 : 18
      pulse.t *= 0.94

      const cx = w * 0.5
      const cy = h * 0.52
      const pxPulse = pulse.x * w
      const pyPulse = pulse.y * h

      for (let i = 0; i < count; i++) {
        let tx = ox[i]
        let ty = oy[i] + drift * oz[i]

        if (converge > 0.04) {
          tx += (cx - tx) * converge * 0.55 * oz[i]
          ty += (cy - ty) * converge * 0.55 * oz[i]
        }

        if (strength && !reduced) {
          const dx = px[i] - pointer.x
          const dy = py[i] - pointer.y
          const dist = Math.hypot(dx, dy) || 0.001
          if (dist < radius) {
            const f = (1 - dist / radius) ** 2
            tx += (dx / dist) * f * strength
            ty += (dy / dist) * f * strength
          }
        }

        if (pulse.t > 0.02) {
          const dx = px[i] - pxPulse
          const dy = py[i] - pyPulse
          const dist = Math.hypot(dx, dy) || 0.001
          if (dist < 220) {
            const f = (1 - dist / 220) * pulse.t * 16
            tx += (dx / dist) * f
            ty += (dy / dist) * f
          }
        }

        if (reduced) {
          px[i] = tx
          py[i] = ty
        } else {
          vx[i] += (tx - px[i]) * 0.08
          vy[i] += (ty - py[i]) * 0.08
          vx[i] *= 0.78
          vy[i] *= 0.78
          px[i] += vx[i]
          py[i] += vy[i]
        }

        const size = (mobile ? 1.1 : 1.35) * oz[i]
        ctx.fillStyle = oz[i] > 0.72 ? colors.accent : colors.dot
        ctx.beginPath()
        ctx.arc(px[i], py[i], size, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', rebuild)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('bs-field', onField)
    }
  }, [])

  return <canvas ref={canvasRef} className="dot-field" aria-hidden />
}
