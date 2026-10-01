import chordsImg from "@/assets/chords.jpeg";
import dashboardImg from "@/assets/main_mockup.png";
import laptopImg from "@/assets/laptop-view.png";
import mobileImg from "@/assets/mobile-view.webp";
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
import { PlayStoreButton } from "@/components/ui/StoreButton";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Footer, Nav, StaffLines } from "./chrome";

const signupUrl = import.meta.env.VITE_DASHBOARD_URL + "/new";
const demoUrl = import.meta.env.VITE_DASHBOARD_URL + "/demo";

export { Footer, Nav, StaffLines };

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
        "inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-base font-semibold",
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
    "inline-flex min-h-11 items-center justify-center rounded-lg border px-5 text-base font-semibold",
    onBlue
      ? "border-white/40 bg-white/10 text-white hover:bg-white/15"
      : "border-border bg-surface text-foreground hover:bg-secondary",
  );
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function Hero() {
  const { t, dict } = useI18n();
  const items = dict.landing.export.sampleItems;
  const [current, setCurrent] = useState(1);

  return (
    <section id="top" className="relative -mt-[4.5rem] overflow-hidden bg-hero-gradient pt-[4.5rem] text-white">
      <StaffLines className="top-4 text-white/35" />
      <StaffLines className="bottom-6 text-white/20" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:py-20">
        <div>
          <h1 className="font-display text-[clamp(2.35rem,4.6vw,4.05rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-balance text-white">
            {t("landing.hero.title")}
          </h1>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-white/90">
            {t("landing.hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href={signupUrl} onBlue>
              {t("landing.hero.ctaStart")}
            </PrimaryLink>
            <SecondaryLink href={demoUrl} onBlue>
              {t("landing.hero.ctaDemo")}
            </SecondaryLink>
          </div>
          <div className="mt-10 max-w-xl">
            <p className="text-sm leading-relaxed text-white/75">
              {t("landing.hero.exampleCaption")}
            </p>
            <ol className="mt-3 border-y border-white/25">
              {items.map((item: string, index: number) => {
                const selected = index === current;
                return (
                  <li key={item} className="border-b border-white/20 last:border-b-0">
                    <button
                      type="button"
                      aria-current={selected ? "true" : undefined}
                      onClick={() => setCurrent(index)}
                      className={cn(
                        "flex min-h-11 w-full items-baseline gap-4 px-2 py-2.5 text-left text-[0.98rem] text-white",
                        selected ? "bg-white/15" : "hover:bg-white/10",
                      )}
                    >
                      <span
                        className={cn(
                          "w-6 shrink-0 font-semibold tabular-nums",
                          selected ? "text-sky-200" : "text-white/60",
                        )}
                      >
                        {index + 1}
                      </span>
                      <span className={selected ? "font-semibold" : undefined}>{item}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        <div>
          <img
            src={dashboardImg}
            alt={t("landing.hero.dashboardAlt")}
            width={1600}
            height={1112}
            decoding="async"
            fetchPriority="high"
            className="device-shadow h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const { t, dict } = useI18n();

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[20ch] font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-balance text-foreground">
          {t("landing.problem.title")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.problem.description")}
        </p>
        <ol className="mt-12 border-t border-border">
          {dict.landing.problem.cards.map((card: { title: string; body: string }, index: number) => (
            <li
              key={card.title}
              className="grid gap-2 border-b border-border py-7 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <h3 className="font-display text-xl font-semibold text-foreground">
                <span className="mr-3 tabular-nums text-primary">{index + 1}</span>
                {card.title}
              </h3>
              <p className="max-w-[62ch] leading-relaxed text-muted-foreground">{card.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProductBands() {
  const { t, dict } = useI18n();

  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[18ch] font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-balance text-foreground">
          {t("landing.twoApps.title")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.twoApps.description")}
        </p>

        <article className="mt-16 grid items-center gap-10 border-t border-border pt-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-primary">{t("landing.twoApps.dashboardBadge")}</p>
            <h3 className="mt-2 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight text-foreground">
              {t("landing.twoApps.dashboardTitle")}
            </h3>
            <ul className="mt-6 space-y-2.5">
              {dict.landing.twoApps.dashboardFeatures.map((feature: string) => (
                <li key={feature} className="border-b border-border py-2 text-[0.98rem] leading-snug">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={laptopImg}
            alt={t("landing.hero.dashboardAlt")}
            width={1920}
            height={1080}
            loading="lazy"
            className="device-shadow h-auto w-full"
          />
        </article>

        <article id="mobile" className="mt-16 grid items-center gap-10 border-t border-border pt-12 lg:grid-cols-2">
          <img
            src={mobileImg}
            alt={t("landing.hero.mobileAlt")}
            width={1080}
            height={608}
            loading="lazy"
            className="device-shadow order-2 h-auto w-full max-w-md justify-self-center lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-primary">{t("landing.twoApps.mobileBadge")}</p>
            <h3 className="mt-2 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight text-foreground">
              {t("landing.twoApps.mobileTitle")}
            </h3>
            <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
              {t("landing.mobileApp.description")}
            </p>
            <ul className="mt-6 space-y-2.5">
              {dict.landing.twoApps.mobileFeatures.map((feature: string) => (
                <li key={feature} className="border-b border-border py-2 text-[0.98rem] leading-snug">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <PlayStoreButton href="https://github.com/Apoll011/Hosanna/releases/latest" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t, dict } = useI18n();

  return (
    <section id="how" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[18ch] font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-balance text-foreground">
          {t("landing.howItWorks.title")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.howItWorks.description")}
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dict.landing.howItWorks.steps.map((step: { n: string; title: string; body: string }) => (
            <li key={step.n} className="border-t border-foreground pt-4">
              <span className="font-display text-2xl font-semibold tabular-nums text-primary">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-muted-foreground">{step.body}</p>
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
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-balance text-foreground">
            {t("landing.liveWorship.title")}
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
            {t("landing.liveWorship.description")}
          </p>
          <ul className="mt-8 border-t border-border">
            {items.map((item) => (
              <li key={item} className="border-b border-border py-3 text-[0.98rem]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <figure>
            <img
              src={chordsImg}
              alt={t("landing.hero.mobileAlt")}
              width={1170}
              height={1400}
              loading="lazy"
              className="h-auto w-full rounded-xl border border-border"
            />
          </figure>
          <figure>
            <img
              src={transposeImg}
              alt={t("landing.liveWorship.items.transpose")}
              width={1170}
              height={900}
              loading="lazy"
              className="h-auto w-full rounded-xl border border-border"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function Portability() {
  const { t, dict } = useI18n();

  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-balance text-foreground">
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
            <Link to="/chordpro" className="font-semibold text-primary hover:underline">
              {t("landing.footer.chordproGuide")}
            </Link>
          </p>
        </div>
        <div>
          <h3 className="font-display text-2xl font-semibold text-foreground">
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
    <section id="pricing" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
          {t("landing.pricing.title")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.pricing.description")}
        </p>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <div
              role="radiogroup"
              aria-label={t("landing.pricing.title")}
              className="inline-flex rounded-lg border border-border bg-background p-1"
            >
              <button
                type="button"
                role="radio"
                aria-checked={!annual}
                onClick={() => setAnnual(false)}
                className={cn(
                  "min-h-11 rounded-md px-4 text-sm font-semibold",
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
                  "min-h-11 rounded-md px-4 text-sm font-semibold",
                  annual ? "bg-primary text-primary-foreground" : "text-foreground",
                )}
              >
                {t("landing.pricing.annual")}
                <span className="ml-2 text-xs font-medium opacity-80">
                  {t("landing.pricing.discountBadge")}
                </span>
              </button>
            </div>

            <p className="mt-8 font-display text-6xl font-semibold leading-none tabular-nums tracking-[-0.03em] text-foreground">
              {price}€
            </p>
            <p className="mt-3 text-lg text-foreground">{unit}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {annual ? t("landing.pricing.annualBilledNote") : t("landing.pricing.monthlyBilledNote")}
              {" · "}
              {t("landing.pricing.unlimitedMusicians")}
              {" · "}
              {t("landing.pricing.freeTrialDays")}
            </p>
            <div className="mt-8">
              <PrimaryLink
                href={`${signupUrl}/?plan=base&payment=${annual ? "yearly" : "monthly"}`}
              >
                {t("landing.pricing.ctaTry")}
              </PrimaryLink>
            </div>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
              {t("landing.pricing.pricingClarification")}
            </p>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                {t("landing.pricing.multiCampusLabel")}
              </span>{" "}
              {t("landing.pricing.multiCampusText")}
            </p>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
              {t("landing.anySize.description")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground">
              {t("landing.pricing.singlePlan")}
            </h3>
            <p className="mt-2 max-w-[52ch] text-muted-foreground">
              {t("landing.pricing.singlePlanDesc")}
            </p>
            <ul className="mt-6 border-t border-border">
              {dict.landing.pricing.features.map((feature: string) => (
                <li key={feature} className="border-b border-border py-3 text-[0.98rem] leading-snug">
                  {feature}
                </li>
              ))}
            </ul>
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
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[18ch] font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-balance text-foreground">
          {t("about.storyTitle")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("about.heroSubtitle")}
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {people.map((person) => (
            <figure key={person.name} className="border-t border-foreground pt-5">
              <img
                src={person.photo}
                alt=""
                width={80}
                height={80}
                className="h-16 w-16 rounded-full object-cover"
              />
              <figcaption className="mt-4">
                <p className="font-display text-2xl font-semibold text-foreground">{person.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
              </figcaption>
              <blockquote className="mt-4 max-w-[40ch] font-display text-xl leading-snug text-foreground">
                “{person.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
        <p className="mt-10">
          <Link to="/about" className="font-semibold text-primary hover:underline">
            {t("landing.nav.about")}
          </Link>
        </p>
      </div>
    </section>
  );
}

function Roadmap() {
  const { t, dict } = useI18n();

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
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
    <section id="faq" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.55rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
          {t("landing.faq.title")}
        </h2>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.faq.description")}
        </p>
        <Accordion type="single" collapsible className="mt-10 w-full">
          {dict.landing.faq.items.map((item: { q: string; a: string }, index: number) => (
            <AccordionItem key={item.q} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="py-4 text-left font-display text-lg font-semibold text-foreground hover:no-underline">
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
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance text-foreground">
          {t("landing.finalCta.title")}
        </h2>
        <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
          {t("landing.finalCta.subtitle")}
        </p>
        <p className="mt-6 max-w-[54ch] font-display text-xl leading-snug text-foreground">
          {t("landing.vision.quote1")}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryLink href={signupUrl}>{t("landing.finalCta.ctaStart")}</PrimaryLink>
          <SecondaryLink to="/contact">{t("landing.finalCta.ctaContact")}</SecondaryLink>
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
        <Problem />
        <ProductBands />
        <HowItWorks />
        <LiveWorship />
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
