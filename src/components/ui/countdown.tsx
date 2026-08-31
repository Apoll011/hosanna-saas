import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";

// Change this date to configure when the countdown ends.
const TARGET_DATE = "2026-09-01T12:00:00";

export function Countdown({ className = "" }: { className?: string }) {
  const getRemaining = () => Math.max(0, new Date(TARGET_DATE).getTime() - Date.now());
  const [remaining, setRemaining] = useState(getRemaining);
  const { t } = useI18n();

  useEffect(() => {
    const interval = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const totalSeconds = Math.floor(remaining / 1000);
  const values = [
    Math.floor(totalSeconds / 86400),
    Math.floor((totalSeconds % 86400) / 3600),
    Math.floor((totalSeconds % 3600) / 60),
    totalSeconds % 60,
  ];
  const labels = [
    t("common.time.days"),
    t("common.time.hours"),
    t("common.time.minutes"),
    t("common.time.seconds"),
  ];

  return (
    <div
      className={`-mt-28 origin-top scale-[0.714] ${className}`}
      style={{ transform: "scale(0.7143)" }}
    >
      <div
        className="flex items-start justify-center gap-1.5 text-center sm:gap-3"
        aria-label="Countdown timer"
      >
        {values.map((value, index) => (
          <div key={labels[index]} className="flex items-start gap-1.5 sm:gap-3">
            <div className="flex w-[4.2rem] flex-col items-center sm:w-20 md:w-24">
              <div className="flex h-14 w-full items-center justify-center rounded-lg bg-white font-mono text-2xl font-bold tabular-nums text-primary shadow-lg sm:h-16 sm:text-3xl md:h-20 md:text-4xl">
                {String(value).padStart(2, "0")}
              </div>
              <span className="mt-2 text-[9px] font-semibold tracking-[0.16em] text-white sm:text-[10px]">
                {labels[index]}
              </span>
            </div>
            {index < values.length - 1 && (
              <span className="pt-3 font-mono text-xl font-bold text-white/70 sm:pt-4 sm:text-2xl md:pt-5 md:text-3xl">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
