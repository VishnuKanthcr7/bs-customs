export function IconWhatsApp({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm0 17.95h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.2.83.86-3.11-.2-.32a8.1 8.1 0 0 1-1.25-4.19c0-4.5 3.7-8.16 8.26-8.16 2.2 0 4.27.85 5.83 2.4a8.1 8.1 0 0 1 2.43 5.76c0 4.5-3.7 8.12-8.24 8.12Zm4.52-6.1c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.38-2-1.22-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.1-.5.12-.12.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  )
}

export function IconPhone({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M8 3.5h3.2l1.2 3.2-2 1.2a12.5 12.5 0 0 0 5.7 5.7l1.2-2 3.2 1.2V16a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 6 6.7 2 2 0 0 1 8 3.5Z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconInstagram({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="16" height="16" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconSun({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" />
    </svg>
  )
}

export function IconMoon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M16.5 14.2A6.2 6.2 0 0 1 9.8 7.5 6.4 6.4 0 1 0 16.5 14.2Z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMenu({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.7">
      {open ? (
        <path d="M6 6 L18 18 M18 6 L6 18" />
      ) : (
        <>
          <path d="M4 8 H20" />
          <path d="M4 16 H20" />
        </>
      )}
    </svg>
  )
}
