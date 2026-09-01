import { useI18n } from "@/lib/i18n";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function BetaPopup() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already closed in this session
    const wasClosed = sessionStorage.getItem("betaPopupClosed");

    if (!wasClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("betaPopupClosed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-lg">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-white/70 transition-colors hover:text-white"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-white">
            {t("landing.betaPopup.title")}
          </h2>

          <p className="text-base leading-relaxed text-white/90">
            {t("landing.betaPopup.description")}
          </p>

          <div className="pt-4">
            <a
              href="https://studio.hosanna.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full rounded-full bg-gold px-6 py-3 text-base font-semibold text-gold-foreground shadow-lg transition-all hover:bg-gold/90 active:scale-95"
            >
              {t("landing.betaPopup.cta")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}