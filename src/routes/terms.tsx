import ReactMarkdown from "react-markdown";

import tosContentEn from "@/content/tos.en.md?raw";
import tosContentEs from "@/content/tos.es.md?raw";
import tosContentPt from "@/content/tos.pt.md?raw";

import { Footer, Nav } from "@/components/hosanna/HosannaLanding";
import { PageHeader } from "@/components/hosanna/chrome";
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
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main id="content">
        <PageHeader title={meta.heading} lede={meta.subtitle} />
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="prose prose-slate max-w-[65ch] prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
