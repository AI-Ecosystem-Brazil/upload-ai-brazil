import { useEdition } from "@/data/edition-context";
import { RsvpButton } from "@/components/site/rsvp-button";
import { Reveal } from "@/components/site/section";
import { photoOf } from "@/data/people";

const ARARAS_FACES = [
  "André Almeida",
  "Aline Bocardo",
  "Jairo Segre",
  "Maurício Conte",
  "Juliano Kimura",
];

export function CallForPapers() {
  const edition = useEdition();
  const CFP = edition.cfp;
  const criteria = CFP.criteria;

  if (edition.slug === "araras-2026") {
    return (
      <Reveal>
        <div className="grid overflow-hidden rounded-lg border border-gold/35 bg-surface/60 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-64 overflow-hidden bg-background/40 p-5 sm:min-h-80 sm:p-8">
            <div aria-hidden className="circuit-grid absolute inset-0 opacity-40" />
            <div className="relative grid h-full grid-cols-6 items-end gap-3">
              {ARARAS_FACES.map((name, index) => {
                const photo = photoOf(name);
                if (!photo) return null;
                return (
                  <div
                    key={name}
                    className={`overflow-hidden rounded-lg border frame-gold ${
                      index === 0
                        ? "col-span-3 row-span-2 self-stretch"
                        : "col-span-3 sm:col-span-2"
                    }`}
                  >
                    <img
                      src={photo}
                      alt={`Retrato de ${name}`}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={600}
                      className="h-full min-h-32 w-full object-cover object-top"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Sua voz pode transformar
            </p>
            <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
              Compartilhe o conhecimento que pode mudar o futuro da IA
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {CFP.requirement}
            </p>
            <RsvpButton className="mt-8 self-start px-9 py-4" label="Quero palestrar" />
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <div className={criteria?.length ? "grid gap-6 lg:grid-cols-2" : "grid gap-6"}>
      <Reveal>
        <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
          <h3 className="text-xl font-semibold">Formatos das atividades</h3>
          <ul className="mt-5 space-y-3">
            {CFP.formats.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {CFP.requirement}
          </p>
          <RsvpButton className="mt-7" variant="outline" label="Quero palestrar" />
        </div>
      </Reveal>

      {criteria?.length ? (
        <Reveal delay={80}>
          <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Como o perfil é avaliado</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A curadoria considera conteúdo, participação e engajamento no
              ecossistema.
            </p>
            <dl className="mt-6 space-y-3">
              {criteria.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/40 px-4 py-3"
                >
                  <dt className="text-sm text-muted-foreground">{c.label}</dt>
                  <dd className="font-display text-sm font-bold text-primary">
                    {c.score}
                  </dd>
                </div>
              ))}
            </dl>
            <RsvpButton
              className="mt-7"
              variant="outline"
              label="Quero colaborar com a curadoria"
            />
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
