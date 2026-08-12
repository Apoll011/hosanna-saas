import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { Check, ListMusic, Music2 } from "lucide-react";
import { useState } from "react";

type SourceApp = {
  id: string;
  name: string;
  description: string;
  available: boolean;
};

const SOURCE_APPS: SourceApp[] = [
  {
    id: "songbookpro",
    name: "Songbook Pro",
    description: "Um ficheiro de backup. Cifras, tons e os seus sets tornam-se setlists.",
    available: true,
  },
  {
    id: "onsong",
    name: "OnSong",
    description: "Exporte em ChordPro. Cifras, tons e anotações preservadas.",
    available: false,
  },
  {
    id: "planningcenter",
    name: "Planning Center",
    description: "Ligamos à sua biblioteca de planos e serviços.",
    available: false,
  },
  {
    id: "chord1",
    name: "Chord1",
    description: "Importação direta de cifras, tons e letras.",
    available: false,
  },
];

export function MigrationSection() {
  useReveal();
  const [selectedId, setSelectedId] = useState(SOURCE_APPS[0].id);
  const current = SOURCE_APPS.find((a) => a.id === selectedId)!;

  return (
    <section id="features" className="relative bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className={cn("reveal max-w-2xl", "mx-auto text-center")}>
          <div className={cn("text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark")}>
            Transição Suave
          </div>
          <h2
            className={cn(
              "mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl",
            )}
          >
            Mude para o Hosanna <span className="text-blue-400">sem perder nada</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Já utiliza outra ferramenta? Consegues facilmente importar as tuas músicas
          </p>
        </div>
        <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center mt-6">
          {/* Left: copy + picker */}
          <div className="min-w-0">
            <div className="reveal mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/70 mb-3">
                De onde vêm as suas músicas?
              </p>
              <div
                role="radiogroup"
                aria-label="De onde vêm as suas músicas?"
                className="flex flex-col gap-2"
              >
                {SOURCE_APPS.map((app) => {
                  const isSelected = app.id === selectedId;
                  return (
                    <button
                      key={app.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedId(app.id)}
                      className={`group flex w-full items-center gap-3.5 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-primary/50 bg-white shadow-md shadow-primary/10"
                          : "border-border/70 bg-secondary/40 hover:border-border hover:bg-secondary/60"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-200 ${
                          isSelected
                            ? "bg-primary shadow-[0_0_8px_2px_rgba(37,99,235,0.35)]"
                            : "bg-blue-200"
                        }`}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="font-display font-bold text-sm text-primary">
                            {app.name}
                          </span>
                          {!app.available && (
                            <span className="text-[10px] font-bold uppercase tracking-wide text-blue-500 bg-blue-100 rounded-full px-2 py-0.5">
                              Em breve
                            </span>
                          )}
                        </span>
                        <span className="block text-xs leading-snug text-muted-foreground mt-0.5">
                          {app.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: animated mockup */}
          <div className="min-w-0 hidden lg:block reveal">
            <div className="relative mx-auto w-full max-w-sm select-none" aria-hidden="true">
              <div
                className="hm-rise relative z-10 mx-auto w-72 max-w-full"
                style={{ ["--hm-delay" as any]: "0ms" }}
              >
                <div className="hm-float flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-lg shadow-blue-900/5 -rotate-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Music2 className="h-5 w-5 text-primary" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold text-primary">
                      {current.name.toLowerCase().replace(/\s+/g, "")}.backup
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {current.name} · 128 músicas
                    </span>
                  </span>
                </div>
              </div>

              <svg viewBox="0 0 320 72" className="relative z-0 -my-1 h-18 w-full" fill="none">
                <defs>
                  <mask id="hm-path-reveal" maskUnits="userSpaceOnUse">
                    <path
                      className="hm-path-mask"
                      d="M 128 2 C 128 40, 208 20, 208 66"
                      stroke="white"
                      strokeWidth="12"
                      pathLength="100"
                    />
                  </mask>
                </defs>
                <path
                  d="M 128 2 C 128 40, 208 20, 208 66"
                  stroke="#2563eb"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="0.5 7"
                  pathLength="100"
                  mask="url(#hm-path-reveal)"
                />
                <circle className="hm-arrival" cx="208" cy="66" r="4" fill="#2563eb" />
              </svg>

              <div className="hm-rise relative" style={{ ["--hm-delay" as any]: "150ms" }}>
                <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl shadow-blue-900/10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
                  />
                  <div className="relative flex items-center gap-2 border-b border-blue-50 px-4 py-2.5">
                    <span className="h-4 w-4 rounded-sm bg-primary" />
                    <span className="font-display text-sm font-bold text-primary">Hosanna</span>
                    <span className="hm-eq ml-auto" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                  <div className="relative flex flex-col gap-1.5 p-3">
                    <div
                      className="hm-row flex items-center gap-2.5 rounded-lg bg-secondary/40 px-3 py-2"
                      style={{ ["--hm-delay" as any]: "1050ms" }}
                    >
                      <Music2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm font-semibold text-primary">Wonderwall</span>
                      <span className="text-xs text-muted-foreground">Oasis</span>
                      <span className="ml-auto rounded bg-blue-100 px-1.5 py-0.5 font-display text-[10px] font-bold text-primary">
                        F#m
                      </span>
                    </div>
                    <div
                      className="hm-row flex items-center gap-2.5 rounded-lg bg-secondary/40 px-3 py-2"
                      style={{ ["--hm-delay" as any]: "1200ms" }}
                    >
                      <Music2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="block h-2 w-24 rounded bg-blue-100" />
                      <span className="ml-auto block h-2 w-6 rounded bg-blue-100" />
                    </div>
                    <div
                      className="hm-row flex items-center gap-2.5 rounded-lg bg-secondary/40 px-3 py-2"
                      style={{ ["--hm-delay" as any]: "1350ms" }}
                    >
                      <Music2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="block h-2 w-16 rounded bg-blue-100" />
                      <span className="ml-auto block h-2 w-6 rounded bg-blue-100" />
                    </div>
                    <div
                      className="hm-row self-start mt-0.5 flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1"
                      style={{ ["--hm-delay" as any]: "1550ms" }}
                    >
                      <ListMusic className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-semibold text-primary">
                        Culto de sexta · 12 músicas
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="hm-pop absolute -right-2 -top-3 z-10 flex items-center gap-1.5 rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs font-medium text-primary shadow-xl shadow-blue-900/10 sm:-right-5"
                  style={{ ["--hm-delay" as any]: "1800ms", ["--hm-rot" as any]: "2deg" }}
                >
                  Cifras &amp; tons
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                </div>
                <div
                  className="hm-pop absolute -bottom-3 -left-2 z-10 flex items-center gap-1.5 rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs font-medium text-primary shadow-xl shadow-blue-900/10 sm:-left-5"
                  style={{ ["--hm-delay" as any]: "1950ms", ["--hm-rot" as any]: "-2deg" }}
                >
                  Setlists
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hm-rise {
          animation: hm-rise 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--hm-delay, 0ms);
        }
        .hm-float {
          animation: hm-float 4s ease-in-out 700ms infinite;
        }
        .hm-row, .hm-pop {
          opacity: 0;
          animation: hm-row-in 500ms ease-out both;
          animation-delay: var(--hm-delay, 0ms);
        }
        .hm-pop {
          animation-name: hm-pop-in;
          --hm-rot: 0deg;
        }
        .hm-path-mask {
          stroke-dashoffset: 100;
          animation: hm-path 900ms ease-out 850ms forwards;
        }
        .hm-arrival {
          opacity: 0;
          animation: hm-row-in 300ms ease-out 1750ms forwards;
        }
        .hm-eq span {
          display: inline-block;
          width: 3px;
          margin-left: 2px;
          background: #2563eb;
          border-radius: 1px;
          animation: hm-eq 900ms ease-in-out infinite;
        }
        .hm-eq span:nth-child(1) { height: 8px; animation-delay: 0ms; }
        .hm-eq span:nth-child(2) { height: 14px; animation-delay: 150ms; }
        .hm-eq span:nth-child(3) { height: 6px; animation-delay: 300ms; }

        @keyframes hm-rise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hm-float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-6px) rotate(-2deg); }
        }
        @keyframes hm-row-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hm-pop-in {
          from { opacity: 0; transform: scale(0.85) rotate(var(--hm-rot)); }
          to { opacity: 1; transform: scale(1) rotate(var(--hm-rot)); }
        }
        @keyframes hm-path {
          to { stroke-dashoffset: 0; }
        }
        @keyframes hm-eq {
          0%, 100% { transform: scaleY(0.6); }
          50% { transform: scaleY(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hm-rise, .hm-float, .hm-row, .hm-pop, .hm-path-mask, .hm-arrival, .hm-eq span {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
