/**
 * Static-site SEO.
 *
 * The per-route meta lives here (single source of truth) instead of in SSR
 * route `head()` functions: the static HTML shell (index.html + the per-route
 * shells emitted by scripts/prerender.mjs) carries the initial tags, and
 * `applyRouteMeta` keeps them in sync on client-side navigation.
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
    title: "Hosanna | Cancioneiro ChordPro e planeamento de louvor",
    description:
      "Cancioneiro digital ChordPro para igrejas: transposição, capo, metrónomo, auto-scroll, diagramas, PDF, importação com IA e sincronização offline — com Studio para planear cultos.",
    url: SITE_URL,
    keywords:
      "cancioneiro digital, songbook app, chordpro, cifras, metrónomo, auto-scroll, planeamento de louvor, setlist igreja",
  },
  "/about": {
    title: "Sobre Nós | Hosanna",
    description:
      "A história do Hosanna: dois primos a construir um cancioneiro ChordPro e ferramentas de planeamento de louvor para a sua igreja — e para outras.",
    url: `${SITE_URL}/about`,
  },
  "/chordpro": {
    title: "Guia ChordPro | Hosanna",
    description:
      "Como escrever cifras ChordPro no Hosanna: sintaxe, diretivas, grelhas, tablatura e atalhos do editor para a equipa de louvor.",
    url: `${SITE_URL}/chordpro`,
  },
  "/contact": {
    title: "Contactos | Hosanna",
    description: "Fale com a equipa do Hosanna. Dúvidas, sugestões ou suporte para a sua igreja.",
    url: `${SITE_URL}/contact`,
  },
  "/privacy": {
    title: "Política de Privacidade | Hosanna",
    description:
      "Política de Privacidade do Hosanna: como protegemos os teus dados e os dados da conta Google.",
    url: `${SITE_URL}/privacy`,
  },
  "/terms": {
    title: "Termos de Serviço | Hosanna",
    description: "Termos de Serviço e Condições de Utilização da plataforma e aplicações Hosanna.",
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
