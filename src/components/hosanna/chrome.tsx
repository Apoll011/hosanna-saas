import logo from "@/assets/hosanna_logo.webp";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL + "/new";
const goFundMeLink = "https://gofund.me/e46a567a7";
const releasesUrl = "https://github.com/Apoll011/Hosanna/releases/latest";

export function StaffLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 200"
      className={cn("pointer-events-none absolute inset-x-0 h-36 w-full", className)}
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 25} Q 300 ${20 + i * 25} 600 ${40 + i * 25} T 1200 ${40 + i * 25}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      ))}
    </svg>
  );
}

export function PageHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="relative -mt-[var(--site-header)] overflow-hidden bg-hero-gradient pt-[calc(var(--site-header)+2.75rem)] pb-12 text-white md:pb-14 md:pt-[calc(var(--site-header)+3.5rem)]">
      <StaffLines className="top-6 text-white/30" />
      <StaffLines className="bottom-0 text-white/15" />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <h1 className="font-display text-[clamp(1.85rem,3vw,2.6rem)] font-medium leading-[1.15] tracking-[-0.02em] text-balance text-white">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-white/90">{lede}</p>
        ) : null}
      </div>
    </header>
  );
}

function Logo({ onBlue = false }: { onBlue?: boolean }) {
  return (
    <Link to="/" hash="top" className="flex items-center gap-2.5 rounded-md">
      <span
        className={cn(
          "grid h-9 w-9 place-items-center overflow-hidden rounded-[10px]",
          onBlue && "bg-white",
        )}
      >
        <img src={logo} alt="" width={36} height={36} className="h-full w-full object-cover" />
      </span>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-[-0.02em]",
          onBlue ? "text-white" : "text-foreground",
        )}
      >
        Hosanna
      </span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [wash, setWash] = useState(0);
  const { t } = useI18n();
  const { pathname } = useLocation();

  const NAV = [
    { label: t("landing.nav.features"), to: "/", hash: "features" },
    { label: t("landing.nav.pricing"), to: "/", hash: "pricing" },
    { label: t("landing.nav.chordpro"), to: "/chordpro", hash: undefined },
    { label: t("landing.nav.about"), to: "/about", hash: undefined },
    { label: t("landing.nav.contact"), to: "/contact", hash: undefined },
  ] as const;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const amount = open ? 1 : Math.min(1, Math.max(0, (window.scrollY - 36) / 200));
      const next = Math.round(amount * 100) / 100;
      setWash((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative sticky top-0 z-40 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#0c4a6e]" style={{ opacity: wash }} />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        {t("common.skipToContent")}
      </a>
      <div className="relative mx-auto flex min-h-[var(--site-header)] max-w-[1068px] items-center justify-between gap-4 px-5 md:px-6">
        <Logo onBlue />
        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("landing.nav.features")}>
          {NAV.map((item) => {
            const active = item.hash ? false : pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className={cn(
                  "rounded-md px-2.5 py-2 text-sm text-white/85 hover:text-white",
                  active && "text-white",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelector tone="onBlue" />
          <a
            href={dashboardUrl}
            className="hidden min-h-11 items-center rounded-full bg-white px-4 text-sm text-[#0c4a6e] hover:bg-white/90 sm:inline-flex"
          >
            {t("landing.nav.tryFree")}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div id="site-menu" className="relative border-t border-white/15 bg-[#0c4a6e] lg:hidden">
          <StaffLines className="top-0 text-white/20" />
          <nav className="relative mx-auto flex max-w-6xl flex-col px-3 py-3">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={dashboardUrl}
              onClick={() => setOpen(false)}
              className="mx-3 mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-sm text-[#0c4a6e]"
            >
              {t("landing.nav.tryFree")}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  const { t } = useI18n();

  const columns = [
    {
      title: t("landing.footer.colProduct"),
      links: [
        { label: t("landing.footer.features"), to: "/", hash: "features" },
        { label: t("landing.footer.pricing"), to: "/", hash: "pricing" },
        { label: t("landing.footer.chordproGuide"), to: "/chordpro" },
        { label: t("landing.nav.about"), to: "/about" },
        { label: t("landing.footer.downloadApp"), href: releasesUrl },
      ],
    },
    {
      title: t("landing.footer.colSupport"),
      links: [
        { label: t("landing.footer.contact"), to: "/contact" },
        { label: t("landing.footer.blog"), href: "https://blog.hosanna.live" },
        { label: t("landing.footer.supportProject"), href: goFundMeLink },
        { label: t("landing.footer.source"), href: "https://github.com/Apoll011/Hosanna" },
      ],
    },
    {
      title: t("landing.footer.colLegal"),
      links: [
        { label: t("landing.footer.termsOfService"), to: "/terms" },
        { label: t("landing.footer.privacyPolicy"), to: "/privacy" },
        { label: t("landing.footer.cookies"), to: "/privacy", hash: "cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-surface">
      <div className="mx-auto grid max-w-[1068px] gap-10 px-5 py-12 md:grid-cols-4 md:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
            {t("landing.footer.tagline")}
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-xs font-semibold text-foreground">{column.title}</h2>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  {"href" in link && link.href ? (
                    <a
                      href={link.href}
                      className="text-xs leading-5 text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to!}
                      hash={"hash" in link ? link.hash : undefined}
                      className="text-xs leading-5 text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1068px] flex-col gap-3 px-5 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} Hosanna Studio. {t("landing.footer.copyright")}
          </p>
          <a href="mailto:hosanna.songbook@gmail.com" className="hover:text-foreground">
            hosanna.songbook@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

