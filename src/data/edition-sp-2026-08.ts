import type { Edition, Session, Supporter } from "@/data/types";
import { buildSpeakers } from "@/data/people";
import logoAbria from "@/assets/apoio-abria.png.asset.json";
import logoInstitucional from "@/assets/apoio-logo-branco.png.asset.json";
import logoAiSafety from "@/assets/apoio-ai-safety-brazil.png.asset.json";
import logoInstitutoMaturidade from "@/assets/apoio-instituto-maturidade-digital.png.asset.json";
import logoAbiacom from "@/assets/apoio-abiacom.png.asset.json";
import logoAnamid from "@/assets/apoio-anamid.svg.asset.json";

const AGENDA: Session[] = [
  {
    time: "08h30",
    period: "manha",
    kind: "momento",
    title: "Abertura e boas-vindas",
    description:
      "Abertura e boas-vindas do anfitrião do InovaBRA e membro de longa data da AI Brasil, Daniel Ramos.",
    people: [
      {
        name: "Daniel Ramos",
        role: "Anfitrião do InovaBRA",
        org: "InovaBRA / organização local",
        profileUrl: "https://ai.eco.br/members/39431404",
      },
    ],
  },
  {
    time: "09h00",
    period: "manha",
    kind: "keynote",
    highlight: true,
    badge: "Keynote de abertura",
    title:
      "O Fim dos Gastos Infinitos com Tokens: por que a IA do futuro é local, sustentável e privada",
    description:
      "A nuvem nos acostumou a alugar inteligência: pagamos por token, enviamos nossos dados para servidores de terceiros e dependemos de conexão para tudo. Mas e se a próxima revolução da IA não acontecer na nuvem e sim no seu próprio computador — sem enviar sua propriedade intelectual para lugar nenhum? Uma visão técnica e pragmática sobre como a computação heterogênea, alinhando CPU, GPU e NPU, está tornando possível rodar modelos poderosos localmente, com tokens infinitos, custo zero por requisição e seus dados ficando onde devem ficar: com você. Por que IA sustentável deixou de ser discurso e virou estratégia, como a IA privativa elimina dependência de terceiros e por que a revolução da IA não é sobre mais nuvem — é sobre menos. A revolução é local.",
    people: [
      {
        name: "Alessandro Cabelo",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/39571100",
      },
    ],
  },
  {
    time: "09h30",
    period: "manha",
    kind: "painel",
    title: "Brasil no Comando da IA: as lideranças que estão construindo o futuro",
    description:
      "Quem está colocando o Brasil no comando da Inteligência Artificial? Lideranças da ABRIA, AI Safety, ABRADI, ABIACOM e ANAMID debatem as decisões, estratégias e alianças que estão construindo o futuro da IA no país.",
    people: [
      {
        name: "Elaine Coimbra",
        role: "Moderadora · vice-presidente de comunicação da ABRIA",
        profileUrl: "https://ai.eco.br/members/40971243",
      },
      {
        name: "Eva Lazarini",
        role: "Painelista · presidente do Conselho Consultivo da AI Safety",
        profileUrl: "https://ai.eco.br/members/40983712",
      },
      {
        name: "Lucas Garcia",
        role: "Painelista · presidente da ABRADI",
        profileUrl: "https://ai.eco.br/members/40971538",
      },
      {
        name: "Rafael Soares",
        role: "Painelista · ABIACOM",
        profileUrl: "https://ai.eco.br/members/40997976",
      },
      {
        name: "Rodrigo Neves",
        role: "Painelista · presidente da ANAMID",
        profileUrl: "https://ai.eco.br/members/40980243",
      },
    ],
  },
  {
    time: "10h20",
    period: "manha",
    kind: "painel",
    title:
      "IA Talks · IA de Dentro para Fora: a semântica humana no centro da Inteligência Artificial",
    description:
      "Painel IA Talks com host Carolina da Luz e dois convidados: Vagner Campos e Leonardo Santos, da Semantix e cofundador da AI Brasil.",
    people: [
      {
        name: "Carolina da Luz",
        role: "Host do painel IA Talks",
        profileUrl: "https://ai.eco.br/members/40198222",
      },
      {
        name: "Leonardo Santos",
        role: "Convidado · Semantix · cofundador da AI Brasil",
      },
      {
        name: "Vagner Campos",
        role: "Convidado",
        profileUrl: "https://ai.eco.br/members/40552508",
      },
    ],
  },
  {
    time: "11h00",
    period: "manha",
    kind: "palestra",
    title:
      "O Preço Oculto da Velocidade: como o uso imaturo de IA está expondo os dados da sua empresa hoje",
    description:
      "O mercado adotou o vibe coding: gerar software na velocidade do pensamento com IA. Mas o que acontece quando essa velocidade encontra processos de segurança parados no tempo? Uma análise madura e pragmática, sem discurso anti-IA, de como empresas estão silenciosamente multiplicando vulnerabilidades: dados concretos de inteligência de ameaças com milhares de stealer logs, a armadilha do vibe coding sem governança e como usar IA como escudo, não apenas como motor.",
    people: [
      {
        name: "Eduardo Neves (Eth0)",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/39656583",
      },
    ],
  },
  {
    time: "11h20",
    period: "manha",
    kind: "painel",
    title: "Construindo o maior ecossistema de Inteligência Artificial do Brasil",
    description:
      "Flagships e a união de forças através de regionais e temas. Como os membros da AI Brasil estão criando um movimento em volta de suas localidades e temas, com exemplos como as regionais de Araras e Santo André e temas como GRC (governança, riscos e compliance) e forense.",
    people: [
      {
        name: "Linuxmen",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/38852389",
      },
      {
        name: "Maurício Conte",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/39466547",
      },
      {
        name: "Jairo Segre",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/35645767",
      },
      {
        name: "Cristiano Christianini",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/39147124",
      },
    ],
  },
  {
    time: "11h30",
    period: "manha",
    kind: "palestra",
    title: "A cultura de dados na gestão de pessoas",
    description:
      "Como transformar percepções sobre pessoas, cultura e liderança em decisões mais inteligentes? Exploramos como dados e inteligência artificial podem apoiar a gestão de pessoas, tornando visíveis aspectos que muitas vezes permanecem subjetivos, como engajamento, sobrecarga, desempenho, aderência à cultura e efetividade da liderança.",
    people: [
      {
        name: "Roan Santos",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/40461988",
      },
    ],
  },
  { time: "12h00", period: "tarde", kind: "intervalo", title: "Almoço" },
  {
    time: "13h30",
    period: "tarde",
    kind: "keynote",
    title: "Keynote especial · IA matou o marketing das redes sociais",
    description:
      "28% é a queda média de engajamento dos conteúdos no Brasil. Você tem velocidade, mas perdeu qualidade. A IA generativa destruiu parte do que conhecíamos sobre marketing e construiu outra coisa completamente nova. Bruno Mello mostra o passado, o presente e o futuro do marketing na era da IA generativa.",
    people: [
      {
        name: "Bruno Mello",
        role: "Keynote · Many Content",
        profileUrl: "https://ai.eco.br/members/40977307",
      },
    ],
  },
  {
    time: "14h00",
    period: "tarde",
    kind: "painel",
    title:
      "IA Talks · Adoção de IA na prática: por que 95% dos projetos de IA fracassam antes de gerar resultados",
    description:
      "Painel IA Talks com host Carolina da Luz. Aline Bocardo, Gerson Viergutz e Leandro Mastellini revelam o que separa os projetos que morrem no piloto daqueles que geram resultado de verdade: erros, acertos e lições de quem já implementou IA no campo de batalha.",
    people: [
      { name: "Carolina da Luz", role: "Host do painel IA Talks" },
      {
        name: "Aline Bocardo",
        role: "Convidada",
        profileUrl: "https://ai.eco.br/members/40311374",
      },
      { name: "Gerson Viergutz", role: "Convidado" },
      { name: "Leandro Mastellini", role: "Convidado" },
    ],
  },
  {
    time: "14h30",
    period: "tarde",
    kind: "painel",
    title: "Juntos somos mais fortes: movimento de Inteligência Artificial",
    description:
      "A força da colaboração no ecossistema brasileiro de IA: comunidades, eventos e instituições mostram como estão unindo forças para acelerar a Inteligência Artificial no Brasil.",
    people: [
      {
        name: "Marcos Oliveira",
        role: "Painelista",
        org: "AI Festival",
        profileUrl: "https://ai.eco.br/members/38379363",
      },
      {
        name: "Marco Riveiros",
        role: "Painelista",
        org: "Instituto Amigu",
        profileUrl: "https://ai.eco.br/members/40122900",
      },
      { name: "Tiene Colins", role: "Painelista" },
      { name: "Luiz Tibiriçá", role: "Painelista" },
    ],
  },
  {
    time: "15h00",
    period: "tarde",
    kind: "keynote",
    title: "Keynote · Evolução Inteligente para Negócios",
    description:
      "Como transformar Inteligência Artificial em resultado real? Aline Bocardo mostra como integrar IA à estratégia, aos processos e às pessoas para aumentar eficiência, melhorar decisões e ampliar a capacidade de escala. Uma visão executiva e prática sobre o que separa empresas que apenas adotam ferramentas daquelas que constroem vantagem competitiva com IA.",
    people: [
      {
        name: "Aline Bocardo",
        role: "Keynote",
        profileUrl: "https://ai.eco.br/members/40311374",
      },
    ],
  },
  {
    time: "15h30",
    period: "tarde",
    kind: "palestra",
    title:
      "Geração IA 2027 — da imaginação à inovação: a IA como motor da nova economia criativa",
    description:
      "Muzy Jorge, criador do AI Summit Brasil e autor do livro “AI 360º, Além dos Algoritmos”, revela como a IA está redesenhando a economia criativa — e o que vem pela frente até 2027.",
    people: [
      {
        name: "Muzy Jorge",
        role: "Palestrante · AI Summit",
        profileUrl: "https://ai.eco.br/members/40979224",
      },
    ],
  },
  {
    time: "15h50",
    period: "tarde",
    kind: "palestra",
    title:
      "Eu discordo de Elon Musk: por que a inteligência humana não será substituída pela artificial",
    description:
      "A IA pode superar humanos em inúmeras tarefas — mas isso significa substituição? Rodrigo Righetti provoca uma reflexão sobre o que continua essencialmente humano: contexto, julgamento, repertório, confiança e imaginação — e como usar a IA sem terceirizar o seu bem mais valioso, a própria inteligência.",
    people: [
      {
        name: "Rodrigo Righetti",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/38382453",
      },
    ],
  },
  {
    time: "16h10",
    period: "tarde",
    kind: "palestra",
    title: "Quem ainda sabe pensar?",
    description:
      "Gabriel Virissimo conecta ciência, tecnologia, filosofia e comportamento para provocar a pergunta essencial da era da IA: quais capacidades humanas continuarão sendo insubstituíveis quando as máquinas pensam cada vez mais por nós?",
    people: [
      {
        name: "Gabriel Virissimo",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/39700330",
      },
    ],
  },
  {
    time: "16h30",
    period: "tarde",
    kind: "palestra",
    title: "Aprenda mais rápido que a Inteligência Artificial",
    description:
      "Em um mundo onde a IA evolui a cada semana, quem aprende devagar fica para trás. Juliano Kimura, Head de Ecossistema da AI Brasil, mostra métodos práticos para acelerar seu aprendizado e transformar a velocidade da IA em vantagem competitiva — e não em ameaça.",
    people: [
      {
        name: "Juliano Kimura",
        role: "Palestrante · Head de Ecossistema da AI Brasil",
        profileUrl: "https://ai.eco.br/members/21874664",
      },
    ],
  },
  {
    time: "17h00",
    period: "tarde",
    kind: "palestra",
    title: "HERMES AI: o que aprendi construindo um agente autônomo",
    description:
      "Todo mundo já viu demo de agente de IA funcionando; poucos viram um rodando em produção. Gerson Viergutz compartilha as decisões de arquitetura, os erros que custaram caro e o que funciona de verdade na orquestração de LLMs e tools. Sem slides de marketing: código, falhas e lições de quem colocou um agente para trabalhar sozinho.",
    people: [
      {
        name: "Gerson Viergutz",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/39212560",
      },
    ],
  },
  {
    time: "17h20",
    period: "tarde",
    kind: "painel",
    title: "Como formar o maior ecossistema de Inteligência Artificial do Brasil?",
    description:
      "Anúncios oficiais, planejamento, execução e todos os segredos e bastidores da construção do maior ecossistema de IA do país.",
    people: [
      { name: "Juliano Kimura", role: "Painelista" },
      { name: "Jairo Segre", role: "Painelista" },
      { name: "André Almeida", role: "Painelista" },
    ],
  },
  {
    time: "17h40",
    period: "tarde",
    kind: "palestra",
    title: "IA nas universidades: revolução nas salas de aula",
    description:
      "Luis Rodeguero apresenta um framework conceitual sobre as tendências do uso de IA na educação e exemplos práticos de como professores e alunos da Link School já estão usando Inteligência Artificial nas aulas de graduação.",
    people: [
      {
        name: "Luis Rodeguero",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/39422524",
      },
    ],
  },
  {
    time: "18h00",
    period: "noite",
    kind: "painel",
    title: "Sua empresa é AI-Centric ou apenas comprou ferramentas de IA?",
    description:
      "Ser AI-Centric vai muito além de adotar novas tecnologias: é repensar liderança, cultura, processos e decisões colocando a IA no centro da estratégia. Neste painel, o que realmente separa usar IA de operar com IA. Porque IA sem estratégia não transforma — só acelera.",
    people: [
      {
        name: "Cilene Danta",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/38862633",
      },
      {
        name: "Juliana Lopes",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/40989380",
      },
      { name: "Michael Silva", role: "Painelista" },
    ],
  },
  {
    time: "18h30",
    period: "noite",
    kind: "palestra",
    title: "A Inteligência Artificial e a Inteligência Humana: quem programa quem?",
    description:
      "O Prof. Eduardo Piedade traz uma reflexão provocativa sobre os impactos da IA na liderança, na comunicação, nos negócios e na sociedade — e uma metodologia para usar a IA de forma estratégica preservando o que permanece exclusivamente humano: pensamento crítico, criatividade, ética, discernimento e propósito.",
    people: [
      {
        name: "Eduardo Piedade",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/40265661",
      },
    ],
  },
  {
    time: "19h00",
    period: "noite",
    kind: "palestra",
    title: "Maturidade em IA",
    description:
      "Toda empresa hoje diz que “usa IA”, mas poucas sabem dizer, com dados, em que estágio realmente estão. Alessandro Milagres escancara a diferença entre organizações que colecionam experimentos e as que incorporam a IA de fato ao negócio — um raio-x direto da jornada do piloto à produção.",
    people: [
      {
        name: "Alessandro Milagres",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/40198798",
      },
    ],
  },
  {
    time: "19h20",
    period: "noite",
    kind: "painel",
    title: "Inteligência Artificial no Automotivo",
    description:
      "Da fábrica à experiência de dirigir, a IA está transformando a indústria automotiva. Adriano Rufino e André Almeida mostram aplicações reais e o que vem pela frente no setor.",
    people: [
      {
        name: "Adriano Rufino",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/40971723",
      },
      {
        name: "André Almeida",
        role: "Painelista",
        profileUrl: "https://ai.eco.br/members/38743151",
      },
    ],
  },
  {
    time: "19h40",
    period: "noite",
    kind: "palestra",
    title: "Os bastidores das grandes empresas de internet no Brasil",
    description:
      "Marcio Chleba revela histórias, decisões e aprendizados de quem viveu por dentro a construção das gigantes da internet brasileira — e o que essas lições ensinam para a era da Inteligência Artificial.",
    people: [
      {
        name: "Marcio Chleba",
        role: "Palestrante",
        profileUrl: "https://ai.eco.br/members/38952965",
      },
    ],
  },
  {
    time: "20h00",
    period: "noite",
    kind: "keynote",
    title: "Keynote de encerramento · FUTURABILIDADE: protagonismo humano na nova era digital",
    description:
      "A IA pode transformar o mundo — mas quem decide o rumo ainda somos nós. Em parceria com a AI Brasil, Leila Navarro encerra o evento com uma experiência provocadora sobre futurabilidade, atitude e liderança na nova era digital. Com mais de 3 milhões de pessoas impactadas, ela mostra como usar a Inteligência Artificial a seu favor sem perder aquilo que nenhuma tecnologia pode substituir: sua essência, sua humanidade e o poder de protagonizar o futuro.",
    people: [
      {
        name: "Leila Navarro",
        role: "Keynote especial de encerramento",
        profileUrl: "https://ai.eco.br/members/40969525",
      },
    ],
  },
  {
    time: "20h30",
    period: "noite",
    kind: "momento",
    title: "Networking e encerramento",
    description: "Conexões finais entre a comunidade e o ecossistema AI Brasil.",
  },
];

