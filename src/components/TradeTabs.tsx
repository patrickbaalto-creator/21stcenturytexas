import { useState } from 'react';
import { services, tradeMeta, type Trade } from '../data/services';
import { ServiceTile } from './ServiceTile';
import { motion, AnimatePresence } from 'motion/react';

const tabs: Trade[] = ['painting', 'roofing', 'siding'];

export function TradeTabs({ initial = 'painting' as Trade }: { initial?: Trade }) {
  const [trade, setTrade] = useState<Trade>(initial);
  const visible = services.filter(s => s.trade === trade || (trade === 'siding' && s.trade === 'claims'));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 lg:gap-3 mb-8">
        {tabs.map(t => {
          const active = t === trade;
          return (
            <button key={t}
              onClick={() => setTrade(t)}
              className={`relative px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors ${
                active ? 'text-white' : 'text-stone-ink hover:bg-cream-2'
              }`}>
              {active && (
                <motion.span layoutId="trade-pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 bg-stone-ink rounded-full -z-10" />
              )}
              {tradeMeta[t].name}
            </button>
          );
        })}
        <p className="hidden md:block text-stone-mute text-sm ml-2 italic">{tradeMeta[trade].tagline}</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={trade}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {visible.map(s => <ServiceTile key={s.slug} service={s} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
