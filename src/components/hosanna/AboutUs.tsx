import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useI18n } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, ExternalLink, Palette } from "lucide-react";
import { useEffect } from "react";
import { StaffLines } from "./HosannaLanding";
import tiagoPhoto from "@/assets/tiago_headshot.webp";
import eberPhoto from "@/assets/eber_headshot.webp";

/* ------------------------------------------------------------------ */
/*  Scroll reveal hook (mirrors ContactForm's local copy)             */
/* ------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "-40px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL + "/new";

/* ------------------------------------------------------------------ */
/*  Founder card                                                      */
/* ------------------------------------------------------------------ */
function FounderCard({
  photo,
  name,
  role,
  bio,
  quote,
}: {
  photo: string;
  name: string;
  role: string;
  bio: string;
  quote: string;
}) {
  return (
    <div className="reveal rounded-3xl border border-border bg-card p-8 md:p-10">
      <img src={photo} alt={name} className="h-20 w-20 rounded-full object-cover" />
      <h3 className="mt-6 font-display text-2xl text-foreground">{name}</h3>
      <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-gold">{role}</div>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{bio}</p>
      <p className="mt-5 border-l-2 border-primary/20 pl-4 text-sm italic text-primary-dark">
        “{quote}”
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  About page                                                        */
/* ------------------------------------------------------------------ */
export function AboutUs() {
  useReveal();
  const { t } = useI18n();

  return (
    <div className="bg-[#f8fafc] min-h-screen selection:bg-primary/10 font-sans">
      {/* Hero Header */}
      <section className="bg-hero-gradient pt-40 pb-12 text-white overflow-hidden relative -mt-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 text-white/10">
          <StaffLines className="top-24 opacity-40" />
          <StaffLines className="bottom-12 opacity-20" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-200 border border-white/10">
              {t("about.eyebrow")}
            </div>
            <LanguageSelector />
          </div>
          <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-display mb-8 tracking-tight">
            {t("about.heroTitleStart")}{" "}
            <span className="text-blue-300">{t("about.heroTitleHighlight")}</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-2xl mx-auto">
            {t("about.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="reveal text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("about.storyEyebrow")}
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-primary md:text-4xl">
              {t("about.storyTitle")}
            </h2>
          </div>

          <div className="reveal mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>{t("about.storyP1")}</p>
            <p>{t("about.storyP2")}</p>
            <p>{t("about.storyP3")}</p>
          </div>

          <div className="reveal mt-8 flex justify-center">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              {t("about.churchLinkLabel")}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("about.founderIntroEyebrow")}
            </div>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              {t("about.founderIntroTitle")}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <FounderCard
              photo={tiagoPhoto}
              name={t("about.tiagoName")}
              role={t("about.tiagoRole")}
              bio={t("about.tiagoBio")}
              quote={t("about.tiagoQuote")}
            />
            <FounderCard
              photo={eberPhoto}
              name={t("about.eberName")}
              role={t("about.eberRole")}
              bio={t("about.eberBio")}
              quote={t("about.eberQuote")}
            />
          </div>

          <div className="reveal mt-10 flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-gold" /> {t("about.tiagoRole")}
            </div>
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-gold" /> {t("about.eberRole")}
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="reveal font-display text-2xl leading-snug text-primary md:text-3xl">
            {t("about.pullQuote")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-hero-gradient py-16 text-white md:py-20">
        <div className="absolute inset-0 text-gold/30">
          <StaffLines className="top-10" />
          <StaffLines className="bottom-10" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="reveal font-display text-3xl leading-tight tracking-tight md:text-5xl">
            {t("about.ctaTitle")}
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl text-blue-50/70 md:text-lg">
            {t("about.ctaSubtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row reveal">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-10 text-lg font-medium text-primary shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-50"
            >
              <a href={dashboardUrl}>
                {t("about.ctaStart")} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 px-10 text-lg font-medium text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              <Link to="/contact">{t("about.ctaContact")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
