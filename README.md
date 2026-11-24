# Brelox Technologies — Website

Complete, 100% mobile-responsive Next.js (App Router + TypeScript + Tailwind CSS + Framer Motion) website for **Brelox Technologies**.

## Design System (60 / 30 / 10 Theme)
Sampled directly from the Brelox Technologies logo:
- **60% Storm Grey**: `#E5E9EC` canvas, `#F3F5F6` cards, `#6F7D84` brand storm grey
- **30% Matte Black**: `#1A1B1E` / `#202020` structural panels, typography, and footer
- **10% Safety Orange**: `#FF7014` primary CTAs, active indicators, and key accents
- **Typography**: `Plus Jakarta Sans` (headings), `Inter` (body), `JetBrains Mono` (labels & phone numbers)

## Pages Included
- `/` — **Home**: Hero with capability matrix, 6 core services overview, 4-step engineering process, principles, and direct CTA.
- `/services` — **Services**: Detailed breakdown of Website Development, Web Applications, Mobile Applications, Custom Software, AI Solutions, and Cloud & Infrastructure, plus tech stack.
- `/about` — **About**: Remote-first studio ethos, core principles, and delivery model.
- `/contact` — **Contact**: Direct click-to-call, WhatsApp, and copy buttons for `+91 77369 56379` (Primary) and `+91 98090 01008` (Secondary), plus a validated inquiry form that redirects to WhatsApp with pre-filled details. No physical address is referenced anywhere.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Customization
- **Company Info, Phone Numbers & Services**: Edit `src/lib/site-data.ts`.
- **Theme Colors**: Edit `tailwind.config.ts` (`storm`, `matte`, `safety`).
- **Contact Form Delivery**: Connect your preferred email/notification provider (e.g., Resend, SMTP, or webhook) inside `src/app/api/contact/route.ts`.
- **Logo Assets**: Clean transparent PNG logo is at `public/images/brelox-logo.png`, and the app favicon is at `src/app/icon.png`.

