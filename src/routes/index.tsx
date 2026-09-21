import { createFileRoute } from "@tanstack/react-router";
import { ARARAS_EDITION } from "@/data/edition-araras";
import { EditionProvider } from "@/data/edition-context";
import { Hero } from "@/components/site/hero";
import { Section, Reveal } from "@/components/site/section";
import { AgendaTimeline } from "@/components/site/agenda-timeline";
import { ArarasPeopleShowcase } from "@/components/site/araras-people-showcase";
import { Venue } from "@/components/site/venue";
import { CallForPapers } from "@/components/site/call-for-papers";
import { SponsorGrid } from "@/components/site/sponsor-grid";
import { RsvpButton } from "@/components/site/rsvp-button";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { BackToTop } from "@/components/site/back-to-top";

const TITLE = "Upload AI Brasil Araras 2026 — 23 de setembro, FHO";
const DESCRIPTION =
  "Nova edição do Upload AI Brasil: 23 de setembro de 2026, das 08h30 às 18h00, na FHO em Araras/SP. Palco principal, dois laboratórios de IA na prática e RSVP aberto.";

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
      streetAddress: "Av. Dr. Maximiliano Baruto, 500 - Jardim Universitario",
      postalCode: "13607-339",
      addressLocality: "Araras",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  },
  organizer: [
    { "@type": "Person", name: "Jairo Segre" },
    { "@type": "Person", name: "Elisangela Rosa" },
  ],
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
          titleLead="O maior movimento de"
          titleHighlight="Inteligência Artificial"
          titleTail="do Brasil chegou em Araras!"
          intro="Araras entra no circuito nacional da inovação. Um dia inteiro para conectar talentos, empresas e a região às vozes que estão construindo o futuro da Inteligência Artificial no Brasil."
          crossLink={CROSS_LINK}
        />

        <section aria-labelledby="araras-impact-title" className="border-y border-gold/20 bg-impact-band">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:px-8 md:grid-cols-[0.72fr_1.28fr] md:items-center md:py-14">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Araras no centro da inovação
            </p>
            <div>
              <h2 id="araras-impact-title" className="text-2xl font-bold leading-tight sm:text-3xl">
                Um encontro nacional com impacto direto na cidade e em toda a região
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                Na FHO, lideranças, empreendedores e especialistas se encontram para transformar conhecimento em oportunidades, fortalecer negócios locais e aproximar Araras das discussões que definem o futuro da IA no Brasil.
              </p>
            </div>
          </div>
        </section>

          <Section
          id="palestrantes"
          eyebrow="Encontros que transformam"
          title="As vozes que chegam a Araras"
          intro="Vozes reconhecidas nacionalmente e lideranças da região reunidas em Araras para compartilhar conhecimento aplicado, abrir novas oportunidades e fortalecer o ecossistema local."
            className="bg-surface/20"
          >
          <ArarasPeopleShowcase />
        </Section>

          <Section
          id="programacao"
          eyebrow="Programação"
          title="Três trilhas simultâneas, das 08h30 às 18h00"
          intro="Palco principal no auditório e dois laboratórios de IA na prática. A grade está em construção: as atividades marcadas como “a definir” serão atualizadas conforme a curadoria confirmar."
            className="bg-surface/20"
          >
          <AgendaTimeline />
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
          intro="Sua experiência pode abrir caminhos, provocar novas ideias e transformar a maneira como outras pessoas enxergam a Inteligência Artificial."
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
                Araras recebe o futuro. <span className="text-brand-gradient">Faça parte deste encontro.</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Um movimento nacional de Inteligência Artificial, conectado ao talento e ao potencial da nossa região. {E.dateLabel}, {E.timeLabel}, na {E.venue}.
              </p>
              <RsvpButton className="mt-8" />
            </Reveal>
          </div>
        </section>

        <SiteFooter crossLink={CROSS_LINK} />

        <WhatsAppFab />
        <BackToTop />

        {/* CTA fixo no mobile */}
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
          <RsvpButton className="w-full" />
        </div>
      </div>
    </EditionProvider>
  );
}
