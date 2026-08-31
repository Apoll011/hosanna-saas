import {
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
} from "@tanstack/react-router";

import { ErrorComponent, NotFoundComponent, RootComponent } from "./routes/__root";

// Manual route tree with route-level code splitting. Every page is a
// `lazyRouteComponent` so its JS is a separate chunk that is downloaded only
// when needed. `defaultPreload: "intent"` makes hovering an internal link
// preload the target chunk, so navigation feels instant.
const rootRoute = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazyRouteComponent(() => import("./routes/index"), "Component"),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazyRouteComponent(() => import("./routes/about"), "Component"),
});

const chordproRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chordpro",
  component: lazyRouteComponent(() => import("./routes/chordpro"), "Component"),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: lazyRouteComponent(() => import("./routes/contact"), "Component"),
});

const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/legal",
  component: lazyRouteComponent(() => import("./routes/legal"), "Component"),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  chordproRoute,
  contactRoute,
  legalRoute,
]);

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
  // Preload a route's chunk as soon as the user is about to navigate to it
  // (link hover / touch start).
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
