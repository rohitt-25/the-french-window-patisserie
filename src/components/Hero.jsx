import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BUSINESS, PHOTOS, ALT, GRADE, sized, srcSet } from '../lib/content';

/**
 * Editorial split: type holds the left, a tall image plate the right.
 *
 * The headline is set in Playfair at a scale you cannot get from a template —
 * that single decision does most of the work here. Words rise out of a mask on
 * load; the plate drifts slower than the page to give the frame depth.
 */
const LINE_1 = ['Parisian', 'romance,'];
const LINE_2 = ['baked', 'in', 'Pune.'];

function Word({ children }) {
  return (
    <span data-word className="inline-block overflow-hidden pr-[0.2em] align-bottom">
      <span className="inline-block">{children}</span>
    </span>
  );
}

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'expo.out' } })
        .from('[data-word] > span', { yPercent: 115, duration: 1.1, stagger: 0.06 })
        .from('[data-hero-meta]', { opacity: 0, y: 14, duration: 0.6, stagger: 0.08 }, '-=0.6')
        .from('[data-hero-plate]', { clipPath: 'inset(0% 0% 100% 0%)', duration: 1.3 }, 0.15)
        .from('[data-hero-img]', { scale: 1.18, duration: 1.6 }, 0.15);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative overflow-hidden bg-cream pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-end gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-10">
        <div className="md:col-span-7">
          <p data-hero-meta className="t-label mb-7 text-brand">
            Patisserie & Bistro · Est. Lane 5, {BUSINESS.area}
          </p>

          <h1 className="t-display text-ink" style={{ fontSize: 'clamp(3.1rem, 8.4vw, 8.5rem)' }}>
            <span className="block">
              {LINE_1.map((w) => (
                <Word key={w}>{w}</Word>
              ))}
            </span>
            <span className="block italic text-brand">
              {LINE_2.map((w) => (
                <Word key={w}>{w}</Word>
              ))}
            </span>
          </h1>

          <div
            data-hero-meta
            className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7"
          >
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-[58px] items-center justify-center bg-brand px-9 text-[15px] font-medium text-white transition-colors hover:bg-brand-2"
            >
              Reserve a table
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="link-sweep inline-flex h-[58px] items-center font-mono text-[15px] text-ink"
            >
              {BUSINESS.phone}
            </a>
          </div>

          <dl
            data-hero-meta
            className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-line pt-6"
          >
            <div>
              <dt className="t-label text-ink-soft">Rated</dt>
              <dd className="t-display mt-1 text-3xl text-ink">{BUSINESS.rating} ★</dd>
            </div>
            <div>
              <dt className="t-label text-ink-soft">Reviews</dt>
              <dd className="t-display mt-1 text-3xl text-ink">{BUSINESS.reviewCount}</dd>
            </div>
            <div>
              <dt className="t-label text-ink-soft">Open</dt>
              <dd className="t-display mt-1 text-3xl text-ink">7 days</dd>
            </div>
          </dl>
        </div>

        <figure data-hero-plate className="md:col-span-5">
          <div className="relative overflow-hidden">
            <img
              data-hero-img
              src={sized(PHOTOS.facade, 1200, 1500)}
              srcSet={srcSet(PHOTOS.facade, [600, 900, 1200])}
              sizes="(min-width: 768px) 40vw, 100vw"
              alt={ALT.facade}
              width="1200"
              height="1500"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
              style={{ filter: GRADE }}
            />
          </div>
          <figcaption className="t-label mt-4 text-ink-soft">
            The window on Lane 5
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
