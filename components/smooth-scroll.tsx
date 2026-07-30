"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Keep Lenis defaults; autoRaf is the only integration option we need here.
    const lenis = new Lenis({ autoRaf: true });

    return () => lenis.destroy();
  }, []);

  return null;
}
