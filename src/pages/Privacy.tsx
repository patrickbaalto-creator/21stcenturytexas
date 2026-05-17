import { Section } from '../components/Section';
import { useSEO } from '../utils/seo';

export default function Privacy() {
  useSEO({ title: 'Privacy Policy | 21st Century', description: 'How we collect, use, and protect your information.', canonical: '/privacy-policy' });
  return (
    <Section className="!py-20">
      <div className="max-w-3xl">
        <div className="eyebrow mb-3">Legal</div>
        <h1 className="text-5xl mb-8">Privacy Policy</h1>
        <div className="space-y-5 text-stone-soft leading-relaxed">
          <p><strong className="text-stone-ink">Effective:</strong> January 2026</p>
          <p>21st Century Painting, Roofing & Siding ("we") collects only the information you provide voluntarily through our website forms or phone calls — name, email, phone, address, and project details.</p>
          <h2 className="text-2xl font-display font-bold pt-4 text-stone-ink">How we use information</h2>
          <p>We use your information only to respond to estimate requests, schedule services, and communicate about projects you have requested. We do not sell or share your data with third parties for marketing.</p>
          <h2 className="text-2xl font-display font-bold pt-4 text-stone-ink">Cookies & analytics</h2>
          <p>This site uses basic analytics to understand traffic patterns. No personally identifying information is tied to analytics events.</p>
          <h2 className="text-2xl font-display font-bold pt-4 text-stone-ink">Contact</h2>
          <p>To request deletion of your information, email sales@21stcenturytexas.com.</p>
        </div>
      </div>
    </Section>
  );
}
