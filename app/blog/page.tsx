import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Box Plot Tutorials & Guides | Box Plot Maker Blog',
  description: 'Learn how to create, read, and interpret box plots with our comprehensive tutorials. Free guides on Excel box plots, outlier detection, and statistical analysis.',
  openGraph: {
    title: 'Box Plot Tutorials & Guides',
    description: 'Learn how to create, read, and interpret box plots with our comprehensive tutorials.',
    type: 'website',
    url: 'https://boxplotmaker.online/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 font-serif mb-6">
            Box Plot Tutorials & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master box plots with our comprehensive guides. Learn how to create, read, and interpret
            box and whisker plots for statistical analysis.
          </p>
        </header>

        {/* Blog posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-gray-100"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 font-serif line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                {post.date && (
                  <time className="text-sm text-gray-500 block mb-4">
                    {post.date}
                  </time>
                )}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA section */}
        <div className="max-w-4xl mx-auto mt-20 p-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your First Box Plot?
          </h2>
          <p className="text-xl mb-8 text-blue-50">
            Try our free online box plot maker. No signup required, works on any device.
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
          >
            Create Box Plot Now →
          </Link>
        </div>

        {/* Topics covered */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Learn the Basics
            </h3>
            <p className="text-gray-600">
              Understand quartiles, median, whiskers, and the five-number summary
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Detect Outliers
            </h3>
            <p className="text-gray-600">
              Master the 1.5×IQR rule for identifying unusual data points
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Practical Examples
            </h3>
            <p className="text-gray-600">
              Real-world applications in research, business, and education
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
