import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-aibrasil.png.asset.json";
import { useEdition } from "@/data/edition-context";
import { RsvpButton } from "@/components/site/rsvp-button";

export function SiteFooter({
  crossLink,
}: {
  crossLink?: { to: string; label: string };
}) {
  const edition = useEdition();
  const isPast = edition.status === "past";

  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div>
          <img
            src={logoAsset.url}
            alt="AIBrasil.AI"
            width={1120}
            height={210}
            loading="lazy"
            className="h-6 w-auto"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            {edition.name} · {edition.dateLabel}
            <br />
            {edition.venue} — {edition.city}
          </p>
          {crossLink ? (
            <Link
              to={crossLink.to}
              className="mt-4 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              {crossLink.label}
            </Link>
          ) : null}
        </div>
        <nav aria-label="Navegação do rodapé" className="grid gap-3 text-sm">
          <a href="#palestrantes" className="text-muted-foreground hover:text-foreground">Palestrantes</a>
          <a href="#programacao" className="text-muted-foreground hover:text-foreground">Programação</a>
          <a href="#local" className="text-muted-foreground hover:text-foreground">Local</a>
          <a href="#patrocinadores" className="text-muted-foreground hover:text-foreground">Marcas</a>
        </nav>
        <div className="flex flex-col items-start gap-4 md:items-end">
          {isPast ? (
            <RsvpButton
              variant="outline"
              label="Download de fotos e vídeos"
              href={edition.downloadUrl}
            />
          ) : (
            <RsvpButton variant="outline" />
          )}
          <a
            href={edition.rsvpUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Comunidade AI Brasil · fale com a organização
          </a>
        </div>
      </div>
    </footer>
  );
}
