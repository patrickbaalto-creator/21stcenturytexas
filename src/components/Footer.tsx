import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { services } from '../data/services';
import { serviceAreas } from '../data/serviceAreas';

export function Footer() {
  const painting = services.filter(s => s.trade === 'painting');
  const roofing  = services.filter(s => s.trade === 'roofing');
  const siding   = services.filter(s => s.trade === 'siding' || s.trade === 'claims');

  return (
    <footer className="bg-stone-ink text-white pt-20 pb-10">
      <div className="shell px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">

          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-cream text-stone-ink font-display font-bold text-lg flex items-center justify-center">
                21<span className="text-brand">C</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg">21st Century</div>
                <div className="text-white/60 text-[10px] tracking-[0.18em] uppercase font-semibold">Painting · Roofing · Siding</div>
              </div>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-sm mb-6">
              Austin's full-service exterior contractor since 1996. One crew, one warranty, three trades — painting, roofing, and James Hardie siding.
            </p>
            <div className="flex flex-wrap gap-2">
              {['BBB', 'EPA Lead-Safe', 'James Hardie', 'GAF', 'Sherwin-Williams', 'Benjamin Moore'].map(b => (
                <span key={b} className="text-[10px] tracking-[0.1em] uppercase font-bold text-white/70 px-3 py-1.5 rounded-full border border-white/15">{b}</span>
              ))}
            </div>
          </div>

          <FooterCol title="Painting">
            {painting.map(s => <FooterLink key={s.slug} to={`/services/${s.slug}`}>{s.name}</FooterLink>)}
            <FooterLink to="/painting">All Painting Services</FooterLink>
          </FooterCol>
          <FooterCol title="Roofing">
            {roofing.map(s => <FooterLink key={s.slug} to={`/services/${s.slug}`}>{s.name}</FooterLink>)}
            <FooterLink to="/roofing">All Roofing Services</FooterLink>
          </FooterCol>
          <FooterCol title="Siding & Claims">
            {siding.map(s => <FooterLink key={s.slug} to={`/services/${s.slug}`}>{s.name}</FooterLink>)}
            <FooterLink to="/siding">All Siding Services</FooterLink>
          </FooterCol>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] tracking-[0.18em] uppercase font-bold text-brand mb-4">Contact</h4>
            <ul className="space-y-3.5 text-[14px]">
              <li className="flex gap-3 items-start"><MapPin className="w-4 h-4 text-brand mt-1 shrink-0" /><span className="text-white/80">9811 A Beck Cir<br/>Austin, TX 78758</span></li>
              <li className="flex gap-3 items-center"><Phone className="w-4 h-4 text-brand shrink-0" /><a href="tel:5122190342" className="text-white/80 hover:text-white">(512) 219-0342</a></li>
              <li className="flex gap-3 items-center"><Mail className="w-4 h-4 text-brand shrink-0" /><a href="mailto:sales@21stcenturytexas.com" className="text-white/80 hover:text-white">sales@21stcenturytexas.com</a></li>
              <li className="flex gap-3 items-start"><Clock className="w-4 h-4 text-brand mt-1 shrink-0" /><span className="text-white/80">Mon–Fri 8am–5pm<br/><span className="text-brand font-semibold">Emergency 24/7</span></span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-[10px] tracking-[0.18em] uppercase font-bold text-white/60 mb-3">Service Areas</h4>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map(c => (
              <Link key={c.slug} to={`/areas/${c.slug}`} className="text-[13px] text-white/70 hover:text-white border border-white/15 hover:border-brand rounded-full px-3.5 py-1.5 transition-colors">
                {c.city}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/50">
          <p>© {new Date().getFullYear()} 21st Century Painting, Roofing & Siding. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/contact" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-[10px] tracking-[0.18em] uppercase font-bold text-brand mb-4">{title}</h4>
      <ul className="space-y-2.5 text-[14px]">{children}</ul>
    </div>
  );
}
function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <li><Link to={to} className="text-white/70 hover:text-white transition-colors">{children}</Link></li>;
}
