import { Link } from "@tanstack/react-router";
import seloAsset from "@/assets/selo-aibrasil.png.asset.json";
import { useEdition } from "@/data/edition-context";
import { Countdown } from "@/components/site/countdown";
import { RsvpButton } from "@/components/site/rsvp-button";
import { SiteNavigation } from "@/components/site/site-navigation";

export function Hero({
  titleLead,
  titleHighlight,
  titleTail,
  intro,
  crossLink,
}: {
  titleLead: string;
  titleHighlight: string;
  titleTail: string;
  intro: string;
  crossLink?: { to: string; label: string };
}) {
  const edition = useEdition();
  const isPast = edition.status === "past";

  return (
    <header className="relative overflow-hidden">
      <SiteNavigation crossLink={crossLink} />
      <div aria-hidden className="circuit-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                {edition.dateLabel}
              </p>
              {isPast ? (
                <span className="rounded-full border border-border px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Edição realizada
                </span>
              ) : null}
              <img
                src={edition.sealImage ?? seloAsset.url}
                alt=""
                aria-hidden="true"
                width={1000}
                height={1000}
                className="h-20 w-20 shrink-0 rounded-full border border-primary/20 shadow-lime-glow lg:hidden"
              />
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
              {titleLead} <span className="text-brand-gradient">{titleHighlight}</span>{" "}
              {titleTail}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {intro}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-y border-border/70 py-5 text-sm sm:flex sm:flex-wrap sm:gap-x-8">
              <div>
                <dt className="text-muted-foreground">Horário</dt>
                <dd className="font-display font-semibold">{edition.timeLabel}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Local</dt>
                <dd className="font-display font-semibold">{edition.venue}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Formato</dt>
                <dd className="font-display font-semibold">{edition.format}</dd>
              </div>
              {edition.organizer ? (
                <div>
                  <dt className="text-muted-foreground">Organização</dt>
                  <dd className="font-display font-semibold">{edition.organizer}</dd>
                </div>
              ) : null}
            </dl>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              {isPast ? (
                <RsvpButton
                  label="Download de fotos e vídeos"
                  href={edition.downloadUrl}
                />
              ) : (
                <>
                  <RsvpButton />
                  <Countdown />
                </>
              )}
            </div>

            {crossLink ? (
              <Link
                to={crossLink.to}
                className="mt-8 inline-flex text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline md:hidden"
              >
                {crossLink.label}
              </Link>
            ) : null}
          </div>

          <div className="relative mx-auto hidden w-full max-w-sm lg:block lg:max-w-none">
            <img
              src={edition.sealImage ?? seloAsset.url}
              alt={`Selo do ${edition.name}`}
              width={1000}
              height={1000}
              className="w-full rounded-full border border-primary/20 shadow-lime-glow"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
