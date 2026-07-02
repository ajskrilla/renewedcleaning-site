# Renewed Cleaning — modernized site (preview build)

A modern, mobile-first, **multi-page** site for **Renewed Cleaning LLC**, built so it can become the real site with a DNS change. Every piece of the current site's functionality is preserved.

## Files
- `index.html` — homepage
- `commercial-cleaning.html` — Commercial Cleaning service page
- `styles.css` — shared stylesheet (design system)
- `app.js` — shared script (mobile menu, scroll reveal)
- `robots.txt` — keeps the preview out of search engines

## What's carried over (nothing breaks in a cutover)
- Logo + click-to-call phone — (720) 985-6161
- **Get a Free Quote / Free Consultation** -> the real Jobber request form
- **Client Login** -> the real Jobber client hub
- **Services** nav (Commercial, Residential, Aromatherapy) + full service list
- FAQ, footer quick links, contact block
- Kept selling points: 24-hour re-clean guarantee, client portal, job reports, eco-friendly, scent choice, after-hours

## 1) Push to GitHub
From inside this folder:

    git init
    git add .
    git commit -m "Modernized Renewed Cleaning site (preview)"
    git branch -M main

Then EITHER (GitHub CLI):

    gh repo create renewed-cleaning-site --private --source=. --remote=origin --push

OR (manual — create an empty repo named renewed-cleaning-site on github.com first, no README):

    git remote add origin https://github.com/ajskrilla/renewed-cleaning-site.git
    git push -u origin main

## 2) Host on Cloudflare Pages (same flow as schillwerk-site)
1. dash.cloudflare.com -> **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**
2. Authorize GitHub (if needed) and pick **renewed-cleaning-site**
3. Build settings:
   - Framework preset: **None**
   - Build command: **(leave blank)**
   - Build output directory: **/**  (root — the HTML lives at the repo root)
4. **Save and Deploy** -> live at `renewed-cleaning-site.pages.dev`

## 3) Preview links for the family
Every branch/commit gets its own preview URL automatically. To send a work-in-progress link:

    git checkout -b preview
    (make changes) git commit -am "tweak" && git push -u origin preview

Cloudflare builds a unique `preview.renewed-cleaning-site.pages.dev` link to share.
Optional: Pages -> Custom domains -> add `renewed-preview.schillwerk.com`.

The preview is kept out of Google via `noindex` on every page + `robots.txt`.

## Confirm before this could go live (facts about the business)
- [ ] Real public **email** (currently `info@renewedcleaning.org` placeholder — footer)
- [ ] **Insured / bonded / background-checked** wording — confirm with the family (hero chips, trust strip, FAQ)
- [ ] **Service-area cities** are accurate
- [ ] Confirm the **Jobber request-form URL** is the right destination for general quotes
- [ ] Download the **logo + hero images** and host locally (currently hot-linked from Renewed's CDN)

## Going live (only after approval)
- Remove the `noindex` meta tag from both pages and the `Disallow` in `robots.txt`
- Point `renewedcleaning.org` DNS at the Pages project
- Jobber scheduling + client login already point at their real hub, so those keep working
