import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

import legalContentEn from "@/content/legal.en.md?raw";
import legalContentEs from "@/content/legal.es.md?raw";
import legalContentPt from "@/content/legal.pt.md?raw";

import { Footer, Nav, StaffLines } from "@/components/hosanna/HosannaLanding";
import { useI18n, type Language } from "@/lib/i18n";
import { getSEOMeta } from "@/lib/seo";

const legalDocuments: Record<Language, string> = {
  pt: legalContentPt,
  en: legalContentEn,
  es: legalContentEs,
};

const legalMeta: Record<
  Language,
  { title: string; description: string; heading: string; subtitle: string }
> = {
  pt: {
    title: "Documentos Legais | Hosanna Studio",
    description:
      "Termos de Serviço, Política de Privacidade e outros documentos legais do Hosanna.",
    heading: "Documentos Legais",
    subtitle:
      "Termos de serviço, política de privacidade e os nossos compromissos contigo e com a tua igreja.",
  },
  en: {
    title: "Legal Documents | Hosanna Studio",
    description: "Terms of Service, Privacy Policy, and other legal documents for Hosanna.",
    heading: "Legal Documents",
    subtitle: "Terms of service, privacy policy, and our commitments to you and your church.",
  },
  es: {
    title: "Documentos Legales | Hosanna Studio",
    description:
      "Términos de Servicio, Política de Privacidad y otros documentos legales de Hosanna.",
    heading: "Documentos Legales",
    subtitle:
      "Términos de servicio, política de privacidad y nuestros compromisos contigo y con tu iglesia.",
  },
};

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
  const { language } = useI18n();
  const currentLang = (language in legalDocuments ? language : "pt") as Language;
  const content = legalDocuments[currentLang] || legalDocuments.pt;
  const meta = legalMeta[currentLang] || legalMeta.pt;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/10">
      <Nav />
      <div className="bg-[#f8fafc] min-h-screen selection:bg-primary/10 font-sans">
        <section className="bg-hero-gradient pt-40 pb-12 text-white overflow-hidden relative -mt-30">
          <div className="absolute inset-0 text-gold/40">
            <StaffLines className="top-24" />
            <StaffLines className="bottom-24" />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              {meta.heading}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
              {meta.subtitle}
            </p>
          </div>
        </section>

        {/* Markdown Content Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="prose prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-gold hover:prose-a:text-(--gold)/80 prose-a:transition-colors prose-primary max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
