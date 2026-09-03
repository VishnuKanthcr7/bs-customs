export type SpecimenKind = 'print' | 'mark' | 'light' | 'cut' | 'personalize' | 'create'

export type WorkEntry = {
  id: string
  index: string
  kind: SpecimenKind
  title: string
  label: string
  study: string
  hint: string
  layout: 'hero' | 'compact' | 'portrait' | 'wide' | 'scene' | 'signature'
  /** When original photography is ready, set this to swap the visual study. */
  image?: string
  category?: string
  description?: string
}

export const WORK_ATLAS: WorkEntry[] = [
  {
    id: 'print',
    index: '01',
    kind: 'print',
    title: 'PRINT',
    label: 'PRINT / STUDY',
    study: 'Folded cotton specimen with a studio graphic built from the five lab verbs.',
    hint: 'VIEW STUDY',
    layout: 'hero',
  },
  {
    id: 'mark',
    index: '02',
    kind: 'mark',
    title: 'MARK',
    label: 'LASER MARKING / STUDY',
    study: 'Brushed metal plate with an etched identifier — a study of laser marking.',
    hint: 'EXPLORE MATERIAL',
    layout: 'compact',
  },
  {
    id: 'light',
    index: '03',
    kind: 'light',
    title: 'LIGHT',
    label: 'LIGHT / STUDY',
    study: 'A small neon tube on an acrylic rest. Glow held in check.',
    hint: 'VIEW STUDY',
    layout: 'portrait',
  },
  {
    id: 'cut',
    index: '04',
    kind: 'cut',
    title: 'CUT',
    label: 'CUT / STUDY',
    study: 'Layered acrylic geometry with precision-cut edges and a through-hole.',
    hint: 'EXPLORE MATERIAL',
    layout: 'wide',
  },
  {
    id: 'personalize',
    index: '05',
    kind: 'personalize',
    title: 'PERSONALIZE',
    label: 'PERSONALIZE / STUDY',
    study: 'A still life of markable objects: pen, flask, and a small gift form.',
    hint: 'VIEW STUDY',
    layout: 'scene',
  },
  {
    id: 'create',
    index: '06',
    kind: 'create',
    title: 'CREATE',
    label: 'CREATE / STUDY',
    study: 'A studio totem mixing metal, acrylic, light and a printed fragment.',
    hint: 'VIEW STUDY',
    layout: 'signature',
  },
]
