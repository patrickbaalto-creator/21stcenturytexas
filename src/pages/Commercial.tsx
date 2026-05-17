import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { ProcessSteps } from '../components/ProcessSteps';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../utils/seo';

const industries = [
  { label: 'Property Management', img: '/images/commercial-roof-repair.webp' },
  { label: 'Retail Centers', img: '/images/roof-repair-austin.webp' },
  { label: 'Industrial Parks', img: '/images/metal-roof-dji.webp' },
  { label: 'Healthcare', img: '/images/roof-installation.webp' },
  { label: 'Education', img: '/images/flat-lock-copper.webp' },
  { label: 'Hospitality', img: '/images/metal-roof-georgetown.webp' },
];

export default function Commercial() {
  useSEO({
    title: 'Commercial Roofing Austin TX | 21st Century Roofing',
    description: 'Expert commercial roofing in Austin TX. TPO, EPDM, metal roofing for businesses, warehouses & multi-unit properties. GAF certified. Free commercial inspections. Call (512) 219-0342.',
    canonical: '/commercial',
  });

  return (
    <div className="bg-white">
      <PageHero eyebrow="Enterprise Systems" title="Commercial Roofing Built to Last." image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Commercial' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">Flat & Metal Specialists</div>
            <h2 className="font-display text-4xl text-[#1e3a5f] mb-6">Industrial-Grade Roofing Systems</h2>
            <p className="text-[#475569] leading-relaxed mb-6">
              Commercial structures require vastly different materials, insurance protections, and zoning compliances than residential homes. Our Commercial Division is certified in installing seamless TPO, durable EPDM, and Custom Architectural Metal profiles for massive square footages.
            </p>
            <ul className="space-y-3 mb-8">
              {['TPO & PVC Single-Ply Membranes', 'EPDM Rubber Roofing Systems', 'Commercial Roof Coatings (Silicone/Acrylic)', 'Standing Seam Metal Roofing', 'Preventative Maintenance Programs'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <LucideIcons.CheckCircle className="w-5 h-5 text-[#1d4ed8] shrink-0" />
                  <span className="text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden -mt-8 shadow-lg">
              <img src="/images/commercial-roof-repair.webp" className="w-full h-full object-cover" alt="Commercial Roof Repair Austin TX" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mt-8 shadow-lg">
              <img src="/images/metal-roof-dji.webp" className="w-full h-full object-cover" alt="Metal Roof Aerial Austin TX" />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="font-display text-4xl text-[#1e3a5f] text-center mb-12">Industries We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map(ind => (
              <div key={ind.label} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-36 overflow-hidden">
                  <img src={ind.img} alt={ind.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-[#1e3a5f] font-bold text-sm">{ind.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 bg-[#1e3a5f] rounded-2xl px-8 py-16">
          <h3 className="text-center font-display text-4xl text-white mb-14">Our Commercial Process</h3>
          <ProcessSteps steps={[
            { n: '1', title: 'Core Testing', desc: 'We take core samples to assess deck condition and moisture.' },
            { n: '2', title: 'Phased Logistics', desc: 'Work is staged to keep your business fully functional.' },
            { n: '3', title: 'Application', desc: 'Expert sealing of penetrations, HVAC units, and parapet walls.' },
            { n: '4', title: 'Maintenance Dept', desc: 'Enrollment in preventative maintenance to maximize ROI.' }
          ]} />
        </div>

        <CtaBanner headline="Scale your building's protection." sub="Request an enterprise estimate and bid package." />
      </div>
    </div>
  );
}
