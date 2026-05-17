import { Link } from 'react-router-dom';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-[0.72rem] uppercase tracking-wider text-[#94a3b8] flex items-center gap-2 mb-8">
      <Link to="/" className="hover:text-[#f97316] transition-colors">Home</Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          <span className="text-[#f97316]">/</span>
          {item.href ? (
            <Link to={item.href} className="hover:text-[#f97316] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#111827] font-semibold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
