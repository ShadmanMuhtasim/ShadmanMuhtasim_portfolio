export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  role?: string;
  context?: string;
  stack: string[];
  surfaceStack: string[];
  summary: string;
  bullets: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export type SkillCategoryType = 'Languages' | 'Backend' | 'Frontend' | 'Databases' | 'AI/LLM' | 'Tools';

export interface SkillItem {
  name: string;
  category: SkillCategoryType;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationInfo {
  institution: string;
  location: string;
  degree: string;
  standing: string;
  cgpa: string;
  coursework?: string[];
}

export interface SecondaryEducation {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
}

export interface LanguageProficiency {
  language: string;
  level: string;
}
