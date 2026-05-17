import { Facebook, MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

export function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white pt-16 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="bg-[#B45309] text-white font-bold text-lg px-3 py-1.5 rounded font-display">21C</div>
            <div>
              <div className="font-bold text-sm">21st Century</div>
              <div className="text-white/60 text-xs">Painting · Roofing · Siding</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Austin's full-service exterior contractor since 1996. Painting, roofing, and James Hardie siding done right. 300+ five-star reviews from Central Texas homeowners.
          </p>
          <div className="flex gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="21st Century on Facebook" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-orange-300 mb-5">Services</h4>
          <ul className="space-y-2.5">
            {services.map(s => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-white/70 hover:text-white text-sm transition-colors">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-orange-300 mb-5">Company</h4>
          <ul className="space-y-2.5 mb-8">
            <li><Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
            <li><Link to="/residential" className="text-white/70 hover:text-white text-sm transition-colors">Residential</Link></li>
            <li><Link to="/commercial" className="text-white/70 hover:text-white text-sm transition-colors">Commercial</Link></li>
            <li><Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors">All Services</Link></li>
            <li><Link to="/service-areas/austin" className="text-white/70 hover:text-white text-sm transition-colors">Service Areas</Link></li>
            <li><Link to="/blog" className="text-white/70 hover:text-white text-sm transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-orange-300 mb-5">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-orange-300 mt-0.5 shrink-0" />
              <span className="text-white/70 text-sm">9811 A Beck Cir<br/>Austin, TX 78758</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-orange-300 shrink-0" />
              <a href="tel:5122190342" className="text-white/70 hover:text-white text-sm transition-colors">(512) 219-0342</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-orange-300 shrink-0" />
              <a href="mailto:sales@21stcenturytexas.com" className="text-white/70 hover:text-white text-sm transition-colors">sales@21stcenturytexas.com</a>
            </li>
            <li className="flex gap-3 items-start">
              <Clock className="w-4 h-4 text-orange-300 mt-0.5 shrink-0" />
              <span className="text-white/70 text-sm">Mon–Fri, 8am–5pm<br/><span className="text-orange-300 font-semibold">Emergency calls 24/7</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} 21st Century Painting, Roofing & Siding. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="text-white/40 hover:text-white/70 text-xs transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="text-white/40 hover:text-white/70 text-xs transition-colors">Terms &amp; Conditions</Link>
          <Link to="/contact" className="text-white/40 hover:text-white/70 text-xs transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}
