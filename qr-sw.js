// Keeps /qr working offline once it has been opened.
const CACHE = 'eliana-qr-v1';
const FILES = ['/qr', '/qr/manifest.webmanifest', '/qr/icon-180.png', '/qr/icon-192.png', '/qr/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const isPage = url.origin === location.origin && (url.pathname === '/qr' || url.pathname === '/qr/');
  if (isPage) {  // network first, fall back to the saved copy when offline
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('/qr', copy)); return r; }).catch(() => caches.match('/qr')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok && (url.origin === location.origin || url.hostname.endsWith('gstatic.com') || url.hostname.endsWith('googleapis.com'))) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  })));
});
