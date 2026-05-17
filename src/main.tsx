import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import './index.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import VideoGallery from './pages/VideoGallery';
import NotFound from './pages/NotFound';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import RoofTypes from './pages/roof-types/RoofTypes';
import ServiceArea from './pages/service-area/ServiceArea';
import FactoryComponent from './pages/FactoryComponent'; // We will use a router generic factory for repetitive pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<FactoryComponent type="service" />} />
          
          <Route path="/roof-types" element={<RoofTypes />} />
          <Route path="/roof-types/:group/:slug" element={<FactoryComponent type="rooftype" />} />
          <Route path="/roof-types/:slug" element={<FactoryComponent type="rooftype" />} />
          
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/service-area/:slug" element={<FactoryComponent type="city" />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/video-gallery" element={<VideoGallery />} />
          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
