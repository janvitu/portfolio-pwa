<script>
  import { modalState } from "@/store/modalState";
</script>

<div
  class="bg-black bg-opacity-75 w-screen h-screen fixed top-0 left-0"
  on:click={(e) => {
    if (e.target === e.currentTarget) modalState.close();
  }}
>
  <div
    class="fixed w-full top-1/2 left-1/2 max-w-3xl h-4/5 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll p-8 rounded-2xl bg-white"
  >
    <button
      type="button"
      on:click={(e) => {
        e.preventDefault();
        modalState.close();
      }}
      class="absolute group top-0 right-0 border-none bg-none w-12 h-12 text-second cursor-pointer"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="times"
        class="svg-inline--fa fa-times fa-w-10 h-10 w-10 transition-transform ease-in transform group-hover:rotate-180"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
        />
      </svg>
    </button>
    <slot />
  </div>
</div>
