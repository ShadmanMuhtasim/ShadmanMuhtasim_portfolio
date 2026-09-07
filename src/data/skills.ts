import type { SkillItem, EducationInfo, SecondaryEducation, LanguageProficiency } from '../types';

export const skillsList: SkillItem[] = [
  // Programming Languages
  { name: 'C#', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'Java', category: 'Languages' },

  // Backend & APIs
  { name: 'ASP.NET Core', category: 'Backend' },
  { name: '.NET 8', category: 'Backend' },
  { name: 'Entity Framework Core', category: 'Backend' },
  { name: 'ASP.NET Core Identity', category: 'Backend' },
  { name: 'RESTful APIs', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'HTML5 / Modern CSS', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Zustand', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },

  // Databases & ORM
  { name: 'SQL Server', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'SQLite', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'Prisma ORM', category: 'Databases' },

  // AI & LLM Engineering
  { name: 'Gemini API', category: 'AI/LLM' },
  { name: 'Native Tool/Function Calling', category: 'AI/LLM' },
  { name: 'Multi-Provider LLM Integration', category: 'AI/LLM' },
  { name: 'Prompt Engineering', category: 'AI/LLM' },

  // Tools & DevOps & Testing
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Docker Compose', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Linux', category: 'Tools' },
  { name: 'xUnit', category: 'Tools' },
  { name: 'Moq', category: 'Tools' },
  { name: 'Vitest', category: 'Tools' },
];

export const educationData: EducationInfo = {
  institution: 'Ahsanullah University of Science and Technology (AUST)',
  location: 'Dhaka, Bangladesh',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  standing: '6th Semester (2 Semesters Remaining | Expected Graduation: 2027)',
  cgpa: '3.135 / 4.00',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Systems',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence',
    'Software Engineering',
  ],
};

export const secondaryEducationData: SecondaryEducation[] = [
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Birshrestha Noor Mohammad Public College',
    year: '2022',
    gpa: '5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Faizur Rahman Ideal Institute',
    year: '2020',
    gpa: '5.00',
  },
];

export const languagesData: LanguageProficiency[] = [
  { language: 'Bangla', level: 'Native' },
  { language: 'English', level: 'Professional' },
  { language: 'Hindi', level: 'Professional' },
];

