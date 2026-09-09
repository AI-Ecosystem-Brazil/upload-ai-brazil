import type { Edition, Session, Track } from "@/data/types";
import { buildSpeakers } from "@/data/people";
import logoAbria from "@/assets/apoio-abria.png.asset.json";
import logoInstitucional from "@/assets/apoio-logo-branco.png.asset.json";
import logoAiSafety from "@/assets/apoio-ai-safety-brazil.png.asset.json";
import logoInstitutoMaturidade from "@/assets/apoio-instituto-maturidade-digital.png.asset.json";
import logoAbiacom from "@/assets/apoio-abiacom.png.asset.json";
import logoAnamid from "@/assets/apoio-anamid.svg.asset.json";
import logoPrimeInsurance from "@/assets/apoio-prime-insurance.jpeg.asset.json";
import logoAinov from "@/assets/apoio-ainov.jpeg.asset.json";
import logoDaMinhaVo from "@/assets/apoio-da-minha-vo.jpeg.asset.json";
import logoLoqqy from "@/assets/apoio-loqqy.jpeg.asset.json";
import seloAraras from "@/assets/selo-araras.jpg.asset.json";

const TBD = (time: string, period: Session["period"], kind: Session["kind"], title: string): Session => ({
  time,
  period,
  kind,
  title,
  tbd: true,
});

const PALCO: Session[] = [
  {
    time: "08h30",
    period: "manha",
    kind: "momento",
    title: "Credenciamento e boas-vindas",
    description:
      "Recepção dos participantes na FHO e abertura oficial da edição de Araras.",
  },
  {
    time: "09h00",
    period: "manha",
    kind: "momento",
    highlight: true,
    badge: "Abertura oficial",
    title: "Abertura · Upload AI Brasil Araras",
    description:
      "Abertura do evento com o organizador da edição de Araras e a liderança do ecossistema AI Brasil.",
    people: [
      {
        name: "Jairo Segre",
        role: "Organizador da edição de Araras",
        profileUrl: "https://ai.eco.br/members/35645767",
      },
      { name: "Juliano Kimura", role: "AI Brasil" },
    ],
  },
  {
    time: "09h30",
    period: "manha",
    kind: "keynote",
    title: "Keynote de abertura",
    description: "Palestrante e tema em definição pela curadoria.",
    tbd: true,
  },
  TBD("10h10", "manha", "palestra", "Palestra · a definir"),
  TBD("10h40", "manha", "painel", "Painel · a definir"),
  { time: "11h30", period: "manha", kind: "intervalo", title: "Intervalo" },
  TBD("11h45", "manha", "palestra", "Palestra · a definir"),
  { time: "12h15", period: "tarde", kind: "intervalo", title: "Almoço" },
  {
    time: "13h30",
    period: "tarde",
    kind: "palestra",
    title: "Palestra · a definir",
    tbd: true,
  },
  {
    time: "14h00",
    period: "tarde",
    kind: "painel",
    title: "Painel · ecossistema de IA no interior de São Paulo",
    description:
      "Tema confirmado, demais painelistas em definição pela curadoria.",
    people: [
      {
        name: "Tiene Colins",
        role: "Painelista",
      },
    ],
  },
  TBD("14h45", "tarde", "palestra", "Palestra · a definir"),
  TBD("15h15", "tarde", "painel", "Painel · a definir"),
  { time: "16h00", period: "tarde", kind: "intervalo", title: "Intervalo" },
  TBD("16h15", "tarde", "keynote", "Keynote de encerramento"),
  {
    time: "17h00",
    period: "tarde",
    kind: "momento",
    title: "Encerramento e networking",
    description:
      "Conexões finais entre a comunidade AI Brasil e o ecossistema local. Encerramento às 17h30.",
    people: [
      { name: "Juliano Kimura", role: "AI Brasil" },
      {
        name: "Jairo Segre",
        role: "Organizador da edição de Araras",
        profileUrl: "https://ai.eco.br/members/35645767",
      },
    ],
  },
];

