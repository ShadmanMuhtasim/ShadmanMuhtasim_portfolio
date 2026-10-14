import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Check, Copy, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { SectionHeader } from './SectionHeader';

type CopyState = 'idle' | 'copying' | 'copied' | 'error';
const emailAddress = 'theshadman007@gmail.com';
const subscribeToClient = () => () => {};

function copyWithFallback(text: string) {
  const activeElement = document.activeElement;
  const selection = window.getSelection();
  const ranges = selection ? Array.from({ length: selection.rangeCount }, (_, index) => selection.getRangeAt(index).cloneRange()) : [];
  const input = activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement ? activeElement : null;
  const inputSelection = input ? { start: input.selectionStart, end: input.selectionEnd, direction: input.selectionDirection } : null;
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.readOnly = true;
  textarea.tabIndex = -1;
  textarea.className = 'clipboard-fallback';
  textarea.setAttribute('aria-hidden', 'true');
  document.body.appendChild(textarea);
  let copied = false;
  try {
    textarea.focus({ preventScroll: true });
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  } finally {
    textarea.remove();
    if (activeElement instanceof HTMLElement) activeElement.focus({ preventScroll: true });
    if (selection) {
      selection.removeAllRanges();
      ranges.forEach((range) => selection.addRange(range));
    }
    if (input && inputSelection && inputSelection.start !== null && inputSelection.end !== null) {
      input.setSelectionRange(inputSelection.start, inputSelection.end, inputSelection.direction ?? undefined);
    }
  }
  return copied;
}

export function Contact() {
  const [copyState, setCopyState] = useState<CopyState>('idle');
  const enhanced = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copying = useRef(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function handleCopyEmail() {
    if (copying.current) return;
    copying.current = true;
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setCopyState('copying');
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
        copied = true;
      }
    } catch {
      copied = false;
    }
    if (!copied) copied = copyWithFallback(emailAddress);
    copying.current = false;
    if (!mounted.current) return;
    setCopyState(copied ? 'copied' : 'error');
    if (copied) resetTimer.current = setTimeout(() => setCopyState('idle'), 2000);
  }

  return (
    <section id="contact" className="page-section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeader number="05" title="Get in touch" id="contact-heading" />
        <div className="contact-card" data-reveal>
          <p className="contact-status">Open for Software Engineering internships, backend engineering, and junior full-stack opportunities.</p>
          <a href={`mailto:${emailAddress}`} className="contact-email">{emailAddress}</a>
          <div className="action-row contact-actions">
            <a href={`mailto:${emailAddress}`} className="button button-primary">
              <Mail size={18} aria-hidden="true" /> Email me
            </a>
            {enhanced && (
              <button
                type="button"
                className="button copy-email-button"
                onClick={handleCopyEmail}
                aria-disabled={copyState === 'copying'}
                aria-busy={copyState === 'copying'}
                aria-describedby="copy-email-status"
              >
                {copyState === 'copied'
                  ? <Check size={18} aria-hidden="true" />
                  : <Copy size={18} aria-hidden="true" />}
                {copyState === 'copied' ? 'Copied' : copyState === 'copying' ? 'Copying…' : 'Copy email'}
              </button>
            )}
          </div>
          <p id="copy-email-status" className="copy-status" role="status" aria-live="polite" aria-atomic="true">
            {copyState === 'copied' && 'Email address copied.'}
            {copyState === 'error' && 'Could not copy automatically. Select the email address above to copy it, or use the email link.'}
          </p>
          <div className="contact-meta">
            <span className="contact-location"><MapPin size={17} aria-hidden="true" /> Dhaka, Bangladesh</span>
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
      </div>
    </section>
  );
}
