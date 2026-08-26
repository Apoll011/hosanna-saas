import dashboardImg from "@/assets/dashboard-preview.jpg";
import logo from "@/assets/hosanna_logo.png";
import mobileImg from "@/assets/mobile-preview.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import LightRays from "@/components/ui/Scanner";
import { useReveal } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  FileDown,
  FolderTree,
  Mail,
  Menu,
  Monitor,
  Music,
  Play,
  Search,
  ShieldCheck,
  Sliders,
  Smartphone,
  Sun,
  Users,
  WifiOff,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MigrationSection } from "../ui/MigrationSection";
import { SectionHeader } from "../ui/SectionHeader";
import { PlayStoreButton } from "../ui/StoreButton";

/* ------------------------------------------------------------------ */
/*  Logo                                                              */
/* ------------------------------------------------------------------ */
function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" hash="top" className={cn("flex items-center", className)}>
      <img
        src={logo}
        alt="Hosanna Studio"
        className="w-14 h-14 rounded-xl object-contain transition-transform hover:scale-105 hover:rotate-2"
      />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                               */
/* ------------------------------------------------------------------ */
const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL + "/new";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const NAV = [
    { label: t("landing.nav.features"), href: "/#features", isInternal: false },
    { label: t("landing.nav.chordpro"), href: "/chordpro", isInternal: true },
    { label: t("landing.nav.pricing"), href: "/#pricing", isInternal: false },
    { label: t("landing.nav.contact"), href: "/contact", isInternal: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky -top-10 z-50">
      <EarlyAccessBanner />
      <header
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-background/85 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:grid md:grid-cols-3">
          <div className="flex justify-start">
            <Logo />
          </div>
          <nav className="hidden items-center justify-center gap-8 md:flex">
            {NAV.map((n) =>
              n.isInternal ? (
                <Link
                  key={n.href}
                  to={n.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    scrolled
                      ? "text-foreground hover:text-foreground/80"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    scrolled
                      ? "text-foreground hover:text-foreground/80"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {n.label}
                </a>
              ),
            )}
          </nav>
          <div className="hidden items-center justify-end gap-4 md:flex">
            <LanguageSelector />
            <Button
              asChild
              className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <a href={dashboardUrl}>{t("landing.nav.tryFree")}</a>
            </Button>
          </div>
          <div className="flex items-center justify-end gap-2 md:hidden">
            <LanguageSelector />
            <button
              className={cn("transition-colors p-1.5", scrolled ? "text-foreground" : "text-white")}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((n) =>
                n.isInternal ? (
                  <Link
                    key={n.href}
                    to={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                  >
                    {n.label}
                  </a>
                ),
              )}
              <Button
                asChild
                className="mt-2 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <a href={dashboardUrl} onClick={() => setOpen(false)}>
                  {t("landing.nav.tryFree")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative staff lines                                            */
/* ------------------------------------------------------------------ */
export function StaffLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 200"
      className={cn("pointer-events-none absolute inset-x-0", className)}
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 25} Q 300 ${20 + i * 25} 600 ${40 + i * 25} T 1200 ${40 + i * 25}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient text-primary-foreground -mt-30 pt-30"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1.5}
          rayLength={4.5}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className="absolute inset-0 text-gold/40 z-0">
        <StaffLines className="top-24" />
        <StaffLines className="bottom-24" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-26 md:px-8 md:pb-32 md:pt-18">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90">
            {t("landing.hero.badge")}
          </div>
          <h1 className="mt-8 font-display text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl reveal">
            {t("landing.hero.titleStart")}{" "}
            <span className="text-blue-300">{t("landing.hero.titleHighlight")}</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-blue-50/80 md:text-xl reveal">
            {t("landing.hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row reveal">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white px-10 text-lg font-semibold text-primary shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-50"
            >
              <a href={dashboardUrl}>
                {t("landing.hero.ctaStart")} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border-white/30 bg-white/5 px-10 text-lg text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              <a href="#how">
                <Play className="mr-2 h-5 w-5 fill-current" />
                {t("landing.hero.ctaDemo")}
              </a>
            </Button>
          </div>
        </div>

        {/* Mockups */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="relative">
            <img
              src={dashboardImg}
              alt={t("landing.hero.dashboardAlt")}
              width={1600}
              height={1104}
              className="w-full rounded-2xl"
            />
            <img
              src={mobileImg}
              alt={t("landing.hero.mobileAlt")}
              width={800}
              height={1408}
              loading="lazy"
              className="absolute -bottom-10 -right-4 hidden w-48 rounded-2xl md:block md:w-60 lg:-right-8 lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Problem section                                                   */
/* ------------------------------------------------------------------ */
function Problem() {
  const { t, dict } = useI18n();

  return (
    <section className="relative bg-background py-16 md:py-16 font-sans">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.problem.eyebrow")} title={t("landing.problem.title")}>
          {t("landing.problem.description")}
        </SectionHeader>
        <div className="reveal mt-16 grid gap-8 md:grid-cols-3">
          {dict.landing.problem.cards.map((c: { title: string; body: string }) => (
            <div
              key={c.title}
              className="rounded-3xl border border-blue-50 bg-white p-8 text-center transition-all hover:shadow-lg group shadow-sm"
            >
              <h3 className="font-display text-2xl text-primary mb-3">{c.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-16 text-center">
          <p className="font-display text-3xl md:text-4xl italic text-primary max-w-3xl mx-auto leading-tight">
            {t("landing.problem.quote")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Two Apps section                                                  */
/* ------------------------------------------------------------------ */
function TwoApps() {
  const { t, dict } = useI18n();

  return (
    <section id="features" className="relative bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.twoApps.eyebrow")} title={t("landing.twoApps.title")}>
          {t("landing.twoApps.description")}
        </SectionHeader>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Studio */}
          <div className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Monitor className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t("landing.twoApps.dashboardBadge")}
                </div>
                <h3 className="font-display text-2xl text-foreground">
                  {t("landing.twoApps.dashboardTitle")}
                </h3>
              </div>
            </div>
            <img
              src={dashboardImg}
              alt="Dashboard preview"
              loading="lazy"
              width={1600}
              height={1104}
              className="mt-8 w-full rounded-xl"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {dict.landing.twoApps.dashboardFeatures.map((f: string) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile */}
          <div className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t("landing.twoApps.mobileBadge")}
                </div>
                <h3 className="font-display text-2xl text-foreground">
                  {t("landing.twoApps.mobileTitle")}
                </h3>
              </div>
            </div>
            <div className="mt-8 grid place-items-center rounded-xl bg-secondary/60 p-6">
              <img
                src={mobileImg}
                alt="Mobile app preview"
                loading="lazy"
                width={800}
                height={1408}
                className="w-52 rounded-2xl"
              />
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {dict.landing.twoApps.mobileFeatures.map((f: string) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Organize                                                          */
/* ------------------------------------------------------------------ */
function Organize() {
  const { t, dict } = useI18n();
  const icons = [FolderTree, Search, Music];

  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.organize.eyebrow")} title={t("landing.organize.title")}>
          {t("landing.organize.description")}
        </SectionHeader>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dict.landing.organize.cards.map((card: { title: string; body: string }, idx: number) => {
            const Icon = icons[idx] || FolderTree;
            return (
              <div
                key={card.title}
                className="reveal rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works                                                      */
/* ------------------------------------------------------------------ */
function HowItWorks() {
  const { t, dict } = useI18n();

  return (
    <section id="how" className="relative bg-primary py-16 text-primary-foreground md:py-16">
      <div className="absolute inset-0 text-gold/25">
        <StaffLines className="top-16" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow={t("landing.howItWorks.eyebrow")}
          title={t("landing.howItWorks.title")}
          eyebrowClassName="!text-[color:var(--primary-light)]"
          titleClassName="!text-primary-foreground"
        >
          <span className="text-primary-foreground/70">{t("landing.howItWorks.description")}</span>
        </SectionHeader>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dict.landing.howItWorks.steps.map((s: { n: string; title: string; body: string }) => (
            <div
              key={s.n}
              className="reveal rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <div className="font-display text-4xl text-gold-gradient">{s.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Live worship                                                      */
/* ------------------------------------------------------------------ */
function LiveWorship() {
  const { t } = useI18n();

  const items = [
    { icon: Sliders, label: t("landing.liveWorship.items.transpose") },
    { icon: Sun, label: t("landing.liveWorship.items.textSize") },
    { icon: Music, label: t("landing.liveWorship.items.chordsVisibility") },
    { icon: WifiOff, label: t("landing.liveWorship.items.offline") },
  ];

  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("landing.liveWorship.eyebrow")}
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("landing.liveWorship.title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("landing.liveWorship.description")}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary-dark">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <div className="absolute -inset-6 rounded-3xl bg-linear-to-br from-gold/20 via-transparent to-primary/10 blur-2xl" />
          <img
            src={mobileImg}
            alt="Hosanna mobile live worship view"
            loading="lazy"
            width={800}
            height={1408}
            className="relative mx-auto w-64 rounded-3xl md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Any size                                                          */
/* ------------------------------------------------------------------ */
function AnySize() {
  const { t } = useI18n();

  return (
    <section className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.anySize.eyebrow")} title={t("landing.anySize.title")}>
          {t("landing.anySize.description")}
        </SectionHeader>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-border bg-card p-8">
            <ShieldCheck className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              {t("landing.anySize.privateLibTitle")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("landing.anySize.privateLibBody")}
            </p>
          </div>
          <div className="reveal rounded-2xl border border-border bg-card p-8">
            <Users className="h-8 w-8 text-gold" />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              {t("landing.anySize.multiTeamTitle")}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("landing.anySize.multiTeamBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                            */
/* ------------------------------------------------------------------ */
function ExportSection() {
  const { t, dict } = useI18n();

  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="reveal">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("landing.export.eyebrow")}
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            {t("landing.export.title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("landing.export.description")}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground">
            {dict.landing.export.bullets.map((b: string) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-gold" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileDown className="h-4 w-4 text-gold" /> {t("landing.export.sampleServiceTitle")}
            </div>
            <div className="space-y-2 text-sm">
              {dict.landing.export.sampleItems.map((s: string, i: number) => (
                <div
                  key={s}
                  className="flex items-center justify-between rounded-lg border border-border/70 bg-secondary/40 px-3 py-2"
                >
                  <span className="font-medium text-foreground">
                    <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                    {s}
                  </span>
                  <span className="text-xs text-muted-foreground">PDF</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing                                                           */
/* ------------------------------------------------------------------ */
function Pricing() {
  const { t, dict } = useI18n();
  const [annual, setAnnual] = useState(true);
  const price = annual ? 120 : 12;
  const unit = annual ? t("landing.pricing.perYearUnit") : t("landing.pricing.perMonthUnit");

  return (
    <section id="pricing" className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.pricing.eyebrow")} title={t("landing.pricing.title")}>
          {t("landing.pricing.description")}
        </SectionHeader>

        <div className="reveal mt-10 flex items-center justify-center">
          <div className="relative flex w-full max-w-70 items-center rounded-2xl bg-secondary p-1.5 shadow-inner">
            <div
              className={cn(
                "absolute inset-y-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-xl bg-white shadow-sm transition-all duration-300 ease-out",
                annual ? "translate-x-[calc(100%+6px)]" : "translate-x-0",
              )}
            />
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "relative z-10 flex-1 py-2 text-sm font-semibold transition-colors duration-200",
                !annual ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t("landing.pricing.monthly")}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "relative z-10 flex-1 py-2 text-sm font-semibold transition-colors duration-200",
                annual ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t("landing.pricing.annual")}
              <span className="ml-1.5 inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                {t("landing.pricing.discountBadge")}
              </span>
            </button>
          </div>
        </div>

        <div className="reveal mx-auto mt-12 max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-transparent bg-primary p-8 text-primary-foreground shadow-soft md:p-12">
            <div className="absolute inset-0 text-gold/20 pointer-events-none">
              <StaffLines className="top-0" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                {t("landing.pricing.singlePlan")}
              </span>
              <div className="mt-5 font-display text-4xl font-semibold md:text-5xl">Hosanna</div>
              <p className="mt-2 text-primary-foreground/75">
                {t("landing.pricing.singlePlanDesc")}
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl font-semibold md:text-7xl">{price}€</span>
                <span className="text-primary-foreground/70">{unit}</span>
              </div>
              <p className="mt-1 text-xs text-primary-foreground/60">
                {annual
                  ? t("landing.pricing.annualBilledNote")
                  : t("landing.pricing.monthlyBilledNote")}
                {" · "}
                {t("landing.pricing.unlimitedMusicians")}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {dict.landing.pricing.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-primary-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="mt-10 w-full rounded-full bg-secondary text-muted-foreground hover:bg-secondary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                <a href={`${dashboardUrl}/?plan=base&payment=${annual ? "yearly" : "monthly"}`}>
                  {t("landing.pricing.ctaTry")} <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-primary-foreground/60">
                {t("landing.pricing.freeTrialDays")}
              </p>
            </div>
          </div>

          <p className="reveal mt-6 text-center text-sm text-muted-foreground">
            {t("landing.pricing.pricingClarification")}
          </p>

          <div className="reveal mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
            <p>
              <span className="font-medium text-foreground">
                {t("landing.pricing.multiCampusLabel")}
              </span>{" "}
              {t("landing.pricing.multiCampusText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile App                                                        */
/* ------------------------------------------------------------------ */
function MobileApp() {
  const { t } = useI18n();

  return (
    <section id="mobile" className="py-16 bg-primary overflow-hidden relative font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 reveal">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium">
              {t("landing.mobileApp.badge")}
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-white leading-[1.1] tracking-tight">
              {t("landing.mobileApp.titleStart")}{" "}
              <span className="text-blue-200">{t("landing.mobileApp.titleHighlight")}</span>.
            </h2>
            <p className="text-xl text-blue-50/80 leading-relaxed max-w-xl">
              {t("landing.mobileApp.description")}
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <PlayStoreButton href="https://github.com/Apoll011/Hosanna/releases/latest" />
            </div>
          </div>
          <div className="relative reveal">
            <div className="absolute -inset-10 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
            <img
              src={mobileImg}
              alt="Hosanna Mobile App"
              className="relative z-10 w-full max-w-[320px] mx-auto drop-shadow-2xl rounded-3xl transform lg:rotate-6 transition-transform hover:rotate-0 duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Vision                                                            */
/* ------------------------------------------------------------------ */
function Vision() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-16">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <div className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {t("landing.vision.eyebrow")}
        </div>
        <p className="reveal mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl">
          {t("landing.vision.quote1")}
        </p>
        <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {t("landing.vision.body")}
        </p>
        <p className="reveal mt-8 font-display text-lg italic text-primary-dark md:text-xl">
          {t("landing.vision.quote2")}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Support                                                           */
/* ------------------------------------------------------------------ */
function SupportTheMission() {
  const { t } = useI18n();
  const goFundMeUrl =
    "https://www.gofundme.com/f/ajudenos-a-levar-o-hosanna-a-igrejas-de-todo-o-mundo/widget/medium?attribution_id=sl%3A6ae5cf26-7689-4639-ba2f-533a305c601d";

  return (
    <section className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.support.eyebrow")} title={t("landing.support.title")}>
          {t("landing.support.description")}
        </SectionHeader>

        <div className="reveal mx-auto mt-12 w-[481] max-w-full overflow-hidden">
          <div className="w-195 -translate-x-37.5">
            <iframe
              className="block"
              src={goFundMeUrl}
              width="780"
              height="202"
              frameBorder="0"
              scrolling="no"
              title={t("landing.support.iframeTitle")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
function Roadmap() {
  const { t, dict } = useI18n();

  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.roadmap.eyebrow")} title={t("landing.roadmap.title")}>
          {t("landing.roadmap.description")}
        </SectionHeader>
        <div className="reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.landing.roadmap.items.map((item: string) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="text-sm leading-relaxed text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t, dict } = useI18n();

  return (
    <section id="faq" className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeader eyebrow={t("landing.faq.eyebrow")} title={t("landing.faq.title")}>
          {t("landing.faq.description")}
        </SectionHeader>
        <div className="reveal mt-12">
          <Accordion type="single" collapsible className="w-full">
            {dict.landing.faq.items.map((f: { q: string; a: string }, i: number) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA + Footer                                                */
/* ------------------------------------------------------------------ */
function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-hero-gradient py-16 text-primary-foreground md:py-16">
      <div className="absolute inset-0 text-gold/30">
        <StaffLines className="top-10" />
        <StaffLines className="bottom-10" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="reveal font-display text-4xl leading-tight tracking-tight md:text-6xl text-white">
          {t("landing.finalCta.title")}
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-blue-50/70 md:text-xl">
          {t("landing.finalCta.subtitle")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row reveal">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-10 text-lg font-medium text-primary shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-50"
          >
            <a href={dashboardUrl}>
              {t("landing.finalCta.ctaStart")} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/5 px-10 text-lg font-medium text-white backdrop-blur-md transition-all hover:bg-white/10"
          >
            <Link to="/contact">{t("landing.finalCta.ctaContact")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();

  const footerCols = [
    {
      title: t("landing.footer.colProduct"),
      links: [
        { label: t("landing.footer.features"), href: "/#features", isInternal: false },
        { label: t("landing.footer.chordproGuide"), href: "/chordpro", isInternal: true },
        { label: t("landing.footer.pricing"), href: "/#pricing", isInternal: false },
        { label: t("landing.footer.downloadApp"), href: "/#mobile", isInternal: false },
        {
          label: t("landing.footer.blog"),
          href: "https://blog.hosanna.live",
          isInternal: false,
        },
      ],
    },
    {
      title: t("landing.footer.colSupport"),
      links: [
        { label: t("landing.footer.contact"), href: "/contact", isInternal: true },
        { label: t("landing.footer.helpCenter"), href: "#", isInternal: false },
        { label: t("landing.footer.serviceStatus"), href: "#", isInternal: false },
      ],
    },
    {
      title: t("landing.footer.colLegal"),
      links: [
        { label: t("landing.footer.termsOfService"), href: "/legal", isInternal: true },
        { label: t("landing.footer.privacyPolicy"), href: "/legal", isInternal: true },
        { label: t("landing.footer.cookies"), href: "/legal", isInternal: true },
      ],
    },
  ];

  return (
    <footer className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 md:grid-cols-4 md:px-8">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {t("landing.footer.tagline")}
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <div className="text-xs font-bold uppercase tracking-widest text-primary/40 font-sans">
              {col.title}
            </div>
            <ul className="mt-6 space-y-3 text-sm font-sans">
              {col.links.map(({ label, href, isInternal }) => (
                <li key={label}>
                  {isInternal ? (
                    <Link
                      to={href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-border px-5 pt-8 text-xs text-muted-foreground md:flex-row md:px-8">
        <div>
          © {new Date().getFullYear()} Hosanna Studio. {t("landing.footer.copyright")}
        </div>
        <div className="flex gap-8">
          <a
            href="mailto:hosanna.songbook@gmail.com"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Mail className="w-3 h-3" />
            hosanna.songbook@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function EarlyAccessBanner() {
  const { t } = useI18n();

  return (
    <div className="bg-blue-600 py-2 text-center text-white px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <Zap className="h-4 w-4 fill-current text-blue-200" />
        <span>{t("landing.banner")}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Root                                                              */
/* ------------------------------------------------------------------ */
export function HosannaLanding() {
  useReveal();
  const rootRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={rootRef} className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <TwoApps />
        <Organize />
        <MigrationSection />
        <HowItWorks />
        <LiveWorship />
        <AnySize />
        <ExportSection />
        <Pricing />
        <MobileApp />
        <Vision />
        <SupportTheMission />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
