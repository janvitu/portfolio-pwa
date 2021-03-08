const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3,
};

export const animationObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation--animated");
        entry.target.classList.remove("opacity-0");
        observer.unobserve(entry.target);
      }
    });
  },
  options
);
