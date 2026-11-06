/**
 * Static-site SEO.
 *
 * Keep titles/descriptions aligned with scripts/seo-routes.mjs (prerender +
 * sitemap). The static HTML shell carries the initial tags; `applyRouteMeta`
 * keeps them in sync on client-side navigation.
 */

export const SITE_URL = "https://hosanna.live";
export const OG_IMAGE = "https://hosanna.live/og-image.jpg";

export interface RouteMeta {
  title: string;
  description: string;
  url: string;
  keywords?: string;
}

export const ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "Hosanna | Music Songbook App for Live Worship (ChordPro)",
    description:
      "Hosanna is a music songbook app for live worship: ChordPro charts, transpose, metronome, auto-scroll, PDF, offline sync, and Studio service planning for church teams.",
    url: SITE_URL,
    keywords:
      "hosanna, hosanna music, hosanna songbook, songbook app, music songbook app, live worship app, chordpro, chord chart app, worship planning, cancioneiro digital, repertório digital, coletânea, repertorio, cancionero digital, cifras",
  },
  "/about": {
    title: "About | Hosanna Music Songbook",
    description:
      "Why we built Hosanna: an open-source music songbook and live worship planning app for churches, started by two cousins on a worship team.",
    url: `${SITE_URL}/about`,
  },
  "/chordpro": {
    title: "ChordPro Guide | Hosanna Songbook",
    description:
      "Learn ChordPro in Hosanna — the open format behind our music songbook app: chords, directives, grids, tabs, and editor shortcuts for worship teams.",
    url: `${SITE_URL}/chordpro`,
  },
  "/contact": {
    title: "Contact | Hosanna",
    description:
      "Talk to the Hosanna team — questions about the songbook app, Studio, pricing, or support for your church.",
    url: `${SITE_URL}/contact`,
  },
  "/privacy": {
    title: "Privacy Policy | Hosanna",
    description: "Hosanna privacy policy: how we protect your data and Google account data.",
    url: `${SITE_URL}/privacy`,
  },
  "/terms": {
    title: "Terms of Service | Hosanna",
    description: "Terms of Service for the Hosanna platform and music songbook applications.",
    url: `${SITE_URL}/terms`,
  },
};

export function getRouteMeta(pathname: string): RouteMeta {
  return ROUTE_META[pathname] ?? ROUTE_META["/"];
}

function setTag(selector: string, create: () => HTMLElement, content: string): void {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  if (el.tagName === "TITLE") {
    el.textContent = content;
  } else {
    el.setAttribute("content", content);
  }
}

function setMeta(nameOrProperty: string, content: string): void {
  const attr = nameOrProperty.includes(":") ? "property" : "name";
  setTag(
    `meta[${attr}="${nameOrProperty}"]`,
    () => {
      const meta = document.createElement("meta");
      meta.setAttribute(attr, nameOrProperty);
      return meta;
    },
    content,
  );
}

function setCanonical(href: string): void {
  const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (existing) {
    existing.setAttribute("href", href);
    return;
  }
  const link = document.createElement("link");
  link.setAttribute("rel", "canonical");
  link.setAttribute("href", href);
  document.head.appendChild(link);
}

/** Apply a route's meta tags to the live document (client-side navigation). */
export function applyRouteMeta(meta: RouteMeta): void {
  if (typeof document === "undefined") return;
  document.title = meta.title;
  setMeta("description", meta.description);
  if (meta.keywords) setMeta("keywords", meta.keywords);
  setMeta("og:title", meta.title);
  setMeta("og:description", meta.description);
  setMeta("og:url", meta.url);
  setMeta("og:image", OG_IMAGE);
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);
  setMeta("twitter:image", OG_IMAGE);
  setCanonical(meta.url);
}
