import ReactMarkdown from "react-markdown";

import ppContentEn from "@/content/pp.en.md?raw";
import ppContentEs from "@/content/pp.es.md?raw";
import ppContentPt from "@/content/pp.pt.md?raw";

import { Footer, Nav, StaffLines } from "@/components/hosanna/HosannaLanding";
import { useI18n, type Language } from "@/lib/i18n";

const ppDocuments: Record<Language, string> = {
  pt: ppContentPt,
  en: ppContentEn,
  es: ppContentEs,
};

const ppMeta: Record<Language, { heading: string; subtitle: string }> = {
  pt: {
    heading: "Política de Privacidade",
    subtitle:
      "Como protegemos os teus dados, a privacidade da tua igreja e os dados da conta Google.",
  },
  en: {
    heading: "Privacy Policy",
    subtitle: "How we protect your data, your church's privacy, and Google account data.",
  },
  es: {
    heading: "Política de Privacidad",
    subtitle:
      "Cómo protegemos tus datos, la privacidad de tu iglesia y los datos de la cuenta de Google.",
  },
};

export function Component() {
  const { language } = useI18n();
  const currentLang = (language in ppDocuments ? language : "pt") as Language;
  const content = ppDocuments[currentLang] || ppDocuments.pt;
  const meta = ppMeta[currentLang] || ppMeta.pt;

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
