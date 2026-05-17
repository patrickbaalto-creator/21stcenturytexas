import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StickyEstimateBar() {
  return (
    <div
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))' }}
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-cream border-t border-stone-line px-3 pt-3 flex gap-2 shadow-[0_-4px_20px_rgba(28,25,23,0.08)]">
      <a href="tel:5122190342" className="btn-ghost flex-1 py-3.5 text-sm">
        <Phone className="w-4 h-4" /> Call
      </a>
      <Link to="/contact" className="btn-primary flex-1 py-3.5 text-sm">Free Estimate</Link>
    </div>
  );
}
