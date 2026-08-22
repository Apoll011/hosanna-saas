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

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === "pt" || saved === "en" || saved === "es")) {
        setLanguageState(saved);
      } else {
        const browserLang = navigator.language.slice(0, 2);
        if (browserLang === "en" || browserLang === "es" || browserLang === "pt") {
          setLanguageState(browserLang as Language);
        }
      }
    } catch {
      // Ignore localStorage errors (e.g. SSR)
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
      // Ignore
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
        (acc, [paramKey, paramVal]) => acc.replace(new RegExp(`{${paramKey}}`, "g"), String(paramVal)),
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
