"use client";

import { useEffect } from "react";

export default function DevToolsBlocker() {
  useEffect(() => {
    const redirect = () => {
      window.location.href = "https://www.okardcare.com";
    };

    // Detect if device is mobile
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Detect DevTools by checking for big console window
    const checkDevTools = () => {
      if (isMobile) return; // Skip detection on mobile
      const threshold = 160; // px
      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        redirect();
      }
    };

    // Interval check for DevTools
    const interval = setInterval(checkDevTools, 500);

    // Block right-click (desktop only)
    const blockContextMenu = (e: MouseEvent) => {
      if (!isMobile) {
        e.preventDefault();
        redirect();
      }
    };

    // Block certain keyboard shortcuts (desktop only)
    const blockKeys = (e: KeyboardEvent) => {
      if (!isMobile) {
        if (
          e.key === "F12" ||
          (e.ctrlKey &&
            e.shiftKey &&
            ["I", "J", "C"].includes(e.key.toUpperCase())) ||
          (e.ctrlKey && e.key.toUpperCase() === "U")
        ) {
          e.preventDefault();
          redirect();
        }
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeys);

    return () => {
      clearInterval(interval);
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
}
