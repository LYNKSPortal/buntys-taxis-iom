# Bunty's Taxis — Isle of Man

Official website for **Bunty's Taxis**, a premium taxi service covering the whole of the Isle of Man.

🌐 [buntystaxis.com](https://buntystaxis.com) &nbsp;|&nbsp; 📞 +44 7624 313151 &nbsp;|&nbsp; ✉️ info@buntystaxis.com

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Font:** Europa Grotesk SH (self-hosted)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, brand colours, animations
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Page assembly
└── components/
    ├── Header.tsx         # Sticky nav with logo + CTA
    ├── Hero.tsx           # Full-screen hero with animated taxis
    ├── BookingCTA.tsx     # Blue booking call-to-action section
    ├── Services.tsx       # 6-card services grid
    ├── Fleet.tsx          # Fleet overview with car visual
    ├── About.tsx          # Company story and values
    ├── Coverage.tsx       # Island-wide coverage + area tags
    ├── Contact.tsx        # Phone, WhatsApp, email cards
    ├── Footer.tsx         # Footer with links and contact
    └── MobileBar.tsx      # Fixed bottom Call/WhatsApp bar (mobile)

public/
├── car.png               # Taxi icon (used in hero + fleet)
├── 3000w/logo.png        # Brand logo
└── font/                 # Europa Grotesk SH (self-hosted)
```

---

## Brand

| Token | Value |
|---|---|
| Black | `#000000` |
| White | `#FFFFFF` |
| Blue | `#29ABE2` |
| Font | Europa Grotesk SH |

---

## Build & Deploy

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

Ready to deploy to **Vercel**, **Netlify**, or any Node.js host.

---

## Contact

**Bunty's Taxis** — Isle of Man  
📞 [+44 7624 313151](tel:+447624313151)  
💬 [WhatsApp](https://wa.me/447624313151)  
✉️ [info@buntystaxis.com](mailto:info@buntystaxis.com)
