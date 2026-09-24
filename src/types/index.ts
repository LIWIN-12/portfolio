export type ProjectVisual =
  | 'engagement'
  | 'difference'
  | 'wildlife'
  | 'prediction'
  | 'assistant'
  | 'attendance'
  | 'automation'
  | 'portfolio';

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  contribution: string;
  approach: string;
  workflow: string[];
  outcome: string;
  tech: string[];
  visual: ProjectVisual;
  featured?: boolean;
  repositoryUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface ResearchItem {
  title: string;
  venue: string;
  date: string;
  status: string;
  summary: string;
  evidenceUrl: string;
  topics: string[];
}

export interface JourneyItem {
  title: string;
  organization: string;
  period: string;
  kind: 'project' | 'education';
  description: string;
  highlights: string[];
}
