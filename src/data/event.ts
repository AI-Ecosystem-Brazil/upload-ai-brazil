export const EVENT = {
  name: "Upload AI Brasil Experience 2026",
  tagline: "O esquenta do maior evento de IA da América Latina",
  dateISO: "2026-08-14T09:00:00-03:00",
  endISO: "2026-08-14T21:00:00-03:00",
  dateLabel: "14 de agosto de 2026 · sexta-feira",
  timeLabel: "09h00 às 21h00",
  venue: "InovaBRA Habitat — 10º andar",
  city: "São Paulo, SP",
  format: "Presencial e online (híbrido)",
  capacity: "300 pessoas",
  rsvpUrl:
    "https://ai.eco.br/plans/1979445?bundle_token=aea96ac88a1205364ce25700e36d44d7&utm_source=manual",
} as const;

export type SessionKind = "palestra" | "painel" | "keynote" | "intervalo" | "momento";
export type Period = "manha" | "tarde" | "noite";

export type Session = {
  time: string;
  period: Period;
  kind: SessionKind;
  title: string;
  people?: string;
  description?: string;
  tentative?: boolean;
};

export const KIND_LABEL: Record<SessionKind, string> = {
  palestra: "Palestra",
  painel: "Painel",
  keynote: "Keynote",
  intervalo: "Intervalo",
  momento: "Momento AI Brasil",
};

