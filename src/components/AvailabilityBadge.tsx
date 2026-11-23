import { personalData } from "../data/personal"

interface AvailabilityBadgeProps {
  className?: string
  compact?: boolean
}

export function AvailabilityBadge({ className = "", compact = false }: AvailabilityBadgeProps) {
  const { availability } = personalData

  if (!availability.isAvailable) return null

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 backdrop-blur-xs text-xs font-medium text-neutral-800 dark:text-neutral-200 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{availability.statusText}</span>
      {!compact && availability.subtext && (
        <>
          <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline">|</span>
          <span className="text-neutral-500 dark:text-neutral-400 hidden sm:inline font-normal">
            {availability.subtext}
          </span>
        </>
      )}
    </div>
  )
}
