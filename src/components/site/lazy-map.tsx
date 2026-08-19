import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

export function LazyMap({
  src,
  venue,
  address,
}: {
  src: string;
  venue: string;
  address: string;
}) {
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
            <p className="text-sm font-medium text-foreground">{venue}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {address}
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
          src={src}
          title={`Mapa de ${venue}`}
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
