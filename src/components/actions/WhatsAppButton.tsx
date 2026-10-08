import { buildWhatsAppUrl } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'

export function WhatsAppButton({
  message,
  children = 'WhatsApp Us',
  tone = 'default',
  full = false,
  className,
}: {
  message: string
  children?: string
  tone?: 'default' | 'inverse'
  full?: boolean
  className?: string
}) {
  return (
    <Button variant="whatsapp" tone={tone} href={buildWhatsAppUrl(message)} full={full} className={className}>
      {children}
    </Button>
  )
}
