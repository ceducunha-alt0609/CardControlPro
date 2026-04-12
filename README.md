# Aurum Pro 💳

**Controle financeiro de cartões de crédito — PWA instalável no PC e celular.**

---

## 🚀 Deploy no GitHub Pages (passo a passo)

### 1. Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e clique em **New repository**
2. Nomeie como `aurum-pro` (ou qualquer nome)
3. Deixe **público** e clique em **Create repository**

### 2. Subir os arquivos

Pelo site do GitHub (mais simples):
1. Na página do repositório vazio, clique em **uploading an existing file**
2. Arraste **todos os arquivos e pastas** desta pasta
3. Clique em **Commit changes**

Ou via terminal (Git):
```bash
git init
git add .
git commit -m "feat: Aurum Pro v1.1"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/aurum-pro.git
git push -u origin main
```

### 3. Ativar o GitHub Pages

1. No repositório, vá em **Settings → Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Branch: `main` | Pasta: `/ (root)`
4. Clique em **Save**
5. Aguarde ~1 min e acesse: `https://SEU_USUARIO.github.io/aurum-pro`

---

## 📱 Instalar no celular (iOS e Android)

### Android (Chrome / Edge)
1. Abra o link do GitHub Pages no Chrome
2. Aguarde o banner **"Adicionar à tela inicial"** aparecer, **ou**
3. Toque nos 3 pontos (⋮) → **Instalar app**
4. O Aurum Pro aparecerá como app nativo na sua tela

### iPhone / iPad (Safari)
1. Abra o link no **Safari** (obrigatório para PWA no iOS)
2. Toque em **Compartilhar** (ícone de caixa com seta ↑)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
4. Confirme o nome e toque em **Adicionar**
5. O app aparecerá na home com ícone e abre sem barra do browser

---

## 💻 Instalar no PC (Windows, Mac, Linux)

### Chrome / Edge
1. Abra o link no Chrome ou Edge
2. Na barra de endereços, clique no ícone de **instalar** (monitor com seta ↓), **ou**
3. Menu (⋮) → **Instalar Aurum Pro**
4. Clique em **Instalar** na caixa de diálogo
5. O app abre em janela própria, sem barra do browser, como app nativo

---

## 📂 Estrutura de arquivos

```
aurum-pro/
├── index.html                     ← App principal (tudo em um arquivo)
├── manifest.json                  ← Configuração PWA (nome, ícones, cores)
├── sw.js                          ← Service Worker (cache offline)
├── 404.html                       ← Redirecionamento GitHub Pages
├── icons/
│   ├── favicon.ico                ← Favicon (16/32/48px)
│   ├── apple-touch-icon.png       ← Ícone iOS (180×180)
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png           ← Ícone Android padrão
│   ├── icon-384x384.png
│   └── icon-512x512.png           ← Ícone PWA maskable
└── screenshots/
    ├── screenshot-mobile-dark.png  ← Preview store (mobile escuro)
    ├── screenshot-mobile-light.png ← Preview store (mobile claro)
    ├── screenshot-desktop.png      ← Preview store (desktop)
    ├── splash-640x1136.png         ← Splash iPhone SE
    ├── splash-750x1334.png         ← Splash iPhone 8
    ├── splash-828x1792.png         ← Splash iPhone XR
    ├── splash-1125x2436.png        ← Splash iPhone X/11 Pro
    ├── splash-1170x2532.png        ← Splash iPhone 12/13
    ├── splash-1284x2778.png        ← Splash iPhone 12/13 Pro Max
    ├── splash-1536x2048.png        ← Splash iPad
    └── splash-2048x2732.png        ← Splash iPad Pro
```

---

## ✨ Funcionalidades

- 💳 Múltiplos cartões de crédito com limites e vencimentos
- 📊 Dashboard com resumo financeiro mensal
- 📋 Histórico completo com filtros avançados
- 🖨️ Relatório de compras para impressão (A4)
- 🌙 Tema claro e escuro
- 📱 100% responsivo — mobile e desktop
- 🔒 Dados salvos **localmente** no seu dispositivo (sem servidor)
- ✈️ Funciona **offline** após a primeira carga

---

## 🛡️ Privacidade

Todos os dados ficam armazenados exclusivamente no `localStorage` do seu navegador. Nenhuma informação é enviada para servidores externos.

---

*Aurum Pro — Desenvolvido com ❤️*
