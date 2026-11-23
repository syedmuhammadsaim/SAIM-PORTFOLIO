export type JourneyType = "education" | "milestone" | "skill-acquisition"

export interface JourneyMilestone {
  id: string
  title: string
  institutionOrContext: string
  type: JourneyType
  badge: string
  summary: string
  keyLearnings: string[]
}

export const journeyData: JourneyMilestone[] = [
  {
    id: "aptech-diploma",
    title: "ACCP AI 3-Year Diploma",
    institutionOrContext: "Aptech Computer Education",
    type: "education",
    badge: "Formal Education",
    summary:
      "Comprehensive diploma program focusing on computer science foundations, modern software engineering, advanced programming languages, enterprise architecture, and applied artificial intelligence.",
    keyLearnings: [
      "Object-Oriented Programming and Design Patterns",
      "Enterprise software application design",
      "Applied Artificial Intelligence & Machine Learning foundations",
    ],
  },
  {
    id: "web-foundations",
    title: "Web Development Foundations",
    institutionOrContext: "Core Engineering Exploration",
    type: "skill-acquisition",
    badge: "Technical Milestone",
    summary:
      "Deep dive into standards-compliant markup, responsive UI engineering, styling paradigms, DOM manipulation with JavaScript and jQuery, and reactive component architecture using React.js and TypeScript.",
    keyLearnings: [
      "Semantic HTML5, CSS3, modern layout techniques",
      "JavaScript (ES6+) patterns and TypeScript type safety",
      "Component lifecycle, hooks, and responsive design",
    ],
  },
  {
    id: "database-development",
    title: "Relational Database Development",
    institutionOrContext: "Data Systems & Modeling",
    type: "skill-acquisition",
    badge: "Technical Milestone",
    summary:
      "Systematic study and practical implementation of relational database management systems, schema normalization, complex querying, and transactional data integrity with Microsoft SQL Server and MySQL.",
    keyLearnings: [
      "Entity Relationship (ER) diagramming and schema normalization",
      "Stored procedures, indexing, and performance queries in SSMS",
      "Object-Relational Mapping with Entity Framework Core",
    ],
  },
  {
    id: "aspnet-engineering",
    title: "ASP.NET Core & C# Enterprise Architecture",
    institutionOrContext: "Backend Systems",
    type: "skill-acquisition",
    badge: "Specialization",
    summary:
      "Mastery of C# and modern .NET ecosystem for building high-throughput web applications, secure RESTful Web APIs, MVC applications, and real-time communication modules with SignalR.",
    keyLearnings: [
      "ASP.NET Core MVC & Web API design principles",
      "Dependency injection, middleware pipelines, authentication & authorization",
      "Production-ready backend architecture targeting .NET 10",
    ],
  },
  {
    id: "ai-integration-journey",
    title: "Python & AI Integration Journey",
    institutionOrContext: "AI Engineering & Practical Tools",
    type: "milestone",
    badge: "Emerging Focus",
    summary:
      "Expanding software capabilities into modern Artificial Intelligence. Developing Python-backed microservices and integrating Large Language Model (LLM) APIs to automate workflows and build intelligent user experiences.",
    keyLearnings: [
      "Python scripting and RESTful service development",
      "LLM API integration, prompt orchestration, and structured outputs",
      "Designing AI-augmented applications that solve real-world problems",
    ],
  },
]
