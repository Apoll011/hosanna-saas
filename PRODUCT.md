# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Worship leaders and church staff plan services. Musicians (guitar, keys, vocals, and the rest of the team) read the same plan during rehearsal and the service. The public site speaks first to a worship leader deciding whether Hosanna is worth trying with their church. Copy exists in Portuguese (default), English, and Spanish. [Inferred from the product copy and i18n, not from a live interview: the primary visitor is a Portuguese-speaking worship leader evaluating the product for their church.]

## Product Purpose

Hosanna is a worship-planning platform. Churches keep one song library, prepare a service (title, date, song order, team notes), and give every musician the same plan on their own device. Success is less time hunting files and more time preparing to lead worship.

## Positioning

Studio is where leaders build the library and the service. The mobile app is what musicians hold during rehearsal and the service. Songs are ChordPro, so a chart stays portable. Each musician can transpose, resize type, and show or hide chords without changing anyone else's view. Previously synced songs stay available offline. Pricing is per church, not per musician.

## Operating Context

A church prepares before rehearsal: folders of songs, a dated service, notes for the team. On the day, musicians open the plan on a phone or tablet, often with weak or no connection. The public website is the front door to Studio (`studio.hosanna.live`), a no-signup demo, the ChordPro guide, about, contact, terms, and privacy. The authenticated Studio application is out of scope for this site.

## Capabilities and Constraints

Confirmed in the product and its copy:

- Song library in ChordPro, folders, search by title, artist, lyrics, key, tags, or song number
- Import and export ChordPro; migration paths described for Songbook Pro, OnSong, Planning Center, and Chord1
- Create and schedule services, set song order, add team notes
- Team roles and permissions in Studio
- Mobile: planned service, independent transpose, chord visibility, text size, keep-awake, personal notes, offline after sync, PDF of a full service
- One plan: 12€ per month or 120€ per year per church, 14-day trial, unlimited musicians and dashboard users. Multi-campus copy states +12€ per month per extra campus
- Android build is distributed from GitHub releases, not a store listing in this repo
- Languages: Portuguese, English, Spanish. Portuguese diacritics are required
- Do not invent testimonials, customer counts, church names, or statistics. The about page names two founders and redacts the church name; that redaction stays
- Roadmap items (including musician scheduling, visual sheet editor, Bluetooth pedal, church themes) are not shipped capabilities. The homepage must not present them as current features
- The line claiming “hundreds of churches” conflicts with the about story and is not verified. Do not repeat it
- Help Center and service status currently point nowhere; do not present them as live destinations
- Preserve signup, demo, pricing query params, language switching, contact form behavior, GoFundMe, and legal routes

## Brand Commitments

Name: Hosanna (Studio in the product). Mark: blue guitar headstock forming an H. Voice in the existing copy is warm, direct, and church-literate (culto, cifra, equipa de louvor), not corporate and not preachy. The user asked the marketing site to communicate worship, organisation, simplicity, reliability, community, and professionalism without religious cliché or a generic SaaS template. [Inferred: the guitar-headstock mark and the blue of the logo are the binding identity; Fraunces and Inter on an internal brand board are the incumbent faces, not a user-pinned lock for this redesign. The brief requires a real font investigation.]

## Evidence on Hand

- Product screenshots: `src/assets/main_mockup.png`, `laptop-view.png`, `mobile-view.webp`, `song_library.jpeg`, `service.jpeg`, `chords.jpeg`, `transpose.jpeg`
- Logo: `src/assets/hosanna_logo.webp`
- Founders: Tiago Inês (engineering) and Éber Rodrigues (design and product), cousins, with headshots. Bios in `src/lib/i18n/locales/pt.ts` under `about`. Church name is redacted in source
- Email: hosanna.songbook@gmail.com
- Blog: https://blog.hosanna.live
- Code: https://github.com/Apoll011/Hosanna
- GoFundMe link in the fundraiser section and the footer. The timed demo and fundraising popups are not part of the site.
- No verified testimonials, logos of churches, or usage statistics in the repo

## Product Principles

- Show the real product. Screenshots carry the explanation.
- Say what a worship leader can do this week, in plain language.
- Trust comes from the founders, the format (ChordPro), the price, and the trial — not from invented social proof.
- Technology should get out of the way of the service.
- One church, one library, every musician on their own screen.

## Accessibility & Inclusion

Public site must stay usable with keyboard, visible focus, sufficient contrast, and reduced motion. Portuguese, English, and Spanish stay in sync. Touch targets stay at least 44px. [Inferred from the redesign brief.]
