const CACHE_NAME = 'quran-pwa-v1';
const API_CACHE_NAME = 'quran-api-cache-v1'; // مخزن جديد للآيات

const urlsToCache = [
  './',
  './index.html',
  './reader.html',
  './reader.css',
  './reader.js',
  './manifest.json'
];

// حدث التثبيت: تخزين ملفات الواجهة الأساسية
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened static cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

// حدث الجلب: اعتراض أي طلب للنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // 1. لو الملف موجود في الكاش، رجعه فوراً
      if (cachedResponse) {
        return cachedResponse;
      }

      // 2. لو مش موجود، اطلبه من النت
      return fetch(event.request).then(networkResponse => {
        // لو الطلب ده رايح لـ API القرآن (يعني بيجيب آيات)، انسخه وخزنه للمرات الجاية
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