import { campaign } from '@/config/campaign'

export type TeeFrame = {
  label: string
  kind: 'tee' | 'macro' | 'workshop'
  aspect: 'portrait' | 'square' | 'landscape'
  src: string
  alt: string
  position?: string
  positionMobile?: string
}

export type TeeProduct = {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  frames: TeeFrame[]
}

export const teeCategories = [
  'All',
  'Custom printed T-shirts',
  'Personalized T-shirts',
  'Couple / family sets',
  'Event / batch tees',
  'Business / staff apparel',
] as const

export const teeProducts: TeeProduct[] = [
  {
    slug: 'custom-printed',
    title: 'Custom printed T-shirt',
    category: 'Custom printed T-shirts',
    summary: 'Artwork, a mark, or a graphic — printed to order.',
    description:
      'A custom printed T-shirt, made when you enquire. Share the artwork, the words, the colour, and the sizes. We confirm the details before anything is produced. Pricing is shared on enquiry.',
    frames: [
      { label: 'Printed T-shirt', kind: 'tee', aspect: 'portrait', ...campaign.fashion },
      { label: 'Black T-shirt', kind: 'tee', aspect: 'portrait', ...campaign.black },
      { label: 'Print close-up', kind: 'macro', aspect: 'square', ...campaign.closeup },
      { label: 'Folded T-shirts', kind: 'workshop', aspect: 'landscape', ...campaign.folded },
    ],
  },
  {
    slug: 'personalized',
    title: 'Personalized T-shirt',
    category: 'Personalized T-shirts',
    summary: 'A name, a date, a line that belongs to one person.',
    description:
      'Personalization starts with the words you want on the shirt. Colour, size, and placement are part of the enquiry. We do not list a fixed style range or a price here.',
    frames: [
      { label: 'White T-shirt', kind: 'tee', aspect: 'portrait', ...campaign.white },
      { label: 'Print close-up', kind: 'macro', aspect: 'square', ...campaign.closeup },
      { label: 'Black T-shirt', kind: 'tee', aspect: 'portrait', ...campaign.black },
    ],
  },
  {
    slug: 'couple-family',
    title: 'Couple / family set',
    category: 'Couple / family sets',
    summary: 'More than one shirt, planned as a set.',
    description:
      'A set for more than one person. Share the names, the sizes, and how the shirts should relate. Quantities and pricing are confirmed together.',
    frames: [
      { label: 'Printed T-shirt', kind: 'tee', aspect: 'portrait', ...campaign.fashion },
      { label: 'Folded shirts', kind: 'workshop', aspect: 'landscape', ...campaign.stack },
      { label: 'Print close-up', kind: 'macro', aspect: 'square', ...campaign.closeup },
    ],
  },
  {
    slug: 'event-batch',
    title: 'Event / batch tees',
    category: 'Event / batch tees',
    summary: 'A group, a date, one agreed design.',
    description:
      'Tees for an event or a group. Send the design direction, the size breakdown, and the date you have in mind. Timeline is confirmed on enquiry — it is not promised on this page.',
    frames: [
      { label: 'Group shirts', kind: 'workshop', aspect: 'landscape', ...campaign.corporate },
      { label: 'Printed T-shirt', kind: 'tee', aspect: 'portrait', ...campaign.black },
      { label: 'Print close-up', kind: 'macro', aspect: 'square', ...campaign.closeup },
    ],
  },
  {
    slug: 'staff-apparel',
    title: 'Business / staff apparel',
    category: 'Business / staff apparel',
    summary: 'Shirts for a team, a counter, or a crew.',
    description:
      'Staff or business apparel, planned as a batch. Share the branding and the sizes. Construction details and pricing are confirmed before production.',
    frames: [
      { label: 'Team shirts', kind: 'tee', aspect: 'portrait', ...campaign.corporate },
      { label: 'Folded shirts', kind: 'workshop', aspect: 'square', ...campaign.stack },
      { label: 'Print close-up', kind: 'macro', aspect: 'landscape', ...campaign.closeup },
    ],
  },
]

export function getTeeProduct(slug: string) {
  return teeProducts.find((product) => product.slug === slug)
}

export const preferredColours = [
  { id: 'black', label: 'Black', hex: '#0B0B0C' },
  { id: 'white', label: 'White', hex: '#F7F6F3' },
  { id: 'cream', label: 'Cream', hex: '#F4EFE6' },
  { id: 'navy', label: 'Navy', hex: '#1C2430' },
  { id: 'grey', label: 'Grey', hex: '#8C8882' },
  { id: 'red', label: 'Red', hex: '#8E2F2A' },
  { id: 'other', label: 'Other', hex: '' },
] as const

export const apparelSizes = ['S', 'M', 'L', 'XL', 'XXL'] as const
