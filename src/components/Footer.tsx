import { ArrowUp } from "lucide-react"
import { personalData } from "../data/personal"
import { navLinks } from "../data/navLinks"
import { SocialIcons } from "./SocialIcons"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full border-t border-[#eaeaea] dark:border-[#222222] bg-white dark:bg-[#101010] py-12 md:py-16 text-neutral-600 dark:text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-neutral-100 dark:border-neutral-800">
          {/* Identity Left */}
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold tracking-tight text-[#111111] dark:text-[#f5f5f5]">
              {personalData.fullName}
            </h3>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {personalData.professionalTitle}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 max-w-sm pt-1">
              {personalData.shortDescription}
            </p>
          </div>

          {/* Social Icons Right */}
          <div className="flex flex-col items-start md:items-end gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Follow &amp; Connect
            </span>
            <SocialIcons iconSize={16} variant="bordered" />
          </div>
        </div>

        {/* Navigation Links Row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium" aria-label="Footer Navigation">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to top inline link */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 dark:text-neutral-500">
          <p>
            &copy; {currentYear} {personalData.fullName}. All rights reserved.
          </p>
          <p className="font-mono text-[11px]">
            Designed with Minimalist Principles · React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
