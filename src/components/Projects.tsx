import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, FolderGit2, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projects';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-slate-200/80 dark:border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading & Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">03.</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                Featured Projects
              </h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              A selection of systems and applications I&apos;ve engineered.
            </p>
          </div>

          {/* Carousel Arrow Navigation */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous project slide"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next project slide"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400 disabled:opacity-35 disabled:cursor-not-allowed transition-all shadow-2xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Sliding Track Container */}
        <div className="relative">
          <motion.div
            drag={itemsPerView === 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -40 && currentIndex < maxIndex) {
                handleNext();
              } else if (info.offset.x > 40 && currentIndex > 0) {
                handlePrev();
              }
            }}
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="shrink-0 transition-all duration-300"
                style={{
                  width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * (24 / itemsPerView)}px)`,
                }}
              >
                <div className="group h-full flex flex-col justify-between bg-white/80 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900/80 border border-slate-200/90 dark:border-zinc-800/80 hover:border-sky-500/50 dark:hover:border-sky-500/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl dark:hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.15)]">
                  <div>
                    {/* Top Row: Context Badge & External Link */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[180px]">{project.context || 'Featured'}</span>
                      </span>

                      <div className="flex items-center gap-1">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live view`}
                            className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-5 min-h-[3.5rem]">
                      {project.tagline || project.summary}
                    </p>

                    {/* Surface Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {(project.surfaceStack || project.stack.slice(0, 5)).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-750/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800/70">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                        >
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <span>Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'w-7 bg-sky-500'
                  : 'w-2 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400 dark:hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};


