import DotField from '@/components/DotField'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Workstation from '@/components/Workstation'
import Manifesto from '@/components/Manifesto'
import Services from '@/components/Services'
import LaserMarking from '@/components/LaserMarking'
import Materials from '@/components/Materials'
import Work from '@/components/Work'
import Customize from '@/components/Customize'
import Finale from '@/components/Finale'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div id="top" className="site min-h-dvh">
      <DotField />
      <Navigation />
      <main>
        <Hero />
        <Workstation />
        <Manifesto />
        <Services />
        <LaserMarking />
        <Materials />
        <Work />
        <Customize />
        <Finale />
      </main>
      <Footer />
    </div>
  )
}
