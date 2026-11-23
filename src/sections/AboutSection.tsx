import { CheckCircle2, GraduationCap, Compass, Target, Code2 } from "lucide-react"
import { personalData } from "../data/personal"
import { SectionHeader } from "../components/SectionHeader"

export function AboutSection() {
  const { bio } = personalData

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b border-[#eaeaea] dark:border-[#222222]"
      aria-label="About Syed Muhammad Saim"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Engineering Practical Solutions with Modern Architecture"
          description="A dedicated software developer based in Karachi, Pakistan, committed to writing clean, maintainable code and solving real-world challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-neutral-50/50 dark:bg-[#141414]/50 space-y-4">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                <span>Professional Biography</span>
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {bio.intro}
              </p>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I specialize in building full-stack applications with robust backend foundations in ASP.NET Core and modern, responsive client interfaces with React.js and TypeScript. My development philosophy centers on strong database architecture, architectural clarity, and building practical software products that deliver tangible business value.
              </p>
            </div>

            {/* Core Focus Areas */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] space-y-4">
              <h3 className="text-sm uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400">
                Core Engineering Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bio.focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800 bg-neutral-50/80 dark:bg-[#181818]/80 text-sm font-medium text-neutral-800 dark:text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-neutral-700 dark:text-neutral-300 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education, Interests & Career Objective (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Education Card */}
            <div className="p-6 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] space-y-3">
              <div className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-100 font-bold">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4>Education &amp; Formal Training</h4>
              </div>
              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 space-y-1">
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  ACCP AI 3-Year Diploma
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Aptech Computer Education
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 pt-1 leading-relaxed">
                  Focusing on core software architecture, enterprise systems, modern web technologies, and applied Artificial Intelligence.
                </p>
              </div>
            </div>

            {/* Development Interests */}
            <div className="p-6 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] space-y-3">
              <div className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-100 font-bold">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  <Compass className="w-4 h-4" />
                </div>
                <h4>Development Interests</h4>
              </div>
              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {bio.interests}
                </p>
              </div>
            </div>

            {/* Career Objectives */}
            <div className="p-6 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] space-y-3">
              <div className="flex items-center gap-2.5 text-neutral-900 dark:text-neutral-100 font-bold">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  <Target className="w-4 h-4" />
                </div>
                <h4>Career Objective</h4>
              </div>
              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {bio.careerObjective}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
