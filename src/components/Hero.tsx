import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, MapPin, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex flex-col justify-between pt-10 sm:pt-16 pb-12 overflow-hidden bg-slate-50 dark:bg-[#0B0F17] transition-colors duration-200"
    >
      {/* Giant faint typographic watermark in background */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[13rem] lg:text-[16rem] font-black text-slate-900/[0.03] dark:text-white/[0.03] select-none pointer-events-none tracking-widest uppercase z-0"
      >
        MUHTASIM
      </div>

      {/* Understated ambient radial background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-sky-500/10 dark:bg-sky-500/[0.08] rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* Main Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Greeting, Bold Editorial Name & Specialty Tagline (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="text-sky-600 dark:text-sky-400 font-medium tracking-wide text-lg sm:text-xl">
                Hello 👋,
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-zinc-100 tracking-tight leading-[1.1] mb-3">
              I am Shadman Muhtasim
            </h1>

            <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase mb-4">
              CSE UNDERGRADUATE &bull; BACKEND &amp; FULL-STACK DEVELOPER
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              Engineering scalable backend services with ASP.NET Core and building practical AI-powered software.
            </p>
          </motion.div>

          {/* CENTER COLUMN: Portrait Spotlight Vignette (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative group">
              {/* Outer soft radial aura */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-sky-400/10 to-transparent rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Center Spotlight Ring */}
              <div className="relative p-2.5 rounded-full bg-gradient-to-b from-sky-500/25 via-zinc-400/10 dark:via-zinc-800/30 to-transparent ring-1 ring-slate-300/80 dark:ring-zinc-700/50 shadow-[0_0_60px_-15px_rgba(56,189,248,0.25)]">
                {!imgError ? (
                  <img
                    src="/profile.jpg"
                    alt="Shadman Muhtasim"
                    loading="eager"
                    decoding="async"
                    onError={() => setImgError(true)}
                    className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover object-[center_26%] rounded-full bg-zinc-900 shadow-inner group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center text-center p-6 border border-zinc-700/50 shadow-inner">
                    <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                      SM
                    </span>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Shadman Muhtasim
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Floating About Card & Primary CTAs (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-4 order-3 flex flex-col justify-center gap-5"
          >
            {/* Floating Glassmorphism Quick-Info Card */}
            <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md border border-slate-200/90 dark:border-zinc-800/90 rounded-2xl p-6 shadow-xl hover:border-sky-500/30 transition-all duration-300">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                  About Me
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Computer Science undergraduate at AUST based in Dhaka, Bangladesh. Focused on ASP.NET Core (.NET 8), React, relational databases, and LLM application engineering.
              </p>
            </div>

            {/* CTAs & Quicklinks */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[110px] inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl text-slate-800 dark:text-zinc-100 bg-white hover:bg-slate-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-750 shadow-xs transition-all active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/ShadmanMuhtasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-zinc-750 shadow-xs transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/shadman-muhtasim-43779728/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-zinc-750 shadow-xs transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Minimalist Bottom "SCROLL" Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onClick={() => handleScrollTo('skills')}
        className="relative z-10 mx-auto flex flex-col items-center gap-1.5 cursor-pointer group pt-4"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 dark:text-zinc-500 uppercase group-hover:text-sky-500 transition-colors">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-slate-400 dark:text-zinc-500 group-hover:text-sky-500 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};


