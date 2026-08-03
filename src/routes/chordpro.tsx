import { ChordProGuide } from "@/components/hosanna/ChordProGuide";
import { Footer, Nav } from "@/components/hosanna/HosannaLanding";
import { getSEOMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chordpro")({
  head: () => ({
    meta: getSEOMeta({
      title: "Guia ChordPro | Hosanna Studio",
      description:
        "Aprenda a escrever cifras inteligentes com o padrão ChordPro. O formato de excelência para a gestão de repertório cristão.",
      url: "https://hosanna.studio/chordpro",
    }),
  }),
  component: ChordProPageComponent,
});

function ChordProPageComponent() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/10">
      <Nav />
      <main>
        <ChordProGuide />
      </main>
      <Footer />
    </div>
  );
}
