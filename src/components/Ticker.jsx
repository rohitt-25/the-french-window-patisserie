import React from 'react';

/**
 * A masthead rule between hero and story — the newspaper device that says
 * "this is an edition, not a web page". The track is duplicated and shifted by
 * exactly half its width, so the loop has no visible seam.
 */
const ITEMS = [
  'Croissants baked fresh daily',
  'All-day breakfast',
  'Courtyard seating',
  'Filter coffee & hot chocolate',
  'Koregaon Park, Lane 5',
];

export default function Ticker() {
  const run = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee overflow-hidden border-y border-line bg-brand py-4" aria-hidden="true">
      <div className="marquee__track flex w-max items-center gap-14 pr-14">
        {run.map((item, i) => (
          <span key={i} className="t-label flex items-center gap-14 whitespace-nowrap text-white/90">
            {item}
            <span className="text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
