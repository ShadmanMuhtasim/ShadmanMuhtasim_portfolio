import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe2, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { educationData, languagesData } from '../data/skills';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-slate-200/80 dark:border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            About & Education
          </h2>
          <div className="h-px bg-slate-200 dark:bg-zinc-800 flex-1 ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Card (7 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900/60 rounded-xl border border-slate-200 dark:border-zinc-800/80 p-6 sm:p-7 shadow-sm hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="p-2.5 rounded-lg bg-sky-500/10 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                CGPA: {educationData.cgpa}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100 mb-1">
              {educationData.institution}
            </h3>
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-1">
              {educationData.degree}
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mb-6">
              {educationData.location} • <span className="text-slate-700 dark:text-zinc-300 font-medium">{educationData.standing}</span>
            </p>

            {/* Relevant Coursework */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                <span>Relevant Undergraduate Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-zinc-800/70 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700/60 hover:border-sky-500/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Focus & Spoken Languages (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Core Engineering Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white dark:bg-zinc-900/60 rounded-xl border border-slate-200 dark:border-zinc-800/80 p-6 shadow-sm hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                <Layers className="w-4 h-4 text-sky-500" />
                <span>Engineering Focus</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                  <span>
                    <strong className="font-semibold text-slate-800 dark:text-zinc-200">Layered Architecture:</strong> Strict separation of concerns (Core, Application, Infrastructure, Web) with FluentValidation pipelines.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>
                    <strong className="font-semibold text-slate-800 dark:text-zinc-200">Security & Auth:</strong> ASP.NET Core Identity, JWT authentication with refresh token rotation, and role-based policies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                  <span>
                    <strong className="font-semibold text-slate-800 dark:text-zinc-200">Pragmatic AI:</strong> Gemini native function/tool calling with typed JSON schemas and model fallback routines.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Spoken Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white dark:bg-zinc-900/60 rounded-xl border border-slate-200 dark:border-zinc-800/80 p-6 shadow-sm hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                <Globe2 className="w-4 h-4 text-sky-500" />
                <span>Spoken Languages</span>
              </div>

              <div className="space-y-2">
                {languagesData.map((item) => (
                  <div key={item.language} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-slate-800 dark:text-zinc-200">{item.language}</span>
                    <span className="text-slate-500 dark:text-zinc-400">{item.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
