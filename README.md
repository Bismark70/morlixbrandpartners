# Morlix Brand — Official Website

The official website for **MORLIX BRAND**, built with Next.js 16, TypeScript, Tailwind CSS 4, and Prisma (SQLite). Design language, colors, and identity are taken directly from the Morlix logo — deep navy, ocean blue, and the signature flame-orange orbit.

> **Your Vision. Our Partnership. Greater Possibilities.**

---

## ✨ What's Inside

| Section | Description |
| --- | --- |
| **Hero** | Animated headline, orbit emblem, "who we serve" ticker |
| **Services** | The six launch services as an expand/collapse accordion — click a service to reveal its deliverables |
| **Process** | Discover → Strategize → Create → Implement → Measure → Evolve |
| **About** | Story, Vision, Mission + one compact band with our difference and core values |
| **CTA banner** | "Book a Free Consultation" — links to the dedicated contact page |
| **FAQ** | Six questions organizations ask before the first conversation (last section before the footer) |
| **`/contact` page** | Dedicated page with an email-first contact card and the enquiry form — all "Contact" and "Book a Free Consultation" buttons navigate here |
| **Footer** | Compact sitemap, services, and email contact |

Enquiries submitted through the contact form are **stored in a local database** (no lead is ever lost), and the code is pre-wired so you can add email delivery to your business inbox in minutes (see *Receiving form submissions by email*).

---

## 🚀 Getting Started (VS Code)

### 1. Prerequisites
- **Node.js 20 or newer** — https://nodejs.org (or [Bun](https://bun.sh), which is even faster)

### 2. Install dependencies
```bash
npm install
# or: bun install
```

### 3. Configure environment
A ready `.env` file ships with this project:
```env
DATABASE_URL="file:../db/custom.db"
```
No changes needed for local development.

### 4. Create the database
```bash
npx prisma db push
# or: bun run db:push
```

### 5. Run the website
```bash
npm run dev
# or: bun run dev
```
Open **http://localhost:3000** in your browser. 🎉

---

## ✏️ Editing Site Content (one file)

Almost everything editable lives in **`src/lib/site.ts`**:

- **Email address** — replace the placeholder value in the `site` object (`email` is shown on the site, `emailTo` is where form submissions would be delivered).
- **Services** — descriptions and deliverables of the six launch services.
- **Process steps** and **who-we-serve ticker** items.

Colors, fonts, and animation keyframes live in **`src/app/globals.css`** if you ever want to fine-tune the brand system.

---

## 📥 Receiving Form Submissions

### Option A — View stored enquiries (works out of the box)
```bash
npx prisma studio
```
Opens a visual dashboard of every enquiry at `http://localhost:5555`.

### Option B — Deliver each enquiry to your business email (recommended)
The website already saves every enquiry to the database; to **also receive it in your inbox**, use a provider such as [Resend](https://resend.com) (free tier available):

1. `npm install resend`
2. Get an API key from resend.com and add it to `.env`:
   ```env
   RESEND_API_KEY="re_xxxxxxxx"
   ```
3. Open **`src/app/api/contact/route.ts`** — a ready-to-paste code block is waiting in the comments. Set your inbox address in `src/lib/site.ts` (`emailTo`).

> Tip: in production you should also verify your domain in Resend so emails come from `@morlixbrandpartners.com`.

---

## 📦 Production Build & Deployment

```bash
npm run build
npm start
```

- **Vercel** (easiest): push to GitHub → import at vercel.com. Note Vercel's filesystem is ephemeral — swap SQLite for a hosted database (e.g. Vercel Postgres / Neon / Turso) when you deploy, or keep hosting on a VPS where SQLite works perfectly.
- **VPS / cPanel (Node hosting)**: `npm run build && npm start` behind Nginx works as-is with SQLite.

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── page.tsx              ← homepage (assembles all sections)
│   ├── contact/
│   │   └── page.tsx          ← dedicated contact page (hero, breadcrumb, form)
│   ├── layout.tsx            ← fonts, SEO metadata, favicon
│   ├── globals.css           ← brand colors, fonts, animations
│   └── api/contact/route.ts  ← form endpoint (+ email recipe)
├── components/site/
│   ├── navbar.tsx            ← sticky nav + mobile drawer
│   ├── hero.tsx              ← hero with orbit emblem + ticker
│   ├── services.tsx          ← the six services
│   ├── process.tsx           ← working process
│   ├── about.tsx             ← story, vision, mission, values
│   ├── faq.tsx               ← accordion
│   ├── cta-banner.tsx        ← consultation banner
│   ├── contact.tsx           ← contact channels + form (rendered on /contact)
│   ├── footer.tsx            ← footer
│   └── reveal.tsx            ← scroll animation helper
└── lib/
    ├── site.ts               ← ★ EDIT ME — all site content
    └── db.ts                 ← Prisma client singleton
prisma/schema.prisma          ← ContactMessage table
public/                       ← logo files & favicons
```

## 🔮 Adding Dedicated Service Pages Later

The architecture is ready: every service already has a `slug` in `src/lib/site.ts`. When the organization advances, create `src/app/services/[slug]/page.tsx`, generate static pages from the `services` array, and point the service accordion links to `/services/${slug}` instead of `/contact`.

---

**MORLIX BRAND** — Strategy · Creativity · Technology · Innovation · Impact
