import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, FileDown, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Availability Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Internships & Junior Roles</span>
        </motion.div>

        {/* Candidate Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100 mb-3"
        >
          Shadman Muhtasim
        </motion.h1>

        {/* Subtitle / Role Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-medium text-sky-600 dark:text-sky-400 mb-6"
        >
          <span className="flex items-center gap-1.5 font-mono text-base">
            <Terminal className="w-4 h-4 text-sky-500" />
            Software Engineer | Backend & Full-Stack (.NET & AI Applications)
          </span>
        </motion.div>

        {/* Authentic Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-3xl mb-8"
        >
          Computer Science undergraduate with backend and full-stack development experience in{' '}
          <strong className="font-semibold text-slate-800 dark:text-zinc-200">ASP.NET Core/.NET</strong>,{' '}
          <strong className="font-semibold text-slate-800 dark:text-zinc-200">React/TypeScript</strong>, and{' '}
          <strong className="font-semibold text-slate-800 dark:text-zinc-200">relational databases</strong>. Built JWT
          authentication with refresh-token rotation, role-based authorization, and REST APIs across several full-stack projects,
          alongside AI/LLM application work integrating multi-provider LLM APIs and function-calling agents.
        </motion.p>

        {/* CTAs and Social Quicklinks */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center sm:items-center gap-4 pt-2"
        >
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => handleScrollTo('projects')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 shadow-sm transition-all duration-150 active:scale-95"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg text-slate-700 dark:text-zinc-200 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-slate-300 dark:border-zinc-800 transition-all duration-150 active:scale-95"
            >
              <span>Get in Touch</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:ml-4 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-zinc-800 sm:pl-4 w-full sm:w-auto justify-center sm:justify-start">
            <a
              href="https://github.com/ShadmanMuhtasim"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200/60 dark:hover:bg-zinc-800/80 border border-transparent hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/shadman-muhtasim-43779728/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-200/60 dark:hover:bg-zinc-800/80 border border-transparent hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="mailto:theshadman007@gmail.com"
              aria-label="Send Email"
              className="p-2.5 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-200/60 dark:hover:bg-zinc-800/80 border border-transparent hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