export const AGENDA: Session[] = [
  {
    time: "08h30",
    period: "manha",
    kind: "momento",
    title: "Credenciamento no prédio",
    description: "Chegada e recepção dos participantes.",
  },
  {
    time: "09h00",
    period: "manha",
    kind: "palestra",
    title: "Aprenda mais rápido que a Inteligência Artificial",
    people: "Juliano Kimura",
    description: "Palestra especial inédita.",
  },
  {
    time: "09h20",
    period: "manha",
    kind: "painel",
    title: "Brasil no Comando da IA: as lideranças que estão construindo o futuro",
    people:
      "Moderação: Elaine da Abria · Rodrigo Neves (Presidente da Anamid) e demais associações",
    description: "Painel com 4 participantes. Demais nomes a confirmar.",
    tentative: true,
  },
  {
    time: "10h00",
    period: "manha",
    kind: "painel",
    title: "IA de Dentro para Fora: a semântica humana no centro da Inteligência Artificial",
    people: "Host: Carolina da Luz · Vagner Campos e Hilson Oliveira",
    description: "Painel IA Talks.",
  },
  {
    time: "10h40",
    period: "manha",
    kind: "palestra",
    title: "Palestra Leila Navarro",
    people: "Leila Navarro",
  },
  {
    time: "11h00",
    period: "manha",
    kind: "palestra",
    title: "Palestra Linuxmen e Eduardo Neves",
    people: "Linuxmen e Eduardo Neves",
  },
  {
    time: "11h20",
    period: "manha",
    kind: "painel",
    title: "Construindo o maior ecossistema de Inteligência Artificial do Brasil",
    people: "Linuxmen, Maurício Conte, Jairo Segre e membros do ecossistema",
    tentative: true,
  },
  {
    time: "11h30",
    period: "manha",
    kind: "palestra",
    title: "A cultura de dados na gestão de pessoas",
    people: "Roan · BeCulture",
    description:
      "Como transformar percepções sobre pessoas, cultura e liderança em decisões mais inteligentes? Exploramos como dados e inteligência artificial podem apoiar a gestão de pessoas, tornando visíveis aspectos que muitas vezes permanecem subjetivos, como engajamento, sobrecarga, desempenho, aderência à cultura e efetividade da liderança.",
  },
  {
    time: "11h50",
    period: "manha",
    kind: "intervalo",
    title: "Saída para o almoço",
  },
  { time: "12h00", period: "tarde", kind: "intervalo", title: "Almoço" },
  {
    time: "13h15",
    period: "tarde",
    kind: "momento",
    title: "Anúncios exclusivos e especiais da AI Brasil",
    description: "Os anúncios oficiais do AI Brasil Experience em primeira mão.",
  },
  {
    time: "13h30",
    period: "tarde",
    kind: "palestra",
    title: "Palestra especial com Bruno Mello",
    people: "Bruno Mello · Many Content",
  },
  {
    time: "14h00",
    period: "tarde",
    kind: "painel",
    title:
      "Adoção de IA na prática: por que 95% dos projetos de IA fracassam antes de gerar resultados",
    people: "Host: Carolina da Luz · Aline Bocardo e Gerson Viergutz",
    description: "Painel IA Talks.",
  },
  {
    time: "14h30",
    period: "tarde",
    kind: "palestra",
    title: "Palestra Nelson Borges",
    people: "Nelson Borges · Bradesco",
  },
  {
    time: "15h00",
    period: "tarde",
    kind: "keynote",
    title: "Evolução Inteligente para Negócios",
    people: "Aline Bocardo",
  },
  {
    time: "15h30",
    period: "tarde",
    kind: "palestra",
    title: "Palestra Rodrigo Righetti",
    people: "Rodrigo Righetti",
  },
  {
    time: "16h00",
    period: "tarde",
    kind: "palestra",
    title: "Apresentação Gabriel Viríssimo",
    people: "Gabriel Viríssimo",
    description: "Apresentação de 30 minutos.",
  },
  {
    time: "16h30",
    period: "tarde",
    kind: "painel",
    title: "Formação do maior ecossistema de Inteligência Artificial do Brasil",
    people: "Moderação: Cilene Danta · Facilitadores Ouro",
    tentative: true,
  },
  {
    time: "17h00",
    period: "tarde",
    kind: "palestra",
    title: "Apresentação Gerson Viergutz",
    people: "Gerson Viergutz",
    description: "Apresentação de 20 minutos.",
  },
  {
    time: "17h20",
    period: "tarde",
    kind: "palestra",
    title: "Apresentação Rafael Palermo",
    people: "Rafael Palermo",
    description: "Apresentação de 20 minutos.",
  },
  {
    time: "17h40",
    period: "tarde",
    kind: "palestra",
    title: "IA nas universidades: revolução nas salas de aula",
    people: "Luis Rodeguero",
    description:
      "Framework conceitual sobre tendências do uso de IA na educação, com exemplos práticos de como professores e alunos da Link School estão usando IA nas aulas de graduação.",
  },
  {
    time: "18h00",
    period: "noite",
    kind: "painel",
    title: "Painel com Cilene Danta",
    people: "Cilene Danta + 2 convidados",
    tentative: true,
  },
  {
    time: "18h30",
    period: "noite",
    kind: "palestra",
    title: "Palestra Prof. Eduardo Piedade",
    people: "Prof. Eduardo Piedade",
  },
  {
    time: "19h00",
    period: "noite",
    kind: "palestra",
    title: "Maturidade em IA",
    people: "Alessandro Milagres",
    description:
      "Toda empresa hoje diz que “usa IA”. Poucas sabem dizer, com dados, em que estágio realmente estão. Vamos escancarar a diferença entre organizações que colecionam experimentos de IA e as que a incorporam de fato ao negócio — com dados confiáveis, processos redesenhados, governança que não trava e gente preparada para trabalhar com agentes, não contra eles.",
  },
  {
    time: "19h30",
    period: "noite",
    kind: "palestra",
    title: "IA na indústria automotiva",
    people: "Adriano Rufino + 1 convidado",
    tentative: true,
  },
  {
    time: "20h00",
    period: "noite",
    kind: "palestra",
    title: "Palestra Marcio Chleba",
    people: "Marcio Chleba",
  },
  { time: "20h30", period: "noite", kind: "momento", title: "Networking" },
  { time: "21h00", period: "noite", kind: "momento", title: "Finalização" },
];

