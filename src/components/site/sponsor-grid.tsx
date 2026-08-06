import { SPONSOR_TIERS } from "@/data/event";
import { Reveal } from "@/components/site/section";

export function SponsorGrid() {
  return (
    <div className="space-y-10">
      {SPONSOR_TIERS.map((t) => (
        <Reveal key={t.tier}>
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {t.tier}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: t.slots }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-24 items-center justify-center rounded-xl border border-dashed border-border bg-surface/40 text-xs uppercase tracking-wider text-muted-foreground"
                >
                  Vaga aberta
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
      <p className="text-sm text-muted-foreground">
        Quer expor sua marca para o maior ecossistema de IA do Brasil? Fale com a
        organização pela plataforma ai.eco.br.
      </p>
    </div>
  );
}
