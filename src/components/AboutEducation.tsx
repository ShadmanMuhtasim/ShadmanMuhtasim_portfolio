import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe2, Award, Calendar, MapPin, School } from 'lucide-react';
import { educationData, secondaryEducationData, languagesData } from '../data/skills';

export const AboutEducation: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
              Education
            </h2>
            <div className="h-px bg-slate-200 dark:bg-zinc-800 flex-1 ml-4" />
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            My academic journey in computer science, engineering foundations, and secondary schooling.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Higher & Secondary Credentials (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Primary Degree Card: AUST */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45 }}
              className="bg-white/80 dark:bg-zinc-900/40 rounded-2xl border border-slate-200/90 dark:border-zinc-800/80 p-8 shadow-xs hover:border-sky-500/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Ambient accent blob */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-64 h-64 bg-sky-500/[0.04] rounded-full blur-2xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                        Undergraduate Degree
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">
                        {educationData.institution}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
                    <Award className="w-3.5 h-3.5" />
                    <span>CGPA: {educationData.cgpa}</span>
                  </span>
                </div>

                <div>
                  <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-zinc-200 mb-2">
                    {educationData.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      <span>{educationData.standing}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" />
                      <span>{educationData.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Credentials: HSC & SSC Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryEducationData.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: 0.08 * index }}
                  className="bg-white/80 dark:bg-zinc-900/40 rounded-2xl border border-slate-200/90 dark:border-zinc-800/80 p-6 shadow-xs hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                          <School className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                          {item.degree.includes('HSC') ? 'Higher Secondary' : 'Secondary School'}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 shrink-0">
                        <Award className="w-3 h-3" />
                        <span>GPA {item.gpa}</span>
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-1">
                      {item.institution}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-zinc-400">
                      {item.degree}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" />
                      <span>Year: {item.year}</span>
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 dark:text-zinc-500">Board Examination</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Spoken Languages & Highlights (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="lg:col-span-4 h-fit bg-white/80 dark:bg-zinc-900/40 rounded-2xl border border-slate-200/90 dark:border-zinc-800/80 p-7 shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                <Globe2 className="w-4 h-4 text-sky-500" />
                <span>Spoken Languages</span>
              </div>

              <div className="space-y-4">
                {languagesData.map((item) => (
                  <div
                    key={item.language}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-750/70 flex items-center justify-between"
                  >
                    <span className="font-semibold text-slate-800 dark:text-zinc-200 text-sm">
                      {item.language}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-200/70 dark:bg-zinc-700/60 text-slate-600 dark:text-zinc-300 font-medium">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};


