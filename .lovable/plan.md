# Incorporar mapa do Google Maps na seção "Como chegar"

Adicionar o iframe de localização fornecido pelo usuário à seção de local do evento, mantendo a identidade visual Navy Bee e a responsividade.

## Alterações propostas

1. **Atualizar `src/components/site/venue.tsx`**
   - Transformar o componente para exibir, além dos cards de informação, um bloco "Como chegar" com o iframe do Google Maps.
   - Usar proporção responsiva (`aspect-video` ou `pb-[56.25%]`) para que o mapa se adapte a mobile e desktop sem layout shift.
   - Aplicar borda arredondada (`rounded-2xl`), borda sutil (`border-border`) e fundo de superfície (`bg-surface/60`) para integração visual com os cards existentes.
   - Adicionar `loading="lazy"`, `allowfullscreen` e `referrerPolicy="strict-origin-when-cross-origin"` no iframe.
   - Incluir título acessível (`title="Mapa do InovaBRA Habitat"`) no iframe para leitores de tela.

2. **Manter dados centralizados em `src/data/event.ts`**
   - O endereço e o nome do local já estão no objeto `EVENT`; nenhuma mudança estrutural é necessária.

3. **Responsividade e acessibilidade**
   - Empilhar cards e mapa em coluna única em telas pequenas.
   - Em telas maiores, manter os cards de informação em grid de 2 colunas e o mapa ocupando toda a largura abaixo.
   - Garantir foco visível e contraste AA nos elementos adjacentes.
   - Respeitar `prefers-reduced-motion`: o iframe não dispara animações, então nenhuma alteração adicional é necessária.

## Critérios de aceite

- O mapa do Google Maps é renderizado na seção "Local" da página.
- O iframe é responsivo, sem barras de rolagem horizontais em 360px.
- O visual do bloco do mapa segue os tokens de cor e raio do design system.
- Nenhum dado existente (endereço, andar, credenciamento, formato) é removido.
- Build e preview continuam sem erros.
