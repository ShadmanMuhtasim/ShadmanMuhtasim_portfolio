import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronDown, FileDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const tiltEnabled = useRef(false);

  useEffect(() => {
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      tiltEnabled.current = pointer.matches && !motion.matches;
      if (!tiltEnabled.current && portraitRef.current) portraitRef.current.style.transform = '';
    };
    update();
    pointer.addEventListener('change', update);
    motion.addEventListener('change', update);
    return () => {
      pointer.removeEventListener('change', update);
      motion.removeEventListener('change', update);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const sentinel = document.getElementById('hero-start');
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) { setScrolled(true); observer.disconnect(); }
    }, { rootMargin: '-72px 0px 0px' });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="top" className="hero" aria-labelledby="intro-heading">
      <span id="hero-start" className="hero-sentinel" aria-hidden="true" />
      <div className="hero-watermark" aria-hidden="true">MUHTASIM</div>
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-role">CSE undergraduate · Backend &amp; full-stack developer</p>
          <h1 id="intro-heading" tabIndex={-1}>Shadman Muhtasim</h1>
          <p className="hero-description">I build ASP.NET Core (.NET 8) services, React interfaces, and practical AI-powered software.</p>
        </div>
        <figure className="portrait">
          <div className="portrait-frame" ref={portraitRef}
            onPointerEnter={(event) => { boundsRef.current = event.currentTarget.getBoundingClientRect(); }}
            onPointerMove={(event) => {
              if (!tiltEnabled.current || event.pointerType !== 'mouse') return;
              const bounds = boundsRef.current;
              if (!bounds) return;
              const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
              const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
              if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
              frameRef.current = requestAnimationFrame(() => {
                if (portraitRef.current) portraitRef.current.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg)`;
              });
            }}
            onPointerLeave={() => {
              if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
              if (portraitRef.current) portraitRef.current.style.transform = '';
            }}>
            {imageFailed ? <div className="portrait-fallback" role="img" aria-label="Shadman Muhtasim">SM</div> : (
              <img src="/profile-640.webp" srcSet="/profile-320.webp 320w, /profile-640.webp 640w"
                sizes="(min-width: 64rem) 256px, 208px" width="640" height="640"
                alt="Shadman Muhtasim" fetchPriority="high" decoding="async" onError={() => setImageFailed(true)} />
            )}
          </div>
          <figcaption>Shadman Muhtasim · Dhaka</figcaption>
        </figure>
        <div className="hero-aside">
          <div className="hero-about">
            <p className="eyebrow">About me</p>
            <p>Computer Science undergraduate at AUST, focused on relational databases and LLM application engineering.</p>
            <p className="hero-location"><MapPin size={16} aria-hidden="true" /> Dhaka, Bangladesh</p>
          </div>
          <div>
            <div className="action-row hero-actions">
              <a className="button button-primary" href="#projects">View projects <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><FileDown size={16} aria-hidden="true" /> Resume</a>
            </div>
            <div className="hero-socials">
              <a className="text-link" href="https://github.com/ShadmanMuhtasim" target="_blank" rel="noopener noreferrer"><GithubIcon size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a className="text-link" href="https://www.linkedin.com/in/shadman-muhtasim-43779728/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={17} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a className="text-link" href="#contact">Contact <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <a className="scroll-hint" href="#skills" data-dismissed={scrolled}>Scroll <ChevronDown size={16} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
