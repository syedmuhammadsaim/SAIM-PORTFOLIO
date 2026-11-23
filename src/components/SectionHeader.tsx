interface SectionHeaderProps {
  badge: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  badge,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeaderProps) {
  const isCentered = align === "center"

  return (
    <div className={`space-y-3 mb-12 md:mb-16 ${isCentered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}>
      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400`}>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
        {badge}
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#f5f5f5]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
