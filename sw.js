const CACHE_NAME = "little-fashion-cache-v1";
const urlsToCache = [
  "/2127_little_fashion/",
  "/2127_little_fashion/index.html",
  "/2127_little_fashion/about.html",
  "/2127_little_fashion/contact.html",
  "/2127_little_fashion/css/bootstrap.min.css",
  "/2127_little_fashion/css/tooplate-little-fashion.css",
  "/2127_little_fashion/css/slick.css",
  "/2127_little_fashion/js/bootstrap.bundle.min.js",
  "/2127_little_fashion/js/custom.js",
  "/2127_little_fashion/js/slick.js",
  // Add more assets like images if needed
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
});
