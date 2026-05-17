import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { useSEO } from '../utils/seo';

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy | 21st Century Austin Roofing',
    description: 'Privacy Policy for 21st Century 21st Century Painting, Roofing & Siding Restoration. Learn how we collect, use, and protect your personal information.',
    canonical: '/privacy-policy',
  });

  const h2 = 'font-display text-2xl text-[#1e3a5f] mb-4';
  const p = 'leading-relaxed mb-4';

  return (
    <div className="bg-white">
      <PageHero
        height="35vh"
        eyebrow="Legal"
        title="Privacy Policy"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        <div className="mt-10 space-y-10 text-[#475569]">

          <section>
            <p className={p}>
              Your privacy is critically important to us. At Austin Roofing Company &amp; Water Damage | 21st Century, we have a few fundamental principles that we follow regarding the information you share with us.
            </p>
          </section>

          <section>
            <h2 className={h2}>Information We Collect &amp; How We Use It</h2>
            <p className={p}>
              We are committed to the following practices regarding your personal information:
            </p>

            <div className="space-y-6">
              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Purpose Identification</h3>
                <p className="text-sm leading-relaxed">
                  Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Limited Use</h3>
                <p className="text-sm leading-relaxed">
                  We will collect and use personal information solely for fulfilling the purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Retention Limits</h3>
                <p className="text-sm leading-relaxed">
                  We will only retain personal information as long as necessary for the fulfillment of those purposes.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Fair Collection</h3>
                <p className="text-sm leading-relaxed">
                  We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Data Quality</h3>
                <p className="text-sm leading-relaxed">
                  Personal data should be relevant to the purposes for which it is to be used, and to the extent necessary for those purposes, should be accurate, complete, and up-to-date.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Security Protections</h3>
                <p className="text-sm leading-relaxed">
                  We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">Transparency</h3>
                <p className="text-sm leading-relaxed">
                  We will make readily available to customers information about our policies and practices relating to the management of personal information.
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className={p}>
              We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.
            </p>
          </section>

          <section>
            <h2 className={h2}>Contact Us</h2>
            <p className={p}>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 space-y-1 text-sm">
              <p className="font-semibold text-[#1e3a5f]">21st Century — Austin Roofing Company &amp; Water Damage</p>
              <p>9811 A Beck Cir, Austin, TX 78758</p>
              <p><a href="tel:5122190342" className="text-[#f97316] hover:underline">(512) 219-0342</a></p>
              <p><a href="mailto:info@austinwdr.com" className="text-[#f97316] hover:underline">info@austinwdr.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
