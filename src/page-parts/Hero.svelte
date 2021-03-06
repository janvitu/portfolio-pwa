<script>
  import MdnButtonLink from "@/components/mdn/MdnButtonLink.svelte";
</script>

<section
  id="home"
  name="hero"
  class="bg-main overflow-hidden relative pb-16 md:pb-28 flex flex-col w-screen"
>
  <header class="flex justify-between mt-4 mr-3 mb-4 ml-3">
    <div class="flex flex-col gap-4 justify-center text-white">
      <a href="tel:721892820">
        <div
          class="flex space-x-4 items-center hover:text-second transition-colors"
        >
          <svg
            class="h-4 w-auto"
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <g class="fa-group">
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                opacity="0.4"
              />
              <path
                class="fa-primary"
                fill="currentColor"
                d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
              />
            </g>
          </svg>
          <div class="underline whitespace-nowrap">+420 721 892 820</div>
        </div>
      </a>
      <a href="mailto:jan@janvitu.dev">
        <div
          class="flex space-x-4 items-center hover:text-second transition-colors"
        >
          <svg
            class="h-4 w-auto"
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g class="fa-group">
              <path
                class="fa-secondary"
                fill="currentColor"
                d="M256.47 352h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V400a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V183.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52zM464 64H48a48 48 0 0 0-48 48v19a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4 23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131v-19a48 48 0 0 0-48-48z"
                opacity="0.4"
              />
              <path
                class="fa-primary"
                fill="currentColor"
                d="M512 131v52.36c-24.46 19.17-169.4 125.34-173 128.12-22.12 17.1-52.43 40.52-82.53 40.52h-.94c-30.1 0-60.41-23.42-82.54-40.52C169.39 308.7 24.77 202.7 0 183.33V131a24.08 24.08 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.69 12.12 49.75 41.4 72.93 41.4h.94c23.18 0 56.24-29.28 72.93-41.4 132.7-96.3 142.8-104.7 173.4-128.7A23.93 23.93 0 0 0 512 131z"
              />
            </g>
          </svg>
          <div class="underline whitespace-nowrap">jan@janvitu.dev</div>
        </div>
      </a>
    </div>
    <div class="flex justify-center flex-col gap-2 text-white">
      <a
        title="GitHub"
        href="https://github.com/vituja"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="p-2 h-10 w-10 transition-all ease-in-out rounded-full border border-white hover:text-second hover:border-second"
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      </a>
      <a
        title="CodePen"
        href="https://codepen.io/vituja1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          class="p-2 h-10 w-10 transition-all ease-in-out rounded-full border border-white hover:text-second hover:border-second"
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
          />
        </svg>
      </a>
    </div>
  </header>
  <div class="self-center mx-auto mt-8 md:mt-28 w-4/5 max-w-screen-xl">
    <h1>
      <svg
        class="ml-auto mr-auto w-full max-w-4xl"
        width="100"
        height="100"
        viewBox="0 0 100 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Jan Vítů</title>
        <g>
          <path
            d="M57.3919 6.53687H61.7973L54.1944 23.2348H50.7364L43.1335 6.53687H47.6574L52.5128 17.811L57.3919 6.53687Z"
          />
          <path
            d="M62.793 23.2353V6.53737H67.151V23.2353H62.793ZM66.2273 5.11626H63.6693L66.1325 1.39771H69.8984L66.2273 5.11626Z"
          />
          <path
            d="M73.9489 23.2348V10.0659H68.9514V6.53687H83.3519V10.0659H78.3543V23.2348H73.9489Z"
          />
          <path
            d="M92.4483 23.4482C90.0324 23.4482 88.2087 22.8324 86.9534 21.6008C85.6981 20.3692 85.0586 18.5691 85.0586 16.2006V6.53708H89.3219V16.3664C89.3219 17.5743 89.5824 18.498 90.1271 19.1375C90.6719 19.777 91.4298 20.1086 92.4483 20.1086C93.4667 20.1086 94.2246 19.777 94.7694 19.1375C95.3141 18.498 95.5747 17.5743 95.5747 16.3664V6.53708H99.8617V16.2006C99.8617 18.5454 99.2222 20.3455 97.9669 21.5771C96.6879 22.8324 94.8404 23.4482 92.4483 23.4482ZM92.4483 5.2344C91.714 5.2344 91.0745 4.97387 90.5535 4.47648C90.0324 3.97909 89.7719 3.3396 89.7719 2.60536C89.7719 1.87112 90.0324 1.25531 90.5535 0.757923C91.0745 0.260536 91.714 0 92.4483 0C93.1825 0 93.822 0.260536 94.3431 0.757923C94.8641 1.25531 95.1247 1.87112 95.1247 2.60536C95.1247 3.3396 94.8641 3.97909 94.3431 4.47648C93.822 4.97387 93.1825 5.2344 92.4483 5.2344ZM92.4483 3.6475C92.7325 3.6475 92.9693 3.55276 93.1588 3.3396C93.3246 3.15012 93.4193 2.91326 93.4193 2.60536C93.4193 2.32114 93.3246 2.08429 93.1588 1.87112C92.9693 1.68164 92.7325 1.5869 92.4483 1.5869C92.164 1.5869 91.9272 1.68164 91.7614 1.87112C91.5719 2.08429 91.4772 2.32114 91.4772 2.60536C91.4772 2.91326 91.5719 3.15012 91.7614 3.3396C91.9272 3.55276 92.164 3.6475 92.4483 3.6475Z"
          />
          <path
            d="M0 16.7224L1.94217 16.6039C2.53429 16.5802 2.93693 16.4381 3.19747 16.1776C3.458 15.9171 3.57643 15.5144 3.57643 14.9697V3.24554H7.95814V14.8986C7.95814 16.5329 7.53181 17.7645 6.65547 18.6172C5.77913 19.4935 4.47646 19.9672 2.70008 20.0856L0.260534 20.2041L0 16.7224Z"
          />
          <path
            d="M23.7096 19.9435L22.2174 16.4855H14.8277L13.3356 19.9435H8.95386L16.7462 3.24554H20.2042L28.0202 19.9435H23.7096ZM16.2251 13.217H20.82L18.5226 7.86413L16.2251 13.217Z"
          />
          <path
            d="M40.6928 19.9435H43.9139V11.5945V7.42004L41.877 3.24554H39.8401V12.7906L32.1899 3.24554H29.0161V19.9435H33.0662V10.3984L40.6928 19.9435Z"
          />
        </g>
      </svg>
    </h1>
    <div class="text-white my-6 md:my-12 text-center">
      <h2 class="text-lg md:text-xl leading-relaxed font-light">
        Jsem <span class="text-second font-normal">UI</span> &
        <span class="text-second font-normal">UX</span> designér a
        <span class="text-second font-normal">developer</span> specializující se
        na webové technologie. Mým cílem je vytvářet rychlé a responzivní weby, které
        uživatele nenutí přemýšlet.
      </h2>
    </div>
    <div class="flex justify-center">
      <MdnButtonLink isContained link="#contact">Kontakt</MdnButtonLink>
      <MdnButtonLink link="#work">Co dělám</MdnButtonLink>
    </div>
  </div>
</section>
