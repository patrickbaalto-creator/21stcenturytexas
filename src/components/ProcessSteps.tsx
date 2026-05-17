import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function ProcessSteps({ steps }: { steps: { n: string; title: string; desc: string }[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' as any });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
      <motion.div
        className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}>
        {steps.map((step, idx) => (
          <motion.div key={idx} variants={item} className="relative z-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#f97316]/20 border-2 border-[#f97316] flex items-center justify-center text-white font-bold text-xl mb-5 mx-auto">
              {step.n}
            </div>
            <h3 className="font-bold text-xl text-white mb-3">{step.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="hidden lg:block absolute top-[27px] left-[80px] right-[80px] h-[1px] bg-gradient-to-r from-[#f97316]/0 via-[#f97316]/40 to-[#f97316]/0 z-0" />
    </div>
  );
}
