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
    title: "Hosanna - Planeia o teu louvor. Organiza a tua música.",
    description:
      "O Hosanna é uma plataforma de planeamento de louvor que ajuda as igrejas a organizar a sua biblioteca musical, preparar cultos e dar a cada músico acesso imediato às canções de que precisa.",
    url: SITE_URL,
  },
  "/about": {
    title: "Sobre Nós | Hosanna Studio",
    description:
      "Conheça a história por trás do Hosanna: dois primos, uma igreja, e a missão de organizar o louvor.",
    url: `${SITE_URL}/about`,
  },
  "/chordpro": {
    title: "Guia ChordPro | Hosanna Studio",
    description:
      "Aprenda a escrever cifras inteligentes com o padrão ChordPro. O formato de excelência para a gestão de repertório cristão.",
    url: `${SITE_URL}/chordpro`,
  },
  "/contact": {
    title: "Contactos | Hosanna Studio",
    description: "Fale com a equipa do Hosanna. Dúvidas, sugestões ou suporte para a sua igreja.",
    url: `${SITE_URL}/contact`,
  },
  "/legal": {
    title: "Documentos Legais | Hosanna Studio",
    description:
      "Termos de Serviço, Política de Privacidade e outros documentos legais do Hosanna.",
    url: `${SITE_URL}/legal`,
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
