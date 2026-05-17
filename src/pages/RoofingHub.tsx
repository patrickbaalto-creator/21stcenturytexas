import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { ServiceTile } from '../components/ServiceTile';
import { ProjectCard } from '../components/ProjectCard';
import { ReviewTile } from '../components/ReviewTile';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { FadeIn } from '../components/FadeIn';
import { servicesByTrade } from '../data/services';
import { projectsByTrade } from '../data/projects';
import { reviewsByTrade } from '../data/reviews';
import { img, IMG } from '../utils/unsplash';
import { useSEO } from '../utils/seo';
import { ArrowRight, Phone } from 'lucide-react';

export default function RoofingHub() {
  useSEO({
    title: 'Austin Roofing Contractor | 21st Century — Since 1996',
    description: 'Residential roofing, metal roofing, and storm repair in Austin TX. GAF, Owens Corning, CertainTeed. Class 4 hail-resistant options. Call (512) 219-0342.',
    canonical: '/roofing',
  });

  return (
    <>
      <Section className="!pt-12 lg:!pt-20 !pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <FadeIn className="lg:col-span-7">
            <div className="eyebrow mb-4">Trade · Roofing</div>
            <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-6">
              Roofs that <span className="italic text-brand">survive</span> hail season.
            </h1>
            <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-xl mb-6">
              Full tear-offs, Class 4 impact-resistant shingles, standing-seam metal, and rapid storm repair. Backed by 5 years of workmanship warranty on top of the manufacturer coverage.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Free Roof Inspection <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:5122190342" className="btn-ghost"><Phone className="w-4 h-4" /> (512) 219-0342</a>
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="bento overflow-hidden aspect-[5/4]">
              <img src={img(IMG.roofWork, 1100)} alt="Roof installation in Austin" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Roofing services" title="Inspection. Replacement. Repair." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {servicesByTrade('roofing').map(s => <FadeIn key={s.slug}><ServiceTile service={s} /></FadeIn>)}
        </div>
      </Section>

      <Section className="!py-14 lg:!py-24">
        <FadeIn>
          <SectionHead eyebrow="Before / After" title="Tear-off to brand new." />
          <BeforeAfterSlider before={IMG.homeExterior} after={IMG.crew} alt="Austin roof replacement" />
        </FadeIn>
      </Section>

      <Section className="bg-cream-2/40 !py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="shell">
          <SectionHead eyebrow="Recent roofing" title="Case studies." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {projectsByTrade('roofing').map(p => <FadeIn key={p.slug}><ProjectCard project={p} /></FadeIn>)}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="What homeowners say" title="Roofing reviews." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviewsByTrade('roofing').map((r, i) => <FadeIn key={i}><ReviewTile review={r} /></FadeIn>)}
        </div>
      </Section>
    </>
  );
}
