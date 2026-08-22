import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { useReveal } from "@/hooks/useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Code2,
  Grid3x3,
  Keyboard,
  Layers,
  Lightbulb,
  MousePointerClick,
  Music2,
  Repeat,
  Tags,
} from "lucide-react";
import { StaffLines } from "./HosannaLanding";

type DirectiveCategory = "metadata" | "comment" | "structure" | "notation";

interface DirectiveEntry {
  directive: string;
  alias?: string;
  category: DirectiveCategory;
  descriptionKey: string;
  example?: string;
  hosanna?: boolean;
}

const DIRECTIVES: DirectiveEntry[] = [
  // Metadados
  {
    directive: "title",
    alias: "t",
    category: "metadata",
    descriptionKey: "title",
    example: "{title: Grandioso és Tu}",
  },
  {
    directive: "subtitle",
    alias: "st",
    category: "metadata",
    descriptionKey: "subtitle",
  },
  { directive: "artist", alias: "a", category: "metadata", descriptionKey: "artist" },
  {
    directive: "key",
    alias: "k",
    category: "metadata",
    descriptionKey: "key",
    example: "{key: A}",
  },
  {
    directive: "original_key",
    category: "metadata",
    descriptionKey: "original_key",
  },
  {
    directive: "tempo",
    category: "metadata",
    descriptionKey: "tempo",
  },
  { directive: "time", category: "metadata", descriptionKey: "time" },
  {
    directive: "capo",
    category: "metadata",
    descriptionKey: "capo",
  },
  {
    directive: "duration",
    category: "metadata",
    alias: "duration",
    descriptionKey: "duration",
  },
  { directive: "album", category: "metadata", descriptionKey: "album" },
  { directive: "composer", category: "metadata", descriptionKey: "composer" },
  { directive: "arranger", category: "metadata", descriptionKey: "arranger" },
  { directive: "lyricist", category: "metadata", descriptionKey: "lyricist" },
  {
    directive: "copyright",
    category: "metadata",
    descriptionKey: "copyright",
  },
  { directive: "year", category: "metadata", descriptionKey: "year" },
  {
    directive: "youtube",
    category: "metadata",
    descriptionKey: "youtube",
    example: "{youtube: https://youtu.be/...}",
    hosanna: true,
  },
  {
    directive: "song_number",
    alias: "number",
    category: "metadata",
    descriptionKey: "song_number",
    example: "{song_number: 147}",
    hosanna: true,
  },
  // Comentários
  {
    directive: "comment",
    alias: "c",
    category: "comment",
    descriptionKey: "comment",
  },
  {
    directive: "comment_italic",
    alias: "ci",
    category: "comment",
    descriptionKey: "comment_italic",
  },
  {
    directive: "comment_box",
    alias: "cb",
    category: "comment",
    descriptionKey: "comment_box",
  },
  {
    directive: "repeat",
    alias: "re",
    category: "comment",
    descriptionKey: "repeat",
  },
  // Estrutura
  {
    directive: "start_of_verse",
    alias: "sov",
    category: "structure",
    descriptionKey: "start_of_verse",
  },
  {
    directive: "end_of_verse",
    alias: "eov",
    category: "structure",
    descriptionKey: "end_of_verse",
  },
  {
    directive: "start_of_chorus",
    alias: "soc",
    category: "structure",
    descriptionKey: "start_of_chorus",
  },
  {
    directive: "end_of_chorus",
    alias: "eoc",
    category: "structure",
    descriptionKey: "end_of_chorus",
  },
  {
    directive: "start_of_bridge",
    alias: "sob",
    category: "structure",
    descriptionKey: "start_of_bridge",
  },
  {
    directive: "end_of_bridge",
    alias: "eob",
    category: "structure",
    descriptionKey: "end_of_bridge",
  },
  {
    directive: "verse",
    alias: "v",
    category: "structure",
    descriptionKey: "verse",
  },
  {
    directive: "bridge",
    alias: "b",
    category: "structure",
    descriptionKey: "bridge",
  },
  {
    directive: "chorus",
    alias: "ch",
    category: "structure",
    descriptionKey: "chorus",
    example: "{chorus}",
    hosanna: true,
  },
  {
    directive: "new_song",
    alias: "ns",
    category: "structure",
    descriptionKey: "new_song",
  },
  // Notação
  {
    directive: "start_of_tab",
    alias: "sot",
    category: "notation",
    descriptionKey: "start_of_tab",
  },
  {
    directive: "end_of_tab",
    alias: "eot",
    category: "notation",
    descriptionKey: "end_of_tab",
  },
  {
    directive: "start_of_grid",
    alias: "sog",
    category: "notation",
    descriptionKey: "start_of_grid",
  },
  {
    directive: "end_of_grid",
    alias: "eog",
    category: "notation",
    descriptionKey: "end_of_grid",
  },
  {
    directive: "translator",
    category: "metadata",
    descriptionKey: "translator",
  },
  {
    directive: "ccli",
    alias: "ccli_number",
    category: "metadata",
    descriptionKey: "ccli",
  },
  {
    directive: "time_signature",
    alias: "timesignature",
    category: "metadata",
    descriptionKey: "time_signature",
    example: "{time_signature: 4/4}",
  },
];

