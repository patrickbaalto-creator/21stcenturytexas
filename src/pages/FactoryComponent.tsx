import { useParams } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProcessSteps } from '../components/ProcessSteps';
import { RelatedServices } from '../components/RelatedServices';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaBanner } from '../components/CtaBanner';
import { services } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import { useSEO } from '../utils/seo';

const warningSigns: Record<string, { icon: string; title: string; desc: string }[]> = {
  'roof-inspection': [
    { icon: 'Droplets', title: 'Water Stains on Ceilings', desc: 'Brown rings or discoloration on ceilings often mean water is pooling above.' },
    { icon: 'Wind', title: 'Missing or Lifted Shingles', desc: 'High winds can loosen shingles, exposing your deck to direct moisture.' },
    { icon: 'Sun', title: 'Granule Loss in Gutters', desc: 'Excessive granules in gutters indicate UV degradation of your shingles.' },
    { icon: 'AlertTriangle', title: 'Sagging Roof Deck', desc: 'Any visible sag between the rafters signals structural moisture damage.' },
    { icon: 'Thermometer', title: 'High Energy Bills', desc: 'Poor attic ventilation from a failing roof drives up cooling costs in summer.' },
    { icon: 'Home', title: 'Daylight Through Boards', desc: 'If light enters your attic through roof boards, water can too.' },
  ],
  'roof-repair': [
    { icon: 'Droplets', title: 'Active Dripping Inside', desc: 'Any water actively entering the home requires immediate emergency repair.' },
    { icon: 'AlertTriangle', title: 'Dark Spots on Decking', desc: 'Black patches on your attic wood indicate mold and long-term moisture.' },
    { icon: 'Wind', title: 'Flashing Separation', desc: 'Metal flashing around chimneys and vents cracks and lifts over time.' },
    { icon: 'Home', title: 'Chimney Mortar Cracks', desc: 'Crumbling mortar around chimney base leads to significant water infiltration.' },
    { icon: 'Thermometer', title: 'Ice Dams in Winter', desc: 'Ice dams force melt water under shingles and into the structure.' },
    { icon: 'Sun', title: 'Blistering Paint Near Eaves', desc: 'Peeling exterior paint near the roofline often traces back to roof leaks.' },
  ],
};

const defaultWarnings = [
  { icon: 'Droplets', title: 'Active Leaks or Drips', desc: 'Any water entering the home is an immediate emergency requiring action.' },
  { icon: 'AlertTriangle', title: 'Sagging or Bowing Decking', desc: 'Structural sag indicates prolonged moisture damage to the roof deck.' },
  { icon: 'Sun', title: 'Excessive Granule Loss', desc: 'Heavy granule shedding accelerates UV deterioration of shingle material.' },
  { icon: 'Wind', title: 'Loose or Missing Flashing', desc: 'Flashing failures around pipes and vents account for most roof leaks.' },
  { icon: 'Home', title: 'Age Over 20 Years', desc: 'Most asphalt roofs reach end of life between 20-25 years in Texas heat.' },
  { icon: 'Thermometer', title: 'Rising Energy Costs', desc: 'A compromised roof loses insulation efficiency, spiking HVAC bills.' },
];

