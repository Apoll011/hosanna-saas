import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import legalContent from "@/content/legal.md?raw";

import { Footer, Nav, StaffLines } from "@/components/hosanna/HosannaLanding";
import { getSEOMeta } from "@/lib/seo";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: getSEOMeta({
      title: "Documentos Legais | Hosanna Studio",
      description:
        "Termos de Serviço, Política de Privacidade e outros documentos legais do Hosanna.",
      url: "https://hosanna.studio/legal",
    }),
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />

      <main>
        {/* Hero Section styled like the main landing page */}
        <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="absolute inset-0 text-gold/40">
            <StaffLines className="top-24" />
            <StaffLines className="bottom-24" />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Documentos Legais
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
              Termos de serviço, política de privacidade e os nossos compromissos contigo e com a
              tua igreja.
            </p>
          </div>
        </section>

        {/* Markdown Content Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="prose prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-gold hover:prose-a:text-(--gold)/80 prose-a:transition-colors prose-primary max-w-none">
              <ReactMarkdown>{legalContent}</ReactMarkdown>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
