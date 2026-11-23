import { useState } from "react"
import { motion } from "framer-motion"
import { projectsData } from "../data/projects"
import type { Project } from "../data/projects"
import { SectionHeader } from "../components/SectionHeader"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectModal } from "../components/ProjectModal"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b border-neutral-200 dark:border-white/10 relative"
      aria-label="Featured Software Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="Featured Projects"
            title="Architected Systems &amp; Software Solutions"
            description="Explore my full-stack web platforms, enterprise point-of-sale applications, and AI integrations engineered with scalable databases and clean architecture."
          />
        </motion.div>

        {/* Sticky Stacking Cards Container (As seen in the reference video) */}
        <div className="relative space-y-12 pt-4">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                top: `calc(85px + ${index * 24}px)`,
              }}
              className="sticky transition-all duration-300"
            >
              <ProjectCard
                project={project}
                index={index}
                total={projectsData.length}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            </motion.div>
          ))}
        </div>

        {/* Project Modal details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}
