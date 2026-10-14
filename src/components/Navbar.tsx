import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
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
  const [indicator, setIndicator] = useState({ offset: 0, width: 0 });
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navItems.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [element] : [];
    });
    const visible = new Set<Element>();
    let footerVisible = false;
    const update = () => {
      if (footerVisible) { setActiveSection('contact'); return; }
      const entries = sections.filter((element) => visible.has(element));
      const current = entries.sort((a, b) => Math.abs(a.getBoundingClientRect().top - 100) - Math.abs(b.getBoundingClientRect().top - 100))[0];
      if (current) setActiveSection(current.id);
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      update();
    }, { rootMargin: '-80px 0px -50% 0px', threshold: 0 });
    sections.forEach((element) => observer.observe(element));
    const endObserver = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      update();
    });
    const footer = document.querySelector('footer');
    if (footer) endObserver.observe(footer);
    return () => { observer.disconnect(); endObserver.disconnect(); };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const update = () => {
      const current = nav.querySelector<HTMLElement>('[aria-current="location"]');
      if (current && nav.getBoundingClientRect().width > 0) {
        setIndicator({ offset: current.offsetLeft - 4, width: current.offsetWidth });
      }
    };
    const observer = new ResizeObserver(update);
    observer.observe(nav);
    update();
    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); toggleRef.current?.focus(); }
    };
    const handleOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('pointerdown', handleOutside, { passive: true });
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
  const indicatorStyle = { '--indicator-x': `${indicator.offset}px`, '--indicator-width': `${indicator.width}px` } as CSSProperties;

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container nav-bar">
        <a className="brand" href="#top" aria-label="shadman.dev — Shadman Muhtasim, home" onClick={() => setMenuOpen(false)}>shadman<span>.dev</span></a>
        <nav ref={navRef} className="desktop-nav" aria-label="Main navigation"
          data-indicator-ready={indicator.width > 0} style={indicatorStyle}>
          <span className="nav-active-indicator" aria-hidden="true" />{links}
        </nav>
        <div className="nav-actions">
          <a className="button nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><FileDown size={16} aria-hidden="true" /> Resume</a>
          <ThemeToggle />
          <button ref={toggleRef} className="icon-button menu-toggle" type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}
            aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
          <details className="fallback-navigation">
            <summary className="button">Menu</summary>
            <nav aria-label="Navigation without JavaScript">{links}<a className="nav-link" href="/resume.pdf">Resume (PDF)</a></nav>
          </details>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>
        <div className="container"><div className="mobile-nav-links">{links}</div>
          <a className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}><FileDown size={16} aria-hidden="true" /> Download Resume (PDF)</a>
        </div>
      </nav>
    </header>
  );
}
