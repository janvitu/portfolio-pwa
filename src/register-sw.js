if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(`/service-worker.js`)
    .then(() =>
      console.log("%c[ Service Worker ] %cregistered 🟢", "color: green;", "")
    );
}
