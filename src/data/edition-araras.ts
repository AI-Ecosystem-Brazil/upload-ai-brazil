import type { Edition, Session, Track } from "@/data/types";
import { buildSpeakers } from "@/data/people";
import logoAbria from "@/assets/apoio-abria.png.asset.json";
import logoInstitucional from "@/assets/apoio-logo-branco.png.asset.json";
import logoAiSafety from "@/assets/apoio-ai-safety-brazil.png.asset.json";

import logoAbiacom from "@/assets/apoio-abiacom.png.asset.json";
import logoAnamid from "@/assets/apoio-anamid.svg.asset.json";
import logoPrimeInsurance from "@/assets/apoio-prime-insurance-white.png.asset.json";
import logoAinov from "@/assets/apoio-ainov-dark.jpeg.asset.json";
import logoDaMinhaVo from "@/assets/apoio-da-minha-vo-2.png.asset.json";
import logoAmigu from "@/assets/apoio-instituto-amigu.jpeg.asset.json";
import logoSebrae from "@/assets/apoio-sebrae.jpeg.asset.json";
import logoLoqqy from "@/assets/apoio-loqqy-white.png.asset.json";
import logoFho from "@/assets/apoio-fho.png.asset.json";
import logoCompsoft from "@/assets/apoio-compsoft.jpg.asset.json";
import logoI2a2 from "@/assets/apoio-i2a2-brasil.png.asset.json";
import logoTimachigu from "@/assets/apoio-timachigu.png.asset.json";

import logoWar from "@/assets/patrocinador-war.png.asset.json";
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
    time: "09h00",
    period: "manha",
    kind: "keynote",
    highlight: true,
    badge: "Abertura + Keynote",
    title: "Abertura e palestra · Como construí uma empresa de R$ 2,5 bilhões",
    people: [
      {
        name: "Jairo Segre",
        role: "Abertura",
        profileUrl: "https://ai.eco.br/members/35645767",
      },
      { name: "Pedro Chiamulera", role: "Keynote Speaker" },
    ],
  },
  {
    time: "09h30",
    period: "manha",
    kind: "palestra",
    title: "IA para empreendedores",
    people: [
      { name: "Tiene Collins", role: "Palestrante" },
      {
        name: "André Almeida",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/38743151",
      },
    ],
  },
  {
    time: "10h00",
    period: "manha",
    kind: "painel",
    title: "Uso inteligente de dados",
    people: [
      { name: "Valdir Pandolfe", role: "Painelista confirmado" },
      { name: "José Azarite", role: "Participação a confirmar" },
      {
        name: "Carolina da Luz",
        role: "Mediadora",
        profileUrl: "https://ai.eco.br/members/40198222",
      },
    ],
  },
  {
    time: "10h30",
    period: "manha",
    kind: "palestra",
    title: "Uso responsável de IA",
    people: [{ name: "Ana Garms", role: "Palestrante" }],
  },
  {
    time: "11h00",
    period: "manha",
    kind: "painel",
    title: "Cybersegurança aplicada à IA",
    people: [
      {
        name: "André Almeida",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/38743151",
      },
      {
        name: "Maurício Conte",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/39466547",
      },
    ],
  },
  {
    time: "11h30",
    period: "manha",
    kind: "palestra",
    title: "Marketing para PMEs",
    people: [
      {
        name: "Rodrigo Righetti",
        role: "Keynote Speaker",
        profileUrl: "https://ai.eco.br/members/38382453",
      },
    ],
  },
  { time: "12h00", period: "tarde", kind: "intervalo", title: "Almoço" },
  { time: "12h30", period: "tarde", kind: "intervalo", title: "Almoço" },
  {
    time: "13h00",
    period: "tarde",
    kind: "palestra",
    title: "Aprenda mais rápido que a Inteligência Artificial",
    people: [
      {
        name: "Juliano Kimura",
        role: "Palestrante · Head de Ecossistema da AI Brasil",
        profileUrl: "https://ai.eco.br/members/21874664",
      },
    ],
  },
  {
    time: "13h30",
    period: "tarde",
    kind: "keynote",
    badge: "Keynote Speaker",
    title: "Inteligência Artificial deve ser um privilégio de todos, nascida para exponenciar",
    people: [
      {
        name: "Marco Riveiros",
        role: "Keynote Speaker",
        profileUrl: "https://ai.eco.br/members/40122900",
      },
    ],
  },
  {
    time: "14h00",
    period: "tarde",
    kind: "palestra",
    badge: "SEBRAE",
    title: "IA na gestão do pequeno negócio: finanças, processos e por onde começar",
    people: [{ name: "SEBRAE", role: "Palestrante a confirmar" }],
  },
  {
    time: "14h30",
    period: "tarde",
    kind: "painel",
    title: "IA e marca pessoal · Engajamento de colaboradores",
    people: [
      { name: "Elisangela Rosa", role: "Painelista" },
      { name: "Deize Andrade", role: "Painelista" },
    ],
  },
  {
    time: "15h00",
    period: "tarde",
    kind: "painel",
    title: "Mitos e verdades sobre IA · Perguntas e respostas",
    people: [
      {
        name: "Gabriel Virissimo",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/39700330",
      },
      { name: "Maurício Conte", role: "Painelista" },
      {
        name: "Carolina da Luz",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/40198222",
      },
      {
        name: "Cilene Danta",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/38862633",
      },
    ],
  },
  {
    time: "15h30",
    period: "tarde",
    kind: "palestra",
    title: "Seu melhor vendedor pode ser uma IA",
    people: [{ name: "Tiago Zouk", role: "Palestrante" }],
  },
  {
    time: "16h00",
    period: "tarde",
    kind: "palestra",
    title: "A Competição da Inteligência · O modelo mental para transformar a IA em vantagem competitiva",
    people: [{ name: "Marcio Chleba", role: "Palestrante" }],
  },
  {
    time: "16h30",
    period: "tarde",
    kind: "palestra",
    title: "O Novo Nós · A Coevolução Humano e Agentes Artificiais",
    people: [{ name: "André Magno", role: "Palestrante" }],
  },
  {
    time: "17h00",
    period: "tarde",
    kind: "keynote",
    badge: "Keynote Speaker",
    title: "O maior desafio da era da IA",
    people: [
      {
        name: "Aline Bocardo",
        role: "Keynote Speaker",
        profileUrl: "https://ai.eco.br/members/40311374",
      },
    ],
  },
  {
    time: "17h30",
    period: "tarde",
    kind: "momento",
    badge: "Encerramento",
    title: "Ecossistema e IA",
    people: [
      { name: "Guta Raeder", role: "Mestre de Cerimônia" },
      { name: "Bruno Mello", role: "Palestrante" },
    ],
  },
];

