export interface ProjectLinks {
  live?: string
  github?: string
  details?: string
}

export type ProjectStatus = "Completed / Live" | "In Development" | "Coming Soon"

export interface Project {
  id: string
  title: string
  subtitle: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  status: ProjectStatus
  imagePlaceholder: string
  accentColor?: string
  links: ProjectLinks
  highlights?: string[]
}

export const projectsData: Project[] = [
  {
    id: "ngeos",
    title: "NGEOS",
    subtitle: "Next Generation NGO Management & Donation Platform",
    shortDescription:
      "A full-stack NGO management platform designed to manage donations, beneficiaries, administrative operations and welfare activities.",
    fullDescription:
      "NGEOS is an all-in-one institutional platform tailored for non-governmental organizations to streamline donor relations, real-time donation tracking, beneficiary allocation, and administrative welfare auditing. Built with modern .NET architecture, Entity Framework Core, and SignalR for real-time activity updates.",
    technologies: [
      "C#",
      "ASP.NET Core MVC",
      ".NET 10",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap",
      "SignalR",
    ],
    status: "Completed / Live",
    imagePlaceholder: "/projects/ngeos.svg",
    links: {
      // Editable: leave empty string or omit when no public link is yet available
      live: "",
      github: "",
      details: "#ngeos-details",
    },
    highlights: [
      "Real-time donation reporting with SignalR",
      "Beneficiary workflow tracking and verification",
      "Structured role-based administrative governance",
    ],
  },
  {
    id: "smartpos-enterprise",
    title: "SMARTPOS ENTERPRISE",
    subtitle: "Multi-Branch Point-of-Sale & Retail Infrastructure",
    shortDescription:
      "A multi-branch and multi-counter point-of-sale software solution with desktop operations, web administration and centralized API architecture.",
    fullDescription:
      "SmartPOS Enterprise addresses high-concurrency retail environments with a hybrid architecture combining a high-performance desktop checkout application (WPF) with centralized web administration and RESTful Web APIs, ensuring seamless multi-counter synchronization across multiple branches.",
    technologies: [
      "C#",
      ".NET 10",
      "WPF",
      "ASP.NET Core MVC",
      "Web API",
      "SQL Server",
      "Entity Framework Core",
      "SignalR",
    ],
    status: "In Development",
    imagePlaceholder: "/projects/smartpos.svg",
    links: {
      live: "",
      github: "",
      details: "#smartpos-details",
    },
    highlights: [
      "Centralized RESTful API backend for branch coordination",
      "Dedicated high-speed checkout UI with WPF",
      "Normalized SQL schema handling complex inventory states",
    ],
  },
  {
    id: "vantrel",
    title: "VANTREL",
    subtitle: "Modern E-Commerce Solution",
    shortDescription:
      "A modern e-commerce application built with ASP.NET Core MVC and a structured database architecture.",
    fullDescription:
      "Vantrel is a comprehensive e-commerce platform engineered with a strict domain-driven structure in ASP.NET Core MVC. Features clean catalog navigation, structured cart management, persistent relational schema design, and secure session state handling.",
    technologies: [
      "C#",
      "ASP.NET Core MVC",
      ".NET 10",
      "Entity Framework Core",
      "SQL Server",
    ],
    status: "In Development",
    imagePlaceholder: "/projects/vantrel.svg",
    links: {
      live: "",
      github: "",
      details: "#vantrel-details",
    },
    highlights: [
      "Clean relational catalog & order entity modeling",
      "Secure server-rendered checkout flows",
      "Optimized SQL Server transactions via EF Core",
    ],
  },
  {
    id: "alfred-ai",
    title: "ALFRED AI",
    subtitle: "Developer-First AI API Platform Concept",
    shortDescription:
      "An AI API platform concept focused on providing intelligent API-powered capabilities through a scalable developer-oriented platform.",
    fullDescription:
      "Alfred AI is a developer-centric architectural concept designed to simplify integration with intelligent large language models and cognitive endpoints. It provides unified REST API abstractions, token-conscious request routing, and contextual data orchestration.",
    technologies: [
      "Python",
      "REST API",
      "AI Integration",
    ],
    status: "Coming Soon",
    imagePlaceholder: "/projects/alfred.svg",
    links: {
      live: "",
      github: "",
      details: "#alfred-details",
    },
    highlights: [
      "Clean RESTful abstraction for LLM completions",
      "Modular Python service architecture",
      "Developer-oriented JSON payload contracts",
    ],
  },
]
