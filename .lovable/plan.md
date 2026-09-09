# Ajustes na edição de Araras

Quatro mudanças na página nova (Araras) e uma pendência de conteúdo.

## 1. Nova imagem em destaque

O selo da arara em circuito que você enviou entra no lugar do selo atual no topo — **apenas na página de Araras**. A página legado (edição do InovaBRA) continua com o selo atual.

A imagem é publicada no CDN do projeto e o topo passa a receber o selo por edição, em vez de usar sempre o mesmo. Mantém o mesmo enquadramento circular, borda e brilho já existentes.

## 2. Formatos das atividades

O bloco "Formatos das atividades" passa a listar exatamente:

- Palestra de 30 minutos
- Painel de 60 minutos com 4 participantes
- Oficinas práticas de 90 a 120 minutos

## 3. Remoção do box "Como o perfil é avaliado"

O card de critérios sai da seção Call for Papers, que passa a ocupar a largura toda com o bloco de formatos. O texto de cadastro obrigatório em ai.eco.br é preservado, movido para baixo dos formatos, junto ao botão "Quero palestrar".

## 4. Botão de WhatsApp (só em Araras)

Botão flutuante fixo no canto inferior direito, com ícone do WhatsApp, apontando para `https://wa.me/5519981034103`, apresentado como canal de suporte e dúvidas sobre o evento.

- Visível apenas na página de Araras; não aparece na página legado.
- No mobile fica acima da barra fixa de inscrição, sem cobrir o botão de RSVP.
- Rótulo acessível ("Tirar dúvidas sobre o evento no WhatsApp"), foco visível por teclado e animação de entrada suave que respeita `prefers-reduced-motion`.

## 5. Programação — pendente

Ainda não consigo abrir a planilha: ela está no Drive como arquivo Excel, e o acesso que tenho lê apenas planilhas nativas do Google. Assim que você converter (Arquivo > Salvar como Planilhas Google) e mandar o novo link, substituo a grade completa das três trilhas pelos horários, títulos e participantes reais, mantendo o formato atual dos cards (palestra, painel, keynote, oficina, intervalo) e removendo os blocos "a definir" que forem preenchidos.

## Detalhes técnicos

- `src/data/types.ts`: campo opcional `sealImage` em `Edition`; `Cfp.criteria` vira opcional.
- `src/data/edition-araras.ts`: novo selo, novos `formats`, remoção de `criteria`.
- `src/components/site/hero.tsx`: usa `edition.sealImage ?? seloAsset.url`.
- `src/components/site/call-for-papers.tsx`: layout de coluna única quando não há critérios.
- Novo `src/components/site/whatsapp-fab.tsx`, renderizado só em `src/routes/index.tsx`.

## Critérios de aceite

- Topo de Araras com o novo selo; legado inalterado.
- Formatos exatamente conforme a lista acima; nenhum box de critérios na página.
- Botão de WhatsApp visível em toda a rolagem de `/`, ausente em `/sp-agosto-2026`, sem sobrepor o CTA fixo no mobile.
- Nada quebrado a partir de 360px.
