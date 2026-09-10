# Fotos de membros e programação + remoção de Lucas Garcia

## Objetivo
Completar os cards de membros, participações e programação da edição Araras com as 6 fotos anexadas e remover as referências a Lucas Garcia.

## Mapeamento das fotos (uploads → pessoas)
- `Azarite.jpeg` → **Azarite** (painel "Uso inteligente de dados", 10h00)
- `image.png` (última anexada, homem de camisa branca) → **Marcio Chleba** (substitui a foto atual)
- `Tiago_Souk.png` → **Tiago Zouk** (palestra 15h30)
- `Elisangela_Rosa.png` → **Elisangela Rosa** (painel 14h30 + organização)
- `GUTA_raeder.png` → **Guta Raeder** (encerramento 17h30)
- `André_Magno.jpeg` → **André Magno** (palestra 16h30)

As fotos já vêm recortadas com fundo transparente/neutro — boa qualidade para os cards.

## Remoção de Lucas Garcia
- Painel das 16h00 (Araras): remover a entrada "Lucas Garcia · Painelista ABRADI" e manter "Participante a confirmar" com placeholder; Cilene Danta segue como mediadora.
- Remover a foto "Lucas Garcia" do mapa `PHOTOS`.
- A edição legada `/sp-agosto-2026` é um registro histórico do evento realizado — a menção a Lucas Garcia lá será mantida (ele participou de fato). Se quiser remover também da página legada, é só avisar.

## Detalhes técnicos
1. Publicar as 6 fotos via `lovable-assets` a partir de `/mnt/user-uploads/` (novos `.asset.json` em `src/assets/`).
2. `src/data/people.ts`: adicionar as 6 entradas no mapa `PHOTOS` (Marcio Chleba passa a apontar para a nova foto); remover import e entrada de Lucas Garcia.
3. `src/data/edition-araras.ts`: remover Lucas Garcia do painel das 16h00 (placeholder "Participante a confirmar").
4. A vitrine "Membros e participações" e a agenda passam a exibir as fotos automaticamente via `photoOf()` — nenhum componente precisa mudar.
5. Verificação: typecheck + Playwright (fotos carregando nos cards e na agenda; ausência de Lucas Garcia em Araras; rota legada intacta).

## Critérios de aceite
- 6 pessoas com foto real nos cards e na agenda de Araras.
- Nenhuma referência a Lucas Garcia na página de Araras (`/`).
- Página legada `/sp-agosto-2026` sem alterações visuais.
- Typecheck limpo e preview sem erros de console.
