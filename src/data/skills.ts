export interface SkillItem {
  name: string
  highlight?: boolean
  description?: string
}

export interface SkillCategory {
  id: string
  title: string
  categoryDescription: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    categoryDescription: "Responsive interfaces, semantic markup, and interactive client-side engineering",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "jQuery" },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    categoryDescription: "Enterprise APIs, robust MVC frameworks, and structured server logic",
    skills: [
      { name: "C#" },
      { name: "ASP.NET Core MVC" },
      { name: "ASP.NET Core Web API" },
      { name: "PHP" },
      { name: "Python" },
    ],
  },
  {
    id: "database",
    title: "Database & ORM",
    categoryDescription: "Relational data modeling, query optimization, and object-relational mapping",
    skills: [
      { name: "Microsoft SQL Server" },
      { name: "MySQL" },
      { name: "Entity Framework Core" },
    ],
  },
  {
    id: "ai-tools",
    title: "AI & Developer Tools",
    categoryDescription: "Intelligent APIs, version control, and production development environments",
    skills: [
      { name: "AI Integration" },
      { name: "LLM API Integration" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Visual Studio" },
      { name: "VS Code" },
      { name: "SQL Server Management Studio" },
    ],
  },
]
