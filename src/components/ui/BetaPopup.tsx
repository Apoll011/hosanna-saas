import { useI18n } from "@/lib/i18n";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function BetaPopup({ dashboardUrl }: { dashboardUrl: string }) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 slide-in-from-right-5 duration-300">
      <div className="relative rounded-2xl border border-primary/20 bg-white p-6 shadow-xl backdrop-blur-lg">
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-lg p-1 text-primary/70 transition-colors hover:text-primary"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-3 pr-6 text-center">
          <h3 className="font-display text-xl font-bold text-primary">
            {t("landing.betaPopup.title")}
          </h3>

          <p className="text-sm leading-relaxed text-primary/90">
            {t("landing.betaPopup.description")}
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-white hover:text-primary active:scale-95"
            >
              {t("landing.betaPopup.cta")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
