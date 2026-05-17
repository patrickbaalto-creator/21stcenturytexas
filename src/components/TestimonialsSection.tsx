import { Star } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const testimonials = [
  { name: 'Jeremy Garcia', location: 'Austin, TX', text: 'Had a roof leak, reached out to Austin Roofing Company. Daniel Harvey came out, gave his opinion on how to get the problem fixed with a good quote. Was able to get the repair completed before the issue got worse. Thanks again!' },
  { name: 'Kirby Schimmels', location: 'Austin, TX', text: 'Dan is great, excellent service from start to finish. They repaired the damaged shingles quickly, matched everything perfectly, and cleaned up afterward. Professional, honest, and reasonably priced — highly recommend!' },
  { name: 'Susanne', location: 'Austin, TX', text: 'Jon was very professional and arrived on time. He found the source of the leak and shared photos with me. Other contractors completely missed the problem. Very happy with Austin Roofing and would use them again.' },
  { name: 'Melissa Moehring', location: 'North Austin, TX', text: 'Brad Farr did an amazing job on our duplex. He met with me the same day and handled the whole insurance process for hail damage. He went above and beyond — I would highly recommend Brad and this company.' },
  { name: 'Tommy N.', location: 'Austin, TX', text: 'I worked with Daniel — he provided a very detailed roof inspection report! He is professional, fast to respond — highly recommend!' },
  { name: 'Rachel Oliver', location: 'Austin, TX', text: 'Jon showed up when we had a roof leak and immediately took care of it. No upselling, just a quick explanation and minor repair. So refreshing! We will definitely call them again.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' as any });

  return (
    <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}>
      {testimonials.map((t, idx) => (
        <motion.div key={idx} variants={item}
          className="bg-white border border-gray-100 shadow-sm p-7 rounded-2xl flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-[#334155] text-base leading-relaxed mb-6">"{t.text}"</p>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">{t.name[0]}</span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#111827]">{t.name}</p>
              <p className="text-xs text-[#94a3b8]">{t.location}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
