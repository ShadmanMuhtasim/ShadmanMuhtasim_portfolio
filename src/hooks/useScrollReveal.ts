import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || motion.matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.revealState = 'visible';
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -24px 0px' });
    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight) continue;
      const index = Math.min(4, Math.max(0, Number(element.dataset.revealIndex) || 0));
      element.style.setProperty('--reveal-delay', `${index * 50}ms`);
      element.dataset.revealState = 'pending';
      observer.observe(element);
    }
    const revealAll = () => {
      if (!motion.matches) return;
      observer.disconnect();
      elements.forEach((element) => { element.dataset.revealState = 'visible'; });
    };
    motion.addEventListener('change', revealAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', revealAll);
      elements.forEach((element) => { delete element.dataset.revealState; });
    };
  }, []);
}
