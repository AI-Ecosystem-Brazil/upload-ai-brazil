import logoAsset from "@/assets/logo-aibrasil.png.asset.json";
import { EVENT } from "@/data/event";
import { RsvpButton } from "@/components/site/rsvp-button";

export function SiteFooter() {
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
            {EVENT.name} · {EVENT.dateLabel}
            <br />
            {EVENT.venue} — {EVENT.city}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <RsvpButton variant="outline" />
          <a
            href={EVENT.rsvpUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Comunidade AI Brasil em ai.eco.br
          </a>
        </div>
      </div>
    </footer>
  );
}
