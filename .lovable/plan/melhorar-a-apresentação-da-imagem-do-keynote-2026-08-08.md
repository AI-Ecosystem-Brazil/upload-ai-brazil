# Melhorar a apresentação da imagem do keynote

## Problema atual

No desktop, o card de keynote reserva uma coluna larga à esquerda, mas o retrato aparece pequeno, ancorado no canto inferior, deixando um grande vazio verde acima. O recorte não acompanha a altura do card (que varia com o tamanho do texto), então cada keynote fica desalinhado. No mobile, a foto fica em uma faixa quadrada com muito ar em volta.

## O que será feito

1. **Retrato preenchendo a coluna**
   - A coluna do retrato passa a ter altura total do card, com a imagem escalada para ocupar toda a área (`object-cover`, foco no topo/rosto), ancorada na base.
   - Largura fixa e previsível no desktop (aprox. 300-340px), garantindo que todos os keynotes tenham o mesmo enquadramento independentemente do tamanho do resumo.

2. **Tratamento visual do recorte**
   - Halo radial em tom da marca atrás do retrato, alinhado ao centro do rosto, para dar profundidade sem parecer fundo chapado.
   - Máscara de esmaecimento na borda direita e na base, para o retrato se fundir no card em vez de terminar em corte seco.
   - Sombra projetada suave mantida para separar o recorte do fundo.

3. **Hierarquia e enquadramento**
   - Altura mínima do card para que retratos curtos não fiquem espremidos e o vazio superior desapareça.
   - Selo "Keynote de abertura" reposicionado sobre a base do retrato (canto), reforçando a leitura de destaque.

4. **Mobile**
   - Retrato em faixa panorâmica com foco no rosto e gradiente de transição para o bloco de texto, ocupando 100% da largura sem molduras internas.

5. **Movimento e acessibilidade**
   - Micro-parallax/zoom sutil no retrato ao entrar na viewport, apenas com `transform`/`opacity`.
   - Desativado sob `prefers-reduced-motion`.
   - `alt` descritivo por palestrante; sem perda de contraste do texto.

## Detalhes técnicos

- Arquivo alterado: `src/components/site/agenda-timeline.tsx` (apenas o `KeynoteCard`).
- Tokens de cor e gradientes vêm de `src/styles.css`; nenhuma cor literal nova em componente.
- Sem mudança em dados (`src/data/event.ts`) nem nos demais formatos de card (palestra e painel).

## Critérios de aceite

- Nenhum keynote apresenta área vazia acima do retrato no desktop.
- Todos os keynotes têm o mesmo enquadramento e altura de retrato.
- O recorte se funde ao card (sem borda dura) nos temas navy/lima.
- Mobile mostra o rosto centralizado sem corte de topo.
- Animação respeita `prefers-reduced-motion`.
