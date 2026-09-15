import alineFoto from "@/assets/aline-bocardo.png.asset.json";
import alessandroFoto from "@/assets/alessandro-milagres.jpg.asset.json";
import roanFoto from "@/assets/roan.png.asset.json";
import adrianoFoto from "@/assets/adriano-rufino.png.asset.json";
import cabeloFoto from "@/assets/alessandro-cabelo.png.asset.json";
import andreFoto from "@/assets/andre-almeida.png.asset.json";
import brunoFoto from "@/assets/bruno-mello-2.png.asset.json";
import carolFoto from "@/assets/carol-luz.png.asset.json";
import christianiniFoto from "@/assets/cristiano-christianini.png.asset.json";
import linuxmenFoto from "@/assets/cristiano-linuxmen.png.asset.json";

import eduardoNevesFoto from "@/assets/eduardo-neves.png.asset.json";
import eduardoPiedadeFoto from "@/assets/eduardo-piedade.png.asset.json";
import elaineFoto from "@/assets/elaine-coimbra.png.asset.json";
import evaFoto from "@/assets/eva-lazarini.png.asset.json";
import gabrielFoto from "@/assets/gabriel-virissimo.png.asset.json";
import gersonFoto from "@/assets/gerson-viergutz.png.asset.json";
import jairoFoto2 from "@/assets/jairo-segre-2.png.asset.json";
import julianaFoto from "@/assets/juliana-lopes.png.asset.json";
import julianoFoto from "@/assets/juliano-kimura.png.asset.json";
import leandroFoto from "@/assets/leandro-mastellini.png.asset.json";
import leilaFoto from "@/assets/leila-navarro.png.asset.json";
import leonardoFoto from "@/assets/leonardo-santos.png.asset.json";

import luisFoto from "@/assets/luis-rodeguero.png.asset.json";
import mauricioFoto from "@/assets/mauricio-conte.png.asset.json";
import michaelFoto from "@/assets/michael-silva.png.asset.json";
import muzyFoto from "@/assets/muzy-jorge.png.asset.json";
import nelsonFoto from "@/assets/nelson-borges.png.asset.json";
import rodrigoNevesFoto from "@/assets/rodrigo-neves.png.asset.json";
import righettiFoto from "@/assets/rodrigo-righetti.png.asset.json";
import vagnerFoto from "@/assets/vagner-campos.png.asset.json";
import danielFoto2 from "@/assets/daniel-ramos-2.avif.asset.json";
import rafaelSoaresFoto from "@/assets/rafael-soares.png.asset.json";
import marcosOliveiraFoto from "@/assets/marcos-oliveira.png.asset.json";
import tibiricaFoto from "@/assets/luiz-tibirica.avif.asset.json";
import tieneFoto from "@/assets/tiene-colins.avif.asset.json";

import pedroFoto from "@/assets/pedro-chiamulera.jpg.asset.json";
import anaBarrosFoto from "@/assets/ana-barros.jpeg.asset.json";
import elenFoto from "@/assets/elen-melo.png.asset.json";
import marcoRiveirosFeaturedFoto from "@/assets/marco-riveiros-featured.jpg.asset.json";
import anaGarmsFoto from "@/assets/ana-garms.jpeg.asset.json";
import chlebaFoto2 from "@/assets/marcio-chleba-2.png.asset.json";
import tiagoZoukFoto from "@/assets/tiago-zouk.png.asset.json";
import elisangelaFoto from "@/assets/elisangela-rosa.png.asset.json";
import gutaFoto from "@/assets/guta-raeder.png.asset.json";
import andreMagnoFoto from "@/assets/andre-magno.jpeg.asset.json";
import pietroFoto from "@/assets/pietro-mauro.jpeg.asset.json";
import sebraeLogo from "@/assets/apoio-sebrae.jpeg.asset.json";
import seloAraras from "@/assets/selo-araras.jpg.asset.json";
import valdirPandolfiFoto from "@/assets/valdir-pandolfi.jpeg.asset.json";

import type { Session, Speaker } from "@/data/types";