const ESSENTIAL_DIRECTIVES = ["title", "artist", "key", "duration", "youtube", "song_number"];

function EyebrowIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-primary shadow-sm border border-blue-100">
      <Icon className="w-10 h-10" />
    </div>
  );
}

function SectionHeader({
  icon,
  eyebrow,
  title,
  lede,
}: {
  icon: React.ElementType;
  eyebrow?: string;
  title: string;
  lede?: React.ReactNode;
}) {
  return (
    <div className="space-y-6 reveal">
      <EyebrowIcon icon={icon} />
      {eyebrow && (
        <div className="text-xs font-semibold uppercase tracking-widest text-primary/60">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
        {title}
      </h2>
      {lede && (
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">{lede}</p>
      )}
    </div>
  );
}

function HosannaBadge() {
  const { t } = useI18n();
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2.5 py-1 rounded-full shrink-0">
      {t("common.exclusiveHosanna")}
    </span>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-9 px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 shadow-[0_2px_0_0_rgba(15,23,42,0.12)] text-sm font-mono font-bold text-slate-700">
      {children}
    </kbd>
  );
}

function CodeWindow({ filename, children }: { filename: string; children: React.ReactNode }) {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
      <div className="flex items-center justify-between px-8 py-5 bg-slate-800 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-sm font-mono text-slate-400 ml-2">{filename}</span>
        </div>
      </div>
      <div className="p-10 font-mono text-sm sm:text-base leading-relaxed text-blue-100 overflow-x-auto selection:bg-blue-500/30">
        {children}
      </div>
    </div>
  );
}

