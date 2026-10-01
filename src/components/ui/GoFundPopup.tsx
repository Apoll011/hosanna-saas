import { useI18n } from "@/lib/i18n";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const goFundMeLink = "https://gofund.me/e46a567a7";

export function GoFundPopup() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 25000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 hidden max-w-xs rounded-xl border border-border bg-surface p-4 shadow-soft md:block">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground"
        aria-label={t("common.closeMenu")}
      >
        <X className="h-4 w-4" />
      </button>
      <h2 className="pr-8 font-display text-lg font-semibold text-foreground">
        {t("landing.gofundPopup.title")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {t("landing.gofundPopup.description")}
      </p>
      <a
        href={goFundMeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold text-foreground hover:bg-secondary"
      >
        {t("landing.gofundPopup.cta")}
      </a>
    </div>
  );
}
