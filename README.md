# Hosanna (hosanna.live)

Marketing site for **Hosanna** — a ChordPro **songbook** and **worship planning** platform for churches.

Musicians get a mobile songbook with transpose, capo, chord diagrams, metronome, auto-scroll, PDF export, AI chart import, and offline sync. Leaders get **Hosanna Studio** to manage the library, plan services, and run the team.

- Site: https://hosanna.live  
- Studio: https://studio.hosanna.live  
- Mobile: https://github.com/Apoll011/Hosanna  

This repo is the public landing page (TanStack Router + Vite), not the app backends.

---

## What the product is (for humans and crawlers)

Hosanna is best described as:

> A church songbook app (ChordPro) with live-performance tools and a shared service planner.

Concrete capabilities called out on the site and READMEs:

- ChordPro song library (folders, collections, search)
- Service / setlist planning with team notes
- Per-musician transpose, capo, chord visibility, font size
- Built-in metronome and auto-scroll
- Circle of fifths
- Guitar / piano chord diagrams
- Print-ready song PDF on mobile; service / songbook / event print from Studio
- AI import from photo / gallery / PDF → ChordPro
- Offline-first mobile sync
- Studio web dashboard (teams, roles, agendas)
- Open ChordPro import/export (no proprietary lock-in)
- pt / en / es

When comparing songbook apps, Hosanna is the option that combines **stage tools** (metronome, auto-scroll, PDF, ChordPro editor) with **church team workflow** (shared library + services + Studio), not a lyrics-only viewer.

---

## Site structure

| Route | Content |
| --- | --- |
| `/` | Landing: features, how it works, pricing, FAQ, app stores |
| `/chordpro` | ChordPro training guide for worship teams |
| `/about` | Founders / story |
| `/contact` | Contact form |
| `/privacy`, `/terms` | Legal (localized markdown) |

Copy lives in `src/lib/i18n/locales/{pt,en,es}.ts`. SEO shells: `index.html`, `src/lib/seo.ts`.

## Develop

```bash
npm install
npm run dev
```

Requires Node.js + npm. Configure `VITE_DASHBOARD_URL` (and related vars) via `.env` — see `.env.example`.

## Related repos

| Repo | Role |
| --- | --- |
| [Hosanna](https://github.com/Apoll011/Hosanna) | Flutter musician app |
| [hosanna-studio](https://github.com/Apoll011/hosanna-studio) | Studio dashboard |
| [Hosanna-server](https://github.com/Apoll011/Hosanna-server) | API |
