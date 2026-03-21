# Aurum Pro — Gestão de Cartões de Crédito

> Controle seus cartões com inteligência.

[![Version](https://img.shields.io/badge/versão-1.2.0-gold)](#)
[![PWA](https://img.shields.io/badge/PWA-instalável-blue)](#)
[![Offline](https://img.shields.io/badge/offline-parcial-green)](#)

---

## ✨ Funcionalidades

- 💳 **Múltiplos cartões** — gerencie todos os seus cartões num só lugar
- 📋 **Fatura detalhada** — compras, pagamentos, saldo, fechamento e vencimento
- 📊 **Gráficos** — histórico real + projeção de 6 meses
- 🔒 **PIN + Biometria** — lock screen com autenticação segura
- 🔐 **Criptografia AES-256** — dados cifrados com chave derivada do PIN
- 📆 **Parcelas futuras** — visualize compromissos nos próximos meses
- 🎯 **Orçamento por categoria** — defina tetos de gastos
- 💸 **Cashback** — acompanhe o retorno de cada cartão
- 📄 **Exportar** — PDF, Excel, CSV, WhatsApp, e-mail
- ☁️ **Sync na nuvem** — backup via JSONbin
- 🔔 **Notificações** — alertas de vencimento e fechamento
- 🎨 **Temas** — claro, escuro e automático com cores customizáveis
- 📱 **PWA instalável** — funciona como app no celular e desktop
- ↩️ **Undo** — desfaça ações com Ctrl+Z

---

## 🚀 Como usar

### Online (GitHub Pages)
Acesse diretamente pelo browser — não precisa instalar nada.

### Instalar como PWA
1. Abra o app no Chrome/Edge
2. Clique no ícone de instalação na barra de endereços
3. O app fica disponível como ícone no desktop/celular

### Arquivo local
Baixe o `index.html` e abra diretamente no browser.

---

## 🛠️ Tecnologias

| Biblioteca | Versão | Uso |
|-----------|--------|-----|
| Chart.js | 4.4.1 | Gráficos |
| jsPDF | 2.5.1 | Exportar PDF |
| jsPDF-AutoTable | 3.5.31 | Tabelas no PDF |
| SheetJS (XLSX) | 0.18.5 | Exportar Excel |
| PDF.js | 2.16.105 | Importar faturas |
| Web Crypto API | nativo | Criptografia AES-256 |

---

## 🔐 Segurança

- PIN com hash **SHA-256** (Web Crypto API)
- Dados cifrados com **AES-256-GCM**
- Chave derivada via **PBKDF2** (100.000 iterações)
- Chave apenas em memória — nunca persiste no disco
- Dados locais — nada sai do dispositivo sem seu consentimento

---

## 📁 Estrutura

```
aurum-pro/
└── index.html     # App completo (single-file)
```

App 100% contido num único arquivo HTML — sem build, sem dependências locais.

---

## 📝 Changelog

### v1.2.0 (2026-03-21)
- Painel de fatura redesenhado (grid financeiro + barra inteligente + timeline)
- Gráficos com projeção de 6 meses
- Resumo do dia melhorado (totais por data de vencimento)
- Criptografia AES-256-GCM nos dados
- PIN migrado para SHA-256
- Empty states com ilustrações SVG
- Micro-animações de transição entre abas
- Configurações reorganizáveis por drag & drop
- Tema claro refinado
- Correção de bugs de data (daysUntilDue, invoiceMonth)
- Splash screen corrigido para file:// e web

### v1.0.0
- Lançamento inicial

---

## 📄 Licença

Uso pessoal. Todos os direitos reservados.
