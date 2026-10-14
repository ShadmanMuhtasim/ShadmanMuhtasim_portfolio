import { useCallback, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return (
    <section id="projects" className="page-section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeader
          number="01"
          title="Selected projects"
          description="Service platforms, learning tools, and collaborative software projects."
          id="projects-heading"
        />

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card" aria-labelledby={`${project.id}-title`}>
              <p className="project-context">{project.context}</p>
              <h3 id={`${project.id}-title`}>{project.title}</h3>
              <p className="project-purpose">{project.subtitle}</p>
              <p className="project-description">{project.tagline}</p>

              <ul className="project-stack" aria-label={`${project.title} technologies`}>
                {project.surfaceStack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-footer">
                <button
                  type="button"
                  className="text-link details-button"
                  onClick={() => setActiveProject(project)}
                  aria-label={`Details for ${project.title}`}
                  aria-haspopup="dialog"
                >
                  Details <ArrowRight size={16} aria-hidden="true" />
                </button>
                <div className="project-links">
                  <a
                    className="text-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source on GitHub (opens in a new tab)`}
                  >
                    Source <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  {project.liveUrl && (
                    <a
                      className="text-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo (opens in a new tab)`}
                    >
                      Live demo <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <ProjectModal project={activeProject} onClose={closeProject} />
    </section>
  );
}
