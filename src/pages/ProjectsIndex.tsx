import { useState } from 'react';
import { Section, SectionHead } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { FadeIn } from '../components/FadeIn';
import { projects } from '../data/projects';
import { tradeMeta, type Trade } from '../data/services';
import { useSEO } from '../utils/seo';

const filters: Array<Trade | 'all'> = ['all', 'painting', 'roofing', 'siding'];

export default function ProjectsIndex() {
  useSEO({
    title: 'Projects & Case Studies | 21st Century Painting, Roofing & Siding',
    description: 'Real Austin painting, roofing, and James Hardie siding projects. See scope, materials, and timelines from our recent work.',
    canonical: '/projects',
  });

  const [filter, setFilter] = useState<Trade | 'all'>('all');
  const visible = filter === 'all' ? projects : projects.filter(p => p.trade === filter);

  return (
    <>
      <Section className="!pt-14 lg:!pt-20 !pb-8">
        <FadeIn>
          <div className="eyebrow mb-4">Projects</div>
          <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-5 max-w-3xl">
            Real homes. Real scope. <span className="italic text-brand">Real materials.</span>
          </h1>
          <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-2xl">
            Every project listed below was completed by our crews in Austin or the surrounding suburbs. Scope, products used, and actual duration — no stock photos or made-up timelines.
          </p>
        </FadeIn>
      </Section>

      <Section className="!pt-4">
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${filter === f ? 'bg-stone-ink text-white' : 'bg-white text-stone-ink border border-stone-line hover:border-stone-ink'}`}>
              {f === 'all' ? 'All' : tradeMeta[f].name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {visible.map(p => <FadeIn key={p.slug}><ProjectCard project={p} /></FadeIn>)}
        </div>
      </Section>
    </>
  );
}
