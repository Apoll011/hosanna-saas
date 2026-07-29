# Hosanna — Business Model

## 1. Core Model: Flat €12/Month Per Church, Unlimited Users

Hosanna sells **one plan per church**: **€12/month** (or ~€120/year with an annual discount), including full access to every feature — dashboard + mobile app, unlimited song library, unlimited services, offline sync, PDF export, multi-team support — and **unlimited musicians/dashboard users**. No per-seat fees, no feature-gated tiers.

**Multi-Campus lever:** churches operating more than one physical site pay **€12/month per additional campus**, with the same unlimited-user access at each site. This is the only axis pricing scales on — organizational footprint, not team size — so a growing worship team never triggers a bigger bill, but a church that becomes a multi-site institution pays proportionally to what it now is.

This is a deliberate structural bet against how the category is currently priced, and it's the spine of the go-to-market story: *"Your whole worship team, however big it grows — one price."*

### Why this works as a wedge
Church software today punishes the thing churches actually want — more people serving. Planning Center prices per team member beyond a small free allotment; OnSong prices per musician. Every unit of growth a church achieves (a new guitarist, a second Sunday-evening team, a growing youth worship band) increases their bill. Hosanna inverts that: price is tied to the church as an organization, not to how many people it equips.

## 2. New Feature: Full Service Content, Not Just Songs

Beyond songs, service creators can now add **Bible readings/passages, sermon outlines or lecture notes, announcements, and other non-song service elements** directly into the service plan alongside the music — so the entire order of service lives in one place, not just the worship set.

This matters strategically, not just functionally:

- **It widens the buyer from "worship leader" to "whoever plans the service"** — often a pastor, associate pastor, or service coordinator, not only the music director. That's a meaningfully larger and more decision-empowered audience to sell into, and one more likely to see the full €12/month price as an easy call since it now touches the whole service, not just one department's tool.
- **It raises switching cost in your favor.** Once a church's entire service — readings, announcements, sermon notes, and songs — lives in Hosanna, replacing it means replacing more than a chord chart app; that's a real retention lever without needing to lock anyone in artificially.
- **It differentiates from both competitor categories at once.** Planning Center Services is music/team-scheduling focused; OnSong is purely a chord-chart reader. Neither is built as a single place for the *whole* service run-of-show. This is a legitimate feature gap, not just a nice-to-have.
- **Keep it included in the one price, not a paywalled add-on.** Gating it behind a higher tier would recreate the exact "pay more per feature" pattern Hosanna is positioned against. It should ship as part of the same €12/month plan.

### Suggested framing for marketing copy
"Not just your setlist — your whole service." Songs, scripture readings, sermon notes, and announcements, planned together and available to the whole team on one screen.

## 3. Ideal Customer Profile

- **Primary:** Independent churches and small-to-mid denominational churches (roughly 50–1,000 attendees) with an active worship team of 3+ musicians/vocalists, currently coordinating with folders, WhatsApp/Telegram, printed chord sheets, or a spreadsheet — and, now, whoever separately manages the announcements/reading list for the service.
- **Secondary:** Multi-team churches (e.g. separate youth, Sunday morning, and Sunday evening worship teams) who need one shared library and one shared service plan across teams.
- **Beachhead:** Portuguese-speaking churches (Portugal, Brazil, Cape Verde, Angola), where Hosanna can localize early and where incumbents are English-first, USD-priced, and comparatively expensive for the local market.

## 4. Competitive Landscape & Positioning

### Against generic tools (Google Drive, WhatsApp, paper songbooks) — "upgrade" message
- "Stop hunting for the right version of a chord chart in a WhatsApp thread — and stop keeping the announcements and Bible reading in a separate note."
- "Every musician, reader, and presenter sees the same plan, in the right order, without anyone re-sending anything."
- Emphasize: free trial, near-zero setup, works offline.

### Against existing worship/church software (Planning Center Services, OnSong, CCLI SongSelect) — "simpler, fairer, and more complete" message
- Planning Center Services prices per module and effectively per team member beyond a small free allotment. Hosanna's message: "One price, everything included — including the parts of the service that aren't songs."
- OnSong is priced and licensed per musician, and covers songs only. Hosanna's message: "Your whole team and your whole service, not just chord charts, and not per musician."
- CCLI SongSelect solves song licensing, not service planning; Hosanna isn't a licensing replacement and should be positioned as a complement ("bring your own CCLI-licensed lyrics/chords into your Hosanna service plan").

