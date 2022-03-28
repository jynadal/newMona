var CACHE_NAME = "mon_agence_v5";
var urlsCache = [
  "/",
  "/index.html",
  "/offline.html",
  "/styles.css",
  "/main.js",
  '/images/logoMonAgenceMb.png',
  '/images/logo_monagence.png',
  '/images/voyages/beach.jpg',


  '/js/app.js',
  '/js/feed.js',
  '/js/promise.js',
  '/js/fetch.js',
];

self.addEventListener("install", function (e) {
  console.log("Install service worker!");

  e.waitUntil(async () => {
    await caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urlsCache);
    });
  });
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // IMPORTANT: Cloner la requête.
      // Une requete est un flux et est à consommation unique
      // Il est donc nécessaire de copier la requete pour pouvoir l'utiliser et la servir
      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(function (response) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // IMPORTANT: Même constat qu'au dessus, mais pour la mettre en cache
        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// supprimer caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key));
    })
  );
});
