import type { CustomizerDraft } from '@/config/customizer'
import { sizeSummary } from '@/config/customizer'

const signOff = 'Sent from the BS CUSTOMS website.'

export const whatsappTemplates = {
  home: () =>
    'Hi BS CUSTOMS, I found you through your website and would like to know more about your services.',

  sports: () =>
    'Hi BS CUSTOMS, I would like to enquire about a custom cricket or football jersey.',

  teeHub: () =>
    ['Hello BS CUSTOMS, I would like to enquire about a custom T-shirt.', signOff].join('\n'),

  product: (title: string, details: string) =>
    [`Hello BS CUSTOMS, I would like to enquire about: ${title}.`, details, signOff]
      .filter(Boolean)
      .join('\n\n'),

  customizer: (draft: CustomizerDraft) => {
    const lines = [
      'Hello BS CUSTOMS, I would like to enquire about a custom piece.',
      '',
      `Garment: ${draft.garment || 'Not specified'}${draft.garmentNote ? ` — ${draft.garmentNote}` : ''}`,
      `Colour: ${draft.color || 'Not specified'}`,
      `Sizes: ${draft.sizesLater ? 'Confirm on WhatsApp' : sizeSummary(draft.sizes) || 'Not specified'}`,
      `Sides: ${draft.sides.length ? draft.sides.join(', ') : 'Not specified'}`,
      `Artwork: ${draft.artwork || 'Not specified'}`,
      `Text: ${draft.text.trim() || 'None'}`,
      `Quantity: ${draft.quantity || 'Not specified'}`,
      `Needed by: ${draft.flexibleDate ? 'Flexible' : draft.neededBy || 'Not specified'}`,
    ]
    if (draft.startingPoint) lines.push(`Starting point: ${draft.startingPoint}`)
    lines.push('', signOff)
    return lines.join('\n')
  },

  gifts: () =>
    ['Hello BS CUSTOMS, I would like to enquire about custom printing or a personalized gift.', signOff].join(
      '\n',
    ),

  laser: () =>
    ['Hello BS CUSTOMS, I would like to enquire about laser engraving or marking.', signOff].join('\n'),

  stone: () =>
    ['Hello BS CUSTOMS, I would like to enquire about stone engraving and personalization.', signOff].join(
      '\n',
    ),

  led: () =>
    ['Hello BS CUSTOMS, I would like to enquire about LED or neon signage.', signOff].join('\n'),

  bulk: () =>
    ['Hello BS CUSTOMS, I would like to enquire about a corporate or bulk order.', signOff].join('\n'),

  qr: (source?: string | null) => {
    const line = 'Hi BS CUSTOMS, I found you through your QR code and would like to know more about your services.'
    const src = source?.trim() ?? ''
    if (/^[a-z0-9-]{1,32}$/i.test(src)) return `${line}\nSource: ${src}`
    return line
  },

  quote: (fields: {
    name: string
    business: string
    phone: string
    email: string
    interest: string
    quantity: string
    message: string
    contact: string
  }) =>
    [
      'Hello BS CUSTOMS, I would like a quote.',
      '',
      `Name: ${fields.name}`,
      `Business: ${fields.business || '—'}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email || '—'}`,
      `Interest: ${fields.interest}`,
      `Approx. quantity: ${fields.quantity || '—'}`,
      `Preferred contact: ${fields.contact}`,
      '',
      fields.message,
      '',
      signOff,
    ].join('\n'),
}
