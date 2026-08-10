# Atualização de fotos e do painel das 14h30

## O que muda

**Fotos novas/substituídas**
- Daniel Ramos: retrato atual substituído pelo novo arquivo (`daniel-ramos.avif`).
- Rafael Soares (painelista ABIACOM, painel das 09h30): ganha retrato.
- Marcos Oliveira e Marco Riveiros (painel das 14h30): ganham retrato.
- Tiene Colins e Luiz Tibiriça: entram como novos painelistas das 14h30, com retrato.
- Marcio Chleba (19h40): ganha retrato — usando a foto do homem de camisa branca (`watermarked_img_...jpg`).

**Painel das 14h30 "Juntos somos mais fortes"**
Passa de 2 para 4 participantes: Marcos Oliveira (AI Festival), Marco Riveiros (Instituto Amigu), Tiene Colins e Luiz Tibiriça. O stack de avatares sobrepostos e os chips de nome já suportam 4 rostos sem quebra em mobile. A descrição do painel é ajustada para não citar apenas dois nomes.

Os dois novos nomes entram sem link de perfil (chip estático) e sem organização, a menos que você informe vínculo/perfil.

## Detalhes técnicos

- Upload das 6 imagens via `lovable-assets create` a partir de `/mnt/user-uploads/`, gerando um `.asset.json` por foto em `src/assets/`.
- `src/data/event.ts`: novos imports de pointer, entradas no mapa `PHOTOS` (chaves exatamente iguais aos nomes usados na agenda), substituição da URL de Daniel Ramos e inclusão dos dois participantes no slot das 14h30.
- Nenhuma mudança de componente: agenda e grid de palestrantes resolvem foto por `photoOf(name)`.
- Verificação: typecheck e screenshot do painel das 14h30 e dos cards afetados.

## Confirmações

- `watermarked_img_...jpg` é o Marcio Chleba? Se for outra pessoa, me diga o nome.
- Tiene Colins e Luiz Tibiriça têm organização e link de perfil no ai.eco.br?
