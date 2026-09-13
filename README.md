# Aqualux website

The production Astro website for Aqualux, an electrical and plumbing company serving Malta and Gozo. It includes fixed section navigation, completed-work photography, Facebook recommendations, FAQs, contact details, and a server-side quote form.

Motion is adapted for Astro from React Bits interaction patterns: viewport-triggered fade/blur reveals, directional content entrances, staggered groups, pointer-following card spotlights, a restrained electric border, scroll feedback and smooth section navigation. These effects use native CSS and JavaScript, require no React runtime, and respect `prefers-reduced-motion`.

The production domain is `https://www.aqualuxmalta.com`. Search indexing and structured business data are enabled.

## Form delivery

The private `/api/quote` endpoint sends the full request to Aqualux and a fixed acknowledgement to the customer through Yahoo SMTP. Generate a dedicated Yahoo third-party app password for the mailbox, copy `.env.example` to `.env`, and set:

```text
YAHOO_SMTP_USER=aqualux1@ymail.com
YAHOO_SMTP_APP_PASSWORD=your-yahoo-app-password
```

Never use the mailbox's normal sign-in password. If the app password is missing, the interface directs visitors to contact Aqualux by phone, email or WhatsApp. The form includes server-side validation, origin checking, a honeypot and basic rate limiting.

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
- `/#work` — Selected projects and customer reviews
- `/#faqs` — Frequently asked questions
- `/#contact` — Contact details and quote form

The supplied Aqualux logo is stored in `src/assets/logo_aqualux_primary_20260830_full-color.png` and optimized by Astro when rendered.

## Project images

Project photography is stored in `src/assets/work/` and rendered through Astro's image pipeline. Keep descriptive alternative text and intentional object positioning when adding future work.
