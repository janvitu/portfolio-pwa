<script>
  import { onFocus, onFocusOut } from "@js/use/useForm.js";
</script>

<div class="relative my-2 mx-1 text-gray-200 h-9">
  <input
    on:focus={onFocus}
    on:blur={onFocusOut}
    class=""
    id="email__input"
    type="email"
    name="email"
    autocomplete="email"
    required
  />
  <label for="email__input" class="">Email</label>
  <div />
</div>
