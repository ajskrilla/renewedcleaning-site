# Renewed Cleaning — modernized homepage (preview build)

A single-file, modern, mobile-first homepage mock for **Renewed Cleaning LLC**, built so it can become the real site with a DNS change. Every piece of the current site's functionality is preserved.

## What's carried over (nothing breaks in a cutover)
- **Logo** and click-to-call **phone** — (720) 985-6161
- **Get a Free Quote / Request a Consultation** → the real Jobber request form
- **Client Login** → the real Jobber client hub
- **Services** nav (Commercial, Residential, Aromatherapy) + the full service list
- **FAQ**, footer quick links, and contact block
- Existing selling points kept: 24-hour re-clean guarantee, client portal, job reports, eco-friendly, aromatherapy scent choice, after-hours

## What's fixed / new
- "Breathe easy" hero (typo corrected), single clear **Get a Free Quote** CTA
- Denver-metro **service area** (replaces the "nationwide" claim)
- **Trust signals**: insured & bonded, veteran & family owned, background-checked, no long-term contract
- Rewritten, consistent copy + a real FAQ with answers
- Fresh, modern design (eucalyptus + brass palette, "breathing" hero motif), fully responsive, accessible

## Deploy to Cloudflare Pages
1. Create a GitHub repo (e.g. `renewed-cleaning-site`) and push these files.
2. Cloudflare dashboard → **Pages** → **Create → Connect to Git** → pick the repo.
   - Framework preset: **None** · Build command: **(leave blank)** · Output directory: **/** (root)
3. Deploy. Production URL: `renewed-cleaning.pages.dev`.
4. **Preview links:** every branch and deploy gets its own unique URL — build on a branch and share that link with the family. Optionally add a custom domain like `renewed-preview.schillwerk.com` under Pages → Custom domains.

The preview is kept out of Google via a `noindex` meta tag **and** `robots.txt`, so it can't compete with or duplicate the live site.

## Confirm before this could go live (facts about the business)
- [ ] Real public **email** (currently `info@renewedcleaning.org` placeholder — see footer)
- [ ] **Insured / bonded / background-checked** wording — confirm with the family (used in the hero chips, trust strip, and FAQ)
- [ ] **Service-area cities** are accurate
- [ ] Confirm the **Jobber request-form URL** is the right one for general quote requests
- [ ] Download the **logo + hero image** and host them locally (they're currently hot-linked from Renewed's CDN)

## Going live (only after approval)
- Remove the `noindex` meta tag and the `Disallow` in `robots.txt`
- Point `renewedcleaning.org` DNS at the Pages project
- Jobber scheduling + client login already point to their real hub, so those keep working unchanged

## Files
- `index.html` — the page (HTML + CSS + JS, self-contained)
- `robots.txt` — keeps the preview unindexed
