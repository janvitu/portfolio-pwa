<script>
  import page from "page";
  import router from "@/router/index.js";

  import { routeCurrent } from "@/store/routeState.js";
  import { onMount } from "svelte";

  import { animationObserver } from "@js/use/siteAnimation";

  onMount(() => {
    if ("IntersectionObserver" in window) {
      const animationElements = document.querySelectorAll(`[data-animate]`);
      animationElements.forEach((animationElement) => {
        animationElement.classList.add("opacity-0");
        animationObserver.observe(animationElement);
      });
    }
  });

  router();
</script>

<div id="app">
  <svelte:component this={$routeCurrent} />
</div>
