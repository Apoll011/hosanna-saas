import { translations, type Language } from "./i18n";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function getDefaultSEO(lang: Language = "pt"): SEOConfig {
  const dict = translations[lang] || translations.pt;
  return {
    title: dict.seo.defaultTitle,
    description: dict.seo.defaultDescription,
    keywords: dict.seo.defaultKeywords,
    image: "https://hosanna.live/og-image.png",
    url: "https://hosanna.live",
    type: "website",
  };
}

export function getSEOMeta(config?: Partial<SEOConfig>, lang: Language = "pt") {
  const defaults = getDefaultSEO(lang);
  const seo = { ...defaults, ...config };

  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: seo.title },
    { name: "description", content: seo.description },
    { name: "author", content: "Hosanna Studio" },
    ...(seo.keywords ? [{ name: "keywords", content: seo.keywords }] : []),

    // Open Graph
    { property: "og:site_name", content: "Hosanna Studio" },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: seo.type },
    ...(seo.image ? [{ property: "og:image", content: seo.image }] : []),
    ...(seo.url ? [{ property: "og:url", content: seo.url }] : []),

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    ...(seo.image ? [{ name: "twitter:image", content: seo.image }] : []),
    { name: "twitter:site", content: "@hosannastudio" },

    // Theme and robots
    { name: "theme-color", content: "#0f172a" },
    { name: "robots", content: "index, follow" },
  ];
}
