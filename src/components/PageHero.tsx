import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function PageHero({ 
  eyebrow, title, subtitle, image, height = '50vh' 
}: { 
  eyebrow?: string; title: string | React.ReactNode; subtitle?: string; image?: string; height?: string 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} style={{ height }} className="relative overflow-hidden flex items-center justify-center text-center px-6">
      {image && (
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/75 via-[#111827]/55 to-[#111827]/80 z-10" />
          <img src={image} alt="Background" className="w-full h-full object-cover" />
        </motion.div>
      )}
      {!image && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.1)_0%,transparent_50%)]" />
        </div>
      )}
      
      <motion.div style={{ opacity }} className="relative z-20 max-w-[860px] mx-auto mt-16">
        {eyebrow && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#f97316] mb-4"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-light text-[#f3ede0] leading-[1.1]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[1.1rem] font-light text-[#f3ede0]/70 mt-6 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
