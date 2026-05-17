import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { useState } from 'react';
import { useSEO } from '../utils/seo';

export default function Blog() {
  useSEO({
    title: 'Roofing Blog & Guides | 21st Century Austin',
    description: "Expert roofing tips, storm damage guides, maintenance advice, and Austin weather insights from 21st Century — Austin's top-rated roofing company.",
    canonical: '/blog',
  });

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Maintenance', 'Storm Damage', 'Installation', 'Water Damage', 'Tips'];
  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  const featured = posts.find(p => p.slug === 'true-cost-of-delaying-roof-repairs') || posts[0];
  const gridPosts = filtered.filter(p => p.slug !== featured.slug);

  return (
    <div className="bg-white">
      <PageHero height="40vh" eyebrow="Insights" title="Roofing Tips & Insights" image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        {filter === 'All' && (
          <div className="mb-16 mt-4">
            <Link to={`/blog/${featured.slug}`} className="block relative rounded-2xl overflow-hidden group shadow-xl">
              <div className="aspect-[16/9] lg:aspect-[21/9] relative">
                <img src={featured.coverImage} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt={featured.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-[#1e3a5f]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <span className="bg-[#1d4ed8] text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 inline-block">{featured.category}</span>
                  <h2 className="font-display text-3xl lg:text-5xl text-white leading-tight mb-4 max-w-4xl">{featured.title}</h2>
                  <p className="text-white/80 mb-5 max-w-2xl hidden md:block">{featured.excerpt}</p>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-white/60">{featured.date} · {featured.readTime}</span>
                    <span className="text-white text-sm uppercase tracking-wider font-bold border-b border-white pb-0.5">Read Article &rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map(c => (
            <button
              key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${filter === c ? 'bg-[#1d4ed8] text-white' : 'bg-[#f1f5f9] text-[#1e3a5f] hover:bg-[#e2e8f0]'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {gridPosts.map(p => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="bg-white border border-gray-100 shadow-sm overflow-hidden rounded-2xl group flex flex-col hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={p.coverImage} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt={p.title} />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#1d4ed8] text-xs font-bold uppercase tracking-wider mb-3 block">{p.category}</span>
                <h3 className="font-display text-xl text-[#1e3a5f] leading-snug mb-3 group-hover:text-[#1d4ed8] transition-colors">{p.title}</h3>
                <p className="text-[#64748b] text-sm line-clamp-2 mb-6 flex-1">{p.excerpt}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xs text-[#94a3b8]">{p.date} · {p.readTime}</span>
                  <span className="text-xs text-[#1d4ed8] font-bold uppercase tracking-wider">Read &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
          {gridPosts.length === 0 && <p className="text-[#94a3b8] lg:col-span-3 text-center py-20">No posts in this category yet.</p>}
        </div>
      </div>
    </div>
  );
}
