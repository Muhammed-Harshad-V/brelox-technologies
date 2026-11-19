"use client";

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export type AnimationMode = "initial-load-only" | "once-per-page";

interface AnimationContextValue {
  shouldAnimate: boolean;
  mode: AnimationMode;
  setMode: (mode: AnimationMode) => void;
}

const AnimationContext = createContext<AnimationContextValue>({
  shouldAnimate: true,
  mode: "initial-load-only",
  setMode: () => {},
});

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: ReactNode;
  defaultMode?: AnimationMode;
}

export function AnimationProvider({
  children,
  defaultMode = "initial-load-only",
}: AnimationProviderProps) {
  const pathname = usePathname();
  const [mode, setMode] = useState<AnimationMode>(defaultMode);

  // Store the path the browser initially landed on (or hard-refreshed on)
  const initialRouteRef = useRef<string | null>(null);
  // Track if any client-side page change has happened
  const hasNavigatedRef = useRef<boolean>(false);
  // Set of all routes that have completed their first visit in this browser session
  const visitedRoutesRef = useRef<Set<string>>(new Set());

  if (initialRouteRef.current === null) {
    initialRouteRef.current = pathname;
  }

  if (initialRouteRef.current !== null && pathname !== initialRouteRef.current) {
    hasNavigatedRef.current = true;
  }

  let shouldAnimate = true;

  if (mode === "initial-load-only") {
    // Animate only on the initial page load or page refresh, never on client-side route changes
    shouldAnimate = !hasNavigatedRef.current && pathname === initialRouteRef.current;
  } else if (mode === "once-per-page") {
    // Animate each page the first time it is visited, but never again when returning to it
    shouldAnimate = !visitedRoutesRef.current.has(pathname);
  }

  useEffect(() => {
    visitedRoutesRef.current.add(pathname);
    if (initialRouteRef.current && pathname !== initialRouteRef.current) {
      hasNavigatedRef.current = true;
    }
  }, [pathname]);

  return (
    <AnimationContext.Provider value={{ shouldAnimate, mode, setMode }}>
      {children}
    </AnimationContext.Provider>
  );
}
