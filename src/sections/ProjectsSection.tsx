import { useState } from "react"
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
      className="py-16 md:py-24 border-b border-[#eaeaea] dark:border-[#222222]"
      aria-label="Featured Software Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          title="Architected Systems &amp; Software Solutions"
          description="A selection of full-stack web applications, enterprise systems, and AI concepts engineered with clean architectures and scalable databases."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
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