const SUPPORTERS: Supporter[] = [
  { name: "Abria", logo: logoAbria.url },
  { name: "AI Safety Brazil", logo: logoAiSafety.url },
  { name: "Abradi", logo: logoInstitucional.url },
  { name: "ABIACOM", logo: logoAbiacom.url },
  { name: "ANAMID", logo: logoAnamid.url },
  {

    name: "Instituto da Maturidade Digital",
    logo: logoInstitutoMaturidade.url,
    light: true,
  },
];

const SUPPORTER_MENTIONS = ["ABRIA", "AI Safety Brazil", "ABRADI", "ABIACOM", "ANAMID"];

const CFP = {
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

const SPONSOR_TIERS = [
  { tier: "Ouro", slots: 4 },
  { tier: "Prata", slots: 5 },
  { tier: "Apoio", slots: 6 },
] as const;

const VENUE_INFO = [
  { label: "Endereço", value: "InovaBRA Habitat · Av. Angélica, 2529 — Bela Vista, São Paulo/SP" },
  { label: "Andar", value: "10º andar inteiro, com os dois maiores auditórios" },
  { label: "Credenciamento", value: "A partir das 08h30, na recepção do prédio" },
  { label: "Formato", value: "Presencial e online (híbrido) · capacidade máxima de 300 pessoas" },
];

export const SP_EDITION: Edition = {
  slug: "sp-agosto-2026",
  path: "/sp-agosto-2026",
  status: "past",
  name: "Upload AI Brasil Experience 2026",
  shortName: "São Paulo · Agosto 2026",
  tagline: "O esquenta do maior evento de IA da América Latina",
  dateISO: "2026-08-14T08:30:00-03:00",
  endISO: "2026-08-14T21:00:00-03:00",
  dateLabel: "14 de agosto de 2026 · sexta-feira",
  timeLabel: "08h30 às 21h00",
  venue: "InovaBRA Habitat — 10º andar",
  city: "São Paulo, SP",
  format: "Presencial e online (híbrido)",
  capacity: "300 pessoas",
  rsvpUrl:
    "https://ai.eco.br/plans/1979445?bundle_token=aea96ac88a1205364ce25700e36d44d7&utm_source=manual",
  downloadUrl: "https://ai.eco.br/spaces/23317728/page",
  agenda: AGENDA,
  speakers: buildSpeakers(AGENDA),
  supporters: SUPPORTERS,
  supporterMentions: SUPPORTER_MENTIONS,
  cfp: CFP,
  sponsorTiers: SPONSOR_TIERS,
  venueInfo: VENUE_INFO,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4338.391338107302!2d-46.6621038!3d-23.554339700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582dbe278b15%3A0xd08729fb039d6441!2sAv.%20Ang%C3%A9lica%2C%202529%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001227-200!5e1!3m2!1spt-BR!2sbr!4v1786377288497!5m2!1spt-BR!2sbr",
  mapAddress: "Av. Angélica, 2529 — Bela Vista, São Paulo/SP",
};
