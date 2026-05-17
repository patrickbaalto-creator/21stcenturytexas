import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { services } from '../data/services';
import { useSEO } from '../utils/seo';

const features = [
  { img: '/images/gallery-shingles.webp', icon: 'ShieldCheck', title: 'Lifetime Warranties', desc: 'As a Master Elite contractor, we offer the GAF Golden Pledge warranty — up to 50 years of material and workmanship coverage.' },
  { img: '/images/roofers-metal-tile.webp', icon: 'HeartHandshake', title: 'Property Respect', desc: 'We cover your landscaping, protect your siding, and perform multi-pass magnetic sweeps to ensure zero nails left behind.' },
  { img: '/images/roof-repair-austin.webp', icon: 'Home', title: 'Complete Transparency', desc: 'Photo-documented inspections, straightforward pricing, and a dedicated project manager for every home.' },
];

export default function Residential() {
  useSEO({
    title: 'Residential Roofing Austin TX | 21st Century Roofing',
    description: "Austin's premier residential roofing contractor. Expert roof replacement, repair, hail damage & water damage for homeowners. BBB Accredited. Free inspections. Call (512) 219-0342.",
    canonical: '/residential',
  });

  const resServices = services.filter(s => ['roof-inspection', 'roof-replacement', 'roof-repair', 'hail-damage-roofing'].includes(s.slug));

  return (
    <div className="bg-white">
      <PageHero eyebrow="Home Roofing" title="Austin's Premier Residential Roofer." image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Residential' }]} />

        <div className="mb-24 mt-8">
          <h3 className="text-center font-display text-4xl text-[#1e3a5f] mb-12">Why Homeowners Choose 21st Century</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = LucideIcons[f.icon as keyof typeof LucideIcons] as any;
              return (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white">
                  <div className="h-48 overflow-hidden">
                    <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-7">
                    <Icon className="w-8 h-8 text-[#1d4ed8] mb-4" />
                    <h4 className="text-xl font-bold text-[#1e3a5f] mb-2">{f.title}</h4>
                    <p className="text-[#64748b] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-center font-display text-4xl text-[#1e3a5f] mb-12">Residential Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resServices.map((s, i) => {
              const Icon = LucideIcons[s.icon as keyof typeof LucideIcons] as any || LucideIcons.Wrench;
              return (
                <div key={i} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white flex gap-0">
                  <div className="w-32 shrink-0 overflow-hidden">
                    <img src={s.heroImage} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-[#1e3a5f]">{s.name}</h4>
                      </div>
                      <p className="text-[#64748b] text-sm leading-relaxed">{s.shortDesc}</p>
                    </div>
                    <Link to={`/services/${s.slug}`} className="text-[#1d4ed8] text-xs font-bold tracking-wider uppercase flex items-center gap-1 mt-4 hover:text-[#1e3a5f] transition-colors">View Service <LucideIcons.ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CtaBanner headline="Protect your biggest investment." sub="Schedule a comprehensive home roof inspection today." />
      </div>
    </div>
  );
}
