export interface SocialLink {
  id: string
  name: string
  url: string
  ariaLabel: string
  iconName: "github" | "linkedin" | "mail" | "messageCircle"
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: import.meta.env.VITE_GITHUB_URL || "https://github.com",
    ariaLabel: "Visit Syed Muhammad Saim on GitHub",
    iconName: "github",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
    ariaLabel: "Connect with Syed Muhammad Saim on LinkedIn",
    iconName: "linkedin",
  },
  {
    id: "mail",
    name: "Email",
    url: `mailto:${import.meta.env.VITE_CONTACT_EMAIL || "saim.dev@example.com"}`,
    ariaLabel: "Send an email to Syed Muhammad Saim",
    iconName: "mail",
  },
  ...(import.meta.env.VITE_CONTACT_WHATSAPP
    ? [
        {
          id: "whatsapp",
          name: "WhatsApp",
          url: `https://wa.me/${import.meta.env.VITE_CONTACT_WHATSAPP.replace(/[^0-9]/g, "")}`,
          ariaLabel: "Contact Syed Muhammad Saim via WhatsApp",
          iconName: "messageCircle" as const,
        },
      ]
    : []),
]
