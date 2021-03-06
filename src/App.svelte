<script>
  import page from "page";
  import router from "@/router/index.js";

  import { routeCurrent } from "@/store/routeState.js";

  router();
</script>

<div id="app">
  <svelte:component this={$routeCurrent} />
</div>
