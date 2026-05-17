import { useParams, Navigate, Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { posts } from '../data/posts';
import * as LucideIcons from 'lucide-react';
import { useEffect } from 'react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} | 21st Century Blog`;
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/404" />;

  const related = posts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white">
      <PageHero height="50vh" eyebrow={post.category} title={post.title} image={post.coverImage} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-100">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-full object-cover" alt="Author" />
              <div>
                <p className="text-[#1e3a5f] font-bold text-sm">21st Century Team <span className="text-[#94a3b8] font-normal ml-2">Austin Specialists</span></p>
                <p className="text-[#94a3b8] text-sm mt-0.5">{post.date} · {post.readTime}</p>
              </div>
            </div>

            <div
              className="prose prose-slate prose-p:text-[#475569] prose-p:leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:text-[#1e3a5f] prose-h2:mt-10 prose-h2:mb-4 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="bg-[#f8fafc] border border-gray-100 p-8 rounded-2xl mt-16 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" className="w-20 h-20 rounded-full object-cover hidden md:block" alt="Author" />
              <div>
                <p className="text-[#1d4ed8] uppercase tracking-widest text-xs font-bold mb-2">Written By</p>
                <h4 className="font-display text-2xl text-[#1e3a5f] mb-2">The 21st Century Education Team</h4>
                <p className="text-[#64748b] text-sm">Bringing over 25 years of combined experience to help Austin homeowners make educated decisions regarding their roofs, storm damage, and preventative maintenance.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#1e3a5f] p-8 rounded-2xl text-center shadow-xl">
                <LucideIcons.Search className="w-10 h-10 text-yellow-300 mx-auto mb-4" />
                <h3 className="font-display text-2xl text-white mb-3">Free Inspection</h3>
                <p className="text-white/70 text-sm mb-6">Found an issue on your roof? Have 21st Century inspect it for free.</p>
                <Link to="/contact" className="btn-gold rounded-lg w-full block text-center py-3 font-bold text-sm uppercase tracking-wide">Get a Quote</Link>
                <a href="tel:5122190342" className="block text-blue-300 mt-4 text-sm hover:text-white transition-colors">(512) 219-0342</a>
              </div>

              {related.length > 0 && (
                <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#1e3a5f] mb-5">Related Reads</h4>
                  <div className="space-y-5">
                    {related.map(r => (
                      <Link to={`/blog/${r.slug}`} key={r.slug} className="flex gap-4 group">
                        <img src={r.coverImage} className="w-20 h-20 rounded-xl object-cover shrink-0" alt={r.title} />
                        <div className="flex flex-col justify-center">
                          <h5 className="text-sm font-bold text-[#1e3a5f] leading-snug group-hover:text-[#1d4ed8] transition-colors">{r.title}</h5>
                          <span className="text-xs text-[#94a3b8] mt-1">{r.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <CtaBanner headline="Dealing with an issue discussed here?" sub="Let 21st Century handle it — free inspection, no pressure." />
      </div>
    </div>
  );
}
