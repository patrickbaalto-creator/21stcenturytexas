import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import * as LucideIcons from 'lucide-react';
import { useState } from 'react';
import { FadeUp } from '../components/FadeUp';
import { useSEO } from '../utils/seo';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', serviceType: 'Not Sure', bestTime: 'Anytime', message: ''
  });

  const inputClass = "w-full bg-white dark-input border border-gray-200 text-[#1e293b] rounded-lg px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 transition-all text-[0.95rem]";
  const labelClass = "block text-[0.75rem] uppercase tracking-[0.1em] text-[#64748b] mb-1.5 font-semibold";

  if (submitted) {
    return (
      <div className="text-center space-y-4 py-12">
        <LucideIcons.CheckCircle className="w-14 h-14 text-[#f97316] mx-auto" />
        <h3 className="font-display text-2xl text-[#111827]">We'll be in touch within 2 hours.</h3>
        <p className="text-[#64748b]">A member of our team will call you at {form.phone}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name</label>
          <input required type="text" value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} className={inputClass} placeholder="John Doe" />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} placeholder="(512) 555-0199" />
        </div>
      </div>
      <div>
        <label className={labelClass}>Email Address</label>
        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} placeholder="john@example.com" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Service Type</label>
          <select value={form.serviceType} onChange={e => setForm({...form, serviceType: e.target.value})} className={inputClass}>
            {['Not Sure','Roof Inspection','Roof Estimate','Roof Installation','Roof Repair','Roof Replacement','Reroof','Hail Damage','Water Damage Restoration'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Best Time to Call</label>
          <select value={form.bestTime} onChange={e => setForm({...form, bestTime: e.target.value})} className={inputClass}>
            {['Anytime','Morning 7–10am','Midday 10am–2pm','Afternoon 2–6pm','Evening 6–8pm'].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Message</label>
        <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={inputClass + " resize-none"} placeholder="Tell us about your project or damage..." />
      </div>
      <button type="submit" className="w-full btn-gold rounded-lg py-4 text-center">
        Send Message &rarr;
      </button>
    </form>
  );
}

export default function Contact() {
  useSEO({
    title: 'Contact 21st Century Roofing Austin | Free Roof Inspection',
    description: 'Contact 21st Century Roofing in Austin TX. Schedule a free roof inspection or get a same-day estimate. Call (512) 219-0342 or fill out our online form. Available 24/7 for emergencies.',
    canonical: '/contact',
  });

  return (
    <div className="bg-white">
      <PageHero
        height="40vh"
        eyebrow="Reach Out"
        title={<>Let's Talk <em>Roofing</em>.</>}
        image="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Emergency Strip */}
      <div className="bg-[#111827] px-4 py-3.5 text-center">
        <p className="text-white font-semibold text-[0.85rem] uppercase tracking-widest flex items-center justify-center flex-wrap gap-2">
          <LucideIcons.AlertTriangle className="w-4 h-4 text-[#f97316]" />
          Roof emergency? Available 24/7. &rarr;
          <a href="tel:5122190342" className="text-[#f97316] hover:text-white underline underline-offset-2">(512) 219-0342</a>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-10 mb-20">

          {/* Left — info */}
          <FadeUp className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-3">Get In Touch</div>
              <h2 className="font-display text-4xl text-[#111827] mb-4">Contact <em>21st Century</em></h2>
              <p className="text-[#475569] text-lg font-light leading-relaxed">
                Send us a message or reach out directly. Our team operates exactly like our crews: fast, friendly, and honest.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: 'Phone', label: 'Direct Line', content: <a href="tel:5122190342" className="text-[#111827] font-semibold text-lg hover:text-[#f97316]">(512) 219-0342</a> },
                { icon: 'Mail', label: 'Email', content: <a href="mailto:info@austinwdr.com" className="text-[#111827] font-medium hover:text-[#f97316] text-sm">info@austinwdr.com</a> },
                { icon: 'MapPin', label: 'Headquarters', content: <p className="text-[#475569] text-sm">9811 A Beck Cir, Austin, TX 78758</p> },
                { icon: 'Clock', label: 'Hours', content: <p className="text-[#475569] text-sm">Mon–Fri 7am–6pm &nbsp;·&nbsp; <span className="text-[#f97316] font-semibold">Emergency 24/7</span></p> },
              ].map(({ icon, label, content }) => {
                const Icon = (LucideIcons as any)[icon];
                return (
                  <div key={label} className="flex gap-4 items-start p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#f97316] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-[#94a3b8] uppercase tracking-wider mb-0.5">{label}</div>
                      {content}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 220 }}>
              <iframe
                title="21st Century Austin Location"
                width="100%" height="220"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5!2d-97.7127123!3d30.3761739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a4f8b0c1a3%3A0x9c1f2d3e4a5b6c7d!2sAustin+Roofing+Company+%26+Water+Damage+%7C+21st Century!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Austin+Roofing+Company+%26+Water+Damage+%7C+21st Century/@30.3761555,-97.7127597,21z"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold hover:underline"
            >
              <LucideIcons.MapPin className="w-4 h-4" /> Get Directions on Google Maps &rarr;
            </a>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.1} className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="text-[#f97316] text-xs font-bold uppercase tracking-widest mb-3">Free Estimate</div>
              <h3 className="font-display text-3xl text-[#111827] mb-8">Request a Free Inspection</h3>
              <ContactForm />
            </div>
          </FadeUp>

        </div>
      </div>
    </div>
  );
}
