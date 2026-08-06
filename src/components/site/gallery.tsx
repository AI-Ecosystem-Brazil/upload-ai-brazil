import roboAsset from "@/assets/galeria-robo.jpg.asset.json";
import inovabraAsset from "@/assets/galeria-inovabra.jpg.asset.json";
import painelAsset from "@/assets/galeria-painel.jpg.asset.json";
import { Reveal } from "@/components/site/section";

const PHOTOS = [
  {
    src: painelAsset.url,
    alt: "Painel IA no Marketing com convidados do ecossistema AI Brasil no InovaBRA",
    span: "sm:col-span-2",
  },
  {
    src: roboAsset.url,
    alt: "Robô humanoide vestindo a camiseta do AI Brasil Experience ao lado de organizador",
    span: "",
  },
  {
    src: inovabraAsset.url,
    alt: "Robô do AI Brasil Experience na recepção do InovaBRA Habitat",
    span: "",
  },
];

export function Gallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {PHOTOS.map((p, i) => (
        <Reveal key={p.src} delay={i * 80} className={p.span}>
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            width={1280}
            height={720}
            className="h-64 w-full rounded-2xl border border-border object-cover sm:h-72"
          />
        </Reveal>
      ))}
    </div>
  );
}
