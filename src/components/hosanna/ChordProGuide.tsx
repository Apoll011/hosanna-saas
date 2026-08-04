import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
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
  Sparkles,
  Tags,
} from "lucide-react";
import { StaffLines } from "./HosannaLanding";

type DirectiveCategory = "metadata" | "comment" | "structure" | "notation";

interface DirectiveEntry {
  directive: string;
  alias?: string;
  category: DirectiveCategory;
  description: string;
  example?: string;
  hosanna?: boolean;
}

const DIRECTIVES: DirectiveEntry[] = [
  // Metadados
  {
    directive: "title",
    alias: "t",
    category: "metadata",
    description: "Nome oficial do cântico",
    example: "{title: Grandioso és Tu}",
  },
  {
    directive: "subtitle",
    alias: "st",
    category: "metadata",
    description: "Subtítulo ou versão (ex: acústico, ao vivo)",
  },
  { directive: "artist", alias: "a", category: "metadata", description: "Autor ou banda original" },
  {
    directive: "key",
    alias: "k",
    category: "metadata",
    description: "Tom base, usado nas transposições automáticas",
    example: "{key: A}",
  },
  {
    directive: "original_key",
    category: "metadata",
    description: "Tom original, quando diferente do tom em que a equipa toca",
  },
  {
    directive: "tempo",
    category: "metadata",
    description: "Batidas por minuto (BPM), útil para o metrónomo ou guias",
  },
  { directive: "time", category: "metadata", description: "Compasso rítmico, ex: 4/4 ou 6/8" },
  {
    directive: "capo",
    category: "metadata",
    description: "Casa do capotraste sugerida para a guitarra",
  },
  {
    directive: "duration",
    category: "metadata",
    description: "Duração em mm:ss (O Hosanna converte automaticamente)",
  },
  { directive: "album", category: "metadata", description: "Álbum ou coletânea de origem" },
  { directive: "composer", category: "metadata", description: "Compositor da melodia" },
  { directive: "arranger", category: "metadata", description: "Responsável pelo arranjo musical" },
  { directive: "lyricist", category: "metadata", description: "Autor da letra" },
  {
    directive: "copyright",
    category: "metadata",
    description: "Informação de direitos de autor / CCLI",
  },
  { directive: "year", category: "metadata", description: "Ano de lançamento ou composição" },
  {
    directive: "youtube",
    category: "metadata",
    description: "Link do vídeo. Cria um mini-player de áudio na app para ouvir durante o ensaio!",
    example: "{youtube: https://youtu.be/...}",
    hosanna: true,
  },
  {
    directive: "song_number",
    alias: "number",
    category: "metadata",
    description: "Número do hinário ou pasta da igreja, para pesquisa rápida",
    example: "{song_number: 147}",
    hosanna: true,
  },
  // Comentários
  {
    directive: "comment",
    alias: "c",
    category: "comment",
    description: "Instrução para a banda (ex: Solo de guitarra, Apenas Bateria)",
  },
  {
    directive: "comment_italic",
    alias: "ci",
    category: "comment",
    description: "Comentário em itálico, para notas mais discretas (dinâmica)",
  },
  {
    directive: "comment_box",
    alias: "cb",
    category: "comment",
    description: "Comentário em caixa, ideal para avisos importantes no ecrã",
  },
  {
    directive: "repeat",
    alias: "re",
    category: "comment",
    description: "Marca um trecho a repetir (ex: 2x, ou até sinal do líder)",
  },
  // Estrutura
  {
    directive: "start_of_verse",
    alias: "sov",
    category: "structure",
    description: "Inicia um verso",
  },
  {
    directive: "end_of_verse",
    alias: "eov",
    category: "structure",
    description: "Termina o verso atual",
  },
  {
    directive: "start_of_chorus",
    alias: "soc",
    category: "structure",
    description: "Inicia um refrão",
  },
  {
    directive: "end_of_chorus",
    alias: "eoc",
    category: "structure",
    description: "Termina o refrão atual",
  },
  {
    directive: "start_of_bridge",
    alias: "sob",
    category: "structure",
    description: "Inicia uma ponte",
  },
  {
    directive: "end_of_bridge",
    alias: "eob",
    category: "structure",
    description: "Termina a ponte atual",
  },
  {
    directive: "verse",
    alias: "v",
    category: "structure",
    description: "Atalho rápido para abrir um novo verso",
  },
  {
    directive: "bridge",
    alias: "b",
    category: "structure",
    description: "Atalho rápido para abrir uma nova ponte",
  },
  {
    directive: "chorus",
    alias: "ch",
    category: "structure",
    description: "Copia e repete automaticamente a letra do último refrão definido",
    example: "{chorus}",
    hosanna: true,
  },
  {
    directive: "new_song",
    alias: "ns",
    category: "structure",
    description: "Separa dois cânticos dentro do mesmo ficheiro",
  },
  // Notação
  {
    directive: "start_of_tab",
    alias: "sot",
    category: "notation",
    description: "Inicia um bloco de tablatura (para dedilhados ou riffs)",
  },
  {
    directive: "end_of_tab",
    alias: "eot",
    category: "notation",
    description: "Termina o bloco de tablatura",
  },
  {
    directive: "start_of_grid",
    alias: "sog",
    category: "notation",
    description: "Inicia uma secção de compassos (ideal para introduções)",
  },
  {
    directive: "end_of_grid",
    alias: "eog",
    category: "notation",
    description: "Termina a secção de grelha",
  },
];

