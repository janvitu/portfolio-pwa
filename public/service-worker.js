const CACHE_STATIC_NAME = "janvitu-site-s-cache-v1";
const CACHE_DYNAMIC_NAME = "janvitu-site-d-cache-v1";
const CAHCE_ASSETS = [
  "/",
  "/manifest.json",
  "/img/favicon/android-chrome-192x192.png",
  "/img/favicon/android-chrome-512x512.png",
  "/img/favicon/apple-touch-icon.png",
  "/img/favicon/browserconfig.xml",
  "/img/favicon/favicon-16x16.png",
  "/img/favicon/favicon-32x32.png",
  "/img/favicon/favicon.ico",
  "/img/favicon/mstile-150x150.png",
  "/img/favicon/safari-pinned-tab.svg",
  "/_snowpack/env.js",
  "/_snowpack/pkg/page.js",
  "/_snowpack/pkg/svelte.js",
  "/_snowpack/pkg/svelte/animate.js",
  "/_snowpack/pkg/svelte/easing.js",
  "/_snowpack/pkg/svelte/internal.js",
  "/_snowpack/pkg/svelte/store.js",
  "/_snowpack/pkg/svelte/transition.js",
  "/index.html",
  "/dist/index.js",
  "/dist/register-sw.js",
  "/dist/App.svelte.js",
  "/dist/pages/Home.svelte.js",
  "/dist/pages/NotFound.svelte.js",
  "/dist/page-parts/Hero.svelte.js",
  "/dist/page-parts/Service.svelte.js",
  "/dist/page-parts/Work.svelte.js",
  "/dist/page-parts/About.svelte.js",
  "/dist/page-parts/contact/Contact.svelte.js",
  "/dist/page-parts/contact/Form.svelte.js",
  "/dist/page-parts/Footer.svelte.js",
  "/dist/components/Hamburger.svelte.js",
  "/dist/components/InfoCard.svelte.js",
  "/dist/components/ModalWindow.svelte.js",
  "/dist/components/Navbar.svelte.js",
  "/dist/components/Notification.svelte.js",
  "/dist/components/ServiceCard.svelte.js",
  "/dist/components/TechTag.svelte.js",
  "/dist/components/mdn/MdnButtonLink.svelte.js",
  "/dist/components/mdn/MdnInput.svelte.js",
  "/dist/components/mdn/MdnTextArea.svelte.js",
  "/dist/assets/js/validateForm.js",
  "/dist/assets/js/use/siteAnimation.js",
  "/dist/assets/js/use/useForm.js",
  "/dist/assets/js/use/useRippleEffect.js",
  "/dist/assets/css/tailwind.css.proxy.js",
  "/dist/assets/css/style.css.proxy.js",
  "/dist/assets/css/animations.css",
  "/dist/assets/css/fonts.css",
  "/dist/assets/img/times-regular.svg",
  "/dist/assets/img/icons/aws.svg",
  "/dist/assets/img/icons/css.svg",
  "/dist/assets/img/icons/deno.svg",
  "/dist/assets/img/icons/firebase.svg",
  "/dist/assets/img/icons/flutter.svg",
  "/dist/assets/img/icons/git-icon.svg",
  "/dist/assets/img/icons/graphql.svg",
  "/dist/assets/img/icons/html.svg",
  "/dist/assets/img/icons/java.svg",
  "/dist/assets/img/icons/javascript.svg",
  "/dist/assets/img/icons/mongodb.svg",
  "/dist/assets/img/icons/mysql.svg",
  "/dist/assets/img/icons/nodejs.svg",
  "/dist/assets/img/icons/npm.svg",
  "/dist/assets/img/icons/nuxtjs.svg",
  "/dist/assets/img/icons/php.svg",
  "/dist/assets/img/icons/python.svg",
  "/dist/assets/img/icons/reactjs.svg",
  "/dist/assets/img/icons/svelte.svg",
  "/dist/assets/img/icons/swift.svg",
  "/dist/assets/img/icons/tailwindcss.svg",
  "/dist/assets/img/icons/vuejs.svg",
  "/dist/assets/img/icons/webpack-icon.svg",
  "/dist/assets/img/icons/wp.svg",
  "/dist/router/index.js",
  "/dist/store/form.js",
  "/dist/store/hamburgerState.js",
  "/dist/store/modalState.js",
  "/dist/store/notifications.js",
  "/dist/store/routeState.js",
  "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cahce) => {
      cahce.addAll(CAHCE_ASSETS);
    })
  );
  console.log("%c[ Service Worker ] %cInstalled", "color: green;", "");
});

self.addEventListener("activate", (event) => {
  console.log("%c[ Service Worker ] %cActivated", "color: green;", "");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter(
            (key) => key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME
          )
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then(async (fetchResponse) => {
        const r = await caches.match(event.request);
        if (!r) {
          const cache = await caches.open(CACHE_DYNAMIC_NAME);
          cache.put(event.request.url, fetchResponse.clone());
        }
        return fetchResponse;
      })
      .catch(async (err) => {
        const res = await caches.match(event.request);
        if (!res) {
          console.error("fuch", err);
        }
        return res;
      })
  );
});
