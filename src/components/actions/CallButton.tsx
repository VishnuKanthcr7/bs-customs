import { site } from '@/config/site'
import { Button } from '@/components/ui/Button'

export function CallButton({
  children = 'Call',
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
    <Button variant="call" tone={tone} href={site.phoneTel} full={full} className={className} ariaLabel={`Call ${site.phoneDisplay}`}>
      {children}
    </Button>
  )
}
