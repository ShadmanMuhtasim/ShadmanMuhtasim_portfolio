import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Layers, FolderGit2, Globe } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Body scroll-lock & Escape key handler
  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 dark:bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()} // Prevent backdrop click from inside modal
          className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="pr-10 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                <FolderGit2 className="w-3.5 h-3.5" />
                {project.context || 'Featured Project'}
              </span>
              {project.role && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  {project.role}
                </span>
              )}
            </div>

            <h3
              id="modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-1"
            >
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-sky-600 dark:text-sky-400">
              {project.subtitle}
            </p>
          </div>

          {/* Summary */}
          <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-800 text-sm sm:text-base text-slate-700 dark:text-zinc-300">
            {project.summary}
          </div>

          {/* Architectural Breakdown & Key Bullets */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-sky-500" />
              <span>Architectural Breakdown & Implementation Details</span>
            </h4>
            <ul className="space-y-3">
              {project.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400 mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-500" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-zinc-800">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 shadow-sm hover:shadow transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span>Live View</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  project.liveUrl
                    ? 'text-slate-700 dark:text-zinc-200 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 border border-slate-200/80 dark:border-zinc-700/80'
                    : 'text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 shadow-sm'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
