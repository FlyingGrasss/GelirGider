"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    function handleLinkClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const nextUrl = new URL(link.href, window.location.href);
      if (nextUrl.origin !== window.location.origin || nextUrl.pathname === window.location.pathname) {
        return;
      }

      overlayRef.current?.classList.remove("is-revealing");
      overlayRef.current?.classList.add("is-covering");
    }

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) {
      return;
    }

    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    overlay.classList.remove("is-covering");
    overlay.classList.add("is-revealing");
    const cleanupTimer = window.setTimeout(() => overlay.classList.remove("is-revealing"), 650);

    return () => window.clearTimeout(cleanupTimer);
  }, [pathname]);

  return (
    <>
      <div className="page-transition-content">{children}</div>
      <div ref={overlayRef} className="page-transition-overlay" aria-hidden="true">
        <span className="page-transition-label"><i /> NFC Solutions Turkey</span>
      </div>
    </>
  );
}