const CATEGORY_META: Record<
  DirectiveCategory,
  { label: string; icon: React.ElementType; chip: string; dot: string }
> = {
  metadata: {
    label: "Metadados",
    icon: Tags,
    chip: "bg-blue-50 text-primary border-blue-100",
    dot: "bg-primary",
  },
  comment: {
    label: "Comentários",
    icon: ClipboardList,
    chip: "bg-amber-50 text-amber-700 border-amber-100",
    dot: "bg-amber-500",
  },
  structure: {
    label: "Estrutura",
    icon: Layers,
    chip: "bg-emerald-50 text-emerald-700 border-emerald-100",
    dot: "bg-emerald-500",
  },
  notation: {
    label: "Notação",
    icon: Grid3x3,
    chip: "bg-violet-50 text-violet-700 border-violet-100",
    dot: "bg-violet-500",
  },
};

const ESSENTIAL_DIRECTIVES = ["title", "artist", "key", "tempo", "youtube", "song_number"];

const TOC = [
  { id: "fundamentos", label: "Fundamentos" },
  { id: "sintaxe", label: "Sintaxe de Acordes" },
  { id: "diretivas", label: "Diretivas Essenciais" },
  { id: "estrutura", label: "Estrutura do Cântico" },
  { id: "notas", label: "Grelhas & Tempos" },
  { id: "tablatura", label: "Tablatura" },
  { id: "atalhos", label: "Atalhos do Editor" },
  { id: "referencia", label: "Referência Rápida" },
];

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
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2.5 py-1 rounded-full shrink-0">
      <Sparkles className="w-3 h-3" />
      Exclusivo Hosanna
    </span>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[2.25rem] px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 shadow-[0_2px_0_0_rgba(15,23,42,0.12)] text-sm font-mono font-bold text-slate-700">
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
          atalho:{" "}
          <code className="font-mono font-semibold text-slate-500">{`${entry.alias} → Tab`}</code>
        </div>
      )}
      <p className="text-muted-foreground leading-relaxed">{entry.description}</p>
    </div>
  );
}

