"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scroll = new LocomotiveScroll();

    return () => scroll.destroy();
  }, []);

  return null;
}
