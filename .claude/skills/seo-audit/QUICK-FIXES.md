# Quick SEO Fixes

Common SEO issues and their 5-minute solutions.

## Critical Issues (Fix Immediately)

### Issue 1: Title Tag Too Long/Short

**Problem:** Title is 75 characters (too long) or 30 characters (too short)

**Impact:** Gets truncated in search results or doesn't use available space

**Fix (2 minutes):**
```html
<!-- BAD -->
<title>Welcome to our amazing Viking name generator tool website where you can create authentic Norse warrior names</title>

<!-- GOOD -->
<title>Viking Name Generator - Free Norse Name Tool | VikingNameForge</title>
```

**Formula:** [Keyword] - [Modifier] | [Brand] = 50-60 chars

---

### Issue 2: Meta Description Missing or Too Long

**Problem:** No meta description or exceeds 160 characters

**Impact:** Google shows random snippet from page

**Fix (3 minutes):**
```html
<!-- BAD - Too long -->
<meta name="description" content="Our Viking name generator is the best free online tool for creating authentic historical Norse warrior names with meanings and Old Norse translations for your fantasy novels, role-playing games, or personal entertainment purposes.">

<!-- GOOD - 158 chars -->
<meta name="description" content="Generate authentic Viking names instantly. Free tool creates unique Norse warrior names based on historical traditions. Try it now!">
```

**Formula:** [What it does]. [Key benefit]. [CTA]! = 150-160 chars

---

### Issue 3: No H1 or Multiple H1 Tags

**Problem:** Page has 0 H1 tags or 3+ H1 tags

**Impact:** Google confused about page topic

**Fix (1 minute):**
```html
<!-- BAD - No H1 -->
<div class="title">Viking Name Generator</div>

<!-- BAD - Multiple H1 -->
<h1>Welcome</h1>
<h1>Viking Name Generator</h1>

<!-- GOOD - Exactly one H1 -->
<h1>Viking Name Generator</h1>
<h2>Create Your Norse Warrior Name</h2>
```

**Rule:** ONE H1 per page, exact match primary keyword

---

### Issue 4: Keyword Cannibalization

**Problem:** H1 says "Norse Name Generator" but title says "Viking Name Generator"

**Impact:** Google doesn't know which keyword you're targeting

**Fix (2 minutes):**
```html
<!-- BAD - Conflicting -->
<title>Viking Name Generator - Free Tool</title>
<h1>Norse Name Generator</h1>

<!-- GOOD - Consistent -->
<title>Viking Name Generator - Free Tool</title>
<h1>Viking Name Generator</h1>
```

**Rule:** H1 must match title tag keyword exactly

---

### Issue 5: Not Mobile Responsive

**Problem:** Site breaks on phone screens

**Impact:** Google penalizes in mobile search

**Fix (5 minutes for Next.js/Tailwind):**
```html
<!-- Add viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Use responsive units -->
<!-- BAD -->
<div style="width: 1200px;">Content</div>

<!-- GOOD with Tailwind -->
<div class="max-w-4xl mx-auto px-4">Content</div>

<!-- GOOD with CSS -->
<div style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">Content</div>
```

**Test:** Open on phone or Chrome DevTools → Toggle device toolbar

---

## High Priority Issues

### Issue 6: Too Few H2 Sections

**Problem:** Only 2-3 H2 sections (need 5+)

**Impact:** Not ranking for secondary keywords

**Fix (30 minutes - add content):**
```html
<!-- Current (BAD) -->
<h2>What is a Viking Name Generator?</h2>
<h2>How to Use</h2>
<h2>FAQ</h2>

<!-- Better (GOOD) -->
<h2>What is a Viking Name Generator?</h2>
<h2>How Viking Names Worked in Norse Society</h2>
<h2>Famous Viking Names from History</h2>
<h2>Norse Mythology Names</h2>
<h2>How to Use Viking Names Today</h2>
<h2>Frequently Asked Questions</h2>
```

**Rule:** Each H2 should have 300-400 words below it

---

### Issue 7: Missing Image Alt Text

