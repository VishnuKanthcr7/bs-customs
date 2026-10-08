export type ServiceSlug =
  | 'custom-gifts'
  | 'laser-engraving'
  | 'stone-personalization'
  | 'led-neon'
  | 'corporate-bulk'

export type ServiceDef = {
  slug: ServiceSlug
  index: string
  title: string
  navLabel: string
  lede: string
  paragraphs: string[]
  enquireAbout: string[]
  whatsappKey: 'gifts' | 'laser' | 'stone' | 'led' | 'bulk'
}

export const services: ServiceDef[] = [
  {
    slug: 'custom-gifts',
    index: '01',
    title: 'Custom Printing & Gifts',
    navLabel: 'Custom gifts',
    lede: 'Printed and personalized gifts, made to order in Bidar.',
    paragraphs: [
      'Tell us the occasion and the object you have in mind. If we can make it, we will say so. If we cannot, we will say that too.',
      'Nothing on this page is a fixed catalogue. Each piece starts as an enquiry.',
    ],
    enquireAbout: ['A gift you want printed or personalized', 'An occasion, name, or short message', 'How many you need'],
    whatsappKey: 'gifts',
  },
  {
    slug: 'laser-engraving',
    index: '02',
    title: 'Laser Engraving & Marking',
    navLabel: 'Laser engraving',
    lede: 'Marking and engraving for pieces you want lettered or signed.',
    paragraphs: [
      'Share the item, or describe it. We confirm what can be marked before any work starts.',
      'Machine details, materials, and depth are agreed on enquiry — they are not listed here.',
    ],
    enquireAbout: ['The item to be marked', 'The words, logo, or mark', 'When you need it'],
    whatsappKey: 'laser',
  },
  {
    slug: 'stone-personalization',
    index: '03',
    title: 'Stone Engraving & Personalization',
    navLabel: 'Stone personalization',
    lede: 'A calm commission. Share the stone and the mark you want.',
    paragraphs: [
      'Suitability is confirmed when we see the piece or a clear description. We do not promise a material, a depth, or a finish in advance.',
    ],
    enquireAbout: ['The stone or object', 'The name, date, or mark', 'Where it needs to go'],
    whatsappKey: 'stone',
  },
  {
    slug: 'led-neon',
    index: '04',
    title: 'LED & Neon Signage',
    navLabel: 'LED & neon',
    lede: 'Signage for a room, a shopfront, or a moment.',
    paragraphs: [
      'Send the words, a rough size, and where the sign will live. Pricing and construction are confirmed on enquiry.',
    ],
    enquireAbout: ['The words or symbol', 'Approximate size', 'Indoor or outdoor placement'],
    whatsappKey: 'led',
  },
  {
    slug: 'corporate-bulk',
    index: '05',
    title: 'Corporate & Bulk Orders',
    navLabel: 'Corporate & bulk',
    lede: 'Batches for teams, events, and businesses — apparel, branding, and signage.',
    paragraphs: [
      'Share the quantity you have in mind and what the order needs to do. Mixed orders are welcome. Nothing is priced until the brief is clear.',
    ],
    enquireAbout: [
      'Apparel batches',
      'Staff or event tees',
      'Business branding',
      'Signage',
      'Mixed orders',
    ],
    whatsappKey: 'bulk',
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
