import { Link } from 'react-router-dom';
import { img, IMG } from '../utils/unsplash';
import { Phone, Star, ArrowRight, MapPin, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] } }),
};

export function BentoHero() {
  return (
    <section className="section pt-8 lg:pt-12 pb-0 lg:pb-0">
      <div className="shell">
        <div className="grid grid-cols-6 lg:grid-cols-12 grid-rows-[auto] gap-3 lg:gap-4 auto-rows-[minmax(120px,auto)]">

          {/* Headline tile */}
          <motion.div variants={item} initial="hidden" animate="show" custom={0}
            className="bento bento-cream col-span-6 lg:col-span-8 row-span-3 p-7 lg:p-12 flex flex-col justify-between min-h-[420px] lg:min-h-[540px] relative overflow-hidden">
            <div className="eyebrow">Austin, TX · Since 1996</div>
            <div>
              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[5rem] leading-[0.98] tracking-tight mb-6">
                One crew.<br />
                <span className="italic text-brand">Three trades.</span><br />
                Zero excuses.
              </h1>
              <p className="text-stone-soft text-lg lg:text-xl leading-relaxed max-w-xl mb-8">
                Painting, roofing, and James Hardie siding from the same family-owned Austin contractor since 1996. One estimate, one warranty, one number to call.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Free Estimate <ArrowRight className="w-4 h-4" /></Link>
                <a href="tel:5122190342" className="btn-ghost"><Phone className="w-4 h-4" /> (512) 219-0342</a>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" aria-hidden="true" />
          </motion.div>

          {/* Hero photo tile */}
          <motion.div variants={item} initial="hidden" animate="show" custom={1}
            className="bento col-span-6 lg:col-span-4 row-span-2 overflow-hidden min-h-[260px] lg:min-h-0 p-0">
            <img src={img(IMG.hero, 1200)} alt="Austin home exterior, painted and re-roofed by 21st Century"
              className="w-full h-full object-cover" fetchPriority="high" />
          </motion.div>

          {/* Rating tile */}
          <motion.div variants={item} initial="hidden" animate="show" custom={2}
            className="bento bento-dark col-span-3 lg:col-span-2 p-5 lg:p-6 flex flex-col justify-between min-h-[140px]">
            <div className="flex items-center gap-0.5 text-brand">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand" />)}
            </div>
            <div>
              <div className="font-display text-3xl lg:text-4xl font-bold">300+</div>
              <div className="text-white/60 text-xs uppercase tracking-wider font-semibold mt-1">Five-star reviews</div>
            </div>
          </motion.div>

          {/* Since 1996 tile */}
          <motion.div variants={item} initial="hidden" animate="show" custom={3}
            className="bento bento-brand col-span-3 lg:col-span-2 p-5 lg:p-6 flex flex-col justify-between min-h-[140px]">
            <Calendar className="w-5 h-5 opacity-90" />
            <div>
              <div className="font-display text-3xl lg:text-4xl font-bold">29 yrs</div>
              <div className="text-white/80 text-xs uppercase tracking-wider font-semibold mt-1">Locally owned</div>
            </div>
          </motion.div>

          {/* Trade badges row */}
          <motion.div variants={item} initial="hidden" animate="show" custom={4}
            className="bento col-span-6 lg:col-span-4 p-5 lg:p-6 flex flex-col justify-between min-h-[140px]">
            <div className="text-stone-mute text-[11px] uppercase tracking-[0.18em] font-bold">Certified by</div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[13px] font-semibold text-stone-ink">
              <span>· James Hardie</span><span>· GAF</span>
              <span>· Sherwin-Williams</span><span>· Benjamin Moore</span>
              <span>· EPA Lead-Safe</span><span>· BBB Accredited</span>
            </div>
          </motion.div>

          {/* CTA strip */}
          <motion.div variants={item} initial="hidden" animate="show" custom={5}
            className="bento col-span-6 lg:col-span-4 p-5 lg:p-6 flex items-center justify-between min-h-[140px] gap-4">
            <div>
              <div className="text-stone-mute text-[11px] uppercase tracking-[0.18em] font-bold mb-1">Free estimate</div>
              <div className="font-display text-xl text-stone-ink leading-tight">Most quotes scheduled<br />within 48 hours.</div>
            </div>
            <Link to="/contact" aria-label="Request a free estimate"
              className="w-14 h-14 rounded-full bg-stone-ink text-cream flex items-center justify-center hover:bg-brand transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Area chip */}
          <motion.div variants={item} initial="hidden" animate="show" custom={6}
            className="bento col-span-6 lg:col-span-4 p-5 lg:p-6 flex items-center gap-4 min-h-[140px]">
            <div className="w-12 h-12 rounded-full bg-cream-2 flex items-center justify-center text-brand">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-stone-mute text-[11px] uppercase tracking-[0.18em] font-bold mb-1">Serving</div>
              <div className="font-display text-base text-stone-ink leading-tight">Austin · Round Rock · Cedar Park · Georgetown · Leander · Lakeway · Kyle · Buda · Pflugerville</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
