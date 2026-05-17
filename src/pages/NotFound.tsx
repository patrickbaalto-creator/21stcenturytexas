import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => { document.title = "Page Not Found | 21st Century"; }, []);

  return (
    <div className="bg-white min-h-[80vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05)_0%,transparent_50%)] z-0" />

       <div className="relative z-10 flex flex-col items-center">
         <h1 className="font-display text-[12rem] text-[#f97316]/10 leading-none mb-0 select-none">404</h1>
         <h2 className="font-display text-4xl text-[#111827] mb-4 -mt-10">Page not found.</h2>
         <p className="text-[#64748b] font-light max-w-md mx-auto mb-10">
           The page you are looking for doesn't exist or has been moved. 
           If you're looking for a roofer, you're still in the right place.
         </p>
         
         <div className="flex flex-col sm:flex-row gap-4">
           <Link to="/" className="btn-gold rounded-full">&larr; Back Home</Link>
           <Link to="/contact" className="btn-ghost rounded-full">Contact Us</Link>
         </div>
       </div>
    </div>
  )
}
