const CACHE_NAME = 'aurum-pro-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/favicon.ico',
  './icons/icon-96x96.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './screenshots/screenshot-mobile-dark.png',
  './screenshots/screenshot-mobile-light.png',
  './screenshots/screenshot-desktop.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
    const copy = resp.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return resp;
  }).catch(() => caches.match('./index.html'))));
});
