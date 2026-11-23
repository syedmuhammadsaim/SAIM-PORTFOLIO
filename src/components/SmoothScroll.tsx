import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Smooth navigation anchor interception
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest("a")
      if (anchor) {
        const href = anchor.getAttribute("href")
        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault()
          const targetEl = document.querySelector(href) as HTMLElement | null
          if (targetEl) {
            const headerOffset = 75
            const elementPosition = targetEl.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return null
}
