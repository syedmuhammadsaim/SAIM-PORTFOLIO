import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { personalData } from "../data/personal"
import { AvailabilityBadge } from "../components/AvailabilityBadge"
import { SocialIcons } from "../components/SocialIcons"
import { InteractiveAvatar3D } from "../components/InteractiveAvatar3D"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden border-b border-neutral-200 dark:border-white/10"
      aria-label="Hero Introduction"
    >
      {/* Subtle modern ambient spotlight glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none opacity-40 dark:opacity-60 bg-[radial-gradient(ellipse_at_top,_rgba(147,51,234,0.15),_transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7 cols) with smooth stagger entrance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <AvailabilityBadge />
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-500 dark:text-neutral-400">
                Full Stack &amp; AI Engineer
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] dark:text-[#f5f5f5] leading-[1.08]">
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

            {/* Call-to-Action Buttons with smooth spring & glow */}
            <div className="flex flex-wrap items-center gap-3 pt-4 w-full sm:w-auto">
              {/* Primary: View My Work */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#111111] text-white hover:bg-[#2b2b2b] dark:bg-white dark:text-[#111111] dark:hover:bg-neutral-200 transition-all duration-200 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Glowing Gradient Contact Button (As featured in the video) */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden shadow-lg transition-all duration-300 w-full sm:w-auto group cursor-pointer"
              >
                {/* Vibrant Gradient Background */}
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-amber-500 opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-500 blur-sm opacity-50 group-hover:opacity-80 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </span>
              </motion.a>

              {/* Secondary: Download CV */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personalData.cvPath}
                download="Syed_Muhammad_Saim_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#141414] text-[#111111] dark:text-[#f5f5f5] hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-[#1c1c1c] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-neutral-500" />
                <span>Download CV</span>
              </motion.a>
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
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Based in {personalData.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Developer Avatar (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <InteractiveAvatar3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
