import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const emailAddress = 'theshadman007@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">05.</span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-4">
            Let&apos;s Build Something Useful.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            Open for Software Engineering internships, backend engineering, and junior full-stack opportunities.
          </p>
        </div>

        {/* Central Contact Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white/80 dark:bg-zinc-900/40 rounded-3xl border border-slate-200/90 dark:border-zinc-800/80 p-8 sm:p-12 shadow-xs relative overflow-hidden text-center"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/[0.06] rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Opportunities</span>
            </div>

            <div className="max-w-xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-3">
                Let&apos;s discuss how I can contribute to your team.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
                Whether you have an internship opening, junior backend role, or technical collaboration in mind, feel free to reach out directly. My inbox is always open.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={`mailto:${emailAddress}`}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Say Hello via Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200/90 dark:border-zinc-750 active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 dark:text-zinc-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick-Info Pills Grid */}
            <div className="pt-8 border-t border-slate-100 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/70 dark:border-zinc-750/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  <Mail className="w-3.5 h-3.5 text-sky-500" />
                  <span>Direct Email</span>
                </div>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors truncate block"
                >
                  {emailAddress}
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/70 dark:border-zinc-750/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Location</span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 block">
                  Dhaka, Bangladesh
                </span>
              </div>

              {/* Profiles */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/70 dark:border-zinc-750/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  <ArrowUpRight className="w-3.5 h-3.5 text-sky-500" />
                  <span>Social Profiles</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href="https://github.com/ShadmanMuhtasim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <span className="text-slate-300 dark:text-zinc-700">&bull;</span>
                  <a
                    href="https://www.linkedin.com/in/shadman-muhtasim-43779728/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
