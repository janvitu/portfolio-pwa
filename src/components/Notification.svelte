<script>
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import { notifications } from "@/store/notifications.js";
</script>

<div
  class="fixed top-0 left-0 right-0 mx-auto my-0 p-0 flex flex-col justify-center items-center pointer-events-none"
>
  {#each $notifications as notification (notification.id)}
    <div
      animate:flip
      class="flex-0-auto my-3 rounded"
      style="background: {notifications.themes[notification.type]}"
      transition:fly={{ y: -30 }}
    >
      <div class="block p-3 text-white">
        {notification.message}
      </div>
    </div>
  {/each}
</div>
