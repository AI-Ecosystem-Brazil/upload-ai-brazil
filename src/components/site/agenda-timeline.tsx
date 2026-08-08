import { useState } from "react";
import { AGENDA, KIND_LABEL, type Period, type SessionKind } from "@/data/event";
import { Reveal } from "@/components/site/section";
import { cn } from "@/lib/utils";

const FILTERS: Array<{ id: Period | "todos"; label: string }> = [
  { id: "todos", label: "Dia inteiro" },
  { id: "manha", label: "Manhã" },
  { id: "tarde", label: "Tarde" },
  { id: "noite", label: "Noite" },
];

const KIND_STYLE: Record<SessionKind, string> = {
  palestra: "border-primary/40 text-primary",
  painel: "border-accent/40 text-accent",
  keynote: "bg-brand-gradient text-primary-foreground border-transparent",
  intervalo: "border-border text-muted-foreground",
  momento: "border-accent/40 text-accent",
};

export function AgendaTimeline() {
  const [filter, setFilter] = useState<Period | "todos">("todos");
  const sessions = AGENDA.filter((s) => filter === "todos" || s.period === filter);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrar programação por período"
      >
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full border px-5 py-2 font-display text-xs font-semibold uppercase tracking-wider transition-colors",
                active
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ol className="mt-10 space-y-3 border-l border-border pl-5 sm:pl-8">
        {sessions.map((s) => (
          <li key={`${s.time}-${s.title}`} className="relative">
            <span
              aria-hidden
              className={cn(
                "absolute -left-[25px] top-7 h-2.5 w-2.5 rounded-full sm:-left-[37px]",
                s.kind === "intervalo" ? "bg-muted" : "bg-primary",
              )}
            />
            <Reveal>
              <article
                className={cn(
                  "rounded-2xl border p-5 transition-colors duration-200 sm:p-6",
                  s.highlight
                    ? "border-primary/60 bg-primary/5"
                    : "border-border bg-surface/60 hover:border-primary/40",
                )}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-lg font-bold tabular-nums text-primary">
                    {s.time}
                  </span>
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
                      KIND_STYLE[s.kind],
                    )}
                  >
                    {KIND_LABEL[s.kind]}
                  </span>
                  {s.badge ? (
                    <span className="rounded-full border border-accent/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {s.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug sm:text-xl">
                  {s.title}
                </h3>
                {s.people?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.people.map((p) => {
                      const content = (
                        <>
                          <span className="font-semibold text-foreground">{p.name}</span>
                          <span className="text-muted-foreground"> · {p.role}</span>
                        </>
                      );
                      return (
                        <li key={`${s.time}-${p.name}`}>
                          {p.profileUrl ? (
                            <a
                              href={p.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs transition-colors hover:border-primary/50 hover:text-primary"
                            >
                              {content}
                            </a>
                          ) : (
                            <span className="inline-flex rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs">
                              {content}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
                {s.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
