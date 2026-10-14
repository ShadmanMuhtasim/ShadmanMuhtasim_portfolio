import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { SectionHeader } from './SectionHeader';

type CopyState = 'idle' | 'copying' | 'copied' | 'error';
const emailAddress = 'theshadman007@gmail.com';

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function handleCopyEmail() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setCopyState('copying');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard is unavailable');
      await navigator.clipboard.writeText(emailAddress);
      setCopyState('copied');
      resetTimer.current = setTimeout(() => setCopyState('idle'), 3000);
    } catch {
      setCopyState('error');
    }
  }

  return (
    <section id="contact" className="page-section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeader number="05" title="Get in touch" id="contact-heading" />
        <div className="contact-layout">
          <div className="contact-copy">
            <p>Open for Software Engineering internships, backend engineering, and junior full-stack opportunities.</p>
            <p>For an internship opening, junior backend role, or technical collaboration, reach out directly.</p>
          </div>
          <div>
            <a href={`mailto:${emailAddress}`} className="contact-email">{emailAddress}</a>
            <div className="action-row contact-actions">
              <a href={`mailto:${emailAddress}`} className="button button-primary">
                <Mail size={18} aria-hidden="true" /> Email me
              </a>
              <button
                type="button"
                className="button"
                onClick={handleCopyEmail}
                disabled={copyState === 'copying'}
                aria-describedby="copy-email-status"
              >
                {copyState === 'copied'
                  ? <Check size={18} aria-hidden="true" />
                  : <Copy size={18} aria-hidden="true" />}
                {copyState === 'copied' ? 'Copied' : copyState === 'copying' ? 'Copying…' : 'Copy email'}
              </button>
            </div>
            <p id="copy-email-status" className="copy-status" role="status" aria-live="polite" aria-atomic="true">
              {copyState === 'copied' && 'Email address copied.'}
              {copyState === 'error' && 'Could not copy automatically. Select the email address above to copy it, or use the email link.'}
            </p>
          </div>
        </div>
        <div className="contact-meta">
          <span className="action-row"><MapPin size={17} aria-hidden="true" /> Dhaka, Bangladesh</span>
          <div className="action-row">
            <a href="https://github.com/ShadmanMuhtasim" target="_blank" rel="noopener noreferrer" className="text-link">
              <GithubIcon size={18} aria-hidden="true" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/shadman-muhtasim-43779728/" target="_blank" rel="noopener noreferrer" className="text-link">
              <LinkedinIcon size={18} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
