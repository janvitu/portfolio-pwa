<script>
  import { hamburgerState } from "@/store/hamburgerState.js";
</script>

<button
  tabindex="0"
  class={`w-full h-full block relative cursor-pointer z-50 bg-transparent border-0 ${
    $hamburgerState ? "hamburger--is-toggled" : ""
  }`}
  on:click={hamburgerState.toggle}
  aria-label="Navigation opener"
>
  <span
    class="absolute bg-white h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/3 transition-all"
  />
  <span
    class="absolute bg-white h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-1/2 transition-all"
  />
  <span
    class="absolute bg-white h-0.5 w-8 left-1/2 transform -translate-x-1/2 top 1/2 transition-all"
  />
  <span
    class="absolute bg-white h-0.5 w-8 left-1/2 transform -translate-x-1/2 top-2/3 transition-all"
  />
</button>
