import ReactMarkdown from "react-markdown";

import tosContentEn from "@/content/tos.en.md?raw";
import tosContentEs from "@/content/tos.es.md?raw";
import tosContentPt from "@/content/tos.pt.md?raw";

import { Footer, Nav, StaffLines } from "@/components/hosanna/HosannaLanding";
import { useI18n, type Language } from "@/lib/i18n";

const tosDocuments: Record<Language, string> = {
  pt: tosContentPt,
  en: tosContentEn,
  es: tosContentEs,
};

const tosMeta: Record<Language, { heading: string; subtitle: string }> = {
  pt: {
    heading: "Termos de Serviço",
    subtitle: "Os termos e condições de utilização da plataforma e aplicações Hosanna.",
  },
  en: {
    heading: "Terms of Service",
    subtitle: "Terms and conditions for using Hosanna applications and services.",
  },
  es: {
    heading: "Términos de Servicio",
    subtitle: "Los términos y condiciones de uso de la plataforma y aplicaciones Hosanna.",
  },
};

export function Component() {
  const { language } = useI18n();
  const currentLang = (language in tosDocuments ? language : "pt") as Language;
  const content = tosDocuments[currentLang] || tosDocuments.pt;
  const meta = tosMeta[currentLang] || tosMeta.pt;

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
