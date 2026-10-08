import { Link } from 'react-router-dom'
import type { ServiceDef } from '@/config/services'

export function ServiceCard({ service }: { service: ServiceDef }) {
  return (
    <Link to={`/services/${service.slug}`} className="group grid grid-cols-12 items-baseline gap-3 border-b border-ink/15 py-5">
      <span className="col-span-2 font-mono text-xs text-ink/45 md:col-span-1">{service.index}</span>
      <span className="col-span-8 font-display text-2xl font-bold tracking-[-0.03em] group-hover:underline group-hover:decoration-lime group-hover:underline-offset-4 md:col-span-9 md:text-3xl">
        {service.title}
      </span>
      <span className="col-span-2 text-right text-sm font-semibold md:col-span-2">View</span>
    </Link>
  )
}
