import React from 'react';
import { BUSINESS } from '../lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="t-display text-3xl text-ink md:text-4xl">{BUSINESS.shortName}</p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-ink-soft">
              Patisserie and bistro on Lane 5, {BUSINESS.area}, {BUSINESS.city}.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="t-display inline-flex min-h-[44px] items-center text-2xl text-brand transition-colors hover:text-brand-2 md:text-3xl"
            >
              {BUSINESS.phone}
            </a>
            <a
              href={BUSINESS.maps}
              target="_blank"
              rel="noreferrer"
              className="link-sweep inline-flex min-h-[44px] items-center font-mono text-[13px] text-ink-soft"
            >
              Lane 5, {BUSINESS.area} — directions
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
            © {new Date().getFullYear()} {BUSINESS.name}
          </p>
          <p className="font-mono text-[11px] text-ink-soft">
            Photographs and reviews from the business’s Google listing
          </p>
        </div>
      </div>
    </footer>
  );
}
