import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "../data/navLinks"
import { personalData } from "../data/personal"
import { ThemeToggle } from "./ThemeToggle"

interface NavbarProps {
  isDark: boolean
  onToggleTheme: () => void
  activeSection: string
}

export function Navbar({ isDark, onToggleTheme, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#101010]/85 backdrop-blur-md border-b border-[#eaeaea] dark:border-[#222222] shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo Left */}
          <a
            href="#home"
            className="group flex items-center gap-1.5 text-lg font-bold tracking-tight text-[#111111] dark:text-[#f5f5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-sm"
            aria-label={`${personalData.shortName} Portfolio Home`}
          >
            <span className="tracking-wider">{personalData.shortName}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white group-hover:scale-125 transition-transform duration-200"></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
                    isActive
                      ? "text-black dark:text-white font-semibold"
                      : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-[#1a1a1a]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="block h-0.5 w-full bg-black dark:bg-white rounded-full mt-0.5 animate-fadeIn" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md border border-[#eaeaea] dark:border-[#262626] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#181818] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-white/95 dark:bg-[#101010]/95 backdrop-blur-lg border-t border-[#eaeaea] dark:border-[#222222] z-40 flex flex-col justify-between p-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-neutral-100 dark:bg-[#1c1c1c] text-black dark:text-white font-semibold border-l-2 border-black dark:border-white"
                      : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-[#161616]"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="pt-6 border-t border-[#eaeaea] dark:border-[#222222] flex flex-col gap-3">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 tracking-wider uppercase font-semibold">
              Connect
            </p>
            <div className="flex items-center gap-4">
              <a
                href={personalData.contact.email ? `mailto:${personalData.contact.email}` : "#contact"}
                className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              >
                {personalData.contact.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
