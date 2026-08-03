import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";
import { BookOpen, CheckCircle2, Code, Music } from "lucide-react";
import { StaffLines } from "./HosannaLanding";

export function ChordProGuide() {
  useReveal();
  return (
    <div className="bg-white min-h-screen selection:bg-primary/10 font-sans">
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-[160px] pb-12 text-white relative overflow-hidden -mt-[120px]">
        <div className="absolute inset-0 text-white/10">
          <StaffLines className="top-24 opacity-40" />
          <StaffLines className="bottom-12 opacity-20" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-200 mb-8 border border-white/10">
            Guia de Especialista
          </div>
          <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight">
            Domine o <span className="text-blue-300">ChordPro</span>
          </h1>
          <p className="reveal text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-3xl mx-auto">
            O padrão de excelência para cifras digitais. Aprenda a escrever músicas que se adaptam a
            qualquer tom e dispositivo com facilidade.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid gap-16">
            {/* What is ChordPro */}
            <div className="space-y-6 reveal">
              <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-primary shadow-sm border border-blue-100">
                <BookOpen className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
                O que é o ChordPro?
              </h2>
              <div className="prose prose-blue max-w-none text-muted-foreground text-lg md:text-xl leading-relaxed">
                <p>
                  O ChordPro é um formato de texto simples projetado para marcar letras de músicas
                  com acordes de forma inteligente. Ao contrário das cifras tradicionais, onde os
                  acordes flutuam sobre o texto e perdem o alinhamento em diferentes tamanhos de
                  letra, o ChordPro coloca os acordes{" "}
                  <span className="italic text-primary font-medium">dentro</span> da letra usando
                  parênteses retos{" "}
                  <code className="bg-blue-50 text-primary px-2 py-1 rounded-lg font-mono font-bold text-base">
                    [ ]
                  </code>
                  .
                </p>
                <p className="mt-6">
                  Esta estrutura permite que o Hosanna processe a música como dados vivos,
                  oferecendo vantagens impossíveis num PDF:
                </p>
                <ul className="grid sm:grid-cols-2 gap-6 mt-10 list-none p-0">
                  <li className="flex items-start gap-4 bg-secondary p-6 rounded-2xl border border-blue-50/50 shadow-sm transition-transform hover:-translate-y-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                    <span className="font-semibold text-primary">
                      Transposição instantânea para qualquer tom
                    </span>
                  </li>
                  <li className="flex items-start gap-4 bg-secondary p-6 rounded-2xl border border-blue-50/50 shadow-sm transition-transform hover:-translate-y-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                    <span className="font-semibold text-primary">
                      Ajuste dinâmico a qualquer tamanho de ecrã
                    </span>
                  </li>
                  <li className="flex items-start gap-4 bg-secondary p-6 rounded-2xl border border-blue-50/50 shadow-sm transition-transform hover:-translate-y-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                    <span className="font-semibold text-primary">
                      Destaque visual de acordes e secções
                    </span>
                  </li>
                  <li className="flex items-start gap-4 bg-secondary p-6 rounded-2xl border border-blue-50/50 shadow-sm transition-transform hover:-translate-y-1">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                    <span className="font-semibold text-primary">
                      Geração automática de diagramas de acordes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Syntax Example */}
            <div className="space-y-6 reveal">
              <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-primary shadow-sm border border-blue-100">
                <Code className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
                Anatomia de uma Canção
              </h2>

              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800">
                <div className="flex items-center justify-between px-8 py-5 bg-slate-800 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-sm font-mono text-slate-400 ml-2">exemplo.chordpro</span>
                  </div>
                </div>
                <div className="p-10 font-mono text-base sm:text-lg leading-relaxed text-blue-100 overflow-x-auto selection:bg-blue-500/30">
                  <div className="text-slate-500 italic mb-2"># Metadados essenciais</div>
                  <div>
                    <span className="text-blue-400">{"{"}title:</span> Grandioso és Tu
                    <span className="text-blue-400">{"}"}</span>
                  </div>
                  <div>
                    <span className="text-blue-400">{"{"}key:</span> A
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
                    Grandioso <span className="text-amber-400 font-bold">[E]</span>és Tu, grandioso{" "}
                    <span className="text-amber-400 font-bold">[A]</span>és Tu
                  </div>
                  <div>
                    <span className="text-blue-400">
                      {"{"}end_of_chorus{"}"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Directives */}
            <div className="space-y-6 reveal">
              <div className="inline-flex p-4 rounded-2xl bg-blue-50 text-primary shadow-sm border border-blue-100">
                <Music className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
                Diretivas que Facilitam a Vida
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { tag: "{title: ...}", desc: "Identifica o nome oficial da canção" },
                  { tag: "{artist: ...}", desc: "Referência do autor ou banda original" },
                  {
                    tag: "{key: ...}",
                    desc: "Define o tom base para transposições automáticas",
                  },
                  { tag: "{tempo: ...}", desc: "Marca o BPM para o metrónomo visual" },
                  { tag: "{time: ...}", desc: "Compasso rítmico (ex: 4/4, 6/8)" },
                  {
                    tag: "{comment: ...}",
                    desc: "Instruções específicas para a banda (ex: Solo de Guitarra)",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-border rounded-2xl hover:border-primary/30 transition-all hover:bg-blue-50/10 group shadow-sm"
                  >
                    <code className="text-primary font-bold text-lg block mb-2 group-hover:scale-105 transition-transform origin-left">
                      {item.tag}
                    </code>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              className="rounded-full bg-primary px-10 text-white font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all py-8"
            >
              Começar a Cifrar Agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 text-lg font-medium py-8"
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
