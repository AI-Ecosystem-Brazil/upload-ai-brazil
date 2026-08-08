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
      {SPEAKERS.map((s, i) => {
        const Card = s.profileUrl ? "a" : "article";
        return (
          <Reveal key={s.name} delay={(i % 3) * 80}>
            <Card
              {...(s.profileUrl
                ? { href: s.profileUrl, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors duration-200 hover:border-primary/40"
            >
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={`Retrato de ${s.name}`}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={800}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-background/40">
                  <span
                    aria-hidden
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient font-display text-2xl font-bold text-primary-foreground"
                  >
                    {initials(s.name)}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {s.featured ? (
                  <span className="mb-2 self-start rounded-full border border-accent/40 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Keynote
                  </span>
                ) : null}
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-accent">{s.role}</p>
                <p className="mt-5 flex-1 border-t border-border pt-4 font-display text-xs font-semibold uppercase tracking-wider text-primary">
                  {s.activity}
                </p>
              </div>
            </Card>
          </Reveal>
        );
      })}
    </div>
  );
}
