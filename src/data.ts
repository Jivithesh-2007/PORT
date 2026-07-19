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

export const projects: Project[] = [
  {
    id: "quiz-app",
    title: "Interactive Quiz Application",
    category: "Frontend",
    description: "A simple web-based quiz application with multiple choice questions and score tracking.",
    detailedDescription: "Built a responsive quiz application using HTML, CSS, and JavaScript. Features include multiple choice questions, real-time score calculation, timer functionality, and result display. This project helped me understand DOM manipulation and event handling in JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "DOM", "LocalStorage", "Responsive"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Multiple choice questions with instant feedback",
      "Timer functionality with automatic submission",
      "Score calculation and percentage display",
      "Local storage to save high scores"
    ]
  },
  {
    id: "todo-list",
    title: "To-Do List Manager",
    category: "Frontend",
    description: "A dynamic to-do list application for managing daily tasks with add, edit, and delete functionality.",
    detailedDescription: "Created a task management application using vanilla JavaScript and CSS. Users can add new tasks, mark them as complete, edit existing tasks, and delete completed ones. The app uses browser local storage to persist data between sessions.",
    tags: ["HTML", "CSS", "JavaScript", "CRUD", "LocalStorage", "TaskManager"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Add, edit, and delete tasks dynamically",
      "Mark tasks as completed with visual feedback",
      "Filter tasks by status (all, active, completed)",
      "Data persistence using browser local storage"
    ]
  },
  {
    id: "weather-app",
    title: "Weather Information App",
    category: "Frontend",
    description: "A weather application that displays current weather information using external API.",
    detailedDescription: "Developed a weather app that fetches real-time weather data from a public API. Users can search for weather information by city name. The application displays temperature, humidity, weather conditions, and a 5-day forecast with a clean, user-friendly interface.",
    tags: ["HTML", "CSS", "JavaScript", "API", "JSON", "AsyncAwait"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Real-time weather data from external API",
      "City-based weather search functionality",
      "5-day weather forecast display",
      "Responsive design for mobile and desktop"
    ]
  },
  {
    id: "calculator",
    title: "Scientific Calculator",
    category: "Frontend",
    description: "A fully functional calculator with basic and scientific operations.",
    detailedDescription: "Built a comprehensive calculator application using HTML, CSS, and JavaScript. Includes basic arithmetic operations, scientific functions like trigonometry, logarithms, and memory functions. Features a clean interface mimicking real calculator design.",
    tags: ["HTML", "CSS", "JavaScript", "Math", "Events", "UI"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Basic arithmetic operations (+, -, *, /)",
      "Scientific functions (sin, cos, tan, log)",
      "Memory functions (store, recall, clear)",
      "Keyboard support for easier input"
    ]
  },
  {
    id: "student-portal",
    title: "Student Information Portal",
    category: "Fullstack",
    description: "A simple student management system with basic CRUD operations.",
    detailedDescription: "Created a student information management system using Node.js, Express, and MongoDB. Features include student registration, profile management, and basic academic record keeping. This project introduced me to backend development and database operations.",
    tags: ["NodeJS", "Express", "MongoDB", "CRUD", "REST", "EJS"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Student registration and profile management",
      "Basic academic record storage",
      "Search and filter functionality",
      "Simple authentication system"
    ]
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Frontend",
    description: "A responsive portfolio website to showcase projects and skills.",
    detailedDescription: "Designed and developed a personal portfolio website using modern web technologies. Features include project showcase, skills section, contact form, and responsive design. This project demonstrates my understanding of modern web development practices.",
    tags: ["React", "CSS", "JavaScript", "Responsive", "Portfolio", "Modern"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Modern, responsive design",
      "Interactive project showcase",
      "Skills and experience sections",
      "Contact form with validation"
    ]
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    category: "Frontend",
    description: "An application to track daily expenses with categorization and basic analytics.",
    detailedDescription: "Built an expense tracking application that helps users monitor their spending habits. Features include expense categorization, monthly summaries, and simple charts to visualize spending patterns. Data is stored locally in the browser.",
    tags: ["HTML", "CSS", "JavaScript", "Charts", "LocalStorage", "Analytics"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Add and categorize expenses",
      "Monthly spending summaries",
      "Simple charts for expense visualization",
      "Budget setting and tracking"
    ]
  },
  {
    id: "basic-blog",
    title: "Simple Blog Platform",
    category: "Fullstack",
    description: "A basic blog platform with post creation, editing, and comment functionality.",
    detailedDescription: "Developed a simple blog platform using Node.js and Express with file-based data storage. Users can create, edit, and delete blog posts. Includes a basic comment system and simple user authentication for admin functions.",
    tags: ["NodeJS", "Express", "FileSystem", "EJS", "Blog", "CRUD"],
    image: "",
    liveUrl: "",
    githubUrl: "#",
    keyFeatures: [
      "Create, edit, and delete blog posts",
      "Basic comment system for posts",
      "Simple admin authentication",
      "File-based data storage system"
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
