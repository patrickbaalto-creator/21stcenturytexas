import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { useSEO } from '../utils/seo';
import { Award, CheckCircle } from 'lucide-react';

export default function About() {
  useSEO({
    title: 'About 21st Century — Austin Roofing Company Since 1996',
    description: "Learn about 21st Century, Austin's #1 roofing company since 1996. BBB Accredited, BBB A+ rated, 300 five-star reviews. 25+ years combined experience.",
    canonical: '/about',
  });

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Our Story"
        title="Austin's Most Trusted Roofing Company"
        subtitle="Founded in 2012, 21st Century has dedicated itself to protecting Central Texas homes with uncompromising quality."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        height="50vh"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Story + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 mt-8">
          <div className="space-y-6">
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest">Our Story</div>
            <h2 className="font-display text-4xl text-[#1e3a5f]">Built on Integrity.<br/>Driven by Craftsmanship.</h2>
            <p className="text-[#475569] text-lg leading-relaxed">
              21st Century began with a simple philosophy: treat every roof like it's over our own family. What started as a small, specialized repair crew in 2012 has grown into Austin's most trusted full-service roofing and restoration company.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Our dual expertise in roofing and water damage restoration means we don't just patch a leak — we heal the entire structure. Our dedication to craftsmanship and transparent communication earned us consecutive Austin Business Journal Top 50 awards in 2020 and 2021.
            </p>
            <div className="bg-[#1e3a5f] rounded-xl p-5 flex items-center gap-4">
              <Award className="w-10 h-10 text-yellow-300 shrink-0" />
              <div className="text-white">
                <div className="font-bold text-sm">Austin Business Journal Top 50</div>
                <div className="text-white/70 text-xs mt-0.5">Fastest-Growing Companies in Central Texas — 2020 &amp; 2021</div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src="/images/wdr-shop.webp"
              alt="21st Century roofing team working on a residential roof in Austin TX"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 bg-[#f8fafc] rounded-2xl p-8">
          {[
            { val: '2012', label: 'Founded in Austin' },
            { val: '25+', label: 'Years Combined Experience' },
            { val: '300+', label: 'Five-Star Reviews' },
            { val: '24/7', label: 'Emergency Response' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-[#1d4ed8]">{s.val}</div>
              <div className="text-[#64748b] text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Core values */}
        <div className="mb-20">
          <h3 className="font-display text-4xl text-[#1e3a5f] text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: '/images/roof-repair-contractor.webp', title: 'Integrity', desc: 'We never recommend a replacement when a repair will do. Honest assessments are our foundation — always.' },
              { img: '/images/roofing-workers.webp', title: 'Craftsmanship', desc: 'Using BBB Accredited Member materials and exhaustive safety protocols ensures an install that outlasts our warranties.' },
              { img: '/images/brad-and-coby.webp', title: 'Transparency', desc: 'Clear pricing, complete photo documentation, and zero hidden fees. We communicate every step of the way.' },
            ].map((v, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                <div className="h-48 overflow-hidden">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#1e3a5f] text-xl mb-2">{v.title}</h4>
                  <p className="text-[#64748b] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="font-display text-4xl text-[#1e3a5f] text-center mb-12">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Michael T.', role: 'Founder & Master Roofer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
              { name: 'Sarah J.', role: 'Operations Manager', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
              { name: 'David R.', role: 'Lead Inspector', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
              { name: 'Elena C.', role: 'Restoration Specialist', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
            ].map((member, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm text-center">
                <div className="h-56 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[#1e3a5f] text-lg">{member.name}</h4>
                  <p className="text-[#1d4ed8] text-xs font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-20 bg-[#f8fafc] rounded-2xl p-10">
          <h3 className="font-display text-4xl text-[#1e3a5f] text-center mb-10">Certifications &amp; Awards</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['BBB Accredited Member', 'Owens Corning Preferred', 'CertainTeed Master', 'BBB A+ Accredited', 'Fully Licensed & Insured', 'Austin BJ Top 50 — 2020', 'Austin BJ Top 50 — 2021'].map(cert => (
              <span key={cert} className="flex items-center gap-2 bg-white border border-blue-100 text-[#1e3a5f] px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#1d4ed8]" /> {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="font-display text-4xl text-[#1e3a5f] text-center mb-12">Company Timeline</h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2" />
            <div className="space-y-10">
              {[
                { year: '2001', title: 'The Early Days', desc: 'Our founders began their roofing careers, building 25+ years of combined expertise.' },
                { year: '2012', title: '21st Century Launched in Austin', desc: '21st Century officially launched to serve Central Texas homeowners and businesses.' },
                { year: '2016', title: 'Commercial Division', desc: 'Expanded into commercial TPO and EPDM flat roof solutions for businesses.' },
                { year: '2018', title: '500th Five-Star Review', desc: 'A major community trust milestone on Google Reviews.' },
                { year: '2020', title: 'Austin BJ Top 50', desc: 'Named to the Austin Business Journal Top 50 Fastest-Growing Companies.' },
                { year: '2021', title: 'Top 50 Again', desc: 'Recognized a second consecutive year for rapid growth and excellence.' },
                { year: '2025', title: '300+ Reviews', desc: 'Austin\'s most reviewed roofing company — and still growing.' },
              ].map((evt, i) => (
                <div key={i} className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center pl-14 md:pl-0`}>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#1d4ed8] border-4 border-white shadow -translate-x-1/2" />
                  <div className={`md:w-[45%] bg-white border border-gray-100 rounded-xl p-5 shadow-sm ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <span className="text-[#1d4ed8] font-bold text-xl font-display">{evt.year}</span>
                    <h4 className="font-bold text-[#1e3a5f] mt-1 mb-1">{evt.title}</h4>
                    <p className="text-[#64748b] text-sm">{evt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <CtaBanner headline="Meet our team in person." sub="Visit us in Austin or we'll come to you — free roof assessment, no obligation." />
      </div>
    </div>
  );
}
