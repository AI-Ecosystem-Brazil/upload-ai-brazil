import { EVENT, SPONSOR_TIERS, SUPPORTERS } from "@/data/event";
import { Reveal } from "@/components/site/section";
import { RsvpButton } from "@/components/site/rsvp-button";

export function SponsorGrid() {
  return (
    <div className="space-y-12">
      <Reveal>
        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Apoio institucional
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SUPPORTERS.map((s) => (
              <a
                key={s.name}
                href={EVENT.rsvpUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-28 items-center justify-center rounded-xl border border-border bg-surface/40 p-6 transition-colors duration-200 hover:border-primary/40"
              >
                <img
                  src={s.logo}
                  alt={`Logotipo ${s.name}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 w-auto max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      {SPONSOR_TIERS.map((t) => (
        <Reveal key={t.tier}>
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {t.tier}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: t.slots }).map((_, i) => (
                <a
                  key={i}
                  href={EVENT.rsvpUrl}
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
      ))}

      <div className="flex flex-col items-start gap-5">
        <p className="text-sm text-muted-foreground">
          Quer expor sua marca para o maior ecossistema de IA do Brasil? Garanta
          sua cota pela plataforma AI Brasil.
        </p>
        <RsvpButton variant="outline" label="Quero patrocinar" />
      </div>
    </div>
  );
}
