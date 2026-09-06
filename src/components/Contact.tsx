import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
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
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-zinc-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Get in Touch
          </h2>
          <div className="h-px bg-slate-200 dark:bg-zinc-800 flex-1 ml-4" />
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mb-10">
          Interested in discussing an internship, junior software engineering opportunity, or technical collaboration? Feel free to reach out directly.
        </p>

        {/* Contact Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-zinc-900/60 rounded-3xl border border-slate-200 dark:border-zinc-800/80 p-8 sm:p-10 shadow-sm relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left Info Area */}
            <div className="space-y-6 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open for Opportunities</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
                  Let&apos;s build something great together.
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  I&apos;m currently seeking roles in backend, full-stack (.NET / React), or AI application development. My inbox is always open.
                </p>
              </div>

              {/* Location & Email Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/60 dark:border-zinc-800">
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-sky-500 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Location
                    </span>
                    <span className="text-sm font-medium text-slate-800 dark:text-zinc-200">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/60 dark:border-zinc-800">
                  <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 text-sky-500 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-sm font-medium text-sky-600 dark:text-sky-400 hover:underline truncate block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action & Links Area */}
            <div className="flex flex-col gap-4 md:w-72 shrink-0 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-zinc-800 md:pl-8">
              {/* Primary Email Button */}
              <a
                href={`mailto:${emailAddress}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 shadow-sm transition-all hover:shadow"
              >
                <Mail className="w-4 h-4" />
                <span>Send an Email</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-750 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700/80"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              {/* Social / Profiles */}
              <div className="pt-2">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2.5">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com/ShadmanMuhtasim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-slate-50 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-zinc-700/60 hover:border-slate-300 dark:hover:border-zinc-600 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/shadman-muhtasim-43779728/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-slate-50 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200/80 dark:border-zinc-700/60 hover:border-slate-300 dark:hover:border-zinc-600 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
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

