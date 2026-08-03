"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function ConversionTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-conversion]");
      if (!target) return;
      const action = target.getAttribute("data-conversion");
      const label = target.getAttribute("data-conversion-label") || "";
      if (typeof window.gtag !== "undefined") {
        window.gtag("event", action, {
          event_category: "conversion",
          event_label: label,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
