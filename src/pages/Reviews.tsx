import { Section, SectionHead } from '../components/Section';
import { ReviewTile } from '../components/ReviewTile';
import { FadeIn } from '../components/FadeIn';
import { reviews } from '../data/reviews';
import { useSEO } from '../utils/seo';
import { Star, ArrowRight } from 'lucide-react';

export default function Reviews() {
  useSEO({
    title: 'Reviews — 21st Century Painting, Roofing & Siding Austin TX',
    description: '300+ five-star reviews from Austin homeowners. Read what real clients say about our painting, roofing, and James Hardie siding work.',
    canonical: '/reviews',
  });

  return (
    <>
      <Section className="!pt-14 lg:!pt-20 !pb-10">
        <FadeIn>
          <div className="eyebrow mb-4">Reviews</div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl lg:text-7xl leading-[0.98] tracking-tight mb-5">
                <span className="italic text-brand">300+</span> five-star reviews.<br />
                Here are all of them.
              </h1>
              <p className="text-stone-soft text-lg leading-relaxed max-w-xl">
                Verified across Google, Yelp, Angi, and BBB. Sorted by recency.
              </p>
            </div>
            <div className="lg:col-span-4 bento bento-brand p-6 lg:p-7">
              <div className="flex items-center gap-1 text-white mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-white" />)}
              </div>
              <div className="font-display text-5xl text-white font-bold leading-none mb-1">5.0</div>
              <div className="text-white/85 text-sm font-semibold">Average across all platforms</div>
              <a href="https://www.google.com/search?q=21st+century+painting+roofing+siding+austin+reviews" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-white text-sm font-bold border-b border-white/40 pb-0.5 hover:border-white">
                Write a review <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="!pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((r, i) => <FadeIn key={i} delay={(i % 3) * 0.05}><ReviewTile review={r} /></FadeIn>)}
        </div>
      </Section>
    </>
  );
}
