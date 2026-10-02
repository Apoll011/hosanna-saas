import { AboutUs } from "@/components/hosanna/AboutUs";
import { Footer, Nav } from "@/components/hosanna/HosannaLanding";

export function Component() {
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
