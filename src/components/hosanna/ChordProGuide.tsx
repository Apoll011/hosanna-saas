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
    description: "Nome oficial da canção",
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
    description: "Tom original, quando diferente do tom de execução",
  },
  {
    directive: "tempo",
    category: "metadata",
    description: "Batidas por minuto (BPM), para o metrónomo visual",
  },
  { directive: "time", category: "metadata", description: "Compasso rítmico, ex: 4/4 ou 6/8" },
  { directive: "capo", category: "metadata", description: "Casa do capotraste sugerida" },
  {
    directive: "duration",
    category: "metadata",
    description: "Duração em mm:ss (Hosanna converte para segundos) ou Segundos",
  },
  { directive: "album", category: "metadata", description: "Álbum ou coletânea de origem" },
  { directive: "composer", category: "metadata", description: "Compositor da melodia" },
  { directive: "arranger", category: "metadata", description: "Responsável pelo arranjo usado" },
  { directive: "lyricist", category: "metadata", description: "Autor da letra" },
  { directive: "copyright", category: "metadata", description: "Informação de direitos de autor" },
  { directive: "year", category: "metadata", description: "Ano de lançamento ou composição" },
  {
    directive: "meta",
    category: "metadata",
    description: 'Par livre "etiqueta valor" para dados personalizados',
  },
  {
    directive: "youtube",
    alias: "youtube",
    category: "metadata",
    description: "Link do vídeo, usado para reprodução na app móvel",
    example: "{youtube: https://youtu.be/...}",
    hosanna: true,
  },
  {
    directive: "song_number",
    alias: "number",
    category: "metadata",
    description: "Número de referência do hinário/coletânea, para pesquisa instantânea",
    example: "{song_number: 147}",
    hosanna: true,
  },
  // Comentários
  {
    directive: "comment",
    alias: "c",
    category: "comment",
    description: "Instrução destacada para a banda (ex: Solo de guitarra)",
  },
  {
    directive: "comment_italic",
    alias: "ci",
    category: "comment",
    description: "Comentário em itálico, para notas mais discretas",
  },
  {
    directive: "comment_box",
    alias: "cb",
    category: "comment",
    description: "Comentário em caixa destacada, para avisos importantes",
  },
  {
    directive: "repeat",
    alias: "re",
    category: "comment",
    description: "Marca um trecho a repetir (ex: 2x, ou até sinal do maestro)",
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
    description: "Repete automaticamente o último refrão definido",
    example: "{chorus}",
    hosanna: true,
  },
  {
    directive: "new_song",
    alias: "ns",
    category: "structure",
    description: "Separa duas canções dentro do mesmo ficheiro",
  },
  // Notação
  {
    directive: "start_of_tab",
    alias: "sot",
    category: "notation",
    description: "Inicia um bloco de tablatura",
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
    description: "Inicia uma secção de grelha de acordes",
  },
  {
    directive: "end_of_grid",
    alias: "eog",
    category: "notation",
    description: "Termina a secção de grelha de acordes",
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

const ESSENTIAL_DIRECTIVES = ["title", "artist", "key", "duration", "youtube", "song_number"];

const TOC = [
  { id: "fundamentos", label: "Fundamentos" },
  { id: "sintaxe", label: "Sintaxe de Acordes" },
  { id: "diretivas", label: "Diretivas Essenciais" },
  { id: "estrutura", label: "Estrutura da Canção" },
  { id: "notas", label: "Notas & Grelhas" },
  { id: "tablatura", label: "Tablatura" },
  { id: "atalhos", label: "Atalhos & Snippets" },
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
      Hosanna
    </span>
  );
}

