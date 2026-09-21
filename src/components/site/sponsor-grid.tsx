import { useEdition } from "@/data/edition-context";
import { Reveal } from "@/components/site/section";
import { RsvpButton } from "@/components/site/rsvp-button";

export function SponsorGrid() {
  const edition = useEdition();
  const linkUrl = edition.status === "past" ? edition.downloadUrl : edition.rsvpUrl;

  const cardClass = (light?: boolean, large?: boolean) =>
    `flex items-center justify-center rounded-lg border border-border transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 focus-visible:border-primary ${
      light ? "bg-white" : "bg-surface/40"
    } ${large ? "h-24 p-2" : "h-28 p-6"}`;

  return (
    <div className="space-y-12">
      <Reveal>
        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Apoio institucional
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {edition.supporters.map((s) => (
              <div
                key={s.name}
                className={cardClass(s.light, false)}
              >
                <img
                  src={s.logo}
                  alt={`Logotipo ${s.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {edition.status === "upcoming"
        ? edition.sponsorTiers.map((t) => (
            <Reveal key={t.tier}>
              <div>
                <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  {t.tier}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {t.sponsors?.map((s) => (
                    <div
                      key={s.name}
                      className={`${cardClass(s.light, s.large)} ${s.wide ? "col-span-2" : ""}`}
                    >
                      <img
                        src={s.logo}
                        alt={`Logotipo ${s.name}`}
                        loading="lazy"
                        decoding="async"
                        className={`${s.large ? "h-20 w-full object-contain" : "h-14 w-full object-contain"}`}
                      />
                    </div>
                  ))}
                  {Array.from({
                    length: Math.max(
                      0,
                      t.slots - (t.sponsors?.reduce((total, sponsor) => total + (sponsor.wide ? 2 : 1), 0) ?? 0),
                    ),
                  }).map((_, i) => (
                    <div
                      key={i}
                      className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border bg-background/20 text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary"
                    >
                      Vaga aberta
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))
        : null}

      {edition.status === "upcoming" ? (
        <div className="flex flex-col items-start gap-5">
          <p className="text-sm text-muted-foreground">
            Quer expor sua marca para o maior ecossistema de IA do Brasil? Garanta
            sua cota pela plataforma AI Brasil.
          </p>
          <RsvpButton variant="outline" label="Quero patrocinar" />
        </div>
      ) : null}
    </div>
  );
}
