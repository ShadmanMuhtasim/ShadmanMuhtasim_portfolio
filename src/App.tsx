import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnicalSkills } from './components/TechnicalSkills';
import { AboutEducation } from './components/AboutEducation';
import { Projects } from './components/Projects';
import { EngineeringFocus } from './components/EngineeringFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-darkbg text-slate-800 dark:text-zinc-200 antialiased selection:bg-sky-500/20 selection:text-sky-400 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 w-full">
        <Hero />
        <TechnicalSkills />
        <AboutEducation />
        <Projects />
        <EngineeringFocus />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
