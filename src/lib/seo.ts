interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const defaultSEO: SEOConfig = {
  title: "Hosanna | O Futuro do Planeamento de Louvor para Igrejas",
  description:
    "Organize a sua biblioteca de música, planeie cultos e equipe os seus músicos com as ferramentas certas. O Hosanna é o software de gestão de louvor mais intuitivo para igrejas modernas.",
  keywords:
    "planeamento de louvor, cifras, chordpro, gestão de igreja, equipa de louvor, repertório cristão, software para igrejas, ministério de louvor",
  image: "https://hosanna.studio/og-image.jpg",
  url: "https://hosanna.studio",
  type: "website",
};

export function getSEOMeta(config?: Partial<SEOConfig>) {
  const seo = { ...defaultSEO, ...config };

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
