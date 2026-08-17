/**
 * Every fact on this site, in one place.
 *
 * Ground rule: nothing here is invented. Photos, reviews, rating, hours,
 * address and phone all come from the business's Google listing. The dishes
 * named below are only those an actual reviewer named — no prices, no invented
 * menu, no awards, no domain. If it wasn't in the listing, it isn't on the page.
 */

export const BUSINESS = {
  name: 'The French Window Patisserie',
  shortName: 'The French Window',
  area: 'Koregaon Park',
  city: 'Pune',
  street: 'Lane Number 5, next to Malaka Spice',
  region: 'Maharashtra',
  postcode: '411001',
  phone: '+91 97666 44202',
  phoneHref: 'tel:+919766644202',
  whatsapp: 'https://wa.me/919766644202',
  maps: 'https://www.google.com/maps/search/?api=1&query=The+French+Window+Patisserie+Koregaon+Park+Pune',
  rating: '4.3',
  reviewCount: '1,749',
};

/** Google listing photos, highest-resolution originals. */
const P = (id) => `https://lh3.googleusercontent.com/gps-cs-s/${id}=w1920-h1080-k-no`;

export const PHOTOS = {
  facade: P('AHRPTWkmLlVdH3YJdzd6f5VK9DxLT0dCp5R7_H8e2eBLeKYa_yt1Y1Hwlcl6TciwePboOOKJ8zbv7D20oE3TZwX63IGx51AU03D6OIe3-4Jz-15HD6b66y0VUMa7eMfc8ccgcIgpsfF73i-Gpva6'),
  courtyard: P('AHRPTWn8f9CHzQerdn1mbiqmJM8B4r0lx70YZkcvmaRhgOMmekSEYIR2MXC9giFkYwVTWyf0CeqPro6_rBnGRzaOnaLQ1tcE18lIDSCbKRX5vjGMWtv8LkKGqhVEoVQeeXpdoTzF_WI'),
  pastries: P('AHRPTWm9Ti9C1UQlRicXkQuRmLeDZtNF-NBQrNdWk8I38eJ6jhI5T2g_r1ioVaPi56QGF-LhRSItEI_iJuZ-xqtTZ_nz4ZtaGxA0p4n8DgV1-aBAYWOHYZaGKkeNOP8fd5wwypYGX0ewpexoO5Bo'),
  plate: P('AHRPTWkvrkv_kTX6vIbgYTxZvfFbSTVrUAzpA-w16mbziqEFtCfBM_6OW5Ev0EjhpS-fd-tKTpHRZksjXc7Nd-xAraKz69og8Ug7b3nyNX6g1JDsyyDiZcf6PNlyjfIifHKLJtv7REfslh6sonY'),
  coffee: P('AHRPTWkzYzJss_jk0CTwkd0A82MVXqL_rVC2azbmSGU8pk9tbATCVdqI8Hai0ZeveaoGNy0k5ehOIAArRAYQq5TCHu977tYSm5i8eWugd2RlHhg2jcriGlZZl33gLVk0PfznMOyUUT0ja7sgCP9T'),
};

export const ALT = {
  facade: 'The wooden French Window Patisserie sign hanging above the entrance on Lane 5, Koregaon Park',
  courtyard: 'Shaded outdoor courtyard seating with potted plants at The French Window Patisserie',
  pastries: 'Freshly baked French pastries on display at the counter',
  plate: 'A plated European breakfast served at the café',
  coffee: 'Coffee served on an outdoor table in the courtyard',
};

/**
 * Google serves any size from the same URL, so ask each slot for what it needs
 * rather than shipping a 1920px original to a phone.
 */
export function sized(url, w, h) {
  if (typeof url !== 'string' || !url) return '';
  return url.replace(/w\d+-h\d+/, `w${w}-h${h}`);
}

export function srcSet(url, widths = [640, 1024, 1600]) {
  if (typeof url !== 'string' || !url) return undefined;
  return widths.map((w) => `${sized(url, w, Math.round(w * 0.62))} ${w}w`).join(', ');
}

/** One grade across the set so phone-camera photos read as a single shoot. */
export const GRADE = 'saturate(0.9) contrast(1.05) brightness(1.02)';

/** Verbatim Google reviews. Trimmed for length only — never reworded. */
export const REVIEWS = [
  {
    quote:
      'Vibe of this place is very chill. Even in the weekdays it was 80% full and people were working and enjoying food. Aesthetic of this place is brilliant, it’s very simple yet classy.',
    author: 'Sunil Bhati',
    rating: 5,
  },
  {
    quote:
      'The food was absolutely delicious, full of flavor, and served fresh. The atmosphere was warm, cozy, and perfect for relaxing with friends or family. The staff was friendly and attentive.',
    author: 'R M',
    rating: 5,
  },
  {
    quote:
      'The croissants are INSANE!! The crispy flaky layers are just amazing. The combination of sweet spicy hot choco and the tasty yummy croissant is SO deadly.',
    author: 'Kshitij Saxena',
    rating: 5,
  },
];

/**
 * Dishes named by reviewers, presented as exactly that. Deliberately unpriced:
 * the real menu and its prices were never provided, and inventing them would
 * put false information in front of the owner's own customers.
 */
export const ORDERS = [
  {
    name: 'The croissants',
    note: '“The crispy flaky layers are just amazing.”',
    photo: PHOTOS.pastries,
    alt: ALT.pastries,
  },
  {
    name: 'Aztec hot chocolate',
    note: 'Named alongside the smoked salmon croissant as the pairing to beat.',
    photo: PHOTOS.coffee,
    alt: ALT.coffee,
  },
  {
    name: 'Avocado toast & cheese omelette',
    note: '“Both were tasty. Service was equally quick and good.”',
    photo: PHOTOS.plate,
    alt: ALT.plate,
  },
];

export const HOURS = [
  { days: 'Monday — Thursday', time: '9:00 AM – 11:00 PM' },
  { days: 'Friday — Sunday', time: '8:00 AM – 11:00 PM' },
];
