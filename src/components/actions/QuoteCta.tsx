import { Button } from '@/components/ui/Button'

export function QuoteCta({
  children = 'Get a Quote',
  tone = 'default',
  full = false,
  className,
}: {
  children?: string
  tone?: 'default' | 'inverse'
  full?: boolean
  className?: string
}) {
  return (
    <Button variant="primary" tone={tone} href="/quote" full={full} className={className}>
      {children}
    </Button>
  )
}
