# SYED MUHAMMAD SAIM — PERSONAL DEVELOPER PORTFOLIO

> Modern, premium minimalist personal portfolio website representing **Syed Muhammad Saim** — Full Stack Developer & AI Engineer based in Karachi, Pakistan.

---

## 🌟 Overview

This portfolio showcases enterprise software development capabilities, technical skills, academic milestones at Aptech Computer Education, featured software engineering projects, specialized client services, and contact channels.

### Key Highlights
- **Design System:** Minimalist visual identity with refined monochrome palette (light `#FFFFFF`, dark `#101010`), subtle borders, generous whitespace, and zero unnecessary visual clutter.
- **Theme Support:** Instant Dark/Light mode toggle with `localStorage` persistence and system color preference detection (`prefers-color-scheme`).
- **Interactive Modals:** Detailed architecture view for featured projects with full descriptions, highlights, and stack tags.
- **Centralized Data Management:** Easily update biography, skills, projects, journey, and contact links without touching component UI code.
- **Contact Form & EmailJS:** Form validation, honeypot anti-spam protection, and EmailJS integration driven by environment variables.
- **SEO & Structured Data:** Semantic HTML5, canonical URLs, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`, and rich JSON-LD Schema (`Person` and `WebSite`).
- **Accessibility:** WCAG AA contrast compliance, keyboard focus rings (`focus-visible`), skip-to-content anchor, and reduced-motion support.

---

## 🛠️ Technology Stack

- **Framework:** React.js 19 with TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4 (with `@tailwindcss/vite`)
- **Icons:** Lucide React & crisp SVG icons
- **Form Handling:** Native React state & `@emailjs/browser`
- **Deployment Targets:** Vercel / GitHub Pages

---

## 📁 Project Structure

```
├── public/
│   ├── cv/
│   │   └── Syed_Muhammad_Saim_CV.pdf    # Downloadable CV
│   ├── images/
│   │   └── profile-placeholder.svg       # Developer brand identity visual
│   ├── projects/
│   │   ├── ngeos.svg                     # NGEOS architecture preview
│   │   ├── smartpos.svg                  # SmartPOS Enterprise preview
│   │   ├── vantrel.svg                   # Vantrel E-commerce preview
│   │   └── alfred.svg                    # Alfred AI platform preview
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── robots.txt                        # Search engine crawler directives
│   └── sitemap.xml                       # SEO XML sitemap
├── src/
│   ├── components/                       # Reusable UI components
│   │   ├── AvailabilityBadge.tsx
│   │   ├── BackToTop.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SocialIcons.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/                             # Centralized editable configuration
│   │   ├── journey.ts                    # Education & timeline milestones
│   │   ├── navLinks.ts                   # Navigation menu items
│   │   ├── personal.ts                   # Name, titles, bio, availability & CV
│   │   ├── projects.ts                   # Featured projects & tech tags
│   │   ├── services.ts                   # Engineering service offerings
│   │   ├── skills.ts                     # Categorized technical skills
│   │   └── socialLinks.ts                # GitHub, LinkedIn, Email, WhatsApp
│   ├── hooks/
│   │   ├── useActiveSection.ts           # Scroll-spy active link detector
│   │   └── useTheme.ts                   # Dark/Light theme state hook
│   ├── sections/                         # Portfolio main sections
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── SkillsSection.tsx
│   ├── styles/
│   ├── App.tsx                           # Main application layout
│   ├── index.css                         # Tailwind CSS directives & animations
│   └── main.tsx                          # Application entry point
├── .env.example                          # Environment variable template
├── package.json
├── tsconfig.json
├── vercel.json                           # Vercel routing & security headers
├── vite.config.ts
└── README.md
```

---

## ⚙️ Content Management Guide

All content is strictly separated from the presentation layer. You can update your portfolio by modifying the files in `src/data/`:

| File | What to Update |
| :--- | :--- |
| `src/data/personal.ts` | Full name, titles, tagline, bio paragraphs, location, and availability toggle. |
| `src/data/skills.ts` | Frontend, Backend, Database, and AI & Tooling skills. |
| `src/data/projects.ts` | Add or edit projects, descriptions, tags, and live/GitHub URLs. |
| `src/data/journey.ts` | Formal education, diplomas, and technical evolution milestones. |
| `src/data/services.ts` | Specialized service offerings and client deliverables. |
| `src/data/socialLinks.ts` | GitHub, LinkedIn, email, and WhatsApp links. |

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.x, v20.x, or v24.x recommended)
- npm or yarn / pnpm

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/saim-portfolio.git
cd saim-portfolio
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in your configuration:
```env
# EmailJS configuration (Get free keys at https://www.emailjs.com/)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Optional contact overrides
VITE_CONTACT_EMAIL=saim.dev@example.com
VITE_CONTACT_WHATSAPP=+923000000000
VITE_GITHUB_URL=https://github.com/your-github-handle
VITE_LINKEDIN_URL=https://linkedin.com/in/your-linkedin-handle
VITE_SITE_URL=https://saim-portfolio.vercel.app
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Build
```bash
npm run build
```
Preview the built bundle locally:
```bash
npm run preview
```

---

## 🚢 Deployment Guide

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository (`saim-portfolio`).
4. In the Project Settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_CONTACT_EMAIL`
   - `VITE_SITE_URL`
6. Click **Deploy**. Vercel will build and assign a production URL.

#### Setting up a Custom Domain on Vercel:
1. Go to your project dashboard on Vercel > **Settings** > **Domains**.
2. Enter your custom domain (e.g., `saim.dev` or `saimdeveloper.com`).
3. Add the generated `CNAME` or `A` records to your domain DNS registrar (Namecheap, Cloudflare, GoDaddy, etc.).
4. Vercel automatically issues an SSL/TLS certificate.

---

### Deploy to GitHub Pages (Alternative)

1. In `vite.config.ts`, set the base path if using a repository subpath:
   ```ts
   export default defineConfig({
     base: '/saim-portfolio/',
     // ...
   })
   ```
2. Run build: `npm run build`.
3. Deploy the `dist` directory using GitHub Actions or `gh-pages` branch.

---

## 🔒 Security & Best Practices

- **Zero Hardcoded Secrets:** Private EmailJS keys and contact credentials are read dynamically from Vite environment variables (`import.meta.env`).
- **Honeypot Anti-Spam:** A hidden input field traps automated web bots and discards spam silently.
- **Client-Side Validation:** All fields are strictly validated before submission.
- **Content Security:** Security headers configured via `vercel.json` (HSTS, X-Content-Type-Options, Referrer-Policy, X-Frame-Options).

---

## 📄 License

Created by **Syed Muhammad Saim**. All rights reserved.
