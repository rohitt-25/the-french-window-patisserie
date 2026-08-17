import React from 'react';

/**
 * A full-bleed pull quote on the dark ink ground — the one moment the page
 * stops and lets a single sentence carry the width. Cream on #78350F measures
 * 8.15:1, so the drama costs nothing in legibility.
 *
 * Verbatim from Kshitij Saxena's Google review.
 */
export default function Quote() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <figure>
          <blockquote
            data-reveal
            className="t-display max-w-[19ch] text-cream md:max-w-[20ch]"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 6.5rem)' }}
          >
            <span className="italic text-line">“</span>The croissants are insane.
          </blockquote>
          <figcaption data-reveal className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="t-label text-line">Kshitij Saxena</span>
            <span className="h-px w-14 bg-line/40" aria-hidden="true" />
            <span className="t-label text-cream/70">Google review · 5 ★</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
