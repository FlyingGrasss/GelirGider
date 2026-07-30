"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      lerp: 0.1,
      stopInertiaOnNavigate: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
