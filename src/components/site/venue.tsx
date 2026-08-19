import { useEdition } from "@/data/edition-context";
import { Reveal } from "@/components/site/section";
import { LazyMap } from "@/components/site/lazy-map";

export function Venue() {
  const edition = useEdition();

  return (
    <div className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {edition.venueInfo.map((i, idx) => (
          <Reveal key={i.label} delay={(idx % 2) * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {i.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {i.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="rounded-2xl border border-border bg-surface/60 p-5 sm:p-6">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Como chegar
          </p>
          {edition.mapEmbedUrl ? (
            <LazyMap
              src={edition.mapEmbedUrl}
              venue={edition.venue}
              address={edition.mapAddress ?? edition.city}
            />
          ) : (
            <p className="mt-4 rounded-xl border border-dashed border-border/70 bg-background/30 p-6 text-sm leading-relaxed text-muted-foreground">
              Endereço completo e mapa da {edition.venue} serão divulgados em
              breve.
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
