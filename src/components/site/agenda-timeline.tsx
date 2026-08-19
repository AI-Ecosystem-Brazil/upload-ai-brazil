import { useState } from "react";
import {
  KIND_LABEL,
  type Participant,
  type Period,
  type Session,
  type SessionKind,
} from "@/data/types";
import { initialsOf, photoOf } from "@/data/people";
import { useEdition } from "@/data/edition-context";
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
  handson: "border-primary/40 text-primary",
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

function TbdCard({ session }: { session: Session }) {
  return (
    <article className="rounded-2xl border border-dashed border-border/70 bg-surface/30 p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-display text-lg font-bold tabular-nums text-muted-foreground">
          {session.time}
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {KIND_LABEL[session.kind]}
        </span>
        <span className="rounded-full border border-accent/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
          A definir
        </span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-muted-foreground sm:text-xl">
        {session.title}
      </h3>
      {session.description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {session.description}
        </p>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Conteúdo e participantes em definição pela curadoria.
        </p>
      )}
    </article>
  );
}

function KeynoteCard({ session }: { session: Session }) {
  const lead = session.people?.[0];
  const photo = lead ? photoOf(lead.name) : undefined;

  return (
    <article className="overflow-hidden rounded-3xl border border-primary/50 bg-surface/80">
      <div className="grid gap-0 sm:grid-cols-[minmax(0,320px)_1fr] sm:min-h-[26rem]">
        <div className="relative min-h-[15rem] overflow-hidden bg-brand-gradient/10 sm:min-h-full">
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gradient opacity-25 blur-3xl"
          />
          {lead ? (
            photo ? (
              <img
                src={photo}
                alt={`Retrato de ${lead.name}, palestrante keynote`}
                loading="lazy"
                decoding="async"
                width={640}
                height={800}
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-top drop-shadow-2xl transition-transform duration-700 ease-out will-change-transform motion-safe:hover:scale-105 sm:object-[center_top] [mask-image:linear-gradient(to_bottom,black_78%,transparent)] sm:[mask-image:linear-gradient(to_right,black_82%,transparent),linear-gradient(to_bottom,black_88%,transparent)] sm:[mask-composite:intersect]"
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center">
                <Avatar name={lead.name} size="md" className="relative h-28 w-28 text-xl" />
              </div>
            )
          ) : null}

          <span
            className={cn(
              "absolute bottom-4 left-4 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm",
              KIND_STYLE.keynote,
            )}
          >
            {session.badge ?? KIND_LABEL.keynote}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <span className="font-display text-lg font-bold tabular-nums text-primary">
            {session.time}
          </span>

          {lead ? (
            <p className="mt-3 font-display text-2xl font-bold leading-tight text-brand-gradient sm:text-3xl">
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
          {session.badge ?? KIND_LABEL[session.kind]}
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

function SessionList({ sessions }: { sessions: Session[] }) {
  return (
    <ol className="mt-10 space-y-3 border-l border-border pl-5 sm:pl-8">
      {sessions.map((s) => (
        <li key={`${s.time}-${s.title}`} className="relative">
          <span
            aria-hidden
            className={cn(
              "absolute -left-[25px] top-7 h-2.5 w-2.5 rounded-full sm:-left-[37px]",
              s.kind === "intervalo" || s.tbd ? "bg-muted" : "bg-primary",
            )}
          />
          <Reveal>
            {s.tbd ? (
              <TbdCard session={s} />
            ) : s.kind === "keynote" ? (
              <KeynoteCard session={s} />
            ) : (
              <StandardCard session={s} />
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function PeriodFilters({
  filter,
  onChange,
}: {
  filter: Period | "todos";
  onChange: (id: Period | "todos") => void;
}) {
  return (
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
            onClick={() => onChange(f.id)}
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
  );
}

export function AgendaTimeline() {
  const edition = useEdition();
  const tracks = edition.tracks;
  const [filter, setFilter] = useState<Period | "todos">("todos");
  const [trackId, setTrackId] = useState<string>(tracks?.[0]?.id ?? "");

  const activeTrack = tracks?.find((t) => t.id === trackId) ?? tracks?.[0];
  const source = activeTrack ? activeTrack.sessions : (edition.agenda ?? []);
  const sessions = source.filter((s) => filter === "todos" || s.period === filter);

  return (
    <div>
      {tracks ? (
        <div
          className="mb-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Escolher trilha da programação"
        >
          {tracks.map((t) => {
            const active = t.id === activeTrack?.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTrackId(t.id)}
                className={cn(
                  "rounded-2xl border px-5 py-3 text-left font-display text-sm font-semibold transition-colors",
                  active
                    ? "border-primary/60 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {t.name}
              </button>
            );
          })}
        </div>
      ) : null}

      {activeTrack?.description ? (
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {activeTrack.description}
        </p>
      ) : null}

      <PeriodFilters filter={filter} onChange={setFilter} />

      {sessions.length ? (
        <SessionList sessions={sessions} />
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-border/70 bg-surface/30 p-6 text-sm text-muted-foreground">
          Nenhuma atividade neste período nesta trilha.
        </p>
      )}
    </div>
  );
}
