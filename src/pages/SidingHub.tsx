import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { ServiceTile } from '../components/ServiceTile';
import { ProjectCard } from '../components/ProjectCard';
import { ReviewTile } from '../components/ReviewTile';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { FadeIn } from '../components/FadeIn';
import { services } from '../data/services';
import { projectsByTrade } from '../data/projects';
import { reviewsByTrade } from '../data/reviews';
import { img, IMG } from '../utils/unsplash';
import { useSEO } from '../utils/seo';
import { ArrowRight, Phone } from 'lucide-react';

export default function SidingHub() {
  useSEO({
    title: 'Austin James Hardie Siding Installer | 21st Century',
    description: 'James Hardie fiber cement and LP SmartSide installation in Austin TX. Manufacturer-spec installation. 30-year non-prorated warranty. Call (512) 219-0342.',
    canonical: '/siding',
  });

  const visible = services.filter(s => s.trade === 'siding' || s.trade === 'claims');

  return (
    <>
      <Section className="!pt-12 lg:!pt-20 !pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <FadeIn className="lg:col-span-7">
            <div className="eyebrow mb-4">Trade · Siding + Claims</div>
            <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-6">
              Hardie, <span className="italic text-brand">installed right.</span>
            </h1>
            <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-xl mb-6">
              Manufacturer-spec James Hardie installation, plus full insurance claim representation when a storm hits. You pay the deductible. We invoice everything else.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Free Siding Estimate <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:5122190342" className="btn-ghost"><Phone className="w-4 h-4" /> (512) 219-0342</a>
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="bento overflow-hidden aspect-[5/4]">
              <img src={img(IMG.siding, 1100)} alt="James Hardie siding install in Austin" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Siding & Claims" title="The full envelope, covered." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {visible.map(s => <FadeIn key={s.slug}><ServiceTile service={s} /></FadeIn>)}
        </div>
      </Section>

      <Section className="!py-14 lg:!py-24">
        <FadeIn>
          <SectionHead eyebrow="Before / After" title="Old siding to Hardie ColorPlus." />
          <BeforeAfterSlider before={IMG.homeFar} after={IMG.siding} alt="Cedar Park Hardie reside" />
        </FadeIn>
      </Section>

      <Section className="bg-cream-2/40 !py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="shell">
          <SectionHead eyebrow="Recent siding" title="Case studies." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {projectsByTrade('siding').map(p => <FadeIn key={p.slug}><ProjectCard project={p} /></FadeIn>)}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Reviews" title="Siding & claims feedback." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {[...reviewsByTrade('siding'), ...reviewsByTrade('claims')].map((r, i) => <FadeIn key={i}><ReviewTile review={r} /></FadeIn>)}
        </div>
      </Section>
    </>
  );
}
