import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Cpu, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    id: 'backend',
    number: '01',
    title: 'Backend & Architecture',
    tagline: 'High-throughput APIs & Secure Authentication',
    icon: Server,
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    details: [
      'ASP.NET Core (.NET 8) layered enterprise architecture enforcing strict separation of concerns (Core, Application, Infrastructure, Web API).',
      'Entity Framework Core with SQL Server, migration governance, and database index optimization.',
      'ASP.NET Core Identity, JWT authentication with refresh token rotation, and fine-grained role-based policies.',
      'FluentValidation pipeline behaviors ensuring domain integrity across all command and query boundaries.',
    ],
  },
  {
    id: 'fullstack',
    number: '02',
    title: 'Full-Stack Web Systems',
    tagline: 'Type-Safe Frontends & Asynchronous Server State',
    icon: Layout,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    details: [
      'React & TypeScript single-page applications with predictable state management and component architecture.',
      'Next.js 14 server and client rendering patterns with typed API handlers.',
      'Asynchronous server-state synchronization with TanStack Query and Axios interceptors.',
      'Responsive, accessible, and high-performance design systems crafted with Tailwind CSS.',
    ],
  },
  {
    id: 'ai',
    number: '03',
    title: 'Practical AI & Tool Calling',
    tagline: 'Autonomous Function Execution & Multi-LLM Pipelines',
    icon: Cpu,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    details: [
      'Gemini 2.0 Flash native tool and function calling using typed JSON schema definitions.',
      'Multi-provider LLM abstraction architecture supporting Gemini, OpenAI, Claude, and Ollama.',
      'Background document extraction, study guide generators, and prompt engineering pipelines.',
      'Automated validation and integration test suites using xUnit, Moq, and Vitest.',
    ],
  },
];

export const EngineeringFocus: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-slate-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-400">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
              About &amp; Engineering Focus
            </h2>
            <div className="h-px bg-slate-200 dark:bg-zinc-800 flex-1 ml-4" />
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Three core engineering pillars that guide my technical execution, software architecture, and problem-solving.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-zinc-900/40 rounded-2xl border border-slate-200/90 dark:border-zinc-800/80 p-7 shadow-xs hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl ${pillar.bgColor} ${pillar.color} border ${pillar.borderColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-zinc-500">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-sky-600 dark:text-sky-400 mb-5">
                    {pillar.tagline}
                  </p>

                  <ul className="space-y-3">
                    {pillar.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
