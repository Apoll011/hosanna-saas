import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// Plain Vite SPA config — no TanStack Start, no nitro, no SSR server.
// The output of `vite build` is a fully static site (see scripts/prerender.mjs
// for per-route HTML shells).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Route-level code splitting (see src/router.tsx) already keeps each page
    // small; this just gives the framework runtime stable, long-cacheable
    // chunks and keeps the build log quiet.
    chunkSizeWarningLimit: 700,
    rolldownOptions: {
      output: {
        manualChunks(id: string) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("@tanstack/react-router") || id.includes("@tanstack/router-core")) {
            return "router";
          }
          if (id.includes("/react/") || id.includes("/react-dom/") || id.includes("scheduler")) {
            return "react";
          }
          return undefined;
        },
      },
    },
  },
});
