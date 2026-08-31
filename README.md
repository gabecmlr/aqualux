# Aqualux website

An Astro single-page website for an electrical and plumbing company. It includes fixed section navigation, honest proof-of-work placeholders, review placeholders, FAQs, contact details, and a server-side quote form.

Motion is adapted for Astro from React Bits interaction patterns: viewport-triggered fade/blur reveals, directional content entrances, staggered groups, pointer-following card spotlights, a restrained electric border, scroll feedback and smooth section navigation. These effects use native CSS and JavaScript, require no React runtime, and respect `prefers-reduced-motion`.

## Important: demo content

The current business details, services, projects, reviews and operating information are placeholders. The site deliberately ships with `noindex`, a blocking `robots.txt`, disabled structured data, and visible demo labels so unfinished claims cannot be mistaken for genuine business evidence.

Before launch:

1. Replace the contact and service information in `src/data/site.ts`.
2. Add customer-approved project photos and update each project entry.
3. Replace every demo review with verified, approved feedback.
4. Confirm the service list, service area, hours, credentials and availability wording.
5. Change `verifiedForStructuredData` to `true` only after every business detail is confirmed.
6. Set the real production URL in `astro.config.mjs`, `public/sitemap.xml` and the social metadata assets.
7. Replace `public/robots.txt` with production indexing rules and remove the `noindex` safeguard by completing step 5.

## Form delivery

The private `/api/quote` endpoint sends the full request to Aqualux and a fixed acknowledgement to the customer through Yahoo SMTP. Generate a dedicated Yahoo third-party app password for the mailbox, copy `.env.example` to `.env`, and set:

```text
YAHOO_SMTP_USER=aqualux1@ymail.com
YAHOO_SMTP_APP_PASSWORD=your-yahoo-app-password
```

Never use the mailbox's normal sign-in password. If the app password is missing, the interface reports that delivery is not configured and disables submission. The form includes server-side validation, origin checking, a honeypot and basic rate limiting.

Because email delivery runs on the server, production hosting must support Astro server rendering. Static-only hosting cannot run the quote endpoint. On Vercel, add both variables under **Project Settings → Environment Variables** for Production and Preview, then redeploy so the new values are applied. Never commit `.env` or `.env.local`.

## Local development

Astro 7 requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Production checks and build:

```bash
npm run build
npm start
```

## Page sections

- `/#home` — Introduction
- `/#services` — Electrical and plumbing services
- `/#work` — Before/after proof format and reviews
- `/#faqs` — Frequently asked questions
- `/#contact` — Contact details and quote form

The supplied Aqualux logo is stored in `src/assets/logo_aqualux_primary_20260830_full-color.png` and optimized by Astro when rendered.

## Replacing project images

Put optimized AVIF or WebP files in `public/images/work/`, then add their root-relative paths to the matching `beforeImage` and `afterImage` fields in `src/data/site.ts`. Keep both images at the same aspect ratio and provide accurate project titles so the generated alt text remains meaningful.
