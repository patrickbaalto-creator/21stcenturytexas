export interface CityArea {
  slug: string;
  city: string;
  state: string;
  zip: string;
  population: string;
  description: string;
  localTrust: string;
  neighborhoods: string[];
  nearbyAreas: string[];
}

export const serviceAreas: CityArea[] = [
  { slug: 'austin', city: 'Austin', state: 'TX', zip: '78758', population: '978K',
    description: 'Our home base since 1996. We paint, roof, and side every Austin neighborhood from Tarrytown bungalows to Mueller modern builds.',
    localTrust: '300+ five-star reviews from Austin homeowners.',
    neighborhoods: ['Tarrytown', 'Mueller', 'Hyde Park', 'Westlake', 'Allandale', 'Crestview'],
    nearbyAreas: ['round-rock', 'cedar-park', 'pflugerville'] },
  { slug: 'round-rock', city: 'Round Rock', state: 'TX', zip: '78664', population: '133K',
    description: 'Family suburb where we paint, re-roof, and re-side hundreds of homes a year. Fast response on storm claims.',
    localTrust: 'Trusted by Round Rock families since 1996.',
    neighborhoods: ['Teravista', 'Forest Creek', 'Brushy Creek', 'Siena', 'Paloma Lake'],
    nearbyAreas: ['georgetown', 'austin', 'cedar-park'] },
  { slug: 'cedar-park', city: 'Cedar Park', state: 'TX', zip: '78613', population: '77K',
    description: 'Premier suburb with high HOA standards. We match Hardie colors and shingle profiles to existing community palettes.',
    localTrust: 'HOA-compliant work across Avery Ranch and Twin Creeks.',
    neighborhoods: ['Avery Ranch', 'Twin Creeks', 'Cypress Creek', 'Ranch at Brushy Creek', 'Buttercup Creek'],
    nearbyAreas: ['leander', 'round-rock', 'austin'] },
  { slug: 'lakeway', city: 'Lakeway', state: 'TX', zip: '78734', population: '19K',
    description: 'Luxury lakefront properties demand premium finishes. Standing-seam metal roofs and Hardie installs are our specialty here.',
    localTrust: 'Protecting Lake Travis area homes through every storm.',
    neighborhoods: ['Rough Hollow', 'Flintrock Falls', 'The Hills', 'Serene Hills', 'Lakeway Village'],
    nearbyAreas: ['austin', 'cedar-park', 'leander'] },
  { slug: 'georgetown', city: 'Georgetown', state: 'TX', zip: '78626', population: '86K',
    description: 'Historic squares and rapid new construction. We preserve heritage paint schemes downtown and install on new Sun City builds.',
    localTrust: 'Preserving Georgetown homes for 25+ years.',
    neighborhoods: ['Sun City', 'Berry Creek', 'Wolf Ranch', 'Old Town', 'Teravista'],
    nearbyAreas: ['round-rock', 'leander', 'cedar-park'] },
  { slug: 'leander', city: 'Leander', state: 'TX', zip: '78641', population: '74K',
    description: 'One of the fastest-growing cities in America. We paint and side hundreds of new Leander homes every year.',
    localTrust: 'Builder-trusted installs across Crystal Falls and Travisso.',
    neighborhoods: ['Crystal Falls', 'Travisso', 'Block House Creek', 'Mason Hills', 'Hazlewood'],
    nearbyAreas: ['cedar-park', 'georgetown', 'round-rock'] },
  { slug: 'buda', city: 'Buda', state: 'TX', zip: '78610', population: '18K',
    description: 'South of Austin with growing demand for exterior renovations. We respond fast on storm calls down I-35.',
    localTrust: 'Rapid response for Buda storm emergencies.',
    neighborhoods: ['Sunfield', 'Garlic Creek', 'Stonefield', 'Whispering Hollow', 'Elliott Ranch'],
    nearbyAreas: ['austin', 'kyle', 'pflugerville'] },
  { slug: 'kyle', city: 'Kyle', state: 'TX', zip: '78640', population: '60K',
    description: 'Booming suburb where new construction meets aging starter homes. We do both — fresh paint on builds and re-roofs on 20-year-olds.',
    localTrust: 'Top-rated painting and roofing in Hays County.',
    neighborhoods: ['Plum Creek', 'Bunton Creek', 'Waterleaf', 'Steeplechase', 'Six Creeks'],
    nearbyAreas: ['buda', 'austin', 'pflugerville'] },
  { slug: 'pflugerville', city: 'Pflugerville', state: 'TX', zip: '78660', population: '72K',
    description: 'Pflugerville growth means constant new exterior work. We paint, side, and re-roof everything from new construction to 30-year-old shingles.',
    localTrust: 'Trusted by Pflugerville homeowners for fast, fair work.',
    neighborhoods: ['Blackhawk', 'Spring Trails', 'Sorento', 'Highland Park', 'Carmel'],
    nearbyAreas: ['austin', 'round-rock', 'georgetown'] },
];

export const cityBySlug = (slug: string) => serviceAreas.find(c => c.slug === slug);
