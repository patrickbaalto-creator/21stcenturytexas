import { Link } from 'react-router-dom';
import { img } from '../utils/unsplash';
import { tradeMeta } from '../data/services';
import type { Project } from '../data/projects';
import { ArrowUpRight, MapPin } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to="/projects" className="bento overflow-hidden group flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden bg-cream-2">
        <img src={img(project.cover, 1000)} alt={project.title} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
      </div>
      <div className="p-5 lg:p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 text-[11px] font-bold tracking-[0.12em] uppercase text-stone-mute">
          <span className="text-brand">{tradeMeta[project.trade].name}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.city}</span>
        </div>
        <h3 className="text-lg font-display font-bold mb-2 group-hover:text-brand transition-colors">{project.title}</h3>
        <p className="text-stone-mute text-sm leading-relaxed mb-4 flex-1">{project.scope}</p>
        <div className="flex items-center justify-between text-[12px] font-semibold pt-4 border-t border-stone-line">
          <span className="text-stone-soft">{project.duration}</span>
          <span className="flex items-center gap-1 text-stone-ink group-hover:text-brand transition-colors">View case study <ArrowUpRight className="w-3.5 h-3.5" /></span>
        </div>
      </div>
    </Link>
  );
}
