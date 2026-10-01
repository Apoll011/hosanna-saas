import chordsImg from "@/assets/chords.jpeg";
import dashboardImg from "@/assets/main_mockup.png";
import laptopImg from "@/assets/laptop-view.png";
import mobileImg from "@/assets/mobile-view.webp";
import serviceImg from "@/assets/service.jpeg";
import songLibraryImg from "@/assets/song_library.jpeg";
import eberPhoto from "@/assets/eber_headshot.webp";
import tiagoPhoto from "@/assets/tiago_headshot.webp";
import transposeImg from "@/assets/transpose.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DemoPopup } from "@/components/ui/DemoPopup";
import { GoFundPopup } from "@/components/ui/GoFundPopup";
import { MigrationSection } from "@/components/ui/MigrationSection";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Footer, Nav, StaffLines } from "./chrome";

const signupUrl = import.meta.env.VITE_DASHBOARD_URL + "/new";
const demoUrl = import.meta.env.VITE_DASHBOARD_URL + "/demo";

export { Footer, Nav, StaffLines };

const display =
  "font-display font-medium leading-[1.15] tracking-[-0.02em] text-balance";

function PrimaryLink({
  href,
  children,
  onBlue = false,
}: {
  href: string;
  children: React.ReactNode;
  onBlue?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-[17px]",
        onBlue
          ? "bg-white text-[#075985] hover:bg-white/90"
          : "bg-primary text-primary-foreground hover:bg-primary-dark",
      )}
    >
      {children}
    </a>
  );
}

function SecondaryLink({
  href,
  children,
  to,
  onBlue = false,
}: {
  href?: string;
  to?: "/contact";
  children: React.ReactNode;
  onBlue?: boolean;
}) {
  const className = cn(
    "inline-flex min-h-11 items-center gap-0.5 text-[17px]",
    onBlue ? "text-white hover:underline" : "text-primary hover:underline",
  );
  const content = (
    <>
      {children}
      <ChevronRight className="h-4 w-4" aria-hidden />
    </>
  );
  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative -mt-[var(--site-header)] overflow-hidden bg-hero-gradient pt-[var(--site-header)] text-white">
      <StaffLines className="top-2 text-white/30" />
      <StaffLines className="bottom-0 text-white/15" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pt-10 text-center md:pt-14">
        <h1 className={cn(display, "text-[clamp(2.05rem,3.6vw,3.05rem)] text-white")}>
          {t("landing.hero.title")}
        </h1>
        <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-white/90">
          {t("landing.hero.subtitle")}
        </p>
        <div className="mt-8 flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <PrimaryLink href={signupUrl} onBlue>
            {t("landing.hero.ctaStart")}
          </PrimaryLink>
          <SecondaryLink href={demoUrl} onBlue>
            {t("landing.hero.ctaDemo")}
          </SecondaryLink>
        </div>
      </div>
      <img
        src={dashboardImg}
        alt={t("landing.hero.dashboardAlt")}
        width={1600}
        height={1112}
        decoding="async"
        fetchPriority="high"
        className="hero-rise device-shadow relative mx-auto mt-10 h-auto w-full max-w-5xl px-5 pb-8 md:mt-14 md:pb-14"
      />
    </section>
  );
}

