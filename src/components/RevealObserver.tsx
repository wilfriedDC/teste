"use client";

import { useEffect } from "react";

/**
 * Révèle les éléments `.reveal` quand ils entrent dans le viewport.
 * Un MutationObserver prend aussi en charge les éléments ajoutés plus tard
 * (ex. cartes projet qui réapparaissent après un changement de filtre).
 */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );

    const watch = () =>
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((node) => io.observe(node));

    watch();
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
