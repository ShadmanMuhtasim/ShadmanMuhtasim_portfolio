import { skillsList } from '../data/skills';
import type { SkillCategoryType } from '../types';
import { SectionHeader } from './SectionHeader';

const skillGroups: { category: SkillCategoryType; title: string }[] = [
  { category: 'Backend', title: 'Backend & APIs' },
  { category: 'Frontend', title: 'Frontend' },
  { category: 'Languages', title: 'Programming languages' },
  { category: 'Databases', title: 'Databases & ORM' },
  { category: 'AI/LLM', title: 'AI / LLM' },
  { category: 'Tools', title: 'Tools, DevOps & testing' },
];

export function TechnicalSkills() {
  return (
    <section id="skills" className="page-section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeader
          number="02"
          title="Skills & Technologies"
          description="Technologies I use to build backend services, full-stack systems, and AI applications."
          id="skills-heading"
        />
        <div className="skills-grid">
          {skillGroups.map(({ category, title }) => (
            <div className="skill-group" key={category}>
              <h3>{title}</h3>
              <ul className="skill-list">
                {skillsList.filter((skill) => skill.category === category).map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
