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
              <article className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors duration-200 hover:border-primary/40 sm:p-6">
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
                  {s.tentative ? (
                    <span className="rounded-full border border-dashed border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      A confirmar
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug sm:text-xl">
                  {s.title}
                </h3>
                {s.people ? (
                  <p className="mt-1.5 text-sm text-accent">{s.people}</p>
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
