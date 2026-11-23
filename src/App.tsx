import { Navbar } from "./components/Navbar"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { JourneySection } from "./sections/JourneySection"
import { ServicesSection } from "./sections/ServicesSection"
import { ContactSection } from "./sections/ContactSection"
import { Footer } from "./components/Footer"
import { BackToTop } from "./components/BackToTop"
import { useTheme } from "./hooks/useTheme"
import { useActiveSection } from "./hooks/useActiveSection"
import { navLinks } from "./data/navLinks"

export function App() {
  const { isDark, toggleTheme } = useTheme()
  const sectionIds = navLinks.map((item) => item.id)
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen bg-white text-[#111111] dark:bg-[#101010] dark:text-[#f5f5f5] flex flex-col transition-colors duration-200">
      {/* Skip to Content accessible link for screen readers / keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} activeSection={activeSection} />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
