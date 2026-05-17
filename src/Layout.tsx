import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { StickyEstimateBar } from './components/StickyEstimateBar';
import type { ReactNode } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="block md:hidden h-20" aria-hidden="true" />
      <StickyEstimateBar />
    </div>
  );
}
