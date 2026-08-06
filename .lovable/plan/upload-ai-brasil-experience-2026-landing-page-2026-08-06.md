# Upload AI Brasil Experience 2026 — Landing Page

Página única (one-page) para o esquenta do maior evento de IA da América Latina, dia **14 de agosto de 2026 (sexta-feira), 9h às 21h, InovaBRA Habitat — 10º andar, São Paulo**. Formato híbrido, capacidade de 300 pessoas.

Conversão principal: botão **Confirmar RSVP** apontando para a inscrição em `ai.eco.br` (link externo, sem backend).

## Identidade visual

- Paleta Navy Bee, direto da marca: fundo `#0B1327`, superfícies `#132043`, acento primário verde-limão `#C8F02A`, acento secundário verde `#5CE02A`.
- Tipografia: **Sora** para títulos, **Manrope** para texto, carregadas via `<link>` na raiz.
- Logotipo AIBrasil.AI e o selo circular da árvore/abelha entram como assets de marca (topo, favicon-like badge e footer).
- Detalhes de circuito (linhas finas, nós luminosos) como grafismo sutil de fundo, ecoando o logo — nunca competindo com o conteúdo.

## Seções

1. **Hero** — nome do evento, tagline "O esquenta do maior evento de IA da América Latina", data/local/formato, contagem regressiva para 14/08, um único CTA "Confirmar RSVP".
2. **Sobre o evento** — o movimento de transformação via IA, anúncios oficiais em primeira mão, referências, ecossistema e networking.
3. **Números/destaques** — 300 vagas, 12h de programação, 2 auditórios, formato híbrido.
4. **Programação completa** — timeline vertical de 08h30 a 21h com horário, título, tipo (palestra/painel/keynote/intervalo) e participantes, com filtro por período (manhã / tarde / noite). Marcações "a confirmar" onde o documento indica.
5. **Palestrantes e painelistas** — grade de cards com foto, nome, minibio curta e tema. Quem não tiver foto disponível recebe avatar com iniciais no estilo da marca.
6. **Local e como chegar** — InovaBRA Habitat, 10º andar, endereço, orientações de credenciamento (08h30) e nota sobre transmissão híbrida.
7. **Call for Papers** — formatos de slot (20/30 min; painéis de 40 a 60 min com 3 a 4 participantes), exigência de perfil completo em ai.eco.br e critérios de avaliação (conteúdo + participação + engajamento), com CTA para a plataforma.
8. **Patrocinadores e apoiadores** — grade de logos por nível (ouro, prata, apoio). Estrutura pronta; logos entram conforme você enviar.
9. **Galeria** — fotos das edições e encontros anteriores do ecossistema (as imagens enviadas).
10. **CTA final + rodapé** — repetição do RSVP, links para AI Brasil Experience e redes.

## Conteúdo

Toda a agenda, minibios e descrições vêm do documento enviado — nada é inventado. Onde o documento está incompleto (nomes pendentes, painelistas "a confirmar", fotos em Drive), o card exibe estado "a confirmar" em vez de texto fictício, e eu listo no final o que falta preencher.

## Movimento e acessibilidade

- Reveal suave por seção no scroll e hover discreto nos cards, só com `transform`/`opacity`.
- Timeline com destaque progressivo do item em vista.
- Contagem regressiva com atualização por minuto, sem layout shift.
- `prefers-reduced-motion` desliga todas as animações não essenciais.
- Contraste AA garantido do lima sobre navy; foco visível em todos os interativos; navegação por teclado na timeline e nos filtros.

## Detalhes técnicos

- Rota única em `src/routes/index.tsx`, sem backend; dados da agenda e dos palestrantes em módulos TypeScript tipados (`src/data/agenda.ts`, `src/data/speakers.ts`) para facilitar atualização.
- Tokens da paleta e fontes definidos em `src/styles.css` (`@theme inline` + `:root`), sem cores hardcoded nos componentes.
- Componentes pequenos e compostos: `Hero`, `Countdown`, `AgendaTimeline`, `SpeakerCard`, `SponsorGrid`, `Gallery`, `CallForPapers`, `Venue`, `SiteFooter`.
- Motion para microinterações e reveals; sem GSAP (não há storytelling de scroll complexo aqui).
- Logo e fotos publicados via Lovable Assets, servidos por CDN e com `loading="lazy"` fora do hero.
- SEO: `head()` próprio na rota com título e descrição do evento, og/twitter e JSON-LD `Event` (data, local, organizador, URL de inscrição).
- Mobile-first: timeline em coluna única, grade de palestrantes 1→2→3 colunas, CTA fixo no rodapé em telas pequenas.

## Critérios de aceite

- CTA "Confirmar RSVP" visível no primeiro scroll e no final, abrindo ai.eco.br em nova aba.
- Agenda completa das 08h30 às 21h navegável e legível em 360px de largura.
- Nenhum dado inventado; pendências sinalizadas visualmente.
- Lighthouse: sem layout shift no hero, imagens dimensionadas, contraste AA.
- Com `prefers-reduced-motion: reduce`, a página não anima.

## Fora do escopo (posso adicionar depois)

Formulário próprio de inscrição com banco de dados, área logada, streaming embutido e página de agradecimento pós-RSVP.
