import { SUPPORTED_LANGUAGES, useI18n, type Language } from "@/lib/i18n";
import { Globe } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.code === language) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur-md shadow-xs transition-all hover:bg-white hover:border-slate-300 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-3.5 w-3.5 text-primary/70" />
        <span>{currentLang.flag}</span>
        <span className="hidden sm:inline uppercase">{currentLang.code}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl ring-1 ring-black/5 z-50 animate-in fade-in zoom-in-95 duration-150">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-blue-50 text-primary font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
