const cn = "movie-app-v1";
const ftc = [
  "./index.html",
  "./main.css",
  "./main.js",
  "./icon-192.png",
  "./icon-512.png",
  "./vinland-icon.jpg",
  "./hajime-icon.jpg",
  "./grave-icon.jpg",
  "./death-icon.jpg",
  "./brand-icon.jpg",
  "./dhmal-icon.jpg",
  "./homecome-icon.jpg",
  "./noway-icon.jpg",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cn).then((cache) => {
      return cache.addAll(ftc);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
