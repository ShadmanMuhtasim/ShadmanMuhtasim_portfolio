import { skillsList } from '../data/skills';
import { useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { SkillCategoryType } from '../types';
import { SectionHeader } from './SectionHeader';
import '../styles/skills.css';

const skillGroups: { category: SkillCategoryType; title: string }[] = [
  { category: 'Backend', title: 'Backend & APIs' },
  { category: 'Frontend', title: 'Frontend' },
  { category: 'Languages', title: 'Programming languages' },
  { category: 'Databases', title: 'Databases & ORM' },
  { category: 'AI/LLM', title: 'AI / LLM' },
  { category: 'Tools', title: 'Tools, DevOps & testing' },
];

const filters = [
  { category: 'All', title: 'All', count: skillsList.length },
  ...skillGroups.map((group) => ({
    ...group,
    count: skillsList.filter((skill) => skill.category === group.category).length,
  })),
];

function SkillGroup({ category, title, reveal }: { category: SkillCategoryType; title: string; reveal: boolean }) {
  return (
    <div className="skill-group" data-reveal={reveal ? '' : undefined}>
      <h3>{title}</h3>
      <ul className="skill-list">
        {skillsList.filter((skill) => skill.category === category).map((skill) => (
          <li className="skill-chip" key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}

export function TechnicalSkills() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % filters.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + filters.length) % filters.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = filters.length - 1;
    else return;

    event.preventDefault();
    setSelectedFilter(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="skills" className="page-section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeader
          number="02"
          title="Skills & Technologies"
          description="Technologies I use to build backend services, full-stack systems, and AI applications."
          id="skills-heading"
        />
        <div className="skills-tabs" role="tablist" aria-label="Filter skills by category" aria-orientation="horizontal">
          {filters.map((filter, index) => (
            <button
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              className="skills-tab"
              id={`${id}-tab-${index}`}
              aria-controls={`${id}-panel-${index}`}
              aria-selected={selectedFilter === index}
              tabIndex={selectedFilter === index ? 0 : -1}
              onClick={() => setSelectedFilter(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              key={filter.category}
            >
              <span>{filter.title}</span>
              <span className="skills-tab-count">{filter.count}</span>
            </button>
          ))}
        </div>
        <div className="skills-panels">
          {filters.map((filter, index) => {
            const active = selectedFilter === index;
            return (
              <div
                className="skills-panel"
                role="tabpanel"
                id={`${id}-panel-${index}`}
                aria-labelledby={`${id}-tab-${index}`}
                aria-hidden={!active}
                inert={!active}
                tabIndex={active ? 0 : -1}
                data-active={active}
                key={filter.category}
              >
                <div className="skills-grid">
                  {skillGroups
                    .filter((group) => filter.category === 'All' || group.category === filter.category)
                    .map((group) => <SkillGroup key={group.category} {...group} reveal={filter.category === 'All'} />)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