const LAB_1: Session[] = [
  TBD("09h00", "manha", "momento", "Abertura · a definir"),
  TBD("09h30", "manha", "handson", "Laboratório 1 · atividade a definir"),
  TBD("10h00", "manha", "handson", "Laboratório 1 · atividade a definir"),
  TBD("10h30", "manha", "handson", "Laboratório 1 · atividade a definir"),
  TBD("11h00", "manha", "handson", "Laboratório 1 · atividade a definir"),
  TBD("11h30", "manha", "handson", "Laboratório 1 · atividade a definir"),
  { time: "12h00", period: "tarde", kind: "intervalo", title: "Almoço" },
  {
    time: "13h30",
    period: "tarde",
    kind: "handson",
    badge: "Workshop · 90 minutos",
    title: "Palestra e workshop prático",
    people: [{ name: "Pietro Mauro", role: "Facilitador" }],
  },
  {
    time: "15h00",
    period: "tarde",
    kind: "handson",
    title: "Atividade prática · tema a definir",
    people: [{ name: "Pietro Mauro", role: "Facilitador" }],
  },
  {
    time: "15h30",
    period: "tarde",
    kind: "handson",
    title: "Laboratório aberto",
    people: [{ name: "Participante a confirmar", role: "Facilitador" }],
  },
];

const LAB_2: Session[] = [
  {
    time: "10h00",
    period: "manha",
    kind: "handson",
    title: "De volta ao jogo: 50+ Inteligência Artificial na prática",
    people: [
      {
        name: "Marco Riveiros",
        role: "Facilitador",
        profileUrl: "https://ai.eco.br/members/40122900",
      },
    ],
  },
  { time: "12h00", period: "tarde", kind: "intervalo", title: "Almoço" },
  {
    time: "14h30",
    period: "tarde",
    kind: "handson",
    title: "101%: Criando uma empresa do zero com IA na prática",
    people: [
      {
        name: "Juliano Kimura",
        role: "Facilitador",
        profileUrl: "https://ai.eco.br/members/21874664",
      },
    ],
  },
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
  organizer: "Jairo Segre, Elisangela Rosa",
  sealImage: seloAraras.url,
  whatsappUrl: "https://wa.me/5519981034103",
  rsvpUrl: undefined,
  tracks: TRACKS,
  speakers: buildSpeakers(ALL_SESSIONS),
  supporters: [
    { name: "Abria", logo: logoAbria.url },
    { name: "AI Safety Brazil", logo: logoAiSafety.url },
    { name: "Abradi", logo: logoInstitucional.url },
    { name: "ABIACOM", logo: logoAbiacom.url },
    { name: "ANAMID", logo: logoAnamid.url },
    { name: "FHO", logo: logoFho.url, light: true },
    { name: "Compsoft", logo: logoCompsoft.url, light: true },
    { name: "I2A2 Brasil", logo: logoI2a2.url, light: true },
    { name: "SEBRAE", logo: logoSebrae.url, light: true },
  ],
  cfp: {
    requirement:
      "Compartilhe o conhecimento que está transformando a sua atuação e ajude a construir novas possibilidades para pessoas, negócios e para o futuro da Inteligência Artificial no Brasil.",
    formats: [],
  },
  sponsorTiers: [
    { tier: "Ouro", slots: 4 },
    {
      tier: "Prata",
      slots: 5,
      sponsors: [{ name: "WAR", logo: logoWar.url, light: true }],
    },
    {
      tier: "Apoio",
      slots: 6,
      sponsors: [
        { name: "AINOV", logo: logoAinov.url },
        { name: "Prime Insurance", logo: logoPrimeInsurance.url },
        { name: "Loqq'y", logo: logoLoqqy.url },
        { name: "Da Minha Vó", logo: logoDaMinhaVo.url, light: true, large: true },
        { name: "Instituto Amigu", logo: logoAmigu.url },
        { name: "Timachigu", logo: logoTimachigu.url, light: true },
      ],
    },
  ],
  venueInfo: [
    { label: "Local", value: "FHO — Araras/SP" },
    {
      label: "Endereço",
      value: "Av. Dr. Maximiliano Baruto, 500 - Jardim Universitario, Araras - SP, 13607-339",
    },
    { label: "Credenciamento", value: "A partir das 08h30, na recepção" },
    { label: "Formato", value: "Presencial · 1 palco principal e 2 laboratórios de IA na prática" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Av.%20Dr.%20Maximiliano%20Baruto%2C%20500%20-%20Jardim%20Universitario%2C%20Araras%20-%20SP%2C%2013607-339&output=embed",
  mapAddress:
    "Av. Dr. Maximiliano Baruto, 500 - Jardim Universitario, Araras - SP, 13607-339",
};
