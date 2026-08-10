# Adicionar ABIACOM e ANAMID ao Apoio Institucional

Os dois logos enviados (ABIACOM em PNG branco, ANAMID em SVG branco) entram na grade "Apoio institucional", que hoje mostra apenas ABRIA, AI Safety Brazil, ABRADI e Instituto da Maturidade Digital — mesmo já sendo citados em `SUPPORTER_MENTIONS`.

## O que muda

- Publicar os dois arquivos como assets no CDN (`logo-abiacom.png`, `logo-anamid.svg`).
- Adicionar as entradas em `SUPPORTERS` (`src/data/event.ts`), mantendo a ordem: ABRIA, AI Safety Brazil, ABRADI, ABIACOM, ANAMID, Instituto da Maturidade Digital.
- Ambos são versões brancas, então ficam sobre o fundo escuro padrão (sem `light: true`, que é usado só pelo logo escuro do Instituto).

## Detalhes técnicos

- `lovable-assets create` para cada arquivo; imports dos ponteiros `.asset.json` no topo de `src/data/event.ts`.
- Nenhuma alteração em `sponsor-grid.tsx`: a grade já é responsiva (2/3 colunas) e renderiza qualquer número de apoiadores com `object-contain`.
- O SVG do ANAMID é servido pelo CDN via `<img src>`, que renderiza normalmente (a restrição de download vale só para `<use href>`).

## Critérios de aceite

- Seis logos visíveis na seção de apoio institucional, alinhados e legíveis no mobile e no desktop.
- Cada logo continua linkando para o RSVP, com `alt` descritivo.
