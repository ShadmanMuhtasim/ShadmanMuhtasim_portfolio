import { useEffect, useState } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Footer() {
  const [enhanced, setEnhanced] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('hero-start') ?? document.getElementById('top');
    if (!sentinel || !('IntersectionObserver' in window)) return;
    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 72;
    const observer = new IntersectionObserver(([entry]) => {
      setEnhanced(true);
      setHasScrolled(!entry.isIntersecting && entry.boundingClientRect.top < headerHeight);
    }, { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  function returnToTop() {
    const heading = document.getElementById('intro-heading') ?? document.querySelector('h1');
    const top = document.getElementById('top');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    top?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#top');
  }

  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <p className="footer-credit">
          © {new Date().getFullYear()} · Designed &amp; Built by <strong>Shadman Muhtasim</strong><br />
          Dhaka, Bangladesh
        </p>
        <nav className="footer-links" aria-label="Footer links">
          <a href="https://github.com/ShadmanMuhtasim" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub profile">
            <GithubIcon size={18} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/shadman-muhtasim-43779728/" target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="LinkedIn profile">
            <LinkedinIcon size={18} aria-hidden="true" />
          </a>
          <a href="mailto:theshadman007@gmail.com" className="icon-button" aria-label="Send email">
            <Mail size={18} aria-hidden="true" />
          </a>
          {!enhanced && <a href="#top" className="text-link">Back to top <ArrowUp size={16} aria-hidden="true" /></a>}
        </nav>
        {enhanced && (
          <button
            type="button"
            className={`button back-to-top${hasScrolled ? ' is-visible' : ''}`}
            onClick={returnToTop}
            tabIndex={hasScrolled ? 0 : -1}
            aria-hidden={!hasScrolled}
            aria-label="Back to top"
          >
            <ArrowUp size={18} aria-hidden="true" /><span>Top</span>
          </button>
        )}
      </div>
    </footer>
  );
}
