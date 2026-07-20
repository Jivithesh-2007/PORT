import { PersonalInfo, Project, SkillGroup, ExperienceItem, Certification } from './types';
// Use public directory for reliable asset loading
const avatarImg = '/avatar.png';

export const personalInfo: PersonalInfo = {
  name: "Jivithesh A S",
  role: "Computer Science Student & Web Development Enthusiast",
  tagline: "Building web applications and exploring programming concepts as a 2nd-year CSE student.",
  bio: "I am a 2nd-year Computer Science and Engineering student at Karunya Institute of Technology & Sciences, passionate about web development, programming, and learning new technologies through hands-on projects.",
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
    category: "Frontend Development",
    skills: [
      { name: "HTML & CSS", level: 85, iconName: "Cpu" },
      { name: "JavaScript", level: 78, iconName: "Shield" },
      { name: "React Basics", level: 65, iconName: "Palette" },
      { name: "Responsive Design", level: 80, iconName: "Sparkles" },
      { name: "Bootstrap/Tailwind", level: 70, iconName: "Box" }
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js Basics", level: 60, iconName: "Server" },
      { name: "Express.js", level: 55, iconName: "GitMerge" },
      { name: "MySQL/MongoDB", level: 65, iconName: "Database" },
      { name: "Git & GitHub", level: 75, iconName: "Terminal" },
      { name: "REST APIs", level: 50, iconName: "Cloud" }
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C Programming", level: 90, iconName: "Bot" },
      { name: "Python Basics", level: 70, iconName: "Brain" },
      { name: "Java Fundamentals", level: 60, iconName: "Eye" },
      { name: "Data Structures", level: 75, iconName: "BarChart" },
      { name: "Algorithm Basics", level: 65, iconName: "TrendingUp" }
    ]
  },
  {
    category: "Learning & Tools",
    skills: [
      { name: "Problem Solving", level: 80, iconName: "Layout" },
      { name: "Debugging", level: 75, iconName: "Type" },
      { name: "Version Control", level: 70, iconName: "Activity" },
      { name: "Basic Linux", level: 55, iconName: "Layers" }
    ]
  }
];

