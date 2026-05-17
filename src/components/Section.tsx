import type { ReactNode } from 'react';

export function Section({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, kicker, align = 'left' }: { eyebrow?: string; title: string; kicker?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`mb-10 lg:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-4xl lg:text-5xl">{title}</h2>
      {kicker && <p className="text-stone-soft mt-4 text-lg leading-relaxed">{kicker}</p>}
    </div>
  );
}
