import dashboardImg from "@/assets/dashboard-preview.jpg";
import logo from "@/assets/hosanna_logo.png";
import mobileImg from "@/assets/mobile-preview.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  FileDown,
  FolderTree,
  Mail,
  Menu,
  Monitor,
  Music,
  Play,
  Search,
  ShieldCheck,
  Sliders,
  Smartphone,
  Sparkles,
  Sun,
  Users,
  WifiOff,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Scroll reveal                                                     */
/* ------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "-40px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Logo                                                              */
/* ------------------------------------------------------------------ */
function Logo({ className }: { className?: string }) {
  return (
    <a href="/#top" className={cn("flex items-center", className)}>
      <img
        src={logo}
        alt="Hosanna Studio"
        className="w-14 h-14 rounded-xl object-contain transition-transform hover:scale-105 hover:rotate-2"
      />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                               */
/* ------------------------------------------------------------------ */
const NAV = [
  { label: "Funcionalidades", href: "#features" },
  { label: "ChordPro", href: "/chordpro" },
  { label: "Preços", href: "#pricing" },
  { label: "Contacto", href: "/contact" },
];

const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || "/login";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="sticky top-[-40px] z-50">
      <EarlyAccessBanner />
      <header
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-background/85 backdrop-blur-md shadow-sm" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href.startsWith("/") ? n.href : `/${n.href}`}
                className={cn(
                  "text-sm font-medium transition-colors ",
                  scrolled
                    ? "text-foreground hover:text-foreground/80"
                    : "text-white/90 hover:text-white",
                )}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <a href={dashboardUrl}>Experimentar Grátis</a>
            </Button>
          </div>
          <button
            className={cn(
              "md:hidden transition-colors",
              scrolled ? "text-foreground" : "text-white",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <a href={dashboardUrl} onClick={() => setOpen(false)}>
                  Experimentar Grátis
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative staff lines                                            */
/* ------------------------------------------------------------------ */
export function StaffLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 200"
      className={cn("pointer-events-none absolute inset-x-0", className)}
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 25} Q 300 ${20 + i * 25} 600 ${40 + i * 25} T 1200 ${40 + i * 25}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero-gradient text-primary-foreground -mt-[120px] pt-[120px]"
    >
      <div className="absolute inset-0 text-gold/40">
        <StaffLines className="top-24" />
        <StaffLines className="bottom-24" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90">
            <Sparkles className="h-3 w-3 text-blue-300" />
            Desenvolvido para Líderes de Louvor
          </div>
          <h1 className="mt-8 font-display text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl reveal">
            Organize o seu louvor com <span className="text-blue-300">excelência</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-blue-50/80 md:text-xl reveal">
            Dê à sua equipa a clareza e o foco que eles merecem. Planos de culto, cifras dinâmicas e
            escalas inteligentes num só lugar.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row reveal">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full bg-white px-10 text-lg font-semibold text-primary shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-50"
            >
              <a href={dashboardUrl}>
                Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border-white/30 bg-white/5 px-10 text-lg text-white backdrop-blur-md transition-all hover:bg-white/10"
            >
              <a href="#how">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Ver Demonstração
              </a>
            </Button>
          </div>
        </div>

        {/* Mockups */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="relative">
            <img
              src={dashboardImg}
              alt="Pré-visualização do painel do Hosanna a mostrar a biblioteca de canções e o plano de culto de domingo"
              width={1600}
              height={1104}
              className="w-full rounded-2xl border border-gold/20 shadow-soft"
            />
            <img
              src={mobileImg}
              alt="Pré-visualização da app móvel do Hosanna a mostrar uma cifra com controlos de transposição"
              width={800}
              height={1408}
              loading="lazy"
              className="absolute -bottom-10 -right-4 hidden w-48 rounded-2xl border border-gold/20 shadow-soft md:block md:w-60 lg:-right-8 lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section header                                                    */
/* ------------------------------------------------------------------ */
function SectionHeader({
  eyebrow,
  title,
  children,
  center = true,
  eyebrowClassName,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
  eyebrowClassName?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("reveal max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <div
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--primary-dark)]",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {children && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Problem section                                                   */
/* ------------------------------------------------------------------ */
function Problem() {
  return (
    <section className="relative bg-background py-16 md:py-16 font-sans">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="A Nossa Missão"
          title="Preparar o louvor deve ser sobre adoração, não sobre gerir ficheiros."
        >
          Sabemos que o tempo da equipa de louvor é precioso. Muitas igrejas ainda lutam com pastas
          desorganizadas na cloud, cancioneiros antigos e mensagens perdidas no WhatsApp. O Hosanna
          foi criado para eliminar essa confusão e trazer paz à sua preparação.
        </SectionHeader>
        <div className="reveal mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Biblioteca Unificada",
              body: "Chega de procurar a 'versão final'. Centralize todas as suas canções, tons e letras num único lugar seguro e acessível.",
            },
            {
              title: "Planeamento com Intenção",
              body: "Desenhe o fluxo do culto com clareza. Partilhe a ordem das músicas, notas ministeriais e escalas de forma imediata com toda a equipa.",
            },
            {
              title: "Foco no Altar",
              body: "No momento do louvor, a tecnologia deve desaparecer. Oferecemos uma vista limpa, pessoal e adaptável a cada músico, mesmo sem internet.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-blue-50 bg-white p-8 transition-all hover:shadow-lg group shadow-sm"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">{c.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="reveal mt-16 text-center">
          <p className="font-display text-3xl md:text-4xl italic text-primary max-w-3xl mx-auto leading-tight">
            «O nosso objetivo é simples: queremos que a sua equipa passe menos tempo a configurar
            tecnologia e mais tempo a servir ao Senhor.»
          </p>
        </div>
      </div>
    </section>
  );
}

function MigrationSection() {
  useReveal();
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-blue-100 relative overflow-hidden shadow-sm reveal">
          <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
            <Zap className="w-96 h-96 text-primary" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-blue-200/50">
              Transição Suave
            </div>
            <h2 className="reveal text-3xl md:text-5xl font-display font-bold text-primary mb-8 tracking-tight">
              Mude para o Hosanna <span className="text-blue-400">sem perder nada</span>
            </h2>
            <p className="reveal text-lg text-muted-foreground mb-8 leading-relaxed">
              Já utiliza outras ferramentas? O Hosanna foi desenhado para ser o novo lar da sua
              biblioteca, respeitando os padrões que já conhece.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="reveal bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-blue-50/50 transition-all hover:shadow-lg">
                <div className="font-display font-bold text-2xl mb-4 flex items-center gap-3 text-primary">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  Songbook Pro
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Importe toda a sua biblioteca do Songbook Pro em segundos. Preservamos todas as
                  suas cifras, tons e metadados com precisão cirúrgica.
                </p>
              </div>

              <div className="reveal bg-blue-50/30 p-6 md:p-8 rounded-2xl border border-dashed border-blue-200">
                <div className="font-display font-bold text-2xl mb-4 flex items-center gap-3 text-blue-400">
                  <div className="w-3 h-3 rounded-full bg-blue-300" />
                  Em Breve
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Estamos a finalizar os importadores para OnSong, Planning Center e Chord1. O
                  futuro do louvor é livre de barreiras.
                </p>
              </div>
            </div>

            <div className="mt-12 reveal">
              <button className="inline-flex items-center gap-3 text-primary font-bold text-lg group transition-colors hover:text-blue-700">
                Explorar formatos suportados
                <div className="p-2 rounded-full bg-blue-100 group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Two Apps section                                                  */
/* ------------------------------------------------------------------ */
const DASHBOARD_FEATURES = [
  "Construir e organizar uma biblioteca completa de canções",
  "Importar e exportar canções (ChordPro)",
  "Editar letras e acordes",
  "Organizar canções em pastas",
  "Criar e agendar cultos",
  "Definir a ordem das canções num culto",
  "Adicionar notas para toda a equipa de louvor",
];

const MOBILE_FEATURES = [
  "Ver o culto planeado em qualquer dispositivo",
  "Transpor canções para um tom confortável",
  "Mostrar ou ocultar acordes de forma independente",
  "Ajustar o tamanho do texto para melhor leitura",
  "Manter o ecrã ativo durante o culto",
  "Adicionar notas pessoais",
  "Funciona sem ligação — sincroniza automaticamente",
];

function TwoApps() {
  return (
    <section id="features" className="relative bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Duas apps, um fluxo" title="Feito para toda a equipa de louvor.">
          Um painel poderoso para os líderes que planeiam o culto. Uma app móvel calma e focada para
          os músicos que o tocam.
        </SectionHeader>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Dashboard */}
          <div className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Monitor className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                  Painel
                </div>
                <h3 className="font-display text-2xl text-foreground">Para líderes e equipa</h3>
              </div>
            </div>
            <img
              src={dashboardImg}
              alt="Pré-visualização do painel"
              loading="lazy"
              width={1600}
              height={1104}
              className="mt-8 w-full rounded-xl border border-border shadow-soft"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DASHBOARD_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile */}
          <div className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--gold)]">
                  App móvel
                </div>
                <h3 className="font-display text-2xl text-foreground">Para os músicos, ao vivo</h3>
              </div>
            </div>
            <div className="mt-8 grid place-items-center rounded-xl bg-secondary/60 p-6">
              <img
                src={mobileImg}
                alt="Pré-visualização da app móvel"
                loading="lazy"
                width={800}
                height={1408}
                className="w-52 rounded-2xl border border-border shadow-soft"
              />
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {MOBILE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Organize                                                          */
/* ------------------------------------------------------------------ */
function Organize() {
  const cards = [
    {
      icon: FolderTree,
      title: "Pastas familiares",
      body: "Organiza canções em pastas como se fossem ficheiros no computador — sem curva de aprendizagem.",
    },
    {
      icon: Search,
      title: "Pesquisa que encontra tudo",
      body: "Encontra canções por título, artista, letra, tom, etiquetas ou número em segundos.",
    },
    {
      icon: Music,
      title: "Construído sobre ChordPro",
      body: "Portátil, aberto e compatível com as ferramentas que a tua comunidade de louvor já usa.",
    },
  ];
  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Organiza a tua música"
          title="Uma biblioteca que finalmente parece tua."
        >
          Põe ordem em anos de canções espalhadas — sem obrigar a tua equipa a aprender um sistema
          novo.
        </SectionHeader>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="reveal rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-[color:var(--primary-dark)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works                                                      */
/* ------------------------------------------------------------------ */
const STEPS = [
  {
    n: "01",
    title: "Agende o Encontro",
    body: "Crie um novo culto com título e data. Seja para o domingo de manhã ou para uma noite de oração — a preparação começa aqui.",
  },
  {
    n: "02",
    title: "Desenhe o Fluxo",
    body: "Selecione as músicas da sua biblioteca, adicione momentos de palavra ou avisos e organize tudo de forma intuitiva.",
  },
  {
    n: "03",
    title: "Comunique a Visão",
    body: "Adicione notas para a equipa — detalhes sobre transições, arranjos ou momentos específicos de oração durante as músicas.",
  },
  {
    n: "04",
    title: "Sirvam em Unidade",
    body: "Toda a equipa acede ao mesmo plano. Cada músico ajusta a sua vista pessoal, garantindo que todos estão em sintonia.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative bg-primary py-16 text-primary-foreground md:py-16">
      <div className="absolute inset-0 text-gold/25">
        <StaffLines className="top-16" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Como funciona"
          title="Planeia cada culto em quatro passos tranquilos."
          eyebrowClassName="!text-[color:var(--primary-light)]"
          titleClassName="!text-primary-foreground"
        >
          <span className="text-primary-foreground/70">
            De uma página em branco a um culto que toda a equipa está pronta a conduzir.
          </span>
        </SectionHeader>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="reveal rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-7 backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <div className="font-display text-4xl text-gold-gradient">{s.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-primary-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Live worship                                                      */
/* ------------------------------------------------------------------ */
function LiveWorship() {
  const items = [
    { icon: Sliders, label: "Transposição independente" },
    { icon: Sun, label: "Tamanho de texto ajustável" },
    { icon: Music, label: "Acordes visíveis por pessoa" },
    { icon: WifiOff, label: "Funciona sem ligação" },
  ];
  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Feito para o louvor ao vivo
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Cada músico, ao seu ritmo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Guitarristas, pianistas e vocalistas trabalham a partir da mesma canção, no mesmo culto
            — mas cada um controla o seu tom, a visibilidade dos acordes e o tamanho do texto.
            Acabou o amontoado à volta de um ecrã. Acabaram as cifras desalinhadas.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-[color:var(--primary-dark)]">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-primary/10 blur-2xl" />
          <img
            src={mobileImg}
            alt="Músico a usar o Hosanna durante um culto de louvor ao vivo"
            loading="lazy"
            width={800}
            height={1408}
            className="relative mx-auto w-64 rounded-3xl border border-border shadow-soft md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Any size                                                          */
/* ------------------------------------------------------------------ */
function AnySize() {
  return (
    <section className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Qualquer igreja, qualquer tamanho"
          title="Do grupo em casa ao ministério multi-campus."
        >
          Cada igreja tem a sua biblioteca e os seus cultos, independentes e seguros — com espaço
          para tantas equipas de louvor quantas forem necessárias, sob a mesma igreja.
        </SectionHeader>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-border bg-card p-8">
            <ShieldCheck className="h-8 w-8 text-[color:var(--gold)]" />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              A tua biblioteca, segura e separada
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cada igreja tem o seu espaço privado. Canções, cultos e membros da equipa ficam dentro
              das tuas portas.
            </p>
          </div>
          <div className="reveal rounded-2xl border border-border bg-card p-8">
            <Users className="h-8 w-8 text-[color:var(--gold)]" />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              Várias equipas, uma biblioteca partilhada
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Domingo, meio da semana, jovens, campus A, campus B — todas as equipas bebem da mesma
              fonte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                            */
/* ------------------------------------------------------------------ */
function ExportSection() {
  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="reveal">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Exportar e portabilidade
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            A tua música, nas tuas condições.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Importa e exporta no formato aberto ChordPro, para migração ou cópias de segurança
            fáceis. Exporta um culto completo — ordem, versículos, anúncios, mensagens, acordes e
            letras de todas as canções — como PDF pronto a imprimir, direto da app móvel.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Importação e exportação
              em ChordPro
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> PDF imprimível de um
              culto inteiro
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Sem lock-in — a tua
              biblioteca é sempre tua
            </li>
          </ul>
        </div>
        <div className="reveal">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileDown className="h-4 w-4 text-[color:var(--gold)]" /> Culto de Domingo — 18 de
              maio
            </div>
            <div className="space-y-2 text-sm">
              {[
                "Boas-vindas e Avisos",
                "Great Are You Lord — All Sons & Daughters",
                "Leitura Bíblica — Salmos 100",
                "10,000 Reasons — Matt Redman",
                "Mensagem — Pr. João",
              ].map((s, i) => (
                <div
                  key={s}
                  className="flex items-center justify-between rounded-lg border border-border/70 bg-secondary/40 px-3 py-2"
                >
                  <span className="font-medium text-foreground">
                    <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                    {s}
                  </span>
                  <span className="text-xs text-muted-foreground">PDF</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Pricing                                                           */
/* ------------------------------------------------------------------ */
const PLAN_FEATURES = [
  "Músicos e utilizadores do painel ilimitados",
  "Canções, pastas e cultos ilimitados",
  "Biblioteca completa em ChordPro com pesquisa por título, artista, letra, tom, etiquetas ou número",
  "Sincronização offline na app móvel",
  "Exportação de cultos em PDF (ordem completa, versículos, anúncios + acordes/letras)",
  "Importação e exportação em formato ChordPro",
];

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const price = annual ? 120 : 12;
  const unit = annual ? "/ano por igreja" : "/mês por igreja";
  return (
    <section id="pricing" className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Preços" title="Um investimento na vossa adoração" centered>
          Preços simples e transparentes para que se possa focar no que é mais importante.
        </SectionHeader>

        <div className="reveal mt-10 flex items-center justify-center">
          <div className="relative flex w-full max-w-[280px] items-center rounded-2xl bg-secondary p-1.5 shadow-inner">
            <div
              className={cn(
                "absolute inset-y-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-xl bg-white shadow-sm transition-all duration-300 ease-out",
                annual ? "translate-x-[calc(100%+6px)]" : "translate-x-0",
              )}
            />
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "relative z-10 flex-1 py-2 text-sm font-semibold transition-colors duration-200",
                !annual ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "relative z-10 flex-1 py-2 text-sm font-semibold transition-colors duration-200",
                annual ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              Anual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="reveal mx-auto mt-12 max-w-2xl">
          <div className="relative overflow-hidden rounded-3xl border border-transparent bg-primary p-8 text-primary-foreground shadow-soft md:p-12">
            <div className="absolute inset-0 text-gold/20 pointer-events-none">
              <StaffLines className="top-0" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                Plano único
              </span>
              <div className="mt-5 font-display text-4xl font-semibold md:text-5xl">Hosanna</div>
              <p className="mt-2 text-primary-foreground/75">
                Acesso total a todas as ferramentas, sem limites de utilizadores ou funcionalidades
                escondidas.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl font-semibold md:text-7xl">{price}€</span>
                <span className="text-primary-foreground/70">{unit}</span>
              </div>
              <p className="mt-1 text-xs text-primary-foreground/60">
                {annual ? "Faturado anualmente · equivalente a 10€/mês" : "Faturado mensalmente"}
                {" · "}Músicos ilimitados
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {PLAN_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-primary-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="mt-10 w-full rounded-full bg-gold text-gold-foreground hover:bg-gold/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                <a href={`${dashboardUrl}/new?plan=base&payment=${annual ? "yearly" : "monthly"}`}>
                  Experimentar Grátis <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-primary-foreground/60">14 dias grátis</p>
            </div>
          </div>

          <p className="reveal mt-6 text-center text-sm text-muted-foreground">
            Músicos e utilizadores ilimitados — o valor é por igreja, independentemente do tamanho
            da equipa.
          </p>

          <div className="reveal mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--primary-dark)]" />
            <p>
              <span className="font-medium text-foreground">Igrejas multi-campus:</span> +12€/mês
              por cada campus adicional. Acesso ilimitado de utilizadores em todos os locais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile App                                                        */
/* ------------------------------------------------------------------ */
function MobileApp() {
  return (
    <section id="mobile" className="py-16 bg-primary overflow-hidden relative font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 reveal">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium">
              Sempre Consigo
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Leve o seu louvor no <span className="text-blue-200">bolso</span>.
            </h2>
            <p className="text-xl text-blue-50/80 leading-relaxed max-w-xl">
              Aceda às suas cifras, consulte as escalas e prepare-se para o culto diretamente do seu
              telemóvel. O Hosanna App é o companheiro perfeito para músicos que buscam excelência
              em cada detalhe.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center space-x-4 transition-all hover:scale-105 active:scale-95 shadow-xl border border-white/10">
                <div className="p-1.5 rounded-xl bg-white/10">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 text-white/70 tracking-widest">
                    Download na
                  </div>
                  <div className="text-xl font-bold leading-none text-white">App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center space-x-4 transition-all hover:scale-105 active:scale-95 shadow-xl border border-white/10">
                <div className="p-1.5 rounded-xl bg-white/10 text-white">
                  <Play className="w-8 h-8 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 text-white/70 tracking-widest">
                    Disponível no
                  </div>
                  <div className="text-xl font-bold leading-none text-white">Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative reveal">
            <div className="absolute -inset-10 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />
            <img
              src={mobileImg}
              alt="Hosanna Mobile App"
              className="relative z-10 w-full max-w-[320px] mx-auto drop-shadow-2xl rounded-3xl border-8 border-slate-900 transform lg:rotate-6 transition-transform hover:rotate-0 duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Vision                                                            */
/* ------------------------------------------------------------------ */
function Vision() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-16">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <div className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
          A nossa visão
        </div>
        <p className="reveal mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl">
          «Acreditamos que a tecnologia deve apoiar o louvor, não complicá-lo.»
        </p>
        <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          O Hosanna remove barreiras desnecessárias entre a preparação e o louvor — para que as
          igrejas passem menos tempo à procura de canções e a gerir ficheiros, e mais tempo a
          conduzir pessoas em louvor.
        </p>
        <p className="reveal mt-8 font-display text-lg italic text-[color:var(--primary-dark)] md:text-xl">
          «Que seja uma bênção para a tua igreja, para a tua equipa de louvor e para todos os que
          servem através da música.»
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
const ROADMAP = [
  "Editor de cultos completamente renovado e mais intuitivo",
  "Exportação profissional em PDF para canções, cultos e pastas",
  "Assistente de configuração inicial com QR Code, token ou URL",
  "Experiência unificada entre as páginas de Canções e Cultos",
  "Modelos de cultos reutilizáveis e duplicação de serviços",
  "Editor de canções com uma experiência ChordPro melhorada",
  "Importação inteligente com deteção automática de duplicados",
  "Operações em massa para gerir grandes bibliotecas musicais",
  "Sincronização offline mais rápida e resolução de conflitos",
  "Sincronização em segundo plano na aplicação móvel",
  "Personalização da identidade visual de cada igreja",
  "Registo simplificado de igrejas e gestão de organizações",
  "Subscrições acessíveis por igreja, e não por utilizador",
  "Estatísticas de utilização e histórico de cultos",
  "Melhor acessibilidade, animações e atalhos de teclado",
  "Pesquisa avançada e filtros inteligentes",
  "Otimizações de desempenho para bibliotecas de grande dimensão",
];

function Roadmap() {
  return (
    <section className="bg-background py-16 md:py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Roadmap" title="O que aí vem a seguir.">
          O Hosanna continua a crescer com as igrejas que o usam. Estas são algumas das melhorias
          que já estão a caminho.
        </SectionHeader>
        <div className="reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROADMAP.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--primary-dark)]" />
              <span className="text-sm leading-relaxed text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "O Hosanna funciona sem ligação à internet?",
    a: "Sim. Depois de um culto ser carregado no dispositivo de um músico, tudo continua disponível mesmo sem ligação. As alterações sincronizam automaticamente assim que voltares a estar online.",
  },
  {
    q: "Em que formato ficam guardadas as canções?",
    a: "As canções ficam guardadas no formato aberto ChordPro — um padrão em texto simples que mantém acordes e letras juntos e funciona com uma grande variedade de ferramentas de louvor.",
  },
  {
    q: "Cada músico pode personalizar a sua vista?",
    a: "Claro. Cada músico pode transpor para o seu próprio tom, ajustar o tamanho do texto e mostrar ou ocultar acordes sem afetar mais ninguém na equipa.",
  },
  {
    q: "Existe um período gratuito?",
    a: "Todos os planos começam com 14 dias grátis. Basta registares-te, convidares a tua equipa e experimentares num domingo real.",
  },
  {
    q: "Várias equipas de louvor podem partilhar uma biblioteca?",
    a: "Sim. Cada igreja tem uma biblioteca de canções partilhada e podes criar tantas equipas de louvor e cultos quantos precisares.",
  },
  {
    q: "Como funciona o preço?",
    a: "O Hosanna tem um preço fixo, mensal ou anual, por igreja — com músicos e utilizadores do painel ilimitados incluídos. Igrejas multi-campus pagam um pequeno valor adicional por cada local extra, com o mesmo acesso ilimitado de utilizadores em cada um. Sem taxas por músico. Sem funcionalidades bloqueadas.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-secondary py-16 md:py-16">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeader eyebrow="Perguntas frequentes" title="Esclareça as suas dúvidas" centered>
          Tudo o que precisa de saber para começar a usar o Hosanna na sua igreja.
        </SectionHeader>
        <div className="reveal mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA + Footer                                                */
/* ------------------------------------------------------------------ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-16 text-primary-foreground md:py-16">
      <div className="absolute inset-0 text-gold/30">
        <StaffLines className="top-10" />
        <StaffLines className="bottom-10" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="reveal font-display text-4xl leading-tight tracking-tight md:text-6xl text-white">
          Pronto para elevar o nível do seu louvor?
        </h2>
        <p className="reveal mx-auto mt-6 max-w-xl text-blue-50/70 md:text-xl">
          Junte-se a centenas de igrejas que já escolheram a excelência e a organização com o
          Hosanna.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row reveal">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-10 text-lg font-medium text-primary shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-blue-50"
          >
            <a href={dashboardUrl}>
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/30 bg-white/5 px-10 text-lg font-medium text-white backdrop-blur-md transition-all hover:bg-white/10"
          >
            <a href="/contact">Fala connosco</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 md:grid-cols-4 md:px-8">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A ferramenta definitiva para equipas de louvor que buscam excelência e organização.
          </p>
        </div>
        {[
          {
            title: "Produto",
            links: [
              ["Funcionalidades", "/#features"],
              ["Guia ChordPro", "/chordpro"],
              ["Preços", "/#pricing"],
              ["Download App", "/#mobile"],
            ],
          },
          {
            title: "Suporte",
            links: [
              ["Contacto", "/contact"],
              ["Centro de Ajuda", "#"],
              ["Estado do serviço", "#"],
            ],
          },
          {
            title: "Legal",
            links: [
              ["Termos de Serviço", "/legal"],
              ["Política de Privacidade", "/legal"],
              ["Cookies", "/legal"],
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-xs font-bold uppercase tracking-widest text-primary/40 font-sans">
              {col.title}
            </div>
            <ul className="mt-6 space-y-3 text-sm font-sans">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-border px-5 pt-8 text-xs text-muted-foreground md:flex-row md:px-8">
        <div>© {new Date().getFullYear()} Hosanna Studio. Todos os direitos reservados.</div>
        <div className="flex gap-8">
          <a
            href="mailto:hosanna.contact@gmail.com"
            className="hover:text-primary transition-colors flex items-center gap-2"
          >
            <Mail className="w-3 h-3" />
            hosanna.contact@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export function EarlyAccessBanner() {
  return (
    <div className="bg-blue-600 py-2 text-center text-white px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <Zap className="h-4 w-4 fill-current text-blue-200" />
        <span>Estamos em desenvolvimento inicial. Junte-se a nós nesta jornada!</span>
      </div>
    </div>
  );
}
/* ------------------------------------------------------------------ */
/*  Root                                                              */
/* ------------------------------------------------------------------ */
export function HosannaLanding() {
  useReveal();
  const rootRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={rootRef} className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <TwoApps />
        <Organize />
        <MigrationSection />
        <HowItWorks />
        <LiveWorship />
        <AnySize />
        <ExportSection />
        <Pricing />
        <MobileApp />
        <Vision />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
