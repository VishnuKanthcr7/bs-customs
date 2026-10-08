import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { HomePage } from '@/pages/HomePage'
import { QrPage } from '@/pages/QrPage'
import { TShirtsPage } from '@/pages/TShirtsPage'
import { TShirtDesignPage } from '@/pages/TShirtDesignPage'
import { TShirtProductPage } from '@/pages/TShirtProductPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { QuotePage } from '@/pages/QuotePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageShell />}>
          <Route index element={<HomePage />} />
          <Route path="qr" element={<QrPage />} />
          <Route path="t-shirts" element={<TShirtsPage />} />
          <Route path="t-shirts/design" element={<TShirtDesignPage />} />
          <Route path="t-shirts/:slug" element={<TShirtProductPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="quote" element={<QuotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