export function ChordProGuide() {
  useReveal();

  return (
    <div className="bg-white min-h-screen selection:bg-primary/10 font-sans">
      {/* ============================= HERO ============================= */}
      <section className="bg-hero-gradient pt-40 pb-16 text-white relative overflow-hidden -mt-30">
        <div className="absolute inset-0 text-white/10">
          <StaffLines className="top-24 opacity-40" />
          <StaffLines className="bottom-12 opacity-20" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-200 mb-8 border border-white/10">
            <BookMarked className="w-3.5 h-3.5" />
            Guia de Formação · Equipa de Louvor
          </div>
          <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-display mb-8 tracking-tight">
            Domine o <span className="text-blue-300">ChordPro</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-3xl mx-auto mb-14">
            A forma padrão e inteligente de escrever cifras. Tudo o que a sua equipa precisa de
            saber para organizar o repertório no Hosanna — do primeiro acorde ao dia do culto.
          </p>

          <div className="reveal grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-blue-200/70 mb-4">
                Documento Tradicional (Word)
              </div>
              <div className="font-mono text-sm text-blue-50/50 leading-loose whitespace-pre">
                {"  A            D\nSenhor meu Deus, ao contemplar"}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-amber-200/80">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                Desalinha em telemóveis e obriga a criar ficheiros por tom.
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-blue-300/30 p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-4">
                ChordPro no Hosanna
              </div>
              <div className="font-mono text-sm leading-loose">
                Senhor meu <span className="text-blue-300 font-bold">[A]</span>Deus, ao contemplar a{" "}
                <span className="text-blue-300 font-bold">[D]</span>terra
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-blue-100">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                Alinhamento perfeito, muda de tom num clique e gera diagramas.
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
                Neste guia
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
                  title="O que é o ChordPro?"
                  lede="Um formato de texto simples que o Hosanna lê para transformar os seus cânticos em ferramentas interativas para a banda."
                />
                <div className="prose prose-blue max-w-none text-muted-foreground text-lg leading-relaxed mt-8">
                  <p>
                    Em vez de colocar os acordes "a flutuar" sobre o texto, o ChordPro coloca-os{" "}
                    <span className="italic text-primary font-medium">dentro</span> da letra usando
                    parênteses retos{" "}
                    <code className="bg-blue-50 text-primary px-2 py-1 rounded-lg font-mono font-bold text-base">
                      [ ]
                    </code>
                    , imediatamente antes da sílaba onde a mudança de acorde acontece.
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4 mt-10 list-none p-0 reveal">
                  {[
                    "Muda de tom ou de capo num único clique",
                    "Ajusta o tamanho da letra perfeitamente a qualquer ecrã",
                    "Gera Dicionários Visuais (clique num acorde para ver as notas no Piano/Guitarra)",
                    "Player de Youtube integrado para a equipa ensaiar ouvindo o original",
                    "Pesquisa por número, tom ou andamento automático",
                    "Sempre legível, independentemente do tipo de letra usado",
                  ].map((text, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 bg-secondary p-4 rounded-2xl border border-blue-50/50 shadow-sm transition-transform hover:-translate-y-1"
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
                  title="A Anatomia de um Cântico"
                  lede="A receita é sempre a mesma: Informações no topo (Tom, Título), seguidas dos versos, refrões e pontes."
                />
                <div className="mt-8">
                  <CodeWindow filename="grandioso-es-tu.chordpro">
                    <div className="text-slate-500 italic mb-2"># 1. Informação (Metadados)</div>
                    <div>
                      <span className="text-blue-400">{"{"}title:</span> Grandioso és Tu
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{"{"}artist:</span> Hino Clássico
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
                      # 2. Partes do Cântico (Secções)
                    </div>
                    <div>
                      <span className="text-blue-400">{"{"}start_of_verse:</span> Verso 1
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      Senhor meu <span className="text-amber-400 font-bold">[A]</span>Deus, ao
                      contemplar a <span className="text-amber-400 font-bold">[D]</span>terra
                    </div>
                    <div>
                      E o <span className="text-amber-400 font-bold">[A]</span>vasto mar que{" "}
                      <span className="text-amber-400 font-bold">[E]</span>Tu, Senhor, cri
                      <span className="text-amber-400 font-bold">[A]</span>aste
                    </div>
                    <div>
                      <span className="text-blue-400">
                        {"{"}end_of_verse{"}"}
                      </span>
                    </div>
                  </CodeWindow>
                </div>
                <div className="mt-6">
                  <Callout title="Uma diretiva, duas formas de a escrever">
                    Pode usar a forma completa (<code>{"{start_of_verse}"}</code>) ou a abreviatura
                    (<code>{"{sov}"}</code>). O Hosanna entende ambas da mesma forma!
                  </Callout>
                </div>
              </div>

              {/* ---------------- Diretivas Essenciais ---------------- */}
              <div id="diretivas" className="scroll-mt-28">
                <SectionHeader
                  icon={Music2}
                  title="Diretivas Essenciais"
                  lede="As instruções mais usadas no dia-a-dia. Incluem opções exclusivas do Hosanna para otimizar os seus ensaios."
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
                  title="Estrutura do Cântico"
                  lede="Separe a letra em blocos para que o Hosanna crie os cabeçalhos coloridos automaticamente (Verso, Refrão, Ponte)."
                />
                <div className="grid sm:grid-cols-3 gap-4 mt-8 reveal">
                  {[
                    { tag: "verse", label: "Verso", desc: "A narrativa principal da música." },
                    { tag: "chorus", label: "Refrão", desc: "A parte mais forte e que se repete." },
                    { tag: "bridge", label: "Ponte", desc: "A transição que liga as secções." },
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
                      Se usar <code>{"{chorus}"}</code> sem mais nada, o Hosanna{" "}
                      <strong>copia e renderiza a letra do último refrão</strong> introduzido. Poupe
                      tempo e evite reescrever o refrão depois de cada verso!
                    </p>
                  </div>
                  <div className="p-8 bg-slate-900 font-mono text-sm text-blue-100 leading-relaxed">
                    <div>
                      <span className="text-blue-400">{"{start_of_chorus}"}</span>
                    </div>
                    <div>
                      Grandioso <span className="text-amber-400 font-bold">[E]</span>és Tu...
                    </div>
                    <div>
                      <span className="text-blue-400">{"{end_of_chorus}"}</span>
                    </div>
                    <div className="text-slate-500 mt-5"># Verso 2 ...</div>
                    <div className="text-slate-500 mt-5">
                      # Em vez de escrever o refrão de novo:
                    </div>
                    <div className="text-green-400 font-bold mt-1">{"{chorus}"}</div>
                    <div className="text-slate-500/80 text-xs mt-1">
                      (O Hosanna renderiza o refrão automaticamente)
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- Notas & Grelhas ---------------- */}
              <div id="notas" className="scroll-mt-28">
                <SectionHeader
                  icon={Grid3x3}
                  eyebrow="Para Instrumentistas"
                  title="Grelhas de Acordes & Tempos"
                  lede="Precisa de escrever uma introdução ou instrumental? Use as barras verticais para desenhar compassos ou anote quanto tempo dura cada acorde."
                />

                <div className="mt-8">
                  <CodeWindow filename="instrumental.chordpro">
                    <div className="text-slate-500 italic mb-2">
                      # Introdução (Separar por compassos)
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
                      # Notas com durações específicas (Exclusivo)
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
                      <Grid3x3 className="w-4 h-4" /> Barlines (Compassos)
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground mt-4">
                      <li>
                        <code>|</code> → Separação normal de compasso
                      </li>
                      <li>
                        <code>||</code> → Início ou fim de secção
                      </li>
                      <li>
                        <code>|:</code> e <code>:|</code> → Marcas de repetição
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 border border-border rounded-2xl shadow-sm bg-secondary/30">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-primary flex items-center gap-2">
                        <Repeat className="w-4 h-4" /> Durações (Tempos)
                      </h4>
                      <HosannaBadge />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Adicione <code>@X</code> dentro do parêntesis do acorde para ditar a sua
                      duração visual na grelha.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground mt-3">
                      <li>
                        <code>[Am@2x]</code> → Dura o dobro do tempo
                      </li>
                      <li>
                        <code>[C@0.5x]</code> → Dura metade do tempo
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ---------------- Tablatura ---------------- */}
              <div id="tablatura" className="scroll-mt-28">
                <SectionHeader
                  icon={Music2}
                  eyebrow="Para Guitarristas"
                  title="Tablatura"
                  lede="Ideal para descrever dedilhados, riffs ou solos com precisão cirúrgica."
                />
                <div className="mt-8">
                  <CodeWindow filename="riff-intro.chordpro">
                    <div>
                      <span className="text-blue-400">{"{start_of_tab: Riff de Guitarra}"}</span>
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
                  <Callout variant="warning" title="Sem formatação automática">
                    No bloco de tablatura, o Hosanna respeita 100% os espaços introduzidos e usa um
                    tipo de letra mono-espaçado para garantir que os traços ficam perfeitamente
                    alinhados.
                  </Callout>
                </div>
              </div>

              {/* ---------------- Atalhos & Snippets ---------------- */}
              <div id="atalhos" className="scroll-mt-28">
                <SectionHeader
                  icon={Keyboard}
                  eyebrow="Ferramentas Práticas"
                  title="Atalhos do Editor Hosanna"
                  lede="Não precisa de memorizar ou escrever as diretivas por extenso. O nosso editor foi pensado para ser rápido."
                />

                <div className="mt-10 reveal">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      1. Autocompletar Acordes
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    À medida que adiciona acordes na música, o Hosanna memoriza-os. Basta abrir um
                    parêntesis reto <code>[</code> e o editor sugere os acordes que já utilizou!
                  </p>
                </div>

                <div className="mt-14 reveal">
                  <div className="flex items-center gap-3 mb-2">
                    <MousePointerClick className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      2. Selecionar e Envolver (Atalhos e Botão Direito)
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    Escreveu o texto todo e esqueceu-se das secções? Selecione as linhas da letra
                    com o rato e use um dos atalhos abaixo (ou clique com o botão direito do rato).
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      {
                        keys: ["Alt", "V"],
                        label: "Criar Verso",
                        desc: "Envolve a seleção num Verso",
                      },
                      {
                        keys: ["Alt", "R"],
                        label: "Criar Refrão",
                        desc: "Envolve a seleção num Refrão",
                      },
                      {
                        keys: ["Alt", "B"],
                        label: "Criar Ponte",
                        desc: "Envolve a seleção numa Ponte",
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
                      3. Escreva a sigla e prima "Tab"
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    Numa linha vazia do editor, comece a escrever uma destas palavras-chave e
                    carregue na tecla <Key>Tab</Key>. O editor preenche o resto por si!
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { trigger: "!", result: "Estrutura inteira (nova música)" },
                      { trigger: "t / title", result: "{title: ...}" },
                      { trigger: "a / artist", result: "{artist: ...}" },
                      { trigger: "k / key", result: "{key: ...}" },
                      { trigger: "tempo", result: "{tempo: 120}" },
                      { trigger: "youtube", result: "{youtube: url}" },
                      { trigger: "c / comment", result: "{comment: ...}" },
                      { trigger: "verse", result: "Bloco de Verso" },
                      { trigger: "chorus", result: "Bloco de Refrão" },
                      { trigger: "bridge", result: "Bloco de Ponte" },
                      { trigger: "tab", result: "Bloco de Tablatura (Grelha Vazia)" },
                      { trigger: "grid", result: "Bloco de Grelha Musical" },
                      { trigger: "||", result: "Grelha vazia de 4 compassos" },
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
                  eyebrow="Folha de Consulta"
                  title="Referência Rápida"
                  lede="Todas as instruções reconhecidas pelo Hosanna organizadas por categoria."
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
                            {entries.length} diretivas
                          </span>
                        </div>
                        <div className="rounded-2xl border border-border overflow-hidden shadow-sm overflow-x-auto">
                          <table className="w-full text-sm min-w-[600px]">
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
                                    {entry.description}
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
            Pronto para transformar o repertório da sua igreja?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            O editor inteligente do Hosanna guia-o passo a passo para que os cânticos fiquem
            perfeitos, organizados e prontos para o próximo ensaio.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="rounded-full bg-primary px-10 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all py-6"
            >
              Criar o Primeiro Cântico
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 text-lg font-medium py-6"
              asChild
            >
              <a href="/">Voltar ao Início</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