export const PHOTOS: Record<string, string> = {
  "Aline Bocardo": alineFoto.url,
  "Ana Barros": anaBarrosFoto.url,
  "Ana Garms": anaGarmsFoto.url,
  "Alessandro Milagres": alessandroFoto.url,
  "Jairo Segre": jairoFoto2.url,
  "Roan Santos": roanFoto.url,
  "Adriano Rufino": adrianoFoto.url,
  "Alessandro Cabelo": cabeloFoto.url,
  "André Almeida": andreFoto.url,
  "Bruno Mello": brunoFoto.url,
  "Carolina da Luz": carolFoto.url,
  "Cristiano Christianini": christianiniFoto.url,
  Linuxmen: linuxmenFoto.url,
  "Daniel Ramos": danielFoto2.url,
  "Eduardo Neves (Eth0)": eduardoNevesFoto.url,
  "Eduardo Piedade": eduardoPiedadeFoto.url,
  "Elaine Coimbra": elaineFoto.url,
  "Eva Lazarini": evaFoto.url,
  "Elen Melo": elenFoto.url,
  "Gabriel Virissimo": gabrielFoto.url,
  "Gerson Viergutz": gersonFoto.url,
  "Juliana Lopes": julianaFoto.url,
  "Juliano Kimura": julianoFoto.url,
  "Leandro Mastellini": leandroFoto.url,
  "Leila Navarro": leilaFoto.url,
  "Leonardo Santos": leonardoFoto.url,
  
  "Luis Rodeguero": luisFoto.url,
  "Maurício Conte": mauricioFoto.url,
  "Michael Silva": michaelFoto.url,
  "Muzy Jorge": muzyFoto.url,
  "Nelson Borges": nelsonFoto.url,
  "Rodrigo Neves": rodrigoNevesFoto.url,
  "Rodrigo Righetti": righettiFoto.url,
  "Vagner Campos": vagnerFoto.url,
  "Rafael Soares": rafaelSoaresFoto.url,
  "Marcos Oliveira": marcosOliveiraFoto.url,
  "Marco Riveiros": marcoRiveirosFeaturedFoto.url,
  "Pedro Chiamulera": pedroFoto.url,
  "Luiz Tibiriçá": tibiricaFoto.url,
  "Tiene Colins": tieneFoto.url,
  "Tiene Collins": tieneFoto.url,
  "Marcio Chleba": chlebaFoto2.url,
  SEBRAE: sebraeLogo.url,
  "Tiago Zouk": tiagoZoukFoto.url,
  "Elisangela Rosa": elisangelaFoto.url,
  "Guta Raeder": gutaFoto.url,
  "André Magno": andreMagnoFoto.url,
  "Pietro Mauro": pietroFoto.url,
  "Comunidade AI Brasil": seloAraras.url,
  "Valdir Pandolfi": valdirPandolfiFoto.url,
};

export const KEYNOTE_SPEAKERS = new Set([
  "Pedro Chiamulera",
  "Marco Riveiros",
  "Aline Bocardo",
]);

export const RECOGNIZED_PEOPLE = new Set([
  "André Almeida",
  "Elen Melo",
  "Ana Barros",
  "Jairo Segre",
  "Maurício Conte",
  ...KEYNOTE_SPEAKERS,
]);

export function isKeynoteSpeaker(name: string): boolean {
  return KEYNOTE_SPEAKERS.has(name);
}

export function isRecognizedPerson(name: string): boolean {
  return RECOGNIZED_PEOPLE.has(name);
}


export function photoOf(name: string): string | undefined {
  return PHOTOS[name];
}

export function initialsOf(name: string): string {
  return name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function buildSpeakers(sessions: Session[]): Speaker[] {
  const map = new Map<string, Speaker>();

  for (const session of sessions) {
    if (!session.people) continue;
    const featured = session.kind === "keynote";

    for (const person of session.people) {
      const existing = map.get(person.name);
      if (existing) {
        if (!existing.profileUrl && person.profileUrl) {
          existing.profileUrl = person.profileUrl;
        }
        if (featured && !existing.featured) {
          existing.featured = true;
          existing.role = person.role;
          existing.activity = session.title;
        }
        continue;
      }

      const speaker: Speaker = {
        name: person.name,
        role: person.org ? `${person.role} · ${person.org}` : person.role,
        activity: session.title,
        featured,
      };
      if (person.profileUrl) speaker.profileUrl = person.profileUrl;
      const photo = PHOTOS[person.name];
      if (photo) speaker.photo = photo;
      map.set(person.name, speaker);
    }
  }

  const list = [...map.values()];
  return [...list.filter((s) => s.featured), ...list.filter((s) => !s.featured)];
}
