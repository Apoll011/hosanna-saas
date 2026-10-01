import ReactMarkdown from "react-markdown";

import ppContentEn from "@/content/pp.en.md?raw";
import ppContentEs from "@/content/pp.es.md?raw";
import ppContentPt from "@/content/pp.pt.md?raw";

import { Footer, Nav } from "@/components/hosanna/HosannaLanding";
import { PageHeader } from "@/components/hosanna/chrome";
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
