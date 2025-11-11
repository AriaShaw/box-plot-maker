/**
 * Schema.org Structured Data Components
 * Provides JSON-LD structured data for SEO enhancement and rich snippets
 */

export default function StructuredData() {
  // SoftwareApplication Schema - Main Product
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Box Plot Maker",
    "description": "Free online box plot maker and box and whisker plot generator. Create professional statistical visualizations instantly with automatic outlier detection, CSV upload, and export features.",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "featureList": [
      "Free box plot generator",
      "Automatic outlier detection using 1.5×IQR rule",
      "CSV file upload support",
      "Export as PNG and CSV",
      "Five-number summary calculation",
      "Real-time chart generation",
      "Excel and Google Sheets compatible",
      "Mobile-friendly interface",
      "No signup required"
    ],
    "screenshot": "https://boxplotmaker.online/screenshot.png",
    "author": {
      "@type": "Organization",
      "name": "Box Plot Maker"
    }
  };

  // HowTo Schema - Tutorial Section
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Make a Box Plot",
    "description": "Learn how to create a box and whisker plot online in 3 easy steps using our free box plot maker tool.",
    "image": "https://boxplotmaker.online/how-to-make-box-plot.png",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Numerical data"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Box Plot Maker online tool"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Enter Your Data",
        "text": "Type or paste your numbers into the input box. You can use commas, spaces, or line breaks to separate values. Alternatively, upload a CSV file or paste data directly from Excel or Google Sheets.",
        "url": "https://boxplotmaker.online/#how-to-use"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "View Instant Results",
        "text": "Our box plot generator automatically calculates quartiles, detects outliers, and generates your box plot in real-time. The five-number summary displays below the chart with detailed statistics including Q1, median, Q3, and IQR.",
        "url": "https://boxplotmaker.online/#how-to-use"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Export and Share",
        "text": "Download your box plot as a high-quality PNG image for presentations or export your data and statistics as CSV. No signup or installation required.",
        "url": "https://boxplotmaker.online/#how-to-use"
      }
    ]
  };

  // FAQPage Schema - FAQ Section (most likely to get Featured Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I make a box plot from my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To make a box plot using our tool: (1) Enter your numbers in the input box separated by commas, spaces, or line breaks, or upload a CSV file. (2) The tool automatically calculates quartiles and detects outliers. (3) View your interactive box plot with the five-number summary. (4) Download as PNG or CSV. No installation or signup required."
        }
      },
      {
        "@type": "Question",
        "name": "How to make a box and whisker plot in Excel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Excel 2016+: (1) Select your data, (2) Insert → Charts → Box and Whisker, (3) Customize. However, our online box plot maker is easier: just paste Excel data directly, and get instant results with automatic outlier detection and better visualization options. You can also upload Excel files saved as CSV."
        }
      },
      {
        "@type": "Question",
        "name": "Is your box plot maker free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our free box plot maker is 100% free with no limits. Create unlimited box plots, upload any size CSV, and export in multiple formats (PNG, CSV) without signup or payment. Free forever."
        }
      },
      {
        "@type": "Question",
        "name": "Can I upload CSV files to make box plots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Drag and drop your CSV file or click 'Upload CSV File' to browse. Our tool automatically detects numeric columns and generates box plots instantly. Supports standard CSV formats from Excel, Google Sheets, and other applications."
        }
      },
      {
        "@type": "Question",
        "name": "How does the box plot generator detect outliers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our box plot maker with outliers detection uses the standard 1.5 × IQR rule. Values below Q1 - 1.5×IQR or above Q3 + 1.5×IQR are marked as outliers (shown in red). This is the same method used in statistical software and research."
        }
      },
      {
        "@type": "Question",
        "name": "What is the five-number summary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The five-number summary consists of: (1) Minimum, (2) First Quartile (Q1 - 25th percentile), (3) Median (Q2 - 50th percentile), (4) Third Quartile (Q3 - 75th percentile), and (5) Maximum. Our box plot calculator displays all these statistics automatically."
        }
      },
      {
        "@type": "Question",
        "name": "How many data points do I need for a box plot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum 4 data points are required to calculate quartiles, but we recommend at least 20 data points for a meaningful box plot. Our tool works with datasets from 4 to thousands of data points."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make a box plot online without software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our online box plot maker runs entirely in your web browser. No software installation, no downloads, no registration. Works on desktop, laptop, tablet, and mobile devices. All calculations are done locally in your browser for privacy."
        }
      }
    ]
  };

  return (
    <>
      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema)
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  );
}
