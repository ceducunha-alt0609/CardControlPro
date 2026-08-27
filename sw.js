const CACHE = 'aurum-pro-v3-20260826';
const CACHE_PREFIX = 'aurum-pro-';
const APP_SCOPE = '/CardControlPro/';
const ASSETS = [
  './manifest.json',
  './404.html',
  './icons/favicon.ico',
  './icons/icon-96x96.png',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Nunca intercepta outros apps na mesma origem do GitHub Pages.
  if(url.origin === self.location.origin && !url.pathname.startsWith(APP_SCOPE)) return;

  const isNavigation = event.request.mode === 'navigate' ||
    (url.origin === self.location.origin &&
     (url.pathname === APP_SCOPE || url.pathname === APP_SCOPE + 'index.html'));

  // HTML principal: rede primeiro. Assim uma atualização publicada não fica presa no cache.
  if(isNavigation){
    event.respondWith(
      fetch(event.request, {cache:'no-store'})
        .then(resp => {
          const copy = resp.clone();
          caches.open(CACHE).then(cache => cache.put('./index.html', copy)).catch(()=>{});
          return resp;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Recursos estáticos: cache primeiro, rede como atualização/fallback.
  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached) return cached;
      return fetch(event.request).then(resp => {
        if(resp && resp.ok && url.origin === self.location.origin){
          const copy = resp.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(()=>{});
        }
        return resp;
      });
    })
  );
});
