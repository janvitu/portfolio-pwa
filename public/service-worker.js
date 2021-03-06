const cacheName = "JanVitu_cache";
const cacheContent = [
  "index.html",
  "dist/index.js",
  "dist/pages/Home.svelte.js",
  "dist/page-parts/About.svelte.js",
  "dist/page-parts/Footer.svelte.js",
  "dist/page-parts/Hero.svelte.js",
  "dist/page-parts/Service.svelte.js",
  "dist/page-parts/Work.svelte.js",
  "dist/page-parts/contact/Contact.svelte.js",
  "dist/page-parts/contact/Form.svelte.js",
];

self.addEventListener("install", (e) => {
  console.log("%c[Service Worker – 🛠] %cInstall", "color: green;", "");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("%c[Service Worker – 🛠] %cCaching", "color: green;", "");
      return cache.addAll(cacheContent);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      console.log(
        `%c[Service Worker – 🛠] %cFetching resources`,
        "color: green;",
        ""
      );
      return (
        r ||
        fetch(e.request).then(async (response) => {
          const cache = await caches.open(cacheName);
          console.log(`%c[Service Worker – 🛠] %cCaching`, "color: green;", "");
          cache.put(e.request, response.clone());
          return response;
        })
      );
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
