/**
 * Central content map — edit values here to update the whole site.
 */
export const site = {
  name: "Amit Mishra",
  role: "Staff Frontend Engineer",
  tagline: "AI Products · Platform · Developer Tools",
  location: "Bangalore, India",
  email: "amitmishra009v@gmail.com",
  phone: "+91 88021 00560",
  url: "https://amitmishrg.in",
  social: {
    github: "https://github.com/amitmishrg",
    linkedin: "https://linkedin.com/in/amitmishrg",
    twitter: "https://twitter.com/amitmishrg",
  },
  hero: {
    eyebrow: "Staff Frontend Engineer",
    greeting: "Hi,",
    firstName: "I'm Amit",
    lastName: "Mishra",
    headline: "Building AI-native products, frontend platforms, and developer tools.",
    subline:
      "Staff Frontend Engineer with 11+ years turning ambiguous product problems into durable frontend architecture — from agentic interfaces and streaming systems to design systems, developer experience, performance, and reliability.",
    roleTag: "Staff Frontend Engineer",
  },
  marquee: [
    "FRONTEND PLATFORM",
    "AI-NATIVE PRODUCTS",
    "DEVELOPER TOOLS",
    "AGENTIC UI",
    "STREAMING SYSTEMS",
    "DESIGN SYSTEMS",
    "MCP",
    "PERFORMANCE",
    "CORE WEB VITALS",
    "MICRO-FRONTENDS",
    "STAFF ENGINEERING",
    "OPEN SOURCE",
    "ARCHITECTURE",
    "DEVELOPER EXPERIENCE",
  ],
  marqueeStack: [
    "React",
    "TypeScript",
    "Next.js",
    "Vercel AI SDK",
    "Claude Agent SDK",
    "MCP",
    "React Query / SWR",
    "Zustand",
    "Tailwind CSS",
    "Storybook",
    "Jest · RTL · Playwright",
    "Lighthouse",
    "Chrome DevTools",
    "Sentry",
    "Node.js",
    "Vite",
    "Webpack",
    "Redis",
    "Docker",
    "AWS",
    "CI/CD",
    "WebSockets",
    "SSE",
  ],
  impact: [
    { label: "Years engineering", value: "11+", detail: "Production frontend systems" },
    { label: "FCP improvement", value: "4.1s → 0.8s", detail: "Axiamatic perf program" },
    { label: "LCP improvement", value: "5.6s → 2.1s", detail: "Axiamatic perf program" },
    { label: "Heap reduction", value: "2.5 → 1.3 GB", detail: "Long-lived Talos sessions" },
    { label: "code-resume", value: "300+", detail: "GitHub stars" },
    { label: "Public repos", value: "55", detail: "Open source on GitHub" },
  ],
  services: [
    {
      title: "AI-Native Product Engineering",
      description:
        "Designing production-grade interfaces around agents, streaming execution, tools, artifacts, approvals, and real-time state.",
      capabilities: [
        "Talos agentic workspace",
        "Streaming & artifact UX",
        "Vercel AI SDK · Claude Agent SDK",
      ],
      proof: { label: "Talos @ Axiamatic", href: "#axiamatic" },
      icon: "sparkles" as const,
    },
    {
      title: "Platform & Architecture",
      description:
        "Building reusable frontend foundations that make complex products consistent, scalable, accessible, performant, and easier to evolve.",
      capabilities: [
        "Design systems & MCP",
        "Micro-frontends & shared patterns",
        "Performance programs",
      ],
      proof: { label: "Axm Design System MCP", href: "#case-studies" },
      icon: "layers" as const,
    },
    {
      title: "Developer Tools & AI-Assisted Engineering",
      description:
        "Building tools and systems that improve how engineers build, debug, and work with AI coding agents.",
      capabilities: ["eng-os", "AgenticLens", "GhostCode", "WebMCP"],
      proof: { label: "Open source", href: "#open-source" },
      icon: "terminal" as const,
    },
  ],
  axiamatic: {
    intro:
      "Leading frontend architecture for AI-native products at Axiamatic, with a focus on agentic interfaces, streaming systems, design systems, performance, and developer experience.",
    highlights: [
      {
        title: "Talos — agentic workspace",
        description:
          "Architected and led Talos, Axiamatic's agentic workspace, spanning the execution model, streaming UI, artifact generation, design mode, live previews, and micro-frontend integration. Designed the streaming architecture around long-lived agent executions rather than HTTP request lifecycles, allowing agent runs to outlive browser connections and supporting reconnectable multi-chat experiences.",
        tags: ["AI Agents", "Streaming", "Artifacts", "Micro-frontend"],
      },
      {
        title: "AI SDK streaming migration",
        description:
          "Migrated the real-time agent experience onto the AI SDK streaming framework, establishing a more durable streaming boundary between agent execution and the browser.",
        tags: ["Vercel AI SDK", "SSE", "Streaming"],
      },
      {
        title: "Frontend performance program",
        description:
          "Led the Axiamatic frontend performance program, establishing measurable baselines and driving improvements across loading and rendering performance: FCP 4.1s → 0.8s, LCP 5.6s → 2.1s, and DOMContentLoaded 4s → 340ms.",
        tags: ["Core Web Vitals", "Lighthouse", "RUM"],
      },
      {
        title: "Memory & reliability",
        description:
          "Diagnosed and eliminated memory growth in long-lived Talos agent sessions (up to 90 minutes of continuous agentic work), reducing heap usage from 2.5 GB → 1.3 GB and external buffers from 483 MB → 167 MB, eliminating OOM-triggered restarts.",
        tags: ["Heap profiling", "DevTools", "Reliability"],
      },
      {
        title: "Axm Design System MCP",
        description:
          "Designed the Axm Design System MCP, turning design tokens and component knowledge into an LLM-callable capability so agent-generated UI follows the product's design system by default.",
        tags: ["MCP", "Design Systems", "AI UX"],
      },
      {
        title: "Architecture & leadership",
        description:
          "Led frontend architecture, code reviews, and design-pattern work while mentoring engineers and raising frontend engineering standards across the team.",
        tags: ["Architecture", "Mentorship", "Code review"],
      },
    ],
  },
  caseStudies: [
    {
      id: "talos",
      title: "Building an AI-native workspace inside a production ERP",
      subtitle: "Talos · Axiamatic",
      summary:
        "Architected an agentic workspace from zero — execution-oriented streaming, artifacts, and micro-frontend integration shipping in every tenant.",
      sections: [
        {
          heading: "Problem",
          body:
            "Axiamatic customers needed a product-native AI experience. Bouncing between external chat tools and the ERP broke workflow continuity and made agent-generated work hard to trust inside the product.",
        },
        {
          heading: "Constraints",
          body:
            "Ship inside an existing ERP shell without bloating the main bundle. Support long agentic sessions, multi-chat, and on-brand artifact generation — without exposing proprietary backend details to the browser.",
        },
        {
          heading: "Architecture",
          body:
            "Designed the system boundary around long-lived agent executions rather than HTTP request lifecycles. Agent runs produce events; the UI renders a projection of those events. Streaming, reconnect, and resume are first-class — not bolted on after the fact.",
        },
        {
          heading: "Key decisions",
          body:
            "Chose execution-oriented streaming over connection-oriented chat. Integrated Talos as a micro-frontend across Axiamatic customer workspaces for independent iteration. Exposed design-system knowledge via MCP so generated UI stays on-brand.",
        },
        {
          heading: "Outcome",
          body:
            "Talos ships in every tenant as the default AI surface — with artifact generation, design mode, live previews, and sessions that sustain up to 90 minutes of continuous agentic work.",
        },
      ],
      tags: ["Talos", "Streaming", "Artifacts", "Micro-frontend", "MCP"],
    },
    {
      id: "performance",
      title: "Driving FCP from 4.1s to 0.8s",
      subtitle: "Frontend performance program · Axiamatic",
      summary:
        "Led a measurement-first performance program — baseline, diagnose, remediate, validate — across Core Web Vitals.",
      sections: [
        {
          heading: "Baseline",
          body:
            "Customer-facing UI had grown fast: FCP 4.1s, LCP 5.6s, DOMContentLoaded 4s. Sales demos on unreliable networks were surfacing the problem.",
        },
        {
          heading: "Approach",
          body:
            "Week of real-user monitoring and Lighthouse CI baselines before touching code. For each metric, identified the single biggest contributor — critical render path, JS diet, image pipeline, third-party deferral.",
        },
        {
          heading: "Results",
          body:
            "FCP 4.1s → 0.8s (−80%), LCP 5.6s → 2.1s (−63%), DOMContentLoaded 4s → 340ms (−91%). Established perf budgets in CI so regressions block merge.",
        },
      ],
      tags: ["FCP", "LCP", "CWV", "Lighthouse", "RUM"],
    },
    {
      id: "design-system-mcp",
      title: "Making the design system consumable by AI",
      subtitle: "Axm Design System MCP · Axiamatic",
      summary:
        "Turned design tokens and component knowledge into an LLM-callable MCP capability — so agent-generated UI follows the product design system by default.",
      sections: [
        {
          heading: "Problem",
          body:
            "Talos artifacts were technically correct but visually off-brand. Embedding tokens in prompts was fragile and expensive. A normal design system isn't automatically useful to an agent.",
        },
        {
          heading: "Approach",
          body:
            "Exposed tokens, components, and usage rules as discoverable MCP tools the model can invoke at generation time. Anything that changes belongs in a skill; prompts carry intent.",
        },
        {
          heading: "Outcome",
          body:
            "Agent-generated UI follows the same design constraints as human-generated UI. Design drift bugs dropped; first-try on-brand artifact rate became the default.",
        },
      ],
      tags: ["MCP", "Design Systems", "Tokens", "AI UX"],
    },
  ],
  about: {
    title: "About",
    lead:
      "I build frontend systems at the intersection of product engineering, platform architecture, and AI.",
    body: [
      "Over 11+ years, I've worked from large-scale web applications to AI-native interfaces, developer tooling, design systems, and performance engineering.",
      "At Axiamatic I lead frontend architecture for Talos — an agentic workspace with artifact generation, design mode, and live previews — plus the Axm Design System MCP and a frontend performance program that moved real Core Web Vitals numbers.",
      "Before that, nearly six years at Media.Net (Directi) on publisher-facing dashboards, a Next.js migration, and a CWV program that took FCP from 5.1s to 0.2s.",
      "The thread running through all of it: durable architecture, measurable impact, and caring about the person who reads the code next.",
    ],
    highlight: {
      stat: "CWV",
      detail:
        "Led the perf program on the Pub dashboard at Media.Net — a publisher-facing tool inside one of the open web's largest SSPs. FCP 5.1s → 0.2s, LCP 13.7s → 3.2s.",
    },
    pillars: [
      "Frontend architecture & platform engineering",
      "AI-native product engineering",
      "Developer tools & open source",
    ],
  },
  stats: [
    { label: "Years in frontend", value: 11, suffix: "+" },
    { label: "Engineers mentored", value: 8, suffix: "+" },
    { label: "GitHub stars (code-resume)", value: 300, suffix: "+" },
    { label: "Shipping since", text: "2014" },
  ],
  experience: [
    {
      company: "Axiamatic",
      role: "Staff Engineer — Frontend",
      location: "Bangalore",
      range: "Nov 2022 — Present",
      summary:
        "Leading frontend architecture for AI-native products — Talos agentic workspace, Axm Design System MCP, streaming systems, performance, and developer experience.",
      highlights: [
        "Architected Talos — agentic workspace with artifact generation, design mode, live previews, and micro-frontend integration; shipping in every Axiamatic customer workspace.",
        "Designed streaming architecture around long-lived agent executions, supporting reconnectable multi-chat experiences.",
        "Migrated the real-time agent experience onto the AI SDK streaming framework, establishing a durable boundary between agent execution and the browser.",
        "Led the frontend performance program: FCP 4.1s → 0.8s, LCP 5.6s → 2.1s, DOMContentLoaded 4s → 340ms.",
        "Designed the Axm Design System MCP — LLM-callable design-system capability for on-brand agent-generated UI.",
        "Diagnosed memory growth in long-lived sessions — heap 2.5 GB → 1.3 GB, external buffers 483 MB → 167 MB; eliminated OOM-triggered restarts.",
        "Led frontend architecture, code reviews, and design-pattern work while mentoring 5+ engineers.",
      ],
      tags: ["Talos", "AI SDK", "MCP", "Performance", "Architecture"],
      featured: true,
    },
    {
      company: "Media.Net (Directi)",
      role: "Senior Web Application Developer — Module Lead",
      location: "Bangalore",
      range: "Jan 2017 — Nov 2022",
      summary:
        "Nearly six years on large React/Redux apps. Led a Next.js migration, built the Pub Ad-Quality dashboard, and ran the Core Web Vitals program.",
      highlights: [
        "Built the Pub Ad-Quality dashboard — publisher-facing tool inside one of the open web's largest SSPs (publishers like TIME and U.S. News).",
        "Led a Next.js migration — matched SSG, ISR, and SSR to each page's render and data profile.",
        "Drove the CWV program: FCP 5.1s → 0.2s, LCP 13.7s → 3.2s on the Pub dashboard.",
        "Mentored three engineers into senior roles.",
      ],
      tags: ["React", "Next.js", "Performance", "Leadership"],
      featured: true,
    },
    {
      company: "Earlier Experience",
      role: "Frontend Engineer — first three years",
      location: "Gurgaon · Delhi · Lucknow",
      range: "2014 — 2017",
      summary: "Foundation years — mock-test portals, college listings, and marketing sites.",
      highlights: [
        "Onlinemocks — owned the web mock-test portal end-to-end.",
        "Collegedunia — shipped college-listing pages and revamped zoutons.com.",
        "Rising Hues — built marketing sites and internal tools with HTML5, CSS3, and vanilla JS.",
      ],
      tags: ["JavaScript", "HTML/CSS", "Performance"],
      featured: false,
    },
  ],
  education: {
    school: "UPTU",
    degree: "B.Tech — Information Technology",
    range: "2010 — 2014",
  },
  skills: {
    aiAgent: [
      "Claude Agent SDK",
      "Vercel AI SDK",
      "MCP",
      "Agentic UI",
      "Streaming / SSE",
      "Tool Calling",
      "AI Observability",
    ],
    frontendArch: [
      "React",
      "TypeScript",
      "Next.js",
      "Zustand",
      "React Query / SWR",
      "Tailwind",
      "Design Systems",
      "Micro-frontends",
    ],
    platform: ["Node.js", "Redis", "AWS", "Vite", "Webpack", "CI/CD"],
    perfQuality: [
      "Core Web Vitals",
      "Chrome DevTools",
      "Lighthouse",
      "Sentry",
      "Heap Profiling",
      "React Testing Library",
      "Storybook",
      "Playwright",
    ],
  },
  projects: [
    {
      title: "Talos — Agentic workspace",
      category: "Product / AI",
      image: "/images/project-talos.png",
      href: null,
      note: "Every tenant",
    },
    {
      title: "AgenticLens",
      category: "Developer tools",
      image: "/images/project-agenticlens.png",
      href: "https://agenticlens.in/",
      note: "Live product",
    },
    {
      title: "eng-os",
      category: "AI developer tools",
      image: "/images/project-eng-os.png",
      imagePosition: "center",
      href: "https://github.com/amitmishrg/eng-os",
      note: "Open source",
    },
    {
      title: "GhostCode",
      category: "Coding agents",
      image: "/images/project-ghostcode.png",
      href: "https://github.com/amitmishrg/ghostcode",
      note: "Open source",
    },
  ],
  openSource: {
    blurb:
      "Open-source engineering at the intersection of AI developer tools, agent observability, and developer experience — not side projects, but systems I use and extend.",
    featured: [
      {
        name: "eng-os",
        category: "Open Source · AI Developer Tools",
        tagline: "Engineering OS for AI-assisted development",
        description:
          "A portable engineering kit for AI-assisted development that packages reusable engineering workflows, project knowledge, skills, memory, and adapters into a repeatable development system.",
        href: "https://github.com/amitmishrg/eng-os",
        github: "https://github.com/amitmishrg/eng-os",
        live: null,
        meta: { label: "GitHub", kind: "repo" as const },
        tags: ["AI Agents", "CLI", "Developer Experience", "Engineering Workflows"],
      },
      {
        name: "AgenticLens",
        category: "AI Observability · Developer Tools",
        tagline: "Visualize and debug AI agent workflows",
        description:
          "Developer observability tooling for AI agents — visualize execution timelines, tool calls, events, and workflow behavior.",
        href: "https://agenticlens.in/",
        github: "https://github.com/amitmishrg/agenticlens",
        live: "https://agenticlens.in/",
        meta: { label: "Live product", kind: "live" as const },
        tags: ["AI Observability", "Agent Workflows", "Claude SDK", "Developer Tools"],
      },
      {
        name: "GhostCode",
        category: "Open Source · Coding Agents",
        tagline: "Local-first coding-agent harness",
        description:
          "An open-source local-first coding-agent harness for exploring how AI coding agents work — agent loops, tool execution, PLAN/BUILD modes, session persistence, and model providers.",
        href: "https://github.com/amitmishrg/ghostcode",
        github: "https://github.com/amitmishrg/ghostcode",
        live: null,
        meta: { label: "GitHub", kind: "repo" as const },
        tags: ["Coding Agents", "AI", "CLI", "Agent Harness"],
      },
      {
        name: "WebMCP ShopQuick",
        category: "WebMCP · Open Source",
        tagline: "Shopping cart as AI tools",
        description:
          "An experimental shopping experience demonstrating how website capabilities can be exposed as AI-callable tools through WebMCP.",
        href: "https://github.com/amitmishrg/web-mcp-shopquick",
        github: "https://github.com/amitmishrg/web-mcp-shopquick",
        live: null,
        meta: { label: "GitHub", kind: "repo" as const },
        tags: ["WebMCP", "AI Tools", "Browser", "Open Source"],
      },
      {
        name: "code-resume",
        category: "Open Source · Developer Tool",
        tagline: "Offline-first resume builder",
        description:
          "Open-source offline-first resume builder with PDF export, used by the developer community.",
        href: "https://github.com/amitmishrg/code-resume",
        github: "https://github.com/amitmishrg/code-resume",
        live: null,
        meta: { label: "★ 313", kind: "stars" as const },
        tags: ["Offline-first", "PDF", "PWA", "React"],
      },
    ],
  },
  quote: {
    text:
      "Performance is a continuous engineering system, not a one-time optimization. Platform engineering is about making the right path the easiest path.",
    attribution: "How I like to build",
  },
  contact: {
    title: "Say hi",
    subtitle:
      "Building something ambitious? Looking for a Staff frontend engineer working at the intersection of AI, product engineering, and frontend architecture? Let's talk.",
    serviceTags: [
      "AI-native product UI",
      "Frontend platform",
      "Developer tools",
      "Design systems",
      "Performance",
      "Staff / Principal roles",
    ],
  },
  assets: {
    heroPortrait: "/images/amit.png",
    resumePdf: "/resume.pdf",
    resumeDownloadName: "Amit-Mishra-Resume.pdf",
  },
  resume: {
    profile:
      "Staff Frontend Engineer with 11+ years building AI-native products, scalable web platforms, and developer tooling. I specialize in durable frontend architecture — from agentic interfaces and streaming systems to design systems, developer experience, performance, and reliability. Currently leading Talos at Axiamatic: an agentic workspace with artifact generation, design mode, and live previews, shipping in every tenant.",
    taglineTerms: ["AI Products", "Platform", "Developer Tools"] as const,
    taglineAccent: "AI Products",
    openSourceNames: [
      "eng-os",
      "AgenticLens",
      "GhostCode",
      "WebMCP ShopQuick",
      "code-resume",
    ] as const,
    skills: {
      left: {
        title: "AI & agent engineering",
        items: [
          ["Claude Agent SDK", 90],
          ["Vercel AI SDK", 85],
          ["MCP", 85],
          ["React", 90],
          ["TypeScript", 85],
          ["Next.js", 85],
          ["Design Systems", 88],
        ],
      },
      right: {
        title: "Platform, architecture & perf",
        items: [
          ["Micro-frontends", 82],
          ["React Query / SWR", 85],
          ["Streaming / SSE", 88],
          ["Core Web Vitals", 90],
          ["Lighthouse / DevTools", 90],
          ["React Testing Library", 82],
          ["Playwright", 80],
        ],
      },
    },
    experienceMaxBullets: { axiamatic: 6, medianet: 4, earlier: 3 },
  },
} as const

export type ServiceIcon = (typeof site.services)[number]["icon"]
