import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, () => document.documentElement.classList.contains('dark'), () => null);

  function toggleTheme() {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    document.documentElement.dataset.themeTransitions = 'true';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try { window.localStorage.setItem('theme', next); } catch { return; }
  }

  return (
    <button className="icon-button theme-toggle" type="button" onClick={toggleTheme}
      aria-label={dark === null ? 'Toggle color theme' : `Switch to ${dark ? 'light' : 'dark'} mode`}>
      <Sun className="theme-icon theme-icon-sun" size={18} aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" size={18} aria-hidden="true" />
    </button>
  );
}