import type { Trade } from './services';

export interface Review {
  name: string;
  city: string;
  trade: Trade;
  quote: string;
  rating: 5;
}

export const reviews: Review[] = [
  { name: 'Sarah K.', city: 'Tarrytown', trade: 'painting', rating: 5,
    quote: 'They prepped our 1940s bungalow like surgeons. Every nail hole filled, every sill repaired. Two years in and the paint still looks brand new.' },
  { name: 'Marcus T.', city: 'Lakeway', trade: 'roofing', rating: 5,
    quote: 'The metal roof crew was meticulous. They showed me the underlayment, the flashing, every detail. Standing-seam looks incredible on our hillside.' },
  { name: 'Jenna R.', city: 'Cedar Park', trade: 'siding', rating: 5,
    quote: 'Hardie re-side on our whole house. HOA approved the colors on the first submission because the crew brought real samples. Best contractor experience we have had.' },
  { name: 'David L.', city: 'Round Rock', trade: 'claims', rating: 5,
    quote: 'They met the adjuster, fought for the supplement, and got us a full new roof for just the deductible. Took zero phone calls from us.' },
  { name: 'Emily S.', city: 'Mueller', trade: 'painting', rating: 5,
    quote: 'Interior repaint of our whole house in 8 days. Low-VOC, kid-safe, and they moved every piece of furniture themselves. Came back to a perfect house.' },
  { name: 'Robert H.', city: 'Georgetown', trade: 'painting', rating: 5,
    quote: 'They painted our office park overnight without disrupting a single tenant. Property manager is now using them on three other buildings.' },
  { name: 'Karen M.', city: 'Buda', trade: 'roofing', rating: 5,
    quote: 'Same-week leak repair after a Sunday storm. Tarp by Tuesday, full repair by Friday, and they documented everything for our insurance.' },
  { name: 'Tony P.', city: 'Westlake', trade: 'painting', rating: 5,
    quote: 'Color help was incredible. They brought ten swatches and walked us through which would hold up best in our southwest exposure.' },
  { name: 'Linda B.', city: 'Pflugerville', trade: 'siding', rating: 5,
    quote: 'Re-sided in Hardie ColorPlus. Eight days, on time, on budget, and the joint flashing they did is way better than anything our neighbors got.' },
];

export const reviewsByTrade = (t: Trade) => reviews.filter(r => r.trade === t);
