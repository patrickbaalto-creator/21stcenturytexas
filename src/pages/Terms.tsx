import { Section } from '../components/Section';
import { useSEO } from '../utils/seo';

export default function Terms() {
  useSEO({ title: 'Terms of Service | 21st Century', description: 'Terms for using our website and engaging our services.', canonical: '/terms' });
  return (
    <Section className="!py-20">
      <div className="max-w-3xl">
        <div className="eyebrow mb-3">Legal</div>
        <h1 className="text-5xl mb-8">Terms of Service</h1>
        <div className="space-y-5 text-stone-soft leading-relaxed">
          <p><strong className="text-stone-ink">Effective:</strong> January 2026</p>
          <p>By using this website you agree that all content is provided for informational purposes and that contractual obligations only begin once a signed, written estimate or contract is in place.</p>
          <h2 className="text-2xl font-display font-bold pt-4 text-stone-ink">Estimates</h2>
          <p>Estimates are valid for 30 days from issuance and subject to material availability and final on-site measurement.</p>
          <h2 className="text-2xl font-display font-bold pt-4 text-stone-ink">Warranties</h2>
          <p>Workmanship warranties are documented in your project agreement. Manufacturer warranties are issued separately by the product manufacturer and are subject to their terms.</p>
          <h2 className="text-2xl font-display font-bold pt-4 text-stone-ink">Insurance claims</h2>
          <p>We act as your contractor on insurance-related projects, not as your public adjuster. Coverage decisions are made solely by your insurance carrier.</p>
        </div>
      </div>
    </Section>
  );
}
