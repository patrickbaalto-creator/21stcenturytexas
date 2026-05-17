import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export function CityChip({ slug, city, variant = 'light' }: { slug: string; city: string; variant?: 'light' | 'dark' }) {
  const cls = variant === 'dark'
    ? 'bg-white/10 text-white hover:bg-white/15 border-white/15'
    : 'bg-white text-stone-ink hover:border-brand border-stone-line';
  return (
    <Link to={`/areas/${slug}`} className={`inline-flex items-center gap-1.5 text-[13px] font-semibold border ${cls} rounded-full px-3.5 py-1.5 transition-colors`}>
      <MapPin className="w-3 h-3" /> {city}
    </Link>
  );
}
