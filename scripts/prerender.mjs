// Generates per-route static HTML shells (dist/<route>/index.html) from the
// built index.html by swapping the SEO meta tags. Keep ROUTE_META in
// src/lib/seo.ts and this list in sync.
//
//   node scripts/prerender.mjs
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, "dist");
const INDEX = join(DIST, "index.html");

const ROUTES = [
  {
    path: "/",
    title: "Hosanna - Planeia o teu louvor. Organiza a tua música.",
    description:
      "O Hosanna é uma plataforma de planeamento de louvor que ajuda as igrejas a organizar a sua biblioteca musical, preparar cultos e dar a cada músico acesso imediato às canções de que precisa.",
    url: "https://hosanna.studio",
  },
  {
    path: "/about",
    title: "Sobre Nós | Hosanna Studio",
    description:
      "Conheça a história por trás do Hosanna: dois primos, uma igreja, e a missão de organizar o louvor.",
    url: "https://hosanna.studio/about",
  },
  {
    path: "/chordpro",
    title: "Guia ChordPro | Hosanna Studio",
    description:
      "Aprenda a escrever cifras inteligentes com o padrão ChordPro. O formato de excelência para a gestão de repertório cristão.",
    url: "https://hosanna.studio/chordpro",
  },
  {
    path: "/contact",
    title: "Contactos | Hosanna Studio",
    description: "Fale com a equipa do Hosanna. Dúvidas, sugestões ou suporte para a sua igreja.",
    url: "https://hosanna.studio/contact",
  },
  {
    path: "/legal",
    title: "Documentos Legais | Hosanna Studio",
    description:
      "Termos de Serviço, Política de Privacidade e outros documentos legais do Hosanna.",
    url: "https://hosanna.studio/legal",
  },
];

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

  // 404 page: same shell as home so unknown paths render the app (which shows
  // the TanStack not-found page client-side).
  await writeFile(join(DIST, "404.html"), template);
  console.log("  404.html written");
}

main().catch((error) => {
  console.error("prerender failed:", error);
  process.exit(1);
});
