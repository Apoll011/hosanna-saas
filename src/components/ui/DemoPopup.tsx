import { useI18n } from "@/lib/i18n";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL + "/demo";

export function DemoPopup() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 20000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(100%-2rem,20rem)] rounded-xl border border-border bg-surface p-4 shadow-soft">
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground"
        aria-label={t("common.closeMenu")}
      >
        <X className="h-4 w-4" />
      </button>
      <h2 className="pr-10 font-display text-lg font-semibold text-foreground">
        {t("landing.demoPopup.title")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {t("landing.demoPopup.description")}
      </p>
      <a
        href={dashboardUrl}
        className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
      >
        {t("landing.demoPopup.cta")}
      </a>
    </div>
  );
}
