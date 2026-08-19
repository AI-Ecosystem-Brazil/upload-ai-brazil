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
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
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
