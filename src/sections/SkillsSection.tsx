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
        <SectionHeader
          badge="Technical Skills"
          title="Technologies, Frameworks &amp; Tooling"
          description="A categorized overview of the languages, enterprise frameworks, databases, and development tools I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-xs"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-lg border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818]">
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
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-[#181818] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors text-xs font-medium text-neutral-800 dark:text-neutral-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-500">
                <span>{category.skills.length} Technologies</span>
                <span>Configurable in skills.ts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