### Positioning statement
"Planning Center prices you per team member and splits your service across modules. OnSong prices you per musician and only handles songs. Hosanna is €12 a month, per church — unlimited people, and the whole service: songs, readings, notes, and announcements, together."

## 5. Go-To-Market: Self-Serve Only

No sales calls, no demos-by-appointment. The entire funnel should be completable by whoever plans the service, alone, on their phone or laptop:

1. **Landing page → Start Free Trial** (email + password or Google sign-in). No credit card at signup.
2. **Guided first-run:** create the church "tenant," add first songs, add a Bible reading or announcement to a service, invite team members via a shareable link/QR code (no seat limit to worry about).
3. **Trial-to-paid nudge:** timed around their first real live service, not around a feature wall.
4. **Word-of-mouth loop:** musicians and service coordinators who use Hosanna at one church and serve at another become the distribution channel.
5. **Content/SEO:** comparison pages ("Hosanna vs Planning Center Services," "Hosanna vs OnSong"), ChordPro SEO, and Portuguese-language content for the beachhead market — now also content around "order of service planning," since that's a second real search intent this feature opens up.
6. **Partnerships (later, not launch):** denominational networks or Bible institutes could bulk-refer churches, kept informal/referral-based to protect margins and simplicity.

## 6. Unit Economics (early-stage assumptions)

| Metric | Assumption | Note |
|---|---|---|
| Price | €12/month or ~€120/year per church, + €12/mo per additional campus | Flat, unlimited users |
| Hosting/infra cost per tenant | Low — shared Postgres/Node infra, near-zero marginal cost per added musician user | Adding non-song content (readings/announcements) is still lightweight text data, doesn't materially change infra cost |
| CAC | Near-zero at launch (organic/content/word-of-mouth) | No sales team |
| Expansion revenue | Only via the Multi-Campus lever | By design — no per-seat expansion |
| Revenue at scale (illustrative) | 100 churches ≈ €14,400/yr · 500 churches ≈ €72,000/yr | Assumes minimal multi-campus mix; multi-campus adoption pushes this higher |
| Churn risk | Concentrated around volunteer/staff leadership turnover at a church | Mitigate with strong onboarding docs/handoff notes built into the product itself |

Because there's no per-seat expansion revenue, growth is driven by **logo count**, which is why self-serve signup and word-of-mouth (now from two audiences — musicians and service planners) matter more here than in a typical per-seat SaaS.

## 7. Optional Future Revenue Levers (don't compromise the "one price" story)
- **Done-for-you song/service library import:** one-time paid migration service.
- **Church network/denomination plan:** bulk flat pricing across multiple affiliated churches.
- Avoid: per-musician add-ons, storage tiers, or paywalling any service-content type (songs vs. readings vs. announcements) — this would directly contradict the "whole service, one price" positioning.

## 8. Key Metrics to Track Post-Launch
- Trial → paid conversion rate
- Time-to-first-service-created (activation signal)
- % of services that include non-song content (readings/announcements/notes) — validates whether the new feature is actually used, not just marketed
- Musicians + service-content contributors invited per church (adoption depth, even though unbilled)
- Logo churn vs. expected leadership-turnover churn
- % of new signups from referral vs. content/SEO vs. direct

## 9. Risks & Open Questions
- **Megachurch/multi-site outlier:** mitigated by the Multi-Campus lever, built in from day one rather than retrofitted later.
- **CCLI/licensing confusion:** churches may expect Hosanna to include song licensing. Messaging must be explicit that Hosanna is a planning/organization tool, not a licensing product.
- **Scope creep risk on the new feature:** "Bible readings, lectures, announcements, etc." can expand indefinitely (prayer requests, offering notes, media cues...). Worth defining a clear v1 scope (e.g. scripture reference + text, free-text notes, announcement blocks) rather than trying to model every possible service element at launch.
- **Localization:** pricing in local currency and PT-PT/PT-BR copy should be a near-term priority given the beachhead market, not a "later" item.