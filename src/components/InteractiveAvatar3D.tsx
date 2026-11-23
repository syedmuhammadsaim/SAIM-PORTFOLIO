import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Sparkles, Terminal, Code2 } from "lucide-react"

export function InteractiveAvatar3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse coordinate motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for fluid responsiveness
  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)
  const lightX = useTransform(mouseX, [-0.5, 0.5], ["30%", "70%"])
  const lightY = useTransform(mouseY, [-0.5, 0.5], ["30%", "70%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm mx-auto aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* Interactive 3D Tilting Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-linear-to-b from-neutral-50 to-neutral-100 dark:from-[#151515] dark:to-[#0f0f0f] p-5 shadow-2xl flex flex-col items-center justify-between overflow-hidden"
      >
        {/* Dynamic Specular Light Glare */}
        <motion.div
          className="pointer-events-none absolute -inset-full opacity-20 dark:opacity-30 blur-2xl transition-opacity"
          style={{
            background: "radial-gradient(circle 200px at center, rgba(255,255,255,0.8), transparent)",
            left: lightX,
            top: lightY,
          }}
        />

        {/* Top Bar inside Card */}
        <div
          className="w-full flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400 z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
            saim.architect.cs
          </span>
        </div>

        {/* Center 3D Developer Avatar Silhouette */}
        <div
          className="relative my-auto flex flex-col items-center justify-center"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Outer glowing pulsing aura */}
          <div className="absolute w-44 h-44 rounded-full bg-neutral-300/40 dark:bg-neutral-800/50 blur-xl animate-pulse" />

          {/* Avatar Base */}
          <div className="relative w-36 h-36 rounded-2xl bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-700/60 shadow-xl flex items-center justify-center p-3">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-neutral-200 drop-shadow-md"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Head */}
              <circle cx="50" cy="38" r="20" stroke="currentColor" strokeWidth="2.5" />
              {/* Shoulders / Torso */}
              <path d="M 20 85 C 20 62 34 58 50 58 C 66 58 80 62 80 85" stroke="currentColor" strokeWidth="2.5" />
              {/* Developer Glasses / Visor */}
              <rect x="36" y="32" width="28" height="10" rx="3" stroke="#a7a7a7" strokeWidth="2" fill="none" />
              <line x1="48" y1="37" x2="52" y2="37" stroke="#a7a7a7" strokeWidth="2" />
            </svg>

            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
          </div>

          {/* Monogram tag */}
          <span className="mt-3 text-xs font-bold tracking-[0.25em] text-neutral-900 dark:text-neutral-100 uppercase">
            SYED MUHAMMAD SAIM
          </span>
          <span className="text-[10px] font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
            .NET Core · React · AI Systems
          </span>
        </div>

        {/* Floating Tag Bottom Badge */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="w-full pt-2 flex items-center justify-between text-xs border-t border-neutral-200/70 dark:border-neutral-800/80 text-neutral-600 dark:text-neutral-400 z-10"
        >
          <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>Interactive 3D Engine</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">Karachi, PK</span>
        </motion.div>
      </motion.div>

      {/* Floating Orbital Badges (Bobbing with sine-wave physics) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -right-3 p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1c1c1c] shadow-lg text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5 text-xs font-mono"
      >
        <Terminal className="w-3.5 h-3.5 text-emerald-500" />
        <span>.NET 10</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-3 -left-3 p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1c1c1c] shadow-lg text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5 text-xs font-mono"
      >
        <Code2 className="w-3.5 h-3.5 text-blue-500" />
        <span>React + TS</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -left-5 p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1c1c1c] shadow-md text-neutral-800 dark:text-neutral-200"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-500" />
      </motion.div>
    </div>
  )
}
