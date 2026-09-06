import { CustomCursor } from "./components/layout/CustomCursor"
import { GradientMesh } from "./components/layout/GradientMesh"
import { HeaderSpacer, SiteHeader } from "./components/layout/SiteHeader"
import { SiteFooter } from "./components/layout/SiteFooter"
import { SmoothScroll } from "./components/layout/SmoothScroll"
import { AboutSection } from "./sections/AboutSection"
import { AxiamaticSection } from "./sections/AxiamaticSection"
import { CaseStudiesSection } from "./sections/CaseStudiesSection"
import { ContactSection } from "./sections/ContactSection"
import { CtaBand } from "./sections/CtaBand"
import { ExperienceSection } from "./sections/ExperienceSection"
import { HeroSection } from "./sections/HeroSection"
import { ImpactSection } from "./sections/ImpactSection"
import { MarqueeSection } from "./sections/MarqueeSection"
import { OpenSourceSection } from "./sections/OpenSourceSection"
import { PortfolioSection } from "./sections/PortfolioSection"
import { QuoteSection } from "./sections/QuoteSection"
import { ServicesSection } from "./sections/ServicesSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ResumePage } from "./pages/ResumePage"

export default function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"
  if (pathname === "/resume" || pathname === "/resume/") {
    return <ResumePage />
  }

  return (
    <SmoothScroll>
      <CustomCursor />
      <GradientMesh />
      <SiteHeader />
      <HeaderSpacer />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ImpactSection />
        <ServicesSection />
        <PortfolioSection />
        <AxiamaticSection />
        <CaseStudiesSection />
        <OpenSourceSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <QuoteSection />
        <CtaBand />
        <ContactSection />
      </main>
      <SiteFooter />
    </SmoothScroll>
  )
}
