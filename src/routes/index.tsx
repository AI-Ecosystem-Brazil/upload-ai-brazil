import { createFileRoute } from "@tanstack/react-router";
import { ARARAS_EDITION } from "@/data/edition-araras";
import { EditionProvider } from "@/data/edition-context";
import { Hero } from "@/components/site/hero";
import { Section, Reveal } from "@/components/site/section";
import { AgendaTimeline } from "@/components/site/agenda-timeline";
import { SpeakerGrid } from "@/components/site/speaker-grid";
import { Venue } from "@/components/site/venue";
import { CallForPapers } from "@/components/site/call-for-papers";
import { SponsorGrid } from "@/components/site/sponsor-grid";
import { RsvpButton } from "@/components/site/rsvp-button";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

const TITLE = "Upload AI Brasil Araras 2026 — 23 de setembro, FHO";
const DESCRIPTION =
  "Nova edição do Upload AI Brasil: 23 de setembro de 2026, das 08h30 às 17h30, na FHO em Araras/SP. Palco principal, dois laboratórios de IA na prática e RSVP aberto.";

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

const E = ARARAS_EDITION;

const HIGHLIGHTS = [
  { value: "1", label: "palco principal" },
  { value: "2", label: "laboratórios mão na massa" },
  { value: "9h", label: "de programação" },
  { value: "Presencial", label: "em Araras/SP" },
];

const PILLARS = [
  {
    title: "Ecossistema no interior",
    text: "A força da comunidade AI Brasil chega a Araras, reunindo empresas, universidade e profissionais da região.",
  },
  {
    title: "IA na prática",
    text: "Dois laboratórios simultâneos com sessões mão na massa, para sair do evento aplicando de verdade.",
  },
  {
    title: "Conexões e anúncios",
    text: "Networking com o ecossistema e novidades oficiais sobre o AI Brasil Experience.",
  },
];

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: E.name,
  description: DESCRIPTION,
  startDate: E.dateISO,
  endDate: E.endISO,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "FHO — Araras",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Araras",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  organizer: { "@type": "Organization", name: "AI Brasil", url: E.rsvpUrl },
  offers: {
    "@type": "Offer",
    url: E.rsvpUrl,
    availability: "https://schema.org/InStock",
  },
};

const CROSS_LINK = { to: "/sp-agosto-2026", label: "Ver edição anterior" };

function Index() {
  return (
    <EditionProvider edition={E}>
      <div className="min-h-screen bg-background pb-24 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />

        <Hero
          titleLead="Upload"
          titleHighlight="AI Brasil"
          titleTail="Araras 2026"
          intro={`${E.tagline}. Um dia inteiro em Araras com palco principal, laboratórios de IA na prática e o ecossistema reunido.`}
          crossLink={CROSS_LINK}
        />

        <Section
          id="sobre"
          eyebrow="O movimento"
          title="A comunidade AI Brasil chega a Araras"
          intro="Organizada por Jairo Segre, a nova edição do Upload AI Brasil reúne a regional de Araras e o ecossistema nacional em um dia de conteúdo e prática."
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
          title="Três trilhas simultâneas, das 08h30 às 17h30"
          intro="Palco principal no auditório e dois laboratórios de IA na prática. A grade está em construção: as atividades marcadas como “a definir” serão atualizadas conforme a curadoria confirmar."
        >
          <AgendaTimeline />
        </Section>

        <Section
          id="palestrantes"
          eyebrow="Quem sobe ao palco"
          title="Palestrantes confirmados"
          intro="Primeiros nomes confirmados da edição de Araras. Novos palestrantes e painelistas entram conforme a curadoria avança."
        >
          <SpeakerGrid />
        </Section>

        <Section
          id="local"
          eyebrow="Local"
          title="FHO — Araras/SP"
          intro="Evento presencial, com palco principal e dois espaços de laboratório."
        >
          <Venue />
        </Section>

        <Section
          id="call-for-papers"
          eyebrow="Call for Papers"
          title="Chamado para palestrantes e painelistas"
          intro="Formatos, requisitos e critérios de avaliação para participar da programação de Araras."
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

        <section className="relative overflow-hidden py-24">
          <div aria-hidden className="circuit-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Garanta seu lugar em <span className="text-brand-gradient">Araras</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                {E.dateLabel}, {E.timeLabel}, na {E.venue}.
              </p>
              <RsvpButton className="mt-8" />
            </Reveal>
          </div>
        </section>

        <SiteFooter crossLink={CROSS_LINK} />

        <WhatsAppFab />

        {/* CTA fixo no mobile */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <RsvpButton className="w-full" />
        </div>
      </div>
    </EditionProvider>
  );
}
