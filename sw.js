const CACHE_NAME = 'quran-pwa-v2'; // غيرنا الرقم لـ v2 عشان نحدث الكاش
const API_CACHE_NAME = 'quran-api-cache-v1';

// حطينا كل ملفات مشروعك بالظبط زي ما هي عندك في الـ VS Code
const urlsToCache = [
  './',
  './index.html',
  './index.css',
  './index.js',
  './reader.html',
  './reader.css',
  './reader.js',
  './Athkar.html',
  './Athkar.css',
  './Athkar.js',
  './Tasbih.html',
  './Tasbih.css',
  './Tasbih.js',
  './manifest.json',
  './images/logo.webp'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened static cache v2');
        return cache.addAll(urlsToCache);
      })
  );
});

// الحدث ده بيمسح أي كاش قديم (v1) ويسيب الجديد بس عشان المساحة
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME && cache !== API_CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // نتجاهل أي طلبات غير الـ GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      // الحل الذكي لمشكلة Netlify (بيزود .html من ورا الكواليس لو إنت أوفلاين)
      let reqUrl = new URL(event.request.url);
      if (event.request.mode === 'navigate' && !reqUrl.pathname.endsWith('.html') && !reqUrl.pathname.endsWith('/')) {
        return caches.match(reqUrl.pathname + '.html').then(htmlMatch => {
          if (htmlMatch) return htmlMatch;
          return fetch(event.request);
        }).catch(() => fetch(event.request));
      }

      // جلب الآيات من الـ API وحفظها للكاش
      return fetch(event.request).then(networkResponse => {
        if (event.request.url.includes('api.quran.com')) {
          const responseClone = networkResponse.clone();
          caches.open(API_CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(err => {
        console.log('Offline and not cached:', event.request.url);
      });
    })
  );
});