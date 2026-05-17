import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { CtaBanner } from '../components/CtaBanner';
import { Play, X } from 'lucide-react';
import { useState } from 'react';
import { useSEO } from '../utils/seo';

// Pexels thumbnail pattern: https://images.pexels.com/videos/{id}/pictures/preview-0.jpg
const videos = [
  {
    title: 'Full Roof Replacement — Cedar Park TX',
    cat: 'Roof Installation',
    time: '2:34',
    thumb: 'https://images.pexels.com/videos/4198816/pictures/preview-0.jpg',
    embedId: '4198816',
  },
  {
    title: 'Hail Damage Inspection Walkthrough',
    cat: 'Storm Damage',
    time: '4:15',
    thumb: 'https://images.pexels.com/videos/3968975/pictures/preview-0.jpg',
    embedId: '3968975',
  },
  {
    title: 'Metal Roof Installation Time-lapse',
    cat: 'Time-lapse',
    time: '1:50',
    thumb: 'https://images.pexels.com/videos/4198817/pictures/preview-0.jpg',
    embedId: '4198817',
  },
  {
    title: 'Water Damage Restoration Before & After',
    cat: 'Water Damage',
    time: '3:20',
    thumb: 'https://images.pexels.com/videos/4198783/pictures/preview-0.jpg',
    embedId: '4198783',
  },
  {
    title: 'GAF Shingle Installation Process',
    cat: 'Roof Installation',
    time: '5:45',
    thumb: 'https://images.pexels.com/videos/6057019/pictures/preview-0.jpg',
    embedId: '6057019',
  },
  {
    title: 'Storm Damage Assessment — Round Rock',
    cat: 'Storm Damage',
    time: '3:05',
    thumb: 'https://images.pexels.com/videos/4198811/pictures/preview-0.jpg',
    embedId: '4198811',
  },
  {
    title: 'Commercial Flat Roof Install',
    cat: 'Commercial',
    time: '4:40',
    thumb: 'https://images.pexels.com/videos/5835970/pictures/preview-0.jpg',
    embedId: '5835970',
  },
  {
    title: '21st Century Team in Action — Austin',
    cat: 'Our Team',
    time: '2:15',
    thumb: 'https://images.pexels.com/videos/2887457/pictures/preview-0.jpg',
    embedId: '2887457',
  },
  {
    title: 'Reroof Project — Georgetown TX',
    cat: 'Roof Replacement',
    time: '3:55',
    thumb: 'https://images.pexels.com/videos/4198810/pictures/preview-0.jpg',
    embedId: '4198810',
  },
];

export default function VideoGallery() {
  useSEO({
    title: 'Video Gallery — Roofing Projects | 21st Century Austin',
    description: 'Watch 21st Century Austin roofing crews in action. Roof replacements, hail damage repairs, metal installs, water damage restoration — all in Central Texas.',
    canonical: '/video-gallery',
  });

  const [activeVid, setActiveVid] = useState<string | null>(null);

  return (
    <div className="bg-white">
      <PageHero
        height="40vh"
        eyebrow="Portfolio"
        title="See 21st Century In Action"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Video lightbox */}
      {activeVid && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setActiveVid(null)}>
          <button className="absolute top-5 right-5 text-white hover:text-blue-300 transition-colors z-10">
            <X className="w-10 h-10" />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <iframe
              src={`https://www.pexels.com/video/${activeVid}/embed/autoplay=1`}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay; fullscreen"
              title="Roofing video"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Video Gallery' }]} />

        {/* Featured video */}
        <div className="mb-16 mt-8 rounded-2xl overflow-hidden shadow-xl relative group cursor-pointer" onClick={() => setActiveVid('4198816')}>
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="21st Century roof replacement project in Austin TX"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/60 flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#1d4ed8] flex items-center justify-center shadow-2xl mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-9 h-9 text-white ml-1" />
            </div>
            <h2 className="text-white font-bold text-2xl">Full Roof Replacement — Cedar Park TX</h2>
            <p className="text-white/70 text-sm mt-1">Our most-watched project walkthrough</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {videos.map((v, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              onClick={() => setActiveVid(v.embedId)}
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={e => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60`;
                  }}
                />
                <div className="absolute inset-0 bg-[#1e3a5f]/30 group-hover:bg-[#1e3a5f]/50 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#1d4ed8] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-mono">{v.time}</span>
              </div>
              <div className="p-5">
                <span className="text-[#1d4ed8] text-xs font-bold uppercase tracking-wider">{v.cat}</span>
                <h3 className="font-bold text-[#1e3a5f] text-base mt-1 leading-snug group-hover:text-[#1d4ed8] transition-colors">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <CtaBanner headline="Ready to start your own project?" />
      </div>
    </div>
  );
}
