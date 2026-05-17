import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const About        = lazy(() => import('./pages/About'));
const Services     = lazy(() => import('./pages/Services'));
const Factory      = lazy(() => import('./pages/FactoryComponent'));
const Residential  = lazy(() => import('./pages/Residential'));
const Commercial   = lazy(() => import('./pages/Commercial'));
const Blog         = lazy(() => import('./pages/Blog'));
const BlogPost     = lazy(() => import('./pages/BlogPost'));
const Contact      = lazy(() => import('./pages/Contact'));
const ServiceArea  = lazy(() => import('./pages/service-area/ServiceArea'));
const NotFound     = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"                    element={<Home />} />
            <Route path="/about"               element={<About />} />
            <Route path="/services"            element={<Services />} />
            <Route path="/services/:slug"      element={<Factory />} />
            <Route path="/residential"         element={<Residential />} />
            <Route path="/commercial"          element={<Commercial />} />
            <Route path="/blog"                element={<Blog />} />
            <Route path="/blog/:slug"          element={<BlogPost />} />
            <Route path="/contact"             element={<Contact />} />
            <Route path="/service-areas/:slug" element={<ServiceArea />} />
            <Route path="/privacy-policy"       element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*"                    element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
