import React, { useEffect, useState } from 'react';
import { BUSINESS } from '../lib/content';

/**
 * The header carries the two things a hungry person actually wants: where it
 * is and how to reach it. The phone is a visible control at every width — on a
 * phone it is an icon button at full 44px, never hidden behind a breakpoint.
 */
export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    return () => removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream/95 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-4 px-5 md:px-10">
        <a
          href="#top"
          className="t-display flex min-h-[44px] items-center text-[19px] md:text-[22px] text-ink transition-opacity hover:opacity-70"
        >
          The French Window
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          <span className="t-label text-ink-soft">
            Lane 5 · {BUSINESS.area}
          </span>
          <a
            href={BUSINESS.phoneHref}
            className="link-sweep flex min-h-[44px] items-center font-mono text-[13px] text-ink transition-colors hover:text-brand"
          >
            {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[46px] items-center bg-brand px-7 text-[13px] font-medium text-white transition-colors hover:bg-brand-2"
          >
            Book a table
          </a>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.name} on ${BUSINESS.phone}`}
            className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[44px] items-center whitespace-nowrap bg-brand px-5 text-[12px] font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-2"
          >
            Book
          </a>
        </div>
      </div>
    </header>
  );
}
