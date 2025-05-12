import HeroSection from './components/HeroSection'
import HighlightCards from './components/HighlightCards'
import NewsEvents from './components/NewsEvents'
import CTASection from './components/CTASection'
import Testimonial from './components/Testimonial' // Optional

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <HighlightCards />
      <NewsEvents />
      <CTASection />
      <Testimonial /> 
    </div>
  )
}
