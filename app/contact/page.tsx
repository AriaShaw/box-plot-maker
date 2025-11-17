import { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Box Plot Maker',
  description: 'Get in touch with the Box Plot Maker team. Report issues, suggest features, or ask questions about our free online box plot generator.',
  openGraph: {
    title: 'Contact Us | Box Plot Maker',
    description: 'Get in touch with the Box Plot Maker team.',
    type: 'website',
    url: 'https://boxplotmaker.online/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 font-serif mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, or feedback? We'd love to hear from you.
          </p>
        </header>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white p-12 rounded-xl shadow-md border-2 border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <Mail className="text-blue-600" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Questions, bug reports, or feature suggestions?<br />
              We'd love to hear from you.
            </p>
            <a
              href="mailto:contact@boxplotmaker.online"
              className="inline-block text-2xl text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              contact@boxplotmaker.online
            </a>
          </div>
        </div>

        {/* FAQ Reference */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
            Check Our FAQ First
          </h2>
          <p className="text-gray-700 mb-6">
            Many common questions are answered in our FAQ section. You might find your answer there instantly!
          </p>
          <Link
            href="/#faq"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View FAQ →
          </Link>
        </div>

        {/* Response Time */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
            Response Time
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We typically respond to all inquiries within 24-48 hours. For urgent issues affecting the tool's functionality, we prioritize responses within 12 hours.
          </p>
        </div>

        {/* Additional Resources */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center font-serif">
            Helpful Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/how-to-read-box-plot"
              className="p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How to Read a Box Plot
              </h3>
              <p className="text-gray-600 text-sm">
                Complete guide to understanding box plot components
              </p>
            </Link>
            <Link
              href="/blog/how-to-make-box-plot-excel"
              className="p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Box Plot in Excel
              </h3>
              <p className="text-gray-600 text-sm">
                Step-by-step tutorial for Excel users
              </p>
            </Link>
            <Link
              href="/blog/box-plot-outliers-explained"
              className="p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Outlier Detection
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding the 1.5×IQR rule for outliers
              </p>
            </Link>
            <Link
              href="/"
              className="p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Create Box Plot
              </h3>
              <p className="text-gray-600 text-sm">
                Try our free online box plot maker
              </p>
            </Link>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            <strong>Privacy Notice:</strong> We respect your privacy. Your email address will only be used to respond to your inquiry and will never be shared with third parties. Read our{' '}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </Link>{' '}
            for more details.
          </p>
        </div>
      </div>
    </div>
  );
}