**Problem:** `<img src="hero.jpg">` with no alt attribute

**Impact:** Accessibility fail, missing image SEO opportunity

**Fix (2 minutes):**
```html
<!-- BAD -->
<img src="viking-hero.jpg">
<img src="IMG_1234.jpg" alt="image">

<!-- GOOD -->
<img src="viking-hero.jpg" alt="Viking name generator tool interface showing name creation">
<img src="norse-warrior.jpg" alt="Norse warrior with sword and shield illustration">
```

**Formula:** Describe what's in image + keyword if natural

---

### Issue 8: Page Speed <90

**Problem:** PageSpeed Insights shows 65/100

**Impact:** Ranking penalty, poor user experience

**Quick Fixes (10 minutes):**

1. **Compress Images:**
```bash
# Use https://squoosh.app/ or:
npm install -g sharp-cli
sharp -i input.jpg -o output.webp --webp-quality 80
```

2. **Lazy Load Images:**
```html
<!-- Next.js -->
<Image src="/hero.jpg" loading="lazy" />

<!-- HTML -->
<img src="hero.jpg" loading="lazy" alt="...">
```

3. **Remove Unused CSS (Tailwind):**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  // Purges unused styles
}
```

---

### Issue 9: No Schema Markup

**Problem:** Missing SoftwareApplication and FAQPage schema

**Impact:** No rich snippets in Google

**Fix (5 minutes):**

Copy-paste from [SCHEMA-EXAMPLES.md](SCHEMA-EXAMPLES.md):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Your Tool Name",
  "description": "Your description",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web browser",
  "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"}
}
</script>
```

Validate at: https://search.google.com/test/rich-results

---

### Issue 10: Thin Content

**Problem:** Only 800 words, competitors have 2000+

**Impact:** Can't compete with comprehensive content

**Fix (1-2 hours):**

Add these sections (use Claude to draft):
1. "How [Tool] Works" (400 words)
2. "Benefits of Using [Tool]" (300 words)
3. "Common Use Cases" (300 words)
4. Expand existing sections to 400+ words each

**Formula:** Your word count = Top 3 competitors average + 20%

---

## Medium Priority Issues

### Issue 11: No Internal Links

**Problem:** Page doesn't link to other pages on your site

**Impact:** Poor site architecture, missed PageRank distribution

**Fix (5 minutes):**
```html
<p>
  Looking for more name generators? Check out our
  <a href="/norse-translator">Norse Translator</a>
  and
  <a href="/rune-converter">Rune Converter</a> tools.
</p>
```

**Rule:** 2-3 contextual internal links minimum

---

### Issue 12: No Open Graph Tags

**Problem:** Shares on social media look bad

**Impact:** Low click-through from social platforms

**Fix (3 minutes):**
```html
<meta property="og:title" content="Viking Name Generator - Free Norse Name Tool">
<meta property="og:description" content="Create authentic Viking warrior names instantly">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Viking Name Generator">
<meta name="twitter:description" content="Create authentic Viking names">
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg">
```

**OG Image:** Must be 1200x630px, JPG or PNG

---

### Issue 13: Poor URL Structure

**Problem:** URL is `domain.com/page?id=123&tool=viking`

**Impact:** Not user-friendly or SEO-friendly

**Fix (Depends on framework):**
```
BAD: domain.com/tools?id=viking&name=generator
BAD: domain.com/TOOLS/Viking_Name_Generator

GOOD: domain.com/viking-name-generator
GOOD: domain.com/tools/viking-name-generator
```

**For Next.js:** Create proper file structure in `app/` directory

---

### Issue 14: No FAQ Section

**Problem:** Missing opportunity for long-tail keywords and rich snippets

**Impact:** Not ranking for question queries

**Fix (20 minutes):**

Add 4-6 Q&A pairs:
```html
<h2>Frequently Asked Questions</h2>

<h3>What would my Viking name be?</h3>
<p>Your Viking name would consist of a given name (like Bjorn or Freydis) combined with an epithet describing your characteristics...</p>

<h3>How accurate is this Viking name generator?</h3>
<p>Our generator uses authentic Old Norse name elements and historically documented epithets from Viking Age sources...</p>
```

