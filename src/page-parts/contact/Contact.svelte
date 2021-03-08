<script>
  import Form from "@/page-parts/contact/Form.svelte";
</script>

<section id="contact" class="bg-main py-28 text-white text-center w-screen">
  <div class="max-w-5xl w-11/12 mx-auto">
    <h2
      data-animate
      class="animation-duration-300 animation-ease-in-out animate-top-bottom"
    >
      Kontakt
    </h2>
    <p
      data-animate
      class="animation-duration-300 animation-ease-in-out animate-bottom-top"
    >
      Máte dotaz nebo chcete navázat spolupráci? Stačí vylpnit formulář níže
      nebo zaslat e-mail na adresu
      <a
        href="mailto:jan@janvitu.dev"
        class="underline font-bold transition-colors hover:text-second"
      >
        jan@janvitu.dev
      </a> a můžeme si promluvit o tom, jak vám mohu pomoci dosáhnout vašich obchodních
      cílů.
    </p>
    <Form />
  </div>
</section>
