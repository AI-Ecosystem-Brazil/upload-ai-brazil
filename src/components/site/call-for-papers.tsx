import { useEdition } from "@/data/edition-context";
import { RsvpButton } from "@/components/site/rsvp-button";
import { Reveal } from "@/components/site/section";

export function CallForPapers() {
  const edition = useEdition();
  const CFP = edition.cfp;
  const criteria = CFP.criteria;

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
          <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
            Cadastro obrigatório em {new URL(edition.rsvpUrl).host}
          </p>
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
