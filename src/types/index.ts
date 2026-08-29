export interface Project {
  id: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  problem: string;
  solution: string;
  architecture: string;
  impact?: string;
  techStack: string[];
  githubUrl: string;
  category: 'vision' | 'ml' | 'app';
  icon: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  location: string;
  year: string;
  badge: string;
  image: string;
  summary: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'internship' | 'education';
  highlights: string[];
  skills: string[];
}

export interface BoundingBox {
  id: string;
  label: string;
  confidence: number;
  color: string;
  x: number; // percentage
  y: number; // percentage
  w: number; // percentage
  h: number; // percentage
}
