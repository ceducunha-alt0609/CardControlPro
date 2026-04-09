// Aurum Pro — Service Worker
// Estratégia: Cache-first para assets estáticos, Network-first para dados

const CACHE_NAME = 'aurum-pro-v1';
const CACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala e pré-cacheia os assets principais
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Limpa caches antigos ao ativar
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Intercepta requests
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // Fontes do Google: cache agressivo
  if (url.hostname.includes('fonts.g')) {
    e.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(cached => {
          if (cached) return cached;
          return fetch(request).then(response => {
            cache.put(request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // App principal: network-first com fallback para cache
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    e.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Demais assets: cache-first
  e.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
