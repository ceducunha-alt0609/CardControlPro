/* ═══════════════════════════════════════════════════════════════
   Aurum Pro — Service Worker
   Estratégia: Cache-First (app funciona 100% offline após 1ª carga)
   ═══════════════════════════════════════════════════════════════ */

const APP_VERSION  = 'aurum-pro-v1.1';
const CACHE_NAME   = APP_VERSION;

/* Arquivos essenciais que ficam em cache na instalação */
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.ico',
];

/* ── Install: pré-carrega recursos essenciais ── */
self.addEventListener('install', event => {
  console.log('[SW] Instalando versão:', APP_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => {
        console.log('[SW] Cache inicial preenchido');
        return self.skipWaiting();  // Ativa imediatamente
      })
  );
});

/* ── Activate: remove caches antigos ── */
self.addEventListener('activate', event => {
  console.log('[SW] Ativando versão:', APP_VERSION);
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Removendo cache antigo:', key);
            return caches.delete(key);
          })
      )
    ).then(() => {
      console.log('[SW] Pronto — controlando todos os clientes');
      return self.clients.claim();
    })
  );
});

/* ── Fetch: Cache-First com fallback para rede ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Ignora requisições que não sejam do próprio domínio
  if (url.origin !== location.origin) return;

  // Ignora métodos não-GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Retorna cache e atualiza em background (stale-while-revalidate)
        const fetchPromise = fetch(event.request)
          .then(networkResp => {
            if (networkResp && networkResp.status === 200) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, networkResp.clone()));
            }
            return networkResp;
          })
          .catch(() => { /* offline — cache já foi retornado */ });

        return cached;
      }

      // Não está no cache: busca na rede e armazena
      return fetch(event.request)
        .then(networkResp => {
          if (!networkResp || networkResp.status !== 200 || networkResp.type === 'opaque') {
            return networkResp;
          }
          const toCache = networkResp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
          return networkResp;
        })
        .catch(() => {
          // Offline e sem cache: retorna index.html como fallback
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

/* ── Message: força atualização quando solicitado ── */
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
