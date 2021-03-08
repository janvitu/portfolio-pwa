<script>
  import ModalWindow from "@/components/ModalWindow.svelte";

  import { onFocus, onFocusOut } from "@/assets/js/use/useForm.js";

  import Notification from "@components/Notification.svelte";
  import { notifications } from "@/store/notifications";

  import { formState } from "@/store/form";
  import { modalState } from "@/store/modalState";

  import { beforeSubmit, liveValidate } from "@js/validateForm";

  let form = {
    email: "",
    subject: "",
    message: "",
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const validationResponse = await fetch(
        "/.netlify/functions/validateForm",
        {
          method: "POST",
          body: JSON.stringify({
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
          headers: { "Content-Type": "application/json" },
        }
      ).then((res) => res.json());
      formState.reset();
      if (validationResponse.status !== "✅") {
        const errObj = validationResponse.error;
        const {
          message: errText,
          path: [path],
        } = errObj;
        beforeSubmit(errText, path);
        throw new Error(errText);
      }
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      console.log("Success ✅");
      notifications.success("Formulář byl úspěšně odeslán ✅");
      formReset();
    } catch (error) {
      console.error(error);
      console.log(
        `Při odeslání formuláře se vyskytla chyba. Prosím napište svůj dotaz na adresu jan@janvitu.dev.`
      );
      notifications.warning("Chyba při odesílání formuláře ❌");
    }
  };
  function formReset() {
    const visited = document.querySelectorAll(".is-visited");

    visited.forEach((block) => {
      block.classList.remove("is-visited");
      block.classList.remove("is-invalid");
    });
    form.email = "";
    form.subject = "";
    form.message = "";
  }
</script>

<form
  data-animate
  class="animation-duration-300 animation-ease-in-out animate-top-bottom"
  id="contact-form"
  name="contact"
  netlify-honeypot="bot-field"
  data-netlify="true"
  on:submit={formSubmit}
>
  <div
    class="relative mt-2 mb-6 mx-1 text-gray-200 h-11 rounded-t-md bg-black bg-opacity-10"
  >
    <input
      name="email"
      class="pt-5 pl-3 pb-2 {$formState.email
        ? `pr-11`
        : `pr-4`} w-full h-full outline-none shadow-none bg-transparent border-t-0 border-r-0 border-l-0 border-b border-white hover:bg-black hover:bg-opacity-10"
      on:focus={onFocus}
      on:blur={onFocusOut}
      on:input={liveValidate}
      bind:value={form.email}
      id="email__input"
      type="email"
      autocomplete="email"
      required
    />
    <label
      class="block absolute pl-4 top-0 transform translate-y-1/2 transition-all"
      for="email__input">Email</label
    >
    {#if $formState.email}
      <div
        class="absolute right-0 top-0 bottom-0 w-9 text-yellow-400 flex items-center"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="exclamation-triangle"
          class="max-h-6 w-auto pr-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          ><path
            fill="currentColor"
            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          /></svg
        >
      </div>
    {/if}
    <div
      class="form-line absolute bottom-0 w-0 h-px left-1/2 right-1/2 bg-second transition-all"
    />
    <div
      class="helper-line absolute text-sm text-left italic pl-4 w-full bottom-0 transform translate-y-full"
    >
      <div class="helper-text hidden text-gray-50">Help text</div>
      {#if $formState.email}
        <div class="helper-text--error w-full text-yellow-400">
          {$formState.email}
        </div>
      {/if}
    </div>
  </div>
  <div
    class="relative mt-2 mb-6 mx-1 text-gray-200 h-12 rounded-t-md bg-black bg-opacity-10"
  >
    <input
      name="subject"
      class="pt-5 pl-3 pb-2 {$formState.subject
        ? `pr-11`
        : `pr-4`} w-full h-full outline-none bg-transparent border-b border-white hover:bg-black hover:bg-opacity-10"
      on:focus={onFocus}
      on:blur={onFocusOut}
      on:input={liveValidate}
      bind:value={form.subject}
      id="subject__input"
      type="text"
      required
    />
    <label
      class="block absolute pl-4 top-0 transform translate-y-1/2 transition-all"
      for="subject__input">Předmět zprávy</label
    >
    {#if $formState.subject}
      <div
        class="absolute right-0 top-0 bottom-0 w-9 text-yellow-400 flex justify-center items-center"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="exclamation-triangle"
          class="max-h-6 w-auto pr-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          ><path
            fill="currentColor"
            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          /></svg
        >
      </div>
    {/if}
    <div
      class="form-line absolute bottom-0 w-0 h-px left-1/2 right-1/2 bg-second transition-all"
    />
    <div
      class="helper-line absolute text-sm text-left italic pl-4 w-full bottom-0 transform translate-y-full"
    >
      <div class="helper-text hidden text-gray-50">Help text</div>
      {#if $formState.subject}
        <div class="helper-text--error w-full text-yellow-400">
          {$formState.subject}
        </div>
      {/if}
    </div>
  </div>
  <div
    class="relative mt-2 mb-6 mx-1 text-gray-200 h-96 rounded-t-md bg-black bg-opacity-10"
  >
    <textarea
      name="message"
      class="pt-5 pl-3 pb-2 pr-4 w-full h-full outline-none bg-transparent border-b border-white resize-none hover:bg-black hover:bg-opacity-10"
      on:focus={onFocus}
      on:blur={onFocusOut}
      on:input={liveValidate}
      bind:value={form.message}
      id="message__input"
      cols="30"
      rows="10"
      required
    />
    <label
      class="block absolute pl-4 top-0 transform translate-y-1/2 transition-all"
      for="message__input">Zpráva</label
    >
    {#if $formState.message}
      <div
        class="absolute right-0 top-0 bottom-0 w-9 text-yellow-400 flex items-end"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="exclamation-triangle"
          class="max-h-9 w-auto pr-3 pb-3"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          ><path
            fill="currentColor"
            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          /></svg
        >
      </div>
    {/if}
    <div
      class="form-line absolute bottom-0 w-0 h-px left-1/2 right-1/2 bg-second transition-all"
    />
    <div
      class="helper-line absolute text-sm text-left italic pl-4 w-full bottom-0 transform translate-y-full"
    >
      <div class="helper-text hidden text-gray-50">Help text</div>
      {#if $formState.message}
        <div class="helper-text--error w-full text-yellow-400">
          {$formState.message}
        </div>
      {/if}
    </div>
  </div>
  <div>
    <span>Odesláním souhlasíte se </span>
    <button
      class="underline transition-colors hover:text-second"
      on:click={(e) => {
        e.preventDefault();
        modalState.open();
      }}
    >
      zpracováním osobních údajů.
    </button>
  </div>
  <button
    type="submit"
    class="rounded px-4 py-2 mr-auto ml-auto my-4 min-w-max overflow-hidden relative bg-second text-white"
  >
    Odeslat
  </button>
  {#if $modalState}
    <ModalWindow>
      <article class="text-main text-left leading-8">
        <h2 class="text-left text-3xl">Zásady ochrany osobních údajů</h2>
        <p>
          Provozovatel webu: Jan Vítů <br /> IČO: 09382925<br />Se sídlem
          Šumavksá 887, Kaplice<br />Kontaktní e-mail:
          <a href="mailto:jan@janvitu.dev" class="text-blue-700 underline"
            >jan@janvitu.dev</a
          >
        </p>
        <h3 class="text-left text-2xl">Jak data sbíráme?</h3>
        <p>
          Při odeslání formuláře je zpráva s Vaší emailovou adresou zaslána na
          speciálně zřízený email, který spravuje Jan Vítů.
        </p>
        <h3 class="text-left text-2xl">Jaká data sbíráme a proč?</h3>
        <p>Pro účely komunikace uchováváme následující data:</p>
        <ul class="list-disc pl-8">
          <li><strong>Vaše emailová adresa</strong></li>
          <li><strong>Předmět Vaší zprávy</strong></li>
          <li><strong>Obsah elektronické komunikace</strong></li>
        </ul>
        <p>
          Tato data sbíráme, abychom vám mohli odpovědět na dotazy či
          připomínky, které skrze formulář zašlete. Tyto údaje nikde veřejně
          neuvádíme.
        </p>
        <h3 class="text-left text-2xl">Jak dlouho data uchováváme?</h3>
        <p>
          Data jsou uchovávána po dobu nezbytně nutnou pro odpověď, maximálně
          však 1 rok.
        </p>
        <h3 class="text-left text-2xl">Kdo osobní údaje zpracovává?</h3>
        <p>Zpracovatelem těchto údajů je:</p>
        <p>
          Jan Vítů (IČO: 09382925, se sídlem Šumavksá 887, Kaplice), který
          provozuje tento web a odpovídá na Vaše dotazy.
        </p>
        <h3 class="text-left text-2xl">Jaká jsou má práva?</h3>
        <ul class="list-disc pl-8">
          <li>
            <strong>Právo na odvolání souhlasu</strong> - Kdykoli můžete odvolat
            dříve udělený souhlas se zpracováním Vašich osobních údajů.
          </li>
          <li>
            <strong>Právo na informace</strong> - Můžete se dotázat, jaké údaje zpracováváme,
            za jakým účelem, v jakém rozsahu, jak dlouho a kdo k nim má přístup.
          </li>
          <li>
            <strong>Právo na opravu či výmaz</strong> - Kdykoli můžete požádat o
            opravu či výmaz Vašich osobních údajů.
          </li>
        </ul>
        <p>
          Pro uplatnění kteréhokoliv práva zmíněného výše kontaktujte
          Provozovatele webu, a to e-mailem, popř. písemně.
        </p>
        <p class="center">
          <em
            >Tyto Zásady ochrany osobních údajů jsou platné a účinné od 20. 11.
            2020.</em
          >
        </p>
      </article>
    </ModalWindow>
  {/if}
  <Notification />
</form>
