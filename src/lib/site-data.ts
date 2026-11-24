export type ServiceIconKey =
  | "globe"
  | "layout"
  | "smartphone"
  | "cpu"
  | "sparkles"
  | "cloud";

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: ServiceIconKey;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface PhoneContact {
  label: string;
  role: string;
  display: string;
  href: string;
  rawDigits: string;
  isPrimary: boolean;
}

export const SITE_CONFIG = {
  name: "Brelox Technologies",
  shortName: "Brelox",
  tagline: "Engineering Digital Products That Scale",
  description:
    "Brelox Technologies is a remote-first software engineering studio specializing in websites, web applications, mobile apps, custom software, AI solutions, and cloud infrastructure.",
  phones: [
    {
      label: "Primary Line",
      role: "Project Inquiries & Technical Consultations",
      display: "+91 77369 56379",
      href: "tel:+917736956379",
      rawDigits: "917736956379",
      isPrimary: true,
    },
    {
      label: "Secondary Line",
      role: "Support & Direct Consultations",
      display: "+91 98090 01008",
      href: "tel:+919809001008",
      rawDigits: "919809001008",
      isPrimary: false,
    },
  ] satisfies PhoneContact[],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    icon: "globe",
    summary:
      "Fast, responsive, SEO-ready corporate websites and landing pages built for clarity and conversion.",
    description:
      "We design and engineer modern websites that represent your brand with precision across every screen size. From company portfolios to high-traffic marketing platforms, every site is optimized for speed, accessibility, and search visibility.",
    deliverables: [
      "Custom responsive UI/UX tailored to your brand identity",
      "Technical SEO, structured metadata, and Core Web Vitals optimization",
      "CMS integration for effortless content updates",
      "Clean, maintainable frontend architecture",
    ],
    idealFor: "Growing businesses, product launches, and brand refreshes.",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    shortTitle: "Web Apps",
    icon: "layout",
    summary:
      "Full-stack SaaS platforms, operational dashboards, and customer portals engineered for reliability.",
    description:
      "We build interactive, data-intensive web applications designed around real user workflows. With clean API architecture, role-based access control, and resilient databases, your platform stays responsive as usage grows.",
    deliverables: [
      "Multi-tenant SaaS architecture and customer portals",
      "Real-time operational dashboards and analytics interfaces",
      "Secure REST & GraphQL APIs with role-based permissions",
      "Automated testing and smooth CI/CD release workflows",
    ],
    idealFor: "Startups, B2B platforms, and teams digitizing internal operations.",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    shortTitle: "Mobile Apps",
    icon: "smartphone",
    summary:
      "Intuitive iOS and Android mobile experiences engineered for performance and everyday usability.",
    description:
      "We develop cross-platform and native-grade mobile applications that feel crisp and dependable in your users' hands. Every interface is crafted for thumb-friendly ergonomics, offline resilience, and seamless backend synchronization.",
    deliverables: [
      "Cross-platform iOS & Android engineering from a unified codebase",
      "Responsive mobile UI with smooth gesture and navigation patterns",
      "Push notifications, offline caching, and secure authentication",
      "End-to-end App Store and Google Play release preparation",
    ],
    idealFor: "Consumer apps, field-service teams, and mobile-first products.",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    shortTitle: "Custom Software",
    icon: "cpu",
    summary:
      "Bespoke business software tailored to your exact operational rules, integrations, and workflows.",
    description:
      "When off-the-shelf tools force your team into clunky workarounds, we architect purpose-built software from the ground up. We streamline complex processes, unify fragmented data, and modernize legacy systems without disrupting operations.",
    deliverables: [
      "Tailored ERP, CRM, billing, and inventory management systems",
      "Third-party API and legacy database integrations",
      "Desktop and cross-platform internal tooling",
      "Long-term maintainability with modular documentation",
    ],
    idealFor: "Organizations with specialized workflows and complex business logic.",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI Solutions",
    icon: "sparkles",
    summary:
      "Practical AI integrations, intelligent automation, and custom LLM workflows that deliver measurable value.",
    description:
      "We move beyond hype to embed reliable AI capabilities directly into your software. Whether automating document extraction, building domain-aware assistants, or enriching search and analytics, we focus on accuracy, privacy, and cost control.",
    deliverables: [
      "Custom LLM-powered assistants and knowledge-base retrieval (RAG)",
      "Automated document parsing, classification, and workflow routing",
      "AI API integration into existing web and business applications",
      "Evaluation guardrails, prompt engineering, and latency tuning",
    ],
    idealFor: "Teams looking to automate repetitive work and unlock data insights.",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortTitle: "Cloud & Infra",
    icon: "cloud",
    summary:
      "Resilient cloud architecture, automated deployments, and security hardening built for uptime.",
    description:
      "Great software needs a dependable foundation. We architect, migrate, and optimize cloud environments so your applications stay fast, secure, and cost-efficient under real-world traffic.",
    deliverables: [
      "Cloud architecture design, migration, and cost optimization",
      "Docker containerization and automated CI/CD deployment pipelines",
      "Edge caching, CDN configuration, and database backup strategies",
      "Monitoring, alerting, and security best-practice hardening",
    ],
    idealFor: "Businesses scaling production workloads or modernizing hosting.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "We align on business goals, technical constraints, and user journeys to map a clear, realistic blueprint before writing code.",
  },
  {
    step: "02",
    title: "UI/UX & Prototyping",
    description:
      "Clean wireframes and responsive design systems ensure every screen is readable, intuitive, and aligned with your brand.",
  },
  {
    step: "03",
    title: "Iterative Engineering",
    description:
      "We build in focused, transparent milestones with clean, typed code so you can review working progress continuously.",
  },
  {
    step: "04",
    title: "Launch & Ongoing Support",
    description:
      "Rigorous testing, cloud deployment, performance tuning, and direct post-launch engineering support keep everything running smoothly.",
  },
] as const;

export const CORE_PRINCIPLES = [
  {
    title: "Clarity Over Clutter",
    description:
      "Every interface and line of code serves a clear purpose. We prioritize readable typography, clean hierarchy, and effortless usability.",
  },
  {
    title: "Full-Stack Ownership",
    description:
      "From UI/UX design and frontend engineering to backend systems, AI pipelines, and cloud deployment, we take end-to-end accountability.",
  },
  {
    title: "Remote-First Agility",
    description:
      "Operating as a dedicated digital studio without physical office overhead allows us to stay responsive, focused, and directly accessible by phone or online.",
  },
  {
    title: "Built to Evolve",
    description:
      "We write modular, well-structured software so your product can scale cleanly with new features, integrations, and traffic.",
  },
] as const;

export const TECH_STACK = [
  {
    category: "Frontend & UI",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "REST & GraphQL"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "Expo", "Offline-First Sync"],
  },
  {
    category: "AI & Cloud",
    items: ["LLM / RAG Pipelines", "Docker", "Cloudflare", "AWS", "CI/CD"],
  },
] as const;
