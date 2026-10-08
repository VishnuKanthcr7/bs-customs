import { useMemo, useState } from 'react'
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from '@/config/gallery'
import { Chip } from '@/components/ui/Chip'
import { MediaFrame } from '@/components/ui/MediaFrame'
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox'

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<GalleryCategory>('All')
  const [openId, setOpenId] = useState<string | null>(null)

  const items = useMemo(() => {
    const pool = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)
    return typeof limit === 'number' ? pool.slice(0, limit) : pool
  }, [filter, limit])

  const openIndex = items.findIndex((item) => item.id === openId)
  const openItem = openIndex >= 0 ? items[openIndex] : null

  function shift(delta: number) {
    if (!items.length || openIndex < 0) return
    const next = (openIndex + delta + items.length) % items.length
    setOpenId(items[next]?.id ?? null)
  }

  return (
    <div>
      {limit ? null : (
        <div className="rail -mx-5 mb-6 flex snap-x gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
          {galleryCategories.map((category) => (
            <Chip key={category} selected={filter === category} onClick={() => setFilter(category)}>
              {category}
            </Chip>
          ))}
        </div>
      )}
      <div className="grid grid-cols-12 gap-x-3 gap-y-8">
        {items.map((item, index) => (
          <div key={item.id} className={tileSpan(index)}>
            <GalleryTile item={item} onOpen={() => setOpenId(item.id)} />
          </div>
        ))}
      </div>
      <GalleryLightbox item={openItem ?? null} onClose={() => setOpenId(null)} onPrev={() => shift(-1)} onNext={() => shift(1)} />
    </div>
  )
}

function tileSpan(index: number) {
  const spans = [
    'col-span-12 md:col-span-7',
    'col-span-6 md:col-span-5',
    'col-span-6 md:col-span-4 md:mt-12',
    'col-span-12 md:col-span-8 md:col-start-5',
    'col-span-7 md:col-span-5',
    'col-span-5 md:col-span-3 md:mt-10',
  ]
  return spans[index % spans.length]
}

function GalleryTile({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="mb-3 block w-full break-inside-avoid text-left">
      <MediaFrame
        label={item.label}
        alt={item.alt}
        src={item.src}
        kind={item.kind}
        aspect={item.aspect}
        tone={item.kind === 'glow' || item.kind === 'macro' ? 'ink' : 'cream'}
      />
      <span className="mt-2 block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink/50">{item.category}</span>
    </button>
  )
}
