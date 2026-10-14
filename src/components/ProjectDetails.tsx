import type { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  summaryId?: string;
  headingLevel?: 3 | 4;
}

export function ProjectDetails({ project, summaryId, headingLevel = 3 }: ProjectDetailsProps) {
  const Heading = headingLevel === 4 ? 'h4' : 'h3';

  return (
    <div className="project-details">
      {project.role && <p className="dialog-role">Role: {project.role}</p>}
      <p id={summaryId} className="muted">{project.summary}</p>
      <div className="dialog-section project-details-section">
        <Heading>Implementation</Heading>
        <ul className="detail-list">
          {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </div>
      <div className="dialog-section project-details-section">
        <Heading>Technology stack</Heading>
        <ul className="project-stack">
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </div>
  );
}
