import { useEffect, useRef, useState } from "react";

/**
 * Reveal no scroll com IntersectionObserver.
 * Só transform/opacity — nenhum layout shift. Em prefers-reduced-motion o CSS
 * neutraliza a animação, então o elemento aparece imediatamente.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return { ref, className: shown ? "reveal reveal-in" : "reveal" };
}
