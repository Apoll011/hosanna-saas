import { createFileRoute } from "@tanstack/react-router";
import { HosannaLanding } from "@/components/hosanna/HosannaLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hosanna — Planeia o teu louvor. Organiza a tua música." },
      {
        name: "description",
        content:
          "O Hosanna é uma plataforma de planeamento de louvor que ajuda as igrejas a organizar a sua biblioteca musical, preparar cultos e dar a cada músico acesso imediato às canções de que precisa.",
      },
      { property: "og:title", content: "Hosanna — Planeamento de Louvor para Igrejas" },
      {
        property: "og:description",
        content:
          "Um único lugar focado para construir uma biblioteca de canções, planear cultos e conduzir o louvor com confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <HosannaLanding />;
}
