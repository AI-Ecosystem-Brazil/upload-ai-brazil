import { EVENT } from "@/data/event";
import { Reveal } from "@/components/site/section";
import { LazyMap } from "@/components/site/lazy-map";

const INFO = [
  { label: "Endereço", value: "InovaBRA Habitat · Av. Angélica, 2529 — Bela Vista, São Paulo/SP" },
  { label: "Andar", value: "10º andar inteiro, com os dois maiores auditórios" },
  { label: "Credenciamento", value: "A partir das 08h30, na recepção do prédio" },
  { label: "Formato", value: `${EVENT.format} · capacidade máxima de ${EVENT.capacity}` },
];

export function Venue() {
  return (
    <div className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        {INFO.map((i, idx) => (
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
          <LazyMap />
        </div>
      </Reveal>
    </div>
  );
}
