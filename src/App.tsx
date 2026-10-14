import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnicalSkills } from './components/TechnicalSkills';
import { AboutEducation } from './components/AboutEducation';
import { Projects } from './components/Projects';
import { EngineeringFocus } from './components/EngineeringFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <TechnicalSkills />
        <AboutEducation />
        <EngineeringFocus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
