import { useState } from "react";
import {
  AGENDA,
  KIND_LABEL,
  initialsOf,
  photoOf,
  type Participant,
  type Period,
  type Session,
  type SessionKind,
} from "@/data/event";
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

const AVATAR_SIZE = {
  sm: "h-12 w-12 text-[11px]",
  md: "h-20 w-20 text-sm",
} as const;

function Avatar({
  name,
  size = "md",
  className,
}: {
  name: string;
  size?: keyof typeof AVATAR_SIZE;
  className?: string;
}) {
  const photo = photoOf(name);
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-background/60",
        AVATAR_SIZE[size],
        className,
      )}
    >
      {photo ? (
        <img
          src={photo}
          alt={`Retrato de ${name}`}
          loading="lazy"
          decoding="async"
          width={160}
          height={160}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <span
          aria-hidden
          className="flex h-full w-full items-center justify-center bg-brand-gradient font-display font-bold text-primary-foreground"
        >
          {initialsOf(name)}
        </span>
      )}
    </span>
  );
}

function PersonChip({ person, className }: { person: Participant; className?: string }) {
  const content = (
    <>
      <span className="font-semibold text-foreground">{person.name}</span>
      <span className="text-muted-foreground"> · {person.role}</span>
    </>
  );
  const base = cn(
    "inline-flex rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs",
    className,
  );
  return person.profileUrl ? (
    <a
      href={person.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, "transition-colors hover:border-primary/50 hover:text-primary")}
    >
      {content}
    </a>
  ) : (
    <span className={base}>{content}</span>
  );
}

function PanelPeople({ people, sessionKey }: { people: Participant[]; sessionKey: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-4">
      <div className="flex items-center pl-1">
        {people.map((p) => (
          <Avatar
            key={`${sessionKey}-av-${p.name}`}
            name={p.name}
            size="sm"
            className={cn(
              "-ml-3 ring-2 ring-surface transition-transform duration-200 first:ml-0 motion-reduce:transition-none",
              active === p.name
                ? "z-10 -translate-y-1 ring-primary motion-reduce:translate-y-0"
                : "",
            )}
          />
        ))}
      </div>

      <ul className="mt-3 flex flex-wrap gap-2">
        {people.map((p) => (
          <li
            key={`${sessionKey}-${p.name}`}
            onMouseEnter={() => setActive(p.name)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(p.name)}
            onBlur={() => setActive(null)}
          >
            <PersonChip person={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function KeynoteCard({ session }: { session: Session }) {
  const lead = session.people?.[0];

  return (
    <article className="overflow-hidden rounded-3xl border border-primary/50 bg-surface/80">
      <div className="grid gap-0 sm:grid-cols-[minmax(0,240px)_1fr]">
        <div className="relative flex items-end justify-center overflow-hidden bg-brand-gradient/10 px-6 pt-6 sm:px-4 sm:pt-8">
          <span
            aria-hidden
            className="absolute inset-x-4 bottom-0 top-6 rounded-full bg-brand-gradient opacity-20 blur-2xl"
          />
          {lead ? (
            photoOf(lead.name) ? (
              <img
                src={photoOf(lead.name)}
                alt={`Retrato de ${lead.name}`}
                loading="lazy"
                decoding="async"
                width={480}
                height={600}
                className="relative h-56 w-auto max-w-full object-contain object-bottom drop-shadow-2xl sm:h-72"
              />
            ) : (
              <Avatar name={lead.name} size="md" className="relative mb-8 h-28 w-28 text-xl" />
            )
          ) : null}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-lg font-bold tabular-nums text-primary">
              {session.time}
            </span>
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
                KIND_STYLE.keynote,
              )}
            >
              {session.badge ?? KIND_LABEL.keynote}
            </span>
          </div>

          {lead ? (
            <p className="mt-4 font-display text-2xl font-bold leading-tight text-brand-gradient sm:text-3xl">
              {lead.name}
            </p>
          ) : null}
          <h3 className="mt-2 text-lg font-semibold leading-snug sm:text-xl">{session.title}</h3>
          {lead ? <p className="mt-2 text-sm text-accent">{lead.role}</p> : null}

          {session.description ? (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {session.description}
            </p>
          ) : null}

          {lead?.profileUrl ? (
            <a
              href={lead.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border border-primary/50 px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ver perfil
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function StandardCard({ session }: { session: Session }) {
  const people = session.people ?? [];
  const isPanel = people.length > 1;
  const solo = !isPanel ? people[0] : undefined;

  return (
    <article className="rounded-2xl border border-border bg-surface/60 p-5 transition-colors duration-200 hover:border-primary/40 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-display text-lg font-bold tabular-nums text-primary">
          {session.time}
        </span>
        <span
          className={cn(
            "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
            KIND_STYLE[session.kind],
          )}
        >
          {KIND_LABEL[session.kind]}
        </span>
      </div>

      <div className={cn(solo ? "mt-4 flex gap-4 sm:gap-5" : "")}>
        {solo ? <Avatar name={solo.name} size="md" /> : null}

        <div className="min-w-0 flex-1">
          <h3 className={cn("text-lg font-semibold leading-snug sm:text-xl", solo ? "" : "mt-3")}>
            {session.title}
          </h3>

          {solo ? (
            <p className="mt-1.5 text-sm">
              <span className="font-semibold text-foreground">{solo.name}</span>
              <span className="text-muted-foreground"> · {solo.role}</span>
              {solo.profileUrl ? (
                <a
                  href={solo.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-primary underline-offset-4 hover:underline"
                >
                  perfil
                </a>
              ) : null}
            </p>
          ) : null}

          {isPanel ? (
            <PanelPeople people={people} sessionKey={`${session.time}-${session.title}`} />
          ) : null}

          {session.description ? (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {session.description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

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
              {s.kind === "keynote" ? <KeynoteCard session={s} /> : <StandardCard session={s} />}
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