Plus add FAQPage schema (see [SCHEMA-EXAMPLES.md](SCHEMA-EXAMPLES.md))

---

### Issue 15: No Canonical Tag

**Problem:** Missing `<link rel="canonical">` tag

**Impact:** Duplicate content issues if multiple URLs serve same page

**Fix (1 minute):**
```html
<head>
  <link rel="canonical" href="https://yourdomain.com/viking-name-generator">
</head>
```

**Rule:** Use absolute URL, not relative

---

## Low Priority Issues

### Issue 16: Missing Favicon

**Problem:** No favicon.ico, browser shows generic icon

**Impact:** Looks unprofessional in browser tabs

**Fix (2 minutes):**
1. Create 32x32px icon
2. Save as `public/favicon.ico` (Next.js) or root directory
3. Add to HTML:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

---

### Issue 17: HTTP Instead of HTTPS

**Problem:** Site loads over http:// not https://

**Impact:** Major ranking penalty, "Not Secure" warning

**Fix (Automatic on Vercel):**
- Vercel, Netlify, Cloudflare Pages: HTTPS automatic
- If custom server: Install SSL certificate (Let's Encrypt free)

---

### Issue 18: Keyword Density Too High

**Problem:** Primary keyword appears 25 times in 1000 words (2.5% is ok, 5%+ is spam)

**Impact:** Over-optimization penalty

**Fix (10 minutes):**
1. Count keyword occurrences
2. Replace some with synonyms:
   - "viking name generator" → "this tool", "our generator", "the name creator"
   - Use LSI keywords: "norse name generator", "nordic names", "warrior names"

**Rule:** 2-3% density maximum

---

## Prevention Checklist

Before launching ANY new site, check:

**Must Fix (5 min each):**
- [ ] Title tag 50-60 chars, keyword front-loaded
- [ ] Meta description 150-160 chars with CTA
- [ ] Exactly ONE H1, exact match keyword
- [ ] Mobile responsive (test on phone)
- [ ] HTTPS enabled

**Should Fix (10-20 min total):**
- [ ] 5+ H2 sections with keywords
- [ ] 2000+ words quality content
- [ ] SoftwareApplication schema
- [ ] FAQ with FAQPage schema
- [ ] Images optimized (<200KB each)
- [ ] All images have alt text

**Run These Tests:**
- [ ] Google Mobile-Friendly Test
- [ ] PageSpeed Insights (>90 score)
- [ ] Google Rich Results Test (no errors)
- [ ] W3C HTML Validator (no critical errors)

---

## Emergency Quick Fixes (Site Not Ranking)

If your site has been live 4+ weeks with no rankings:

**Check in this order (15 minutes):**

1. **Is it indexed?**
   - Google: `site:yourdomain.com`
   - If no: Check robots.txt, noindex tags
   - Fix: Remove noindex, submit to GSC

2. **Keyword cannibalization?**
   - H1 matches title tag keyword?
   - If no: Make them match exactly

3. **Content length?**
   - Check top 3 competitors
   - If yours is <70% of their average: Add content

4. **Page speed?**
   - PageSpeed Insights score
   - If <80: Compress images, lazy load

5. **Mobile responsive?**
   - Google Mobile-Friendly Test
   - If fails: Add viewport meta tag, use responsive units

6. **Schema markup?**
   - Google Rich Results Test
   - If none: Add SoftwareApplication schema minimum

Fix top 3 issues, wait 2 weeks, check again.

---

## When NOT to Fix

**Don't waste time on:**
- Keyword meta tag (Google ignores it)
- Exact match domain (outdated tactic)
- Keyword density tweaking (if already 2-3%)
- Multiple schema types (SoftwareApplication + FAQPage is enough)
- Custom fonts (if they slow down site)
- Animations (if they cause CLS issues)

**Focus on:** Content, mobile, speed, schema, structure

**Remember:** Done > Perfect. Ship with 85/100 SEO score, improve later based on data.