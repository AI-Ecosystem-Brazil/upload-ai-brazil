import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4338.391338107302!2d-46.6621038!3d-23.554339700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582dbe278b15%3A0xd08729fb039d6441!2sAv.%20Ang%C3%A9lica%2C%202529%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001227-200!5e1!3m2!1spt-BR!2sbr!4v1786377288497!5m2!1spt-BR!2sbr";

export function LazyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface/60"
    >
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              InovaBRA Habitat
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Av. Angélica, 2529 — Bela Vista, São Paulo/SP
            </p>
          </div>
          {isVisible && (
            <span className="sr-only" role="status" aria-live="polite">
              Carregando mapa…
            </span>
          )}
        </div>
      )}

      {isVisible && (
        <iframe
          src={MAP_SRC}
          title="Mapa do InovaBRA Habitat"
          className="absolute inset-0 z-20 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}
