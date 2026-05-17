import { Link } from 'react-router-dom';
import { ProcessSteps } from '../components/ProcessSteps';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FadeUp } from '../components/FadeUp';
import { services } from '../data/services';
import { posts } from '../data/posts';
import {
  ArrowRight, Award, Brush, Building2, CheckCircle, Clock,
  FileText, Hammer, Home as HomeIcon, Info, Layers,
  MapPin, Paintbrush, Phone, ShieldCheck, Star, Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const iconMap: Record<string, LucideIcon> = {
  ArrowRight, Award, Brush, Building2, CheckCircle, Clock,
  FileText, Hammer, Home: HomeIcon, Info, Layers,
  MapPin, Paintbrush, Phone, ShieldCheck, Star, Wrench,
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const gridItem = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function StaggerGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' as any });
  return (
    <motion.div ref={ref} className={className}
      variants={grid} initial="hidden" animate={inView ? 'show' : 'hidden'}>
      {children}
    </motion.div>
  );
}

const heroItem = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0 },
};
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

export default function Home() {
  useSEO({
    title: '21st Century Painting, Roofing & Siding | Austin, TX Since 1996',
    description: "Austin's full-service exterior contractor since 1996. Painting, roofing, and James Hardie siding. 300+ five-star reviews. Free estimates. Call (512) 219-0342.",
    canonical: '/',
  });

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/hero-mobile.webp" media="(max-width: 768px)" type="image/webp" />
            <source srcSet="/images/hero.webp" type="image/webp" />
            <img
              src="/images/hero.webp"
              alt="21st Century Painting, Roofing & Siding crew at work in Austin TX"
              className="w-full h-full object-cover"
              fetchpriority="high"
              decoding="sync"
            />
          </picture>
          <div className="absolute inset-0 bg-[#111827]/80 lg:bg-none" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#111827]/80 via-[#111827]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <motion.div className="max-w-2xl" variants={heroContainer} initial="hidden" animate="show">
            <motion.div variants={heroItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
              <div className="inline-flex items-center gap-2 bg-[#B45309] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <Star className="w-3.5 h-3.5 fill-white" /> Serving Austin Since 1996 · 300+ Five-Star Reviews
              </div>
            </motion.div>
            <motion.h1 variants={heroItem} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Austin's #1 Contractor for<br/><span className="text-[#B45309]">Painting, Roofing & Siding</span>
            </motion.h1>
            <motion.p variants={heroItem} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-white/85 text-lg font-light leading-relaxed mb-8 max-w-xl">
              Everything your home's exterior needs — under one roof. Locally owned and operating in Central Texas since 1996. Free estimates, premium materials, on-time finish.
            </motion.p>
            <motion.div variants={heroItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-4">
              <a href="tel:5122190342" className="btn-gold rounded-lg text-base py-4 px-8 flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call (512) 219-0342
              </a>
              <Link to="/contact" className="btn-glass-hero">
                Free Estimate
              </Link>
            </motion.div>
            <motion.div variants={heroItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/20">
              {[
                { label: 'Years in Austin', val: '29+' },
                { label: 'Five-Star Reviews', val: '300+' },
                { label: 'Services Under One Roof', val: '3' },
              ].map(s => (
                <div key={s.label} className="glass-hero-stat px-5 py-3 rounded-xl">
                  <div className="text-3xl font-bold text-white font-display">{s.val}</div>
                  <div className="text-white/70 text-xs uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="bg-[#111827] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm font-medium">
          {['BBB Accredited', 'EPA Lead-Safe Certified', 'James Hardie Installer', 'Sherwin-Williams Pro', 'Benjamin Moore Pro', 'Licensed & Insured'].map(t => (
            <span key={t} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#B45309] shrink-0" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT / INTRO ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp from="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="/images/installing-roof.webp"
                alt="21st Century crew installing a new roof in Austin Texas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 glass-dark-card text-white rounded-xl p-5 flex items-center gap-4">
              <Award className="w-10 h-10 text-[#B45309] shrink-0" />
              <div>
                <div className="font-bold text-sm">29+ Years in Business</div>
                <div className="text-xs text-white/80 mt-0.5">Family-owned and operated in Austin since 1996 — three generations of craftsmen.</div>
              </div>
            </div>
          </FadeUp>
          <FadeUp from="right" delay={0.1} className="space-y-6">
            <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest">About 21st Century</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#111827] leading-tight">
              One Contractor.<br/>Every Exterior Job.
            </h2>
            <p className="text-[#475569] text-lg font-light leading-relaxed">
              Most contractors do one thing. We do three — painting, roofing, and siding — and we do them with the same crews, same standards, and same warranty. That means no scheduling chaos when your re-roof needs touch-up paint, and no finger-pointing when your siding install needs a new color line.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Founded in Austin in 1996. Locally owned. Fully licensed and insured. Sherwin-Williams and Benjamin Moore certified pros, James Hardie installers, and GAF-rated roofers all under one company.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {['BBB Accredited', 'EPA Lead-Safe', 'James Hardie Installer', 'Fully Insured'].map(b => (
                <span key={b} className="bg-orange-50 border border-orange-100 text-[#B45309] px-4 py-2 rounded-full text-xs font-semibold">{b}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href="tel:5122190342" className="btn-gold rounded-lg">Call Now</a>
              <Link to="/about" className="btn-ghost rounded-lg">Our Story</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest mb-3">What We Do</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#111827]">Painting, Roofing & Siding Services</h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, i) => {
              const Icon = (iconMap[service.icon] ?? Wrench) as LucideIcon;
              return (
                <motion.div key={i} variants={gridItem}>
                  <Link to={`/services/${service.slug}`} className="glass p-7 rounded-2xl service-card group block h-full">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-[#B45309] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#B45309] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-[#111827] text-lg mb-2">{service.name}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                    <span className="text-[#B45309] text-xs font-bold uppercase tracking-wider service-link flex items-center gap-1">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </StaggerGrid>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-ghost rounded-lg">See All Services</Link>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest mb-3">Why Choose Us</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#111827]">The 21st Century Difference</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'ShieldCheck', title: 'Premium Materials Only', desc: 'Sherwin-Williams Duration, Benjamin Moore Aura, James Hardie ColorPlus, GAF and CertainTeed shingles. No bargain-bin substitutes.', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80' },
              { icon: 'Clock', title: '29+ Years Locally Owned', desc: 'Family-owned in Austin since 1996. Same owner, same standards, same neighborhoods we have been working in for three decades.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80' },
              { icon: 'FileText', title: 'Insurance Claim Experts', desc: 'We handle the entire storm claim — adjuster meetings, supplements, depreciation recovery. You pay your deductible and nothing more.', img: '/images/insurance-claim.webp' },
              { icon: 'Star', title: '300+ Five-Star Reviews', desc: 'Across Google, Yelp, Angi, and BBB. We earned every one by showing up on time and finishing what we said we would.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80' },
              { icon: 'Building2', title: 'One Crew, Three Trades', desc: 'Re-roofing reveals siding damage? Painting reveals rot? Our crews fix it all in one project, on one invoice, with one warranty.', img: '/images/residential-roofing.webp' },
              { icon: 'Award', title: 'Manufacturer Certified', desc: 'James Hardie installer, EPA Lead-Safe certified, Sherwin-Williams and Benjamin Moore preferred pro contractor.', img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80' },
            ].map((item, i) => {
              const Icon = (iconMap[item.icon] ?? CheckCircle) as LucideIcon;
              return (
                <FadeUp key={i} delay={i * 0.05} className="rounded-2xl bg-[#f8fafc] border border-gray-100 overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex gap-4 p-6">
                    <div className="w-10 h-10 rounded-xl bg-[#B45309] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827] mb-2">{item.title}</h3>
                      <p className="text-[#64748b] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest mb-3">How We Work</div>
            <h2 className="font-display text-4xl lg:text-5xl text-white">Our Simple 4-Step Process</h2>
          </FadeUp>
          <ProcessSteps steps={[
            { n: '1', title: 'Free Estimate', desc: 'We come to your home, measure, listen to your goals, and give you a transparent line-item bid — no pressure.' },
            { n: '2', title: 'Color & Material', desc: 'Help picking paint colors, shingle profiles, or siding finishes. We bring samples on-site.' },
            { n: '3', title: 'Premium Install', desc: 'Same crews you met during the estimate. On-time, on-spec, with daily cleanup.' },
            { n: '4', title: 'Walkthrough & Warranty', desc: 'Final inspection with you, then your manufacturer warranty is registered and your workmanship warranty starts.' },
          ]} />
          <div className="text-center mt-12">
            <a href="tel:5122190342" className="btn-gold rounded-lg text-base py-4 px-10 inline-flex items-center gap-2">
              <Phone className="w-5 h-5" /> Schedule Your Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <FadeUp>
              <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest mb-3">Our Work</div>
              <h2 className="font-display text-4xl text-[#111827]">Featured Projects</h2>
            </FadeUp>
            <Link to="/services" className="hidden md:inline-block btn-ghost rounded-lg text-sm">All Services</Link>
          </div>
          <StaggerGrid className="gallery-grid rounded-2xl overflow-hidden">
            {[
              { cls: 'gallery-item gallery-item-large', src: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80', alt: 'Premium exterior paint job in Austin TX', label: 'Full Exterior Repaint — Tarrytown' },
              { cls: 'gallery-item', src: '/images/gallery-metal.webp', alt: 'Standing seam metal roof in Austin TX', label: 'Standing Seam Metal — Lakeway' },
              { cls: 'gallery-item', src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80', alt: 'James Hardie siding install in Cedar Park TX', label: 'James Hardie Siding — Cedar Park' },
              { cls: 'gallery-item', src: '/images/gallery-shingles.webp', alt: 'Asphalt shingle re-roof in Round Rock TX', label: 'Asphalt Re-Roof — Round Rock' },
              { cls: 'gallery-item', src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80', alt: 'Two-story exterior painting in Georgetown TX', label: 'Two-Story Repaint — Georgetown' },
            ].map((img, i) => (
              <motion.div key={i} variants={gridItem} className={img.cls}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay"></div>
                <div className="gallery-label">{img.label}</div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest mb-3">Client Reviews</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#111827]">What Austin Homeowners Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              <span className="text-[#475569] font-medium ml-2">5.0 · 300+ Google Reviews</span>
            </div>
          </FadeUp>
          <TestimonialsSection />
        </div>
      </section>

      {/* ── BLOG POSTS ── */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest mb-3">Resources</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#111827]">Tips, Guides & Insights</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link to={`/blog/${post.slug}`} className="glass rounded-2xl overflow-hidden group block hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="text-[#B45309] text-xs font-bold uppercase tracking-wider">{post.category}</span>
                    <h3 className="font-bold text-[#111827] text-lg mt-2 mb-3 leading-snug group-hover:text-[#B45309] transition-colors">{post.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                      <span className="text-[#94a3b8] text-xs">{post.date}</span>
                      <span className="text-[#B45309] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-ghost rounded-lg">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-20 px-6 lg:px-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp from="left" className="space-y-6">
            <div className="text-[#B45309] text-xs font-bold uppercase tracking-widest">Find Us</div>
            <h2 className="font-display text-4xl text-[#111827]">Visit Our Austin Office</h2>
            <div className="space-y-4">
              {[
                { icon: 'MapPin', label: 'Address', val: '9811 A Beck Cir, Austin, TX 78758' },
                { icon: 'Phone', label: 'Phone', val: '(512) 219-0342', href: 'tel:5122190342' },
                { icon: 'Clock', label: 'Hours', val: 'Mon–Fri, 8am–5pm · Emergency 24/7' },
              ].map(item => {
                const Icon = (iconMap[item.icon] ?? Info) as LucideIcon;
                return (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#B45309] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#94a3b8] uppercase tracking-wider">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="text-[#111827] font-semibold hover:text-[#B45309]">{item.val}</a>
                        : <div className="text-[#111827] font-semibold">{item.val}</div>
                      }
                    </div>
                  </div>
                );
              })}
            </div>
            <a href="https://www.google.com/maps/dir//9811+A+Beck+Cir,+Austin,+TX+78758" target="_blank" rel="noopener noreferrer" className="btn-gold rounded-lg inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
          </FadeUp>
          <FadeUp from="right">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-80">
            <iframe
              title="21st Century Painting, Roofing & Siding Office"
              width="100%" height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=9811+Beck+Cir,+Austin,+TX+78758&output=embed"
            />
          </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6 bg-[#B45309]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">Ready for a Better-Looking Home?</h2>
          <p className="text-white/90 text-lg mb-8">Free estimate from Austin's #1 painting, roofing, and siding contractor. Most estimates scheduled within 48 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:5122190342" className="inline-flex items-center gap-2 bg-white text-[#B45309] font-bold text-sm uppercase tracking-wide py-4 px-8 rounded-lg hover:bg-orange-50 transition-colors shadow-lg">
              <Phone className="w-5 h-5" /> Call (512) 219-0342
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold text-sm uppercase tracking-wide py-4 px-8 rounded-lg hover:bg-white/10 transition-colors">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
