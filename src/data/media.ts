/**
 * Campaign imagery for the site.
 * Replace any file in `public/images/` and keep the same `src` to swap in real BS CUSTOMS photographs.
 * `origin: "campaign"` means the picture is licensed reference photography, not a BS CUSTOMS job.
 * `origin: "business"` is reserved for photographs the studio actually supplies.
 *
 * Client reference mockups that include other brands, logos, or watermarks
 * are not imported here. Swap any `src` for a file in `public/images/tshirts/`
 * when real BS CUSTOMS photographs are ready.
 */

export type MediaOrigin = 'campaign' | 'business'

export type MediaAsset = {
  id: string
  src: string
  alt: string
  category: string
  origin: MediaOrigin
  position?: string
  positionMobile?: string
}

const campaign = (asset: Omit<MediaAsset, 'origin'>): MediaAsset => ({
  ...asset,
  origin: 'campaign',
})

export const media = {
  hero: campaign({
    id: 'hero',
    src: '/images/tshirts/tshirt-custom-fashion.webp',
    alt: 'Campaign photograph of two people wearing oversized black T-shirts with a large printed graphic.',
    category: 'custom-tshirt',
    position: 'center 32%',
    positionMobile: 'center 26%',
  }),
  black: campaign({
    id: 'black',
    src: '/images/tshirts/tshirt-black-model.webp',
    alt: 'Campaign photograph of a person wearing a black T-shirt with a large graphic print.',
    category: 'black-tshirt',
    position: 'center 30%',
    positionMobile: 'center 28%',
  }),
  white: campaign({
    id: 'white',
    src: '/images/tshirts/tshirt-white-model.webp',
    alt: 'Campaign photograph of a person wearing a light T-shirt with an illustrated print.',
    category: 'white-tshirt',
    position: 'center 42%',
    positionMobile: 'center 36%',
  }),
  oversized: campaign({
    id: 'oversized',
    src: '/images/tshirts/tshirt-oversized.webp',
    alt: 'Campaign photograph of a person wearing an oversized black T-shirt with a bold front print.',
    category: 'oversized-tshirt',
    position: 'center 18%',
    positionMobile: 'center 16%',
  }),
  typography: campaign({
    id: 'typography',
    src: '/images/tshirts/details/print-typography.webp',
    alt: 'Campaign photograph of lettering printed across a white striped T-shirt.',
    category: 'print-detail',
    position: 'center 72%',
    positionMobile: 'center 78%',
  }),
  closeup: campaign({
    id: 'closeup',
    src: '/images/tshirts/custom-print-closeup.webp',
    alt: 'Campaign photograph of a person wearing a T-shirt with large custom lettering.',
    category: 'custom-artwork',
    position: 'center 22%',
    positionMobile: 'center 20%',
  }),
  minimal: campaign({
    id: 'minimal',
    src: '/images/tshirts/tshirt-custom-print-detail.webp',
    alt: 'Campaign photograph of a black T-shirt with a small printed mark.',
    category: 'print-detail',
    position: 'center 42%',
    positionMobile: 'center 40%',
  }),
  folded: campaign({
    id: 'folded',
    src: '/images/tshirts/tshirt-folded.webp',
    alt: 'Campaign photograph of folded T-shirts in several colours.',
    category: 'regular-tshirt',
    position: 'center',
    positionMobile: 'center',
  }),
  rack: campaign({
    id: 'rack',
    src: '/images/tshirts/tshirt-stack.webp',
    alt: 'Campaign photograph of T-shirts in many colours hanging together.',
    category: 'corporate-tshirt',
    position: 'center 60%',
    positionMobile: 'center 55%',
  }),
  polo: campaign({
    id: 'polo',
    src: '/images/tshirts/tshirt-polo.webp',
    alt: 'Campaign photograph of folded polo shirts in several colours.',
    category: 'polo',
    position: 'center',
    positionMobile: 'center',
  }),
  cricket: campaign({
    id: 'cricket',
    src: '/images/tshirts/jersey-cricket.webp',
    alt: 'Campaign photograph of a cricketer in white apparel. Not a club kit and not BS CUSTOMS work.',
    category: 'cricket-jersey',
    position: '28% 42%',
    positionMobile: '32% 40%',
  }),
  football: campaign({
    id: 'football',
    src: '/images/tshirts/jersey-football-names.webp',
    alt: 'Campaign photograph of footballers in jerseys with names and numbers. Not an official club kit and not BS CUSTOMS work.',
    category: 'football-jersey',
    position: '42% 42%',
    positionMobile: '34% 40%',
  }),
  footballYouth: campaign({
    id: 'football-youth',
    src: '/images/tshirts/jersey-football.webp',
    alt: 'Campaign photograph of a youth football match. Not an official club kit and not BS CUSTOMS work.',
    category: 'football-jersey',
    position: 'center 40%',
    positionMobile: 'center 38%',
  }),
  footballFront: campaign({
    id: 'football-front',
    src: '/images/tshirts/jersey-football-front.webp',
    alt: 'Campaign photograph of a custom football jersey. Not an official club kit and not BS CUSTOMS work.',
    category: 'football-jersey',
    position: 'center 40%',
    positionMobile: 'center 35%',
  }),
  backWorn: campaign({
    id: 'back-worn',
    src: '/images/tshirts/details/tshirt-back-print.webp',
    alt: 'Campaign photograph of a person seen from behind, wearing a dark T-shirt with a large back print.',
    category: 'back-print',
    position: 'center 42%',
    positionMobile: 'center 36%',
  }),
  street: campaign({
    id: 'street',
    src: '/images/tshirts/custom/tshirt-allover.webp',
    alt: 'Campaign photograph of a person wearing a black T-shirt covered in a large graphic print.',
    category: 'oversized-tshirt',
    position: 'center 28%',
    positionMobile: 'center 18%',
  }),
  illustration: campaign({
    id: 'illustration',
    src: '/images/tshirts/custom/tshirt-illustration-worn.webp',
    alt: 'Campaign photograph of a person wearing a black T-shirt with an illustrated graphic.',
    category: 'custom-artwork',
    position: 'center 22%',
    positionMobile: 'center 16%',
  }),
  hangers: campaign({
    id: 'hangers',
    src: '/images/tshirts/tshirt-hangers.webp',
    alt: 'Campaign photograph of printed and plain T-shirts on hangers.',
    category: 'apparel',
    position: 'center 70%',
    positionMobile: 'center 65%',
  }),
  gift: campaign({
    id: 'gift',
    src: '/images/services/gift.webp',
    alt: 'Campaign photograph of a wrapped gift.',
    category: 'gifts',
    position: 'center',
    positionMobile: 'center',
  }),
  giftDetail: campaign({
    id: 'gift-detail',
    src: '/images/services/gift-detail.webp',
    alt: 'Campaign photograph of a gift tied with ribbon.',
    category: 'gifts',
    position: 'center',
    positionMobile: 'center',
  }),
  laser: campaign({
    id: 'laser',
    src: '/images/services/laser.webp',
    alt: 'Campaign photograph of ceramic pieces. Not a photograph of BS CUSTOMS engraving.',
    category: 'laser',
    position: 'center',
    positionMobile: 'center',
  }),
  stone: campaign({
    id: 'stone',
    src: '/images/services/stone.webp',
    alt: 'Campaign photograph of ceramic pieces. Not a photograph of BS CUSTOMS stone work.',
    category: 'stone',
    position: 'center 60%',
    positionMobile: 'center',
  }),
  neon: campaign({
    id: 'neon',
    src: '/images/services/neon.webp',
    alt: 'Campaign photograph of hanging light bulbs. Not a BS CUSTOMS sign.',
    category: 'neon',
    position: 'center',
    positionMobile: 'center',
  }),
} as const

export type MediaKey = keyof typeof media
