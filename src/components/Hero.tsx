import { useState } from 'react';
import { ArrowDown, ArrowUpRight, FileDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="top" className="hero" aria-labelledby="intro-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-role">CSE undergraduate · Backend &amp; full-stack developer</p>
          <h1 id="intro-heading">Shadman Muhtasim</h1>
          <p className="hero-description">
            I build ASP.NET Core (.NET 8) services, React interfaces, and practical AI-powered software.
          </p>
          <p className="hero-summary">
            Computer Science undergraduate at AUST, focused on relational databases and LLM application engineering.
          </p>
          <p className="hero-location"><MapPin size={16} aria-hidden="true" /> Dhaka, Bangladesh</p>
          <div className="action-row hero-actions">
            <a className="button button-primary" href="#projects">View projects <ArrowDown size={16} aria-hidden="true" /></a>
            <a className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><FileDown size={16} aria-hidden="true" /> Resume</a>
            <a className="text-link" href="#contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-socials">
            <a className="text-link" href="https://github.com/ShadmanMuhtasim" target="_blank" rel="noopener noreferrer">
              <GithubIcon size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a className="text-link" href="https://www.linkedin.com/in/shadman-muhtasim-43779728/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={18} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="portrait">
          {imageFailed ? (
            <div className="portrait-fallback" role="img" aria-label="Shadman Muhtasim">SM</div>
          ) : (
            <img src="/profile-640.webp" srcSet="/profile-320.webp 320w, /profile-640.webp 640w"
              sizes="(min-width: 48rem) 272px, 160px" width="640" height="800"
              alt="Shadman Muhtasim" fetchPriority="high" decoding="async"
              onError={() => setImageFailed(true)} />
          )}
          <figcaption>Shadman Muhtasim · Dhaka</figcaption>
        </figure>
      </div>
    </section>
  );
}
