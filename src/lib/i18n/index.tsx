import React, { createContext, useContext, useEffect, useState } from "react";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { pt } from "./locales/pt";

export type Language = "pt" | "en" | "es";

export const SUPPORTED_LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export const translations = {
  pt,
  en,
  es,
} as const;

export type TranslationDictionary = typeof pt;

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKey = NestedKeyOf<TranslationDictionary>;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  dict: TranslationDictionary;
}

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "hosanna_lang";

function getNestedValue(obj: any, path: string): string | undefined {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

/**
 * Robustly detect the user's preferred language from localStorage or browser preferences.
 * Evaluates navigator.languages hierarchy (e.g. ['es-ES', 'en-US', 'pt-PT']).
 */
export function detectUserLanguage(): Language {
  if (typeof window === "undefined") return "pt";

  // 1. Check if the user previously explicitly chose a language
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language;
    if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
      return saved;
    }
  } catch {
    // localStorage might be unavailable or disabled
  }

  // 2. Check browser languages in order of user priority
  try {
    const userLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const rawLang of userLangs) {
      if (!rawLang) continue;
      const code = rawLang.toLowerCase().split("-")[0];
      if (code === "pt") return "pt";
      if (code === "es") return "es";
      if (code === "en") return "en";
    }
  } catch {
    // Fallback if navigator API is restricted
  }

  return "pt";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectUserLanguage());

  useEffect(() => {
    // Re-verify in client after hydration
    const detected = detectUserLanguage();
    if (detected !== language) {
      setLanguageState(detected);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
    } catch {
      // Ignore storage errors
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const dict = translations[language] || translations.pt;

  const t = (key: TranslationKey, params?: Record<string, string | number>): string => {
    let val = getNestedValue(dict, key);
    if (!val) {
      val = getNestedValue(translations.pt, key) || key;
    }
    if (typeof val !== "string") return String(key);

    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramVal]) =>
          acc.replace(new RegExp(`{${paramKey}}`, "g"), String(paramVal)),
        val,
      );
    }
    return val;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, dict: dict as TranslationDictionary }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
