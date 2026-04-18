import { CustomCursor } from "./components/layout/CustomCursor"
import { GradientMesh } from "./components/layout/GradientMesh"
import { HeaderSpacer, SiteHeader } from "./components/layout/SiteHeader"
import { SiteFooter } from "./components/layout/SiteFooter"
import { SmoothScroll } from "./components/layout/SmoothScroll"
import { AboutSection } from "./sections/AboutSection"
import { ContactSection } from "./sections/ContactSection"
import { CtaBand } from "./sections/CtaBand"
import { ExperienceSection } from "./sections/ExperienceSection"
import { HeroSection } from "./sections/HeroSection"
import { MarqueeSection } from "./sections/MarqueeSection"
import { OpenSourceSection } from "./sections/OpenSourceSection"
import { PortfolioSection } from "./sections/PortfolioSection"
import { QuoteSection } from "./sections/QuoteSection"
import { ServicesSection } from "./sections/ServicesSection"
import { StatsSection } from "./sections/StatsSection"

export default function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <GradientMesh />
      <SiteHeader />
      <HeaderSpacer />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <OpenSourceSection />
        <QuoteSection />
        <CtaBand />
        <ContactSection />
      </main>
      <SiteFooter />
    </SmoothScroll>
  )
}
