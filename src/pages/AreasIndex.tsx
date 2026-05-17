import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { serviceAreas } from '../data/serviceAreas';
import { useSEO } from '../utils/seo';
import { MapPin, ArrowUpRight, Phone } from 'lucide-react';

export default function AreasIndex() {
  useSEO({
    title: 'Service Areas — Austin Painting, Roofing & Siding | 21st Century',
    description: 'We serve Austin, Round Rock, Cedar Park, Georgetown, Leander, Lakeway, Kyle, Buda, and Pflugerville. Locally owned since 1996.',
    canonical: '/areas',
  });

  return (
    <>
      <Section className="!pt-14 lg:!pt-20 !pb-10">
        <FadeIn>
          <div className="eyebrow mb-4">Service Areas</div>
          <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-6 max-w-3xl">
            Nine cities. <span className="italic text-brand">One zip code we call home.</span>
          </h1>
          <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-2xl">
            We have painted, re-roofed, and re-sided across Central Texas for 29 years. Pick your city for local trust signals, neighborhood coverage, and area-specific projects.
          </p>
        </FadeIn>
      </Section>

      <Section className="!pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {serviceAreas.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.03}>
              <Link to={`/areas/${c.slug}`} className="bento p-6 lg:p-8 group flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-full bg-cream-2 flex items-center justify-center text-brand">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-stone-mute group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2 group-hover:text-brand transition-colors">{c.city}</h2>
                <div className="text-stone-mute text-xs uppercase tracking-wider font-semibold mb-4">{c.state} {c.zip} · Pop {c.population}</div>
                <p className="text-stone-soft text-[14.5px] leading-relaxed mb-5 flex-1">{c.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-line">
                  {c.neighborhoods.slice(0, 4).map(n => (
                    <span key={n} className="text-[11px] bg-cream-2 text-stone-soft px-2.5 py-1 rounded-full font-medium">{n}</span>
                  ))}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="bento bento-brand p-10 lg:p-16 text-center">
            <h2 className="text-white text-3xl lg:text-5xl mb-5">Don't see your city?</h2>
            <p className="text-white/90 text-lg mb-7 max-w-xl mx-auto">We may still serve you. Call and ask — we run crews across all of Central Texas during storm season.</p>
            <a href="tel:5122190342" className="inline-flex items-center gap-2 bg-white text-brand font-bold py-3.5 px-6 rounded-full hover:bg-cream transition-colors">
              <Phone className="w-4 h-4" /> (512) 219-0342
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
