import { services } from '@/config/services'
import { ServiceCard } from '@/components/services/ServiceCard'

export function ServiceGrid() {
  return (
    <div className="border-t border-ink/15">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
