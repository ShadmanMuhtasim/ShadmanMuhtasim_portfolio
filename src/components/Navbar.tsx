import { useEffect, useRef, useState } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Home', id: 'top' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('top');
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: '-15% 0px -65% 0px' });
    for (const item of navItems) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 68rem)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const handleOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('pointerdown', handleOutside);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('pointerdown', handleOutside);
    };
  }, [menuOpen]);

  const links = navItems.map((item) => (
    <a key={item.id} className="nav-link" href={`#${item.id}`}
      aria-current={activeSection === item.id ? 'location' : undefined}
      onClick={() => setMenuOpen(false)}>{item.name}</a>
  ));

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container nav-bar">
        <a className="brand" href="#top" aria-label="shadman.dev — Shadman Muhtasim, home"
          onClick={() => setMenuOpen(false)}>shadman<span>.dev</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links}</nav>
        <div className="nav-actions">
          <a className="button nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FileDown size={16} aria-hidden="true" /> Resume
          </a>
          <ThemeToggle />
          <button ref={toggleRef} className="icon-button menu-toggle" type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen} aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="container">
            <div className="mobile-nav-links">{links}</div>
            <a className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}><FileDown size={16} aria-hidden="true" /> Download Resume (PDF)</a>
          </div>
        </nav>
      )}
    </header>
  );
}
