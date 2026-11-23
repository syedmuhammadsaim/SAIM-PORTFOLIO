import { Globe, Code2, Server, Database, Bot, Briefcase, ArrowRight } from "lucide-react"
import { servicesData } from "../data/services"
import type { ServiceItem } from "../data/services"
import { SectionHeader } from "../components/SectionHeader"

export function ServicesSection() {
  const getServiceIcon = (icon: ServiceItem["icon"]) => {
    switch (icon) {
      case "globe":
        return <Globe className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "code":
        return <Code2 className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "server":
        return <Server className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "database":
        return <Database className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "bot":
        return <Bot className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      case "briefcase":
        return <Briefcase className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
      default:
        return <Code2 className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
    }
  }

  return (
    <section
      id="services"
      className="py-16 md:py-24 border-b border-[#eaeaea] dark:border-[#222222]"
      aria-label="Engineering Services"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services"
          title="Specialized Development Capabilities"
          description="High-standard engineering offerings tailored for businesses, founders, and organizations looking for dependable execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-xs group"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818] group-hover:scale-105 transition-transform duration-200">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Deliverables list */}
                <ul className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry link */}
              <div className="pt-5 mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white group-hover:gap-2 transition-all"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
