<script>
  export let href;
</script>

<div
  class="relative p-2 mx-1 my-1 w-max bg-gray-200 text-black text-sm flex content-center rounded transition-colors hover:bg-gray-900 hover:text-white"
>
  <div class="pointer-events-none flex items-center justify-center mr-3">
    <slot name="icon" />
  </div>
  <div class="pointer-events-none capitalize">
    <slot name="text" />
  </div>
</div>
