# Box Plot Maker

> Free online box plot generator - Create professional box and whisker plots instantly

![Box Plot Maker](https://boxplotmaker.online/og-image.png)

## Overview

Box Plot Maker is a free, privacy-first statistical visualization tool that helps students, researchers, and data analysts create professional box and whisker plots in seconds. All processing happens locally in your browser - no data is ever sent to our servers.

**Live Site:** [boxplotmaker.online](https://boxplotmaker.online)

## Features

- **Real-Time Visualization**: See your box plot update instantly as you enter data
- **Automatic Outlier Detection**: Uses the standard 1.5×IQR rule
- **Multiple Input Methods**:
  - Manual data entry
  - Copy-paste from Excel/Google Sheets
  - CSV file upload
- **Five-Number Summary**: Auto-calculates min, Q1, median, Q3, max, IQR
- **Export Options**: Download as PNG image or CSV with statistics
- **100% Privacy**: Local processing, no tracking, no cookies
- **Mobile Friendly**: Fully responsive design

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js
- **Fonts**: Inter (sans-serif) + Lora (serif)
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4 + Search Console

## Project Structure

```
box-plot-maker/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page with tool
│   ├── layout.tsx         # Root layout with metadata
│   ├── privacy/           # Privacy policy page
│   └── terms/             # Terms of service page
├── components/
│   ├── tool/              # Tool components
│   │   ├── DataInput.tsx
│   │   ├── ChartDisplay.tsx
│   │   └── StatisticsCards.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── StructuredData.tsx # JSON-LD schema
├── lib/
│   └── statistics.ts      # Box plot calculations
├── types/
│   └── index.ts          # TypeScript types
└── public/
    ├── llms.txt          # LLM documentation
    ├── robots.txt
    └── sitemap.xml
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## SEO Implementation

- **Title**: "Box Plot Maker - Free Online Box and Whisker Plot Generator"
- **Target Keywords**: box plot maker, box and whisker plot generator, free box plot generator
- **Structured Data**: SoftwareApplication, HowTo, and FAQPage schemas
- **Content**: 4000+ words educational content about box plots
- **Internal Linking**: Privacy policy, terms of service

## Statistics Algorithm

The tool uses the standard Tukey method for box plot calculations:

1. **Quartiles**: Linear interpolation between closest ranks
2. **IQR**: Q3 - Q1
3. **Whiskers**:
   - Lower: Q1 - 1.5×IQR (or minimum non-outlier)
   - Upper: Q3 + 1.5×IQR (or maximum non-outlier)
4. **Outliers**: Values beyond whisker boundaries

## Privacy & Security

- No user accounts or authentication
- No data collection or storage
- No cookies or tracking pixels
- Local-only processing in browser
- HTTPS encryption
- GDPR compliant (no personal data processed)

## License

All rights reserved. This project is proprietary software.

## Contact

For questions or issues, visit [boxplotmaker.online](https://boxplotmaker.online)

---

Built with ❤️ for students, researchers, and data enthusiasts
