# Melhoria de UX, navegação e apresentação visual

## Objetivo
Tornar a página de Araras mais rápida de percorrer, mais clara no celular e visualmente mais consistente, preservando a identidade navy, verde-neon e dourada já estabelecida e sem alterar as informações do evento.

## Melhorias planejadas

### 1. Navegação mais rápida
- Transformar o topo em uma navegação compacta e fixa após a rolagem, mantendo logo, atalhos e inscrição sempre acessíveis sem ocupar espaço excessivo.
- Criar menu móvel acessível com acesso direto a **Palestrantes**, **Programação**, **Local**, **Quero palestrar**, **Patrocinadores** e **Edição anterior**.
- Corrigir a ordem dos atalhos para acompanhar a ordem real das seções.
- Adicionar indicação visual da seção atual durante a rolagem e manter foco visível para navegação por teclado.

### 2. Primeiro bloco mais objetivo
- Refinar proporções, espaços e distribuição das informações para a mensagem principal, data, local e inscrição serem compreendidos mais rapidamente.
- Reduzir a altura inicial no celular e reposicionar o selo da edição para que ele apareça sem empurrar o conteúdo principal para baixo.
- Organizar data, horário, local, formato e organização em uma faixa mais escaneável.
- Evitar competição entre o botão principal, a contagem regressiva, o WhatsApp e a barra fixa móvel.

### 3. Fluxo e ritmo da página
- Criar alternância sutil de superfícies entre as seções para separar conteúdo sem transformar cada bloco em um card.
- Reduzir espaços verticais excessivos, sobretudo no celular, mantendo respiro editorial no desktop.
- Padronizar títulos, textos introdutórios, legendas e distâncias entre grupos.
- Incluir um atalho discreto de retorno ao topo após o visitante avançar pela página.

### 4. Vitrine de pessoas
- Melhorar consistência de proporção, enquadramento, contraste e alinhamento dos retratos.
- Manter o dourado para destaques e o verde-neon para palestrantes, com brilho mais controlado para não competir com os nomes.
- Reorganizar liderança regional e apoio para evitar vazios e diferenças bruscas de escala.
- No celular, usar uma composição compacta e confortável de percorrer, sem reduzir nomes ou retratos a tamanhos difíceis de reconhecer.
- Manter placeholders acessíveis quando uma foto ainda não estiver disponível.

### 5. Programação mais fácil de consultar
- Transformar trilhas e períodos em controles horizontais compactos no celular, evitando quebras irregulares de linha.
- Manter os seletores visíveis no início da programação durante a consulta, sem cobrir o conteúdo.
- Exibir um resumo da trilha selecionada e a quantidade de atividades disponíveis.
- Compactar atividades “a definir” e intervalos para reduzir a extensão da página, preservando destaque maior para sessões confirmadas e keynotes.
- Implementar interação de abas completa por teclado, com painéis e anúncios adequados para leitores de tela.

### 6. Local, viagem e conversão
- Unificar endereço e mapa em uma apresentação mais direta, com ação para abrir a rota no Google Maps.
- Diferenciar visualmente **Onde hospedar** e **Caronas e Caravanas** com ícones e textos curtos, mantendo os destinos atuais.
- Refinar o chamado para palestrantes para que retratos, mensagem e botão tenham hierarquia mais clara.
- Consolidar as ações flutuantes no celular: inscrição permanece prioritária e o WhatsApp ganha posição segura, sem sobreposição.

### 7. Patrocinadores e rodapé
- Melhorar equilíbrio dos logotipos com áreas visuais consistentes, contraste adequado e estados de foco/hover.
- Diferenciar melhor marcas confirmadas de vagas abertas.
- Tornar o rodapé uma navegação de encerramento útil, com atalhos para as principais seções e para a edição anterior.

### 8. Performance e acessibilidade
- Ajustar a revelação progressiva para nunca deixar conteúdo invisível ou criar grandes áreas vazias durante rolagens rápidas, capturas ou ambientes com observação limitada.
- Manter carregamento tardio de fotos e mapa, adicionando dimensões estáveis para evitar saltos visuais.
- Reduzir trabalho visual fora da tela e preservar animações apenas quando comunicarem estado ou hierarquia.
- Respeitar `prefers-reduced-motion`, áreas de toque mínimas, contraste, foco visível e navegação por teclado.
- Preservar a edição legada de São Paulo; melhorias compartilhadas serão aplicadas apenas quando não alterarem sua apresentação editorial.

## Detalhes técnicos
- Criar uma navegação compartilhada orientada pelos IDs reais das seções, com menu móvel e observação da seção ativa.
- Usar os tokens semânticos existentes e ampliar somente papéis necessários de superfície, navegação e sobreposição.
- Evoluir os componentes atuais de Hero, Section, programação, pessoas, local, patrocinadores e rodapé sem duplicar páginas.
- Evitar novas dependências pesadas; usar React, CSS e os ícones já disponíveis.

## Critérios de aceite
- Em 390 px, todas as seções são acessíveis pelo menu e nenhum controle se sobrepõe ao WhatsApp ou à inscrição fixa.
- A página não apresenta rolagem horizontal, texto cortado, grandes vazios inesperados ou conteúdo permanentemente oculto.
- Trilha e período podem ser alterados por toque e teclado, com estado ativo claramente perceptível.
- O conteúdo prioritário aparece mais cedo no celular e a programação ocupa menos altura sem perder informação.
- Fotos, logos e mapa carregam sob demanda sem causar mudanças bruscas de layout.
- Contraste, foco, movimento reduzido e áreas de toque passam por verificação.
- Desktop e celular são validados visualmente; não há imagens quebradas nem erros no navegador.
- A identidade e os dados atuais do evento permanecem preservados.
