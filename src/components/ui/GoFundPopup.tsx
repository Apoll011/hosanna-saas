import { useI18n } from "@/lib/i18n";
import { Heart, X } from "lucide-react";
import { useState } from "react";

const goFundMeLink =
  "https://www.gofundme.com/f/ajudenos-a-levar-o-hosanna-a-igrejas-de-todo-o-mundo/widget/medium?attribution_id=sl%3A6ae5cf26-7689-4639-ba2f-533a305c601d";

export function GoFundPopup() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="absolute bottom-8 left-5 z-20 hidden w-full max-w-[300px] md:block animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="relative flex items-center gap-3 rounded-[28px] border border-white/25 bg-white/10 p-2.5 shadow-sm backdrop-blur-xl">

        <Heart className="h-4 w-4 shrink-0 fill-white/20 text-white" />
        <h3 className="font-display text-sm font-semibold text-white pr-4 whitespace-nowrap">
          {t("landing.gofundPopup.title")}
        </h3>

        <a
          href={goFundMeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto shrink-0 inline-flex items-center justify-center rounded-full border border-white bg-white px-3 py-1 text-xs font-semibold text-primary transition-all hover:bg-transparent hover:text-white active:scale-95"
        >
          {t("landing.gofundPopup.cta")}
        </a>
      </div>
    </div>
  );
}