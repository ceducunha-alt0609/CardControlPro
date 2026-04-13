# 💳 Aurum Pro

> Controle financeiro de cartões de crédito — Progressive Web App

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://pages.github.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-green?logo=pwa)](https://web.dev/progressive-web-apps/)
[![Offline](https://img.shields.io/badge/Offline-Supported-orange)](https://developer.chrome.com/docs/workbox/)

---

## 📱 Instalar como App (sem loja)

O Aurum Pro é um **PWA (Progressive Web App)** — funciona como app nativo no celular e no PC, sem precisar de App Store ou Play Store.

### Android (Chrome)
1. Acesse o link do app no Chrome
2. Toque no menu ⋮ → **"Adicionar à tela inicial"**
3. O ícone aparece na tela inicial e no drawer de apps

### iPhone / iPad (Safari)
1. Abra o link no Safari
2. Toque em **Compartilhar** → **"Adicionar à Tela de Início"**
3. O app aparece na tela inicial como app nativo

### Windows (Chrome / Edge)
1. Abra o link no Chrome ou Edge
2. Clique no ícone de **instalar** (⊕) na barra de endereços
3. Clique em **Instalar** — o app aparece no:
   - Menu Iniciar
   - Barra de tarefas (se fixado)
   - Área de trabalho (opcional)

### Mac (Chrome / Safari)
1. No Chrome: clique no ícone de instalação na barra de endereços
2. No Safari 17+: Arquivo → **Adicionar ao Dock**
3. O app aparece no Launchpad e pode ser fixado no Dock

### Linux (Chrome / Chromium)
1. Clique no ícone de instalação na barra de endereços
2. Confirme a instalação — o app aparece no menu de aplicativos

---

## 🚀 Subir no GitHub Pages

### Passo a passo

```bash
# 1. Clone ou crie o repositório
git init
git add .
git commit -m "feat: Aurum Pro PWA"

# 2. Crie o repositório no GitHub e faça push
git remote add origin https://github.com/SEU_USUARIO/aurum-pro.git
git branch -M main
git push -u origin main
```

### Ativar GitHub Pages
1. Vá em **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / root: **/ (root)**
4. Clique em **Save**
5. Aguarde ~2 minutos
6. Acesse: `https://SEU_USUARIO.github.io/aurum-pro/`

### Deploy automático (GitHub Actions)
O arquivo `.github/workflows/deploy.yml` já está configurado para fazer deploy automático a cada push na branch `main`.

---

## 🗂 Estrutura de Arquivos

```
aurum-pro/
├── index.html              # App principal (SPA)
├── manifest.json           # Web App Manifest (PWA)
├── sw.js                   # Service Worker (cache offline)
├── 404.html                # Redirect SPA para GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions (deploy automático)
├── icons/
│   ├── favicon.ico
│   ├── icon-16x16.png
│   ├── icon-32x32.png
│   ├── icon-48x48.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png    # Windows tile
│   ├── icon-152x152.png    # iPad
│   ├── icon-167x167.png    # iPad Pro
│   ├── icon-180x180.png    # iPhone (apple-touch-icon)
│   ├── icon-192x192.png    # Android / Chrome
│   ├── icon-256x256.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png    # Android / Chrome
│   └── icon-512x512-maskable.png  # Android adaptive icon
└── screenshots/
    ├── screenshot-mobile.png    # 390x844
    ├── screenshot-desktop.png  # 1280x800
    └── splash-*.png            # iOS splash screens
```

---

## ⚙️ Funcionalidades PWA

| Recurso | Status |
|---|---|
| Instalável (Add to Home Screen) | ✅ |
| Funciona offline | ✅ |
| Ícone área de trabalho | ✅ |
| Barra de tarefas (Windows) | ✅ |
| Menu Iniciar (Windows) | ✅ |
| Splash screen (iOS) | ✅ |
| Tema adaptativo (dark) | ✅ |
| Adaptive icon (Android) | ✅ |
| Window Controls Overlay | ✅ |
| Shortcuts de app | ✅ |

---

## 🔧 Desenvolvimento local

```bash
# Servidor local simples (Python)
python3 -m http.server 8080

# Ou com Node.js
npx serve .

# Acesse: http://localhost:8080
```

> ⚠️ O Service Worker só funciona em HTTPS ou `localhost`.

---

## 📄 Licença

Privado — todos os direitos reservados.
