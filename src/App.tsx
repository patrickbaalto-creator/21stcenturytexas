import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './pages/Home';

const PaintingHub  = lazy(() => import('./pages/PaintingHub'));
const RoofingHub   = lazy(() => import('./pages/RoofingHub'));
const SidingHub    = lazy(() => import('./pages/SidingHub'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const AreasIndex   = lazy(() => import('./pages/AreasIndex'));
const CityPage     = lazy(() => import('./pages/CityPage'));
const ProjectsIndex = lazy(() => import('./pages/ProjectsIndex'));
const About        = lazy(() => import('./pages/About'));
const Reviews      = lazy(() => import('./pages/Reviews'));
const Blog         = lazy(() => import('./pages/Blog'));
const BlogPost     = lazy(() => import('./pages/BlogPost'));
const Contact      = lazy(() => import('./pages/Contact'));
const Privacy      = lazy(() => import('./pages/Privacy'));
const Terms        = lazy(() => import('./pages/Terms'));
const NotFound     = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Routes>
            <Route path="/"                element={<Home />} />
            <Route path="/painting"        element={<PaintingHub />} />
            <Route path="/roofing"         element={<RoofingHub />} />
            <Route path="/siding"          element={<SidingHub />} />
            <Route path="/services/:slug"  element={<ServiceDetail />} />
            <Route path="/areas"           element={<AreasIndex />} />
            <Route path="/areas/:slug"     element={<CityPage />} />
            <Route path="/projects"        element={<ProjectsIndex />} />
            <Route path="/about"           element={<About />} />
            <Route path="/reviews"         element={<Reviews />} />
            <Route path="/blog"            element={<Blog />} />
            <Route path="/blog/:slug"      element={<BlogPost />} />
            <Route path="/contact"         element={<Contact />} />
            <Route path="/privacy-policy"  element={<Privacy />} />
            <Route path="/terms"           element={<Terms />} />
            <Route path="*"                element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
