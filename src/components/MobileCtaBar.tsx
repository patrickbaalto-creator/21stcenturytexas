import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobileCtaBar() {
  return (
    <div style={{paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))'}} className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden bg-white border-t-2 border-gray-300 shadow-2xl px-3 pt-3 flex gap-3">
      <a href="tel:5122190342" style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem'}} className="btn-ghost py-3">
        <Phone className="w-4 h-4" /> (512) 219-0342
      </a>
      <Link to="/contact" style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center'}} className="btn-gold py-3">
        Free Estimate
      </Link>
    </div>
  )
}
