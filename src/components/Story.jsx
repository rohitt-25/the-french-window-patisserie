import React from 'react';
import { PHOTOS, ALT, GRADE, sized, srcSet } from '../lib/content';

/**
 * The magazine spread: a wide column of type against a tall offset plate.
 *
 * Every claim here is drawn from what reviewers actually said or what the
 * listing photos actually show — the courtyard, the weekday crowd, the
 * croissants. Nothing about the business is asserted that isn't evidenced.
 */
export default function Story() {
  return (
    <section id="story" className="relative bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7 md:pr-10">
            <p data-reveal className="t-label mb-6 text-brand">
              The room
            </p>
            <span data-rule className="rule-draw mb-10 block h-px w-full bg-line" />

            <h2
              data-reveal
              className="t-display mb-9 text-ink"
              style={{ fontSize: 'clamp(2.2rem, 4.6vw, 4rem)' }}
            >
              Simple, yet classy — and full on a Wednesday.
            </h2>

            <p
              data-reveal
              className="dropcap mb-7 max-w-[62ch] text-[17px] leading-[1.75] text-ink-soft md:text-[18px]"
            >
              Tucked into Lane 5 beside Malaka Spice, The French Window is the kind of place
              regulars stop describing and simply take you to. The courtyard sits under a canopy
              of green, the counter fills with pastry each morning, and the room stays busy through
              the middle of the week — laptops open, plates shared, nobody hurried out.
            </p>

            <p data-reveal className="max-w-[62ch] text-[17px] leading-[1.75] text-ink-soft md:text-[18px]">
              Four and a bit thousand words of Google reviews say roughly the same three things:
              the croissants are worth the trip, the staff are kind, and the space is easy to sit
              in for hours. That is a hard reputation to build and an easy one to keep.
            </p>

            <a
              href="#orders"
              data-reveal
              className="link-sweep mt-10 inline-flex min-h-[44px] items-center font-mono text-[13px] uppercase tracking-[0.18em] text-brand"
            >
              What people order →
            </a>
          </div>

          <figure className="md:col-span-5">
            <div className="relative overflow-hidden">
              <img
                data-fade
                data-parallax="-6"
                src={sized(PHOTOS.courtyard, 1000, 1250)}
                srcSet={srcSet(PHOTOS.courtyard, [600, 900, 1200])}
                sizes="(min-width: 768px) 40vw, 100vw"
                alt={ALT.courtyard}
                width="1000"
                height="1250"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full scale-[1.08] object-cover"
                style={{ filter: GRADE }}
              />
            </div>
            <figcaption className="t-label mt-4 text-ink-soft">
              The courtyard, mid-afternoon
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
