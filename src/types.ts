export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  dribbble?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  tagline: string;
  avatar: string;
  resumeUrl: string;
  socials: SocialLinks;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  iconName: string; // corresponds to Lucide icon string
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: 'work' | 'education';
  bullets: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}
