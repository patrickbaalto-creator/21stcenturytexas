import { IMG } from '../utils/unsplash';

export type Trade = 'painting' | 'roofing' | 'siding' | 'claims';

export interface Service {
  slug: string;
  trade: Trade;
  name: string;
  short: string;
  icon: string;
  heroImg: string;
  body: string;
  includes: string[];
  steps: { n: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'exterior-painting', trade: 'painting',
    name: 'Exterior Painting',
    short: 'Long-lasting exterior paint engineered for Central Texas sun and storms.',
    icon: 'Paintbrush', heroImg: IMG.exteriorPaint,
    body: 'Texas heat, UV, and storm cycles burn through cheap exterior paint in 2 to 3 years. We use premium Sherwin-Williams Duration and Benjamin Moore Aura systems that hold their color and elasticity for 8 to 12 years. Every job includes power washing, scraping, caulking, priming bare wood, and two full coats.',
    includes: ['Pressure wash & full surface prep', 'Sherwin-Williams or Benjamin Moore premium paint', 'Wood rot repair & replacement', 'Caulking, sealing & priming', 'Two coats applied, color-matched trim', 'Detailed cleanup & final walkthrough'],
    steps: [
      { n: '01', title: 'Estimate', desc: 'Free on-site estimate and color consultation.' },
      { n: '02', title: 'Prep', desc: 'Wash, scrape, repair, caulk, prime.' },
      { n: '03', title: 'Paint', desc: 'Two coats of premium-grade paint.' },
      { n: '04', title: 'Walkthrough', desc: 'Final inspection with the homeowner.' },
    ],
    faqs: [
      { q: 'How long will my exterior paint last in Austin?', a: 'With our premium prep and two coats of Sherwin-Williams Duration or Benjamin Moore Aura, expect 8 to 12 years before another full repaint is needed.' },
      { q: 'Do I need to be home during the painting?', a: 'No. We start each day after a brief check-in and lock up before we leave. Most owners come home to a freshly painted house.' },
      { q: 'How much does a typical exterior repaint cost?', a: 'Most single-story Austin homes range from $4,500 to $9,500 depending on prep needs, square footage, and color count. Estimates are always free.' },
    ],
  },
  {
    slug: 'interior-painting', trade: 'painting',
    name: 'Interior Painting',
    short: 'Clean, low-VOC interior painting with zero-mess crews.',
    icon: 'Brush', heroImg: IMG.interiorPaint,
    body: 'Our interior crews protect every surface, move and replace furniture, and finish on time without paint splatter on your floors or trim. Cabinet refinishing, accent walls, full-home repaints, and ceiling smooth-outs all available. Low-VOC formulations from Sherwin-Williams Emerald and Benjamin Moore Regal mean families and pets can re-occupy the space the same day.',
    includes: ['Furniture protected & moved', 'Drywall patch & smooth-out', 'Low-VOC premium paint', 'Trim, doors, ceilings included', 'Cabinet refinishing available', 'Clean job site every evening'],
    steps: [
      { n: '01', title: 'Walk', desc: 'In-home walkthrough and color plan.' },
      { n: '02', title: 'Protect', desc: 'Floors, furniture, and fixtures covered.' },
      { n: '03', title: 'Paint', desc: 'Premium low-VOC application.' },
      { n: '04', title: 'Clean', desc: 'Spotless cleanup, walls cured.' },
    ],
    faqs: [
      { q: 'Will the paint smell bother my family or pets?', a: 'We use low-VOC paints exclusively. The smell is faint and dissipates within hours. Most rooms can be re-occupied the same evening.' },
      { q: 'Do you do cabinet refinishing?', a: 'Yes. We spray cabinets in our shop or on-site with conversion varnish for a factory-grade finish. Most kitchens take 4 to 6 days.' },
      { q: 'Can you match an existing wall color?', a: 'We bring color-match swatches on-site and use a portable spectrophotometer to match within 0.5 Delta-E.' },
    ],
  },
  {
    slug: 'commercial-painting', trade: 'painting',
    name: 'Commercial Painting',
    short: 'After-hours commercial painting that does not interrupt your business.',
    icon: 'Building2', heroImg: IMG.commercial,
    body: 'We paint Austin offices, retail centers, restaurants, warehouses, and HOA common areas on weekends and after hours to avoid business disruption. Industrial-grade coatings handle high traffic, frequent cleaning, and outdoor weather extremes. We carry $2M general liability, W-2 employees only, and finish on the timeline we promise.',
    includes: ['After-hours & weekend scheduling', 'Industrial-grade coatings', 'Property-manager-friendly invoicing', '$2M liability coverage', 'OSHA-trained W-2 crews', 'COI provided before start'],
    steps: [
      { n: '01', title: 'Bid', desc: 'Detailed scope & line-item bid.' },
      { n: '02', title: 'Plan', desc: 'Schedule around your operations.' },
      { n: '03', title: 'Execute', desc: 'After-hours crews complete the work.' },
      { n: '04', title: 'Sign-off', desc: 'Manager walkthrough & invoice.' },
    ],
    faqs: [
      { q: 'Can you paint while we stay open?', a: 'Almost always. We work nights, weekends, or section-by-section to avoid disrupting operations.' },
      { q: 'Do you do HOA common areas?', a: 'Yes. We handle clubhouses, mailboxes, signage, fences, and shared exteriors with HOA-approved color palettes.' },
      { q: 'Can you provide a Certificate of Insurance?', a: 'A COI is provided before the first day on site. $2M general liability is standard on every commercial job.' },
    ],
  },
  {
    slug: 'residential-roofing', trade: 'roofing',
    name: 'Residential Roofing',
    short: 'Full-tear-off and re-roof installations built for Austin storms.',
    icon: 'Home', heroImg: IMG.roofWork,
    body: 'Most Austin roofs need replacement every 15 to 20 years; hail accelerates that timeline. We do complete tear-offs down to the decking, replace rotted wood, install premium synthetic underlayment, and warranty our workmanship for 5 years on top of the manufacturer warranty. GAF, Owens Corning, and CertainTeed shingles available with Class 4 impact-resistant options.',
    includes: ['Full tear-off to decking', 'Rotten wood replacement', 'Premium synthetic underlayment', 'GAF / Owens Corning / CertainTeed', 'Class 4 hail-resistant options', '5-year workmanship warranty'],
    steps: [
      { n: '01', title: 'Inspect', desc: 'Free roof inspection & quote.' },
      { n: '02', title: 'Plan', desc: 'Material & color selection.' },
      { n: '03', title: 'Build', desc: 'Tear-off and install in 1-2 days.' },
      { n: '04', title: 'Clean', desc: 'Magnetic nail sweep & final walk.' },
    ],
    faqs: [
      { q: 'How long does a roof replacement take?', a: 'Most single-family Austin homes are torn off and re-roofed in 1 to 2 days. Larger or steeper roofs may take 3.' },
      { q: 'Will you replace rotted decking?', a: 'Yes. Any rotten plywood found during tear-off is replaced before underlayment goes down. Cost is billed at the same per-sheet rate quoted up front.' },
      { q: 'Do you do impact-resistant shingles?', a: 'Yes. Class 4 IR shingles from GAF and Owens Corning qualify for insurance premium discounts of 5 to 30 percent.' },
    ],
  },
  {
    slug: 'metal-roofing', trade: 'roofing',
    name: 'Metal Roofing',
    short: 'Standing-seam metal roofing built to last 40+ years.',
    icon: 'Wrench', heroImg: IMG.modernHouse,
    body: 'Standing-seam metal roofs reflect heat, shed hail, and last 40 to 70 years. They cost more upfront than asphalt but never need replacement, qualify for insurance discounts, and add real resale value. We install Galvalume, Kynar 500 painted finishes, and copper accents on Hill Country luxury homes across Lakeway, Westlake, and Steiner Ranch.',
    includes: ['Standing-seam Galvalume or Kynar 500', '40-70 year material lifespan', 'Insurance premium discount eligible', 'Hidden fastener systems', 'Energy-reflective coatings', 'Lifetime workmanship warranty'],
    steps: [
      { n: '01', title: 'Design', desc: 'Profile, color, and trim selection.' },
      { n: '02', title: 'Fabricate', desc: 'Panels cut to exact roof dimensions.' },
      { n: '03', title: 'Install', desc: 'Precision standing-seam installation.' },
      { n: '04', title: 'Finish', desc: 'Custom flashing & sealing.' },
    ],
    faqs: [
      { q: 'How much more does metal cost than asphalt?', a: 'Roughly 2 to 3x upfront. Over a 30-year horizon metal is typically cheaper because asphalt needs replacement once or twice.' },
      { q: 'Will it be loud during rain?', a: 'No. With modern underlayment and decking the sound difference vs asphalt is negligible inside the home.' },
      { q: 'What color options do you offer?', a: '30+ Kynar 500 colors including matte black, slate, copper-tone, and standard browns and grays. We bring samples on-site.' },
    ],
  },
  {
    slug: 'roof-repair', trade: 'roofing',
    name: 'Roof Repair',
    short: 'Same-week leak detection and storm damage repair.',
    icon: 'Hammer', heroImg: IMG.crew,
    body: 'Small leaks turn into ceiling collapse and mold in a single Texas thunderstorm. Our rapid-response crews track water to the source, replace cracked pipe boots, missing shingles, lifted flashing, and damaged decking. Most repairs scheduled within 48 hours. We document everything for insurance and offer a 1-year warranty on every repair.',
    includes: ['48-hour response on emergencies', 'Leak tracing to source', 'Flashing, boot, and vent repair', 'Shingle color-match replacement', 'Insurance documentation included', '1-year repair warranty'],
    steps: [
      { n: '01', title: 'Call', desc: 'Same-week scheduling, emergency tarping.' },
      { n: '02', title: 'Find', desc: 'Locate the source of the leak.' },
      { n: '03', title: 'Fix', desc: 'Replace damaged materials.' },
      { n: '04', title: 'Test', desc: 'Water-test to confirm dry.' },
    ],
    faqs: [
      { q: 'Can you tarp my roof tonight?', a: 'Yes. Active emergencies during storm season are tarped within hours, often same day.' },
      { q: 'How much does a roof repair cost?', a: 'Most single-source leaks fall between $350 and $1,200 depending on access, shingle availability, and decking damage.' },
      { q: 'Do you warranty the repair?', a: 'Every repair carries a 1-year workmanship warranty. If the leak returns in that window we re-repair at no cost.' },
    ],
  },
  {
    slug: 'siding-installation', trade: 'siding',
    name: 'Siding Installation',
    short: 'James Hardie and engineered wood siding installed to manufacturer spec.',
    icon: 'Layers', heroImg: IMG.siding,
    body: 'James Hardie fiber cement siding outlasts wood by 30 years, resists fire, hail, and termites, and never warps in Texas heat. We are James Hardie installers and follow every spec — proper backing, blind nailing, joint flashing, and 1/4" clearance from grade. Also available: LP SmartSide engineered wood and natural cedar accents.',
    includes: ['James Hardie fiber cement', 'LP SmartSide engineered wood', 'Cedar accents available', 'Manufacturer-spec installation', 'Color-through ColorPlus finishes', '30-year non-prorated warranty'],
    steps: [
      { n: '01', title: 'Measure', desc: 'On-site measurement & estimate.' },
      { n: '02', title: 'Demo', desc: 'Remove old siding cleanly.' },
      { n: '03', title: 'Install', desc: 'Hang Hardie per spec sheets.' },
      { n: '04', title: 'Trim', desc: 'Finish trim, caulk, paint touch-ups.' },
    ],
    faqs: [
      { q: 'Is James Hardie really worth the upgrade?', a: 'Yes for any home that will be owned 10+ years. Hardie carries a 30-year non-prorated warranty vs 5 to 10 years for vinyl, and adds resale value at sale.' },
      { q: 'Will I need to repaint the siding?', a: 'ColorPlus factory finishes carry a 15-year color warranty. Most homeowners do not repaint for 12 to 15 years.' },
      { q: 'Can you match existing siding lines?', a: 'Yes. We stock the most common Hardie lap profiles and can patch sections without re-siding the whole house.' },
    ],
  },
  {
    slug: 'insurance-claims', trade: 'claims',
    name: 'Insurance Claims',
    short: 'We handle the entire storm claim from inspection to final invoice.',
    icon: 'FileText', heroImg: IMG.review,
    body: 'Insurance claim navigation is a full-time job — adjuster meetings, supplements, depreciation recovery, code upgrades. We have handled thousands of Austin storm claims and represent you in every adjuster meeting. You pay your deductible. We invoice the insurance company directly for everything else.',
    includes: ['Free storm damage inspection', 'Adjuster meeting representation', 'Supplement filing', 'Code upgrade coverage requests', 'Depreciation recovery', 'Direct insurance invoicing'],
    steps: [
      { n: '01', title: 'Inspect', desc: 'Free storm damage report.' },
      { n: '02', title: 'File', desc: 'We help file or supplement the claim.' },
      { n: '03', title: 'Meet', desc: 'We meet the adjuster on-site.' },
      { n: '04', title: 'Build', desc: 'Approved scope, you pay deductible only.' },
    ],
    faqs: [
      { q: 'Will my insurance rate go up if I file a claim?', a: 'Wind and hail claims are typically classified "act of God" and do not raise rates in Texas. We can walk through your specific policy.' },
      { q: 'What if my claim is denied?', a: 'We supplement denials by submitting additional photo evidence and code requirements. Most denied claims are approvable on supplement.' },
      { q: 'How much do I pay out of pocket?', a: 'Your deductible only. We never ask homeowners to "waive" or "absorb" a deductible — that is insurance fraud.' },
    ],
  },
];

export const tradeMeta = {
  painting: { name: 'Painting', tagline: 'Premium interior and exterior paint that lasts in Texas heat.' },
  roofing:  { name: 'Roofing',  tagline: 'Asphalt, metal, and storm repair from a crew that shows up on time.' },
  siding:   { name: 'Siding',   tagline: 'James Hardie installation done to the spec sheet, every time.' },
  claims:   { name: 'Insurance Claims', tagline: 'We handle adjuster meetings, supplements, and paperwork end to end.' },
} as const;

export const servicesByTrade = (t: Trade) => services.filter(s => s.trade === t);
