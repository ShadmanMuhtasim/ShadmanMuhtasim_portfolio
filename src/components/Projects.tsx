import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, FolderGit2, Globe } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projects';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-slate-200/80 dark:border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Featured Projects
          </h2>
          <div className="h-px bg-slate-200 dark:bg-zinc-800 flex-1 ml-4" />
        </div>

        <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-2xl mb-10">
          Core engineering projects showcasing ASP.NET Core Web APIs, relational data modeling, containerization, and native LLM tool calling.
        </p>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col justify-between bg-white dark:bg-zinc-900/60 rounded-2xl border border-slate-200 dark:border-zinc-800/80 p-6 sm:p-7 shadow-sm hover:border-sky-500/40 dark:hover:border-sky-500/30 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                {/* Top Row: Context Badge & Action link icons */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {project.context || 'Featured Project'}
                  </span>

                  <div className="flex items-center gap-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live view`}
                        className="p-2 rounded-lg text-slate-500 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-zinc-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 dark:bg-zinc-800/70 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-500 dark:text-zinc-400 bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/60 dark:border-zinc-800">
                      +{project.stack.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800/70">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
                    >
                      <span>Live View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
