import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// 双字体系统：衬线体标题 + 无衬线体正文
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

// SEO 元数据 - 按照文档 4.1 Title Tag & Meta Description 规范
export const metadata: Metadata = {
  metadataBase: new URL('https://boxplotmaker.online'),
  title: "Box Plot Maker - Free Online Box and Whisker Plot Generator",
  description: "Create professional box plots instantly. Free box plot maker with CSV upload, automatic outlier detection, and PNG export. No signup required.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Box Plot Maker - Free Online Box and Whisker Plot Generator',
    description: 'Create professional box plots instantly. Free tool with CSV upload, automatic outlier detection, and PNG export. No signup required.',
    url: 'https://boxplotmaker.online',
    siteName: 'Box Plot Maker',
    images: [
      {
        url: 'https://boxplotmaker.online/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Box Plot Maker - Free Online Statistical Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Box Plot Maker - Free Online Box and Whisker Plot Generator',
    description: 'Create professional box plots instantly. Free tool with CSV upload and outlier detection.',
    images: ['https://boxplotmaker.online/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html lang="en">
      <head>
        {isProduction && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-5KXEV5GRYE"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-5KXEV5GRYE');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
