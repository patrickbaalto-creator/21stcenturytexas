import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);
  function toggle() {
    setDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  }
  return { dark, toggle };
}


const navLinks = [
  { name: 'Services', isDropdown: true, links: [
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Commercial Painting', href: '/services/commercial-painting' },
    { name: 'Residential Roofing', href: '/services/residential-roofing' },
    { name: 'Metal Roofing', href: '/services/metal-roofing' },
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Siding Installation', href: '/services/siding-installation' },
    { name: 'Insurance Claims', href: '/services/insurance-claims' },
  ]},
  { name: 'Service Area', isDropdown: true, links: [
    { name: 'Austin', href: '/service-areas/austin' },
    { name: 'Round Rock', href: '/service-areas/round-rock' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'Lakeway', href: '/service-areas/lakeway' },
    { name: 'Georgetown', href: '/service-areas/georgetown' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'Kyle', href: '/service-areas/kyle' },
    { name: 'Buda', href: '/service-areas/buda' },
    { name: 'Pflugerville', href: '/service-areas/pflugerville' },
  ]},
  { name: 'Residential', href: '/residential' },
  { name: 'Commercial', href: '/commercial' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { dark, toggle } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex bg-[#111827] text-white text-xs px-6 md:px-12 py-2 items-center justify-between">
        <span>Austin's #1 Contractor for Painting, Roofing & Siding — Serving Since 1996</span>
        <div className="flex items-center gap-6">
          <span>9811 A Beck Cir, Austin, TX 78758</span>
          <a href="tel:5122190342" className="font-bold hover:text-orange-300 flex items-center gap-1"><Phone className="w-3 h-3" /> (512) 219-0342</a>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 h-[72px] transition-all duration-300 px-6 md:px-12 flex items-center justify-between bg-white
        ${scrolled ? 'shadow-md border-b border-gray-200' : 'border-b border-gray-100'}`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-[#B45309] text-white font-bold text-base px-2.5 py-1.5 rounded font-display tracking-tight">21C</div>
            <div className="leading-tight">
              <div className="font-bold text-[0.85rem] text-[#1C1917]">21st Century</div>
              <div className="text-[#78716C] text-[0.65rem] uppercase tracking-wider">Painting · Roofing · Siding</div>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 h-full">
          {navLinks.map((item, idx) => (
            <div key={idx} className="relative group h-full flex items-center">
              {item.isDropdown ? (
                <>
                  <button className={`h-full flex items-center gap-1 px-3 text-[0.78rem] font-semibold cursor-pointer transition-colors ${location.pathname.startsWith('/' + item.name.toLowerCase().replace(' ', '-')) ? 'text-[#B45309]' : 'text-[#334155] hover:text-[#B45309]'}`} aria-haspopup="true">
                    {item.name} <ChevronDown className="w-3 h-3 opacity-50" />
                  </button>
                  <div className="absolute top-full left-0 pt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                      {item.links?.map((link, lidx) => (
                        <Link key={lidx} to={link.href} className={`block text-[0.8rem] px-4 py-2.5 transition-colors ${location.pathname === link.href ? 'text-[#B45309] bg-orange-50' : 'text-[#475569] hover:text-[#B45309] hover:bg-orange-50'}`}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={item.href!} className={`h-full flex items-center px-3 text-[0.78rem] font-semibold transition-colors ${location.pathname === item.href ? 'text-[#B45309]' : 'text-[#334155] hover:text-[#B45309]'}`}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="dark-toggle-btn w-9 h-9 rounded-lg flex items-center justify-center transition-colors">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a href="tel:5122190342" className="btn-gold rounded-md py-2.5 px-5 flex items-center gap-2">
            <Phone className="w-4 h-4" /> (512) 219-0342
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="dark-toggle-btn w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="text-[#111827]"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-[72px] overflow-y-auto pb-24"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              <a href="tel:5122190342" className="btn-gold text-center rounded-lg py-4 text-base flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call (512) 219-0342
              </a>
              {navLinks.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  {item.isDropdown ? (
                    <div className="flex flex-col gap-2">
                      <span className="text-[0.75rem] uppercase tracking-wider text-[#B45309] font-bold">{item.name}</span>
                      <div className="pl-3 flex flex-col gap-2">
                        {item.links?.map((link, lidx) => (
                          <Link key={lidx} to={link.href} className="text-[#475569] text-base">{link.name}</Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link to={item.href!} className="text-[#111827] text-lg font-semibold">{item.name}</Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
