// Generates the static SEO artifacts from the built index.html:
//   - per-route HTML shells (dist/<route>/index.html) with swapped meta tags
//   - a BreadcrumbList JSON-LD block per route
//   - dist/sitemap.xml (same ROUTES list, so it can never drift out of sync)
//
// Keep ROUTE_META in src/lib/seo.ts and this list in sync.
//
//   node scripts/prerender.mjs
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, "dist");
const INDEX = join(DIST, "index.html");
const SITE_URL = "https://hosanna.live";

const ROUTES = [
  {
    path: "/",
    title: "Hosanna - Planeia o teu louvor. Organiza a tua música.",
    description:
      "O Hosanna é uma plataforma de planeamento de louvor que ajuda as igrejas a organizar a sua biblioteca musical, preparar cultos e dar a cada músico acesso imediato às canções de que precisa.",
    url: SITE_URL,
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/chordpro",
    title: "Guia ChordPro | Hosanna Studio",
    description:
      "Aprenda a escrever cifras inteligentes com o padrão ChordPro. O formato de excelência para a gestão de repertório cristão.",
    url: `${SITE_URL}/chordpro`,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/about",
    title: "Sobre Nós | Hosanna Studio",
    description:
      "Conheça a história por trás do Hosanna: dois primos, uma igreja, e a missão de organizar o louvor.",
    url: `${SITE_URL}/about`,
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/contact",
    title: "Contactos | Hosanna Studio",
    description: "Fale com a equipa do Hosanna. Dúvidas, sugestões ou suporte para a sua igreja.",
    url: `${SITE_URL}/contact`,
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/legal",
    title: "Documentos Legais | Hosanna Studio",
    description:
      "Termos de Serviço, Política de Privacidade e outros documentos legais do Hosanna.",
    url: `${SITE_URL}/legal`,
    changefreq: "yearly",
    priority: "0.3",
  },
];

const LAST_MOD = new Date().toISOString().slice(0, 10);

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Breadcrumb label derived from the route title, e.g. "Guia ChordPro". */
function breadcrumbName(route) {
  if (route.path === "/") return "Hosanna";
  return route.title.replace(/\s*\|\s*Hosanna Studio\s*$/, "");
}

function breadcrumbJsonLd(route) {
  const itemListElement = [
    { "@type": "ListItem", position: 1, name: "Hosanna", item: SITE_URL },
  ];
  if (route.path !== "/") {
    itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: breadcrumbName(route),
      item: route.url,
    });
  }
  const payload = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
  return `<script type="application/ld+json">${JSON.stringify(payload)}</script>`;
}

function sitemapXml() {
  const urls = ROUTES.map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function shellFor(route, template) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const url = route.url;

  // Vite preserves the source formatting, so these tags can span multiple
  // lines; `\s` matches those newlines. Each pattern consumes the full
  // self-closing tag so the replacement is a clean single-line tag.
  const replacements = [
    [/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`],
    [
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    ],
    [
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
    ],
    [
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    ],
    [
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${url}" />`,
    ],
    [
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${title}" />`,
    ],
    [
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`,
    ],
    [/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`],
  ];

  let html = template;
  for (const [pattern, replacement] of replacements) {
    const match = html.match(pattern);
    if (!match) {
      console.warn(`  ! pattern not found: ${pattern}`);
      continue;
    }
    html = html.replace(match[0], replacement);
  }

  // Route-level structured data (breadcrumbs) right before </head>.
  html = html.replace("</head>", `    ${breadcrumbJsonLd(route)}\n  </head>`);
  return html;
}

async function main() {
  const template = await readFile(INDEX, "utf8");

  for (const route of ROUTES) {
    const html = shellFor(route, template);
    if (route.path === "/") {
      await writeFile(INDEX, html);
      console.log(`  / -> dist/index.html`);
      continue;
    }
    const outDir = join(DIST, route.path.replace(/^\//, ""));
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html);
    console.log(`  ${route.path} -> dist${route.path}/index.html`);
  }

  await writeFile(join(DIST, "sitemap.xml"), sitemapXml());
  console.log("  sitemap.xml written");

  // 404 page: same shell as home so unknown paths render the app (which shows
  // the TanStack not-found page client-side).
  await writeFile(join(DIST, "404.html"), template);
  console.log("  404.html written");
}

main().catch((error) => {
  console.error("prerender failed:", error);
  process.exit(1);
});
