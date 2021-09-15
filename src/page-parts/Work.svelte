<script>
  import InfoCard from "@components/InfoCard.svelte";
  import TechTag from "@components/TechTag.svelte";
</script>

<section id="work" class="py-28 shadow-inner w-screen ">
  <div class="max-w-5xl mx-auto">
    <h2
      data-animate
      class="text-5xl font-bold animation-duration-300 animation-ease-in-out animate-top-bottom"
    >
      Co dělám
    </h2>
    <div
      data-animate
      class="grid grid-cols-auto min-w-320px animation-duration-300 animation-ease-in-out animate-bottom-top"
    >
      <InfoCard>
        <h3 class="mt-0">Webové stránky</h3>
        <p>
          V dnešní době webové stránky soutěží o to, aby vynikli, a proto musí
          být vývoj webových aplikací kreativní.
        </p>
        <h4>Technologie</h4>
        <div class="flex flex-wrap justify-center">
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/html.svg"
              alt="HTML"
            />
            <span slot="text">HTML</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/css.svg"
              alt="CSS"
            />
            <span slot="text">CSS</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/javascript.svg"
              alt="JavaScript"
            />
            <span slot="text">JavaScript</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/vuejs.svg"
              alt="VueJS"
            />
            <span slot="text">VueJS</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/reactjs.svg"
              alt="ReactJS"
            />
            <span slot="text">ReactJS</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/svelte.svg"
              alt="SvelteJS"
            />
            <span slot="text">SvelteJS</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/tailwindcss.svg"
              alt="TailwindCSS"
            />
            <span slot="text">Tailwind</span>
          </TechTag>
        </div>
        <svg
          class="absolute right-0 top-0 h-3/4 -z-1 fill-current text-blue-100 text-opacity-50 transform translate-x-1/4 translate-y-1/4"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M234.8 511.7L196 500.4c-4.2-1.2-6.7-5.7-5.5-9.9L331.3 5.8c1.2-4.2 5.7-6.7 9.9-5.5L380 11.6c4.2 1.2 6.7 5.7 5.5 9.9L244.7 506.2c-1.2 4.3-5.6 6.7-9.9 5.5zm-83.2-121.1l27.2-29c3.1-3.3 2.8-8.5-.5-11.5L72.2 256l106.1-94.1c3.4-3 3.6-8.2.5-11.5l-27.2-29c-3-3.2-8.1-3.4-11.3-.4L2.5 250.2c-3.4 3.2-3.4 8.5 0 11.7L140.3 391c3.2 3 8.2 2.8 11.3-.4zm284.1.4l137.7-129.1c3.4-3.2 3.4-8.5 0-11.7L435.7 121c-3.2-3-8.3-2.9-11.3.4l-27.2 29c-3.1 3.3-2.8 8.5.5 11.5L503.8 256l-106.1 94.1c-3.4 3-3.6 8.2-.5 11.5l27.2 29c3.1 3.2 8.1 3.4 11.3.4z"
          />
        </svg>
      </InfoCard>
      <InfoCard>
        <h3 class="mt-0 ">Mobilní aplikace</h3>
        <p>
          Mobilní aplikace vytvářím jako dokonalou reprezentaci vašeho produku s
          designem, který vyjadřuje charakter toho co nabízíte a jasně
          komunikuje vaši zprávu.
        </p>
        <h4>Technologie</h4>
        <div class="flex flex-wrap justify-center ">
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/flutter.svg"
              alt="Flutter"
            />
            <span slot="text">Flutter</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/swift.svg"
              alt="Swift"
            />
            <span slot="text">Swift</span>
          </TechTag>
          <TechTag>
            <img
              slot="icon"
              class="h-4"
              src="dist/assets/img/icons/java.svg"
              alt="Java"
            />
            <span slot="text">Java</span>
          </TechTag>
        </div>
        <svg
          class="absolute right-0 top-0 h-3/4 -z-1 fill-current text-blue-100 text-opacity-50 transform translate-x-1/4 translate-y-1/4"
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            d="M196 448h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zM320 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v416c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V48z"
          />
        </svg>
      </InfoCard>
    </div>
    <div
      data-animate
      class="animation-duration-300 animation-ease-in-out animate-bottom-top"
    >
      <h3>Jak vám mohu pomoci?</h3>
      <ul class="flex flex-wrap justify-center">
        <li class="m-6 text-center flex-basis-320 flex-grow flex-shrink">
          <h4>Vytvoření nového řešení od nuly</h4>
          <p>
            Máte skvělý nápad, ale váš tým nemá čas nebo dostatečné dovednosti
            na jeho realizaci? Pomohu vám s vizuálním designem vývojem softwaru
            i jeho testováním.
          </p>
        </li>
        <li class="m-6 text-center flex-basis-320 flex-grow flex-shrink">
          <h4>Vylepšení stávajícího produktu</h4>
          <p>
            Máte produkt, který je potřba posunout o úroveň výš? Zanalyzuji vaše
            současné řešení a vylepším co je potřeba&nbsp;–&nbsp;jako rychlost,
            design, funkce, zabezpečení a uživatelksý komfort.
          </p>
        </li>
        <li class="m-6 text-center flex-basis-320 flex-grow flex-shrink">
          <h4>Spolupráce na vašich projektech</h4>
          <p>
            Hledáte spolehlivou pomocnou ruku? S maximální flexibilitou na mojí
            straně pomohu vašemu týmu urychlit váš projekt a vaší firmě pomohu
            růst.
          </p>
        </li>
      </ul>
    </div>
  </div>
</section>
