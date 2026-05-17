import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { img } from '../utils/unsplash';
import type { Service } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

export function ServiceTile({ service }: { service: Service }) {
  const Icon = (Icons as any)[service.icon] as Icons.LucideIcon || Icons.Wrench;
  return (
    <Link to={`/services/${service.slug}`} className="bento p-5 lg:p-6 flex flex-col gap-4 h-full group">
      <div className="tile-media">
        <img src={img(service.heroImg, 800)} alt={service.name} loading="lazy" />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="w-10 h-10 rounded-xl bg-cream-2 flex items-center justify-center mb-3 text-brand">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-bold mb-2">{service.name}</h3>
          <p className="text-stone-mute text-[14.5px] leading-relaxed">{service.short}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-stone-mute group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
      </div>
    </Link>
  );
}
