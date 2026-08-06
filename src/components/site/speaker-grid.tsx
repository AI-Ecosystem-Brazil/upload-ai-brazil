import { SPEAKERS } from "@/data/event";
import { Reveal } from "@/components/site/section";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function SpeakerGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SPEAKERS.map((s, i) => (
        <Reveal key={s.name} delay={(i % 3) * 80}>
          <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-colors duration-200 hover:border-primary/40">
            <div
              aria-hidden
              className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-bold text-primary-foreground"
            >
              {initials(s.name)}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{s.name}</h3>
            <p className="mt-1 text-sm text-accent">{s.role}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {s.bio}
            </p>
            {s.topic ? (
              <p className="mt-5 border-t border-border pt-4 font-display text-xs font-semibold uppercase tracking-wider text-primary">
                {s.topic}
              </p>
            ) : null}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
