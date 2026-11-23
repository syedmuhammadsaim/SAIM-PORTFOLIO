import { motion } from "framer-motion"

const marqueeItems = [
  "ASP.NET Core MVC",
  ".NET 10",
  "React.js",
  "TypeScript",
  "C# Architecture",
  "Microsoft SQL Server",
  "Entity Framework Core",
  "SignalR Real-Time",
  "Python Microservices",
  "LLM & AI Integration",
  "RESTful Web APIs",
  "WPF Enterprise",
  "Tailwind CSS",
]

export function TechMarquee() {
  return (
    <div className="w-full py-5 border-y border-neutral-200 dark:border-white/10 bg-neutral-50/70 dark:bg-[#0c0c0e]/80 overflow-hidden relative select-none">
      {/* Side Fade Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white dark:from-[#09090b] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white dark:from-[#09090b] to-transparent z-10" />

      {/* Continuously Animated Track */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        className="flex items-center gap-8 whitespace-nowrap w-max"
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-medium hover:text-black dark:hover:text-white transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-800 inline-block" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
