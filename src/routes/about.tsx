import { AboutUs } from "@/components/hosanna/AboutUs";
import { Footer, Nav } from "@/components/hosanna/HosannaLanding";
import { getSEOMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: getSEOMeta({
      title: "Sobre Nós | Hosanna Studio",
      description:
        "Conheça a história por trás do Hosanna: dois primos, uma igreja, e a missão de organizar o louvor.",
      url: "https://hosanna.studio/about",
    }),
  }),
  component: AboutPageComponent,
});

function AboutPageComponent() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/10">
      <Nav />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}