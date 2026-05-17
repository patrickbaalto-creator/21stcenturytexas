import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProcessSteps } from '../components/ProcessSteps';
import { CtaBanner } from '../components/CtaBanner';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../utils/seo';

export default function Services() {
  useSEO({
    title: 'Roofing Services in Austin TX | 21st Century Roofing',
    description: 'Complete roofing services in Austin TX: roof inspection, repair, replacement, hail damage, water damage restoration & more. BBB Accredited. Free estimates. Call (512) 219-0342.',
    canonical: '/services',
  });

  return (
    <div className="bg-white">
      <PageHero eyebrow="What We Do" title="Every Roof, Every Need." image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Services' }]} />

        <div className="space-y-24 mb-24">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${!isEven ? 'lg:order-2' : ''}`}>
                  <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <div className={!isEven ? 'lg:order-1' : ''}>
                  <div className="text-[#1d4ed8] text-xs font-bold uppercase tracking-widest mb-3">21st Century Solutions</div>
                  <h2 className="font-display text-4xl text-[#1e3a5f] mb-5">{service.name}</h2>
                  <p className="text-[#475569] leading-relaxed mb-7">{service.fullDesc}</p>
                  <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.includes.slice(0, 4).map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <LucideIcons.CheckCircle className="w-4 h-4 text-[#1d4ed8] shrink-0" />
                        <span className="text-sm text-[#334155]">{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={`/services/${service.slug}`} className="btn-ghost rounded-lg text-center px-6 py-3 text-sm font-bold uppercase tracking-wide">Learn More &rarr;</Link>
                    <Link to="/contact" className="btn-gold rounded-lg text-center px-6 py-3 text-sm font-bold uppercase tracking-wide">Get a Quote</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-24 bg-[#1e3a5f] rounded-2xl px-8 py-16">
          <h3 className="text-center font-display text-4xl text-white mb-14">Our Process</h3>
          <ProcessSteps steps={[
            { n: '1', title: 'Consultation', desc: 'Detailed scoping of your roofing needs or damage.' },
            { n: '2', title: 'Assessment', desc: 'Drone or physical inspection of the decking and shingles.' },
            { n: '3', title: 'Execution', desc: 'Flawless install, precise repairs, or rapid mitigation.' },
            { n: '4', title: 'Guarantee', desc: 'Supported by industry-leading warranties and guarantees.' }
          ]} />
        </div>

        <CtaBanner headline="Ready to start your project?" />
      </div>
    </div>
  );
}
