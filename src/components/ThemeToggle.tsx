import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ isDark, onToggle, className = "" }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`p-2 rounded-md border border-[#eaeaea] dark:border-[#262626] text-[#777777] hover:text-[#111111] dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#181818] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 ${className}`}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-neutral-300" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-700" />
      )}
    </button>
  )
}
