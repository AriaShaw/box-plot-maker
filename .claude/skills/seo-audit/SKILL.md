---
name: seo-audit
description: Performs comprehensive on-page and technical SEO audits for tool landing pages. Use when user says "run SEO check", "SEO audit", "optimize SEO", or before launching a new site. Checks 40+ critical factors including title tags, meta descriptions, H1/H2 structure, keyword optimization, mobile responsiveness, page speed, schema markup, and generates actionable fix list with priority scores.
---

# SEO Audit Skill

Performs systematic SEO audits for tool landing pages based on Google ranking factors and Ahrefs best practices.

## When This Skill Activates

Claude will use this Skill when you:
- Say "run SEO check on [site]"
- Say "SEO audit for [page]"
- Ask "is my site SEO optimized?"
- Say "pre-launch SEO review"
- Ask to "check SEO issues"

## Instructions

### Step 1: Identify Target

Ask user which site/page to audit if not specified:
- Local file path (e.g., `e:\project\index.html`)
- Live URL (will need to view source)
- Project directory (audit multiple pages)

### Step 2: Run Audit Checklist

Execute the comprehensive audit using [CHECKLIST.md](CHECKLIST.md).

The checklist covers:
- **On-Page SEO** (10 critical items)
- **Technical SEO** (8 requirements)
- **Post-Launch Setup** (4 configurations)
- **Content Quality** (4 validations)

### Step 3: Calculate Score

Score calculation:
- Each checklist item = Pass (✓) or Fail (✗)
- Total score = (Passed items / Total items) × 100
- Critical issues (Phase 1) weighted 2x

### Step 4: Generate Report

Output format:
```
SEO AUDIT REPORT - [Site Name]
Date: [Date]
Score: X/100

CRITICAL ISSUES (Must Fix Before Launch): X found
❌ [Issue 1] - [Impact] - [Priority: CRITICAL]
❌ [Issue 2] - [Impact] - [Priority: HIGH]

RECOMMENDED IMPROVEMENTS: X found
⚠ [Issue 3] - [Impact] - [Priority: MEDIUM]
⚠ [Issue 4] - [Impact] - [Priority: LOW]

PASSING ITEMS: X found
✓ [Item 1]
✓ [Item 2]

TOP 3 ACTION ITEMS:
1. [Most critical fix] - Est. time: Xmin
2. [Second priority] - Est. time: Xmin
3. [Third priority] - Est. time: Xmin

TOTAL ESTIMATED FIX TIME: Xh Xmin

LAUNCH RECOMMENDATION: [Ready/Not Ready/Ready with minor fixes]
```

### Step 5: Provide Fix Guidance

For each failed item:
1. Explain why it failed
2. Show current state vs required state
3. Provide code example to fix
4. Link to reference documentation

## Examples

### Example 1: Pre-Launch Audit

**User:** "I'm about to launch Viking Name Generator. Run SEO check."

**Claude:**
```
Reading e:\DigitalEmpire\AriaShaw\viking-name-generator\index.html...

SEO AUDIT REPORT - Viking Name Generator
Date: 2024-11-12
Score: 73/100

CRITICAL ISSUES (Must Fix Before Launch): 4 found
❌ Meta description is 182 chars (max 160) - Priority: CRITICAL
   Current: "Generate authentic Viking names instantly. Our free Viking..."
   Fix: Shorten to 155 chars, keep CTA

❌ Missing FAQPage schema markup - Priority: CRITICAL
   Impact: Missing rich snippet opportunity
   Fix: Add structured data (see SCHEMA-EXAMPLES.md)

❌ Only 3 H2 sections (minimum 5 required) - Priority: HIGH
   Current H2s: "What is...", "How it works", "FAQ"
   Add: "Famous Viking Names", "Norse Mythology Names"

❌ Hero image missing alt text - Priority: MEDIUM
   File: hero-background.jpg
   Add: alt="Viking longship sailing through fjord landscape"

RECOMMENDED IMPROVEMENTS: 2 found
⚠ Page speed score 78/100 (target: 90+) - Priority: MEDIUM
   Main issue: Uncompressed images (hero.jpg 450KB)
   Fix: Convert to WebP, compress to <200KB

⚠ No internal links (recommended: 2-3) - Priority: LOW
   Add links to related content if multi-page site

PASSING ITEMS: 34 found
✓ Title tag optimized (58 chars, keyword front-loaded)
✓ H1 exact match "Viking Name Generator"
✓ 2300 words of content
✓ Mobile responsive
✓ HTTPS enabled
✓ SoftwareApplication schema present
[...28 more]

TOP 3 ACTION ITEMS:
1. Shorten meta description to 155 chars - Est. time: 5min
2. Add 2 more H2 sections with 300+ words each - Est. time: 45min
3. Add FAQPage schema with 5 Q&A - Est. time: 20min

TOTAL ESTIMATED FIX TIME: 1h 30min

LAUNCH RECOMMENDATION: Ready with fixes - Address top 3 items before launch
```