import alineFoto from "@/assets/aline-bocardo.png.asset.json";
import alessandroFoto from "@/assets/alessandro-milagres.jpg.asset.json";
import jairoFoto from "@/assets/jairo-segre.jpg.asset.json";
import roanFoto from "@/assets/roan.png.asset.json";
import logoAbria from "@/assets/apoio-abria.png.asset.json";
import logoInstitucional from "@/assets/apoio-logo-branco.png.asset.json";
import logoAiSafety from "@/assets/apoio-ai-safety-brazil.png.asset.json";

export type Speaker = {
  name: string;
  role: string;
  bio: string;
  topic?: string;
  photo?: string;
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Juliano Kimura",
    role: "Head de Ecossistema da AI Brasil",
    bio: "Certificado pelo MIT em Transformação Digital e ex-palestrante do Facebook Brasil. Duas vezes eleito Melhor Profissional de Redes Sociais pela Abiacom, Embaixador da Worldcoin no Brasil e colunista da AI News. Autor de “O Livro Secreto das Redes Sociais”, com mais de 1000 palestras e expertise em IA, Web3 e blockchain.",
    topic: "Aprenda mais rápido que a Inteligência Artificial",
  },
  {
    name: "Carolina da Luz",
    role: "Fundadora da Essência Digital Estúdio · host do IA TALKs",
    bio: "Estrategista digital, criadora e host do podcast IA TALKs, produzido em parceria com a comunidade AI Brasil. Projetos seus chegaram a campanhas da OMS e da ONU, e hoje atua em consultoria para a Coca-Cola Brasil. Criou o IA TALKs para que a inteligência artificial descesse do palco e virasse conversa ampla.",
    topic: "Host dos painéis IA Talks",
  },
  {
    name: "Aline Bocardo",
    role: "CEO da AINOV Solutions · advisor e palestrante de IA",
    bio: "Arquiteta de agentes de IA e advisory em IA Organizacional, com formação executiva pelo MIT e por Harvard e mais de 20 anos de experiência em gestão pública, privada e terceiro setor. Foi Secretária de Desenvolvimento Econômico e Inovação. Mais de 80 empresas impactadas, 600 líderes preparados e 3.000 profissionais capacitados.",
    topic: "Keynote: Evolução Inteligente para Negócios",
  },
  {
    name: "Luis Rodeguero",
    role: "Diretor na Tess Capital · professor na Link School",
    bio: "Professor de Corporate Finance e Startup Finance, trader profissional e CFO de pequenas e médias empresas. Gestor de recursos habilitado pela CVM e conselheiro de administração certificado pelo IBGC.",
    topic: "IA nas universidades: revolução nas salas de aula",
  },
  {
    name: "Alessandro Milagres",
    role: "Palestrante",
    bio: "Traz um raio-x direto de onde a maioria das organizações trava na jornada do piloto à produção em IA, e do que separa quem fala de IA de quem vive de IA.",
    topic: "Maturidade em IA",
  },
  {
    name: "Bruno Mello",
    role: "CEO e fundador da Many Content",
    bio: "Minibio a confirmar.",
    topic: "Palestra especial",
  },
];

export const CFP = {
  requirement:
    "Para palestrar ou participar como painelista, todos devem estar cadastrados na plataforma e com o perfil preenchido em ai.eco.br.",
  formats: [
    "Slot básico de 30 minutos",
    "Slot mínimo de 20 minutos",
    "Painéis de 40 a 60 minutos, com 3 a 4 participantes",
  ],
  criteria: [
    { label: "Conteúdo + participação + engajamento + ouro", score: "100%" },
    { label: "Conteúdo + alta participação (perfil completo e ativo)", score: "80%" },
    { label: "Conteúdo + baixa participação (perfil incompleto)", score: "60%" },
    { label: "Conteúdo e zero participação (sem perfil)", score: "50%" },
  ],
} as const;

export const SPONSOR_TIERS = [
  { tier: "Ouro", slots: 4 },
  { tier: "Prata", slots: 5 },
  { tier: "Apoio", slots: 6 },
] as const;
