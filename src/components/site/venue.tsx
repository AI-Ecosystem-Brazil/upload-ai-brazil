import { useEdition } from "@/data/edition-context";
import { Reveal } from "@/components/site/section";
import { LazyMap } from "@/components/site/lazy-map";
import { RsvpButton } from "@/components/site/rsvp-button";
import { BedDouble, CarFront, MapPin } from "lucide-react";

export function Venue() {
  const edition = useEdition();

  return (
    <div className="grid gap-5">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {edition.venueInfo.map((i, idx) => (
          <Reveal key={i.label} delay={(idx % 2) * 80}>
            <div className="h-full bg-surface p-5 sm:p-6">
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
        <div className="rounded-lg border border-border bg-surface/60 p-5 sm:p-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Como chegar
            </p>
            {edition.mapAddress ? (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(edition.mapAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md border border-primary/40 px-3 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                <MapPin className="h-4 w-4" aria-hidden />
                Abrir rota
              </a>
            ) : null}
          </div>
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
              <BedDouble className="mb-4 h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-lg font-semibold">Onde hospedar</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Encontre hotéis ou AirBNB para aproveitar sua passagem por Araras.
              </p>
              <RsvpButton className="mt-5" variant="outline" label="Onde hospedar" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col items-start border-t border-border pt-6">
              <CarFront className="mb-4 h-6 w-6 text-primary" aria-hidden />
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
