import { useEffect, useId, useRef, useState } from 'react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#materials', label: 'Materials' },
  { href: '#contact', label: 'Contact' },
] as const

function readTheme(): 'dark' | 'light' {
  try {
    const stored = localStorage.getItem('bs-theme')
    if (stored === 'light') return 'light'
    if (stored === 'dark') return 'dark'
  } catch {
    /* ignore */
  }
  return 'dark'
}

export default function Navigation() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    typeof document === 'undefined'
      ? 'dark'
      : document.documentElement.classList.contains('light')
        ? 'light'
        : 'dark',
  )
  const persist = useRef(false)
  const [compact, setCompact] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
    if (!persist.current) {
      persist.current = true
      return
    }
    try {
      localStorage.setItem('bs-theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  useEffect(() => {
    setTheme(readTheme())
  }, [])

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className={cn('glass-nav', compact && 'is-compact')} aria-label="Primary">
        <a href="#top" className="font-sans text-[0.72rem] font-medium tracking-[0.28em]">
          BS CUSTOMS
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={theme === 'light'}
            aria-label={theme === 'dark' ? 'Switch to light world' : 'Switch to dark world'}
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          >
            <span className="theme-toggle-thumb" />
          </button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="nav-link hidden px-2 sm:inline"
          >
            IG
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta !py-2 !px-3">
            START A CUSTOM ORDER
          </a>
          <button
            type="button"
            className="theme-toggle w-11 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="block text-[0.55rem] tracking-[0.14em] text-[color:var(--fg)]">≡</span>
          </button>
        </div>
      </nav>
      <div
        id={menuId}
        className={cn(
          'pointer-events-auto mx-auto mt-2 w-[min(1180px,calc(100%-1.5rem))] rounded-2xl border border-[color:var(--glass-border)] bg-[color:var(--glass)] p-4 backdrop-blur-xl lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link block py-2"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
