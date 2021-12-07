var CACHE_NAME = "mon_agence_v3";
var urlsCache = ["/", "/index.html", "/styles.css", "/main.js"];

self.addEventListener("install", function (e) {
  console.log("Install service worker!");

  e.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAME);

    cache.addAll(urlsCache);
  });
});

self.addEventListener("fetch", (e) => {
  e.responseWith(
    (async () => {
      const resource = await caches.match(e.request);
      if (resource) {
        return resource;
      }

      const response = await fetch(e.request);

      return response;
    })()
  );
});

self.addEventListener("activate", async (e) => {
  const keys = await caches.keys();

  await Promise.all(
    keys.map((key) => {
      if (key !== CACHE_NAME) {
        return caches.delete(key);
      }
    })
  );

  clients.claims();
});
