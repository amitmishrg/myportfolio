/**
 * Central content map — edit values here to update the whole site.
 */
export const site = {
  name: "Amit Mishra",
  role: "Staff Frontend Engineer",
  location: "Bangalore, India",
  email: "amitmishra009v@gmail.com",
  /** Update formatting if you prefer a different display style */
  phone: "+91 88021 00560",
  url: "https://amitmishrg.in",
  social: {
    github: "https://github.com/amitmishrg",
    linkedin: "https://www.linkedin.com/in/amitmishrg/",
    twitter: "https://twitter.com/amitmishrg",
  },
  hero: {
    greeting: "Hi,",
    firstName: "I'm Amit",
    lastName: "Mishra",
    roleTag: "Staff Frontend Engineer",
    subline:
      "Staff engineer, 11+ years in. I build full agentic AI products — from the design system up to the streaming chat. Most recently Talos at Axiamatic: a chat workspace with artifacts, design mode, and live previews.",
  },
  marquee: [
    "WEB ENGINEERING",
    "DESIGN SYSTEMS",
    "AI & MCP",
    "AGENTIC UI",
    "REAL-TIME UI",
    "STREAMING CHAT",
    "PERFORMANCE",
    "CORE WEB VITALS",
    "MICRO-FRONTENDS",
    "NEXT.JS",
    "STAFF ENGINEERING",
    "PRODUCT CRAFT",
    "DESIGN ENGINEERING",
    "ACCESSIBILITY",
  ],
  marqueeStack: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Redux / Zustand",
    "React Query / SWR",
    "Tailwind CSS",
    "Framer Motion",
    "GraphQL",
    "Vite",
    "Webpack",
    "Storybook",
    "Jest · Playwright",
    "Lighthouse",
    "Chrome DevTools",
    "Sentry · Heap profiling",
    "MCP",
    "Claude SDK",
    "OpenAI SDK",
    "Figma",
    "Redis",
    "Docker",
    "AWS",
    "CI/CD",
    "WebSockets",
  ],
  services: [
    {
      title: "Agentic product UI",
      description:
        "End-to-end AI workspaces — chat, artifacts, design mode, live previews. Streaming agents that feel native, not bolted on.",
      capabilities: ["Chat on Claude SDK", "Artifact generation", "Design mode & live previews"],
      proof: { label: "Talos @ Axiamatic", href: "#experience" },
      icon: "sparkles" as const,
    },
    {
      title: "Design systems & MCP",
      description:
        "Tokens, components, and docs — plus an MCP the LLM can call as a skill, so the UI it generates ships on-brand on the first try.",
      capabilities: ["Token & component libraries", "Docs & governance", "LLM-callable MCP skill"],
      proof: { label: "Axm Design System MCP", href: "#experience" },
      icon: "layers" as const,
    },
    {
      title: "Perf & modernization",
      description:
        "Memory-leak hunts, stack migrations, and Core Web Vitals pushes that move real numbers — not dashboards that only look good.",
      capabilities: ["CWV audits & fixes", "Memory-leak hunting", "Framework migrations"],
      proof: { label: "FCP 5.1s → 0.2s @ Media.Net", href: "#experience" },
      icon: "gauge" as const,
    },
  ],
  about: {
    title: "About",
    lead: "Staff frontend engineer, 11+ years in. Still genuinely excited about the work.",
    body: [
      "Right now I'm at Axiamatic, leading frontend on an AI-native ERP. My biggest project this year is Talos — our agentic chat app, built on the claude-code-typescript SDK with artifact generation, a dedicated design mode, and live previews for whatever the agent builds. It ships as a micro-frontend inside the Axiamatic UI, so customers get a Claude-grade workspace without ever leaving our product.",
      "I also designed our Axm Design System MCP. We plug it in as a skill the LLM can call while generating artifacts, so the UI it produces actually matches our design system instead of looking like a distant cousin of it.",
      "Before Axiamatic, I spent almost six years at Media.Net (Directi) leading the Ad-Quality dashboard, a Next.js migration, and a Core Web Vitals push. That last one is still the most useful work I've done — real numbers, real users, less anxiety.",
      "The thread running through all of it: care about the person who reads the code next.",
    ],
    highlight: {
      stat: "CWV",
      detail:
        "Led the perf program on the Pub dashboard at Media.Net. Real numbers — FCP 5.1s → 0.2s, LCP 13.7s → 3.2s. Still my favourite graph.",
    },
    pillars: [
      "Technical leadership & mentorship",
      "Design-system thinking",
      "AI-native product UX",
    ],
  },
  stats: [
    { label: "Years in frontend", value: 11, suffix: "+" },
    { label: "Engineers mentored", value: 8, suffix: "+" },
    { label: "Open-source repos", value: 50, suffix: "+" },
    { label: "Shipping since", text: "2014" },
  ],
  experience: [
    {
      company: "Axiamatic",
      role: "Staff Engineer — Frontend",
      location: "Bangalore",
      range: "Nov 2022 — Present",
      summary:
        "Leading frontend for an AI-native ERP — Talos chat, the Axm Design System MCP, agentic product UIs, and the glue that ties it all together.",
      highlights: [
        "Built Talos — full agentic chat web app on the claude-code-typescript SDK, with artifact generation, design mode, and live previews.",
        "Drove the Axiamatic UI perf program — ~60% faster overall: FCP 4.1s → 0.8s, LCP 5.6s → 2.1s, DOMContentLoaded 4s → 340ms.",
        "Fixed memory leaks in long-lived Talos sessions — heap 2.5 GB → 1.3 GB (−50%), external buffers 483 MB → 167 MB (−65%); ended OOM-triggered restarts.",
        "Designed the Axm Design System MCP — wired in as an LLM-callable skill so Talos artifacts ship on-brand on the first try.",
        "Lead frontend architecture, code reviews, and design-pattern work day-to-day — continuously refine the tech stack and mentor 5+ engineers.",
        "Migrated the real-time chat agent onto the AI-SDK streaming framework — responses feel instant now.",
        "Shipped Talos as a micro-frontend inside Axiamatic UI — customers get the full chat experience without leaving the product.",
      ],
      tags: ["Talos", "Claude SDK", "MCP", "Performance", "Leadership"],
    },
    {
      company: "Media.Net (Directi)",
      role: "Senior Web Application Developer — Module Lead",
      location: "Bangalore",
      range: "Jan 2017 — Nov 2022",
      summary:
        "Nearly six years on large React/Redux apps. Led a Next.js migration, built the Pub Ad-Quality dashboard, and ran the Core Web Vitals program that moved our numbers from red to green.",
      highlights: [
        "Built the Pub Ad-Quality dashboard on React, Redux Toolkit, Styled Components, and Grommet — full multi-theming from day one.",
        "Led a Next.js migration using SSG, ISR, and SSR where each actually made sense.",
        "Drove the CWV program: FCP 5.1s → 0.2s, LCP 13.7s → 3.2s on the Pub dashboard.",
        "Ran bi-weekly dev syncs and mentored three engineers into senior roles.",
      ],
      tags: ["React", "Next.js", "Performance", "Leadership"],
    },
    {
      company: "Onlinemocks Pvt. Ltd.",
      role: "Senior Web Application Developer",
      location: "Gurgaon",
      range: "May 2016 — Jan 2017",
      summary: "Owned the web mock-test portal end-to-end — built it and tuned it for scale.",
      highlights: [
        "Developed the web mock-test portal from scratch.",
        "Developed multiple mock-test templates.",
        "Optimized the application for maximum speed and scalability.",
      ],
      tags: ["JavaScript", "HTML/CSS", "Performance"],
    },
    {
      company: "Collegedunia Web Pvt. Ltd.",
      role: "Software Engineer — Frontend",
      location: "Delhi",
      range: "Oct 2015 — May 2016",
      summary: "Shipped the core college-listing pages, then revamped zoutons.com end-to-end.",
      highlights: [
        "Developed colleges, courses, and fee-listing pages with HTML, CSS, Sass, and jQuery.",
        "Optimized performance and revamped zoutons.com end-to-end.",
        "Added a custom admin panel for the ops team to add and edit discounts.",
      ],
      tags: ["HTML5", "CSS3", "Sass", "jQuery"],
    },
    {
      company: "Rising Hues Technologies LLP",
      role: "Software Engineer — Frontend",
      location: "Lucknow",
      range: "Jul 2014 — Sep 2015",
      summary:
        "First job out of college — built marketing sites and internal tools with HTML5, CSS3, and vanilla JS.",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
  ],
  education: {
    school: "UPTU",
    degree: "B.Tech — Information Technology",
    range: "2010 — 2014",
  },
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Node.js",
    "React Query / SWR",
    "Storybook",
    "Claude SDK",
    "MCP",
    "AI-SDK",
    "Lighthouse / DevTools",
    "Sentry / Heap profiling",
    "Vite / Webpack",
    "Figma",
  ],
  projects: [
    {
      title: "Talos — Agentic chat at Axiamatic",
      category: "Product / AI",
      image: "/images/project-talos.png",
      href: null,
      note: "Internal — private preview",
    },
    {
      title: "AgenticLens",
      category: "Dev tools / AI",
      image: "/images/project-agenticlens.png",
      href: "https://agenticlens.in/",
      note: "Live product",
    },
    {
      title: "Media.net — Pub Ad-Quality dashboard",
      category: "Ad tech / SSP",
      image: "/images/project-medianet.png",
      href: "https://www.media.net/",
      note: "FCP 5.1s → 0.2s",
    },
    {
      title: "Zoutons.com — end-to-end revamp",
      category: "E-commerce / Frontend",
      image: "/images/project-zoutons.png",
      href: "https://zoutons.com/",
      note: "First job, full rebuild",
    },
  ],
  openSource: {
    blurb:
      "Stuff I've built because I wanted to — products, demos, and tools I keep poking at after hours.",
    projects: [
      {
        name: "AgenticLens",
        tagline: "Visualize and debug AI agent workflows.",
        description:
          "A live product for making multi-step agent runs legible — inputs, tool calls, and decisions in one timeline. Built to scratch the itch of debugging Talos.",
        href: "https://www.agenticlens.in/",
        meta: { label: "Live product", kind: "live" as const },
        tags: ["AI", "Agents", "Dev tools"],
      },
      {
        name: "Picksy",
        tagline: "Pick a side. See where you stand.",
        description:
          "Social voting app — every question is a two-choice showdown. Personalised feed, optimistic UI, and a Hacker-News-style trending score.",
        href: "https://github.com/amitmishrg/picksy",
        meta: { label: "GitHub", kind: "repo" as const },
        tags: ["Next.js 16", "Postgres", "Prisma", "Tailwind v4"],
      },
      {
        name: "code-resume",
        tagline: "Build your own resume in seconds.",
        description:
          "Offline-first resume builder with dark mode, PDF export, and theme support. My most-starred repo — still getting PRs six years in.",
        href: "https://github.com/amitmishrg/code-resume",
        meta: { label: "★ 315", kind: "stars" as const },
        tags: ["React", "PWA", "Themes"],
      },
      {
        name: "WebMCP ShopQuick",
        tagline: "Shopping cart as tools, exposed via WebMCP.",
        description:
          "Demo e-commerce app that registers its cart with `navigator.modelContext`, so external AI clients and an in-page chat can both control it.",
        href: "https://github.com/amitmishrg/web-mcp-shopquick",
        meta: { label: "GitHub", kind: "repo" as const },
        tags: ["WebMCP", "AI SDK", "OpenAI", "React"],
      },
    ],
  },
  quote: {
    text: "Great frontend work is part craft, part systems thinking — and a lot of caring about the next person who reads the code.",
    attribution: "How I like to build",
  },
  contact: {
    title: "Say hi",
    subtitle:
      "Tell me what you're working on — design-system rework, AI product UI, a stubborn perf problem, or just to swap notes.",
    serviceTags: [
      "Design system",
      "Agentic product UI",
      "MCP tooling",
      "Performance",
      "Team mentorship",
      "Something else",
    ],
  },
  assets: {
    heroPortrait: "/images/amit.png",
    /** Served from `public/` — replace `public/resume.pdf` with your real file */
    resumePdf: "/resume.pdf",
    resumeDownloadName: "Amit-Mishra-Resume.pdf",
  },
} as const

export type ServiceIcon = (typeof site.services)[number]["icon"]
