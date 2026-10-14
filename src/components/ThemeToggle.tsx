import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { window.localStorage.setItem('theme', dark ? 'dark' : 'light'); }
    catch { /* The theme remains usable when persistent storage is unavailable. */ }
  }, [dark]);

  return (
    <button className="icon-button" type="button" onClick={() => setDark((value) => !value)}
      aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>
      {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
