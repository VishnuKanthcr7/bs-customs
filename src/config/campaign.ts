/** Licensed campaign photography. Not photographs of BS CUSTOMS customer work. */

import { media, type MediaAsset } from '@/data/media'

export type CampaignPhoto = {
  src: string
  alt: string
  position?: string
  positionMobile?: string
}

function shot(asset: MediaAsset): CampaignPhoto {
  return {
    src: asset.src,
    alt: asset.alt,
    position: asset.position,
    positionMobile: asset.positionMobile,
  }
}

export const campaign = {
  fashion: shot(media.hero),
  black: shot(media.black),
  white: shot(media.white),
  oversized: shot(media.oversized),
  closeup: shot(media.closeup),
  printDetail: shot(media.minimal),
  folded: shot(media.folded),
  stack: shot(media.hangers),
  polo: shot(media.polo),
  cricket: shot(media.cricket),
  football: shot(media.football),
  footballFront: shot(media.footballFront),
  footballYouth: shot(media.footballYouth),
  hangers: shot(media.hangers),
  corporate: shot(media.rack),
  rack: shot(media.rack),
  minimal: shot(media.minimal),
  gift: shot(media.gift),
  giftDetail: shot(media.giftDetail),
  laser: shot(media.laser),
  stone: shot(media.stone),
  neon: shot(media.neon),
  bold: shot(media.street),
  illustration: shot(media.illustration),
  illustrationWorn: shot(media.illustration),
  allover: shot(media.street),
  street: shot(media.street),
  typography: shot(media.typography),
  backPrint: shot(media.backWorn),
} as const satisfies Record<string, CampaignPhoto>
