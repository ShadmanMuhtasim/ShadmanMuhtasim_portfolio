import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Footer() {
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
          <a href="#top" className="text-link">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
}
