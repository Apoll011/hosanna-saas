import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useI18n } from "@/lib/i18n";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useEffect } from "react";
import { StaffLines } from "./HosannaLanding";

/* ------------------------------------------------------------------ */
/*  Scroll reveal hook                                                */
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

export function ContactForm() {
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
              {t("contact.eyebrow")}
            </div>
            <LanguageSelector />
          </div>
          <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-display mb-8 tracking-tight">
            {t("contact.heroTitle")}{" "}
            <span className="text-blue-300">{t("contact.heroTitleHighlight")}</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-2xl mx-auto">
            {t("contact.heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="p-12 md:p-16 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side: Info */}
            <div className="space-y-10 reveal">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
                  {t("contact.alwaysReadyTitle")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {t("contact.alwaysReadyDesc")}
                </p>
              </div>

              <div className="grid gap-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg border border-border text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-primary">
                      {t("contact.emailTitle")}
                    </h3>
                    <p className="text-muted-foreground text-lg break-all">
                      hosanna.songbook@gmail.com
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.emailResponseTime")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg border border-border text-primary shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-primary">
                      {t("contact.socialTitle")}
                    </h3>
                    <p className="text-muted-foreground text-lg">@hosanna.studio</p>
                    <div className="flex gap-6 mt-3 text-base font-semibold text-primary">
                      <span className="cursor-pointer hover:underline">Instagram</span>
                      <span className="cursor-pointer hover:underline">YouTube</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-border rounded-lg">
                <h4 className="font-display font-bold text-xl mb-4 text-primary">
                  {t("common.activeDevelopment")}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{t("common.activeDevDesc")}</p>
              </div>
            </div>
            {/* Right Side: Form */}
            <div className="bg-white p-8 md:p-10 lg:p-12 rounded-3xl shadow-soft border border-blue-50 reveal">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="text-sm font-bold ml-1 uppercase tracking-widest text-primary/40">
                      {t("contact.nameLabel")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.namePlaceholder")}
                      className="w-full px-6 py-3 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primary transition-all outline-none text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold ml-1 uppercase tracking-widest text-primary/40">
                      {t("contact.churchLabel")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.churchPlaceholder")}
                      className="w-full px-6 py-3 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primary transition-all outline-none text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold ml-1 uppercase tracking-widest text-primary/40">
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full px-6 py-3 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primary transition-all outline-none text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold ml-1 uppercase tracking-widest text-primary/40">
                    {t("contact.subjectLabel")}
                  </label>
                  <div className="relative">
                    <select className="w-full px-6 py-3 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primary transition-all outline-none appearance-none text-lg">
                      <option>{t("contact.subjectTechnical")}</option>
                      <option>{t("contact.subjectFeature")}</option>
                      <option>{t("contact.subjectPricing")}</option>
                      <option>{t("contact.subjectPartnership")}</option>
                      <option>{t("contact.subjectOther")}</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Send className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold ml-1 uppercase tracking-widest text-primary/40">
                    {t("contact.messageLabel")}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-primary transition-all outline-none resize-none text-lg"
                  ></textarea>
                </div>

                <Button className="w-full py-6 rounded-2xl bg-primary text-white font-bold text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group">
                  {t("contact.sendButton")}
                  <Send className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-2 leading-relaxed">
                  {t("contact.termsConsent")}{" "}
                  <span className="underline cursor-pointer">{t("common.privacyPolicy")}</span>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
