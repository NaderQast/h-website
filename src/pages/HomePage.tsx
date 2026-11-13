import { CareersSection } from '../sections/CareersSection'
import { CultureSection } from '../sections/CultureSection'
import { HeroSection } from '../sections/HeroSection'
import { InsightsSection } from '../sections/InsightsSection'
import { ReferralsSection } from '../sections/ReferralsSection'
import { ServicesSection } from '../sections/ServicesSection'
import { SuburbTickerSection } from '../sections/SuburbTickerSection'
import { ValuesSection } from '../sections/ValuesSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SuburbTickerSection />
      <ValuesSection />
      <CultureSection />
      <ReferralsSection />
      <InsightsSection />
      <CareersSection />
    </>
  )
}
