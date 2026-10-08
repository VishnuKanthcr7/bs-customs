import { useState, type FormEvent } from 'react'
import { services } from '@/config/services'
import { whatsappTemplates } from '@/config/whatsappTemplates'
import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { cn } from '@/lib/cn'

const interests = [
  'Custom T-shirts',
  ...services.map((service) => service.title),
  'Not sure yet',
]

const contacts = ['WhatsApp', 'Phone', 'Email'] as const

export type QuoteSeed = {
  message?: string
  interest?: string
}

type Fields = {
  name: string
  business: string
  phone: string
  email: string
  interest: string
  quantity: string
  message: string
  contact: string
}

const empty = (seed?: QuoteSeed): Fields => ({
  name: '',
  business: '',
  phone: '',
  email: '',
  interest: seed?.interest ?? '',
  quantity: '',
  message: seed?.message ?? '',
  contact: 'WhatsApp',
})

export function QuoteForm({ seed, tone = 'cream' }: { seed?: QuoteSeed; tone?: 'cream' | 'ink' }) {
  const [fields, setFields] = useState(() => empty(seed))
  const [errors, setErrors] = useState<string[]>([])
  const [ready, setReady] = useState('')
  const inkPanel = tone === 'ink'

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    const next: string[] = []
    if (fields.name.trim().length < 2) next.push('Add your name.')
    if (fields.phone.trim().length < 8) next.push('Add a phone number we can reach.')
    if (!fields.interest) next.push('Choose a service interest.')
    if (fields.message.trim().length < 4) next.push('Add a short message.')
    if (!fields.contact) next.push('Choose how we should reply.')
    setErrors(next)
    if (next.length) {
      setReady('')
      return
    }
    const message = whatsappTemplates.quote(fields)
    setReady(message)
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  const label = inkPanel ? 'text-cream/80' : 'text-ink'
  const field = cn(
    'mt-2 w-full min-h-11 border px-3 py-3 text-base',
    inkPanel ? 'border-cream/25 bg-ink text-cream' : 'border-ink/20 bg-cream text-ink',
  )

  return (
    <form onSubmit={submit} className={cn('p-5 md:p-8', inkPanel ? 'border border-cream/20' : 'border border-ink/15 bg-cream')} noValidate>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] opacity-60">Quote enquiry</p>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em]">Tell us the brief</h2>
      <div className="mt-6 grid gap-4">
        <label className={cn('text-sm font-medium', label)}>
          Name
          <input className={field} value={fields.name} onChange={(event) => set('name', event.target.value)} autoComplete="name" />
        </label>
        <label className={cn('text-sm font-medium', label)}>
          Business name
          <input className={field} value={fields.business} onChange={(event) => set('business', event.target.value)} autoComplete="organization" />
        </label>
        <label className={cn('text-sm font-medium', label)}>
          Phone
          <input className={field} value={fields.phone} onChange={(event) => set('phone', event.target.value)} autoComplete="tel" inputMode="tel" />
        </label>
        <label className={cn('text-sm font-medium', label)}>
          Email
          <input className={field} type="email" value={fields.email} onChange={(event) => set('email', event.target.value)} autoComplete="email" />
        </label>
        <label className={cn('text-sm font-medium', label)}>
          Service interest
          <select className={field} value={fields.interest} onChange={(event) => set('interest', event.target.value)}>
            <option value="">Select</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
        <label className={cn('text-sm font-medium', label)}>
          Approx quantity
          <input className={field} value={fields.quantity} onChange={(event) => set('quantity', event.target.value)} />
        </label>
        <label className={cn('text-sm font-medium', label)}>
          Message
          <textarea className={field} rows={5} value={fields.message} onChange={(event) => set('message', event.target.value)} />
        </label>
        <fieldset>
          <legend className={cn('text-sm font-medium', label)}>Preferred contact</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {contacts.map((contact) => (
              <button
                key={contact}
                type="button"
                aria-pressed={fields.contact === contact}
                onClick={() => set('contact', contact)}
                className={cn(
                  'min-h-11 border px-4 text-sm font-semibold',
                  fields.contact === contact
                    ? 'border-lime bg-lime text-ink'
                    : inkPanel
                      ? 'border-cream/30'
                      : 'border-ink/20',
                )}
              >
                {contact}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      {errors.length ? (
        <ul className="mt-4 space-y-1 text-sm text-danger">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}
      <button type="submit" className="mt-6 inline-flex min-h-11 items-center bg-lime px-5 text-sm font-semibold text-ink motion-safe:active:scale-[0.98]">
        Send on WhatsApp
      </button>
      {ready ? (
        <p className="mt-4 text-sm text-success">
          WhatsApp should open with your enquiry. If it did not, use the button again. Nothing is submitted to a server.
        </p>
      ) : null}
    </form>
  )
}
