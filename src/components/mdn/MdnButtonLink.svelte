<script>
  import rippleEffect from "@/assets/js/use/useRippleEffect.js";
  import "@/assets/css/style.css";
  export let isContained = false;
  export let link = "#";
</script>

<a
  href={link}
  tabindex={link !== "#" ? "0" : null}
  class={`rounded px-4 py-2 mx-6 my-4 min-w-max overflow-hidden relative ${
    isContained
      ? "bg-second text-white hover:bg-opacity-90"
      : "text-second border border-second hover:bg-second hover:bg-opacity-10"
  }`}
  on:mousedown={rippleEffect}
>
  <slot>Placeholder</slot>
</a>
