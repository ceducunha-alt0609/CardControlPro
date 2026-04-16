# Aurum Pro — pacote para GitHub Pages e instalação no mobile

## Estrutura
- `index.html` — app principal
- `manifest.json` — manifesto PWA
- `sw.js` — service worker básico
- `icons/` — ícones do app
- `screenshots/` — splash screens usadas no iPhone/iPad
- `404.html` — redireciona para `index.html` em hospedagem estática

## Como subir no GitHub
1. Crie um repositório novo no GitHub.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório.
3. Em **Settings → Pages**, habilite o GitHub Pages na branch principal (`main`), pasta `/root`.
4. Abra a URL gerada pelo GitHub Pages no navegador.

## Como instalar no celular
### Android (Chrome/Edge)
1. Abra a URL do GitHub Pages.
2. Toque no menu do navegador.
3. Escolha **Instalar app** ou **Adicionar à tela inicial**.

### iPhone/iPad (Safari)
1. Abra a URL no Safari.
2. Toque em **Compartilhar**.
3. Escolha **Adicionar à Tela de Início**.

## Observações
- O app continua usando armazenamento local no navegador.
- Para melhor estabilidade, mantenha o repositório publicado em HTTPS (GitHub Pages já faz isso).
- Se trocar o nome da branch, ajuste o Pages e o fluxo de GitHub Sync dentro do app.
