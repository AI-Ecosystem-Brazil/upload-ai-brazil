import { useEdition } from "@/data/edition-context";
import { Reveal } from "@/components/site/section";
import { LazyMap } from "@/components/site/lazy-map";
import { RsvpButton } from "@/components/site/rsvp-button";

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

      {edition.slug === "araras-2026" ? (
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col items-start border-t border-border pt-6">
              <h3 className="text-lg font-semibold">Onde hospedar</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Encontre hotéis ou AirBNB para aproveitar sua passagem por Araras.
              </p>
              <RsvpButton className="mt-5" variant="outline" label="Onde hospedar" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col items-start border-t border-border pt-6">
              <h3 className="text-lg font-semibold">Caronas e Caravanas</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Entre nos grupos e bate-papo para organizar sua vinda para Araras.
              </p>
              <RsvpButton className="mt-5" variant="outline" label="Caronas e Caravanas" />
            </div>
          </Reveal>
        </div>
      ) : null}
    </div>
  );
}
