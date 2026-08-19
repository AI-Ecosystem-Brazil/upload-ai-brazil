import { Download } from "lucide-react";
import { useEdition } from "@/data/edition-context";
import { Reveal } from "@/components/site/section";
import { RsvpButton } from "@/components/site/rsvp-button";

export function LegacyDownloadCta() {
  const edition = useEdition();
  if (!edition.downloadUrl) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal>
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-primary/50 bg-surface/70 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <Download className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                Download de fotos e vídeos
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Todo o registro da edição realizada no InovaBRA Habitat está
                disponível para a comunidade AI Brasil.
              </p>
            </div>
          </div>
          <RsvpButton
            label="Acessar arquivos"
            href={edition.downloadUrl}
            className="shrink-0"
          />
        </div>
      </Reveal>
    </section>
  );
}
