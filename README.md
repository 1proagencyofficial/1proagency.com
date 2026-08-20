# 1 Pro Agency — Website

Plain HTML/CSS/JS. No build step, no framework, no npm install needed.
Deploys for free on Cloudflare Pages (or GitHub Pages / Netlify / Vercel — same steps).

## Files
```
index.html     → the whole site (all sections)
style.css      → all styling
script.js      → nav, scroll animations, counters, back-to-top, form handling
manifest.json  → lets phones "Add to Home Screen"
robots.txt     → search engine crawling rules
sitemap.xml    → search engine sitemap
assets/        → logo, favicons, WhatsApp-group QR code, social preview image
```

## What's new in this pass
- Full SEO/social setup: Open Graph + Twitter Card tags, a generated `assets/og-cover.png`
  link-preview image, JSON-LD business data, canonical URL, `robots.txt`, `sitemap.xml`.
- Custom icon set replacing every emoji (services, Why Us, contact methods, buttons).
- Animated stat counters, a scroll-progress bar, a back-to-top button, and a signature
  orbiting-node animation behind the hero logo.
- A real FAQ section (native accordion, no JS required for it to work).
- Fixed a bug where the sticky header could cover section titles when jumping via nav links.
- Fixed a responsive bug where the nav could overflow/wrap on tablet-width screens
  (roughly 720–1000px) — it now collapses to the menu icon earlier, at 1040px.
- Mobile gets a sticky bottom WhatsApp/Email bar instead of just the floating bubble.
- Added your WhatsApp community group (link + the QR code you sent) and your X profile,
  in the Contact section and the footer.
- Updated payment-policy language site-wide to match what you described: 40% deposit to
  start, balance due once you approve the finished work — see "Before going live" below,
  item 4, if that's not quite right.
- Contact email switched to `1proagencyofficial@gmail.com`; added
  `abdullahkayanillc@gmail.com` as a separate "Business" line in the footer.
- Footer copyright now reads as a range (2023–current year) instead of just one year.

## Deploy on Cloudflare Pages (recommended) — ~10 minutes

### 1. Push the code to GitHub
1. Go to github.com → New repository → name it e.g. `1proagency-website` → Create.
2. On the new repo page, click **"uploading an existing file"**.
3. Drag in all files from this folder (including the `assets` folder).
4. Commit changes.

### 2. Connect Cloudflare Pages
1. Go to **pages.cloudflare.com** → sign up free → **Create a project** → **Connect to Git**.
2. Authorize GitHub, select the `1proagency-website` repo.
3. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Click **Save and Deploy**.

Your site goes live at `https://1proagency-website.pages.dev` (or whatever name Cloudflare
gives it) in about a minute. Every time you edit files on GitHub, it auto-redeploys.

## Before going live — 4 things to check

1. **Contact form** — currently points to a placeholder. Go to [formspree.io](https://formspree.io),
   make a free account, create a form, copy your endpoint URL, then in `index.html` find:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your real ID. Until you do, the form shows a friendly reminder
   instead of submitting.

2. **Real domain** — several places assume `https://1proagency.com/` as a placeholder
   (the canonical link, Open Graph/Twitter tags, JSON-LD, `robots.txt`, `sitemap.xml`).
   Once you have a real domain, find-and-replace `1proagency.com` across those files —
   otherwise link previews and search data will point at a domain you don't own.

3. **WhatsApp numbers, group link & X handle** — WhatsApp numbers are `923499625589` and
   `923295202798`; the community group link and `x.com/1ProAgency` are also in `index.html`
   (contact section + footer) — search-and-replace if any of these change.

4. **Payment policy wording** — I wrote this as "40% deposit to start, 60% balance once
   you approve the finished work" (trust bar, Why Us, How We Work, and two FAQ entries).
   If the split or the flow is different from what you actually do, search `index.html`
   for "40%" and "60%" to find and adjust every mention — they should all say the same thing.

## Things I left out, on purpose

- **A countdown timer that resets/restarts and never actually expires.** A timer that
  always shows "offer ending soon" but never really ends is a false-urgency pattern —
  it tells visitors something untrue about a real deadline. Happy to add a genuine one
  if you ever run an offer with a real end date.
- **Giving away another creator's paid course for free.** I didn't build the "free bonus
  course" section credited to a named third party — I have no way to confirm you hold
  distribution rights to their paid material, and advertising it on the site would be
  publishing that claim either way. If it's your own original course, send the content
  and I'll add a proper section for it.
- **Collecting home address over WhatsApp/X as part of the order flow.** A street address
  isn't something a digital service needs, and asking for it alongside payment screenshots
  reads like more than this business requires — I'd drop that field. Name, email and
  phone (already collected via the contact form) should be plenty.
- **Fabricated testimonials.** I added an honest "we ask for feedback after every project"
  FAQ entry instead of inventing client quotes — real reviews are easy to slot in later
  wherever you'd like them.

## Editing content later
Everything is in plain HTML — open `index.html` in any text editor (or GitHub's web
editor) and edit the text between tags. No framework knowledge needed for text/price changes.
