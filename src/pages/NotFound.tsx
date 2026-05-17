import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { useSEO } from '../utils/seo';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  useSEO({ title: 'Page Not Found | 21st Century', description: 'The page you are looking for could not be found.' });
  return (
    <Section className="!py-32 text-center">
      <div className="eyebrow mb-4 justify-center">404</div>
      <h1 className="text-6xl lg:text-8xl mb-5"><span className="italic text-brand">Lost</span> a page.</h1>
      <p className="text-stone-soft text-lg mb-10 max-w-md mx-auto">The page you were looking for may have moved. Try our home page, or jump into a service.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="btn-primary">Home <ArrowRight className="w-4 h-4" /></Link>
        <Link to="/painting" className="btn-soft">Painting</Link>
        <Link to="/roofing" className="btn-soft">Roofing</Link>
        <Link to="/siding" className="btn-soft">Siding</Link>
      </div>
    </Section>
  );
}
