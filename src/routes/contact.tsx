import { ContactForm } from "@/components/hosanna/ContactForm";
import { Footer, Nav } from "@/components/hosanna/HosannaLanding";
import { getSEOMeta } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: getSEOMeta({
      title: "Contactos | Hosanna Studio",
      description: "Fale com a equipa do Hosanna. Dúvidas, sugestões ou suporte para a sua igreja.",
      url: "https://hosanna.studio/contact",
    }),
  }),
  component: ContactPageComponent,
});

function ContactPageComponent() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/10">
      <Nav />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
