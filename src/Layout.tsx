import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { MobileCtaBar } from './components/MobileCtaBar';

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {/* Spacer so footer isn't hidden behind fixed mobile bar */}
      <div className="block md:hidden" style={{height: '5rem'}} aria-hidden="true" />
      <MobileCtaBar />
    </div>
  )
}
