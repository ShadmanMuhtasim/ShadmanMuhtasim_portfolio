import type { SkillCategory, EducationInfo, LanguageProficiency } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend & Frameworks',
    skills: [
      'ASP.NET Core',
      '.NET 8',
      'Entity Framework Core',
      'ASP.NET Core Identity',
      'Laravel',
      'REST APIs',
      'JWT Authentication',
      'FluentValidation',
    ],
  },
  {
    category: 'AI & LLM Engineering',
    skills: [
      'Gemini API',
      'Native Function/Tool Calling',
      'Multi-Provider LLM Integration',
      'Prompt Engineering',
      'Document/OCR Processing',
    ],
  },
  {
    category: 'Languages',
    skills: [
      'C#',
      'TypeScript',
      'JavaScript',
      'SQL',
      'Python',
      'C',
      'C++',
      'Java',
      'PHP',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Vite',
      'Zustand',
      'Axios',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Databases & ORM',
    skills: [
      'SQL Server',
      'MySQL',
      'SQLite',
      'Prisma ORM',
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
      'Docker Compose',
      'Linux',
    ],
  },
  {
    category: 'Testing',
    skills: [
      'xUnit',
      'Moq',
      'Vitest',
    ],
  },
];

export const educationData: EducationInfo = {
  institution: 'Ahsanullah University of Science and Technology (AUST)',
  location: 'Dhaka, Bangladesh',
  degree: 'B.Sc. in Computer Science and Engineering',
  standing: '6th Semester completed (Expected Graduation: 2027)',
  cgpa: '3.135 / 4.00',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Systems',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence',
    'Software Engineering',
    'Information System Design',
  ],
};

export const languagesData: LanguageProficiency[] = [
  { language: 'Bangla', level: 'Native' },
  { language: 'English', level: 'Professional Working Proficiency' },
  { language: 'Hindi', level: 'Professional Working Proficiency' },
];
