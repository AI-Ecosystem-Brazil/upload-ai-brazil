# Fotos dos palestrantes na programação

Levar os retratos para dentro da agenda, com tratamento diferente para cada tipo de atividade: keynote em destaque máximo, palestra com retrato lateral e painel com um conjunto inteligente de rostos.

## Fotos recebidas (10 novas)

Adriano Rufino, Alessandro Cabelo, Aline Bocardo, André Almeida, Bruno Mello, Carolina da Luz, Cilene Danta, Cristiano Christianini, Cristiano "Linuxmen" e Daniel Ramos — todas em PNG recortado com fundo transparente/branco. Somadas às já existentes (Alessandro Milagres, Jairo Segre, Roan Santos), a página passa a ter 13 rostos.

As imagens vão para o CDN de assets e são ligadas ao nome da pessoa em um único mapa central, então cada foto aparece automaticamente na agenda e no grid de palestrantes.

## Como cada atividade vai ficar

**Keynote (Alessandro Cabelo, Bruno Mello, Aline Bocardo, Leila Navarro)**
Card em largura total com layout de duas colunas: retrato grande e sangrado à esquerda (recorte alto, com halo em gradiente da marca por trás para as fotos sem fundo), e à direita o horário, selo "Keynote", título grande, nome e descrição. Fundo com o gradiente sutil da marca e borda em destaque. No mobile vira retrato no topo, texto abaixo.

**Palestra (1 pessoa)**
Card atual, com um retrato circular médio (aprox. 88px) alinhado ao nome, à esquerda do bloco de texto. Sem foto, mantém o fallback com iniciais no gradiente da marca.

**Painel (2 a 5 pessoas)**
Linha de retratos circulares sobrepostos (stack estilo "avatar group", leve deslocamento negativo e anel na cor de fundo), seguida da lista de nomes/papéis em chips clicáveis como hoje. Ao passar o mouse ou focar num chip, o avatar correspondente sobe levemente e ganha anel na cor primária — conecta rosto e nome sem poluir. Quem não tem foto entra no mesmo stack com iniciais.

**Intervalo / momento**
Sem mudança visual, exceto Daniel Ramos na abertura, que ganha o retrato de palestra.

## Grid de palestrantes

Mantém a estrutura atual, agora com muito mais rostos preenchidos; os cards de keynote seguem com o selo em destaque.

## Detalhes técnicos

- Upload via `lovable-assets create` a partir de `/mnt/user-uploads/`, um `.asset.json` por foto em `src/assets/`.
- `src/data/event.ts`: mapa único `PHOTOS` (nome → url) já existente é ampliado; `Participant` ganha `photo` resolvido na montagem da agenda e do grid, evitando duplicar URLs.
- `src/components/site/agenda-timeline.tsx`: extração de dois subcomponentes locais — `SpeakerAvatar` (foto ou iniciais, tamanhos `sm`/`md`/`xl`) e `PanelAvatars` (stack sobreposto) — e três variantes de card por `kind`.
- Imagens com `loading="lazy"`, `decoding="async"`, `width`/`height` explícitos e `object-cover object-top` para evitar layout shift; keynote usa `fetchpriority` normal por estar abaixo da dobra.
- Transições apenas em `transform`/`opacity`, com `motion-reduce` desligando o realce hover-nome/avatar.
- Sem cores hardcoded: tudo em tokens (`primary`, `accent`, `surface`, `border`).

## Critérios de aceite

- Todas as 13 pessoas com foto aparecem com retrato na agenda e no grid.
- Keynotes visualmente inconfundíveis em relação a palestras e painéis.
- Painéis mostram todos os rostos disponíveis sem quebrar o layout em 360px de largura.
- Nenhum erro de console e nenhuma queda perceptível de performance ao rolar.
