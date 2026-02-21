const CACHE_NAME = 'quran-pwa-v4'; // حدثنا الإصدار لـ v4
const API_CACHE_NAME = 'quran-api-cache-v2';

// مسارات الملفات من الجذر مباشرة (أضمن بكتير مع Netlify)
const urlsToCache = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js',
  '/reader.html',
  '/reader.css',
  '/reader.js',
  '/Athkar.html',
  '/Athkar.css',
  '/Athkar.js',
  '/Tasbih.html',
  '/Tasbih.css',
  '/Tasbih.js',
  '/manifest.json',
  '/images/logo.webp'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // تفعيل الكاش الجديد فوراً
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('جاري تخزين ملفات الواجهة...');
      return cache.addAll(urlsToCache);
    })
  );
});

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
  if (event.request.method !== 'GET') return;

  const reqUrl = new URL(event.request.url);

  event.respondWith(
    (async () => {
      try {
        // 1. ندور على الملف زي ما هو في الكاش
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;

        // 2. الخدعة الذكية لـ Netlify: لو الرابط مفيهوش .html، نزودها وندور تاني في الكاش
        if (event.request.mode === 'navigate' || !reqUrl.pathname.includes('.')) {
          let htmlUrl = reqUrl.pathname;
          if (!htmlUrl.endsWith('/')) {
            htmlUrl += '.html';
          }
          const htmlMatch = await caches.match(htmlUrl);
          if (htmlMatch) return htmlMatch;
        }

        // 3. لو مش في الكاش خالص، نطلبه من النت
        const networkResponse = await fetch(event.request);

        // 4. لو الطلب ده آيات من الـ API، انسخه واحفظه أوفلاين
        if (reqUrl.href.includes('api.quran.com')) {
          const cache = await caches.open(API_CACHE_NAME);
          cache.put(event.request, networkResponse.clone());
        }

        return networkResponse;

      } catch (error) {
        // 5. الحماية القصوى من الـ Crash! لو مفيش نت وكل اللي فات فشل، رجع الشاشة دي
        console.log('فشل الاتصال: الموبايل أوفلاين');
        return new Response('عفواً، لا يوجد اتصال بالإنترنت وهذا المحتوى غير محفوظ.', {
          status: 503,
          headers: new Headers({ 'Content-Type': 'text/plain; charset=utf-8' })
        });
      }
    })()
  );
});