### Example 2: Live Site Audit

**User:** "Viking site isn't ranking after 2 weeks. Check what's wrong."

**Claude:**
```
Analyzing live site at vikingnameforge.com...
Checking Google Search Console data...

SEO AUDIT REPORT - Viking Name Generator (Live)
Date: 2024-11-26
Score: 82/100
GSC Status: Indexed 5 days ago, 230 impressions, 0 clicks

CRITICAL ISSUES (Blocking Ranking): 2 found
❌ Keyword cannibalization detected - Priority: CRITICAL
   H1: "Norse Name Generator"
   Title: "Viking Name Generator"
   Impact: Google confused about primary keyword
   Fix: Change H1 to match title exactly

❌ Thin content compared to competitors - Priority: HIGH
   Your word count: 800 words
   Top 3 competitors average: 2400 words
   Missing topics: "Female Viking Names", "Viking Last Names"
   Fix: Expand content to 2000+ words

COMPETITIVE GAP ANALYSIS:
Competitor #1 (ranks #1): 2600 words, 8 H2 sections, FAQ with schema
Competitor #2 (ranks #2): 2200 words, 6 H2 sections, image gallery
Competitor #3 (ranks #3): 2800 words, 7 H2 sections, video embed
Your site: 800 words, 3 H2 sections, no FAQ schema

TOP 3 ACTION ITEMS:
1. Fix H1 to match title tag - Est. time: 2min
2. Add 1200 words covering missing topics - Est. time: 2h
3. Implement FAQ section with schema - Est. time: 30min

EXPECTED IMPACT: Significant ranking improvement in 2-4 weeks

LAUNCH RECOMMENDATION: Site needs content expansion to compete
```

### Example 3: Quick Mobile Check

**User:** "Is the DnD site mobile-friendly?"

**Claude:**
```
Running mobile-specific audit...

MOBILE SEO AUDIT - DnD Name Generator
Score: 95/100 (Mobile Focus)

✓ Responsive design works on 320px-428px width
✓ Touch targets 44x44px minimum
✓ Text readable without zoom
✓ No horizontal scroll
✓ Mobile PageSpeed score: 92/100

MINOR ISSUES: 1 found
⚠ CTA button slightly small on iPhone SE (320px width)
   Current: 40px height
   Recommended: 44px minimum for thumb-friendly tap

MOBILE RECOMMENDATION: Excellent mobile experience, minor adjustment suggested
```

## Supporting Documentation

- [CHECKLIST.md](CHECKLIST.md) - Complete 40+ item audit checklist
- [SCHEMA-EXAMPLES.md](SCHEMA-EXAMPLES.md) - Schema.org markup templates
- [COMPETITOR-ANALYSIS.md](COMPETITOR-ANALYSIS.md) - How to compare with top rankers
- [QUICK-FIXES.md](QUICK-FIXES.md) - Common issues and 5-minute solutions

## Priority Matrix

When time is limited, focus on:

**Critical (Must Fix):**
1. Title tag optimization
2. H1 exact match keyword
3. Meta description 150-160 chars
4. Mobile responsive
5. HTTPS enabled

**High (Should Fix):**
6. 5+ H2 sections with keywords
7. 2000+ words quality content
8. Page speed >90
9. Schema markup (SoftwareApplication)
10. FAQ with FAQPage schema

**Medium (Nice to Fix):**
11. Image alt text
12. Internal links
13. Open Graph tags
14. Core Web Vitals passing

## Anti-Patterns

Don't audit for:
- ❌ Keyword density >3% (over-optimization)
- ❌ Exact match domains (outdated tactic)
- ❌ Keyword meta tag (Google ignores it)
- ❌ Number of backlinks (off-page, not on-page)

## Limitations

This Skill focuses on **on-page and technical SEO** only:
- ✓ Checks: Title, meta, content, structure, speed, schema
- ✗ Doesn't check: Backlinks, domain authority, social signals
- ✗ Doesn't check: Content plagiarism (use other tools)
- ✗ Doesn't predict: Actual Google rankings (too many factors)

For backlink analysis, refer user to Ahrefs or Semrush.

## Version History

- v1.0 (2024-11-12): Initial release based on Backlinko + Ahrefs guidelines
