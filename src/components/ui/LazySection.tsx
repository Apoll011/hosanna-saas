import { type ComponentType, type ReactNode, useEffect, useRef, useState } from "react";

import { useInView } from "@/hooks/useInView";

interface LazySectionProps<P extends object> {
  /** Dynamic import that resolves to a module with a `default` component. */
  load: () => Promise<{ default: ComponentType<P> }>;
  /** Rendered (and observed) while the chunk is still loading. */
  fallback?: ReactNode;
  /** How far before the viewport the chunk should start loading. */
  rootMargin?: string;
  props?: P;
}

/**
 * Renders a placeholder and only downloads + mounts the component's chunk when
 * it approaches the viewport. Keeps heavy widgets (WebGL, animation libs) out
 * of the initial bundle and off the critical path.
 */
export function LazySection<P extends object>({
  load,
  fallback = null,
  rootMargin = "400px",
  props,
}: LazySectionProps<P>) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin });
  const [Comp, setComp] = useState<ComponentType<P> | null>(null);

  useEffect(() => {
    if (!inView || Comp) return;
    let cancelled = false;
    load()
      .then((mod) => {
        if (!cancelled) setComp(() => mod.default);
      })
      .catch((error) => {
        console.error("LazySection: failed to load chunk", error);
      });
    return () => {
      cancelled = true;
    };
  }, [inView, Comp, load]);

  return <div ref={ref}>{Comp ? <Comp {...(props as P)} /> : fallback}</div>;
}
