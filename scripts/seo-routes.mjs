/**
 * Single source of route SEO for prerender (sitemap + static HTML shells).
 * Keep in sync with src/lib/seo.ts (client-side navigation meta).
 */
export const SITE_URL = "https://hosanna.live";

export const ROUTES = [
  {
    path: "/",
    title: "Hosanna | Music Songbook App for Live Worship (ChordPro)",
    description:
      "Hosanna is a music songbook app for live worship: ChordPro charts, transpose, metronome, auto-scroll, PDF, offline sync, and Studio service planning for church teams.",
    keywords:
      "hosanna, hosanna music, hosanna songbook, songbook app, music songbook app, live worship app, chordpro, chord chart app, worship planning, cancioneiro digital, cifras",
    url: SITE_URL,
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/chordpro",
    title: "ChordPro Guide | Hosanna Songbook",
    description:
      "Learn ChordPro in Hosanna — the open format behind our music songbook app: chords, directives, grids, tabs, and editor shortcuts for worship teams.",
    url: `${SITE_URL}/chordpro`,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/about",
    title: "About | Hosanna Music Songbook",
    description:
      "Why we built Hosanna: an open-source music songbook and live worship planning app for churches, started by two cousins on a worship team.",
    url: `${SITE_URL}/about`,
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/contact",
    title: "Contact | Hosanna",
    description: "Talk to the Hosanna team — questions about the songbook app, Studio, pricing, or support for your church.",
    url: `${SITE_URL}/contact`,
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Hosanna",
    description: "Hosanna privacy policy: how we protect your data and Google account data.",
    url: `${SITE_URL}/privacy`,
    changefreq: "yearly",
    priority: "0.3",
  },
  {
    path: "/terms",
    title: "Terms of Service | Hosanna",
    description: "Terms of Service for the Hosanna platform and music songbook applications.",
    url: `${SITE_URL}/terms`,
    changefreq: "yearly",
    priority: "0.3",
  },
];
