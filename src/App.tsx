import { Navbar } from "./components/Navbar"
import { HeroSection } from "./sections/HeroSection"
import { TechMarquee } from "./components/TechMarquee"
import { AboutSection } from "./sections/AboutSection"
import { SkillsSection } from "./sections/SkillsSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { JourneySection } from "./sections/JourneySection"
import { ServicesSection } from "./sections/ServicesSection"
import { ContactSection } from "./sections/ContactSection"
import { Footer } from "./components/Footer"
import { BackToTop } from "./components/BackToTop"
import { SmoothScroll } from "./components/SmoothScroll"
import { useTheme } from "./hooks/useTheme"
import { useActiveSection } from "./hooks/useActiveSection"
import { navLinks } from "./data/navLinks"

export function App() {
  const { isDark, toggleTheme } = useTheme()
  const sectionIds = navLinks.map((item) => item.id)
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-[#09090b] dark:text-[#fafafa] flex flex-col transition-colors duration-300 selection:bg-purple-600 selection:text-white">
      {/* Lenis Smooth Inertia Scrolling */}
      <SmoothScroll />

      {/* Skip to Content accessible link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} activeSection={activeSection} />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <TechMarquee />
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
