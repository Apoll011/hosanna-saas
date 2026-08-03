import { HosannaLanding } from "@/components/hosanna/HosannaLanding";
import { getSEOMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: getSEOMeta({
      title: "Hosanna - Planeia o teu louvor. Organiza a tua música.",
      description:
        "O Hosanna é uma plataforma de planeamento de louvor que ajuda as igrejas a organizar a sua biblioteca musical, preparar cultos e dar a cada músico acesso imediato às canções de que precisa.",
      url: "https://hosanna.studio",
    }),
  }),
  component: Index,
});

function Index() {
  return <HosannaLanding />;
}