// Featured Projects
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
      "Real-time telemetry streaming and remote mission execution dashboard optimized for Raspberry Pi hardware"
    ]
  },
  {
    id: "backbenchers",
    title: "BackBenchers – EdTech Quiz Platform",
    category: "Fullstack",
    description: "Innovative web-based quiz platform transforming traditional learning into a gamified experience.",
    detailedDescription: "BackBenchers is a highly immersive, interactive, and gamified web-based education platform. It features 15 progressive skill levels that dynamically unlock only when achieving an 80%+ scoring threshold. Complete with custom personalized student dashboards, real-time leaderboard states, and instantly generated custom digital certificates, the platform uses canvas animations for full sensory response loops.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas API", "LocalStorage", "React", "EdTech", "Gamification"],
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
    tags: ["JavaScript", "ES6+", "HTML5", "CSS3", "Collaborative Filtering", "Data Structures", "Algorithms"],
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
  },
  {
    id: "echoverge",
    title: "Echoverge – AI-Driven Stress Detection System",
    category: "AI & Robotics",
    description: "Production-ready SaaS platform for real-time emotional stress detection using advanced acoustic analysis.",
    detailedDescription: "Echoverge is a cutting-edge SaaS platform that leverages advanced AI and acoustic analysis to detect emotional distress in real-time through voice monitoring. Built with a privacy-first architecture and ethical AI principles, it provides automatic emergency response capabilities including SMS notifications, location sharing, and audio recording. The platform integrates Google Maps for location services and includes comprehensive emergency contact management supporting up to 5 contacts. Stress probability is scored on a 0-100 scale with three distinct risk levels (Low, Moderate, High), enabling immediate intervention when needed.",
    tags: ["AI", "ML", "Audio Processing", "Voice Analysis", "SaaS", "Emergency Response", "Women's Safety", "Privacy-First", "Real-Time Analysis", "Google Maps API"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Real-Time Voice Monitoring with low-latency processing and continuous analysis",
      "Acoustic Feature Extraction using advanced signal processing (Pitch, MFCC, Energy, Breathing)",
      "Stress Probability Scoring (0-100 scale) with 3 risk levels (Safe, Alert, Emergency)",
      "Emergency Contact Management supporting up to 5 trusted emergency contacts",
      "Automatic Emergency Response with SMS notifications, location sharing, and audio recording",
      "Google Maps Integration for precise real-time location services and tracking",
      "Privacy-First Architecture with all data stored locally in browser LocalStorage",
      "Ethical AI implementation trained on RAVDESS and SAVEE datasets for fairness"
    ]
  },
  {
    id: "serp-oracle",
    title: "SERP Oracle – SEO Analyzer & SERP Rank Tracker",
    category: "AI & Robotics",
    description: "Advanced SEO analysis platform providing real-time SERP rankings, keyword optimization, and competitive intelligence.",
    detailedDescription: "SERP Oracle is a comprehensive SEO analytics platform designed for digital marketers and SEO professionals. It provides real-time SERP (Search Engine Results Page) rankings, keyword performance tracking, competitive analysis, and actionable optimization recommendations. Built with advanced ML algorithms, it analyzes search patterns, identifies ranking opportunities, and provides data-driven insights for improving search visibility. The platform integrates with major search engines and provides automated reporting with trend analysis.",
    tags: ["AI", "ML", "SEO", "Web Scraping", "Data Analysis", "Real-Time Tracking", "Competitive Analysis", "Natural Language Processing", "Analytics", "API Integration"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Real-Time SERP Rank Tracking with automated daily updates across multiple keywords",
      "Advanced Keyword Research with search volume, difficulty scores, and trend analysis",
      "Competitive Intelligence providing competitor keyword rankings and strategy analysis",
      "ML-Powered Optimization Recommendations based on top-ranking competitor analysis",
      "Backlink Analysis and monitoring for domain authority tracking",
      "Performance Analytics with visual dashboards and detailed reporting",
      "Automated Alert System for significant ranking changes and opportunities",
      "Multi-Search Engine Support (Google, Bing, Yahoo) with localized results"
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "exp-karunya",
    role: "B.Tech – Computer Science & Engineering",
    company: "Karunya Institute of Technology and Sciences",
    location: "Coimbatore, Tamil Nadu",
    period: "Jun 2025 – Jun 2029",
    description: "Currently pursuing undergraduate degree in Computer Science and Engineering. Focused on building strong fundamentals in programming, data structures, and web development.",
    bullets: [
      "Academic Performance: CGPA of 9.32",
      "Learning core subjects: C Programming, Data Structures, Web Technologies",
      "Participating in coding competitions and hackathons"
    ],
    type: "education"
  },
  {
    id: "exp-training-hub",
    role: "Student Trainee",
    company: "IT Training Hub – Karunya University",
    location: "Coimbatore, Tamil Nadu",
    period: "2025 – Present",
    description: "Participating in additional training programs to enhance practical programming skills and industry knowledge.",
    bullets: [
      "Learning industry-relevant technologies through hands-on projects",
      "Working on real-world programming challenges with faculty guidance"
    ],
    type: "work"
  },
  {
    id: "exp-codtech",
    role: "Web Development Intern",
    company: "CODTECH IT SOLUTIONS",
    location: "Coimbatore, TN (Remote)",
    period: "Sep 2025 – Oct 2025",
    description: "Gained hands-on experience in front-end web development, working with HTML, CSS, and JavaScript to build responsive websites.",
    bullets: [
      "Learned to create responsive web interfaces using HTML, CSS, and JavaScript",
      "Assisted in building basic web applications and understanding development workflows",
      "Gained experience with version control and project collaboration"
    ],
    type: "work"
  },
  {
    id: "exp-codec",
    role: "Web Development Intern",
    company: "Codec Technologies India",
    location: "Coimbatore, TN (Remote)",
    period: "Nov 2025 – Jan 2026",
    description: "Working as a trainee in full-stack web development, learning both frontend and backend technologies in a startup environment.",
    bullets: [
      "Learning React.js for frontend development and Node.js for backend",
      "Understanding database concepts and API integration",
      "Collaborating with team members in an agile development environment"
    ],
    type: "work"
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
