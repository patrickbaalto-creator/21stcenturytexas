import { Link, useParams } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { ServiceTile } from '../components/ServiceTile';
import { CityChip } from '../components/CityChip';
import { ReviewTile } from '../components/ReviewTile';
import { FadeIn } from '../components/FadeIn';
import { cityBySlug, serviceAreas } from '../data/serviceAreas';
import { services } from '../data/services';
import { reviews } from '../data/reviews';
import { useSEO } from '../utils/seo';
import NotFound from './NotFound';
import { MapPin, Phone, Star, ArrowRight } from 'lucide-react';

export default function CityPage() {
  const { slug = '' } = useParams();
  const city = cityBySlug(slug);

  useSEO(city ? {
    title: `Painting, Roofing & Siding in ${city.city}, TX | 21st Century`,
    description: `Top-rated exterior contractor in ${city.city}, TX. ${city.description} Call (512) 219-0342 for a free estimate.`,
    canonical: `/areas/${city.slug}`,
    schema: {
      '@context': 'https://schema.org', '@type': 'HomeAndConstructionBusiness',
      'name': '21st Century Painting, Roofing & Siding',
      'telephone': '(512) 219-0342',
      'address': { '@type': 'PostalAddress', 'streetAddress': '9811 A Beck Cir', 'addressLocality': 'Austin', 'addressRegion': 'TX', 'postalCode': '78758' },
      'areaServed': { '@type': 'City', 'name': city.city, 'containedInPlace': { '@type': 'State', 'name': 'Texas' } },
      'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '5', 'bestRating': '5', 'reviewCount': '300' },
    },
  } : { title: 'Area Not Found | 21st Century', description: '' });

  if (!city) return <NotFound />;

  const localReviews = reviews.filter(r => r.city.toLowerCase().includes(city.city.toLowerCase().split(' ')[0])).slice(0, 3);
  const fallbackReviews = localReviews.length ? localReviews : reviews.slice(0, 3);

  return (
    <>
      <Section className="!pt-14 lg:!pt-20 !pb-10">
        <Link to="/areas" className="inline-flex items-center gap-1.5 text-sm text-stone-mute hover:text-brand mb-6">
          <MapPin className="w-3.5 h-3.5" /> All service areas
        </Link>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-3">{city.state} · {city.zip} · Pop {city.population}</div>
              <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-5">
                Austin's exterior contractor — <span className="italic text-brand">now in {city.city}.</span>
              </h1>
              <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-2xl">{city.description}</p>
            </div>
            <div className="lg:col-span-4 bento bento-brand p-6 lg:p-7">
              <div className="flex items-center gap-1 text-white mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-white" />)}
              </div>
              <p className="text-white font-display text-xl leading-snug mb-2">{city.localTrust}</p>
              <p className="text-white/80 text-sm">Usually within 48 hours response time in {city.city}.</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="!pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <FadeIn className="bento p-6 lg:p-8 lg:col-span-2">
            <h2 className="font-display text-2xl font-bold mb-4">{city.city} Neighborhoods We Serve</h2>
            <div className="flex flex-wrap gap-2">
              {city.neighborhoods.map(n => (
                <span key={n} className="bg-cream-2 text-stone-ink text-sm font-semibold px-4 py-2 rounded-full">{n}</span>
              ))}
            </div>
            <p className="text-stone-mute text-sm mt-5">Don't see yours? We cover the full {city.city} metro. Call for any neighborhood not listed.</p>
          </FadeIn>
          <FadeIn className="bento bento-dark p-6 lg:p-8 flex flex-col justify-between" delay={0.1}>
            <div>
              <div className="text-brand text-[11px] tracking-[0.18em] uppercase font-bold mb-3">Get in touch</div>
              <h3 className="text-white font-display text-2xl mb-4">Free {city.city} estimate</h3>
              <p className="text-white/70 text-sm mb-6">Most {city.city} estimates scheduled within 48 hours. We bring real samples.</p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:5122190342" className="bg-brand text-white font-bold py-3 rounded-full text-center text-sm hover:bg-brand-dark transition-colors">
                <Phone className="w-4 h-4 inline mr-1.5" /> (512) 219-0342
              </a>
              <Link to="/contact" className="bg-white/10 hover:bg-white/15 text-white font-bold py-3 rounded-full text-center text-sm border border-white/15">
                Request Estimate
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-cream-2/40 !py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="shell">
          <SectionHead eyebrow={`Services in ${city.city}`} title={`Everything we do, in ${city.city}.`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.slice(0, 6).map(s => <ServiceTile key={s.slug} service={s} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary">Get a {city.city} estimate <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Local reviews" title={`What ${city.city} homeowners say.`} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {fallbackReviews.map((r, i) => <ReviewTile key={i} review={r} />)}
        </div>
      </Section>

      <Section className="!py-14">
        <FadeIn>
          <h3 className="text-stone-mute text-[11px] tracking-[0.18em] uppercase font-bold mb-5">Also serving nearby</h3>
          <div className="flex flex-wrap gap-2">
            {city.nearbyAreas.map(s => {
              const nearby = serviceAreas.find(a => a.slug === s);
              return nearby ? <CityChip key={s} slug={nearby.slug} city={nearby.city} /> : null;
            })}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
