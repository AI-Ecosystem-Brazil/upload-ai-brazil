import { initialsOf, photoOf } from "@/data/people";
import { Reveal } from "@/components/site/section";

type Person = {
  name: string;
  role?: string;
  recognition?: string;
  photoName?: string;
};

const FEATURED: Person[] = [
  { name: "André Almeida", recognition: "Destaque nacional" },
  { name: "Marco Riveiros", recognition: "Destaque nacional" },
  { name: "Aline Bocardo", recognition: "Destaque nacional" },
  { name: "Elen Melo", recognition: "Destaque nacional" },
  { name: "Ana Barros", recognition: "Destaque nacional" },
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
    recognition: "Liderança regional",
  },
  { name: "Maurício Conte", role: "Co-produção", recognition: "Realização" },
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
  { name: "Elisangela Rosa" },
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
    <div className={`group relative overflow-hidden rounded-lg border ${frameClass}`}>
      {photo ? (
        <img
          src={photo}
          alt={`Retrato de ${person.name}`}
          loading="lazy"
          decoding="async"
          width={640}
          height={800}
          className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div
          aria-label={`Foto de ${person.name} será divulgada em breve`}
          className="flex aspect-[4/5] w-full items-center justify-center bg-surface-2"
        >
          <span aria-hidden className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient font-display text-xl font-bold text-primary-foreground">
            {initialsOf(person.name)}
          </span>
        </div>
      )}
      {person.recognition ? (
        <span className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-sm border border-gold/60 bg-background/90 px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-wider text-gold backdrop-blur">
          {person.recognition}
        </span>
      ) : null}
    </div>
  );
}

function PersonCard({ person, tone }: { person: Person; tone: "gold" | "neon" }) {
  return (
    <article className="h-full">
      <Portrait person={person} tone={tone} />
      <h3 className="mt-4 text-base font-semibold leading-snug sm:text-lg">{person.name}</h3>
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
    <div className="space-y-14 sm:space-y-16">
      <div>
        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Palestrantes de destaque
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {FEATURED.map((person, index) => (
            <Reveal key={person.name} delay={(index % 5) * 60}>
              <PersonCard person={person} tone="gold" />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Palestrantes
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {SPEAKERS.map((person, index) => (
              <Reveal key={person.name} delay={index * 70}>
                <PersonCard person={person} tone="neon" />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Liderança regional
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5">
            {SPECIAL.map((person, index) => (
              <Reveal key={person.name} delay={index * 80}>
                <PersonCard person={person} tone="gold" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Apoio
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 min-[440px]:grid-cols-3 sm:grid-cols-5 lg:grid-cols-9">
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