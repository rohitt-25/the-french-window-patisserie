import React from 'react';
import { BUSINESS, HOURS, PHOTOS, ALT, GRADE, sized, srcSet } from '../lib/content';

/**
 * The ask, placed after the social proof.
 *
 * This is the section the page exists for, so nothing here is decorative: the
 * number is the largest text on screen after the heading, the hours are a real
 * table, and the address is a real <address> element that a screen reader and a
 * phone's map app both understand.
 */
export default function Visit() {
  return (
    <section id="visit" className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p data-reveal className="t-label mb-6 text-brand">
              Visit
            </p>
            <h2
              data-reveal
              className="t-display mb-10 max-w-[15ch] text-ink"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}
            >
              Come for the croissants. Stay the afternoon.
            </h2>

            <a
              data-reveal
              href={BUSINESS.phoneHref}
              className="t-display inline-flex min-h-[52px] items-center text-brand transition-colors hover:text-brand-2"
              style={{ fontSize: 'clamp(2rem, 4.6vw, 3.4rem)' }}
            >
              {BUSINESS.phone}
            </a>

            <div data-reveal className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[58px] items-center justify-center bg-brand px-9 text-[15px] font-medium text-white transition-colors hover:bg-brand-2"
              >
                Reserve on WhatsApp
              </a>
              <a
                href={BUSINESS.maps}
                target="_blank"
                rel="noreferrer"
                className="link-sweep inline-flex h-[58px] items-center font-mono text-[14px] text-ink"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div data-reveal>
                <h3 className="t-label mb-5 text-ink-soft">Where</h3>
                <address className="not-italic text-[16px] leading-relaxed text-ink">
                  {BUSINESS.street},
                  <br />
                  {BUSINESS.area}, {BUSINESS.city},
                  <br />
                  {BUSINESS.region} {BUSINESS.postcode}
                </address>
              </div>

              <div data-reveal>
                <h3 className="t-label mb-5 text-ink-soft">Hours</h3>
                <table className="w-full text-left">
                  <tbody>
                    {HOURS.map((row) => (
                      <tr key={row.days} className="border-b border-line last:border-0">
                        <th scope="row" className="py-3 pr-4 text-[15px] font-normal text-ink">
                          {row.days}
                        </th>
                        <td className="py-3 text-right font-mono text-[13px] text-ink-soft tabular-nums">
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <figure className="md:col-span-5">
            <div className="overflow-hidden">
              <img
                data-fade
                src={sized(PHOTOS.plate, 1000, 1250)}
                srcSet={srcSet(PHOTOS.plate, [600, 900, 1200])}
                sizes="(min-width: 768px) 40vw, 100vw"
                alt={ALT.plate}
                width="1000"
                height="1250"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
                style={{ filter: GRADE }}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
