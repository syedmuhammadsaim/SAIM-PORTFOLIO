import { useEffect } from "react"
import { X, ExternalLink, Tag } from "lucide-react"
import type { Project } from "../data/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

// Crisp inline SVGs for project links
function GithubSmallIcon() {
  return (
    <svg
      width="14"
      height="14"
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

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#121215] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#1c1c1c] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(
                project.status
              )}`}
            >
              {project.status}
            </span>
          </div>
          <h3
            id="modal-project-title"
            className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100"
          >
            {project.title}
          </h3>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {project.subtitle}
          </p>
        </div>

        {/* Image Preview */}
        <div className="mt-5 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 aspect-video">
          <img
            src={project.imagePlaceholder}
            alt={`${project.title} technical architecture diagram`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Full Overview */}
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400">
              Project Architecture &amp; Overview
            </h4>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mt-2">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400">
                Key Technical Highlights
              </h4>
              <ul className="mt-2 space-y-2">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-100 dark:bg-[#1a1a1a] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Optional External Links */}
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition-colors"
                >
                  <GithubSmallIcon />
                  <span>GitHub Repository</span>
                </a>
              )}
              {!project.links.live && !project.links.github && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                  Public repository / live deployment link will be released upon scheduled milestone completion.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
