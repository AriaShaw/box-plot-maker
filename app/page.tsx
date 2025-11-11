'use client';

import { useState } from 'react';
import Link from 'next/link';
import DataInput from '@/components/tool/DataInput';
import ChartDisplay from '@/components/tool/ChartDisplay';
import StatisticsCards from '@/components/tool/StatisticsCards';
import StructuredData from '@/components/StructuredData';
import { calculateBoxPlot } from '@/lib/statistics';
import type { BoxPlotData } from '@/types';

export default function HomePage() {
  const [currentData, setCurrentData] = useState<number[]>([]);
  const [stats, setStats] = useState<BoxPlotData | null>(null);

  const handleDataChange = (data: number[]) => {
    setCurrentData(data);

    if (data.length >= 4) {
      try {
        const boxPlotStats = calculateBoxPlot(data);
        setStats(boxPlotStats);
      } catch (error) {
        console.error('Error calculating box plot:', error);
        setStats(null);
      }
    } else {
      setStats(null);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Schema.org Structured Data for SEO */}
      <StructuredData />

      {/* Section 1 - Hero + Tool (Above Fold) */}
      <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 bg-gradient-to-br from-primary-50 to-white">
        {/* Left: Hero Content */}
        <div className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:px-16">
          <div className="max-w-2xl mx-auto lg:mx-0">
            {/* Hero Title - 使用 Lora 衬线体 */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-neutral-900 mb-6">
              Box Plot Maker
            </h1>

            {/* Hero Subtitle - 加大字号和行高 */}
            <p className="font-sans text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-10">
              Create professional <strong className="text-primary-600">box and whisker plots</strong> with our free online <strong className="text-primary-600">box plot generator</strong> - Instant results, no signup
            </p>

            {/* Feature List - 更大字号，更多间距 */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-success-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Checkmark icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-sans text-base md:text-lg text-neutral-700 font-medium leading-relaxed">Free & No Signup Required</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-success-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Checkmark icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-sans text-base md:text-lg text-neutral-700 font-medium leading-relaxed">CSV Upload & Excel Compatible</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-success-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Checkmark icon">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-sans text-base md:text-lg text-neutral-700 font-medium leading-relaxed">Automatic Outlier Detection</span>
              </div>
            </div>

            {/* CTA Buttons - 更新颜色 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('sample-student-test-scores')?.click()}
                className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg min-h-[48px] text-base md:text-lg"
              >
                Try Sample Data
              </button>
              <a
                href="#how-to-use"
                className="bg-white hover:bg-neutral-50 text-primary-600 border-2 border-primary-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center min-h-[48px] flex items-center justify-center text-base md:text-lg"
              >
                Learn How It Works
              </a>
            </div>
          </div>
        </div>

        {/* Right: Tool Interface */}
        <div className="flex flex-col px-6 py-12 lg:py-20 lg:px-16 bg-white lg:bg-transparent">
          <div className="max-w-2xl mx-auto lg:mx-0 w-full">
            <div className="space-y-8">
              {/* Data Input Card */}
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
                <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-6">
                  Enter Your Data
                </h2>
                <DataInput onDataChange={handleDataChange} />
              </div>

              {/* Chart Display Card */}
              <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
                <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-6">
                  Your Box Plot
                </h2>
                <ChartDisplay data={currentData} stats={stats} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      {stats && (
        <section className="py-12 px-6 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8">
              <StatisticsCards stats={stats} />
            </div>
          </div>
        </section>
      )}

      {/* How to Use - 包含关键词 "how to make a box plot" */}
      <section className="py-20 px-6 bg-white" id="how-to-use">
        <div className="max-w-4xl mx-auto">
          {/* Section Title - 使用 Lora 衬线体 */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            How to Make a Box Plot in 3 Easy Steps
          </h2>
          {/* Section Description - 加大字号和行高 */}
          <p className="font-sans text-lg md:text-xl text-neutral-700 leading-relaxed mb-12">
            Our <strong className="font-semibold text-neutral-900">online box plot maker</strong> makes it simple to create professional box and whisker plots instantly.
          </p>

          {/* Steps - 更大间距和内边距 */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl card-shadow border border-neutral-200 p-8 border-l-4 border-l-primary-600">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                1. Enter Your Data
              </h3>
              <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                Type or paste your numbers into the input box. You can use commas, spaces, or line breaks to separate values. Alternatively, <strong className="font-semibold text-neutral-900">upload a CSV file</strong> or paste data directly from Excel or Google Sheets.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl card-shadow border border-neutral-200 p-8 border-l-4 border-l-primary-600">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                2. View Instant Results
              </h3>
              <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                Our <strong className="font-semibold text-neutral-900">box plot generator</strong> automatically calculates quartiles, detects outliers, and generates your box plot in real-time. The <strong className="font-semibold text-neutral-900">five-number summary</strong> displays below the chart with detailed statistics including Q1, median, Q3, and IQR.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl card-shadow border border-neutral-200 p-8 border-l-4 border-l-primary-600">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                3. Export and Share
              </h3>
              <p className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                Download your box plot as a high-quality PNG image for presentations or export your data and statistics as CSV. No signup or installation required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Box Plot - 教育内容 + SEO */}
      <section className="py-20 px-6 bg-neutral-100" id="what-is-box-plot">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            What is a Box and Whisker Plot?
          </h2>

          {/* Content with breathing space */}
          <div className="breathing-space text-neutral-700">
            {/* Introduction Paragraphs */}
            <p className="font-sans text-base md:text-lg leading-relaxed">
              A <strong className="font-semibold text-neutral-900">box plot</strong> (also called a <strong className="font-semibold text-neutral-900">box and whisker plot</strong>) is a standardized way of displaying the distribution of data based on a <strong className="font-semibold text-neutral-900">five-number summary</strong>: minimum, first quartile (Q1), median, third quartile (Q3), and maximum.
            </p>

            <p className="font-sans text-base md:text-lg leading-relaxed">
              Our free <strong className="font-semibold text-neutral-900">online box plot maker</strong> automatically calculates these statistics and creates a professional visualization instantly. Whether you're a student analyzing test scores, a researcher examining data distributions, or a data analyst comparing datasets, our tool makes it easy to <strong className="font-semibold text-neutral-900">create box plots</strong> without any software installation.
            </p>

            {/* Five-Number Summary Card */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Understanding the Five-Number Summary
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">1</span>
                  <div className="font-sans text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-neutral-900">Minimum:</strong> The smallest value in your dataset (excluding outliers)
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">2</span>
                  <div className="font-sans text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-neutral-900">First Quartile (Q1):</strong> The value below which 25% of your data falls - also called the 25th percentile
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">3</span>
                  <div className="font-sans text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-neutral-900">Median (Q2):</strong> The middle value that divides your data into two equal halves
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">4</span>
                  <div className="font-sans text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-neutral-900">Third Quartile (Q3):</strong> The value below which 75% of your data falls - also called the 75th percentile
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">5</span>
                  <div className="font-sans text-base md:text-lg leading-relaxed">
                    <strong className="font-semibold text-neutral-900">Maximum:</strong> The largest value in your dataset (excluding outliers)
                  </div>
                </li>
              </ul>
            </div>

            {/* Components Card */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Box Plot Components Explained
              </h3>
              <ul className="space-y-5 font-sans text-base md:text-lg leading-relaxed">
                <li>
                  <strong className="font-semibold text-neutral-900">The Box (IQR):</strong> Represents the middle 50% of your data (from Q1 to Q3). The width of the box shows the interquartile range.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-900">Median Line:</strong> The line inside the box showing the median value. If it's not centered, your data is skewed.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-900">Whiskers:</strong> Extend from the box to show the range of the data, typically extending to 1.5 × IQR from the quartiles.
                </li>
                <li>
                  <strong className="font-semibold text-neutral-900">Outliers:</strong> Individual points beyond the whiskers, representing unusual values that deserve investigation. Our <strong className="font-semibold text-neutral-900">box plot maker with outliers</strong> detection automatically identifies these for you.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Online Box Plot Maker - SEO Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Why Choose Our Online Box Plot Maker
          </h2>

          <div className="breathing-space text-neutral-700">
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Unlike desktop software or spreadsheet tools, our <strong className="font-semibold text-neutral-900">online box plot generator</strong> offers instant visualization without any installation, downloads, or configuration. Whether you're working on a research paper, preparing a presentation, or analyzing data for a class project, our free tool provides professional-grade results in seconds.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Feature 1: Automatic Outlier Detection */}
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 card-shadow">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-bold">1</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                      Automatic Outlier Detection
                    </h3>
                    <p className="font-sans text-base md:text-lg leading-relaxed">
                      Our <strong className="font-semibold text-neutral-900">box plot maker with outliers</strong> detection uses the industry-standard 1.5×IQR rule to automatically identify and highlight unusual values in red. This saves you time and ensures statistical accuracy without manual calculations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2: CSV & Excel Support */}
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 card-shadow">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-bold">2</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                      CSV & Excel Compatible
                    </h3>
                    <p className="font-sans text-base md:text-lg leading-relaxed">
                      Import data effortlessly by dragging and dropping CSV files, pasting directly from Excel or Google Sheets, or typing your numbers manually. Our <strong className="font-semibold text-neutral-900">box plot generator</strong> automatically detects numeric columns and handles data formatting for you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3: Multiple Export Formats */}
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 card-shadow">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-bold">3</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                      High-Quality Export Options
                    </h3>
                    <p className="font-sans text-base md:text-lg leading-relaxed">
                      Download your box plots as publication-ready PNG images for presentations and reports, or export the complete statistical summary as CSV. All exports maintain professional quality suitable for academic papers, business reports, and research publications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4: No Installation Required */}
              <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200 card-shadow">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-lg font-bold">4</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 mb-4">
                      Browser-Based Convenience
                    </h3>
                    <p className="font-sans text-base md:text-lg leading-relaxed">
                      Our <strong className="font-semibold text-neutral-900">free box plot maker</strong> runs entirely in your web browser. No software downloads, no installations, no updates, and no account registration required. Works seamlessly on desktop, laptop, tablet, and mobile devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Excel Comparison Table */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Box Plot Maker vs Excel: Feature Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full font-sans text-base md:text-lg">
                  <thead>
                    <tr className="border-b-2 border-neutral-300">
                      <th className="text-left py-4 px-4 font-semibold text-neutral-900">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-neutral-900">Box Plot Maker</th>
                      <th className="text-center py-4 px-4 font-semibold text-neutral-900">Excel</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700">
                    <tr className="border-b border-neutral-200">
                      <td className="py-4 px-4">Installation Required</td>
                      <td className="text-center py-4 px-4"><span className="text-green-600 font-semibold">✓ No</span></td>
                      <td className="text-center py-4 px-4"><span className="text-red-600 font-semibold">✗ Yes</span></td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-4 px-4">Automatic Outlier Detection</td>
                      <td className="text-center py-4 px-4"><span className="text-green-600 font-semibold">✓ Yes</span></td>
                      <td className="text-center py-4 px-4"><span className="text-red-600 font-semibold">✗ Manual</span></td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-4 px-4">Five-Number Summary Display</td>
                      <td className="text-center py-4 px-4"><span className="text-green-600 font-semibold">✓ Automatic</span></td>
                      <td className="text-center py-4 px-4"><span className="text-red-600 font-semibold">✗ Manual Calculation</span></td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-4 px-4">Export as PNG</td>
                      <td className="text-center py-4 px-4"><span className="text-green-600 font-semibold">✓ One Click</span></td>
                      <td className="text-center py-4 px-4"><span className="text-yellow-600 font-semibold">~ Multiple Steps</span></td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-4 px-4">Learning Curve</td>
                      <td className="text-center py-4 px-4"><span className="text-green-600 font-semibold">✓ None</span></td>
                      <td className="text-center py-4 px-4"><span className="text-red-600 font-semibold">✗ Moderate</span></td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="py-4 px-4">Cost</td>
                      <td className="text-center py-4 px-4"><span className="text-green-600 font-semibold">✓ Free</span></td>
                      <td className="text-center py-4 px-4"><span className="text-red-600 font-semibold">✗ Paid License</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Mobile Support</td>
                      <td className="text-center py-4 px-4"><span className="text-green-600 font-semibold">✓ Full Support</span></td>
                      <td className="text-center py-4 px-4"><span className="text-yellow-600 font-semibold">~ Limited</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-base md:text-lg leading-relaxed mt-6 text-neutral-600 italic">
                While Excel can create box plots (version 2016+), our dedicated <strong className="font-semibold text-neutral-900">online box plot generator</strong> offers a more streamlined, user-friendly experience specifically designed for statistical visualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Use a Box Plot Generator - New SEO Section */}
      <section className="py-20 px-6 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            When to Use a Box Plot Generator
          </h2>

          <div className="breathing-space text-neutral-700">
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Box plots are particularly useful when you need to visualize the distribution and spread of numerical data, especially when comparing multiple datasets. Our <strong className="font-semibold text-neutral-900">box plot maker</strong> is ideal for these situations:
            </p>

            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Best Use Cases for Box Plots
              </h3>
              <ul className="space-y-5 font-sans text-base md:text-lg leading-relaxed">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">1</span>
                  <div>
                    <strong className="font-semibold text-neutral-900">Comparing Multiple Groups:</strong> When you need to compare test scores across different classrooms, sales performance across regions, or patient outcomes across treatment groups, box plots show the differences at a glance.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">2</span>
                  <div>
                    <strong className="font-semibold text-neutral-900">Identifying Outliers:</strong> Box plots automatically highlight unusual values that fall outside the typical range. This is crucial in quality control, fraud detection, and scientific research where outliers may indicate errors or interesting phenomena.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">3</span>
                  <div>
                    <strong className="font-semibold text-neutral-900">Checking Data Symmetry:</strong> The position of the median line within the box tells you if your data is symmetrical or skewed. This information is essential before choosing statistical tests.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-base font-bold mt-1">4</span>
                  <div>
                    <strong className="font-semibold text-neutral-900">Large Datasets:</strong> When working with hundreds or thousands of data points, box plots summarize the distribution without overwhelming your audience with raw numbers.
                  </div>
                </li>
              </ul>
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed">
              Use histograms or scatter plots instead of box plots when you need to see the exact frequency distribution or relationship between two variables. Our <strong className="font-semibold text-neutral-900">free box plot maker</strong> complements these visualizations by providing a clear summary of your data's central tendency and variability.
            </p>
          </div>
        </div>
      </section>

      {/* How to Read a Box Plot - Educational Section */}
      <section className="py-20 px-6 bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            How to Read a Box Plot: A Complete Guide
          </h2>

          <div className="breathing-space text-neutral-700">
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Reading a box plot correctly allows you to quickly understand the distribution of your data. Here's a step-by-step guide to interpreting every element of a <strong className="font-semibold text-neutral-900">box and whisker plot</strong>:
            </p>

            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Step-by-Step Interpretation
              </h3>
              <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed">
                <div>
                  <h4 className="font-semibold text-neutral-900 text-xl mb-3">1. Check the Box (Interquartile Range)</h4>
                  <p>The box represents the middle 50% of your data. A wider box means more variability in the central portion of your dataset. A narrow box indicates that most values cluster tightly around the median.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 text-xl mb-3">2. Locate the Median Line</h4>
                  <p>The line inside the box shows the median (50th percentile). If this line is centered in the box, your data is symmetric. If it's closer to Q1 or Q3, your data is skewed. Our <strong className="font-semibold text-neutral-900">box plot generator</strong> clearly marks this line for easy interpretation.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 text-xl mb-3">3. Examine the Whiskers</h4>
                  <p>The whiskers extend to show the range of typical values. Short whiskers indicate that most data points are close to the quartiles, while long whiskers suggest more spread in the data.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 text-xl mb-3">4. Identify Outliers</h4>
                  <p>Points beyond the whiskers are outliers - values that are unusually high or low compared to the rest of your data. These deserve special attention as they may represent measurement errors, rare events, or interesting anomalies worth investigating.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 text-xl mb-3">5. Compare Multiple Box Plots</h4>
                  <p>When viewing multiple box plots side by side, compare the median positions (central tendency), box heights (variability), and outlier patterns across groups. This reveals differences in distribution that might not be obvious from summary statistics alone.</p>
                </div>
              </div>
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed">
              Practice makes perfect! Use our <strong className="font-semibold text-neutral-900">online box plot maker</strong> with different datasets to develop your interpretation skills. Try the sample data to see how changing values affects the box plot's appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Real-World Examples Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            Real-World Box Plot Examples
          </h2>

          <div className="breathing-space text-neutral-700">
            <p className="font-sans text-base md:text-lg leading-relaxed">
              Box plots are widely used across industries and research fields. Here are practical examples showing how professionals use our <strong className="font-semibold text-neutral-900">box plot maker</strong> to analyze real data:
            </p>

            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Education: Comparing Test Scores
              </h3>
              <p className="font-sans text-base md:text-lg leading-relaxed mb-4">
                A teacher analyzing exam scores across three classes (A, B, and C) uses box plots to compare performance. The visualization reveals that Class A has a higher median score (75) than Classes B and C (68 and 70), but also shows greater variability with more outliers. This insight helps the teacher identify both high achievers and students who need extra support.
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed">
                <strong className="font-semibold text-neutral-900">Key Finding:</strong> The box plot immediately showed that while Class A's average was higher, Class B had more consistent performance with fewer struggling students.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Healthcare: Patient Recovery Times
              </h3>
              <p className="font-sans text-base md:text-lg leading-relaxed mb-4">
                A hospital compares recovery times for patients receiving three different treatment protocols. Using our <strong className="font-semibold text-neutral-900">free box plot generator</strong>, researchers visualize that Treatment A has a median recovery time of 7 days with a narrow IQR (5-9 days), while Treatment B shows 10 days with high variability (6-14 days). The box plots also reveal several outliers in Treatment C, prompting investigation into patient-specific factors.
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed">
                <strong className="font-semibold text-neutral-900">Key Finding:</strong> Treatment A not only had faster median recovery but also more predictable outcomes, making it the preferred option for most patients.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Business: Sales Performance Analysis
              </h3>
              <p className="font-sans text-base md:text-lg leading-relaxed mb-4">
                A sales manager analyzes monthly revenue across four regional teams. The box plot reveals that the West region has the highest median sales ($125K) but also the most outliers, suggesting inconsistent performance. The East region shows lower median sales ($95K) but tight clustering, indicating reliable, steady performance. This visualization guides strategic decisions about team training and resource allocation.
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed">
                <strong className="font-semibold text-neutral-900">Key Finding:</strong> The West region's outliers represented both exceptional wins and significant losses, prompting management to investigate what factors drove these extremes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200 card-shadow">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
                Environmental Science: Temperature Measurements
              </h3>
              <p className="font-sans text-base md:text-lg leading-relaxed mb-4">
                Climate researchers use <strong className="font-semibold text-neutral-900">box and whisker plots</strong> to compare daily temperature readings across different seasons. The box plots show that summer temperatures have a higher median (28°C) with relatively low variability (IQR of 4°C), while spring shows greater temperature fluctuations (IQR of 8°C) and several cold outliers below 10°C representing late frosts.
              </p>
              <p className="font-sans text-base md:text-lg leading-relaxed">
                <strong className="font-semibold text-neutral-900">Key Finding:</strong> The visualization confirmed that spring is the most unpredictable season, with temperature outliers occurring far more frequently than in other seasons.
              </p>
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed">
              These examples demonstrate how our <strong className="font-semibold text-neutral-900">online box plot maker</strong> helps professionals across fields make data-driven decisions. Whether you're analyzing student performance, patient outcomes, sales data, or scientific measurements, box plots provide clear visual insights that raw numbers alone cannot reveal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO优化，包含长尾关键词 */}
      <section className="py-20 px-6 bg-neutral-100" id="faq">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Title */}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
            Box Plot Maker - Frequently Asked Questions
          </h2>

          {/* FAQ Items - 更大间距 */}
          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                How do I make a box plot from my data?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p className="mb-4">To <strong className="font-semibold text-neutral-900">make a box plot</strong> using our tool:</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Enter your numbers in the input box separated by commas, spaces, or line breaks, or upload a CSV file</li>
                  <li>The tool automatically calculates quartiles and detects outliers</li>
                  <li>View your interactive box plot with the five-number summary</li>
                  <li>Download as PNG or CSV</li>
                </ol>
                <p className="mt-4">No installation or signup required.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                How to make a box and whisker plot in Excel?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p className="mb-4">In Excel 2016+:</p>
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li>Select your data</li>
                  <li>Insert → Charts → Box and Whisker</li>
                  <li>Customize</li>
                </ol>
                <p>However, our <strong className="font-semibold text-neutral-900">online box plot maker</strong> is easier: just paste Excel data directly, and get instant results with automatic outlier detection and better visualization options. You can also upload Excel files saved as CSV.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                Is your box plot maker free?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p>Yes, our <strong className="font-semibold text-neutral-900">free box plot maker</strong> is 100% free with no limits. Create unlimited box plots, upload any size CSV, and export in multiple formats (PNG, CSV) without signup or payment. Free forever. Read our <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">Privacy Policy</Link> to learn how we protect your data and our <Link href="/terms" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">Terms of Service</Link> for usage guidelines.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                Can I upload CSV files to make box plots?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p>Yes! Drag and drop your CSV file or click "Upload CSV File" to browse. Our tool automatically detects numeric columns and generates box plots instantly. Supports standard CSV formats from Excel, Google Sheets, and other applications.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                How does the box plot generator detect outliers?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p>Our <strong className="font-semibold text-neutral-900">box plot maker with outliers</strong> detection uses the standard 1.5 × IQR rule. Values below Q1 - 1.5×IQR or above Q3 + 1.5×IQR are marked as outliers (shown in red). This is the same method used in statistical software and research.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                What is the five-number summary?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p className="mb-4">The <strong className="font-semibold text-neutral-900">five-number summary</strong> consists of:</p>
                <ol className="list-decimal pl-6 space-y-3 mb-4">
                  <li>Minimum</li>
                  <li>First Quartile (Q1 - 25th percentile)</li>
                  <li>Median (Q2 - 50th percentile)</li>
                  <li>Third Quartile (Q3 - 75th percentile)</li>
                  <li>Maximum</li>
                </ol>
                <p>Our box plot calculator displays all these statistics automatically.</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                How many data points do I need for a box plot?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p>Minimum 4 data points are required to calculate quartiles, but we recommend at least 20 data points for a meaningful box plot. Our tool works with datasets from 4 to thousands of data points.</p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="bg-neutral-50 rounded-xl border border-neutral-200 p-8 card-shadow">
              <summary className="font-serif text-xl md:text-2xl font-semibold text-neutral-900 cursor-pointer">
                Can I make a box plot online without software?
              </summary>
              <div className="mt-6 font-sans text-base md:text-lg text-neutral-700 leading-relaxed">
                <p>Yes! Our <strong className="font-semibold text-neutral-900">online box plot maker</strong> runs entirely in your web browser. No software installation, no downloads, no registration. Works on desktop, laptop, tablet, and mobile devices. All calculations are done locally in your browser for privacy. Learn more about how we protect your data in our <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors">Privacy Policy</Link>.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
