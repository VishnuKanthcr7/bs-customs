import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] px-6 py-12">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="tech-label">BS CUSTOMS</p>
          <p className="display mt-3 text-4xl">MADE TO STAND OUT.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[color:var(--muted)]">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            FOLLOW {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  )
}
