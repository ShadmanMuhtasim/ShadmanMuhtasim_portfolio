import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/50 py-10 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
        <div>
          <span>Designed &amp; Built by </span>
          <span className="font-semibold text-slate-800 dark:text-zinc-200">
            Shadman Muhtasim
          </span>
          <span className="hidden sm:inline"> &bull; Dhaka, Bangladesh</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ShadmanMuhtasim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/shadman-muhtasim-43779728/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="mailto:theshadman007@gmail.com"
            aria-label="Send Email"
            className="p-1.5 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 ml-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200/90 dark:border-zinc-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

