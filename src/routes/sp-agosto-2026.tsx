import { createFileRoute } from "@tanstack/react-router";
import { SP_EDITION } from "@/data/edition-sp-2026-08";
import { EditionProvider } from "@/data/edition-context";
import { Hero } from "@/components/site/hero";
import { Section, Reveal } from "@/components/site/section";
import { AgendaTimeline } from "@/components/site/agenda-timeline";
import { SpeakerGrid } from "@/components/site/speaker-grid";
import { Venue } from "@/components/site/venue";
import { SponsorGrid } from "@/components/site/sponsor-grid";
import { Gallery } from "@/components/site/gallery";
import { LegacyDownloadCta } from "@/components/site/legacy-download-cta";
import { RsvpButton } from "@/components/site/rsvp-button";
import { SiteFooter } from "@/components/site/site-footer";

const TITLE = "Upload AI Brasil Experience 2026 — edição São Paulo (realizada)";
const DESCRIPTION =
  "Registro da edição realizada em 14 de agosto de 2026 no InovaBRA Habitat, São Paulo: programação completa, palestrantes e download das fotos e vídeos do evento.";

export const Route = createFileRoute("/sp-agosto-2026")({
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
  component: LegacyEdition,
});

const E = SP_EDITION;

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: E.name,
  description: DESCRIPTION,
  startDate: E.dateISO,
  endDate: E.endISO,
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
  organizer: { "@type": "Organization", name: "AI Brasil", url: E.rsvpUrl },
};

const CROSS_LINK = { to: "/", label: "Ver próxima edição · Araras 23/09" };

function LegacyEdition() {
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
          titleTail="Experience 2026"
          intro="Edição realizada no InovaBRA Habitat, em São Paulo. Reveja a programação completa e baixe as fotos e vídeos do evento."
          crossLink={CROSS_LINK}
        />

        <LegacyDownloadCta />

        <Section
          id="programacao"
          eyebrow="Programação realizada"
          title="Das 08h30 às 21h, sem intervalo de conteúdo"
          intro="A grade completa da edição de São Paulo, com palestras, painéis e keynotes do dia inteiro."
          className="bg-surface/20"
        >
          <AgendaTimeline />
        </Section>

        <Section
          id="palestrantes"
          eyebrow="Quem subiu ao palco"
          title="Palestrantes e painelistas"
          intro="Todos os nomes que participaram da programação oficial da edição de São Paulo."
          className="bg-surface/20"
        >
          <SpeakerGrid />
        </Section>

        <Section
          id="local"
          eyebrow="Local"
          title="InovaBRA Habitat, 10º andar"
          intro="Onde a edição de agosto aconteceu, no coração do ecossistema de inovação de São Paulo."
        >
          <Venue />
        </Section>

        <Section
          id="patrocinadores"
          eyebrow="Marcas"
          title="Apoio institucional da edição"
          intro="As instituições que apoiaram a edição de São Paulo."
        >
          <SponsorGrid />
        </Section>

        <Section
          id="galeria"
          eyebrow="Bastidores"
          title="O ecossistema em movimento"
          intro="Registros da edição e dos encontros da comunidade AI Brasil."
        >
          <Gallery />
        </Section>

        <section className="relative overflow-hidden py-24">
          <div aria-hidden className="circuit-grid absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Leve o registro do <span className="text-brand-gradient">Upload</span> com você
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Fotos e vídeos da edição de 14 de agosto disponíveis para a comunidade.
              </p>
              <RsvpButton
                className="mt-8"
                label="Download de fotos e vídeos"
                href={E.downloadUrl}
              />
            </Reveal>
          </div>
        </section>

        <SiteFooter crossLink={CROSS_LINK} />

        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
          <RsvpButton
            className="w-full"
            label="Download de fotos e vídeos"
            href={E.downloadUrl}
          />
        </div>
      </div>
    </EditionProvider>
  );
}