function Callout({
  variant = "tip",
  title,
  children,
}: {
  variant?: "tip" | "warning";
  title: string;
  children: React.ReactNode;
}) {
  const styles =
    variant === "tip"
      ? { wrap: "bg-blue-50/60 border-blue-100", icon: "text-primary", Icon: Lightbulb }
      : { wrap: "bg-amber-50/70 border-amber-100", icon: "text-amber-600", Icon: AlertTriangle };
  const Icon = styles.Icon;
  return (
    <div className={`rounded-2xl border p-6 flex gap-4 ${styles.wrap}`}>
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${styles.icon}`} />
      <div>
        <div className="font-bold text-primary mb-1">{title}</div>
        <div className="text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function DirectiveCard({ entry }: { entry: DirectiveEntry }) {
  const { t } = useI18n();
  const desc = t(`directives.${entry.descriptionKey}` as TranslationKey);

  return (
    <div className="p-6 border border-border rounded-2xl hover:border-primary/30 transition-all hover:bg-blue-50/10 group shadow-sm relative">
      <div className="flex items-start justify-between gap-3 mb-2">
        <code className="text-primary font-bold text-lg block group-hover:scale-105 transition-transform origin-left">
          {`{${entry.directive}: ...}`}
        </code>
        {entry.hosanna && <HosannaBadge />}
      </div>
      {entry.alias && (
        <div className="text-xs text-muted-foreground mb-2">
          {t("chordproGuide.shortcutLabel")}{" "}
          <code className="font-mono font-semibold text-slate-500">{`${entry.alias} → Tab`}</code>
        </div>
      )}
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export function ChordProGuide() {
  useReveal();
  const { t, dict } = useI18n();

  const TOC = [
    { id: "fundamentos", label: t("chordproGuide.toc.fundamentals") },
    { id: "sintaxe", label: t("chordproGuide.toc.syntax") },
    { id: "diretivas", label: t("chordproGuide.toc.directives") },
    { id: "estrutura", label: t("chordproGuide.toc.structure") },
    { id: "notas", label: t("chordproGuide.toc.grids") },
    { id: "tablatura", label: t("chordproGuide.toc.tablature") },
    { id: "atalhos", label: t("chordproGuide.toc.shortcuts") },
    { id: "referencia", label: t("chordproGuide.toc.reference") },
  ];

  const CATEGORY_META: Record<
    DirectiveCategory,
    { label: string; icon: React.ElementType; chip: string; dot: string }
  > = {
    metadata: {
      label: t("chordproGuide.categories.metadata"),
      icon: Tags,
      chip: "bg-blue-50 text-primary border-blue-100",
      dot: "bg-primary",
    },
    comment: {
      label: t("chordproGuide.categories.comment"),
      icon: ClipboardList,
      chip: "bg-amber-50 text-amber-700 border-amber-100",
      dot: "bg-amber-500",
    },
    structure: {
      label: t("chordproGuide.categories.structure"),
      icon: Layers,
      chip: "bg-emerald-50 text-emerald-700 border-emerald-100",
      dot: "bg-emerald-500",
    },
    notation: {
      label: t("chordproGuide.categories.notation"),
      icon: Grid3x3,
      chip: "bg-violet-50 text-violet-700 border-violet-100",
      dot: "bg-violet-500",
    },
  };

  return (
    <div className="bg-white min-h-screen selection:bg-primary/10 font-sans">
      {/* ============================= HERO ============================= */}
      <section className="bg-hero-gradient pt-40 pb-16 text-white relative overflow-hidden -mt-30">
        <div className="absolute inset-0 text-white/10">
          <StaffLines className="top-24 opacity-40" />
          <StaffLines className="bottom-12 opacity-20" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-200 border border-white/10">
              <BookMarked className="w-3.5 h-3.5" />
              {t("chordproGuide.heroBadge")}
            </div>
            <LanguageSelector />
          </div>
          <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-display mb-8 tracking-tight">
            {t("chordproGuide.heroTitleStart")}{" "}
            <span className="text-blue-300">{t("chordproGuide.heroTitleHighlight")}</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-3xl mx-auto mb-14">
            {t("chordproGuide.heroSubtitle")}
          </p>

          <div className="reveal grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-blue-200/70 mb-4">
                {t("chordproGuide.traditionalDoc")}
              </div>
              <div className="font-mono text-sm text-blue-50/50 leading-loose whitespace-pre">
                {"  A            D\nLord my God, when I in awesome wonder"}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-amber-200/80">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                {t("chordproGuide.traditionalWarning")}
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-blue-300/30 p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-4">
                {t("chordproGuide.chordproInHosanna")}
              </div>
              <div className="font-mono text-sm leading-loose">
                Lord my <span className="text-blue-300 font-bold">[A]</span>God, when I in{" "}
                <span className="text-blue-300 font-bold">[D]</span>awesome wonder
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-blue-100">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                {t("chordproGuide.chordproSuccess")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOC mobile */}
      <div className="lg:hidden sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="flex gap-2 overflow-x-auto px-6 py-4 no-scrollbar">
          {TOC.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 text-sm font-medium text-muted-foreground hover:text-primary px-3.5 py-1.5 rounded-full border border-border hover:border-primary/30 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ============================= CONTEÚDO ============================= */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16 items-start">
            {/* TOC desktop */}
            <nav className="hidden lg:block sticky top-28 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4 pl-3">
                {t("chordproGuide.tocTitle")}
              </div>
              {TOC.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-blue-50/60 rounded-xl px-3 py-2.5 transition-colors"
                >
                  <span className="text-xs font-mono text-primary/40 w-4">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="grid gap-20 min-w-0">
              {/* ---------------- Fundamentos ---------------- */}
              <div id="fundamentos" className="scroll-mt-28">
                <SectionHeader
                  icon={BookOpen}
                  title={t("chordproGuide.whatIsTitle")}
                  lede={t("chordproGuide.whatIsLede")}
                />
                <div className="prose prose-blue max-w-none text-muted-foreground text-lg leading-relaxed mt-8">
                  <p>{t("chordproGuide.whatIsParagraph")}</p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4 mt-10 list-none p-0 reveal">
                  {dict.chordproGuide.benefits.map((text: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 bg-secondary p-4 rounded-2xl border border-blue-50/50 shadow-sm transition-transform hover:-translate-y-1"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="font-medium text-primary text-sm sm:text-base leading-snug">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ---------------- Sintaxe de Acordes ---------------- */}
              <div id="sintaxe" className="scroll-mt-28">
                <SectionHeader
                  icon={Code2}
                  title={t("chordproGuide.anatomyTitle")}
                  lede={t("chordproGuide.anatomyLede")}
                />
                <div className="mt-8">
                  <CodeWindow filename="song-sample.chordpro">
                    <div className="text-slate-500 italic mb-2"># 1. Metadata</div>
                    <div>
                      <span className="text-blue-400">{"{"}title:</span> How Great Thou Art
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{"{"}artist:</span> Classic Hymn
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{"{"}key:</span> A
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{"{"}tempo:</span> 72
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <br />
                    <div className="text-slate-500 italic mb-2">
                      # 2. Sections
                    </div>
                    <div>
                      <span className="text-blue-400">{"{"}start_of_verse:</span> Verse 1
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      O Lord my <span className="text-amber-400 font-bold">[A]</span>God, when I in
                      awesome <span className="text-amber-400 font-bold">[D]</span>wonder
                    </div>
                    <div>
                      Consider <span className="text-amber-400 font-bold">[A]</span>all the worlds Thy
                      <span className="text-amber-400 font-bold">[E]</span>hands have
                      <span className="text-amber-400 font-bold">[A]</span>made
                    </div>
                    <div>
                      <span className="text-blue-400">
                        {"{"}end_of_verse{"}"}
                      </span>
                    </div>
                  </CodeWindow>
                </div>
                <div className="mt-6">
                  <Callout title={t("chordproGuide.oneDirectiveTwoWaysTitle")}>
                    {t("chordproGuide.oneDirectiveTwoWaysDesc")}
                  </Callout>
                </div>
              </div>

              {/* ---------------- Diretivas Essenciais ---------------- */}
              <div id="diretivas" className="scroll-mt-28">
                <SectionHeader
                  icon={Music2}
                  title={t("chordproGuide.essentialDirectivesTitle")}
                  lede={t("chordproGuide.essentialDirectivesLede")}
                />
                <div className="grid sm:grid-cols-2 gap-6 mt-8 reveal">
                  {ESSENTIAL_DIRECTIVES.map((key) => {
                    const entry = DIRECTIVES.find((d) => d.directive === key)!;
                    return <DirectiveCard key={key} entry={entry} />;
                  })}
                </div>
              </div>

              {/* ---------------- Estrutura & {chorus} ---------------- */}
              <div id="estrutura" className="scroll-mt-28">
                <SectionHeader
                  icon={Layers}
                  title={t("chordproGuide.structureTitle")}
                  lede={t("chordproGuide.structureLede")}
                />
                <div className="grid sm:grid-cols-3 gap-4 mt-8 reveal">
                  {[
                    { tag: "verse", label: dict.chordproGuide.sections.verse.label, desc: dict.chordproGuide.sections.verse.desc },
                    { tag: "chorus", label: dict.chordproGuide.sections.chorus.label, desc: dict.chordproGuide.sections.chorus.desc },
                    { tag: "bridge", label: dict.chordproGuide.sections.bridge.label, desc: dict.chordproGuide.sections.bridge.desc },
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 border border-border rounded-2xl shadow-sm">
                      <div className="font-bold text-primary text-lg mb-1">{item.label}</div>
                      <code className="text-[11px] sm:text-xs text-muted-foreground font-mono bg-secondary px-1.5 py-1 rounded">
                        {`{start_of_${item.tag}}`}
                      </code>
                      <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* {chorus} repetição mágica */}
                <div className="mt-10 grid md:grid-cols-[1fr_1.1fr] gap-0 rounded-2xl border border-border overflow-hidden shadow-sm reveal">
                  <div className="p-8 bg-secondary">
                    <div className="inline-flex p-3 rounded-xl bg-white text-primary shadow-sm mb-4">
                      <Repeat className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <code className="text-primary font-bold text-xl">{"{chorus}"}</code>
                      <HosannaBadge />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("chordproGuide.chorusMagicDesc")}
                    </p>
                  </div>
                  <div className="p-8 bg-slate-900 font-mono text-sm text-blue-100 leading-relaxed">
                    <div>
                      <span className="text-blue-400">{"{start_of_chorus}"}</span>
                    </div>
                    <div>
                      Then sings my <span className="text-amber-400 font-bold">[E]</span>soul...
                    </div>
                    <div>
                      <span className="text-blue-400">{"{end_of_chorus}"}</span>
                    </div>
                    <div className="text-slate-500 mt-5"># Verse 2 ...</div>
                    <div className="text-slate-500 mt-5">
                      # Instead of retyping the whole chorus:
                    </div>
                    <div className="text-green-400 font-bold mt-1">{"{chorus}"}</div>
                    <div className="text-slate-500/80 text-xs mt-1">
                      {t("chordproGuide.chorusMagicAutoNote")}
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- Notas & Grelhas ---------------- */}
              <div id="notas" className="scroll-mt-28">
                <SectionHeader
                  icon={Grid3x3}
                  eyebrow={t("chordproGuide.gridsEyebrow")}
                  title={t("chordproGuide.gridsTitle")}
                  lede={t("chordproGuide.gridsLede")}
                />

                <div className="mt-8">
                  <CodeWindow filename="instrumental.chordpro">
                    <div className="text-slate-500 italic mb-2">
                      # Intro
                    </div>
                    <div>
                      <span className="text-blue-400">
                        {"{start_of_grid:"} Intro{"}"}
                      </span>
                    </div>
                    <div>
                      <span className="text-amber-400 font-bold">||</span> [A]{" "}
                      <span className="text-amber-400 font-bold">|</span> [D]{" "}
                      <span className="text-amber-400 font-bold">|</span> [E]{" "}
                      <span className="text-amber-400 font-bold">|</span> [A]{" "}
                      <span className="text-amber-400 font-bold">||</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{"{end_of_grid}"}</span>
                    </div>

                    <br />

                    <div className="text-slate-500 italic mb-2">
                      # Custom durations
                    </div>
                    <div>
                      <span className="text-amber-400 font-bold">||</span> [Em
                      <span className="text-emerald-400 font-bold">@2x</span>]
                      <span className="text-amber-400 font-bold">|</span> [C
                      <span className="text-emerald-400 font-bold">@0.5x</span>] [D]
                      <span className="text-amber-400 font-bold">||</span>
                    </div>
                  </CodeWindow>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6 reveal">
                  <div className="p-6 border border-border rounded-2xl shadow-sm bg-secondary/30">
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <Grid3x3 className="w-4 h-4" /> {t("chordproGuide.barlinesTitle")}
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                      <li>
                        <code>|</code> → {t("chordproGuide.barlinesNormal")}
                      </li>
                      <li>
                        <code>||</code> → {t("chordproGuide.barlinesSection")}
                      </li>
                      <li>
                        <code>|:</code> {t("chordproGuide.barlinesRepeat")} <code>:|</code>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 border border-border rounded-2xl shadow-sm bg-secondary/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-primary flex items-center gap-2">
                        <Repeat className="w-4 h-4" /> {t("chordproGuide.durationsTitle")}
                      </h4>
                      <HosannaBadge />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      {t("chordproGuide.durationsDesc")}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                      <li>
                        <code>[Am@2x]</code> → {t("chordproGuide.durationsDouble")}
                      </li>
                      <li>
                        <code>[C@0.5x]</code> → {t("chordproGuide.durationsHalf")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ---------------- Tablatura ---------------- */}
              <div id="tablatura" className="scroll-mt-28">
                <SectionHeader
                  icon={Music2}
                  eyebrow={t("chordproGuide.tabEyebrow")}
                  title={t("chordproGuide.tabTitle")}
                  lede={t("chordproGuide.tabLede")}
                />
                <div className="mt-8">
                  <CodeWindow filename="riff-intro.chordpro">
                    <div>
                      <span className="text-blue-400">{"{start_of_tab: Guitar Riff}"}</span>
                    </div>
                    <div className="text-blue-50/80">e|-----------------0--2--3-------|</div>
                    <div className="text-blue-50/80">B|-------0--1--3-----------------|</div>
                    <div className="text-blue-50/80">G|----0--------------------------|</div>
                    <div className="text-blue-50/80">D|-------------------------------|</div>
                    <div className="text-blue-50/80">A|-------------------------------|</div>
                    <div className="text-blue-50/80">E|-------------------------------|</div>
                    <div>
                      <span className="text-blue-400">{"{end_of_tab}"}</span>
                    </div>
                  </CodeWindow>
                </div>
                <div className="mt-6">
                  <Callout variant="warning" title={t("chordproGuide.tabWarningTitle")}>
                    {t("chordproGuide.tabWarningDesc")}
                  </Callout>
                </div>
              </div>

              {/* ---------------- Atalhos & Snippets ---------------- */}
              <div id="atalhos" className="scroll-mt-28">
                <SectionHeader
                  icon={Keyboard}
                  eyebrow={t("chordproGuide.shortcutsEyebrow")}
                  title={t("chordproGuide.shortcutsTitle")}
                  lede={t("chordproGuide.shortcutsLede")}
                />

                <div className="mt-10 reveal">
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      {t("chordproGuide.autocompleteTitle")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    {t("chordproGuide.autocompleteDesc")}
                  </p>
                </div>

                <div className="mt-14 reveal">
                  <div className="flex items-center gap-3 mb-2">
                    <MousePointerClick className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      {t("chordproGuide.selectAndWrapTitle")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    {t("chordproGuide.selectAndWrapDesc")}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        keys: ["Alt", "V"],
                        label: t("chordproGuide.createVerse"),
                        desc: t("chordproGuide.createVerseDesc"),
                      },
                      {
                        keys: ["Alt", "R"],
                        label: t("chordproGuide.createChorus"),
                        desc: t("chordproGuide.createChorusDesc"),
                      },
                      {
                        keys: ["Alt", "B"],
                        label: t("chordproGuide.createBridge"),
                        desc: t("chordproGuide.createBridgeDesc"),
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 border border-border rounded-2xl shadow-sm bg-secondary/40"
                      >
                        <div className="flex items-center gap-2 mb-4">
                          {item.keys.map((k, i) => (
                            <span key={i} className="flex items-center gap-2">
                              <Key>{k}</Key>
                              {i < item.keys.length - 1 && (
                                <span className="text-muted-foreground text-sm">+</span>
                              )}
                            </span>
                          ))}
                        </div>
                        <div className="font-bold text-primary mb-1">{item.label}</div>
                        <p className="text-muted-foreground text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-14 reveal">
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      {t("chordproGuide.typeAndTabTitle")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    {t("chordproGuide.typeAndTabDesc")}
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { trigger: "!", result: "{title, key, bpm, verse, chorus}" },
                      { trigger: "t / title", result: "{title: ...}" },
                      { trigger: "a / artist", result: "{artist: ...}" },
                      { trigger: "k / key", result: "{key: ...}" },
                      { trigger: "tempo", result: "{tempo: 120}" },
                      { trigger: "youtube", result: "{youtube: url}" },
                      { trigger: "c / comment", result: "{comment: ...}" },
                      { trigger: "verse", result: "{start_of_verse} ... {end_of_verse}" },
                      { trigger: "chorus", result: "{start_of_chorus} ... {end_of_chorus}" },
                      { trigger: "bridge", result: "{start_of_bridge} ... {end_of_bridge}" },
                      { trigger: "tab", result: "{start_of_tab} ... {end_of_tab}" },
                      { trigger: "grid", result: "{start_of_grid} ... {end_of_grid}" },
                      { trigger: "||", result: "|| [ ] | [ ] | [ ] | [ ] ||" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 p-4 border border-border rounded-xl hover:border-primary/30 transition-all shadow-sm"
                      >
                        <code className="text-sm font-mono font-bold text-primary bg-blue-50 px-2.5 py-1.5 rounded-lg shrink-0">
                          {item.trigger}
                        </code>
                        <span className="text-muted-foreground text-xs text-right">
                          {item.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ---------------- Referência Rápida ---------------- */}
              <div id="referencia" className="scroll-mt-28">
                <SectionHeader
                  icon={BookMarked}
                  eyebrow={t("chordproGuide.quickRefEyebrow")}
                  title={t("chordproGuide.quickRefTitle")}
                  lede={t("chordproGuide.quickRefLede")}
                />

                <div className="mt-10 grid gap-10 reveal">
                  {(Object.keys(CATEGORY_META) as DirectiveCategory[]).map((cat) => {
                    const meta = CATEGORY_META[cat];
                    const entries = DIRECTIVES.filter((d) => d.category === cat);
                    return (
                      <div key={cat}>
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
                          <h3 className="text-lg font-display font-bold text-primary">
                            {meta.label}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {t("chordproGuide.directivesCount", { count: entries.length })}
                          </span>
                        </div>
                        <div className="rounded-2xl border border-border overflow-hidden shadow-sm overflow-x-auto">
                          <table className="w-full text-sm min-w-150">
                            <tbody>
                              {entries.map((entry, idx) => (
                                <tr
                                  key={entry.directive}
                                  className={idx % 2 === 0 ? "bg-white" : "bg-secondary/40"}
                                >
                                  <td className="px-5 py-3.5 font-mono font-bold text-primary whitespace-nowrap">
                                    {`{${entry.directive}}`}
                                  </td>
                                  <td className="px-5 py-3.5 font-mono text-muted-foreground whitespace-nowrap">
                                    {entry.alias ? `{${entry.alias}}` : "—"}
                                  </td>
                                  <td className="px-5 py-3.5 text-muted-foreground leading-relaxed w-full">
                                    {t(`directives.${entry.descriptionKey}` as TranslationKey)}
                                  </td>
                                  <td className="px-5 py-3.5 text-right">
                                    {entry.hosanna && <HosannaBadge />}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section className="bg-secondary py-16 font-sans">
        <div className="container mx-auto px-6 text-center max-w-3xl reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-8 tracking-tight">
            {t("chordproGuide.ctaTitle")}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t("chordproGuide.ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="rounded-full bg-primary px-10 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all py-6"
            >
              {t("chordproGuide.ctaCreateSong")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 text-lg font-medium py-6"
              asChild
            >
              <Link to="/">{t("chordproGuide.ctaBackHome")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
