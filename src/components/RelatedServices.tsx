import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

export function RelatedServices({ current }: { current: string }) {
  const related = services.filter(s => s.slug !== current).slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {related.map(s => {
        // @ts-ignore
        const Icon = LucideIcons[s.icon] || LucideIcons.Wrench;
        return (
          <div key={s.slug} className="glass p-8 rounded-2xl service-card">
            <Icon className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="font-display text-xl text-[#1e3a5f] dark:text-[#f3ede0] mb-2">{s.name}</h3>
            <p className="text-[#475569] dark:text-[#cbd5e1] text-sm mb-6">{s.shortDesc}</p>
            <Link to={`/services/${s.slug}`} className="text-[#c9a96e] text-xs font-semibold tracking-wider uppercase service-link flex items-center gap-1 hover:text-[#e8c98a] transition-colors">
              Learn More <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )
      })}
    </div>
  )
}
