import { ExternalLink, ArrowRight } from "lucide-react"
import type { Project } from "../data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  total: number
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

export function ProjectCard({ project, index, total: _total, onSelectProject }: ProjectCardProps) {
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

  const paddedIndex = String(index + 1).padStart(2, "0")

  return (
    <div
      className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#141414] shadow-xl overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600"
    >
      {/* Top Header Row (Similar to '01 CLIENT' in the video) */}
      <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight font-mono">
            {paddedIndex}
          </span>
          <div>
            <p className="text-[11px] uppercase font-bold tracking-widest text-neutral-400">
              PROJECT / SYSTEM
            </p>
            <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              {project.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${getStatusBadge(
              project.status
            )}`}
          >
            {project.status}
          </span>

          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Card Content (2-Column Grid on larger screens) */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Description & Tags (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <h3
              onClick={() => onSelectProject(project)}
              className="text-xl font-bold text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {project.subtitle}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-1">
              Architecture &amp; Implementation
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-[#1c1c1c] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span>View Full Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIconSmall />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Architecture Preview (7 cols) */}
        <div
          className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 aspect-video cursor-pointer relative group/img shadow-inner"
          onClick={() => onSelectProject(project)}
        >
          <img
            src={project.imagePlaceholder}
            alt={`${project.title} - ${project.subtitle}`}
            className="w-full h-full object-cover group-hover/img:scale-102 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-black text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
              Inspect Specs
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
