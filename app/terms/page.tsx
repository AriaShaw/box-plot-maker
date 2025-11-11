import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - Box Plot Maker',
  description: 'Terms of service for Box Plot Maker. Read the terms and conditions for using our free online statistical tool.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="font-sans text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Terms of Service
          </h1>
          <p className="font-sans text-base md:text-lg text-neutral-600 leading-relaxed">
            Last updated: January 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-10 space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              1. Acceptance of Terms
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              By accessing and using Box Plot Maker at boxplotmaker.online ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
            </p>
          </section>

          {/* Use of Service */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              2. Use of Service
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
              Box Plot Maker is a free online tool for creating statistical visualizations. You may use this Service for:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-sans text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
              <li>Personal, educational, or commercial purposes</li>
              <li>Creating box and whisker plots from your numerical data</li>
              <li>Exporting visualizations as PNG images or CSV files</li>
              <li>Research, data analysis, and statistical education</li>
            </ul>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              You agree to use the Service only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          {/* Free Service */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              3. Free Service
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              Box Plot Maker is provided free of charge. We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We do not guarantee that the Service will be available at all times.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              4. Intellectual Property
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
              The Service and its original content (excluding user-generated data) are owned by Box Plot Maker and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              <strong className="font-semibold text-neutral-900">Your Data:</strong> You retain all rights to the data you input into the tool and any visualizations you create. We do not claim any ownership over your data or exported files.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              5. User Responsibilities
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to hack, disrupt, or damage the Service</li>
              <li>Use automated tools to scrape or download content from the Service</li>
              <li>Reverse engineer or attempt to extract the source code</li>
              <li>Misrepresent the Service or falsely claim it as your own</li>
              <li>Use the Service in a way that could harm or overload our infrastructure</li>
            </ul>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              6. Disclaimer of Warranties
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-sans text-base md:text-lg text-neutral-700 leading-relaxed mt-6">
              <li>The Service will be uninterrupted or error-free</li>
              <li>The results obtained from using the Service will be accurate or reliable</li>
              <li>Any errors in the Service will be corrected</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              7. Limitation of Liability
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOX PLOT MAKER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-sans text-base md:text-lg text-neutral-700 leading-relaxed mt-6">
              <li>Your use or inability to use the Service</li>
              <li>Any errors or inaccuracies in the Service</li>
              <li>Any data loss or corruption</li>
              <li>Any unauthorized access to or use of our servers</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              8. Indemnification
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              You agree to indemnify and hold harmless Box Plot Maker and its operators from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          {/* Accuracy of Results */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              9. Accuracy of Results
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              While we strive to provide accurate statistical calculations, you are responsible for verifying the results. Box Plot Maker should not be used as the sole basis for critical decisions. Always verify important results with professional statistical software or consultation with a qualified statistician.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              10. Changes to Terms
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              11. Governing Law
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable international laws, without regard to conflict of law principles.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              12. Contact Information
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
