import { Cpu, Layout, Server } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import '../styles/sections.css';

const pillars = [
  {
    id: 'backend',
    number: '01',
    title: 'Backend & Architecture',
    tagline: 'APIs & secure authentication',
    icon: Server,
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
    tagline: 'Type-safe frontends & asynchronous server state',
    icon: Layout,
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
    tagline: 'Function execution & multi-LLM pipelines',
    icon: Cpu,
    details: [
      'Gemini 2.0 Flash native tool and function calling using typed JSON schema definitions.',
      'Multi-provider LLM abstraction architecture supporting Gemini, OpenAI, Claude, and Ollama.',
      'Background document extraction, study guide generators, and prompt engineering pipelines.',
      'Automated validation and integration test suites using xUnit, Moq, and Vitest.',
    ],
  },
];

export function EngineeringFocus() {
  return (
    <section id="about" className="page-section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeader
          number="04"
          title="About & Engineering Focus"
          description="My work focuses on backend architecture, full-stack web systems, and practical AI applications."
          id="about-heading"
        />
        <div className="focus-cards">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <article className="focus-card" key={pillar.id} aria-labelledby={`${pillar.id}-focus-heading`} data-reveal data-reveal-index={index}>
                <div className="focus-card-top">
                  <span className="section-icon" aria-hidden="true"><Icon size={21} /></span>
                  <span className="focus-number" aria-hidden="true">{pillar.number}</span>
                </div>
                <h3 id={`${pillar.id}-focus-heading`}>{pillar.title}</h3>
                <p className="focus-tagline">{pillar.tagline}</p>
                <ul className="detail-list">
                  {pillar.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
