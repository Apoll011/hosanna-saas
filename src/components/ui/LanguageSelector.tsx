import { SUPPORTED_LANGUAGES, useI18n, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSelector({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "onBlue";
}) {
  const { language, setLanguage } = useI18n();
  const onBlue = tone === "onBlue";

  return (
    <div
      className={cn(
        "inline-flex rounded-full border p-0.5",
        onBlue ? "border-white/30 bg-white/10" : "border-border bg-surface",
        className,
      )}
      role="group"
      aria-label={language === "en" ? "Language" : "Idioma"}
    >
      {SUPPORTED_LANGUAGES.map((lang) => {
        const selected = lang.code === language;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code as Language)}
            aria-pressed={selected}
            className={cn(
              "min-h-10 min-w-10 rounded-full px-2 text-xs font-semibold uppercase",
              onBlue
                ? selected
                  ? "bg-white text-[#0c4a6e]"
                  : "text-white hover:bg-white/10"
                : selected
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary",
            )}
          >
            <span className="sr-only">{lang.label}</span>
            <span aria-hidden>{lang.code}</span>
          </button>
        );
      })}
    </div>
  );
}
