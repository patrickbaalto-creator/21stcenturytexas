import { Link, useParams } from 'react-router-dom';
import { Section } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { posts } from '../data/posts';
import { img } from '../utils/unsplash';
import { useSEO } from '../utils/seo';
import NotFound from './NotFound';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = posts.find(p => p.slug === slug);

  useSEO(post ? {
    title: `${post.title} | 21st Century`,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
  } : { title: 'Post Not Found | 21st Century', description: '' });

  if (!post) return <NotFound />;

  const related = posts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <Section className="!pt-12 lg:!pt-16 !pb-8">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-stone-mute hover:text-brand mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> All articles
        </Link>
        <FadeIn>
          <div className="max-w-3xl">
            <span className="eyebrow mb-3 inline-flex">{post.category}</span>
            <h1 className="text-4xl lg:text-6xl leading-[1.02] tracking-tight mb-5">{post.title}</h1>
            <div className="flex items-center gap-3 text-stone-mute text-sm">
              <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="!pt-4 !pb-12">
        <FadeIn>
          <div className="bento overflow-hidden aspect-video">
            <img src={img(post.cover, 1600)} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </Section>

      <Section className="!pt-0 !pb-20">
        <article className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-stone-soft text-xl leading-[1.7] mb-8 font-display italic">{post.excerpt}</p>
            <div className="prose-content text-stone-ink text-[17px] leading-[1.75]" dangerouslySetInnerHTML={{ __html: post.body }} />
          </FadeIn>
        </article>
      </Section>

      <Section className="bg-stone-ink text-white -mx-6 lg:-mx-12 px-6 lg:px-12 !py-20">
        <div className="shell max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl lg:text-4xl mb-5">Ready for your project?</h2>
          <p className="text-white/70 mb-8">Free estimate with real samples on-site. Most quotes scheduled within 48 hours.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary"><ArrowRight className="w-4 h-4" /> Free Estimate</Link>
            <a href="tel:5122190342" className="btn-soft"><Phone className="w-4 h-4" /> (512) 219-0342</a>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <h3 className="eyebrow mb-6">Related</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {related.map(r => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="bento overflow-hidden block group flex flex-col h-full">
                <div className="aspect-video overflow-hidden bg-cream-2">
                  <img src={img(r.cover, 900)} alt={r.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold mb-2 group-hover:text-brand transition-colors">{r.title}</h4>
                  <p className="text-stone-mute text-sm">{r.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <style>{`
        .prose-content h2 { font-family: var(--font-display); font-size: 1.85rem; font-weight: 700; margin: 2rem 0 1rem; line-height: 1.2; }
        .prose-content p { margin-bottom: 1.4rem; }
      `}</style>
    </>
  );
}
