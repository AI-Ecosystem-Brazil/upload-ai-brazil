# Atualização da página Upload AI Brasil Araras

## Objetivo
Reorganizar a página de Araras para destacar a chegada do movimento à cidade, apresentar as pessoas por nível de protagonismo, atualizar organização e localização e transformar o chamado para palestrantes em uma peça mais inspiradora e visual.

## Alterações planejadas

### 1. Destaque superior
- Inserir a mensagem: **“O maior movimento de Inteligência Artificial do Brasil chegou em Araras!”** como chamada de alto impacto no topo.
- Preservar a identidade visual atual, o selo da arara, data, local, inscrição e acesso à edição anterior.
- Ajustar o texto complementar para evitar repetição e manter boa leitura em celular.

### 2. Nova vitrine de pessoas
- Remover por completo a seção atual **“O movimento”**, incluindo seus pilares e indicadores.
- Substituí-la por uma composição editorial de retratos, separada em quatro grupos:
  - **Palestrantes de destaque**, com moldura dourada e brilho animado: André Almeida, Marco Riveiros, Aline Bocardo, Elen Melo e Ana Barros.
  - **Palestrantes**, com moldura verde-neon: Pedro Chiamulera, Juliano Kimura e Rodrigo Righetti.
  - **Destaque especial**, com moldura dourada e animação: Jairo Segre, apresentado como “Embaixador da Inteligência Artificial na região”, e Maurício Conte, como “Co-produção”.
  - **Apoio**: Tiene Collins, Ana Garms, Carolina da Luz, Gabriel Virissimo, Cilene Danta, Deize Andrade, Guta Raeder e Tiago Zouk.
- Reutilizar os retratos já disponíveis nas edições anteriores.
- Exibir placeholders refinados com iniciais para quem ainda não tiver foto.
- Normalizar apenas o vínculo técnico de nomes já existentes — por exemplo, “Tiene Collins” poderá reutilizar o retrato atualmente cadastrado como “Tiene Colins” — sem alterar o nome solicitado na interface.
- Criar hierarquia visual clara sem transformar todos os grupos no mesmo tipo de card.

### 3. Organização do evento
- Atualizar a organização para **Jairo Segre, Elisangela Rosa**.
- Exibir essa informação nos pontos relevantes da página e nos dados estruturados do evento.

### 4. Local e como chegar
- Atualizar o endereço para: **Av. Dr. Maximiliano Baruto, 500 - Jardim Universitario, Araras - SP, 13607-339**.
- Atualizar o mapa incorporado e o texto de “Como chegar” para apontarem ao endereço correto.
- Manter carregamento sob demanda do mapa para preservar velocidade no celular.
- Incluir dois botões de apoio à viagem:
  - **Onde hospedar** — “Encontre hotéis ou AirBNB”.
  - **Caronas e Caravanas** — “Entre nos grupos e bate-papo para organizar sua vinda para Araras”.
- Conforme definido, ambos direcionarão ao mesmo link dos demais CTAs de inscrição.

### 5. Chamado para palestrantes e painelistas
- Remover “Formatos das atividades”, a lista de formatos e as descrições atuais.
- Criar uma composição visual com retratos disponíveis dos palestrantes, usando uma moldura especial coerente com os destaques da página.
- Substituir o conteúdo por uma chamada inspiradora sobre compartilhar conhecimento transformador em Inteligência Artificial.
- Dar protagonismo ao botão **“Quero palestrar”**, com maior contraste, presença visual e feedback imediato.
- Manter o destino atual de inscrição.

### 6. Movimento e acessibilidade
- Criar brilho dourado contínuo e sutil usando apenas transformações e opacidade, sem deslocar o conteúdo.
- Desativar a animação quando o visitante preferir movimento reduzido.
- Garantir contraste, foco visível, textos alternativos, leitura correta por tecnologias assistivas e placeholders acessíveis.

## Detalhes técnicos
- Os grupos de pessoas serão modelados separadamente da programação, evitando que horários ainda em definição controlem quem aparece na vitrine.
- O componente de palestrantes será ampliado com variantes visuais sem afetar a página legada de São Paulo.
- A seção de chamada será específica por edição ou orientada por dados, preservando o conteúdo antigo onde necessário.
- Serão criados tokens semânticos para dourado e brilho; não haverá cores soltas nos componentes.
- A renderização será determinística entre servidor e navegador para evitar divergências visuais na hidratação.

## Validação e critérios de aceite
- A página de Araras mostra a nova mensagem no topo e não exibe mais “O movimento”.
- Todas as pessoas solicitadas aparecem no grupo correto, com retrato existente ou placeholder.
- Molduras douradas e verde-neon têm hierarquia perceptível, animação discreta e alternativa sem movimento.
- Organização, endereço e mapa exibem os novos dados.
- Os dois botões de viagem e “Quero palestrar” abrem o mesmo destino oficial dos CTAs.
- O chamado não mostra formatos nem descrições das atividades.
- A edição legada permanece visual e editorialmente inalterada.
- Verificação em desktop e celular, sem imagens quebradas, sobreposições ou erros no navegador.
