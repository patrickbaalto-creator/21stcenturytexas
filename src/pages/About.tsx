import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { img, IMG } from '../utils/unsplash';
import { useSEO } from '../utils/seo';
import { ArrowRight, Phone, Check } from 'lucide-react';

const milestones = [
  { year: '1996', title: 'Founded in Austin', body: 'Started as a one-truck painting operation on the east side of Austin.' },
  { year: '2003', title: 'Roofing added', body: 'Brought a roofing division in-house after years of subbing to outside crews who flaked on schedules.' },
  { year: '2009', title: 'James Hardie installer', body: 'Became a certified James Hardie installer; now installs fiber cement on 80+ homes per year.' },
  { year: '2014', title: 'Insurance claim team', body: 'Built a dedicated claim team after a brutal hail season exposed how badly homeowners were being short-paid.' },
  { year: '2020', title: '300+ five-star reviews', body: 'Crossed the 300 mark across Google, Yelp, BBB, and Angi.' },
  { year: 'Today', title: 'Three trades, one crew', body: 'Painting, roofing, and siding from the same family-owned shop. Same warranty, same standards, since 1996.' },
];

const values = [
  { title: 'One warranty', body: 'Painting, roofing, and siding all backed by the same workmanship guarantee. No finger-pointing between trades.' },
  { title: 'Real materials', body: 'Sherwin-Williams, Benjamin Moore, James Hardie, GAF — no off-brand substitutes to pad margins.' },
  { title: 'W-2 crews', body: 'Our painters and roofers are full-time employees, not subs we met yesterday. They show up because they work here.' },
  { title: 'Honest claims', body: 'We never ask homeowners to "waive" or "absorb" a deductible. That is insurance fraud. We invoice insurance directly.' },
];

export default function About() {
  useSEO({
    title: 'About 21st Century Painting, Roofing & Siding — Austin Since 1996',
    description: 'Family-owned Austin painting, roofing, and siding contractor since 1996. 300+ five-star reviews. James Hardie installer. EPA Lead-Safe certified.',
    canonical: '/about',
  });

  return (
    <>
      <Section className="!pt-14 lg:!pt-20 !pb-10">
        <FadeIn>
          <div className="eyebrow mb-4">About</div>
          <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-6 max-w-3xl">
            One family. Three trades. <span className="italic text-brand">29 years in Austin.</span>
          </h1>
          <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-2xl">
            We started as a one-truck painting operation in 1996. Today we paint, roof, and re-side homes across Central Texas with the same crews that have been here for years — and the same family at the top.
          </p>
        </FadeIn>
      </Section>

      <Section className="!pt-4">
        <FadeIn>
          <div className="bento overflow-hidden aspect-[16/9] lg:aspect-[21/9]">
            <img src={img(IMG.crew, 2000)} alt="21st Century crew on site" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionHead eyebrow="Timeline" title="29 years of Austin homes." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {milestones.map((m, i) => (
            <FadeIn key={m.year} delay={i * 0.04}>
              <div className="bento p-7 h-full">
                <div className="font-display text-brand text-3xl font-bold mb-3">{m.year}</div>
                <h3 className="text-xl font-display font-bold mb-3">{m.title}</h3>
                <p className="text-stone-mute text-[14.5px] leading-relaxed">{m.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-cream-2/40 !py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="shell">
          <SectionHead eyebrow="What we believe" title="Standards we keep, written down." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {values.map(v => (
              <FadeIn key={v.title}>
                <div className="bento p-7 lg:p-8 h-full">
                  <div className="w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center mb-4">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{v.title}</h3>
                  <p className="text-stone-soft leading-relaxed">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="bento bento-dark p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-white text-4xl lg:text-5xl mb-6">Let's get a number on your project.</h2>
              <p className="text-white/70 text-lg mb-8">Free estimate, real samples, line-item bid. No high-pressure pitch.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary"><ArrowRight className="w-4 h-4" /> Free Estimate</Link>
                <a href="tel:5122190342" className="btn-soft"><Phone className="w-4 h-4" /> (512) 219-0342</a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
