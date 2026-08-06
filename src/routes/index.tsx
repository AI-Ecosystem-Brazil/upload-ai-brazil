import { createFileRoute } from "@tanstack/react-router";
import { EVENT } from "@/data/event";
import { Hero } from "@/components/site/hero";
import { Section, Reveal } from "@/components/site/section";
import { AgendaTimeline } from "@/components/site/agenda-timeline";
import { SpeakerGrid } from "@/components/site/speaker-grid";
import { Venue } from "@/components/site/venue";
import { CallForPapers } from "@/components/site/call-for-papers";
import { SponsorGrid } from "@/components/site/sponsor-grid";
import { Gallery } from "@/components/site/gallery";
import { RsvpButton } from "@/components/site/rsvp-button";
import { SiteFooter } from "@/components/site/site-footer";

const TITLE = "Upload AI Brasil Experience 2026 — 14 de agosto, InovaBRA";
const DESCRIPTION =
  "O esquenta do maior evento de IA da América Latina. 14 de agosto de 2026, das 9h às 21h, no InovaBRA Habitat em São Paulo. Programação, palestrantes e RSVP.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  { value: "300", label: "vagas presenciais" },
  { value: "12h", label: "de programação" },
  { value: "2", label: "auditórios simultâneos" },
  { value: "Híbrido", label: "presencial e online" },
];

const PILLARS = [
  {
    title: "Anúncios em primeira mão",
    text: "Veja antes de todo mundo os anúncios oficiais da AI Brasil sobre a próxima edição do AI Brasil Experience.",
  },
  {
    title: "Grandes referências",
    text: "Lideranças, pesquisadores e operadores que estão colocando IA em produção nas maiores empresas do país.",
  },
  {
    title: "Ecossistema e networking",
    text: "Um dia para reunir a comunidade e o maior ecossistema de inteligência artificial do Brasil.",
  },
];

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT.name,
  description: DESCRIPTION,
  startDate: EVENT.dateISO,
  endDate: EVENT.endISO,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "InovaBRA Habitat",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Angélica, 2529",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  organizer: { "@type": "Organization", name: "AI Brasil", url: EVENT.rsvpUrl },
  offers: {
    "@type": "Offer",
    url: EVENT.rsvpUrl,
    availability: "https://schema.org/InStock",
  },
};

function Index() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <Hero />

      <Section
        id="sobre"
        eyebrow="O movimento"
        title="O pré-evento do maior encontro de IA da América Latina"
        intro="Um movimento de transformação da vida das pessoas através da inteligência artificial. Prepare sua participação e entenda como se conectar com o AI Brasil Experience."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.label} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-background/40 p-6">
                <div className="font-display text-3xl font-bold text-primary">
                  {h.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {h.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="programacao"
        eyebrow="Programação"
        title="Das 08h30 às 21h, sem intervalo de conteúdo"
        intro="Palestras, painéis e keynotes ao longo do dia inteiro. Itens marcados como “a confirmar” ainda estão em fechamento com os participantes."
      >
        <AgendaTimeline />
      </Section>

      <Section
        id="palestrantes"
        eyebrow="Quem sobe ao palco"
        title="Palestrantes e painelistas"
        intro="Nomes já confirmados na curadoria. A lista segue crescendo conforme o Call for Papers avança."
      >
        <SpeakerGrid />
      </Section>

      <Section
        id="local"
        eyebrow="Local"
        title="InovaBRA Habitat, 10º andar"
        intro="Evento híbrido, no coração do ecossistema de inovação de São Paulo."
      >
        <Venue />
      </Section>

      <Section
        id="call-for-papers"
        eyebrow="Call for Papers"
        title="Chamado para palestrantes e painelistas"
        intro="Formatos, requisitos e critérios de avaliação para participar da programação."
      >
        <CallForPapers />
      </Section>

      <Section
        id="patrocinadores"
        eyebrow="Marcas"
        title="Patrocinadores e apoiadores"
        intro="Cotas ouro, prata e apoio para marcas que querem estar no centro da conversa sobre IA no Brasil."
      >
        <SponsorGrid />
      </Section>

      <Section
        id="galeria"
        eyebrow="Bastidores"
        title="O ecossistema em movimento"
        intro="Registros das edições e encontros anteriores da comunidade AI Brasil."
      >
        <Gallery />
      </Section>

      <section className="relative overflow-hidden py-24">
        <div aria-hidden className="circuit-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Garanta seu lugar no <span className="text-brand-gradient">Upload</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              São {EVENT.capacity} no presencial. {EVENT.dateLabel}, {EVENT.timeLabel}.
            </p>
            <RsvpButton className="mt-8" />
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      {/* CTA fixo no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <RsvpButton className="w-full" />
      </div>
    </div>
  );
}
