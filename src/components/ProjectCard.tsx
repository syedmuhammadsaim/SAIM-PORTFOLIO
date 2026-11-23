import { ExternalLink, ArrowRight } from "lucide-react"
import type { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
  onSelectProject: (project: Project) => void
}

function GithubIconSmall() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Completed / Live":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
      case "In Development":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
      case "Coming Soon":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    }
  }

  return (
    <div className="group rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] overflow-hidden flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-xs">
      <div>
        {/* Project Image Preview Header */}
        <div
          className="relative aspect-video w-full overflow-hidden bg-neutral-950 border-b border-[#eaeaea] dark:border-[#222222] cursor-pointer"
          onClick={() => onSelectProject(project)}
        >
          <img
            src={project.imagePlaceholder}
            alt={`${project.title} - ${project.subtitle}`}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            loading="lazy"
          />
          {/* Status Badge overlay */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border backdrop-blur-md ${getStatusBadge(
                project.status
              )}`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-3">
          <div className="space-y-1">
            <h3
              onClick={() => onSelectProject(project)}
              className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {project.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 dark:bg-[#181818] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 py-4 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#141414]/50 flex items-center justify-between gap-3">
        {/* View Details Button */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:gap-2.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Links: Live / GitHub */}
        <div className="flex items-center gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              className="p-1.5 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} GitHub repository`}
              className="p-1.5 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1f1f1f] transition-colors"
              title="GitHub Repository"
            >
              <GithubIconSmall />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
