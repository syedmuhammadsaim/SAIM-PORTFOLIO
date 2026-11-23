import { motion } from "framer-motion"
import { Code, Server, Database, Cpu, Sparkles } from "lucide-react"
import { skillCategories } from "../data/skills"
import { SectionHeader } from "../components/SectionHeader"

export function SkillsSection() {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "frontend":
        return <Code className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "backend":
        return <Server className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "database":
        return <Database className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "ai-tools":
        return <Cpu className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      default:
        return <Sparkles className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
    }
  }

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b border-[#eaeaea] dark:border-[#222222] bg-neutral-50/30 dark:bg-[#0d0d0d]/30"
      aria-label="Technical Skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Technical Skills"
            title="Technologies, Frameworks &amp; Tooling"
            description="A categorized overview of the languages, enterprise frameworks, databases, and development tools I work with."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-2xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818]">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {category.categoryDescription}
                    </p>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#181818] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors text-xs font-medium text-neutral-800 dark:text-neutral-200 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-500 font-mono">
                <span>{category.skills.length} Technologies</span>
                <span>Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