function ServiceOrder() {
  const { t, dict } = useI18n();
  const items = dict.landing.export.sampleItems;
  const [current, setCurrent] = useState(1);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-xl px-5 py-14 md:py-16">
        <h2 className="text-lg font-medium tracking-[-0.01em] text-foreground">
          {t("landing.hero.exampleCaption")}
        </h2>
        <ol className="mt-8 border-t border-border">
          {items.map((item: string, index: number) => {
            const selected = index === current;
            return (
              <li key={item} className="border-b border-border">
                <button
                  type="button"
                  aria-current={selected ? "true" : undefined}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "flex min-h-12 w-full items-baseline gap-4 py-3 text-left text-[1.05rem]",
                    selected ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="w-6 shrink-0 tabular-nums">{index + 1}</span>
                  <span className={selected ? "font-semibold" : undefined}>{item}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Problem() {
  const { t, dict } = useI18n();

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1068px] px-5 py-14 text-center md:px-6 md:py-20">
        <h2 className={cn(display, "mx-auto max-w-[18ch] text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("landing.problem.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-[40rem] text-base leading-relaxed text-muted-foreground">
          {t("landing.problem.description")}
        </p>
        <ul className="mt-16 grid gap-12 text-left md:grid-cols-3 md:gap-10">
          {dict.landing.problem.cards.map((card: { title: string; body: string }) => (
            <li key={card.title}>
              <h3 className="text-lg font-medium tracking-[-0.01em] text-foreground">{card.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProductBands() {
  const { t, dict } = useI18n();

  return (
    <section id="features" className="bg-surface">
      <div className="mx-auto max-w-[1068px] px-5 py-14 text-center md:px-6 md:py-20">
        <h2 className={cn(display, "mx-auto max-w-[16ch] text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("landing.twoApps.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-[36rem] text-base leading-relaxed text-muted-foreground">
          {t("landing.twoApps.description")}
        </p>
        <img
          src={laptopImg}
          alt={t("landing.hero.dashboardAlt")}
          width={1920}
          height={1080}
          loading="lazy"
          className="device-shadow mx-auto mt-12 h-auto w-full"
        />
        <h3 className="mt-10 text-left text-xl font-medium tracking-[-0.01em] text-foreground">
          {t("landing.twoApps.dashboardTitle")}
        </h3>
        <ul className="mt-6 grid gap-x-12 text-left sm:grid-cols-2">
          {dict.landing.twoApps.dashboardFeatures.map((feature: string) => (
            <li key={feature} className="border-b border-border py-3 text-[17px] leading-snug text-foreground">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MobileChapter() {
  const { t, dict } = useI18n();

  return (
    <section id="mobile" className="bg-[#000000] text-white">
      <div className="mx-auto grid max-w-[1068px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 className={cn(display, "max-w-[14ch] text-[clamp(1.75rem,2.6vw,2.35rem)]")}>
            {t("landing.twoApps.mobileTitle")}
          </h2>
          <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-white/80">
            {t("landing.mobileApp.description")}
          </p>
          <ul className="mt-8 border-t border-white/20">
            {dict.landing.twoApps.mobileFeatures.map((feature: string) => (
              <li key={feature} className="border-b border-white/20 py-3 text-[17px]">
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="https://github.com/Apoll011/Hosanna/releases/latest"
              className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-[17px] text-[#1d1d1f]"
            >
              {t("landing.footer.downloadApp")}
            </a>
          </div>
        </div>
        <img
          src={mobileImg}
          alt={t("landing.hero.mobileAlt")}
          width={1080}
          height={608}
          loading="lazy"
          className="device-shadow h-auto w-full"
        />
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t, dict } = useI18n();

  return (
    <section id="how" className="bg-background">
      <div className="mx-auto max-w-[1068px] px-5 py-14 md:px-6 md:py-20">
        <h2 className={cn(display, "max-w-[16ch] text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("landing.howItWorks.title")}
        </h2>
        <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-muted-foreground">
          {t("landing.howItWorks.description")}
        </p>
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {dict.landing.howItWorks.steps.map((step: { n: string; title: string; body: string }) => (
            <li key={step.n}>
              <h3 className="text-lg font-medium tracking-[-0.01em] text-foreground">{step.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LiveWorship() {
  const { t } = useI18n();
  const items = [
    t("landing.liveWorship.items.transpose"),
    t("landing.liveWorship.items.textSize"),
    t("landing.liveWorship.items.chordsVisibility"),
    t("landing.liveWorship.items.offline"),
  ];

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1068px] px-5 py-14 text-center md:px-6 md:py-20">
        <h2 className={cn(display, "mx-auto max-w-[16ch] text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("landing.liveWorship.title")}
        </h2>
        <p className="mx-auto mt-5 max-w-[40rem] text-base leading-relaxed text-muted-foreground">
          {t("landing.liveWorship.description")}
        </p>
        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-2 text-[17px] text-foreground">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useI18n();
  const shots = [
    { src: songLibraryImg, caption: t("landing.gallery.captions.library"), width: 1170, height: 900 },
    { src: serviceImg, caption: t("landing.gallery.captions.service"), width: 1170, height: 900 },
    { src: chordsImg, caption: t("landing.gallery.captions.chords"), width: 1170, height: 1400 },
    { src: transposeImg, caption: t("landing.gallery.captions.transpose"), width: 1170, height: 900 },
  ];
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <section id="gallery" className="bg-background">
      <div className="mx-auto max-w-[1068px] px-5 py-14 md:px-6 md:py-20">
        <h2 className={cn(display, "max-w-[16ch] text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("landing.gallery.title")}
        </h2>
        <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-muted-foreground">
          {t("landing.gallery.description")}
        </p>
        <div className="mx-auto mt-12 max-w-3xl rounded-[2rem] bg-surface p-3 md:p-4">
          <img
            src={shot.src}
            alt={shot.caption}
            width={shot.width}
            height={shot.height}
            className="mx-auto h-auto w-full rounded-[1.5rem]"
          />
          <p className="px-2 py-4 text-center text-[17px] text-foreground">{shot.caption}</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" role="tablist" aria-label={t("landing.gallery.title")}>
          {shots.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.caption}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={cn(
                  "overflow-hidden rounded-[1.25rem] border-2 bg-surface text-left",
                  selected ? "border-primary" : "border-transparent",
                )}
              >
                <img src={item.src} alt="" width={320} height={200} className="h-24 w-full object-cover object-top" />
                <span className="block px-3 py-2 text-sm text-foreground">{item.caption}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Portability() {
  const { t, dict } = useI18n();

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1068px] gap-16 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <h2 className={cn(display, "text-[clamp(1.65rem,2.2vw,2.05rem)] text-foreground")}>
            {t("landing.export.title")}
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
            {t("landing.export.description")}
          </p>
          <ul className="mt-6 border-t border-border">
            {dict.landing.export.bullets.map((bullet: string) => (
              <li key={bullet} className="border-b border-border py-3">
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link to="/chordpro" className="inline-flex min-h-11 items-center gap-0.5 text-[17px] text-primary hover:underline">
              {t("landing.footer.chordproGuide")}
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </div>
        <div>
          <h3 className={cn(display, "text-[clamp(1.65rem,2.2vw,2.05rem)] text-foreground")}>
            {t("landing.organize.title")}
          </h3>
          <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
            {t("landing.organize.description")}
          </p>
          <ul className="mt-6 space-y-5">
            {dict.landing.organize.cards.map((card: { title: string; body: string }) => (
              <li key={card.title}>
                <h4 className="font-semibold text-foreground">{card.title}</h4>
                <p className="mt-1 max-w-[58ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { t, dict } = useI18n();
  const [annual, setAnnual] = useState(true);
  const price = annual ? 120 : 12;
  const unit = annual ? t("landing.pricing.perYearUnit") : t("landing.pricing.perMonthUnit");

  return (
    <section id="pricing" className="bg-surface">
      <div className="mx-auto max-w-[1068px] px-5 py-14 md:px-6 md:py-20">
        <div className="rounded-[2rem] bg-white px-6 py-10 shadow-[0_24px_50px_-32px_rgba(0,0,0,0.35)] md:px-12 md:py-14">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <h2 className={cn(display, "text-[clamp(1.65rem,2.2vw,2.05rem)] text-foreground")}>
                {t("landing.pricing.title")}
              </h2>
              <p className="mt-4 max-w-[36ch] text-lg leading-snug text-muted-foreground">
                {t("landing.pricing.description")}
              </p>
              <div
                role="radiogroup"
                aria-label={t("landing.pricing.title")}
                className="mt-8 inline-flex rounded-full bg-surface p-1"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={!annual}
                  onClick={() => setAnnual(false)}
                  className={cn(
                    "min-h-11 rounded-full px-4 text-sm",
                    !annual ? "bg-primary text-primary-foreground" : "text-foreground",
                  )}
                >
                  {t("landing.pricing.monthly")}
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={annual}
                  onClick={() => setAnnual(true)}
                  className={cn(
                    "min-h-11 rounded-full px-4 text-sm",
                    annual ? "bg-primary text-primary-foreground" : "text-foreground",
                  )}
                >
                  {t("landing.pricing.annual")}
                  <span className="ml-2 text-xs opacity-80">{t("landing.pricing.discountBadge")}</span>
                </button>
              </div>
              <p className="mt-8 font-display text-[clamp(2.5rem,4vw,3.15rem)] font-medium leading-none tabular-nums tracking-[-0.02em] text-foreground">
                {price}€
              </p>
              <p className="mt-3 text-lg text-foreground">{unit}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {annual ? t("landing.pricing.annualBilledNote") : t("landing.pricing.monthlyBilledNote")}
              </p>
              <div className="mt-8">
                <PrimaryLink href={`${signupUrl}/?plan=base&payment=${annual ? "yearly" : "monthly"}`}>
                  {t("landing.pricing.ctaTry")}
                </PrimaryLink>
              </div>
              <p className="mt-5 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                {t("landing.pricing.pricingClarification")}
              </p>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">{t("landing.pricing.multiCampusLabel")}</span>{" "}
                {t("landing.pricing.multiCampusText")}
              </p>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted-foreground">
                {t("landing.anySize.description")}
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-surface px-6 py-7 md:px-8">
              <h3 className="text-xl font-medium tracking-[-0.01em] text-foreground">
                {t("landing.pricing.singlePlan")}
              </h3>
              <p className="mt-2 text-muted-foreground">{t("landing.pricing.singlePlanDesc")}</p>
              <ul className="mt-6 space-y-3">
                {dict.landing.pricing.features.map((feature: string) => (
                  <li key={feature} className="text-[17px] leading-snug text-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {t("landing.pricing.unlimitedMusicians")}. {t("landing.pricing.freeTrialDays")}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founders() {
  const { t } = useI18n();

  const people = [
    {
      photo: tiagoPhoto,
      name: t("about.tiagoName"),
      role: t("about.tiagoRole"),
      quote: t("about.tiagoQuote"),
    },
    {
      photo: eberPhoto,
      name: t("about.eberName"),
      role: t("about.eberRole"),
      quote: t("about.eberQuote"),
    },
  ];

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1068px] px-5 py-14 md:px-6 md:py-20">
        <h2 className={cn(display, "max-w-[16ch] text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("about.storyTitle")}
        </h2>
        <p className="mt-5 max-w-[36rem] text-base leading-relaxed text-muted-foreground">
          {t("about.heroSubtitle")}
        </p>
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {people.map((person) => (
            <figure key={person.name}>
              <img
                src={person.photo}
                alt=""
                width={96}
                height={96}
                className="h-24 w-24 rounded-full object-cover"
              />
              <figcaption className="mt-5">
                <p className="text-xl font-medium tracking-[-0.01em] text-foreground">{person.name}</p>
                <p className="mt-1 text-muted-foreground">{person.role}</p>
              </figcaption>
              <blockquote className="mt-4 max-w-[36ch] text-lg leading-snug text-foreground">
                “{person.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
        <p className="mt-12">
          <Link to="/about" className="inline-flex min-h-11 items-center gap-0.5 text-[17px] text-primary hover:underline">
            {t("landing.nav.about")}
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}

function Roadmap() {
  const { t, dict } = useI18n();

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-[1068px] px-5 py-14 md:px-6 md:py-20">
        <h2 className={cn(display, "max-w-[14ch] text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("landing.roadmap.title")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.roadmap.description")}
        </p>
        <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {dict.landing.roadmap.items.map((item: string) => (
            <li key={item} className="border-b border-border py-3 text-[0.98rem] leading-snug">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQ() {
  const { t, dict } = useI18n();

  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <h2 className={cn(display, "text-[clamp(1.75rem,2.6vw,2.35rem)] text-foreground")}>
          {t("landing.faq.title")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.faq.description")}
        </p>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {dict.landing.faq.items.map((item: { q: string; a: string }, index: number) => (
            <AccordionItem key={item.q} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="py-4 text-left font-display text-base font-medium text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <StaffLines className="top-0 text-white/25" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center md:py-20">
        <h2 className={cn(display, "text-[clamp(1.85rem,3vw,2.5rem)]")}>
          {t("landing.finalCta.title")}
        </h2>
        <p className="mt-5 max-w-[32rem] text-base leading-relaxed text-white/90">
          {t("landing.finalCta.subtitle")}
        </p>
        <p className="mt-6 max-w-[32rem] text-lg font-medium leading-snug">
          {t("landing.vision.quote1")}
        </p>
        <div className="mt-8 flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <PrimaryLink href={signupUrl} onBlue>
            {t("landing.finalCta.ctaStart")}
          </PrimaryLink>
          <SecondaryLink to="/contact" onBlue>
            {t("landing.finalCta.ctaContact")}
          </SecondaryLink>
        </div>
      </div>
    </section>
  );
}

export function HosannaLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <DemoPopup />
      <GoFundPopup />
      <main id="content">
        <Hero />
        <ServiceOrder />
        <Problem />
        <ProductBands />
        <MobileChapter />
        <HowItWorks />
        <LiveWorship />
        <Gallery />
        <MigrationSection />
        <Portability />
        <Pricing />
        <Founders />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
