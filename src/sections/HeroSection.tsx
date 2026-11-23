import { ArrowDownRight, Download, Mail, ArrowRight } from "lucide-react"
import { personalData } from "../data/personal"
import { AvailabilityBadge } from "../components/AvailabilityBadge"
import { SocialIcons } from "../components/SocialIcons"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[#eaeaea] dark:border-[#222222]"
      aria-label="Hero Introduction"
    >
      {/* Subtle background coordinate accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7-8 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability Status */}
            <AvailabilityBadge />

            {/* Name & Title */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-500 dark:text-neutral-400">
                Portfolio of
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] dark:text-[#f5f5f5] leading-[1.1]">
                {personalData.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                {personalData.professionalTitle}
              </p>
            </div>

            {/* Tagline & Supporting description */}
            <div className="space-y-3 pt-1">
              <p className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                &ldquo;{personalData.tagline}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                {personalData.heroDescription}
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 w-full sm:w-auto">
              {/* Primary: View My Work */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#111111] text-white hover:bg-[#2b2b2b] dark:bg-white dark:text-[#111111] dark:hover:bg-neutral-200 transition-all duration-200 shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary: Download CV */}
              <a
                href={personalData.cvPath}
                download="Syed_Muhammad_Saim_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#141414] text-[#111111] dark:text-[#f5f5f5] hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#1c1c1c] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-neutral-500" />
                <span>Download CV</span>
              </a>

              {/* Tertiary: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-neutral-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="pt-4 border-t border-[#eaeaea] dark:border-[#222222] w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  Connect:
                </span>
                <SocialIcons iconSize={16} variant="bordered" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                <span>Based in {personalData.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Profile Representation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative ring */}
              <div className="relative rounded-2xl p-2 border border-[#eaeaea] dark:border-[#262626] bg-neutral-50/50 dark:bg-[#161616]/50 shadow-xs">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
                  <img
                    src={personalData.avatarPlaceholder}
                    alt="Syed Muhammad Saim — Developer Portfolio Identity"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Subtle corner badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-neutral-800/80 text-white flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider uppercase text-neutral-300">
                        Specialization
                      </p>
                      <p className="text-xs text-neutral-400 font-mono">
                        ASP.NET Core · React · AI
                      </p>
                    </div>
                    <ArrowDownRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
