if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(`./service-worker.js`, {
    scope: "/",
  });
  console.log("%c[Service Worker – 🛠] %cregistered 🟢", "color: green;", "");
}
