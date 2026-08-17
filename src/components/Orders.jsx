import React from 'react';
import { ORDERS, GRADE, sized, srcSet } from '../lib/content';

/**
 * "What people order" rather than "Our menu".
 *
 * The real menu and its prices were never supplied, so inventing them would put
 * false information in front of the owner's own customers. Every dish here was
 * named by a reviewer, and the section says so plainly — which is both honest
 * and better copy: recommendations from diners beat a list from the kitchen.
 *
 * Layout is the asymmetric grid from the Editorial style: the first item takes
 * seven columns, the rest split five, so no row repeats the one above.
 */
export default function Orders() {
  return (
    <section id="orders" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p data-reveal className="t-label mb-6 text-brand">
              From the reviews
            </p>
            <h2
              data-reveal
              className="t-display max-w-[16ch] text-ink"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}
            >
              What people keep ordering.
            </h2>
          </div>
          <p data-reveal className="max-w-[34ch] text-[15px] leading-relaxed text-ink-soft">
            Not a menu — these are the dishes diners named themselves, in their own words, on the
            Google listing.
          </p>
        </div>

        <span data-rule className="rule-draw mb-14 block h-px w-full bg-line" />

        <div data-stagger className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {ORDERS.map((item, i) => (
            <article
              key={item.name}
              className={i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-16'}
            >
              <div className="overflow-hidden">
                <img
                  data-fade
                  src={sized(item.photo, 1100, 800)}
                  srcSet={srcSet(item.photo, [600, 900, 1200])}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  alt={item.alt}
                  width="1100"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.04] ${
                    i === 0 ? 'aspect-[16/11]' : 'aspect-[4/3]'
                  }`}
                  style={{ filter: GRADE }}
                />
              </div>

              <p className="t-label mt-6 text-ink-soft">{String(i + 1).padStart(2, '0')}</p>
              <h3
                className="t-display mt-2 text-ink"
                style={{ fontSize: i === 0 ? 'clamp(1.7rem, 3vw, 2.6rem)' : 'clamp(1.5rem, 2.2vw, 2rem)' }}
              >
                {item.name}
              </h3>
              <p className="mt-3 max-w-[46ch] text-[16px] italic leading-relaxed text-ink-soft">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
