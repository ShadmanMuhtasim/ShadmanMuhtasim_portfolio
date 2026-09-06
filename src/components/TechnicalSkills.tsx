import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Cpu,
  Code,
  Layout,
  Database,
  Terminal,
  CheckSquare,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export const TechnicalSkills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend & Frameworks':
        return <Server className="w-4 h-4 text-sky-500" />;
      case 'AI & LLM Engineering':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Languages':
        return <Code className="w-4 h-4 text-amber-500" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-emerald-500" />;
      case 'Databases & ORM':
        return <Database className="w-4 h-4 text-rose-500" />;
      case 'Tools & DevOps':
        return <Terminal className="w-4 h-4 text-cyan-500" />;
      case 'Testing':
        return <CheckSquare className="w-4 h-4 text-purple-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-sky-500" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-slate-200/80 dark:border-zinc-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Technical Skills
          </h2>
          <div className="h-px bg-slate-200 dark:bg-zinc-800 flex-1 ml-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
              selectedCategory === 'All'
                ? 'bg-sky-600 dark:bg-sky-500 text-white shadow-sm'
                : 'bg-white dark:bg-zinc-900/80 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedCategory(cat.category)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                  isSelected
                    ? 'bg-sky-600 dark:bg-sky-500 text-white shadow-sm'
                    : 'bg-white dark:bg-zinc-900/80 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white dark:bg-zinc-900/60 rounded-xl border border-slate-200 dark:border-zinc-800/80 p-5 shadow-sm hover:border-slate-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-zinc-800/70">
                <div className="p-2 rounded-md bg-slate-100 dark:bg-zinc-800/70">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-zinc-800/60 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-700/60 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
