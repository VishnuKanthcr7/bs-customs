export type CustomizerDraft = {
  garment: string
  garmentNote: string
  color: string
  sizes: Record<string, number>
  sizesLater: boolean
  sides: string[]
  artwork: string
  text: string
  quantity: string
  neededBy: string
  flexibleDate: boolean
  startingPoint: string
}

export const emptyDraft = (): CustomizerDraft => ({
  garment: '',
  garmentNote: '',
  color: '',
  sizes: {},
  sizesLater: false,
  sides: [],
  artwork: '',
  text: '',
  quantity: '',
  neededBy: '',
  flexibleDate: false,
  startingPoint: '',
})

export const garmentOptions = [
  { id: 'T-shirt', note: 'The piece BS CUSTOMS is built around.' },
  { id: 'Another garment', note: 'Describe it. We confirm whether we can make it.' },
] as const

export const sideOptions = ['Front', 'Back', 'Left sleeve', 'Right sleeve'] as const

export const artworkOptions = [
  'I will send artwork',
  'I need a design made',
  'Text only',
  'Not sure yet',
] as const

export function sizeSummary(sizes: Record<string, number>) {
  const parts = Object.entries(sizes)
    .filter(([, count]) => count > 0)
    .map(([size, count]) => `${size} × ${count}`)
  return parts.length ? parts.join(', ') : ''
}

export function sizeTotal(sizes: Record<string, number>) {
  return Object.values(sizes).reduce((sum, count) => sum + count, 0)
}
