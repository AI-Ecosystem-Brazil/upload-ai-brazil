# Redesign de alto impacto e otimização — Upload AI Brasil Araras

## Objetivo
Transformar a página em uma experiência mais marcante, premium e fácil de explorar, preservando todas as informações reais, fotos, links, programação e a página legada. A direção visual será **preto profundo + lima elétrica + verde**, com **Sora/Manrope** e composição em **mosaico de conexões**.

## Direção visual
- Evoluir o fundo navy atual para preto profundo, usando lima como sinal de ação e verde como apoio; manter dourado exclusivamente para reconhecimento e Keynote Speakers.
- Criar uma linguagem visual inspirada em circuitos conectados: linhas finas, módulos assimétricos e enquadramentos que relacionem pessoas, cidade, programação e marcas.
- Redesenhar o destaque inicial como um mosaico de alto impacto, com mensagem, selo da arara, data/local, contagem regressiva e ação principal em uma composição única e mais curta.
- Reorganizar “Araras no centro da inovação” em módulos editoriais que comuniquem relevância nacional, impacto regional e caráter prático sem inventar números ou informações.
- Usar contraste, escala e espaço para reduzir a sensação de página longa e uniforme.

## Pessoas e reconhecimento
- Dar aos três Keynote Speakers o maior peso visual, com retratos amplos, moldura dourada refinada e identificação imediata.
- Organizar palestrantes, painelistas, lideranças e membros em mosaicos com tamanhos proporcionais à importância, sem perder legibilidade.
- Melhorar recorte, proporção e enquadramento das fotos; manter placeholders consistentes para perfis ainda sem imagem.
- Preservar o reconhecimento especial de Jairo Segre e a identificação de Maurício Conte, sem confundir papéis com a categoria Keynote.

## Navegação e programação
- Refinar a navegação fixa com melhor indicação de seção, acesso rápido à inscrição e menu móvel mais direto.
- Criar atalhos visuais para Keynotes, programação, local e inscrição no primeiro trecho da página.
- Tornar as três trilhas da programação mais fáceis de comparar, com horários mais evidentes, filtros mais claros e cards próprios para keynote, palestra, painel, laboratório, intervalo e atividade a definir.
- Melhorar a leitura de painéis com vários participantes por meio de retratos organizados e papéis claramente associados.
- Manter WhatsApp apenas em Araras, com presença discreta e acessível.

## Performance e experiência percebida
- Auditar os assets realmente entregues pelos arquivos `.asset.json` e otimizar dimensões, prioridade e carregamento das imagens.
- Priorizar somente a imagem principal acima da dobra; manter fotos, marcas e mapa em carregamento progressivo com dimensões reservadas para evitar saltos.
- Reduzir efeitos caros de desfoque, transparência e brilho; preferir transformações e opacidade aceleradas.
- Aplicar contenção de renderização nas áreas longas abaixo da dobra quando seguro, acelerando a primeira exibição em mobile.
- Evitar dependências novas para animação; usar CSS curto e intencional, respeitando `prefers-reduced-motion`.
- Revisar fontes, ícones e código compartilhado para evitar downloads ou execução desnecessários.

## Mobile e acessibilidade
- Reorganizar o mosaico em uma sequência editorial clara para telas pequenas, sem rolagem lateral ou textos comprimidos.
- Garantir áreas de toque confortáveis, foco visível, contraste adequado e títulos semanticamente organizados.
- Preservar feedback imediato em filtros, menu, inscrição, mapa e botões de apoio à viagem.
- Manter o CTA móvel fixo sem encobrir conteúdo ou competir com o botão de WhatsApp.

## Preservação de escopo
- A edição `/sp-agosto-2026` continuará funcional e visualmente estável; mudanças compartilhadas serão condicionadas para não alterar sua identidade sem intenção.
- Nenhum conteúdo, horário, nome, patrocinador ou link será inventado ou removido.
- A arquitetura atual em TanStack Start e os dados existentes serão preservados.

## Validação e critérios de aceite
- Página de Araras com identidade preto/lima consistente, mosaico responsivo e hierarquia visual clara para keynotes, participantes e agenda.
- Navegação por seções funcional no desktop e mobile, inclusive teclado e redução de movimento.
- Sem rolagem horizontal, sobreposições, imagens quebradas ou erros no navegador.
- Imagens abaixo da dobra carregadas progressivamente e elemento principal priorizado sem mudanças bruscas de layout.
- Verificação visual em desktop e mobile, medição de carregamento inicial e checagem da edição legada.
