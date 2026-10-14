import { useEffect, useId, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '../types';
import { ProjectDetails } from './ProjectDetails';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function isOutsideDialog(dialog: HTMLDialogElement, clientX: number, clientY: number) {
  const bounds = dialog.getBoundingClientRect();
  return clientX < bounds.left || clientX > bounds.right || clientY < bounds.top || clientY > bounds.bottom;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pointerStartedOutside = useRef(false);
  const titleId = useId();
  const summaryId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const originalWidth = document.documentElement.clientWidth;
    const originalPadding = Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;

    body.style.overflow = 'hidden';
    const scrollbarCompensation = document.documentElement.clientWidth - originalWidth;
    if (scrollbarCompensation > 0) {
      body.style.paddingRight = `${originalPadding + scrollbarCompensation}px`;
    }

    dialog.showModal();
    dialog.scrollTop = 0;
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby={titleId}
      aria-describedby={summaryId}
      onKeyDown={(event) => {
        if (event.key !== 'Tab' || event.altKey || event.ctrlKey || event.metaKey) return;

        const dialog = event.currentTarget;
        const controls = Array.from(dialog.querySelectorAll<HTMLElement>(
          'a[href], button, input, select, textarea, [tabindex], [contenteditable="true"]',
        )).filter((control) => (
          control.tabIndex >= 0 &&
          !control.matches(':disabled') &&
          !control.closest('[inert]') &&
          control.getClientRects().length > 0 &&
          window.getComputedStyle(control).visibility === 'visible'
        ));

        const first = controls[0];
        const last = controls[controls.length - 1];
        const activeControl = document.activeElement;
        if (!first || !last) {
          event.preventDefault();
          return;
        }
        if (event.shiftKey && (activeControl === first || !controls.includes(activeControl as HTMLElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (activeControl === last || !controls.includes(activeControl as HTMLElement))) {
          event.preventDefault();
          first.focus();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onPointerDown={(event) => {
        pointerStartedOutside.current = isOutsideDialog(event.currentTarget, event.clientX, event.clientY);
      }}
      onClick={(event) => {
        if (
          event.target === event.currentTarget &&
          pointerStartedOutside.current &&
          isOutsideDialog(event.currentTarget, event.clientX, event.clientY)
        ) {
          onClose();
        }
        pointerStartedOutside.current = false;
      }}
    >
      {project && (
        <div className="dialog-content">
          <div className="dialog-header">
            <div>
              <p className="eyebrow">{project.context}</p>
              <h2 id={titleId}>{project.title}</h2>
              <p className="muted">{project.subtitle}</p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              className="icon-button dialog-close"
              onClick={onClose}
              aria-label={`Close ${project.title} details`}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <ProjectDetails project={project} summaryId={summaryId} />

          <div className="dialog-actions">
            <a className="button" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              Source on GitHub <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            {project.liveUrl && (
              <a className="button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live demo <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
