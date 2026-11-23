export interface PersonalInfo {
  fullName: string
  shortName: string
  brandTitle: string
  professionalTitle: string
  tagline: string
  shortDescription: string
  heroDescription: string
  location: string
  availability: {
    isAvailable: boolean
    statusText: string
    subtext: string
  }
  bio: {
    intro: string
    focusAreas: string[]
    interests: string
    careerObjective: string
  }
  contact: {
    email: string
    location: string
    whatsapp?: string
  }
  cvPath: string
  avatarPlaceholder: string
}

export const personalData: PersonalInfo = {
  fullName: "SYED MUHAMMAD SAIM",
  shortName: "SAIM",
  brandTitle: "SAIM — Developer Portfolio",
  professionalTitle: "Full Stack Developer & AI Engineer",
  tagline: "Turning Ideas Into Powerful Digital Solutions.",
  shortDescription:
    "I build modern web applications, scalable software solutions, and intelligent AI-powered experiences.",
  heroDescription:
    "I develop modern websites, custom software applications, and intelligent AI-powered solutions with a focus on performance, usability, and innovation.",
  location: "Karachi, Pakistan",
  availability: {
    isAvailable: true,
    statusText: "Available for Projects",
    subtext: "Open to full-time engineering roles, freelance, & international contracts",
  },
  bio: {
    intro:
      "I am a passionate software developer and AI engineer dedicated to engineering robust, high-performance web systems and intelligent digital tools. With a strong foundation in modern backend architectures and responsive frontend design, I bridge technical capability with thoughtful user experiences.",
    focusAreas: [
      "Full Stack Web Development",
      "ASP.NET Core Development",
      "Database Design & Optimization",
      "AI Application & LLM Integration",
      "Modern Software Engineering",
    ],
    interests:
      "Focused on building practical, scalable software products, exploring enterprise architectures in .NET, mastering modern database modeling, and integrating emerging generative AI capabilities into real-world business workflows.",
    careerObjective:
      "To contribute to impactful engineering teams and ambitious global clients by designing reliable, clean-code software solutions, driving innovation through AI, and continuously elevating technical craft.",
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "saim.dev@example.com",
    location: "Karachi, Pakistan",
    whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || "",
  },
  cvPath: "/cv/Syed_Muhammad_Saim_CV.pdf",
  avatarPlaceholder: "/images/profile-placeholder.svg",
}
