import React from 'react';
import { BUSINESS, REVIEWS } from '../lib/content';

/**
 * Social proof placed immediately before the ask — the conversion rule from the
 * database's "Hero + Testimonials + CTA" pattern: earn the request, then make it.
 *
 * Every quote is verbatim from the Google listing, attributed by name and
 * linked back to the source so a reader can verify it rather than take our word.
 */
export default function Voices() {
  return (
    <section id="voices" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2
            data-reveal
            className="t-display max-w-[14ch] text-ink"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}
          >
            {BUSINESS.reviewCount} diners, {BUSINESS.rating} stars.
          </h2>
          <a
            data-reveal
            href={BUSINESS.maps}
            target="_blank"
            rel="noreferrer"
            className="link-sweep inline-flex min-h-[44px] items-center self-start font-mono text-[13px] uppercase tracking-[0.18em] text-brand md:self-auto"
          >
            Read them on Google →
          </a>
        </div>

        <span data-rule className="rule-draw mb-14 block h-px w-full bg-line" />

        <div data-stagger className="grid grid-cols-1 gap-px bg-line md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.author} className="flex flex-col justify-between bg-cream p-8 md:p-10">
              <blockquote className="t-display text-[21px] leading-[1.45] text-ink md:text-[23px]">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-9">
                <span className="t-label block text-brand" aria-label={`${r.rating} out of 5 stars`}>
                  {'★'.repeat(r.rating)}
                </span>
                <span className="mt-3 block font-mono text-[13px] text-ink-soft">
                  — {r.author}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
