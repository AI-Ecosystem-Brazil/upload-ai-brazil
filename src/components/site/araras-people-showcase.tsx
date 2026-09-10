import { initialsOf, photoOf } from "@/data/people";
import { Reveal } from "@/components/site/section";

type Person = {
  name: string;
  role?: string;
  photoName?: string;
};

const FEATURED: Person[] = [
  { name: "André Almeida" },
  { name: "Marco Riveiros" },
  { name: "Aline Bocardo" },
  { name: "Elen Melo" },
  { name: "Ana Barros" },
];

const SPEAKERS: Person[] = [
  { name: "Pedro Chiamulera" },
  { name: "Juliano Kimura" },
  { name: "Rodrigo Righetti" },
];

const SPECIAL: Person[] = [
  {
    name: "Jairo Segre",
    role: "Embaixador da Inteligência Artificial na região",
  },
  { name: "Maurício Conte", role: "Co-produção" },
];

const SUPPORT: Person[] = [
  { name: "Tiene Collins", photoName: "Tiene Colins" },
  { name: "Ana Garms" },
  { name: "Carolina da Luz" },
  { name: "Gabriel Virissimo" },
  { name: "Cilene Danta" },
  { name: "Deize Andrade" },
  { name: "Guta Raeder" },
  { name: "Tiago Zouk" },
];

function Portrait({ person, tone }: { person: Person; tone: "gold" | "neon" | "quiet" }) {
  const photo = photoOf(person.photoName ?? person.name);
  const frameClass =
    tone === "gold"
      ? "frame-gold"
      : tone === "neon"
        ? "frame-neon"
        : "border-border";

  return (
    <div className={`overflow-hidden rounded-xl border ${frameClass}`}>
      {photo ? (
        <img
          src={photo}
          alt={`Retrato de ${person.name}`}
          loading="lazy"
          decoding="async"
          width={640}
          height={800}
          className="aspect-[4/5] w-full object-cover object-top"
        />
      ) : (
        <div
          aria-label={`Foto de ${person.name} será divulgada em breve`}
          className="flex aspect-[4/5] w-full items-center justify-center bg-surface-2"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient font-display text-xl font-bold text-primary-foreground">
            {initialsOf(person.name)}
          </span>
        </div>
      )}
    </div>
  );
}

function PersonCard({ person, tone }: { person: Person; tone: "gold" | "neon" }) {
  return (
    <article className="h-full">
      <Portrait person={person} tone={tone} />
      <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
      {person.role ? (
        <p className={tone === "gold" ? "mt-1 text-sm text-gold" : "mt-1 text-sm text-primary"}>
          {person.role}
        </p>
      ) : null}
    </article>
  );
}

export function ArarasPeopleShowcase() {
  return (
    <div className="space-y-16">
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Palestrantes de destaque
        </p>
        <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {FEATURED.map((person, index) => (
            <Reveal key={person.name} delay={(index % 5) * 60}>
              <PersonCard person={person} tone="gold" />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Palestrantes
          </p>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {SPEAKERS.map((person, index) => (
              <Reveal key={person.name} delay={index * 70}>
                <PersonCard person={person} tone="neon" />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Liderança regional
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {SPECIAL.map((person, index) => (
              <Reveal key={person.name} delay={index * 80}>
                <PersonCard person={person} tone="gold" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Apoio
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {SUPPORT.map((person, index) => (
            <Reveal key={person.name} delay={(index % 4) * 50}>
              <article className="text-center">
                <Portrait person={person} tone="quiet" />
                <h3 className="mt-3 text-sm font-semibold leading-snug">{person.name}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}