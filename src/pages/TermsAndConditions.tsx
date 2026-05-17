import { PageHero } from '../components/PageHero';
import { Breadcrumb } from '../components/Breadcrumb';
import { useSEO } from '../utils/seo';

export default function TermsAndConditions() {
  useSEO({
    title: 'Terms & Conditions | 21st Century Austin Roofing',
    description: 'Terms and Conditions for 21st Century 21st Century Painting, Roofing & Siding Restoration. Read our terms of service before using our website.',
    canonical: '/terms-and-conditions',
  });

  const h2 = 'font-display text-2xl text-[#1e3a5f] mb-4';
  const p = 'leading-relaxed mb-4';
  const ul = 'list-disc pl-6 space-y-2 mb-4';

  return (
    <div className="bg-white">
      <PageHero
        height="35vh"
        eyebrow="Legal"
        title="Terms &amp; Conditions"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

        <div className="mt-10 space-y-10 text-[#475569]">

          <section>
            <p className={p}>
              Welcome to Austin Roofing Company &amp; Water Damage | 21st Century!
            </p>
            <p className={p}>
              These terms and conditions outline the rules and regulations for the use of Austin Roofing Company &amp; Water Damage | 21st Century's Website, located at https://21stcenturytexas.com/.
            </p>
            <p className={p}>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Austin Roofing Company &amp; Water Damage | 21st Century if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p className={p}>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
          </section>

          <section>
            <h2 className={h2}>Cookies</h2>
            <p className={p}>
              We employ the use of cookies. By accessing Austin Roofing Company &amp; Water Damage | 21st Century, you agreed to use cookies in agreement with the Austin Roofing Company &amp; Water Damage | 21st Century's Privacy Policy.
            </p>
            <p className={p}>
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </section>

          <section>
            <h2 className={h2}>License</h2>
            <p className={p}>
              Unless otherwise stated, Austin Roofing Company &amp; Water Damage | 21st Century and/or its licensors own the intellectual property rights for all material on Austin Roofing Company &amp; Water Damage | 21st Century. All intellectual property rights are reserved. You may access this from Austin Roofing Company &amp; Water Damage | 21st Century for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="leading-relaxed mb-2">You must not:</p>
            <ul className={ul}>
              <li>Republish material from Austin Roofing Company &amp; Water Damage | 21st Century</li>
              <li>Sell, rent or sub-license material from Austin Roofing Company &amp; Water Damage | 21st Century</li>
              <li>Reproduce, duplicate or copy material from Austin Roofing Company &amp; Water Damage | 21st Century</li>
              <li>Redistribute content from Austin Roofing Company &amp; Water Damage | 21st Century</li>
            </ul>
            <p className={p}>
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Austin Roofing Company &amp; Water Damage | 21st Century does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Austin Roofing Company &amp; Water Damage | 21st Century, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Austin Roofing Company &amp; Water Damage | 21st Century shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>
            <p className={p}>
              Austin Roofing Company &amp; Water Damage | 21st Century reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>
            <p className="leading-relaxed mb-2">You warrant and represent that:</p>
            <ul className={ul}>
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
              <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy;</li>
              <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
            </ul>
            <p className={p}>
              You hereby grant Austin Roofing Company &amp; Water Damage | 21st Century a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
            </p>
          </section>

          <section>
            <h2 className={h2}>Hyperlinking to our Content</h2>
            <p className="leading-relaxed mb-2">The following organizations may link to our Website without prior written approval:</p>
            <ul className={ul}>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
              <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.</li>
            </ul>
            <p className={p}>
              These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
            </p>
            <p className="leading-relaxed mb-2">We may consider and approve other link requests from the following types of organizations:</p>
            <ul className={ul}>
              <li>commonly-known consumer and/or business information sources;</li>
              <li>dot.com community sites;</li>
              <li>associations or other groups representing charities;</li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>accounting, law and consulting firms; and</li>
              <li>educational institutions and trade associations.</li>
            </ul>
            <p className={p}>
              We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Austin Roofing Company &amp; Water Damage | 21st Century; and (d) the link is in the context of general resource information.
            </p>
            <p className={p}>
              These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
            </p>
            <p className={p}>
              If you are one of the organizations listed above and are interested in linking to our website, you must inform us by sending an e-mail to Austin Roofing Company &amp; Water Damage | 21st Century. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2–3 weeks for a response.
            </p>
            <p className="leading-relaxed mb-2">Approved organizations may hyperlink to our Website as follows:</p>
            <ul className={ul}>
              <li>By use of our corporate name; or</li>
              <li>By use of the uniform resource locator being linked to; or</li>
              <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
            </ul>
            <p className={p}>
              No use of Austin Roofing Company &amp; Water Damage | 21st Century's logo or other artwork will be allowed for linking absent a trademark license agreement.
            </p>
          </section>

          <section>
            <h2 className={h2}>iFrames</h2>
            <p className={p}>
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>
          </section>

          <section>
            <h2 className={h2}>Content Liability</h2>
            <p className={p}>
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>
          </section>

          <section>
            <h2 className={h2}>Your Privacy</h2>
            <p className={p}>Please read our <a href="/privacy-policy" className="text-[#f97316] hover:underline">Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className={h2}>Reservation of Rights</h2>
            <p className={p}>
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>
          </section>

          <section>
            <h2 className={h2}>Removal of Links from our Website</h2>
            <p className={p}>
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.
            </p>
            <p className={p}>
              We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>
          </section>

          <section>
            <h2 className={h2}>Disclaimer</h2>
            <p className={p}>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className={ul}>
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p className={p}>
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
            </p>
            <p className={p}>
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>
          </section>

          <section>
            <h2 className={h2}>Contact Us</h2>
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
