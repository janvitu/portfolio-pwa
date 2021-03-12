<script>
  import Hamburger from "@components/Hamburger.svelte";
  import { hamburgerState } from "@/store/hamburgerState.js";
  import { bounceInOut } from "svelte/easing";
  function pop(node, { duration }) {
    return {
      duration,
      css: (t) => {
        const eased = bounceInOut(t);
        return `
          transform: scale(${eased})
        `;
      },
    };
  }
</script>

<div
  class="navbar bg-second w-14 h-14 rounded-full fixed bottom-0 right-0 transform -translate-x-1/3 -translate-y-1/3 z-50"
>
  <Hamburger />
  {#if $hamburgerState}
    <nav
      out:pop={{ duration: 150 }}
      class="absolute overflow-hidden bottom-2/3 right-2/3 bg-white rounded-xl flex flex-col justify-center text-center text-lg origin-bottom-right animate-pop"
    >
      <a
        on:click={hamburgerState.close}
        href="#home"
        class="relative py-2 px-4 transition-all w-full whitespace-nowrap self-center hover:bg-main hover:text-white focus:bg-main focus:text-white"
        >Domů</a
      >
      <a
        on:click={hamburgerState.close}
        href="#service"
        class="relative py-2 px-4 transition-all w-full whitespace-nowrap self-center border-t border-main hover:bg-main hover:text-white focus:bg-main focus:text-white"
        >Jak pracuji</a
      >
      <a
        on:click={hamburgerState.close}
        href="#work"
        class="relative py-2 px-4 transition-all w-full whitespace-nowrap self-center border-t border-main hover:bg-main hover:text-white focus:bg-main focus:text-white"
        >Co dělám</a
      >
      <a
        on:click={hamburgerState.close}
        href="#about"
        class="relative py-2 px-4 transition-all w-full whitespace-nowrap self-center border-t border-main hover:bg-main hover:text-white focus:bg-main focus:text-white"
        >O mně</a
      >
      <a
        on:click={hamburgerState.close}
        href="#contact"
        class="relative py-2 px-4 transition-all w-full whitespace-nowrap self-center border-t border-main hover:bg-main hover:text-white focus:bg-main focus:text-white"
        >Kontakt</a
      >
    </nav>
  {/if}
</div>
