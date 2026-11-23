import { motion } from "framer-motion"
import { GraduationCap, Code, Database, Server, Cpu } from "lucide-react"
import { journeyData } from "../data/journey"
import type { JourneyMilestone } from "../data/journey"
import { SectionHeader } from "../components/SectionHeader"

export function JourneySection() {
  const getMilestoneIcon = (id: string, type: JourneyMilestone["type"]) => {
    if (type === "education") {
      return <GraduationCap className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
    }
    switch (id) {
      case "web-foundations":
        return <Code className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
      case "database-development":
        return <Database className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
      case "aspnet-engineering":
        return <Server className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
      case "ai-integration-journey":
        return <Cpu className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
      default:
        return <Code className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
    }
  }

  const getBadgeStyle = (type: JourneyMilestone["type"]) => {
    switch (type) {
      case "education":
        return "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
      case "skill-acquisition":
        return "border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800"
      case "milestone":
        return "border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900"
    }
  }

  return (
    <section
      id="journey"
      className="py-16 md:py-24 border-b border-neutral-200 dark:border-white/10 bg-neutral-50/50 dark:bg-[#0c0c0e]/30"
      aria-label="Education and Development Journey"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Development Journey"
            title="Education &amp; Technical Evolution"
            description="A structured timeline of my formal education at Aptech Computer Education and progressive mastery across modern full-stack and AI development."
          />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-10 sm:space-y-12">
          {journeyData.map((milestone, idx) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#16161a] group-hover:border-neutral-900 dark:group-hover:border-white transition-colors shadow-2xs">
                {getMilestoneIcon(milestone.id, milestone.type)}
              </div>

              {/* Milestone Content Card */}
              <div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#121215] space-y-3 shadow-xs hover:border-neutral-400 dark:hover:border-white/20 transition-colors">
                {/* Header row: Badge & Context */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider ${getBadgeStyle(
                      milestone.type
                    )}`}
                  >
                    {milestone.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {milestone.institutionOrContext}
                  </span>
                </div>

                {/* Milestone Title */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {milestone.title}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {milestone.summary}
                </p>

                {/* Key Learnings List */}
                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <ul className="grid grid-cols-1 gap-1.5 pt-1">
                    {milestone.keyLearnings.map((learning, lIdx) => (
                      <li
                        key={lIdx}
                        className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
