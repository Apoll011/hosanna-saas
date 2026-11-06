// Generates the static SEO artifacts from the built index.html:
//   - per-route HTML shells (dist/<route>/index.html) with swapped meta tags
//   - a BreadcrumbList JSON-LD block per route
//   - dist/sitemap.xml (+ copy under public/ for deploys that skip prerender)
//
//   node scripts/prerender.mjs
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_URL } from "./seo-routes.mjs";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, "dist");
const PUBLIC = join(ROOT, "public");
const INDEX = join(DIST, "index.html");

const LAST_MOD = new Date().toISOString().slice(0, 10);

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Breadcrumb label derived from the route title, e.g. "ChordPro Guide". */
function breadcrumbName(route) {
  if (route.path === "/") return "Hosanna";
  return route.title.replace(/\s*\|\s*Hosanna.*$/, "").trim();
}

function breadcrumbJsonLd(route) {
  const itemListElement = [{ "@type": "ListItem", position: 1, name: "Hosanna", item: SITE_URL }];
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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

function shellFor(route, template) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const url = route.url;
  const keywords = route.keywords ? escapeHtml(route.keywords) : null;

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

  if (keywords) {
    replacements.push([
      /<meta\s+name="keywords"\s+content="[^"]*"\s*\/>/,
      `<meta name="keywords" content="${keywords}" />`,
    ]);
  }

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

  const sitemap = sitemapXml();
  // Keep a short GSC note at the top (comments are fine in XML for humans;
  // Google ignores them). Studio lives on another host — linked from robots.txt.
  const sitemapWithNote = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Google Search Console: submit this file for hosanna.live AND also
     https://studio.hosanna.live/sitemap.xml (use a Domain property for hosanna.live
     so Studio is covered, or add studio as a second URL-prefix property).
     Both sitemaps are listed in https://hosanna.live/robots.txt -->
${sitemap.replace(/^<\?xml[^>]*>\n/, "")}`;
  await writeFile(join(DIST, "sitemap.xml"), sitemapWithNote);
  await writeFile(join(PUBLIC, "sitemap.xml"), sitemapWithNote);
  console.log("  sitemap.xml written (dist + public)");
  console.log("  remember: Studio sitemap → https://studio.hosanna.live/sitemap.xml");

  // 404 page: same shell as home so unknown paths render the app (which shows
  // the TanStack not-found page client-side).
  await writeFile(join(DIST, "404.html"), template);
  console.log("  404.html written");
}

main().catch((error) => {
  console.error("prerender failed:", error);
  process.exit(1);
});
