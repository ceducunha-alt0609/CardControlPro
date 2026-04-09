# 💳 Aurum Pro

> Controle financeiro de cartões de crédito — elegante, rápido e offline-first.

![Aurum Pro](https://img.shields.io/badge/PWA-Ready-c8922a?style=flat-square&logo=pwa)
![Mobile](https://img.shields.io/badge/Mobile-Otimizado-4a8be0?style=flat-square)
![Offline](https://img.shields.io/badge/Offline-Suportado-4acf8a?style=flat-square)

---

## 🚀 Deploy no GitHub Pages

1. Faça **fork** deste repositório
2. Vá em **Settings → Pages**
3. Em **Source**, selecione `main` branch → pasta `/` (root)
4. Clique **Save**
5. Acesse em `https://seu-usuario.github.io/aurum-pro/`

---

## 📁 Estrutura

```
aurum-pro/
├── index.html        ← App completo (single-file)
├── manifest.json     ← PWA manifest
├── sw.js             ← Service Worker (offline + cache)
├── README.md         ← Este arquivo
└── icons/
    ├── favicon.ico
    ├── icon-96x96.png
    ├── icon-192x192.png
    └── icon-512x512.png
```

---

## 📱 Instalar como App (PWA)

### Android (Chrome)
1. Abra o link no Chrome
2. Toque nos **⋮** (três pontos)
3. Selecione **"Adicionar à tela inicial"**

### iPhone (Safari)
1. Abra o link no Safari
2. Toque em **Compartilhar** (ícone quadrado com seta)
3. Selecione **"Adicionar à Tela de Início"**

### Desktop (Chrome / Edge)
1. Abra o link
2. Clique no ícone **⊕** na barra de endereço
3. Clique em **"Instalar"**

---

## ✨ Funcionalidades

- 💳 Múltiplos cartões de crédito
- 📊 Dashboard com gráficos e análises
- 🔔 Alertas de vencimento e limite
- ☁️ Sincronização via JSONbin.io
- 🎨 Temas claro/escuro + personalização de fontes e cores
- 🔒 Bloqueio por PIN / biometria
- 📄 Exportação de fatura em PDF
- 📱 Funciona offline após primeira visita

---

## 🛠️ Uso Local

Basta abrir o `index.html` diretamente no navegador — não precisa de servidor.

Para sincronização entre dispositivos, crie uma conta gratuita em [jsonbin.io](https://jsonbin.io) e configure em **Configurações → Sincronização**.

---

## 🔒 Privacidade

Todos os dados ficam **100% no seu dispositivo** (localStorage). Nenhum dado é enviado para servidores externos, exceto se você configurar voluntariamente a sincronização via JSONbin.

---

## 📄 Licença

Uso pessoal. Todos os direitos reservados.
