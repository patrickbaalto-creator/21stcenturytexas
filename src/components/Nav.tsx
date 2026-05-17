import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const links = [
  { name: 'Painting', href: '/painting' },
  { name: 'Roofing',  href: '/roofing' },
  { name: 'Siding',   href: '/siding' },
  { name: 'Projects', href: '/projects' },
  { name: 'Areas',    href: '/areas' },
  { name: 'Reviews',  href: '/reviews' },
  { name: 'About',    href: '/about' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      <header className={`sticky top-0 z-40 bg-cream/90 backdrop-blur transition-shadow ${scrolled ? 'shadow-[0_1px_0_var(--color-stone-line)]' : ''}`}>
        <div className="shell px-6 lg:px-12 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" aria-label="21st Century — home">
            <div className="w-11 h-11 rounded-2xl bg-stone-ink text-cream font-display font-bold text-lg flex items-center justify-center transition-transform group-hover:rotate-[-4deg]">
              21<span className="text-brand">C</span>
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-[1.05rem] font-bold text-stone-ink">21st Century</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-stone-mute font-semibold">Painting · Roofing · Siding</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => {
              const active = loc.pathname === l.href || loc.pathname.startsWith(l.href + '/');
              return (
                <Link key={l.href} to={l.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-full transition-colors ${active ? 'text-brand bg-cream-2' : 'text-stone-ink hover:bg-cream-2'}`}>
                  {l.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:5122190342" className="text-sm font-semibold text-stone-ink hover:text-brand transition-colors flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> (512) 219-0342
            </a>
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">Free Estimate</Link>
          </div>

          <button className="lg:hidden p-2 -mr-2 text-stone-ink" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-30 bg-cream pt-6 pb-32 overflow-y-auto lg:hidden">
            <div className="shell px-6 flex flex-col gap-2">
              <a href="tel:5122190342" className="btn-primary py-4 text-base mb-3">
                <Phone className="w-5 h-5" /> Call (512) 219-0342
              </a>
              <Link to="/contact" className="btn-ghost py-4 text-base mb-6">Free Estimate</Link>
              {links.map(l => (
                <Link key={l.href} to={l.href}
                  className="text-stone-ink font-display text-2xl py-3 border-b border-stone-line">
                  {l.name}
                </Link>
              ))}
              <Link to="/contact" className="text-stone-mute text-sm mt-6 py-3">Contact</Link>
              <Link to="/blog" className="text-stone-mute text-sm py-1">Blog</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
