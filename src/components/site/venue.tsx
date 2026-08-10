import { EVENT } from "@/data/event";
import { Reveal } from "@/components/site/section";

const INFO = [
  { label: "Endereço", value: "InovaBRA Habitat · Av. Angélica, 2529 — Bela Vista, São Paulo/SP" },
  { label: "Andar", value: "10º andar inteiro, com os dois maiores auditórios" },
  { label: "Credenciamento", value: "A partir das 08h30, na recepção do prédio" },
  { label: "Formato", value: `${EVENT.format} · capacidade máxima de ${EVENT.capacity}` },
];

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4338.391338107302!2d-46.6621038!3d-23.554339700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582dbe278b15%3A0xd08729fb039d6441!2sAv.%20Ang%C3%A9lica%2C%202529%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001227-200!5e1!3m2!1spt-BR!2sbr!4v1786377288497!5m2!1spt-BR!2sbr";

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
          <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src={MAP_SRC}
              title="Mapa do InovaBRA Habitat"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
