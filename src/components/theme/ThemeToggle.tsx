import { useEffect, useState } from 'react'
import { IconMoon, IconSun } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

const EVENT = 'bs-theme-change'
const STORAGE_KEY = 'bs-theme'

export type ThemeName = 'light' | 'dark'

export function readTheme(): ThemeName {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

export function applyTheme(theme: ThemeName) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* private mode */
  }
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#121110' : '#F4EFE6')
  window.dispatchEvent(new Event(EVENT))
}

export function ThemeToggle({ className, labeled = false }: { className?: string; labeled?: boolean }) {
  const [theme, setTheme] = useState<ThemeName>(readTheme)

  useEffect(() => {
    const sync = () => setTheme(readTheme())
    window.addEventListener(EVENT, sync)
    return () => window.removeEventListener(EVENT, sync)
  }, [])

  const next = theme === 'dark' ? 'light' : 'dark'
  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      className={cn('inline-flex size-11 items-center justify-center text-ink', labeled && 'w-auto gap-2 px-1', className)}
      aria-label={label}
      aria-pressed={theme === 'dark'}
      onClick={() => applyTheme(next)}
    >
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
      {labeled ? <span className="text-sm font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span> : null}
    </button>
  )
}
