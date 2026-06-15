import { PersonalInfo, Project, SkillGroup, ExperienceItem, Certification } from './types';
import avatarImg from './assets/images/jivithesh_portfolio_avatar_1781501827467.jpg';
import projectAImg from './assets/images/project_a_thumbnail_1781501356053.jpg';

export const personalInfo: PersonalInfo = {
  name: "Jivithesh",
  role: "Lead Full-Stack Developer & Creative Technologist",
  tagline: "Engineering resilient system architectures alongside immersive interactive design.",
  bio: "I am Jivithesh, a multi-disciplinary full-stack software developer and creative technologist specializing in highly performant modern web applications, distributed backend services, and pixel-perfect interactive visuals. With deep expertise across React, Node.js, and cloud systems, I streamline complex workflows into elegant, fluid tech solutions.",
  avatar: avatarImg,
  resumeUrl: "#",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "jivithesh448@gmail.com",
    dribbble: "https://dribbble.com"
  }
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Architecture",
    skills: [
      { name: "React / Next.js", level: 95, iconName: "Cpu" },
      { name: "TypeScript", level: 92, iconName: "Shield" },
      { name: "Tailwind CSS", level: 98, iconName: "Palette" },
      { name: "Framer Motion", level: 90, iconName: "Sparkles" },
      { name: "WebGL / Three.js", level: 78, iconName: "Box" }
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js (Express/NestJS)", level: 88, iconName: "Server" },
      { name: "GraphQL & REST APIs", level: 90, iconName: "GitMerge" },
      { name: "PostgreSQL / Redis", level: 85, iconName: "Database" },
      { name: "Docker & Kubernetes", level: 80, iconName: "Terminal" },
      { name: "Cloud Architecture (GCP/AWS)", level: 82, iconName: "Cloud" }
    ]
  },
  {
    category: "Design & Practices",
    skills: [
      { name: "Figma UI/UX Design", level: 85, iconName: "Layout" },
      { name: "Responsive Typography", level: 95, iconName: "Type" },
      { name: "Web Performance (Core Web Vitals)", level: 92, iconName: "Activity" },
      { name: "CI/CD & Devops", level: 84, iconName: "Layers" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "project-a",
    title: "Project A: Enterprise Core Platform",
    category: "SaaS Application",
    description: "The flagship enterprise platform managing micro-frontend orchestrations, multi-tenant cloud resources, and credentials sync.",
    detailedDescription: "Project A represents the pinnacle of modern enterprise-grade software architecture. Serving as a unified orchestration hub, it synchronizes critical user portfolios, credentials, and custom vector canvases. Designed around high-velocity streaming pipelines, it powers seamless integrations for complex cross-platform setups while keeping sensitive data heavily isolated from client environments.",
    tags: ["React 19", "Vite", "TypeScript", "NodeJS", "Tailwind CSS", "Enterprise Sync"],
    image: projectAImg,
    liveUrl: "https://example.com/project-a",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Micro-frontend orchestrator with zero-flicker bundle loading",
      "Dynamic secure state synchronization across federated clusters",
      "Built-in certificate visualizers and reporting engines rendering complex data",
      "Comprehensive cloud-tenant isolation keeping user credentials fully encrypted"
    ]
  },
  {
    id: "lumina-dashboard",
    title: "Lumina Analytics Suite",
    category: "SaaS Application",
    description: "An enterprise-grade real-time web analytics suite streaming transactional flows and custom user metrics.",
    detailedDescription: "Lumina is a highly specialized transactional analytics portal supporting high-velocity streaming data, elegant multi-axis D3 data visualizations, and customized team dashboards. It parses millions of customer interactions per hour, compiling them into sleek interactive Heatmaps and cohort reports.",
    tags: ["React 19", "D3.js", "WebSockets", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://example.com/lumina",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Sub-100ms updates via cluster-backed WebSockets",
      "Bespoke, interactive SVG charts designed with custom coordinate transitions",
      "Dynamic data exporting supporting PDF, CSV, and raw JSON packets",
      "Fully responsive responsive canvas rendering optimized for retina displays"
    ]
  },
  {
    id: "spectra-defi",
    title: "Spectra DeFi Interface",
    category: "Web3 / Fintech",
    description: "A dark-ambient, ultra-responsive cryptocurrency portfolio tracker and decentralized exchange swap terminal.",
    detailedDescription: "Spectra combines premium custom web3-style dark mode aesthetics with low-latency pricing tickers. It provides interactive trading pairs analysis, asset distribution charting, and simulation tools for decentralized liquidity provision metrics.",
    tags: ["NextJS", "Recharts", "Framer Motion", "Tailwind CSS", "ethers.js"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://example.com/spectra",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Interactive multi-token swapping animations",
      "Dynamic price volatility charts utilizing customized SVG gradients",
      "Cryptographic wallet connection modal with custom state-driven entry curves",
      "Optimized load times under 1.2s using server-side caching mechanics"
    ]
  },
  {
    id: "aither-vr",
    title: "Aither Interactive Portal",
    category: "Interactive Design",
    description: "An immersive, physics-based 3D landing page mimicking interactive wind currents and spatial typography.",
    detailedDescription: "Aither is a commercial interactive showcases demonstrating how physics engines and web canvas layouts can elevate brand storytelling. Built with high-contrast luxury serif headings paired with dense technical monospace elements.",
    tags: ["Three.js", "GSAP", "React Three Fiber", "Web Audio API"],
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://example.com/aither",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Dynamic particle simulation responsive to mouse velocity and screen bounds",
      "Fully immersive ambient background soundscapes using spatial audio oscillators",
      "Framer Motion layout transitions mapping scroll depth directly to particle density",
      "Intelligent fallback layout for devices with hardware acceleration limitations"
    ]
  },
  {
    id: "aurora-cms",
    title: "Aurora Headless CMS client",
    category: "SaaS Tooling",
    description: "A minimalist, hyper-fast publishing dashboard featuring collaborative node trees and a streamlined block editor.",
    detailedDescription: "Aurora is a beautiful client-side content compiler designed for rapid copy management. Emphasizing high performance and distraction-free writing environments, it packages custom drag-and-drop structural components alongside real-time code highlighting engines.",
    tags: ["React", "Zustand", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://example.com/aurora",
    githubUrl: "https://github.com",
    keyFeatures: [
      "Modular drag-and-drop hierarchy engine built directly into local React state",
      "Clean markdown editor rendering beautiful real-time previews",
      "Instant offline availability backed by synchronous Client Storage mirroring",
      "Intelligent asset compressor shrinking images prior to API transportation"
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Full-Stack Engineer",
    company: "Vortex Design Labs",
    location: "San Francisco, CA",
    period: "2024 - Present",
    description: "Spearheading the engineering development of luxury SaaS web platforms and interactive branding experiences.",
    bullets: [
      "Architected and deployed enterprise micro-frontends serving over 1.2M daily active visitors.",
      "Established core UI component libraries, reducing frontend development sprint cycles by 40%.",
      "Integrated GPU-accelerated canvas components, delivering heavy data structures at stable 60fps rates",
      "Mentored a team of 8 junior/mid-level React developers on advanced state management and animation practices."
    ],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Senior Interactive Developer",
    company: "Synthesia Software",
    location: "New York, NY",
    period: "2021 - 2024",
    description: "Crafted complex data-driven animations and client dashboard frameworks under strict pixel-perfect specifications.",
    bullets: [
      "Constructed client dashboards incorporating real-time charting pipelines and custom filter suites.",
      "Supercharged Core Web Vitals across 15 flagship client portals, boosting bounce rates by 22%.",
      "Authored custom animation handlers mimicking friction-based physical momentum in multi-platform wrappers.",
      "Coordinated with UI design researchers to migrate static Figma designs into responsive design tokens."
    ],
    type: "work"
  },
  {
    id: "exp-3",
    role: "Master of Science in Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    period: "2019 - 2021",
    description: "Specialized in Human-Computer Interaction (HCI) and Graphics Systems optimization.",
    bullets: [
      "Completed advanced research in mouse/touch velocity input filtering algorithms.",
      "Graduated with honors. Thesis: Adaptive typography sizing in immersive responsive mediums."
    ],
    type: "education"
  },
  {
    id: "exp-4",
    role: "Bachelor of Science in Software Engineering",
    company: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    period: "2015 - 2019",
    description: "Studied fundamental software engineering systems, database normalization, and visual layouts.",
    bullets: [
      "Summa Cum Laude. Acted as Lead Coordinator for the Visual Media and Animation student guild.",
      "Developed several open-source community libraries for layout automation."
    ],
    type: "education"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-project-a-arch",
    title: "Project A Certified Platform Architect",
    issuer: "Project A Systems",
    date: "2026",
    credentialId: "PRJA-ARCH-7731",
    link: "#"
  },
  {
    id: "cert-project-a-sec",
    title: "Project A Infrastructure & Security Specialist",
    issuer: "Project A Systems",
    date: "2025",
    credentialId: "PRJA-SEC-8921",
    link: "#"
  },
  {
    id: "cert-1",
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "GCP-PCA-9831",
    link: "#"
  },
  {
    id: "cert-2",
    title: "Advanced React & Interactive Systems Specialist",
    issuer: "Frontend Masters",
    date: "2024",
    credentialId: "FM-ARIS-449",
    link: "#"
  },
  {
    id: "cert-3",
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAP-2287",
    link: "#"
  }
];
