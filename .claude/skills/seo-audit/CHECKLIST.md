# SEO Audit Checklist

Complete checklist for auditing tool landing pages. Each item is Pass/Fail.

## Phase 1: On-Page SEO (10 items, Critical)

### 1. Title Tag
- [ ] Length: 50-60 characters
- [ ] Primary keyword in first 40 characters
- [ ] Includes modifier (Free, Tool, Online, 2024)
- [ ] Format: "[Keyword] - [Modifier] | [Brand]"

### 2. Meta Description
- [ ] Length: 150-160 characters
- [ ] Contains primary keyword
- [ ] Clear value proposition
- [ ] Call-to-action present
- [ ] No duplicate across pages

### 3. H1 Tag
- [ ] Exactly ONE H1 per page
- [ ] Exact or close match to primary keyword
- [ ] Visible and prominent
- [ ] Not hidden by CSS (display:none, etc.)

### 4. H2-H6 Structure
- [ ] Minimum 5 H2 sections
- [ ] Proper hierarchy (no skipping levels)
- [ ] Secondary keywords in 2-3 H2 tags
- [ ] At least 2 question-based headings
- [ ] Each H2 has 300+ words below it

### 5. Content Length & Quality
- [ ] Minimum 2000 words total
- [ ] Addresses user search intent directly
- [ ] More comprehensive than top 3 competitors
- [ ] No AI fluff (every sentence adds value)
- [ ] Proper grammar and spelling

### 6. Keyword Optimization
- [ ] Primary keyword in first 100 words
- [ ] Keyword density 2-3% (not more)
- [ ] 5-10 LSI keywords used naturally
- [ ] No keyword stuffing (reads naturally)
- [ ] Keywords in: H1, title, meta, URL, first paragraph

### 7. Internal Linking
- [ ] Minimum 2-3 internal links present
- [ ] Anchor text is descriptive (not "click here")
- [ ] Links open in same tab
- [ ] All links functional (no 404s)

### 8. Image Optimization
- [ ] All images have descriptive alt text
- [ ] Alt text includes keywords naturally
- [ ] File names descriptive (not IMG_xxxx.jpg)
- [ ] Images compressed (<200KB each)
- [ ] No broken image links

### 9. Schema Markup
- [ ] SoftwareApplication schema present
- [ ] Includes: name, description, offers, applicationCategory
- [ ] Validated with Google Rich Results Test
- [ ] No errors in structured data

### 10. FAQ Section
- [ ] Minimum 4-6 questions
- [ ] Answers common user queries
- [ ] Targets long-tail keywords
- [ ] FAQPage schema implemented
- [ ] Schema validated

---

## Phase 2: Technical SEO (8 items, High Priority)

### 11. Mobile Responsiveness
- [ ] Works on 320px-428px width (phones)
- [ ] Tool fully functional on mobile
- [ ] Text readable without zooming
- [ ] Touch targets 44x44px minimum
- [ ] No horizontal scrolling
- [ ] Passes Google Mobile-Friendly Test

### 12. Page Speed
- [ ] Largest Contentful Paint (LCP) <2.5s
- [ ] First Contentful Paint (FCP) <1.8s
- [ ] Cumulative Layout Shift (CLS) <0.1
- [ ] PageSpeed Insights score >90 (mobile)
- [ ] No render-blocking resources

### 13. HTTPS & Security
- [ ] Valid SSL certificate
- [ ] All resources load over HTTPS
- [ ] No mixed content warnings
- [ ] Padlock shows in browser

### 14. Crawlability & Indexability
- [ ] robots.txt allows crawling
- [ ] No "noindex" tags on public pages
- [ ] Content not JavaScript-only (SSR/SSG)
- [ ] No crawl errors in GSC

### 15. XML Sitemap
- [ ] Sitemap.xml exists and valid
- [ ] All important pages included
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools

### 16. Canonical Tags
- [ ] Every page has canonical tag
- [ ] Uses absolute URLs (not relative)
- [ ] Points to correct version
- [ ] No conflicting canonical tags

### 17. Open Graph & Social
- [ ] og:title present
- [ ] og:description present
- [ ] og:image present (1200x630px)
- [ ] og:type and og:url present
- [ ] Twitter Card tags present
- [ ] Tested with Facebook Debugger

### 18. Core Web Vitals
- [ ] LCP passes (<2.5s)
- [ ] FID/INP passes (<200ms)
- [ ] CLS passes (<0.1)
- [ ] No layout shifts on load
- [ ] Passes Core Web Vitals assessment

---

## Phase 3: Post-Launch Setup (4 items)

### 19. Google Search Console
- [ ] Property created and verified
- [ ] Sitemap submitted
- [ ] Homepage submitted for indexing
- [ ] No coverage errors

### 20. Bing Webmaster Tools
- [ ] Site added and verified
- [ ] Sitemap submitted

### 21. Google Analytics 4
- [ ] Property created
- [ ] Tracking code installed
- [ ] Events firing correctly
- [ ] Real-time view shows traffic

### 22. Branding Assets
- [ ] favicon.ico present (32x32px)
- [ ] Shows correctly in browser tab
- [ ] apple-touch-icon.png present (180x180px)

---

## Phase 4: Content Optimization (4 items)

### 23. E-E-A-T Signals
- [ ] Content demonstrates expertise
- [ ] Original insights or examples
- [ ] Facts cited with sources
- [ ] Professional, trustworthy presentation

### 24. User Intent Matching
- [ ] Primary keyword intent identified
- [ ] Content directly addresses that intent
- [ ] Tool prominently featured (transactional)
- [ ] Educational content thorough (informational)

### 25. URL Structure
- [ ] Clean, readable URL
- [ ] Contains primary keyword (if applicable)
- [ ] No unnecessary parameters
- [ ] Uses hyphens, not underscores
- [ ] All lowercase

### 26. Competitor Comparison
- [ ] Analyzed top 3 competitors
- [ ] Word count 20% more than average
- [ ] Covers topics they miss
- [ ] UI/UX is superior
- [ ] Loading speed faster

---

## Scoring System

**Total Items:** 40

**Weight by Phase:**
- Phase 1 (On-Page): 2x weight (critical)
- Phase 2 (Technical): 1.5x weight (important)
- Phase 3 (Post-Launch): 1x weight
- Phase 4 (Content): 1x weight

**Score Calculation:**
1. Count passed items in each phase
2. Apply weights
3. Score = (Weighted passed / Weighted total) × 100

**Score Interpretation:**
- 90-100: Excellent, launch-ready
- 80-89: Good, minor fixes recommended
- 70-79: Fair, address critical issues before launch
- 60-69: Poor, significant work needed
- <60: Critical, major overhaul required

---

## Priority Levels

**CRITICAL (Must Fix Before Launch):**
- Title tag
- H1 exact match
- Meta description
- Mobile responsive
- HTTPS enabled
- No noindex on public pages

**HIGH (Should Fix):**
- 5+ H2 sections
- 2000+ words
- Page speed >90
- Schema markup
- FAQ section

**MEDIUM (Nice to Fix):**
- Image alt text
- Internal links
- Open Graph tags
- Core Web Vitals

**LOW (Polish):**
- Canonical tags
- Multiple social previews
- Advanced schema types

---

## Time Estimates

**Per Phase:**
- Phase 1 (On-Page): 2-3 hours
- Phase 2 (Technical): 1-2 hours
- Phase 3 (Post-Launch): 30 minutes
- Phase 4 (Content): 1-2 hours

**Total: 4-8 hours** for full optimization

**Quick audit:** 15-20 minutes (check Phase 1 only)