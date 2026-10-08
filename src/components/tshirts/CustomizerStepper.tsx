import { cn } from '@/lib/cn'

export function CustomizerStepper({
  steps,
  current,
  onJump,
}: {
  steps: string[]
  current: number
  onJump: (index: number) => void
}) {
  return (
    <ol className="hidden gap-2 lg:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
      {steps.map((step, index) => {
        const active = index === current
        const done = index < current
        return (
          <li key={step}>
            <button
              type="button"
              onClick={() => done && onJump(index)}
              disabled={!done && !active}
              className={cn('w-full border-t-2 pt-3 text-left', active || done ? 'border-lime' : 'border-ink/15')}
            >
              <span className="font-mono text-[0.65rem] tracking-[0.12em] text-ink/50">STEP 0{index + 1}</span>
              <span className={cn('mt-1 block text-xs font-semibold leading-tight', active ? 'text-ink' : 'text-ink/55')}>
                {step}
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}
