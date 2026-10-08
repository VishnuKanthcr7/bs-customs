import { useEffect, useRef } from 'react'
import type { GalleryItem } from '@/config/gallery'
import { MediaFrame } from '@/components/ui/MediaFrame'

export function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (item && !dialog.open) dialog.showModal()
    if (!item && dialog.open) dialog.close()
  }, [item])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onCancel = (event: Event) => {
      event.preventDefault()
      onClose()
    }
    dialog.addEventListener('cancel', onCancel)
    return () => dialog.removeEventListener('cancel', onCancel)
  }, [onClose])

  return (
    <dialog
      ref={ref}
      className="night dark-ui text-cream"
      aria-label={item ? item.caption : 'Gallery'}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
    >
      {item ? (
        <div className="bg-ink p-3 md:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-cream/60">{item.category}</p>
            <button type="button" className="min-h-11 px-3 text-sm font-semibold" onClick={onClose}>
              Close
            </button>
          </div>
          <MediaFrame label={item.label} alt={item.alt} src={item.src} kind={item.kind} aspect={item.aspect === 'tall' ? 'portrait' : item.aspect} />
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-sm">{item.caption}</p>
            <div className="flex gap-2">
              <button type="button" className="min-h-11 border border-cream/30 px-4 text-sm" onClick={onPrev}>
                Prev
              </button>
              <button type="button" className="min-h-11 border border-cream/30 px-4 text-sm" onClick={onNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
