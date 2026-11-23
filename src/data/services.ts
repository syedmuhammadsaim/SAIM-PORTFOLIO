export interface ServiceItem {
  id: string
  title: string
  shortDescription: string
  deliverables: string[]
  icon: "globe" | "code" | "server" | "database" | "bot" | "briefcase"
}

export const servicesData: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    shortDescription:
      "Crafting high-speed, modern, responsive websites and web interfaces built for exceptional performance, clean aesthetics, and cross-device accessibility.",
    deliverables: [
      "Responsive React & modern frontend architecture",
      "Tailored UI/UX with minimalist design principles",
      "SEO best practices and fast Core Web Vitals",
    ],
    icon: "globe",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "Designing tailored software solutions built to solve distinct operational challenges, streamline processes, and scale with organizational needs.",
    deliverables: [
      "Custom business logic & workflow automation",
      "Clean modular codebases with maintainable architecture",
      "Desktop and hybrid interface solutions",
    ],
    icon: "code",
  },
  {
    id: "aspnet-core-development",
    title: "ASP.NET Core Development",
    shortDescription:
      "Building high-throughput, enterprise-grade web applications, microservices, and secure RESTful Web APIs leveraging C# and modern .NET.",
    deliverables: [
      "Secure REST Web API design & integration",
      "ASP.NET Core MVC enterprise backends",
      "Real-time event pipelines with SignalR",
    ],
    icon: "server",
  },
  {
    id: "database-development",
    title: "Database Development",
    shortDescription:
      "Architecting efficient relational databases, data schemas, and ORM configurations to ensure high transactional integrity and query speed.",
    deliverables: [
      "Microsoft SQL Server & MySQL relational schema design",
      "Entity Framework Core optimization & migrations",
      "Normalized structure and index optimization",
    ],
    icon: "database",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    shortDescription:
      "Empowering software applications with intelligent AI capabilities, LLM API routing, automated content reasoning, and smart user assistance.",
    deliverables: [
      "LLM API endpoints & structured response parsing",
      "Python microservices for intelligent processing",
      "AI-driven workflow and decision assistance",
    ],
    icon: "bot",
  },
  {
    id: "business-web-applications",
    title: "Business Web Applications",
    shortDescription:
      "Developing end-to-end management portals, internal tools, reporting dashboards, and operational platforms tailored for businesses and NGOs.",
    deliverables: [
      "Role-based access control and administrative workflows",
      "Operational dashboards and real-time activity views",
      "Multi-user data entry and validation pipelines",
    ],
    icon: "briefcase",
  },
]