const LAB_1: Session[] = [
  TBD("09h30", "manha", "handson", "Laboratório 1 · sessão a definir"),
  TBD("10h40", "manha", "handson", "Laboratório 1 · sessão a definir"),
  { time: "12h15", period: "tarde", kind: "intervalo", title: "Almoço" },
  TBD("13h30", "tarde", "handson", "Laboratório 1 · sessão a definir"),
  TBD("15h15", "tarde", "handson", "Laboratório 1 · sessão a definir"),
];

const LAB_2: Session[] = [
  TBD("09h30", "manha", "handson", "Laboratório 2 · sessão a definir"),
  TBD("10h40", "manha", "handson", "Laboratório 2 · sessão a definir"),
  { time: "12h15", period: "tarde", kind: "intervalo", title: "Almoço" },
  TBD("13h30", "tarde", "handson", "Laboratório 2 · sessão a definir"),
  TBD("15h15", "tarde", "handson", "Laboratório 2 · sessão a definir"),
];

const TRACKS: Track[] = [
  {
    id: "palco",
    name: "Palco principal",
    description:
      "Auditório da FHO: abertura, keynotes, palestras e painéis do dia inteiro.",
    sessions: PALCO,
  },
  {
    id: "lab-1",
    name: "Laboratório 1",
    description: "IA na prática: sessões mão na massa com vagas limitadas.",
    sessions: LAB_1,
  },
  {
    id: "lab-2",
    name: "Laboratório 2",
    description: "IA na prática: sessões mão na massa com vagas limitadas.",
    sessions: LAB_2,
  },
];

const ALL_SESSIONS = TRACKS.flatMap((t) => t.sessions);

export const ARARAS_EDITION: Edition = {
  slug: "araras-2026",
  path: "/",
  status: "upcoming",
  name: "Upload AI Brasil · Araras 2026",
  shortName: "Araras · Setembro 2026",
  tagline: "O esquenta do maior evento de IA da América Latina",
  dateISO: "2026-09-23T08:30:00-03:00",
  endISO: "2026-09-23T17:30:00-03:00",
  dateLabel: "23 de setembro de 2026 · quarta-feira",
  timeLabel: "08h30 às 17h30",
  venue: "FHO — Araras",
  city: "Araras, SP",
  format: "Presencial",
  organizer: "Jairo Segre",
  sealImage: seloAraras.url,
  whatsappUrl: "https://wa.me/5519981034103",
  rsvpUrl:
    "https://ai.eco.br/plans/1987849?bundle_token=a787af0f0803c189379298c03fe83acc&utm_source=manual",
  tracks: TRACKS,
  speakers: buildSpeakers(ALL_SESSIONS),
  supporters: [
    { name: "Abria", logo: logoAbria.url },
    { name: "AI Safety Brazil", logo: logoAiSafety.url },
    { name: "Abradi", logo: logoInstitucional.url },
    { name: "ABIACOM", logo: logoAbiacom.url },
    { name: "ANAMID", logo: logoAnamid.url },
    { name: "Prime Insurance", logo: logoPrimeInsurance.url, light: true },
    { name: "AINOV", logo: logoAinov.url, light: true },
    { name: "Da Minha Vó", logo: logoDaMinhaVo.url, light: true },
    { name: "Loqq'y", logo: logoLoqqy.url, light: true },
    {
      name: "Instituto da Maturidade Digital",
      logo: logoInstitutoMaturidade.url,
      light: true,
    },
  ],
  cfp: {
    requirement:
      "Para palestrar ou participar como painelista, todos devem estar cadastrados na plataforma e com o perfil preenchido em ai.eco.br.",
    formats: [
      "Palestra de 30 minutos",
      "Painel de 60 minutos com 4 participantes",
      "Oficinas práticas de 90 a 120 minutos",
    ],
  },
  sponsorTiers: [
    { tier: "Ouro", slots: 4 },
    { tier: "Prata", slots: 5 },
    { tier: "Apoio", slots: 6 },
  ],
  venueInfo: [
    { label: "Local", value: "FHO — Araras/SP" },
    { label: "Endereço", value: "Endereço completo a confirmar" },
    { label: "Credenciamento", value: "A partir das 08h30, na recepção" },
    { label: "Formato", value: "Presencial · 1 palco principal e 2 laboratórios de IA na prática" },
  ],
};
