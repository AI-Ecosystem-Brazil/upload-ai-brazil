import logoAsset from "@/assets/logo-aibrasil.png.asset.json";
import seloAsset from "@/assets/selo-aibrasil.png.asset.json";
import { EVENT } from "@/data/event";
import { Countdown } from "@/components/site/countdown";
import { RsvpButton } from "@/components/site/rsvp-button";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div aria-hidden className="circuit-grid absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14">
        <nav className="flex items-center justify-between gap-4">
          <img
            src={logoAsset.url}
            alt="AIBrasil.AI"
            width={1120}
            height={210}
            className="h-7 w-auto sm:h-8"
          />
          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#programacao"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Programação
            </a>
            <a
              href="#palestrantes"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Palestrantes
            </a>
            <a
              href="#local"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Local
            </a>
            <RsvpButton className="px-5 py-2.5 text-xs" />
          </div>
        </nav>

        <div className="mt-16 grid items-center gap-12 sm:mt-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {EVENT.dateLabel}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Upload{" "}
              <span className="text-brand-gradient">AI Brasil</span> Experience 2026
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {EVENT.tagline}. Um dia inteiro com as grandes referências, o
              ecossistema de IA e os anúncios oficiais em primeira mão.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Horário</dt>
                <dd className="font-display font-semibold">{EVENT.timeLabel}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Local</dt>
                <dd className="font-display font-semibold">{EVENT.venue}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Formato</dt>
                <dd className="font-display font-semibold">{EVENT.format}</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <RsvpButton />
              <Countdown />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <img
              src={seloAsset.url}
              alt="Selo AI Brasil: árvore de circuitos com abelha, símbolo do ecossistema"
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
