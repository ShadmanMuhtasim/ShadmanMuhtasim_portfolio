export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  context?: string;
  stack: string[];
  summary: string;
  bullets: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
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
  coursework: string[];
}

export interface LanguageProficiency {
  language: string;
  level: string;
}