function CategoryChip({ category }: { category: DirectiveCategory }) {
  const meta = CATEGORY_META[category];
  const Icon = meta.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${meta.chip}`}
    >
      <Icon className="w-3 h-3" />
      {meta.label}
    </span>
  );
}

/** "Tecla" no estilo teclado físico, para os atalhos do editor */
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

/* ============================================================== */
/*  Página principal                                               */
/* ============================================================== */

export function ChordProGuide() {
  useReveal();

  return (
    <div className="bg-white min-h-screen selection:bg-primary/10 font-sans">
      {/* ============================= HERO ============================= */}
      <section className="bg-hero-gradient pt-[160px] pb-16 text-white relative overflow-hidden -mt-[120px]">
        <div className="absolute inset-0 text-white/10">
          <StaffLines className="top-24 opacity-40" />
          <StaffLines className="bottom-12 opacity-20" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-200 mb-8 border border-white/10">
            <BookMarked className="w-3.5 h-3.5" />
            Guia Oficial · Equipa de Louvor
          </div>
          <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight">
            Domine o <span className="text-blue-300">ChordPro</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-3xl mx-auto mb-14">
            O padrão de excelência para cifras digitais. Tudo o que a sua equipa precisa saber para
            escrever, organizar e tocar qualquer música no Hosanna — do primeiro acorde à última
            nota.
          </p>

          {/* Comparação: antes / depois — a tese da página */}
          <div className="reveal grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6">
              <div className="text-[11px] font-bold uppercase tracking-widest text-blue-200/70 mb-4">
                Cifra tradicional
              </div>
              <div className="font-mono text-sm text-blue-50/50 leading-loose whitespace-pre">
                {"  A            D\nSenhor meu Deus, ao contemplar"}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium text-amber-200/80">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                Desalinha em ecrãs pequenos e tipos de letra diferentes
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
                Sempre alinhado — em qualquer ecrã, tamanho ou tom
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOC móvel — pílulas horizontais */}
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
            {/* TOC desktop — sidebar fixa */}
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

            {/* Secções */}
            <div className="grid gap-20 min-w-0">
              {/* ---------------- Fundamentos ---------------- */}
              <div id="fundamentos" className="scroll-mt-28">
                <SectionHeader
                  icon={BookOpen}
                  title="O que é o ChordPro?"
                  lede="Um formato de texto simples que marca letras de músicas com acordes de forma inteligente, para que o Hosanna trate cada canção como dados vivos — não como uma imagem estática."
                />
                <div className="prose prose-blue max-w-none text-muted-foreground text-lg leading-relaxed mt-8">
                  <p>
                    Ao contrário das cifras tradicionais, onde os acordes flutuam sobre o texto e
                    perdem o alinhamento em diferentes tamanhos de letra, o ChordPro coloca os
                    acordes <span className="italic text-primary font-medium">dentro</span> da letra
                    usando parênteses retos{" "}
                    <code className="bg-blue-50 text-primary px-2 py-1 rounded-lg font-mono font-bold text-base">
                      [ ]
                    </code>
                    , logo antes da sílaba onde devem ser tocados.
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-6 mt-10 list-none p-0 reveal">
                  {[
                    "Transposição instantânea para qualquer tom",
                    "Ajuste dinâmico a qualquer tamanho de ecrã",
                    "Destaque visual de acordes e secções",
                    "Geração automática de diagramas de acordes",
                    "Pesquisa e organização por número ou palavra-chave",
                    "Reprodução de vídeo de referência dentro da app",
                  ].map((text, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 bg-secondary p-6 rounded-2xl border border-blue-50/50 shadow-sm transition-transform hover:-translate-y-1"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                      <span className="font-semibold text-primary">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ---------------- Sintaxe de Acordes ---------------- */}
              <div id="sintaxe" className="scroll-mt-28">
                <SectionHeader
                  icon={Code2}
                  title="Anatomia de uma Canção"
                  lede="Toda a canção segue a mesma receita: metadados no topo, depois secções nomeadas que organizam versos, refrão e pontes."
                />
                <div className="mt-8">
                  <CodeWindow filename="grandioso-es-tu.chordpro">
                    <div className="text-slate-500 italic mb-2"># Metadados essenciais</div>
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
                      <span className="text-blue-400">{"{"}song_number:</span> 147
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{"{"}duration:</span> 2:40
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <br />
                    <div className="text-slate-500 italic mb-2"># Definição de secções</div>
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
                    <br />
                    <div>
                      <span className="text-blue-400">{"{"}start_of_chorus:</span> Coro
                      <span className="text-blue-400">{"}"}</span>
                    </div>
                    <div>
                      Então mi<span className="text-amber-400 font-bold">[A]</span>nha alma{" "}
                      <span className="text-amber-400 font-bold">[D]</span>canta a{" "}
                      <span className="text-amber-400 font-bold">[A]</span>Ti, Senhor
                    </div>
                    <div>
                      Grandioso <span className="text-amber-400 font-bold">[E]</span>és Tu,
                      grandioso <span className="text-amber-400 font-bold">[A]</span>és Tu
                    </div>
                    <div>
                      <span className="text-blue-400">
                        {"{"}end_of_chorus{"}"}
                      </span>
                    </div>
                  </CodeWindow>
                </div>
                <div className="mt-6">
                  <Callout title="Uma diretiva, duas formas de escrever">
                    Toda a diretiva tem uma forma longa (<code>{"{start_of_verse}"}</code>) e um
                    atalho curto (<code>{"{sov}"}</code>) que fazem exatamente o mesmo. Use a forma
                    que preferir — o editor completa qualquer uma delas com Tab.
                  </Callout>
                </div>
              </div>

              {/* ---------------- Diretivas Essenciais ---------------- */}
              <div id="diretivas" className="scroll-mt-28">
                <SectionHeader
                  icon={Music2}
                  title="Diretivas Essenciais"
                  lede="As diretivas mais usadas no dia-a-dia — incluindo duas exclusivas do Hosanna, assinaladas com o selo abaixo."
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
                  title="Estrutura da Canção"
                  lede="Verso, refrão e ponte organizam a letra em blocos que o Hosanna sabe reconhecer, colorir e navegar automaticamente."
                />
                <div className="grid sm:grid-cols-3 gap-4 mt-8 reveal">
                  {[
                    { tag: "verse", label: "Verso", desc: "A narrativa principal da canção" },
                    {
                      tag: "chorus",
                      label: "Refrão",
                      desc: "O trecho que se repete, geralmente memorável",
                    },
                    { tag: "bridge", label: "Ponte", desc: "Uma variação que liga verso e refrão" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 border border-border rounded-2xl shadow-sm">
                      <div className="font-bold text-primary text-lg mb-1">{item.label}</div>
                      <code className="text-xs text-muted-foreground font-mono">
                        {`{start_of_${item.tag}} ... {end_of_${item.tag}}`}
                      </code>
                      <p className="text-muted-foreground leading-relaxed mt-3">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* {chorus} repeat callout */}
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
                      Repete automaticamente o <strong>último refrão</strong> escrito, sem que
                      precise de copiar e colar a letra outra vez. Perfeito para músicas com vários
                      versos que voltam sempre ao mesmo coro.
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
                    <div className="text-slate-500 mt-3"># ...depois do 2º verso</div>
                    <div className="text-green-400 font-bold">{"{chorus}"}</div>
                    <div className="text-slate-500 mt-1">
                      → repete o refrão de cima, sem retrabalho
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------------- Notas & Grelhas ---------------- */}
              <div id="notas" className="scroll-mt-28">
                <SectionHeader
                  icon={Grid3x3}
                  eyebrow="Para instrumentistas"
                  title="Notas & Grelhas"
                  lede="Introduções, pontes instrumentais e solos são escritos como uma sequência de acordes por compasso, usando barras verticais para separar cada tempo."
                />
                <div className="mt-8">
                  <CodeWindow filename="introducao.chordpro">
                    <div className="text-slate-500 italic mb-2"># Introdução instrumental</div>
                    <div>
                      <span className="text-amber-400 font-bold">||</span> [A]{" "}
                      <span className="text-amber-400 font-bold">|</span> [D]{" "}
                      <span className="text-amber-400 font-bold">|</span> [E]{" "}
                      <span className="text-amber-400 font-bold">|</span> [A]{" "}
                      <span className="text-amber-400 font-bold">||</span>
                    </div>
                    <br />
                    <div className="text-slate-500 italic mb-2"># Ou como bloco de grelha</div>
                    <div>
                      <span className="text-blue-400">{"{start_of_grid}"}</span>
                    </div>
                    <div>
                      <span className="text-amber-400 font-bold">||</span>[Em]
                      <span className="text-amber-400 font-bold">|</span>[C]
                      <span className="text-amber-400 font-bold">|</span>[D]
                      <span className="text-amber-400 font-bold">||</span>
                    </div>
                    <div>
                      <span className="text-blue-400">{"{end_of_grid}"}</span>
                    </div>
                  </CodeWindow>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-6 reveal">
                  {[
                    { tag: "|", desc: "Separa cada compasso" },
                    { tag: "||", desc: "Marca o início ou fim de toda a secção" },
                    { tag: ":|", desc: "Indica repetição do trecho anterior" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 border border-border rounded-2xl shadow-sm text-center"
                    >
                      <code className="text-primary font-bold text-xl block mb-1">{item.tag}</code>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---------------- Tablatura ---------------- */}
              <div id="tablatura" className="scroll-mt-28">
                <SectionHeader
                  icon={Music2}
                  eyebrow="Para guitarristas"
                  title="Tablatura"
                  lede="Para riffs ou dedilhados específicos, um bloco de tablatura preserva o alinhamento exato das seis cordas, tal como escrito."
                />
                <div className="mt-8">
                  <CodeWindow filename="riff-introducao.chordpro">
                    <div>
                      <span className="text-blue-400">{"{start_of_tab: Riff de abertura}"}</span>
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
                  <Callout variant="warning" title="Dentro de um bloco de tablatura">
                    O Hosanna preserva os espaços exatamente como escritos — nada é reformatado. Use
                    este bloco só para tablatura; para letra com acordes, use verso, refrão ou
                    ponte.
                  </Callout>
                </div>
              </div>

              {/* ---------------- Atalhos & Snippets ---------------- */}
              <div id="atalhos" className="scroll-mt-28">
                <SectionHeader
                  icon={Keyboard}
                  eyebrow="No editor"
                  title="Atalhos & Snippets"
                  lede="O editor do Hosanna foi pensado para que raramente precise de escrever uma diretiva por extenso."
                />

                {/* Keyboard shortcuts */}
                <div className="mt-10 reveal">
                  <div className="flex items-center gap-3 mb-2">
                    <MousePointerClick className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      Selecione texto e envolva numa secção
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    Selecione as linhas de um verso, refrão ou ponte e use o atalho correspondente —
                    o Hosanna adiciona as diretivas de início e fim à volta da seleção
                    automaticamente. Os mesmos atalhos também estão disponíveis no menu do botão
                    direito do rato.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { keys: ["Alt", "V"], label: "Verso", desc: "start_of_verse / end_of_verse" },
                      {
                        keys: ["Alt", "R"],
                        label: "Refrão",
                        desc: "start_of_chorus / end_of_chorus",
                      },
                      {
                        keys: ["Alt", "B"],
                        label: "Ponte",
                        desc: "start_of_bridge / end_of_bridge",
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
                        <code className="text-muted-foreground text-xs font-mono">{item.desc}</code>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Snippets */}
                <div className="mt-14 reveal">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-primary">
                      Snippets: escreva a abreviação, prima Tab
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                    Comece a escrever uma das abreviações abaixo numa linha vazia e prima{" "}
                    <Key>Tab</Key> — o editor completa a diretiva, já pronta para preencher.
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { trigger: "!", result: "esqueleto completo de canção nova" },
                      { trigger: "t / title", result: "{title: ...}" },
                      { trigger: "a / artist", result: "{artist: ...}" },
                      { trigger: "k / key", result: "{key: ...}" },
                      { trigger: "st / subtitle", result: "{subtitle: ...}" },
                      { trigger: "capo", result: "{capo: 5}" },
                      { trigger: "tempo", result: "{tempo: 120}" },
                      { trigger: "time", result: "{time: 4/4}" },
                      { trigger: "duration", result: "{duration: 4:00}" },
                      { trigger: "youtube", result: "{youtube: url}" },
                      { trigger: "number", result: "{song_number: ...}" },
                      { trigger: "c / comment", result: "{comment: ...}" },
                      { trigger: "cc", result: "{chorus}" },
                      { trigger: "verse", result: "bloco completo de verso" },
                      { trigger: "chorus", result: "bloco completo de refrão" },
                      { trigger: "bridge", result: "bloco completo de ponte" },
                      { trigger: "tab", result: "modelo de tablatura de 6 cordas" },
                      { trigger: "grid", result: "modelo de secção de grelha" },
                      { trigger: "[", result: "[Am] — insere um acorde" },
                      { trigger: "||", result: "linha de grelha com 4 acordes" },
                      { trigger: "d / define", result: "diagrama de acorde personalizado" },
                      { trigger: "cb / column", result: "{column_break}" },
                      { trigger: "arranger", result: "{arranger: ...}" },
                      { trigger: "composer", result: "{composer: ...}" },
                      { trigger: "copyright", result: "{copyright: ...}" },
                      { trigger: "lyricist", result: "{lyricist: ...}" },
                      { trigger: "album", result: "{album: ...}" },
                      { trigger: "year", result: "{year: 2020}" },
                      { trigger: "meta", result: "{meta: etiqueta valor}" },
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
                  eyebrow="Chapa de consulta"
                  title="Referência Rápida"
                  lede="Todas as diretivas reconhecidas pelo Hosanna, organizadas por categoria. Guarde esta secção para consultar durante os ensaios."
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
                        <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
                          <table className="w-full text-sm">
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

                  {/* Notação (símbolos) */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-violet-500" />
                      <h3 className="text-lg font-display font-bold text-primary">
                        Símbolos de Grelha
                      </h3>
                    </div>
                    <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
                      <table className="w-full text-sm">
                        <tbody>
                          {[
                            { symbol: "|", desc: "Separa cada compasso" },
                            { symbol: "||", desc: "Marca o início ou fim de toda a secção" },
                            { symbol: ":|", desc: "Indica repetição do trecho anterior" },
                          ].map((item, idx) => (
                            <tr
                              key={item.symbol}
                              className={idx % 2 === 0 ? "bg-white" : "bg-secondary/40"}
                            >
                              <td className="px-5 py-3.5 font-mono font-bold text-primary whitespace-nowrap">
                                {item.symbol}
                              </td>
                              <td className="px-5 py-3.5 text-muted-foreground leading-relaxed w-full">
                                {item.desc}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
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
            Pronto para transformar o seu repertório?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            O editor inteligente do Hosanna guia-o passo a passo, garantindo que as suas cifras
            estejam sempre perfeitas para o próximo culto.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="rounded-full bg-primary px-10 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all py-6"
            >
              Começar a Cifrar Agora
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
