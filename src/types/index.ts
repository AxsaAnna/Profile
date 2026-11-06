export type ThemeColor = 'indigo' | 'cyan' | 'emerald' | 'amber' | 'fuchsia';

export interface StatItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'AI & Data' | 'Creative & UI/UX' | 'DevOps & Architecture';
  level: number; // 1 - 100
  years: number;
  highlight?: boolean;
  icon?: string;
  description: string;
}

export interface ProjectCaseStudy {
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'AI / Intelligent Systems' | 'Full-Stack Architecture' | 'Creative Tech / WebGL' | 'Cloud & Systems';
  featured: boolean;
  badge?: string;
  technologies: string[];
  metrics: string[];
  demoUrl?: string;
  repoUrl?: string;
  image: string;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  achievements: string[];
  skillsUsed: string[];
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  verified: boolean;
  linkedInUrl?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'x' | 'discord' | 'email' | 'readcv';
  url: string;
  username: string;
  primary?: boolean;
}

export interface PortfolioProfile {
  name: string;
  title: string;
  headline: string;
  statusBadge: string;
  location: string;
  timezone: string;
  email: string;
  availableForHire: boolean;
  avatarUrl: string;
  bioParagraphs: string[];
  coreValues: { title: string; desc: string; icon: string }[];
  stats: StatItem[];
  socialLinks: SocialLink[];
  skills: SkillItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  testimonials: TestimonialItem[];
}

