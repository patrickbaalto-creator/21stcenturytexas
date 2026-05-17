import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { services, tradeMeta } from '../data/services';
import { reviewsByTrade } from '../data/reviews';
import { Section, SectionHead } from '../components/Section';
import { ReviewTile } from '../components/ReviewTile';
import { FadeIn } from '../components/FadeIn';
import { img } from '../utils/unsplash';
import { useSEO } from '../utils/seo';
import NotFound from './NotFound';
import { ArrowRight, ArrowLeft, Check, Phone, ChevronDown } from 'lucide-react';

export default function ServiceDetail() {
  const { slug = '' } = useParams();
  const service = services.find(s => s.slug === slug);

  useSEO(service ? {
    title: `${service.name} in Austin TX | 21st Century`,
    description: `${service.short} Serving Austin and Central Texas since 1996. Free estimates. Call (512) 219-0342.`,
    canonical: `/services/${service.slug}`,
  } : { title: 'Service Not Found | 21st Century', description: '' });

  if (!service) return <NotFound />;

  const tradeHub = service.trade === 'claims' ? '/siding' : `/${service.trade}`;
  const tradeLabel = service.trade === 'claims' ? 'Insurance Claims' : tradeMeta[service.trade].name;
  const related = services.filter(s => s.trade === service.trade && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Section className="!pt-10 lg:!pt-14 !pb-8">
        <Link to={tradeHub} className="inline-flex items-center gap-1.5 text-sm text-stone-mute hover:text-brand mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> {tradeLabel}
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <FadeIn className="lg:col-span-7">
            <div className="eyebrow mb-3">{tradeLabel}</div>
            <h1 className="text-4xl lg:text-6xl mb-5 leading-[1.02]">{service.name}</h1>
            <p className="text-stone-soft text-lg lg:text-xl leading-relaxed mb-6">{service.body}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Get a Free Estimate <ArrowRight className="w-4 h-4" /></Link>
              <a href="tel:5122190342" className="btn-ghost"><Phone className="w-4 h-4" /> (512) 219-0342</a>
            </div>
          </FadeIn>
          <FadeIn className="lg:col-span-5" delay={0.1}>
            <div className="bento overflow-hidden aspect-[5/4]">
              <img src={img(service.heroImg, 1100)} alt={service.name} className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="!py-16 lg:!py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-5">
            <div className="eyebrow mb-3">What's included</div>
            <h2 className="text-3xl lg:text-4xl mb-6">Every job, every time.</h2>
            <p className="text-stone-mute leading-relaxed">No upsell surprises. The list below is the standard scope of every {service.name.toLowerCase()} project we deliver.</p>
          </FadeIn>
          <FadeIn className="lg:col-span-7" delay={0.1}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.includes.map((inc, i) => (
                <li key={i} className="bento p-4 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-cream-2 text-brand flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" strokeWidth={3} /></div>
                  <span className="text-[15px] text-stone-ink leading-snug">{inc}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-stone-ink text-white -mx-6 lg:-mx-12 px-6 lg:px-12 !py-20 lg:!py-28">
        <div className="shell">
          <div className="max-w-2xl">
            <div className="eyebrow text-brand mb-3">How it works</div>
            <h2 className="text-white text-3xl lg:text-5xl mb-12">Four steps. Done in days.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.steps.map(s => (
              <FadeIn key={s.n} className="bento bento-dark p-6 lg:p-7">
                <div className="font-display text-5xl text-brand font-bold mb-4">{s.n}</div>
                <h3 className="text-white text-xl font-display font-bold mb-2">{s.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Frequently asked" title="What homeowners ask before booking." />
        <div className="max-w-3xl">
          {service.faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-cream-2/40 !py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
          <div className="shell">
            <SectionHead eyebrow="Related" title={`More ${tradeLabel.toLowerCase()} services.`} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {related.map(r => (
                <Link key={r.slug} to={`/services/${r.slug}`} className="bento p-6 group">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-brand transition-colors">{r.name}</h3>
                  <p className="text-stone-mute text-sm leading-relaxed mb-4">{r.short}</p>
                  <span className="text-brand text-sm font-semibold inline-flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section>
        <SectionHead eyebrow="Reviews" title="What people say about this service." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {reviewsByTrade(service.trade).slice(0, 2).map((r, i) => <ReviewTile key={i} review={r} />)}
        </div>
      </Section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-line">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-display text-lg lg:text-xl font-bold text-stone-ink">{q}</span>
        <ChevronDown className={`w-5 h-5 text-stone-mute shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-stone-soft leading-relaxed text-[15px]">{a}</p>}
    </div>
  );
}
