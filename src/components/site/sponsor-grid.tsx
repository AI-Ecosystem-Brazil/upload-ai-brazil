import { useEdition } from "@/data/edition-context";
import { Reveal } from "@/components/site/section";
import { RsvpButton } from "@/components/site/rsvp-button";

export function SponsorGrid() {
  const edition = useEdition();
  const linkUrl = edition.status === "past" ? edition.downloadUrl : edition.rsvpUrl;

  return (
    <div className="space-y-12">
      <Reveal>
        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Apoio institucional
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {edition.supporters.map((s) => (
              <a
                key={s.name}
                href={linkUrl ?? edition.rsvpUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`flex h-28 items-center justify-center rounded-xl border border-border p-6 transition-colors duration-200 hover:border-primary/40 ${
                  s.light ? "bg-white" : "bg-surface/40"
                }`}
              >
                <img
                  src={s.logo}
                  alt={`Logotipo ${s.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-full object-contain"
                />
              </a>
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
                    <a
                      key={s.name}
                      href={edition.rsvpUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`flex h-24 items-center justify-center rounded-xl border border-border p-5 transition-colors duration-200 hover:border-primary/40 ${
                        s.light ? "bg-white" : "bg-surface/40"
                      }`}
                    >
                      <img
                        src={s.logo}
                        alt={`Logotipo ${s.name}`}
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-full object-contain"
                      />
                    </a>
                  ))}
                  {Array.from({ length: Math.max(0, t.slots - (t.sponsors?.length ?? 0)) }).map((_, i) => (
                    <a
                      key={i}
                      href={edition.rsvpUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex h-24 items-center justify-center rounded-xl border border-dashed border-border bg-surface/40 text-xs uppercase tracking-wider text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-primary"
                    >
                      Vaga aberta
                    </a>
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
