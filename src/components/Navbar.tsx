import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#top', id: 'top' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    const sectionElements = navItems.map((item) => document.getElementById(item.id));
    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-slate-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 group font-mono text-base font-semibold tracking-tight text-slate-900 dark:text-zinc-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400 group-hover:bg-sky-500/20 transition-colors">
            <Code2 className="w-4 h-4" />
          </div>
          <span>
            shadman<span className="text-sky-600 dark:text-sky-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-zinc-900/70 p-1.5 rounded-full border border-slate-200/80 dark:border-zinc-800/80 shadow-2xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-sky-600 dark:bg-sky-500 shadow-xs'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-zinc-800/50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg text-slate-700 dark:text-zinc-300 bg-slate-100 hover:bg-slate-200/80 dark:bg-zinc-900/80 dark:hover:bg-zinc-800 border border-slate-300/80 dark:border-zinc-800 transition-all duration-150 hover:border-sky-500/30 dark:hover:border-sky-500/30"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-800"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden px-6 pt-2 pb-6 border-t border-slate-200 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg">
          <div className="flex flex-col space-y-2 pt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold'
                      : 'text-slate-700 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-900'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-200 dark:border-zinc-800">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium rounded-lg text-slate-800 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-sky-500/40"
              >
                <FileDown className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

