import { Link } from 'react-router-dom';
import { BentoHero } from '../components/BentoHero';
import { TradeTabs } from '../components/TradeTabs';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ProjectCard } from '../components/ProjectCard';
import { ReviewTile } from '../components/ReviewTile';
import { ColorSwatchStrip } from '../components/ColorSwatchStrip';
import { Section, SectionHead } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { projects } from '../data/projects';
import { reviews } from '../data/reviews';
import { posts } from '../data/posts';
import { img, IMG } from '../utils/unsplash';
import { useSEO } from '../utils/seo';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';

export default function Home() {
  useSEO({
    title: '21st Century Painting, Roofing & Siding | Austin, TX Since 1996',
    description: "Austin's full-service exterior contractor since 1996. Painting, roofing, and James Hardie siding. 300+ five-star reviews. Free estimates. Call (512) 219-0342.",
    canonical: '/',
  });

  return (
    <>
      <BentoHero />

      {/* Color swatch strip — paint trade visual cue */}
      <Section className="!py-10 lg:!py-14">
        <FadeIn>
          <div className="flex items-center justify-between mb-5">
            <div className="eyebrow">A palette for every Austin home</div>
            <Link to="/painting" className="link text-sm">Browse painting services</Link>
          </div>
          <ColorSwatchStrip />
        </FadeIn>
      </Section>

      {/* Trade tabs */}
      <Section className="!pt-6 lg:!pt-10">
        <SectionHead eyebrow="What we do" title="Every exterior trade. One contractor." kicker="Painting, roofing, and James Hardie siding all from the same crews. When the re-roof reveals damaged siding, we fix it without a second contract." />
        <TradeTabs />
      </Section>

      {/* Before / After */}
      <Section className="!py-14 lg:!py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <FadeIn className="lg:col-span-5 order-2 lg:order-1">
            <div className="eyebrow mb-4">Before / After</div>
            <h2 className="text-4xl lg:text-5xl mb-5">Drag the line. See the difference.</h2>
            <p className="text-stone-soft text-lg leading-relaxed mb-6">
              Real projects from Austin neighborhoods. Same homes, photographed from the same angle, separated only by our crews and a couple of weeks.
            </p>
            <Link to="/projects" className="btn-soft">Explore the portfolio <ArrowRight className="w-4 h-4" /></Link>
          </FadeIn>
          <FadeIn className="lg:col-span-7 order-1 lg:order-2" delay={0.1}>
            <BeforeAfterSlider before={IMG.house2} after={IMG.exteriorHome} alt="Tarrytown bungalow repaint" />
          </FadeIn>
        </div>
      </Section>

      {/* Projects grid */}
      <Section className="bg-cream-2/40 !py-20 lg:!py-28 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="shell">
          <div className="flex items-end justify-between mb-12">
            <SectionHead eyebrow="Recent work" title="Case studies from Austin homes." />
            <Link to="/projects" className="hidden md:inline-flex link text-sm">All projects <ArrowUpRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {projects.slice(0, 6).map(p => <FadeIn key={p.slug}><ProjectCard project={p} /></FadeIn>)}
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHead eyebrow="What homeowners say" title="300+ five-star reviews. Here are 6." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.slice(0, 6).map((r, i) => <FadeIn key={i} delay={i * 0.04}><ReviewTile review={r} /></FadeIn>)}
        </div>
        <div className="text-center mt-10">
          <Link to="/reviews" className="btn-soft">Read all reviews <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </Section>

      {/* Blog teaser */}
      <Section className="!py-20 lg:!py-24">
        <div className="flex items-end justify-between mb-10">
          <SectionHead eyebrow="Insights" title="Guides for Austin homeowners." />
          <Link to="/blog" className="hidden md:inline-flex link text-sm">All articles <ArrowUpRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {posts.slice(0, 3).map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.06}>
              <Link to={`/blog/${p.slug}`} className="bento overflow-hidden block group h-full flex flex-col">
                <div className="aspect-video overflow-hidden bg-cream-2">
                  <img src={img(p.cover, 900)} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-5 lg:p-6 flex-1 flex flex-col">
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

      {/* CTA */}
      <Section className="!pb-24">
        <FadeIn>
          <div className="bento bento-dark p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl mx-auto">
              <div className="eyebrow text-brand mb-4">Ready when you are</div>
              <h2 className="text-white text-4xl lg:text-5xl mb-6">Get a free, no-pressure estimate.</h2>
              <p className="text-white/70 text-lg mb-8">Most homes are scoped within 48 hours. We bring real material samples and an honest line-item bid.</p>
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
