# Nova edição Araras 2026 + página legado de São Paulo

Duas edições no mesmo site: a home passa a ser a nova edição (23 de setembro, FHO — Araras/SP, organizada por Jairo Segre) e a edição realizada no InovaBRA vira uma página legado com destaque para o download de fotos e vídeos.

## Estrutura de rotas

```text
/                  -> Upload AI Brasil · Araras 2026 (nova edição, RSVP aberto)
/sp-agosto-2026    -> Edição realizada (InovaBRA, 14/08) — legado
```

A página legado mantém exatamente o conteúdo atual (programação completa, palestrantes, apoio institucional, galeria), mas com o topo reposicionado como evento já realizado: selo "Edição realizada", contagem regressiva removida e um bloco de destaque com o botão **Download de fotos e vídeos** (https://ai.eco.br/spaces/23317728/page). Um link discreto "Ver edição anterior" na home leva até ela, e a página legado tem um link de volta para a nova edição.

## Nova edição (home)

- **Data e horário**: 23 de setembro de 2026, 08h30 às 17h30.
- **Local**: FHO — Araras/SP. Endereço completo e mapa marcados como "a confirmar" até você enviar o endereço exato (o iframe de mapa fica pronto para receber a URL).
- **Formato**: presencial.
- **Organização**: Jairo Segre.
- **RSVP**: https://ai.eco.br/plans/1987849?bundle_token=a787af0f0803c189379298c03fe83acc&utm_source=manual em todos os botões e links de inscrição.
- **Palestrantes confirmados**: Jairo Segre e Juliano Kimura (abertura), Juliano Kimura, Tiene Collins — usando as fotos já publicadas no projeto. Os demais aparecem como "a confirmar".

### Três trilhas de programação

A agenda ganha um seletor de trilha (mantendo o filtro por período dentro de cada uma):

1. **Palco principal (auditório)** — abertura com Jairo Segre e Juliano Kimura, keynote e palestras.
2. **Laboratório 1 — IA na prática** — sessões mão na massa.
3. **Laboratório 2 — IA na prática** — sessões mão na massa.

Cada trilha recebe blocos de horário no formato do evento anterior (palestra, painel, keynote, hands-on, intervalo) com título e participantes marcados como **A definir / TBD**, prontos para substituição quando a grade fechar. Nada é inventado: só os nomes confirmados aparecem com foto e função.

## Detalhes técnicos

- `src/data/event.ts` é dividido: `src/data/edition-araras.ts` (nova edição, com `TRACKS` e agenda por trilha) e `src/data/edition-sp-2026-08.ts` (dados atuais, congelados). Um tipo `Edition` compartilhado mantém tudo tipado, e o mapa `PHOTOS` / helpers `photoOf`, `initialsOf` vão para `src/data/people.ts` reutilizado pelas duas.
- Componentes existentes (`Hero`, `AgendaTimeline`, `SpeakerGrid`, `Venue`, `SponsorGrid`, `Gallery`, `SiteFooter`) passam a receber os dados da edição por prop em vez de importar `EVENT` direto — sem duplicação de UI.
- `AgendaTimeline` ganha suporte opcional a trilhas: quando a edição define `tracks`, renderiza abas acessíveis (roles `tablist`/`tab`/`tabpanel`, navegação por teclado); quando não define, comporta-se como hoje.
- Novos componentes: `EditionSwitchLink` (link cruzado entre edições) e `LegacyDownloadCta` (bloco de download de fotos e vídeos).
- `src/routes/index.tsx` renderiza a edição de Araras; novo `src/routes/sp-agosto-2026.tsx` renderiza a edição legado, com `head()` próprio (título, description, og/twitter) e JSON-LD `Event` com `eventStatus: EventScheduled` e datas passadas.
- Sessões TBD recebem estilo próprio (borda tracejada, texto "A definir") em vez de card cheio, deixando claro o que ainda falta.
- Countdown só aparece na edição futura; na legado é substituído pelo selo de edição realizada.
- Animações seguem o padrão atual (transform/opacity, `prefers-reduced-motion` respeitado).

## Critérios de aceite

- `/` mostra Araras 23/09, 08h30–17h30, RSVP com o novo link em todos os CTAs.
- Agenda com três trilhas navegáveis por clique e teclado, cada uma com placeholders TBD.
- `/sp-agosto-2026` preserva todo o conteúdo atual, sem contagem regressiva, com CTA de download de fotos e vídeos no topo.
- Links cruzados funcionando nas duas direções; nenhum CTA de inscrição na página legado.
- Legível a partir de 360px; sem dados inventados.

## Pendências que preciso de você

Endereço completo da FHO e link do mapa, capacidade de vagas, e a grade real das três trilhas quando fechar.
