# Substituir Instituto da Maturidade Digital pelo logo FHO

## Objetivo
Trocar o card de apoio institucional do "Instituto da Maturidade Digital" pelo logotipo da FHO (imagem enviada pelo usuário), na grade de apoiadores da edição de Araras.

## Alterações

1. **Publicar a nova imagem FHO como asset Lovable**
   - Origem: `/mnt/user-uploads/images_1.png` (logotipo FHO, teal sobre branco, 691×289)
   - Sobrescrever `src/assets/apoio-fho.png.asset.json` com o novo ponteiro (a versão atual é um arquivo antigo de 2,8 KB)

2. **Atualizar `src/data/edition-araras.ts`**
   - Reativar o import: `import logoFho from "@/assets/apoio-fho.png.asset.json";`
   - Remover o import não utilizado: `import logoInstitutoMaturidade from "@/assets/apoio-instituto-maturidade-digital.png.asset.json";`
   - No array `supporters`, substituir a entrada:
     ```ts
     { name: "Instituto da Maturidade Digital", logo: logoInstitutoMaturidade.url, light: true }
     ```
     por:
     ```ts
     { name: "FHO", logo: logoFho.url, light: true }
     ```
   - `light: true` porque o logo tem fundo branco (cartão branco na grade)

3. **Verificação**
   - `bunx tsgo --noEmit` sem erros
   - Playwright: confirmar 6 cards de apoio, logo FHO carregado, sem erros de console

## Observações
- Nenhuma alteração na edição legada (`/sp-agosto-2026`)
- A edição de Araras mantém 6 apoiadores institucionais
