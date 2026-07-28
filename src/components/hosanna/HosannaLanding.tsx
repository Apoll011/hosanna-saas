import { useEffect, useRef, useState } from "react";
import {
  Music,
  Calendar,
  FolderTree,
  Search,
  Smartphone,
  Monitor,
  WifiOff,
  Sliders,
  Sun,
  FileDown,
  Users,
  ShieldCheck,
  ArrowRight,
  Check,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import dashboardImg from "@/assets/dashboard-preview.jpg";
import mobileImg from "@/assets/mobile-preview.jpg";
import logo from '@/assets/logo.png';

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
    <a href="#top" className={cn("flex items-center gap-2 font-display", className)}>
               <div
            className="
              w-14 h-14 rounded-[22px]
              flex items-center justify-center
              mb-4
              border
              transition-transform
              hover:scale-105 hover:rotate-2
            "
            style={{
              backgroundColor: "#EEF4FA",
              borderColor: "#D3E5F8",
            }}
          >
            <img
              src={logo}
              alt="Hosanna Studio"
              className="w-14 h-14 object-contain"
            />
          </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav                                                               */
/* ------------------------------------------------------------------ */
const NAV = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Como Funciona", href: "#how" },
  { label: "Preços", href: "#pricing" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn("text-sm font-medium  transition-colors ",
                scrolled
          ? "text-foreground hover:text-foreground/80"
          : "text-gold-foreground/80 hover:text-gold-foreground")}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
          >
            <a href="#pricing">Experimentar Grátis</a>
          </Button>
        </div>
        <button
          className="md:hidden text-foreground"
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
              <a href="#pricing" onClick={() => setOpen(false)}>Experimentar Grátis</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative staff lines                                            */
/* ------------------------------------------------------------------ */
function StaffLines({ className }: { className?: string }) {
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
          opacity={0.25}
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
    <section id="top" className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 text-gold/40">
        <StaffLines className="top-24" />
        <StaffLines className="bottom-24" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-gradient/60 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-gradient">
            Planeamento de louvor, reinventado
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Planeia o teu louvor.
            <br />
            Organiza a tua música.
            <br />
            <span className="text-gold-gradient">Serve com confiança.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            O Hosanna é uma plataforma de planeamento de louvor que ajuda as igrejas a
            organizar a sua biblioteca musical, preparar cultos e dar a cada músico acesso
            imediato às canções de que precisa. Em vez de andarem a saltar entre pastas,
            aplicações de mensagens e cifras impressas.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gold px-7 text-gold-foreground hover:bg-gold/90"
            >
              <a href="#pricing">
                Experimentar Grátis <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/25 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#how">Ver Como Funciona</a>
            </Button>
          </div>
        </div>

        {/* Mockups */}
        <div className="relative mx-auto mt-20 max-w-6xl">
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
              className="absolute -bottom-10 -right-4 hidden w-48 rounded-[2rem] border border-gold/20 shadow-soft md:block md:w-60 lg:-right-8 lg:w-72"
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
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Porquê o Hosanna" title="Preparar um culto não devia parecer arqueologia.">
          Muitas igrejas dependem de uma mistura de cancioneiros em papel, pastas na cloud,
          aplicações de mensagens e software demasiado complicado para preparar o louvor.
          Tornando difícil manter toda a gente na mesma versão de uma canção ou preparar um
          culto com rapidez.
        </SectionHeader>
        <div className="reveal mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Uma única biblioteca",
              body: "Tudo num só lugar — cria, edita e organiza as canções que a tua igreja realmente canta.",
            },
            {
              title: "Um plano partilhado",
              body: "Prepara cultos com antecedência e partilha a mesma ordem de canções, versículos, anúncios e mensagens com toda a equipa.",
            },
            {
              title: "Vista pessoal para cada músico",
              body: "Cada um ajusta o seu tom, acordes e tamanho de texto — funciona sem Wi-Fi quando é preciso.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-14 text-center font-display text-2xl italic text-foreground md:text-3xl">
          «Passa menos tempo a gerir ficheiros. Passa mais tempo a preparar-te para o louvor.»
        </p>
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
    <section id="features" className="relative bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Duas apps, um fluxo" title="Feito para toda a equipa de louvor.">
          Um painel poderoso para os líderes que planeiam o culto. Uma app móvel calma e
          focada para os músicos que o tocam.
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
                className="w-52 rounded-[2rem] border border-border shadow-soft"
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
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Organiza a tua música" title="Uma biblioteca que finalmente parece tua.">
          Põe ordem em anos de canções espalhadas — sem obrigar a tua equipa a aprender um
          sistema novo.
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
    title: "Cria um culto",
    body: "Começa um novo culto com título e data. Domingo de manhã, oração a meio da semana, noite de jovens — como quer que a tua igreja se reúna.",
  },
  {
    n: "02",
    title: "Monta a estrutura",
    body: "Puxa canções da tua biblioteca, insere versículos bíblicos, anúncios ou momentos da palavra, e arrasta tudo para a ordem perfeita.",
  },
  {
    n: "03",
    title: "Deixa notas para a equipa",
    body: "Escreve notas em canções individuais ou em todo o culto — mudanças de tom, transições, orações.",
  },
  {
    n: "04",
    title: "Todos com o mesmo plano",
    body: "Cada músico vê o mesmo culto e personaliza a sua própria vista sem afetar ninguém.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative bg-primary py-24 text-primary-foreground md:py-32">
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
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {s.body}
              </p>
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
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Feito para o louvor ao vivo
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Cada músico, ao seu ritmo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Guitarristas, pianistas e vocalistas trabalham a partir da mesma canção, no
            mesmo culto — mas cada um controla o seu tom, a visibilidade dos acordes e o
            tamanho do texto. Acabou o amontoado à volta de um ecrã. Acabaram as cifras
            desalinhadas.
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
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-gold/20 via-transparent to-primary/10 blur-2xl" />
          <img
            src={mobileImg}
            alt="Músico a usar o Hosanna durante um culto de louvor ao vivo"
            loading="lazy"
            width={800}
            height={1408}
            className="relative mx-auto w-64 rounded-[2.5rem] border border-border shadow-soft md:w-80"
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
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Qualquer igreja, qualquer tamanho" title="Do grupo em casa ao ministério multi-campus.">
          Cada igreja tem a sua biblioteca e os seus cultos, independentes e seguros — com
          espaço para tantas equipas de louvor quantas forem necessárias, sob a mesma igreja.
        </SectionHeader>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-border bg-card p-8">
            <ShieldCheck className="h-8 w-8 text-[color:var(--gold)]" />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              A tua biblioteca, segura e separada
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cada igreja tem o seu espaço privado. Canções, cultos e membros da equipa
              ficam dentro das tuas portas.
            </p>
          </div>
          <div className="reveal rounded-2xl border border-border bg-card p-8">
            <Users className="h-8 w-8 text-[color:var(--gold)]" />
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              Várias equipas, uma biblioteca partilhada
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Domingo, meio da semana, jovens, campus A, campus B — todas as equipas bebem
              da mesma fonte.
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
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="reveal">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Exportar e portabilidade
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
            A tua música, nas tuas condições.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Importa e exporta no formato aberto ChordPro, para migração ou cópias de
            segurança fáceis. Exporta um culto completo — ordem, versículos, anúncios, mensagens, acordes e letras de todas as
            canções — como PDF pronto a imprimir, direto da app móvel.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Importação e
              exportação em ChordPro
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> PDF imprimível
              de um culto inteiro
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Sem lock-in — a
              tua biblioteca é sempre tua
            </li>
          </ul>
        </div>
        <div className="reveal">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FileDown className="h-4 w-4 text-[color:var(--gold)]" /> Culto de Domingo — 18 de maio
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
    <section id="pricing" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Preços" title="Um preço. Toda a tua equipa de louvor.">
          Sem taxas por músico, sem funcionalidades bloqueadas. Todos os planos incluem o
          painel completo, a app móvel completa e músicos ilimitados.
        </SectionHeader>

        <div className="reveal mt-10 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-muted-foreground" : "text-foreground",
            )}
          >
            Mensal
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={cn(
              "relative h-7 w-14 rounded-full transition-colors",
              annual ? "bg-primary" : "bg-muted-foreground/30",
            )}
            aria-label="Alternar período de faturação"
          >
            <span
              className={cn(
                "absolute top-1 h-5 w-5 rounded-full transition-transform",
                annual ? "translate-x-1 bg-white/80" : "-translate-x-5 bg-gold",
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              annual ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Anual{" "}
            <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              Poupa ~2 meses
            </span>
          </span>
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
                Tudo o que a tua igreja precisa para planear e conduzir o louvor — sem
                surpresas na fatura.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-6xl font-semibold md:text-7xl">
                  {price}€
                </span>
                <span className="text-primary-foreground/70">{unit}</span>
              </div>
              <p className="mt-1 text-xs text-primary-foreground/60">
                {annual
                  ? "Faturado anualmente · equivalente a 10€/mês"
                  : "Faturado mensalmente"}
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
                className="mt-10 w-full rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <a href="#">
                  Experimentar Grátis <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-primary-foreground/60">
                14 dias grátis · Sem cartão de crédito
              </p>
            </div>
          </div>

          <p className="reveal mt-6 text-center text-sm text-muted-foreground">
            Músicos ilimitados em qualquer plano — o preço é por igreja, não por pessoa.
          </p>

          <div className="reveal mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--primary-dark)]" />
            <p>
              <span className="font-medium text-foreground">Igrejas multi-campus:</span>{" "}
              +12€/mês por cada campus adicional. Acesso ilimitado de utilizadores em
              todos os locais.
            </p>
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
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <div className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
          A nossa visão
        </div>
        <p className="reveal mt-6 font-display text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl">
          «Acreditamos que a tecnologia deve apoiar o louvor, não complicá-lo.»
        </p>
        <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          O Hosanna remove barreiras desnecessárias entre a preparação e o louvor — para que
          as igrejas passem menos tempo à procura de canções e a gerir ficheiros, e mais
          tempo a conduzir pessoas em louvor.
        </p>
        <p className="reveal mt-8 font-display text-lg italic text-[color:var(--primary-dark)] md:text-xl">
          «Que seja uma bênção para a tua igreja, para a tua equipa de louvor e para todos os
          que servem através da música.»
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
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader eyebrow="Roadmap" title="O que aí vem a seguir.">
          O Hosanna continua a crescer com as igrejas que o usam. Estas são algumas das
          melhorias que já estão a caminho.
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
    a: "Todos os planos começam com 14 dias grátis. Sem cartão de crédito — basta registares-te, convidares a tua equipa e experimentares num domingo real.",
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
    <section id="faq" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeader eyebrow="Perguntas frequentes" title="Respostas às dúvidas mais comuns das equipas." />
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
    <section className="relative overflow-hidden bg-hero-gradient py-24 text-primary-foreground md:py-32">
      <div className="absolute inset-0 text-gold/30">
        <StaffLines className="top-10" />
        <StaffLines className="bottom-10" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
          Pronto para simplificar como a tua igreja prepara o louvor?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70 md:text-lg">
          Experimenta o Hosanna gratuitamente durante 14 dias. Traz a tua equipa, planeia um
          culto, conduz o louvor — vê a diferença já neste domingo.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gold px-8 text-gold-foreground hover:bg-gold/90"
          >
            <a href="#pricing">
              Experimentar Grátis <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/25 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="mailto:ola@hosanna.app">Fala connosco</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Planeia o teu louvor. Organiza a tua música. Serve com confiança.
          </p>
        </div>
        {[
          { title: "Produto", links: [["Funcionalidades", "#features"], ["Como Funciona", "#how"], ["Preços", "#pricing"], ["Perguntas Frequentes", "#faq"]] },
          { title: "Empresa", links: [["Sobre", "#"], ["Contacto", "mailto:ola@hosanna.app"], ["Blog", "#"]] },
          { title: "Suporte", links: [["Centro de Ajuda", "#"], ["Guia ChordPro", "#"], ["Estado do serviço", "#"]] },
        ].map((col) => (
          <div key={col.title}>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-5 pt-6 text-xs text-muted-foreground md:flex-row md:px-8">
        <div>© {new Date().getFullYear()} Hosanna. Feito para equipas de louvor em todo o lado.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Privacidade</a>
          <a href="#" className="hover:text-foreground">Termos</a>
          <a href="mailto:ola@hosanna.app" className="hover:text-foreground">ola@hosanna.app</a>
        </div>
      </div>
    </footer>
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
        <HowItWorks />
        <LiveWorship />
        <AnySize />
        <ExportSection />
        <Pricing />
        <Vision />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}