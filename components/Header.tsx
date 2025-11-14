'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - 使用衬线体 */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/favicon-32x32.png"
              alt="Box Plot Maker Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-serif text-2xl md:text-3xl font-bold text-neutral-900">
              Box Plot Maker
            </span>
          </Link>

          {/* Desktop Navigation - 更大字号 */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="/#how-to-use"
              className="font-sans text-base text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              How to Use
            </a>
            <a
              href="/#what-is-box-plot"
              className="font-sans text-base text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              What is a Box Plot
            </a>
            <Link
              href="/blog"
              className="font-sans text-base text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <a
              href="/#faq"
              className="font-sans text-base text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors min-h-[48px] min-w-[48px]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-200">
            <div className="flex flex-col gap-5">
              <a
                href="/#how-to-use"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-lg text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors"
              >
                How to Use
              </a>
              <a
                href="/#what-is-box-plot"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-lg text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors"
              >
                What is a Box Plot
              </a>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-lg text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors"
              >
                Blog
              </Link>
              <a
                href="/#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-lg text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
