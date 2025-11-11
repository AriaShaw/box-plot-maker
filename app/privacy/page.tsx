import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Box Plot Maker',
  description: 'Privacy policy for Box Plot Maker. Learn how we protect your data and respect your privacy.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
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
              Introduction
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              Welcome to Box Plot Maker ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your data remains secure. This Privacy Policy explains how we handle your information when you use our free online box plot maker tool at boxplotmaker.online.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              Data Collection and Processing
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
              <strong className="font-semibold text-neutral-900">We do NOT collect, store, or transmit your data to any servers.</strong> Box Plot Maker is designed with privacy in mind:
            </p>
            <ul className="list-disc pl-6 space-y-3 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              <li>All data processing happens locally in your web browser</li>
              <li>Your numerical data and CSV files are never uploaded to our servers</li>
              <li>We do not create user accounts or require registration</li>
              <li>We do not store any information you enter into the tool</li>
              <li>When you export your box plot as PNG or CSV, the files are generated locally on your device</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              Cookies and Tracking
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              We do not use cookies or any tracking technologies. We do not use analytics tools like Google Analytics. Your browsing activity on boxplotmaker.online is completely private and anonymous.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              Third-Party Services
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              Our website is hosted on a third-party hosting service. While we do not collect your data, your IP address and basic access logs may be recorded by our hosting provider for security and infrastructure purposes only. These logs are not used for tracking or marketing purposes.
            </p>
          </section>

          {/* GDPR Compliance */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              GDPR Compliance
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              Since we do not collect or process personal data, GDPR regulations do not apply to our tool. Your data remains on your device at all times. You have complete control over your information.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              Children's Privacy
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              Box Plot Maker is safe for users of all ages, including children. Since we do not collect any personal information, there are no privacy concerns for children using our tool.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              Data Security
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              All calculations and visualizations are performed locally in your browser using JavaScript. Your data never leaves your device unless you explicitly choose to export it. We use HTTPS encryption to secure the connection between your browser and our website.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-6">
              Contact Us
            </h2>
            <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
