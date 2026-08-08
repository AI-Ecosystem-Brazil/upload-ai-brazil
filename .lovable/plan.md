# Atualização completa da página com a programação oficial

Substituir todo o conteúdo da landing pela versão final da planilha "Upload AI Brasil Experience 2026 — Participantes e Atividades" (42 registros, 08h30 às 20h+). Nenhuma coluna interna (Status, Card, ai.eco.br, controle) vai para a página.

## O que muda

### Programação
Agenda reconstruída a partir da planilha, agrupando painéis com vários painelistas em um único bloco de horário:

```text
08h30  Abertura e boas-vindas — Daniel Ramos (anfitrião InovaBRA)
09h00  DESTAQUE — O Fim dos Gastos Infinitos com Tokens: por que a IA do
       futuro é local, sustentável e privada — Alessandro Cabelo
09h30  Painel Brasil no Comando da IA — Elaine Coimbra (moderadora, ABRIA),
       Eva Lazarini (AI Safety), Lucas Garcia (ABRADI), Rafael Soares
       (ABIACOM), Rodrigo Neves (ANAMID)
10h20  IA Talks — IA de Dentro para Fora — host Carolina da Luz,
       Leonardo Santos (Semantix), Vagner Campos
11h00  O Preço Oculto da Velocidade — Eduardo Neves (Eth0)
11h20  Painel Construindo o maior ecossistema de IA do Brasil — Linuxmen,
       Maurício Conte, Jairo Segre, Cristiano Christianini
11h30  A cultura de dados na gestão de pessoas — Roan Santos
12h00  Almoço
13h30  Keynote IA matou o marketing das redes sociais — Bruno Mello
14h00  IA Talks — Adoção de IA na Prática (95% dos projetos fracassam) —
       host Carolina da Luz, Aline Bocardo, Gerson Viergutz, Leandro Mastellini
14h30  Painel Juntos somos mais fortes — Marcos Oliveira (AI Festival),
       Marco Riveiros (Instituto Amigu)
15h00  Keynote Evolução Inteligente para Negócios — Aline Bocardo
15h30  Geração IA 2027 — Muzy Jorge
15h50  Eu discordo de Elon Musk — Rodrigo Righetti
16h10  Quem ainda sabe pensar? — Gabriel Virissimo
16h30  Aprenda mais rápido que a IA — Juliano Kimura
17h00  HERMES AI: construindo um agente autônomo — Gerson Viergutz
17h20  Painel Como formar o maior ecossistema de IA do Brasil —
       Juliano Kimura, Jairo Segre, André Almeida
17h40  IA nas universidades — Luis Rodeguero
18h00  Painel Sua empresa é AI-Centric? — Cilene Danta, Juliana Lopes,
       Michael Silva
18h30  IA e Inteligência Humana: quem programa quem? — Eduardo Piedade
19h00  Maturidade em IA — Alessandro Milagres
19h20  Painel IA no Automotivo — Adriano Rufino, André Almeida
19h40  Bastidores das grandes empresas de internet — Marcio Chleba
20h00  Keynote de encerramento FUTURABILIDADE — Leila Navarro
```

O slot das 09h00 ganha tratamento de **keynote de abertura em destaque**: card maior, selo "Keynote de abertura", borda/gradiente da marca e a descrição completa da palestra.

Sai da página tudo que não consta na planilha (Nelson Borges, Hilson Oliveira, Gerson/Rafael Palermo como slots avulsos, títulos genéricos "Palestra Fulano", horários antigos).

### Palestrantes
Grid com **todos os ~35 nomes** da planilha (palestrantes, keynotes, moderadores e painelistas), cada card com:
- nome, papel/vínculo e atividade em que participa;
- foto quando existir (Aline Bocardo, Alessandro Milagres, Jairo Segre, Roan Santos) e avatar com iniciais nos demais;
- card clicável para o **perfil individual em ai.eco.br** quando a planilha traz o link; sem link, o card fica estático.
- ordenação por horário de participação, com keynotes primeiro.

### Resto da página
- Hero e seção "Sobre": números e textos alinhados à programação real (08h30–20h+, contagem de atividades e de participantes vinda dos dados).
- Apoio institucional: manter os logos atuais (ABRIA, AI Safety Brazil, ABRADI) e citar também ABIACOM e ANAMID como associações presentes no painel de abertura.
- CTAs de RSVP, patrocínio e call for papers continuam apontando para o link de planos do ai.eco.br.
- SEO: título e descrição atualizados com os destaques reais (Leila Navarro, Bruno Mello, Aline Bocardo) e JSON-LD do evento com a lista de performers.

## Detalhes técnicos

- `src/data/event.ts` é reescrito como fonte única: novo tipo `Session` com `speakers: {name, role, profileUrl?}[]`, `highlight?: boolean` e descrição longa; `SPEAKERS` derivado da planilha com `profileUrl` e `photo?`.
- `src/components/site/agenda-timeline.tsx`: renderiza lista de participantes por sessão e a variante em destaque; filtros por período (manhã/tarde/noite) mantidos com os novos horários.
- `src/components/site/speaker-grid.tsx`: card vira `<a>` quando há `profileUrl` (`target="_blank"`, `rel="noopener noreferrer"`), com foco visível e hover; sem link permanece `<article>`.
- Fotos existentes reaproveitadas via os `.asset.json` já no projeto; "Roan" passa a "Roan Santos".
- Animações continuam via `Reveal`/IntersectionObserver, respeitando `prefers-reduced-motion`.
- Verificação: typecheck e screenshot da agenda e do grid de palestrantes no preview.
