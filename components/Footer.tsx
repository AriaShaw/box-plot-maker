import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-5">Box Plot Maker</h3>
            <p className="font-sans text-neutral-400 text-base leading-relaxed">
              Free online statistical tool for creating professional box and whisker plots.
              No signup required, works on all devices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#how-to-use"
                  className="font-sans text-neutral-400 hover:text-white transition-colors text-base"
                >
                  How to Use
                </a>
              </li>
              <li>
                <a
                  href="/#what-is-box-plot"
                  className="font-sans text-neutral-400 hover:text-white transition-colors text-base"
                >
                  What is a Box Plot
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="font-sans text-neutral-400 hover:text-white transition-colors text-base"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-5">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="font-sans text-neutral-400 hover:text-white transition-colors text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-sans text-neutral-400 hover:text-white transition-colors text-base"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-10 text-center">
          <p className="font-sans text-neutral-400 text-base leading-relaxed">
            © {new Date().getFullYear()} Box Plot Maker. Free online statistical tool for creating box and whisker plots.
          </p>
          <p className="font-sans text-neutral-500 mt-3 text-base">
            Made for students, teachers, researchers, and data analysts.
          </p>
        </div>
      </div>
    </footer>
  );
}
