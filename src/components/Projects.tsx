import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../types';
import { ProjectDetails } from './ProjectDetails';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './SectionHeader';
import '../styles/projects.css';

function nearestPosition(left: number, targets: number[]) {
  return targets.reduce((nearest, target, index) => (
    Math.abs(target - left) < Math.abs(targets[nearest] - left) ? index : nearest
  ), 0);
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [position, setPosition] = useState({ current: 0, total: projects.length, atStart: true, atEnd: false });
  const scrollerRef = useRef<HTMLDivElement>(null);
  const targetsRef = useRef([0]);
  const maxLeftRef = useRef(0);
  const closeProject = useCallback(() => setActiveProject(null), []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let scrollFrame: number | null = null;

    const updatePosition = () => {
      const left = scroller.scrollLeft;
      const next = {
        current: nearestPosition(left, targetsRef.current),
        total: targetsRef.current.length,
        atStart: left <= 1,
        atEnd: maxLeftRef.current - left <= 1,
      };
      setPosition((previous) => (
        previous.current === next.current && previous.total === next.total &&
        previous.atStart === next.atStart && previous.atEnd === next.atEnd ? previous : next
      ));
    };

    const measure = () => {
      const cards = Array.from(scroller.querySelectorAll<HTMLElement>('[data-project-card]'));
      const origin = cards[0]?.offsetLeft ?? 0;
      const maxLeft = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      const targets: number[] = [];
      for (const card of cards) {
        const target = Math.min(maxLeft, Math.max(0, card.offsetLeft - origin));
        if (!targets.length || Math.abs(target - targets[targets.length - 1]) > 1) targets.push(target);
      }
      targetsRef.current = targets.length ? targets : [0];
      maxLeftRef.current = maxLeft;
      updatePosition();
    };

    const onScroll = () => {
      if (scrollFrame !== null) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null;
        updatePosition();
      });
    };

    const observer = new ResizeObserver(measure);
    observer.observe(scroller);
    scroller.querySelectorAll<HTMLElement>('[data-project-card]').forEach((card) => observer.observe(card));
    scroller.addEventListener('scroll', onScroll, { passive: true });
    measure();

    return () => {
      observer.disconnect();
      scroller.removeEventListener('scroll', onScroll);
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  const scrollToPosition = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const targets = targetsRef.current;
    const target = targets[Math.max(0, Math.min(index, targets.length - 1))];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scroller.scrollTo({ left: target, behavior: reducedMotion ? 'instant' : 'smooth' });
  }, []);

  const moveBy = (step: number) => {
    const current = nearestPosition(scrollerRef.current?.scrollLeft ?? 0, targetsRef.current);
    scrollToPosition(current + step);
  };

  const handleScrollerKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveBy(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveBy(1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      scrollToPosition(event.key === 'Home' ? 0 : targetsRef.current.length - 1);
    }
  };

  return (
    <section id="projects" className="page-section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeader
          number="01"
          title="Selected projects"
          description="Service platforms, learning tools, and collaborative software projects."
          id="projects-heading"
        />

        <div className="carousel-controls">
          <p className="carousel-position" aria-live="polite" aria-atomic="true">
            <span className="sr-only">Project position </span>
            {String(position.current + 1).padStart(2, '0')}
            <span aria-hidden="true"> / </span>
            <span className="sr-only"> of </span>
            {String(position.total).padStart(2, '0')}
          </p>
          <div className="carousel-buttons">
            <button
              type="button"
              className="icon-button carousel-button"
              onClick={() => moveBy(-1)}
              disabled={position.atStart}
              aria-label="Previous project"
              aria-controls="project-carousel"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="icon-button carousel-button"
              onClick={() => moveBy(1)}
              disabled={position.atEnd}
              aria-label="Next project"
              aria-controls="project-carousel"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="sr-only" id="project-carousel-help">
          Swipe or scroll to explore projects. With this region focused, use Left and Right arrow keys to move,
          Home for the first position, or End for the last position.
        </p>
        <div
          ref={scrollerRef}
          id="project-carousel"
          className="project-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Selected project cards"
          aria-describedby="project-carousel-help"
          tabIndex={0}
          onKeyDown={handleScrollerKey}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              aria-labelledby={project.id + '-title'}
              aria-roledescription="slide"
              data-project-card
            >
              <p className="project-context">{project.context}</p>
              <h3 id={project.id + '-title'}>{project.title}</h3>
              <p className="project-purpose">{project.subtitle}</p>
              <p className="project-description">{project.tagline}</p>

              <ul className="project-stack" aria-label={project.title + ' technologies'}>
                {project.surfaceStack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>

              <details className="project-fallback">
                <summary>View details</summary>
                <ProjectDetails project={project} headingLevel={4} />
              </details>

              <div className="project-footer">
                <button
                  type="button"
                  className="text-link details-button project-modal-trigger"
                  onClick={() => setActiveProject(project)}
                  aria-label={'View details for ' + project.title}
                  aria-haspopup="dialog"
                >
                  View details <ArrowRight size={16} aria-hidden="true" />
                </button>
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      className="text-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.title + ' live demo (opens in a new tab)'}
                    >
                      Live demo <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    className="text-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={'Code for ' + project.title + ' on GitHub (opens in a new tab)'}
                  >
                    Code <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
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
