export const metadata = {
  title: 'Terms and Conditions | Prompt Forge',
  description: 'Terms and Conditions for Prompt Forge by Hilbert Entertainment, LLC',
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: March 14, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Agreement to Our Legal Terms</h2>
        <p className="mb-3">
          We are <strong>Hilbert Entertainment, LLC</strong>, doing business as <strong>Prompt Forge</strong>
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company registered in North Carolina,
          United States, at 204 Birch Creek Road, McLeansville, NC 27301.
        </p>
        <p className="mb-3">
          We operate the web application <strong>Prompt Forge</strong>, as well as any other related products
          and services that refer or link to these legal terms (collectively, the &quot;Services&quot;).
        </p>
        <p className="mb-3">
          Prompt Forge is a web-based SaaS application that allows users to generate deployment-ready AI agent
          system prompts using a library of templates across multiple industries. The platform offers a free
          tier (limited to 5 generations) and a paid Pro subscription at $12 per month, billed monthly and
          processed through Stripe. The generated prompts are powered by the Anthropic Claude API and are
          intended for use in third-party AI applications. Prompt Forge does not guarantee specific outcomes
          from the use of generated prompts.
        </p>
        <p className="mb-3">
          You can contact us by email at{' '}
          <a href="mailto:thehilberts25@gmail.com" className="text-blue-600 underline">
            thehilberts25@gmail.com
          </a>{' '}
          or by mail at 204 Birch Creek Road, McLeansville, NC 27301, United States.
        </p>
        <p className="mb-3">
          These Legal Terms constitute a legally binding agreement between you and Hilbert Entertainment, LLC.
          By accessing the Services, you confirm you have read, understood, and agreed to be bound by all of
          these Legal Terms. <strong>IF YOU DO NOT AGREE, YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
        </p>
        <p className="mb-3">
          We reserve the right to make changes to these Legal Terms at any time. We will update the
          &quot;Last updated&quot; date when changes are made. Your continued use of the Services after any
          update constitutes your acceptance of the revised terms.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old. Persons under 18 are not
          permitted to use the Services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1 text-blue-600 text-sm">
          {[
            'Our Services', 'Intellectual Property Rights', 'User Representations',
            'User Registration', 'Purchases and Payment', 'Subscriptions',
            'Prohibited Activities', 'User Generated Contributions', 'Contribution License',
            'Mobile Application License', 'Advertisers', 'Services Management',
            'Privacy Policy', 'Term and Termination', 'Modifications and Interruptions',
            'Governing Law', 'Dispute Resolution', 'Corrections', 'Disclaimer',
            'Limitations of Liability', 'Indemnification', 'User Data',
            'Electronic Communications, Transactions, and Signatures',
            'California Users and Residents', 'Miscellaneous', 'Contact Us',
          ].map((item, i) => (
            <li key={i} className="text-gray-700">{item}</li>
          ))}
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Our Services</h2>
        <p className="mb-3">
          The information provided when using the Services is not intended for distribution to or use by any
          person or entity in any jurisdiction where such distribution would be contrary to law or regulation.
          Those who access the Services from other locations do so on their own initiative and are solely
          responsible for compliance with local laws.
        </p>
        <p>
          The Services are not tailored to comply with industry-specific regulations (HIPAA, FISMA, etc.). If
          your interactions would be subject to such laws, you may not use the Services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Intellectual Property Rights</h2>
        <p className="mb-3">
          We own or are the licensee of all intellectual property rights in our Services, including all source
          code, databases, functionality, software, website designs, text, and graphics (the &quot;Content&quot;),
          as well as the trademarks, service marks, and logos (the &quot;Marks&quot;).
        </p>
        <p className="mb-3">
          Subject to these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to
          access the Services solely for your personal, non-commercial use or internal business purpose.
        </p>
        <p className="mb-3">
          No part of the Services, Content, or Marks may be copied, reproduced, republished, sold, or
          otherwise exploited for any commercial purpose without our express prior written permission. Requests
          may be sent to{' '}
          <a href="mailto:thehilberts25@gmail.com" className="text-blue-600 underline">
            thehilberts25@gmail.com
          </a>.
        </p>
        <p>
          Any breach of these Intellectual Property Rights will constitute a material breach of these Legal
          Terms and your right to use the Services will terminate immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Representations</h2>
        <p className="mb-3">By using the Services, you represent and warrant that:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>All registration information you submit will be true, accurate, current, and complete.</li>
          <li>You will maintain the accuracy of such information.</li>
          <li>You have the legal capacity to agree to these Legal Terms.</li>
          <li>You are not a minor in the jurisdiction in which you reside.</li>
          <li>You will not access the Services through automated or non-human means.</li>
          <li>You will not use the Services for any illegal or unauthorized purpose.</li>
          <li>Your use of the Services will not violate any applicable law or regulation.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. User Registration</h2>
        <p>
          You may be required to register to use the Services. You agree to keep your password confidential
          and are responsible for all use of your account. We reserve the right to remove or change a username
          we determine to be inappropriate or objectionable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Purchases and Payment</h2>
        <p className="mb-3">We accept payment via Stripe.</p>
        <p className="mb-3">
          You agree to provide current, complete, and accurate purchase and account information for all
          purchases. You authorize us to charge your chosen payment provider for any amounts due. All payments
          are in US dollars. We may change prices at any time and reserve the right to refuse any order.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Subscriptions</h2>
        <h3 className="font-semibold mb-2">Billing and Renewal</h3>
        <p className="mb-3">
          Your subscription will continue and automatically renew unless canceled. Billing cycles are monthly.
        </p>
        <h3 className="font-semibold mb-2">Free Tier</h3>
        <p className="mb-3">
          We offer a free tier limited to 5 prompt generations. The account will not be charged unless
          upgraded to a paid plan.
        </p>
        <h3 className="font-semibold mb-2">Cancellation</h3>
        <p className="mb-3">
          You can cancel your subscription at any time by logging into your account. Cancellation takes effect
          at the end of the current paid term. For questions, email{' '}
          <a href="mailto:thehilberts25@gmail.com" className="text-blue-600 underline">
            thehilberts25@gmail.com
          </a>.
        </p>
        <h3 className="font-semibold mb-2">Fee Changes</h3>
        <p>We may change subscription fees from time to time and will communicate changes in accordance with applicable law.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Prohibited Activities</h2>
        <p className="mb-3">You may not use the Services for any purpose other than that for which we make them available. As a user, you agree not to:</p>
        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
          <li>Systematically retrieve data to create databases or directories without permission.</li>
          <li>Trick, defraud, or mislead us or other users.</li>
          <li>Circumvent or interfere with security features of the Services.</li>
          <li>Disparage or harm us or the Services.</li>
          <li>Harass, abuse, or harm another person using information from the Services.</li>
          <li>Make improper use of support services or submit false reports.</li>
          <li>Use the Services in violation of any applicable laws or regulations.</li>
          <li>Engage in unauthorized framing of or linking to the Services.</li>
          <li>Upload viruses, Trojan horses, or other disruptive material.</li>
          <li>Use automated scripts, bots, scrapers, or data mining tools.</li>
          <li>Delete copyright or proprietary rights notices from any Content.</li>
          <li>Impersonate another user or person.</li>
          <li>Interfere with or create an undue burden on the Services.</li>
          <li>Harass or threaten our employees or agents.</li>
          <li>Attempt to bypass any access restrictions on the Services.</li>
          <li>Copy or adapt the Services&apos; software or source code.</li>
          <li>Reverse engineer or decompile any part of the Services.</li>
          <li>Use the Services to compete with us or for unauthorized commercial purposes.</li>
          <li>Use the Services to advertise or offer to sell goods and services.</li>
          <li>Sell or otherwise transfer your account or profile.</li>
          <li>Submit sexually explicit prompts.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">8. User Generated Contributions</h2>
        <p className="mb-3">
          The Services do not currently offer users the ability to submit or post public content. If we
          provide such opportunities in the future, any contributions must not infringe third-party rights,
          must be original, must not be false or misleading, and must comply with all applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contribution License</h2>
        <p className="mb-3">
          You and Prompt Forge agree that we may access, store, process, and use any information and personal
          data that you provide.
        </p>
        <p className="mb-3">
          By submitting suggestions or feedback regarding the Services, you agree that we can use and share
          such feedback for any purpose without compensation to you.
        </p>
        <p>
          We do not assert ownership over your contributions. You retain full ownership of all your
          contributions and any associated intellectual property rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Mobile Application License</h2>
        <p className="mb-3">
          If you access the Services via a mobile app, we grant you a revocable, non-exclusive,
          non-transferable, limited right to install and use the app on devices you own or control, strictly
          in accordance with these Legal Terms.
        </p>
        <p>
          You shall not decompile, reverse engineer, or modify the app; use it for revenue-generating
          purposes beyond its intended use; or make it available over a network for simultaneous multi-user
          access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Advertisers</h2>
        <p>
          We may allow advertisers to display advertisements in certain areas of the Services. We simply
          provide the space for such advertisements and have no other relationship with advertisers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Services Management</h2>
        <p>
          We reserve the right to monitor the Services for violations of these Legal Terms; take appropriate
          legal action against violators; restrict or disable access to contributions; remove content that is
          excessive or burdensome to our systems; and otherwise manage the Services to protect our rights and
          ensure proper functioning.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Privacy Policy</h2>
        <p>
          We care about data privacy and security. By using the Services, you agree to be bound by our{' '}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          , which is incorporated into these Legal Terms. The Services are hosted in the United States. If you
          access the Services from another region, you consent to the transfer and processing of your data in
          the United States.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Term and Termination</h2>
        <p className="mb-3">
          These Legal Terms remain in full force and effect while you use the Services. We reserve the right
          to deny access, terminate your account, or delete your content at any time and for any reason,
          without notice or liability.
        </p>
        <p>
          If your account is terminated, you are prohibited from creating a new account without our
          permission. We reserve the right to pursue appropriate legal action.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Modifications and Interruptions</h2>
        <p className="mb-3">
          We reserve the right to change, modify, or remove the contents of the Services at any time without
          notice. We are not liable for any modification, price change, suspension, or discontinuance.
        </p>
        <p>
          We cannot guarantee the Services will be available at all times and are not liable for any loss or
          inconvenience caused by downtime or service interruptions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">16. Governing Law</h2>
        <p>
          These Legal Terms are governed by the laws of the State of North Carolina, without regard to its
          conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">17. Dispute Resolution</h2>
        <h3 className="font-semibold mb-2">Binding Arbitration</h3>
        <p className="mb-3">
          If the parties are unable to resolve a dispute through informal negotiations, the dispute will be
          finally and exclusively resolved by binding arbitration under the Commercial Arbitration Rules of
          the American Arbitration Association (AAA). Arbitration will take place in Guilford, North Carolina.
          YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A
          JURY TRIAL.
        </p>
        <h3 className="font-semibold mb-2">Restrictions</h3>
        <p className="mb-3">
          All arbitration shall be limited to the individual dispute between the parties. No class action or
          representative proceeding is permitted.
        </p>
        <h3 className="font-semibold mb-2">Exceptions to Arbitration</h3>
        <p>
          The following disputes are not subject to arbitration: (a) disputes involving intellectual property
          rights; (b) claims related to theft, piracy, or invasion of privacy; and (c) claims for injunctive
          relief.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">18. Corrections</h2>
        <p>
          There may be information on the Services that contains typographical errors, inaccuracies, or
          omissions. We reserve the right to correct any errors and update information at any time without
          prior notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">19. Disclaimer</h2>
        <p className="uppercase text-sm">
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. TO THE FULLEST EXTENT PERMITTED BY
          LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE ARE NOT LIABLE FOR ERRORS, PERSONAL
          INJURY, UNAUTHORIZED ACCESS TO SERVERS, INTERRUPTIONS, BUGS, OR OMISSIONS IN CONTENT.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">20. Limitations of Liability</h2>
        <p className="uppercase text-sm">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT,
          CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE
          SERVICES. OUR LIABILITY WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID BY YOU TO US DURING THE SIX
          (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">21. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold us harmless from any loss, damage, liability, or claim
          arising from: (1) your use of the Services; (2) breach of these Legal Terms; (3) any breach of your
          representations and warranties; (4) violation of a third party&apos;s rights; or (5) any harmful act
          toward other users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">22. User Data</h2>
        <p>
          We maintain certain data you transmit for the purpose of managing the Services. You are solely
          responsible for all data you transmit. We have no liability for any loss or corruption of such data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">23. Electronic Communications, Transactions, and Signatures</h2>
        <p>
          Visiting the Services, sending emails, and completing online forms constitute electronic
          communications. You consent to receive electronic communications and agree that all agreements,
          notices, and disclosures provided electronically satisfy any legal writing requirement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">24. California Users and Residents</h2>
        <p>
          If any complaint with us is not satisfactorily resolved, you may contact the Complaint Assistance
          Unit of the Division of Consumer Services of the California Department of Consumer Affairs at 1625
          North Market Blvd., Suite N 112, Sacramento, California 95834, or by telephone at (800) 952-5210.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">25. Miscellaneous</h2>
        <p>
          These Legal Terms constitute the entire agreement between you and us. Our failure to enforce any
          right or provision is not a waiver. If any provision is determined to be unlawful or unenforceable,
          it will be severed from these Legal Terms without affecting the remaining provisions. There is no
          joint venture, partnership, employment, or agency relationship created between you and us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">26. Contact Us</h2>
        <p className="mb-2">To resolve a complaint or receive information about the Services, contact us at:</p>
        <address className="not-italic text-sm leading-7">
          <strong>Hilbert Entertainment, LLC</strong><br />
          204 Birch Creek Road<br />
          McLeansville, NC 27301<br />
          United States<br />
          <a href="mailto:thehilberts25@gmail.com" className="text-blue-600 underline">
            thehilberts25@gmail.com
          </a>
        </address>
      </section>

      <p className="text-xs text-gray-400 mt-12 border-t pt-4">
        These Terms and Conditions were generated with the assistance of Termly.
      </p>
    </main>
  );
}
