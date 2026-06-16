import { PersonalInfo, Project, SkillGroup, ExperienceItem, Certification } from './types';
// Use public directory for reliable asset loading
const avatarImg = '/avatar.png';

export const personalInfo: PersonalInfo = {
  name: "Jivithesh A S",
  role: "Full Stack Developer & Robotics Enthusiast",
  tagline: "Engineering intelligent full-stack software architectures & autonomous robotic systems.",
  bio: "I am an undergraduate Computer Science and Engineering student at Karunya Institute of Technology & Sciences, passionate about software development, AI/ML, and building autonomous intelligent systems.",
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
    id: "nivibot",
    title: "NIVIBOT – Autonomous Underwater Robot",
    category: "AI & Robotics",
    description: "Autonomous underwater robotic system capable of intelligent navigation and obstacle avoidance.",
    detailedDescription: "NIVIBOT is an autonomous underwater robotic system engineered with an embedded-first approach. It integrates machine learning-based obstacle classification with the A* path planning algorithm to compute dynamically optimal routes in real-time. Capable of intelligent navigation and obstacle avoidance, the core software maintains high-velocity streaming logs and provides fluid real-time web telemetry and mission execution visualizers directly connected to Raspberry Pi sensors.",
    tags: ["Python", "Machine Learning", "Decision Trees", "A* Algorithm", "OpenCV", "NumPy", "Raspberry Pi", "Robotics"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Embedded-first route computations running node classifications at 30+ frames/sec",
      "Machine learning obstacle classification utilizing customized decision trees and OpenCV visual matching",
      "High-accuracy spatial path planning dynamically computed via an optimized multi-dimensional A* algorithm",
      "Real-time telemetry streaming and remote mission execution dashboard optimized for Raspberry Pi hardware wrappers"
    ]
  },
  {
    id: "backbenchers",
    title: "BackBenchers – EdTech Quiz Platform",
    category: "Fullstack",
    description: "Innovative web-based quiz platform transforming traditional learning into a gamified experience.",
    detailedDescription: "BackBenchers is a highly immersive, interactive, and gamified web-based education platform. It features 15 progressive skill levels that dynamically unlock only when achieving an 80%+ scoring threshold. Complete with custom personalized student dashboards, real-time leaderboard states, and instantly generated custom digital certificates, the platform uses canvas animations for full sensory response loops.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API", "LocalStorage", "React"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "15 progressive gamified levels with score-locked eligibility checks (80%+ passing criteria)",
      "Personalized student user dashboards tracking milestone histories offline via secure LocalStorage synchronization",
      "Fluid real-time leaderboard simulation using custom canvas-based particle acceleration physics",
      "Automatic digital certificate generator compiling dynamic PDF/SVG credentials upon level completion"
    ]
  },
  {
    id: "recommendation-engine",
    title: "Personalized Recommendation Engine",
    category: "AI & Algorithmic",
    description: "Recommendation engine inspired by Netflix and Amazon calculating real-time preference matches.",
    detailedDescription: "Inspired by best-in-class solutions like Netflix and Amazon, this recommendation system uses a weighted collaborative filtering engine. It performs real-time computation of user-product affinity scores (0–100%) against key dimensions: preference alignment (40%), budget fit (30%), and product quality (30%). Optimized to compile lists in milliseconds over complex multi-axis matrix structures.",
    tags: ["JavaScript (ES6+)", "HTML5", "CSS3", "Collaborative Filtering", "Data Structures", "Algorithms"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Custom collaborative filtering algorithm tracking user behavioral dimensions in local storage matrices",
      "Real-time affinity score computation using a strict 40/30/30 weighted metric system",
      "Sub-millisecond item indexing and list sorting designed around optimized Big-O spatial representations",
      "Fluid interactive preferences dashboard visually adapting its shape based on matching confidence"
    ]
  },
  {
    id: "ai-education-platform",
    title: "AI-Powered Education Platform",
    category: "Fullstack",
    description: "Full-stack AI-education platform generating personalized learning plans based on goals and skills.",
    detailedDescription: "A comprehensive full-stack educational ecosystem that compiles customized structural study plans based on individual career goals, entry-level skills, and hourly schedules. Features a resilient RESTful backend architecture mapping metadata across 1,200+ resources inspired by Coursera and Udemy, with detailed progress panels.",
    tags: ["Node.js", "Express.js", "HTML5", "CSS3", "JavaScript", "REST API", "AI/ML Concepts"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Dynamic curriculum path compiler generating milestone-based milestones matching hour availability",
      "Robust REST API routes handling mock structures for 1,200+ online courses and resources",
      "Custom progress tracking dashboards with fluid indicator bars displaying chapter completions",
      "Streamlined study planners featuring full offline fallback support for client interactions"
    ]
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone – UI Replication",
    category: "Frontend",
    description: "Front-end UI replication of the YouTube homepage focusing on pixel-perfect alignment.",
    detailedDescription: "An exquisite high-fidelity front-end replica of the YouTube desktop homepage layout built completely without external design frameworks. Designed to prove advanced knowledge of standard CSS specifications, managing complex grid cards, flexible side rails, and top headers using absolute positioning, Flexbox, and CSS Grid.",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "JavaScript"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Hyper-precise desktop replication with pixel-perfect responsive column breaking (CSS Grid)",
      "Dynamic hover states featuring quick-scale overlays simulating modern video player outlines",
      "Fully collapsible sidebar options shifting gracefully between compact and expansive visual forms",
      "Lightweight, fluid DOM rendering with zero reliance on external helper styles or layouts"
    ]
  },
  {
    id: "ai-neural-core",
    title: "AI Neural Core – Deep Learning",
    category: "AI & Algorithmic",
    description: "Advanced machine learning implementation exploring neural networks and deep learning architectures.",
    detailedDescription: "A deep technical training implementation exploring custom neural network layers and model optimization techniques. Features performance analytics pipelines modeling linear data classification and complex regression tasks.",
    tags: ["Python", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "Jupyter"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Customizable training pipelines tracking metrics such as loss and validation accuracy per epoch",
      "Clean numerical pipelines parsing and standardizing large data streams utilizing NumPy & Pandas",
      "Interactive metrics graphs visualizing neural classification layers alongside regression models"
    ]
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone – E-Commerce Platform",
    category: "Fullstack",
    description: "Full-stack e-commerce application replicating Amazon's core functionality.",
    detailedDescription: "A responsive, robust full-stack replication of Amazon's core transactional pathways. Centering comprehensive user features including product search and sorting, persistent shopping carts, structured checkout pipelines, JWT-based user authentication, and visual order history tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT Auth"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "A fully functional checkout stream simulating secure transaction processing (Stripe integration)",
      "State-driven shopping cart component synchronizing quantities instantly on product updates",
      "Secure token-based user sessions verified by active JSON Web Token (JWT) strategies",
      "Responsive catalog layouts adapting seamlessly to fluid smartphone and ultra-wide monitor views"
    ]
  },
  {
    id: "quiz-master",
    title: "Quiz Master – Interactive Quiz Application",
    category: "Frontend",
    description: "Interactive quiz platform with dynamic question generation, scoring, and analytics.",
    detailedDescription: "A responsive client-side quiz application equipped with dynamic question generation, real-time timer counters, and in-depth performance analytics. Tailored for multiple academic categories and customizable difficulty stages, matching leaderboard elements.",
    tags: ["React", "Redux", "HTML5", "CSS3", "JavaScript", "REST API"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Robust global state architecture utilizing Redux to track quiz attempts and timed responses",
      "Dynamic analytics charts summing correct outputs, time metrics, and performance distributions",
      "Responsive visual micro-layouts highlighting rapid feedback animations for answered states"
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-codec",
    role: "Internship Trainee",
    company: "Codec Technologies India",
    location: "Coimbatore, TN (Remote)",
    period: "Nov 2025 – Jan 2026",
    description: "Serving as a Full Stack Development Intern focusing on real-world web application development.",
    bullets: [
      "Gaining hands-on experience with HTML, CSS, JavaScript, React.js, Node.js, and databases.",
      "Enhancing skills in frontend design, backend logic, API integration, and project deployment.",
      "Collaborating with a dynamic team in a startup environment to deliver innovative solutions."
    ],
    type: "work"
  },
  {
    id: "exp-codtech",
    role: "Internship Trainee",
    company: "CODTECH IT SOLUTIONS",
    location: "Coimbatore, TN (Remote)",
    period: "Sep 2025 – Oct 2025",
    description: "Developed engaging front-end interfaces using HTML, CSS, and JavaScript to enhance user experience.",
    bullets: [
      "Assisted in building backend logic and integrating APIs to support application functionality.",
      "Gained hands-on experience with project structure, version control, and deployment processes.",
      "Collaborated with team members to understand and implement real-world software workflows."
    ],
    type: "work"
  },
  {
    id: "exp-training-hub",
    role: "Trainee",
    company: "IT Training Hub – Karunya University",
    location: "Coimbatore, Tamil Nadu",
    period: "2025 – Present",
    description: "Enrolled in the IT Training Hub program at Karunya Institute of Technology and Sciences.",
    bullets: [
      "Developing industry-relevant technical skills through structured training and hands-on lab sessions.",
      "Working on real-world problem statements with guidance from experienced faculty and mentors."
    ],
    type: "work"
  },
  {
    id: "exp-karunya",
    role: "B.Tech – Computer Science & Engineering",
    company: "Karunya Institute of Technology and Sciences",
    location: "Coimbatore, Tamil Nadu",
    period: "Jun 2025 – Jun 2029",
    description: "Undergraduate student in Computer Science and Engineering, driven by a passion for software development and emerging technologies. Continuously building expertise in full-stack development, C programming, and problem-solving, while striving to achieve top academic and technical performance.",
    bullets: [
      "Academic Performance: Outstanding CGPA of 9.32",
      "Proactively learning comprehensive full-stack paradigms, software logic flow, and system programming."
    ],
    type: "education"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Claude AI for Beginners: A Simple Guide to Getting Started",
    issuer: "Eduta.org",
    date: "Jun 2026",
    link: "#"
  },
  {
    id: "cert-2",
    title: "Web Development Basics",
    issuer: "IBM",
    date: "May 2026",
    link: "#"
  },
  {
    id: "cert-3",
    title: "Claude 101",
    issuer: "Anthropic",
    date: "May 2026",
    link: "#"
  },
  {
    id: "cert-4",
    title: "Google Cloud Digital Leader",
    issuer: "Google",
    date: "May 2026",
    credentialId: "f9a12b30f3e34ab4811be974b497f8b7",
    link: "#"
  },
  {
    id: "cert-5",
    title: "Cyberops",
    issuer: "Career Craft Academy",
    date: "Mar 2026",
    link: "#"
  },
  {
    id: "cert-6",
    title: "Red Hat System Administration",
    issuer: "Red Hat",
    date: "Mar 2026",
    link: "#"
  },
  {
    id: "cert-7",
    title: "Python Toolbox",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-8",
    title: "Data Types in Python",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-9",
    title: "Intermediate Python for Developers",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-10",
    title: "Python Programming Fundamentals",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-11",
    title: "Introduction to Python for Developers",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-12",
    title: "Git Fundamentals",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-13",
    title: "Advanced Git",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-14",
    title: "Introduction to GitHub Concepts",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-15",
    title: "Intermediate Git",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-16",
    title: "Introduction to Git",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-17",
    title: "MATLAB Onramp",
    issuer: "MATLAB@UCL",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-18",
    title: "RoboFest Gujarat 5.0 – Ideation & Proof of Concept",
    issuer: "Government of Gujarat",
    date: "Dec 2025",
    link: "#"
  },
  {
    id: "cert-19",
    title: "Python For Beginners",
    issuer: "Simplilearn",
    date: "Jan 2026",
    link: "#"
  },
  {
    id: "cert-20",
    title: "Gemini Certified Student",
    issuer: "Google",
    date: "Dec 2025",
    link: "#"
  },
  {
    id: "cert-21",
    title: "Introduction To Generative AI Studio",
    issuer: "Simplilearn",
    date: "Dec 2025",
    link: "#"
  },
  {
    id: "cert-22",
    title: "Introduction to Prompt Engineering with GitHub Copilot",
    issuer: "Simplilearn",
    date: "Dec 2025",
    link: "#"
  },
  {
    id: "cert-23",
    title: "MindSync",
    issuer: "IEEE Computer Society",
    date: "Sep 2025",
    link: "#"
  },
  {
    id: "cert-24",
    title: "Introduction To Modern AI",
    issuer: "Cisco",
    date: "Nov 2025",
    link: "#"
  },
  {
    id: "cert-25",
    title: "Python Essentials 1",
    issuer: "Cisco",
    date: "Nov 2025",
    link: "#"
  },
  {
    id: "cert-26",
    title: "Javascript Essentials 1",
    issuer: "Cisco",
    date: "Nov 2025",
    link: "#"
  },
  {
    id: "cert-27",
    title: "Introduction To Prompt Engineering Using Copilot",
    issuer: "Microsoft",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-28",
    title: "Introduction To Generative AI Studio",
    issuer: "Google Cloud Skills Boost",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-29",
    title: "Internship On C Programming",
    issuer: "CODTECH IT SOLUTIONS",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-30",
    title: "Gemini Art Forge",
    issuer: "Google Cloud Skills Boost",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-31",
    title: "Digital Campus 2.0 Hacksprint",
    issuer: "CSE Karunya",
    date: "Oct 2025",
    credentialId: "G-K_Hacks_2025_1352",
    link: "#"
  },
  {
    id: "cert-32",
    title: "CSS Basics",
    issuer: "HackerRank",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-33",
    title: "Introduction to Copilot for Startups",
    issuer: "Microsoft",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-34",
    title: "Introduction To Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-35",
    title: "C Programming Basics",
    issuer: "Simplilearn",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-36",
    title: "OpenCV Bootcamp",
    issuer: "OpenCV University",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-37",
    title: "Python For Beginners",
    issuer: "OpenCV University",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-38",
    title: "AI APPRECIATE",
    issuer: "Intel",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-39",
    title: "AI AWARE",
    issuer: "Intel",
    date: "Oct 2025",
    link: "#"
  },
  {
    id: "cert-40",
    title: "CSS Essentials",
    issuer: "Cisco",
    date: "Sep 2025",
    link: "#"
  },
  {
    id: "cert-41",
    title: "HTML Essentials",
    issuer: "Cisco",
    date: "Sep 2025",
    link: "#"
  },
  {
    id: "cert-42",
    title: "Introduction to Artificial Intelligence",
    issuer: "University of Helsinki",
    date: "Aug 2025",
    link: "#"
  },
  {
    id: "cert-43",
    title: "Python",
    issuer: "Kaggle",
    date: "Aug 2025",
    link: "#"
  },
  {
    id: "cert-44",
    title: "Intro To Programming",
    issuer: "Kaggle",
    date: "Aug 2025",
    link: "#"
  },
  {
    id: "cert-45",
    title: "Intro To Machine Learning",
    issuer: "Kaggle",
    date: "Aug 2025",
    link: "#"
  },
  {
    id: "cert-46",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2025",
    link: "#"
  }
];
