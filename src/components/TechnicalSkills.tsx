import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Layout, Cpu, Wrench, Database, Code2, Sparkles } from 'lucide-react';
import { skillsList } from '../data/skills';
import type { SkillCategoryType } from '../types';

type FilterCategory = 'All' | SkillCategoryType;

const categories: { label: FilterCategory; display: string; icon: React.FC<{ className?: string }> }[] = [
  { label: 'All', display: 'All', icon: Sparkles },
  { label: 'Backend', display: 'Backend & APIs', icon: Server },
  { label: 'Frontend', display: 'Frontend', icon: Layout },
  { label: 'AI/LLM', display: 'AI / LLM', icon: Cpu },
  { label: 'Databases', display: 'Databases & ORM', icon: Database },
  { label: 'Tools', display: 'Tools & DevOps', icon: Wrench },
  { label: 'Languages', display: 'Languages', icon: Code2 },
];

const categoryBadgeStyles: Record<SkillCategoryType, { dot: string; borderHover: string }> = {
  Backend: {
    dot: 'bg-sky-500',
    borderHover: 'hover:border-sky-500/40 hover:text-sky-600 dark:hover:text-sky-400',
  },
  Frontend: {
    dot: 'bg-emerald-500',
    borderHover: 'hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400',
  },
  'AI/LLM': {
    dot: 'bg-indigo-500',
    borderHover: 'hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400',
  },
  Databases: {
    dot: 'bg-rose-500',
    borderHover: 'hover:border-rose-500/40 hover:text-rose-600 dark:hover:text-rose-400',
  },
  Tools: {
    dot: 'bg-amber-500',
    borderHover: 'hover:border-amber-500/40 hover:text-amber-600 dark:hover:text-amber-400',
  },
  Languages: {
    dot: 'bg-purple-500',
    borderHover: 'hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-purple-400',
  },
};

export const TechnicalSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsList
      : skillsList.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">01.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
              Skills &amp; Technologies
            </h2>
            <div className="h-px bg-slate-200 dark:bg-zinc-800 flex-1 ml-4" />
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Technologies I use to build backend services, full-stack systems, and AI applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 w-fit">
          {categories.map(({ label, display, icon: Icon }) => {
            const isSelected = selectedCategory === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setSelectedCategory(label)}
                className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'text-slate-900 dark:text-zinc-100'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTab"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-xs border border-slate-200/80 dark:border-zinc-700/60"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-sky-600 dark:text-sky-400' : 'text-slate-500 dark:text-zinc-400'}`} />
                  <span>{display}</span>
                  {label !== 'All' && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200/60 dark:bg-zinc-700/60 text-slate-600 dark:text-zinc-300 font-mono">
                      {skillsList.filter((s) => s.category === label).length}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Skills Pill Grid */}
        <motion.div
          layout
          className="flex flex-wrap gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const style = categoryBadgeStyles[skill.category] || {
                dot: 'bg-sky-500',
                borderHover: 'hover:border-sky-500/40',
              };
              return (
                <motion.div
                  layout
                  key={`${skill.category}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03, y: -1 }}
                  className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/90 dark:bg-zinc-900/60 border border-slate-200/90 dark:border-zinc-800/80 text-slate-800 dark:text-zinc-200 text-xs sm:text-sm font-medium shadow-xs transition-colors duration-200 ${style.borderHover}`}
                >
                  <span className={`w-2 h-2 rounded-full ${style.dot} shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <span className="tracking-tight">{skill.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};