function ServicePage({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug);

  useSEO(service ? {
    title: `${service.name} in Austin TX | 21st Century Roofing`,
    description: `${service.shortDesc} Serving Austin, Round Rock, Cedar Park & surrounding areas. BBB Accredited. Call (512) 219-0342.`,
    canonical: `/services/${slug}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.name,
      'description': service.fullDesc,
      'provider': { '@type': 'RoofingContractor', 'name': '21st Century Roofing Austin', 'telephone': '(512) 219-0342' },
      'areaServed': { '@type': 'State', 'name': 'Texas' },
    },
  } : { title: 'Service Not Found | 21st Century', description: '' });

  if (!service) return <NotFound />;
  const Icon = LucideIcons[service.icon as keyof typeof LucideIcons] as any || LucideIcons.Wrench;
  const warnings = warningSigns[slug] || defaultWarnings;

  return (
    <div className="bg-white">
      <PageHero image={service.heroImage} title={service.name} eyebrow="Our Services" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: service.name }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img src={service.heroImage} alt={`${service.name} in Austin TX`} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">21st Century Austin</div>
            <h2 className="font-display text-4xl text-[#1e3a5f] mb-6">Expert {service.name}</h2>
            <p className="text-[#475569] leading-relaxed mb-8">{service.fullDesc}</p>

            <div className="bg-[#f8fafc] border border-gray-100 p-6 rounded-2xl mb-8">
              <h4 className="text-[#1d4ed8] text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                <Icon className="w-4 h-4" /> What's Included
              </h4>
              <ul className="space-y-3">
                {service.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <LucideIcons.CheckCircle className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                    <span className="text-[#334155] text-sm">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-gold rounded-lg text-center px-6 py-3 text-sm font-bold uppercase tracking-wide">Get a Free Quote</Link>
              <a href="tel:5122190342" className="btn-ghost rounded-lg text-center px-6 py-3 text-sm font-bold uppercase tracking-wide">(512) 219-0342</a>
            </div>
          </div>
        </div>

        <div className="mb-24 bg-[#1e3a5f] rounded-2xl px-8 py-16">
          <h3 className="text-center font-display text-4xl text-white mb-14">Our Process</h3>
          <ProcessSteps steps={service.steps} />
        </div>

        <div className="mb-24">
          <h3 className="font-display text-4xl text-[#1e3a5f] mb-12">Warning Signs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warnings.map((w, i) => {
              const WIcon = LucideIcons[w.icon as keyof typeof LucideIcons] as any || LucideIcons.AlertTriangle;
              return (
                <div key={i} className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <WIcon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-[#1e3a5f] font-bold mb-1">{w.title}</h4>
                    <p className="text-[#64748b] text-sm">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h3 className="font-display text-4xl text-[#1e3a5f] mb-12">Related Services</h3>
        <RelatedServices current={service.slug} />

        <div className="mt-24">
          <h3 className="text-center font-display text-4xl text-[#1e3a5f] mb-12">Client Testimonials</h3>
          <TestimonialsSection />
        </div>

        <CtaBanner headline="Ready to secure your home?" />
      </div>
    </div>
  );
}

function CityPage({ slug }: { slug: string }) {
  const cityData = serviceAreas.find(s => s.slug === slug);

  useSEO(cityData ? {
    title: `Painting, Roofing & Siding in ${cityData.city}, TX | 21st Century`,
    description: `Top-rated exterior contractor serving ${cityData.city}, TX. ${cityData.description} BBB Accredited. Free estimates. Call (512) 219-0342.`,
    canonical: `/service-areas/${slug}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      'name': '21st Century Painting, Roofing & Siding',
      'telephone': '(512) 219-0342',
      'address': { '@type': 'PostalAddress', 'streetAddress': '9811 A Beck Cir', 'addressLocality': 'Austin', 'addressRegion': 'TX', 'postalCode': '78758' },
      'areaServed': { '@type': 'City', 'name': cityData.city, 'containedInPlace': { '@type': 'State', 'name': 'Texas' } },
      'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '5', 'bestRating': '5', 'reviewCount': '300' },
    },
  } : { title: 'Area Not Found | 21st Century', description: '' });

  if (!cityData) return <NotFound />;

  return (
    <div className="bg-white">
      <PageHero
        eyebrow={`Painting, Roofing & Siding in ${cityData.city}, TX`}
        title={`${cityData.city}'s Trusted Exterior Contractor.`}
        subtitle={cityData.description}
        image="/images/roof-repair-contractor.webp"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Service Areas', href: '/service-areas/austin' }, { label: cityData.city }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">Local Exterior Experts</div>
            <h2 className="font-display text-4xl text-[#1e3a5f] mb-6">Serving {cityData.city}</h2>
            <p className="text-[#475569] leading-relaxed mb-6">
              {cityData.city} sees blistering summer sun, sudden hail, and humidity swings that destroy cheap paint and aging shingles. At 21st Century we have painted, re-roofed, and re-sided {cityData.city} homes since 1996 — using premium materials engineered for the Central Texas climate.
            </p>
            <div className="bg-[#f8fafc] border border-gray-100 p-6 rounded-2xl mb-6">
              <h4 className="text-[#1d4ed8] text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                <LucideIcons.MapPin className="w-4 h-4" /> Neighborhoods Served
              </h4>
              <div className="flex flex-wrap gap-2">
                {cityData.neighborhoods.map(n => (
                  <span key={n} className="bg-white border border-gray-200 px-3 py-1.5 rounded-md text-sm text-[#334155]">{n}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-[#1e3a5f] p-8 rounded-2xl text-center">
              <h3 className="font-display text-2xl text-white mb-2">{cityData.localTrust}</h3>
              <p className="text-white/70 text-sm mb-6">Usually within 2 hours response time in {cityData.city}.</p>
              <div className="relative rounded-xl overflow-hidden min-h-[140px] flex flex-col items-center justify-center">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="21st Century team" />
                <p className="text-white font-medium mb-3 relative z-10 flex items-center gap-2">
                  <LucideIcons.MapPin className="text-yellow-300" /> Serving {cityData.city}, TX {cityData.zip}
                </p>
                <a
                  href={`https://www.google.com/maps/search/21st Century+Roofing+${encodeURIComponent(cityData.city)}+TX`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-yellow-300 uppercase tracking-wider relative z-10 font-bold hover:text-white transition-colors"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-center font-display text-4xl text-[#1e3a5f] mb-12">Services in {cityData.city}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s, i) => {
              const Icon = LucideIcons[s.icon as keyof typeof LucideIcons] as any || LucideIcons.Wrench;
              return (
                <Link to={`/services/${s.slug}`} key={i} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-7 rounded-2xl group">
                  <div className="w-12 h-12 rounded-full bg-[#f0f4ff] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#1d4ed8]" />
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] text-lg mb-2 group-hover:text-[#1d4ed8] transition-colors">{s.name}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-5">{s.shortDesc}</p>
                  <span className="text-[#1d4ed8] text-xs font-bold tracking-wider uppercase flex items-center gap-1">Learn More <LucideIcons.ArrowRight className="w-4 h-4" /></span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mb-24 text-center">
          <h4 className="text-[#1d4ed8] text-xs uppercase tracking-widest font-bold mb-6">Also Serving Nearby</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {cityData.nearbyAreas.map(areaSlug => {
              const nearby = serviceAreas.find(s => s.slug === areaSlug);
              return nearby ? (
                <Link key={areaSlug} to={`/service-areas/${areaSlug}`} className="bg-[#f8fafc] border border-gray-200 text-[#1e3a5f] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#1e3a5f] hover:text-white transition-colors">
                  {nearby.city}
                </Link>
              ) : null;
            })}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-center font-display text-4xl text-[#1e3a5f] mb-12">Local Reviews</h3>
          <TestimonialsSection />
        </div>

        <CtaBanner headline={`Need a roofer in ${cityData.city}?`} />
      </div>
    </div>
  );
}

function RoofTypePage({ slug }: { slug: string }) {
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  useSEO({
    title: `${name} Roofing in Austin TX | 21st Century Roofing`,
    description: `Expert ${name} roofing installation and repair in Austin, TX. BBB Accredited contractor. Durable solutions engineered for the Texas climate. Call (512) 219-0342.`,
    canonical: `/roof-types/${slug}`,
  });

  const heroImages: Record<string, string> = {
    'asphalt-shingles': '/images/gallery-shingles.webp',
    'metal': '/images/metal-roofing-austin.webp',
    'tile': '/images/tile-roofing.webp',
    'flat': '/images/flat-roof-repair.webp',
  };
  const heroImg = heroImages[slug] || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80';

  return (
    <div className="bg-white">
      <PageHero title={name} eyebrow="Roof Types" image={heroImg} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Roof Types', href: '/roof-types' }, { label: name }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img src={heroImg} alt={`${name} roofing Austin TX`} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">21st Century Austin</div>
            <h2 className="font-display text-4xl text-[#1e3a5f] mb-6">About {name}</h2>
            <p className="text-[#475569] leading-relaxed mb-6">
              Premium specialized roofing engineered for the specific demands of Central Texas. We employ Master-certified installation techniques to ensure the integrity, durability, and visual appeal of your {name} system.
            </p>
            <div className="bg-[#f8fafc] border border-gray-100 p-5 rounded-xl mb-6">
              <h4 className="text-[#1d4ed8] text-xs uppercase tracking-widest font-bold mb-3">Best Used For:</h4>
              <div className="flex flex-wrap gap-2">
                {['Durability', 'High Winds', 'Energy Efficiency'].map(tag => (
                  <span key={tag} className="bg-[#e0e7ff] text-[#1d4ed8] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 p-5 rounded-xl">
                <LucideIcons.ThumbsUp className="w-7 h-7 text-green-600 mb-3" />
                <h4 className="text-[#1e3a5f] font-bold mb-1 text-sm">Pros</h4>
                <p className="text-[#64748b] text-xs">Long lifespan, highly resilient, excellent weather resistance.</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 p-5 rounded-xl">
                <LucideIcons.ThumbsDown className="w-7 h-7 text-orange-500 mb-3" />
                <h4 className="text-[#1e3a5f] font-bold mb-1 text-sm">Cons</h4>
                <p className="text-[#64748b] text-xs">Higher upfront investment compared to standard materials.</p>
              </div>
            </div>
          </div>
        </div>

        <CtaBanner headline="Interested in this style?" />
      </div>
    </div>
  );
}

export default function FactoryComponent({ type }: { type: 'service' | 'city' | 'rooftype' }) {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <NotFound />;
  if (type === 'service') return <ServicePage slug={slug} />;
  if (type === 'city') return <CityPage slug={slug} />;
  return <RoofTypePage slug={slug} />;
}
