import { Link } from 'react-router-dom';
import { Section, SectionHead } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { posts } from '../data/posts';
import { img } from '../utils/unsplash';
import { useSEO } from '../utils/seo';

export default function Blog() {
  useSEO({
    title: 'Blog — 21st Century Painting, Roofing & Siding | Austin TX',
    description: 'Guides, tips, and explanations from a 29-year Austin exterior contractor. Painting, roofing, siding, and insurance claims.',
    canonical: '/blog',
  });

  return (
    <>
      <Section className="!pt-14 lg:!pt-20 !pb-10">
        <FadeIn>
          <div className="eyebrow mb-4">Insights</div>
          <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-5 max-w-3xl">
            Notes from the field.
          </h1>
          <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-2xl">
            Guides and explanations from a 29-year Austin exterior contractor. Painting, roofing, siding, and insurance claims.
          </p>
        </FadeIn>
      </Section>

      <Section className="!pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {posts.map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 3) * 0.05}>
              <Link to={`/blog/${p.slug}`} className="bento overflow-hidden block group h-full flex flex-col">
                <div className="aspect-video overflow-hidden bg-cream-2">
                  <img src={img(p.cover, 900)} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-brand text-[10px] tracking-[0.18em] uppercase font-bold mb-2">{p.category}</span>
                  <h3 className="text-lg font-display font-bold mb-2 leading-snug group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="text-stone-mute text-sm leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-stone-mute pt-3 border-t border-stone-line">
                    <span>{p.date}</span><span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
