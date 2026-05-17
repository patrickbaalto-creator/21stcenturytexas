import { useState } from 'react';
import { Section } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { useSEO } from '../utils/seo';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';

export default function Contact() {
  useSEO({
    title: 'Contact 21st Century — Free Painting, Roofing & Siding Estimate',
    description: 'Request a free estimate from Austin\'s top-rated exterior contractor. Phone (512) 219-0342 or fill the form. We respond within 48 hours.',
    canonical: '/contact',
  });

  const [sent, setSent] = useState(false);

  return (
    <>
      <Section className="!pt-14 lg:!pt-20 !pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <FadeIn className="lg:col-span-5">
            <div className="eyebrow mb-4">Get an estimate</div>
            <h1 className="text-5xl lg:text-6xl leading-[0.98] tracking-tight mb-6">
              Tell us about <span className="italic text-brand">your project.</span>
            </h1>
            <p className="text-stone-soft text-lg leading-relaxed mb-8 max-w-md">
              Send a few details and we'll book your free on-site estimate within 48 hours. For storm emergencies, just call.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: 'Phone',  value: '(512) 219-0342',         href: 'tel:5122190342' },
                { icon: Mail,  label: 'Email',  value: 'sales@21stcenturytexas.com', href: 'mailto:sales@21stcenturytexas.com' },
                { icon: MapPin,label: 'Office', value: '9811 A Beck Cir\nAustin, TX 78758' },
                { icon: Clock, label: 'Hours',  value: 'Mon–Fri 8am–5pm\nEmergency calls 24/7' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-cream-2 flex items-center justify-center text-brand shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-stone-mute text-xs uppercase tracking-wider font-bold mb-1">{label}</div>
                    {href
                      ? <a href={href} className="text-stone-ink font-semibold hover:text-brand whitespace-pre-line">{value}</a>
                      : <div className="text-stone-ink font-semibold whitespace-pre-line">{value}</div>}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.1}>
            {sent ? (
              <div className="bento p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center mx-auto mb-5">
                  <Check className="w-7 h-7" strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-3">Thanks — we'll be in touch.</h2>
                <p className="text-stone-mute mb-6">Most estimates are scheduled within 48 hours. For storm emergencies, call (512) 219-0342.</p>
                <button onClick={() => setSent(false)} className="btn-soft">Send another</button>
              </div>
            ) : (
              <form className="bento p-7 lg:p-10 space-y-5"
                onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name"  name="lastName"  required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="City" name="city" required />
                  <Select label="Service interest" name="service" required options={[
                    'Exterior Painting','Interior Painting','Commercial Painting',
                    'Residential Roofing','Metal Roofing','Roof Repair',
                    'Siding Installation','Insurance Claim','Not sure yet',
                  ]} />
                </div>
                <Field label="Tell us about your project" name="message" textarea />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-stone-mute">We never share your info. No spam. Real human reply.</p>
                  <button type="submit" className="btn-primary">Request Estimate</button>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </Section>

      <Section className="!pt-4 !pb-24">
        <FadeIn>
          <div className="bento overflow-hidden h-80 lg:h-[420px]">
            <iframe
              title="21st Century Office Location"
              src="https://www.google.com/maps?q=9811+Beck+Cir,+Austin,+TX+78758&output=embed"
              width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </FadeIn>
      </Section>
    </>
  );
}

function Field({ label, name, type = 'text', required = false, textarea = false }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-stone-mute mb-1.5 block">{label}{required && <span className="text-brand"> *</span>}</span>
      {textarea
        ? <textarea name={name} rows={4} required={required} className="w-full bg-cream border border-stone-line rounded-2xl px-4 py-3 text-stone-ink focus:border-brand focus:outline-none transition-colors" />
        : <input name={name} type={type} required={required} className="w-full bg-cream border border-stone-line rounded-2xl px-4 py-3 text-stone-ink focus:border-brand focus:outline-none transition-colors" />}
    </label>
  );
}

function Select({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wider text-stone-mute mb-1.5 block">{label}{required && <span className="text-brand"> *</span>}</span>
      <select name={name} required={required} defaultValue="" className="w-full bg-cream border border-stone-line rounded-2xl px-4 py-3 text-stone-ink focus:border-brand focus:outline-none transition-colors">
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
