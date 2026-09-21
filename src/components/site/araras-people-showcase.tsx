import { initialsOf, photoOf } from "@/data/people";
import { Reveal } from "@/components/site/section";

type Person = {
  name: string;
  role?: string;
  recognition?: string;
  photoName?: string;
};

const KEYNOTES: Person[] = [
  {
    name: "Pedro Chiamulera",
    role: "Como construí uma empresa de R$ 2,5 bilhões",
    recognition: "Keynote Speaker",
  },
  {
    name: "Marco Riveiros",
    role: "Inteligência Artificial deve ser um privilégio de todos",
    recognition: "Keynote Speaker",
  },
  {
    name: "Aline Bocardo",
    role: "O maior desafio da era da IA",
    recognition: "Keynote Speaker",
  },
];

const SPEAKERS: Person[] = [
  { name: "André Almeida", role: "Palestrante e painelista" },
  { name: "André Magno", role: "Palestrante" },
  { name: "Bruno Velloso", role: "Palestrante" },
  { name: "Pietro Mauro", role: "Palestrante e facilitador" },
  { name: "Claudeir Ribeiro", role: "Palestrante" },
  { name: "Elen Melo", role: "Palestrante convidada" },
  { name: "Ana Barros", role: "Palestrante convidada" },
  { name: "Juliano Kimura", role: "Palestrante e facilitador" },
  { name: "Rodrigo Righetti", role: "Palestrante" },
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
  { name: "Carolina da Luz", role: "Mediadora e painelista" },
  { name: "Gabriel Viríssimo", role: "Palestrante e painelista" },
  { name: "Guta Raeder", role: "Mestre de Cerimônia" },
  { name: "Tiago Zouk", role: "Palestrante" },
  { name: "Elisangela Rosa", role: "Palestrante" },
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

function KeynoteCard({ person }: { person: Person }) {
  return (
    <article className="group h-full overflow-hidden rounded-lg border border-gold/60 bg-surface/65 shadow-gold-soft">
      <Portrait person={person} tone="gold" />
      <div className="p-4 sm:p-5">
        <p className="font-display text-[10px] font-bold uppercase tracking-wider text-gold">
          Keynote Speaker
        </p>
        <h3 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">{person.name}</h3>
        {person.role ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{person.role}</p>
        ) : null}
      </div>
    </article>
  );
}

export function ArarasPeopleShowcase() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <div>
        <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          Keynote Speakers
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Três trajetórias de referência no palco principal, com visões que conectam negócios, inclusão e os desafios da nova era da IA.
        </p>
        <div className="mt-7 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {KEYNOTES.map((person, index) => (
            <Reveal key={person.name} delay={index * 80}>
              <KeynoteCard person={person} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Palestrantes e painelistas
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-5">
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
          Membros e participações
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 min-[440px]:grid-cols-3 sm:grid-cols-5 lg:grid-cols-6">
          {SUPPORT.map((person, index) => (
            <Reveal key={person.name} delay={(index % 4) * 50}>
              <article className="h-full rounded-lg border border-border/70 bg-surface/30 p-2 text-left transition-colors duration-200 hover:border-primary/40">
                <Portrait person={person} tone="quiet" />
                <div className="px-1 pb-2">
                  <h3 className="mt-3 text-sm font-semibold leading-snug">{person.name}</h3>
                  {person.role ? (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{person.role}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}