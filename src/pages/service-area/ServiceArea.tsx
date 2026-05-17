import { PageHero } from '../../components/PageHero';
import { Breadcrumb } from '../../components/Breadcrumb';
import { CtaBanner } from '../../components/CtaBanner';
import { serviceAreas } from '../../data/serviceAreas';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { useEffect } from 'react';

export default function ServiceArea() {
  useEffect(() => { document.title = "Service Areas | 21st Century"; }, []);

  return (
    <div className="bg-[#09090a]">
      <PageHero eyebrow="Our Network" title={<>Serving All of <em>Central Texas</em>.</>} image="https://images.unsplash.com/photo-1560185893-a55b4e1f1f1f?auto=format&fit=crop&w=1920&q=80" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Service Areas' }]} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28 mt-8">
           {serviceAreas.map(area => (
             <Link key={area.slug} to={`/service-area/${area.slug}`} className="glass p-8 rounded-2xl group hover:border-[#c9a96e]/30 transition-all flex flex-col items-start justify-between min-h-[220px]">
               <div>
                  <span className="text-[0.65rem] uppercase tracking-widest text-[#7a756e] font-semibold mb-2 block">Austin Metro Area</span>
                  <h3 className="font-display text-3xl text-[#f3ede0] group-hover:text-[#c9a96e] transition-colors">{area.city}</h3>
               </div>
               <span className="text-[#c9a96e] text-xs font-semibold tracking-wider uppercase flex items-center gap-1 group-hover:text-[#e8c98a]">View {area.city} <LucideIcons.ArrowRight className="w-3 h-3"/></span>
             </Link>
           ))}
        </div>

        <div className="mb-28 glass-dark border border-white/10 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[#c9a96e]/5 blur-3xl rounded-full translate-y-1/2"></div>
           <LucideIcons.Map className="w-16 h-16 text-[#c9a96e] mx-auto mb-8 relative z-10" />
           <h2 className="font-display text-4xl text-[#f3ede0] mb-6 relative z-10">Coverage <em>Area</em></h2>
           <p className="text-[#f3ede0]/60 max-w-2xl mx-auto font-light leading-[1.9] mb-8 relative z-10">
             We proudly serve the entire Greater Austin metropolitan area. If you are located in or around the I-35 corridor from Georgetown down to Buda, or out to the Lake Travis area, you are within our rapid-response radius.
           </p>
           <div className="flex flex-wrap justify-center gap-3 relative z-10 max-w-3xl mx-auto text-[#f3ede0]">
              {serviceAreas.map(a => <span key={a.slug} className="text-sm border-r border-[#c9a96e]/30 pr-3 last:border-0">{a.city}</span>)}
              <span className="text-sm font-semibold text-[#c9a96e]">And surrounding areas</span>
           </div>
           <p className="mt-12 text-[#f3ede0] text-sm relative z-10 bg-white/5 py-4 px-8 rounded-full inline-block border border-white/10">Call to confirm your address: <a href="tel:5122190342" className="text-[#c9a96e] font-semibold tracking-wide ml-2">(512) 219-0342</a></p>
        </div>

        <CtaBanner headline="Don't see your city?" sub="Give us a call. Depending on the project, we frequently travel up to 60 miles from downtown Austin." />
      </div>
    </div>
  )
}
