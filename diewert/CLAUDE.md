# Diewert Foundation - Google Ad Grant Project

## Project Overview
**Client:** Diewert Foundation (Canadian nonprofit)
**Project:** Google Ad Grant landing pages
**Repo:** github.com/thor0417/diewert-adgrant
**Hosting:** GitHub Pages, `gh-pages` branch
**Custom Domain:** go.diewert.org (CNAME → thor0417.github.io)
**DNS Record Required:** CNAME `go` → `thor0417.github.io` in diewert.org DNS panel

## Live URLs
- `go.diewert.org/student-hunger-canada/` → Student hunger landing page

## Repo Structure
```
diewert-adgrant/
├── CLAUDE.md                        ← You are here
├── CNAME                            ← Custom domain for GitHub Pages
├── index.html                       ← Root redirect (points to main site)
└── student-hunger-canada/
    ├── index.html                   ← Landing page
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## GitHub Pages Setup
- Branch: `gh-pages`
- Custom domain: `go.diewert.org`
- HTTPS: enforce after DNS propagates
- CNAME file at repo root: `go.diewert.org`

## Google Ad Grant Requirements (must maintain)
- Page must be relevant to ad keywords
- No excessive ads or pop-ups
- Clear mission statement above the fold
- Specific CTA tied to nonprofit mission
- Fast load time (Core Web Vitals matter)
- Mobile-first

## Brand Notes
- Warm, trustworthy nonprofit aesthetic
- Focus: Student food insecurity in Canada
- Key stats to highlight: 1 in 3 post-secondary students experience food insecurity
- Primary CTA: Donate / Get Involved
- Secondary CTA: Learn More / Share

## Ad Campaign Keywords (assumed)
- student hunger canada
- student food insecurity
- hungry students canada
- help hungry students
- student food bank

## Completed Pages
- [x] student-hunger-canada (v1)

## TODO
- [ ] Add conversion tracking (Google Tag Manager)
- [ ] A/B test CTA copy
- [ ] Add additional landing pages per campaign
