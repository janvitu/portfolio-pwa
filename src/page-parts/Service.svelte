<script>
  import ServiceCard from "@/components/ServiceCard.svelte";
</script>

<section id="service" class="py-28 bg-gray-100 shadow-md text-center w-screen">
  <div class="mx-auto my-12 max-w-5xl">
    <h2
      data-animate
      class="text-5xl mb-6 font-bold animation-duration-300 animation-ease-in animate-top-bottom"
    >
      Jak pracuji
    </h2>
    <div class="mx-auto grid gap-2 grid-cols-1 md:grid-cols-2">
      <div
        data-animate
        class="grid grid-cols-2 animation-duration-300 animation-ease-in animate-left-right"
      >
        <ServiceCard>
          <svg
            slot="ico"
            class="absolute h-10 w-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-second"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="tachometer-alt-fastest"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M120 320c0 13.26-10.74 24-24 24s-24-10.74-24-24 10.74-24 24-24 24 10.74 24 24zm168-168c13.26 0 24-10.74 24-24s-10.74-24-24-24-24 10.74-24 24 10.74 24 24 24zm136 56c13.26 0 24-10.74 24-24s-10.74-24-24-24-24 10.74-24 24 10.74 24 24 24zm71.78 109.38c1.47 8.72-4.44 16.95-13.16 18.41l-131.2 21.87C348.53 390.3 321.41 416 288 416c-35.35 0-64-28.65-64-64s28.65-64 64-64c26.09 0 48.44 15.66 58.41 38.05l130.97-21.83c8.53-1.49 16.93 4.44 18.4 13.16zM320 352c0-17.67-14.33-32-32-32s-32 14.33-32 32 14.33 32 32 32 32-14.33 32-32zM152 160c-13.26 0-24 10.74-24 24s10.74 24 24 24 24-10.74 24-24-10.74-24-24-24zm424 160c0 52.8-14.25 102.26-39.06 144.8-5.61 9.62-16.3 15.2-27.44 15.2h-443c-11.14 0-21.83-5.58-27.44-15.2C14.25 422.26 0 372.8 0 320 0 160.94 128.94 32 288 32s288 128.94 288 288zm-32 0c0-141.16-114.84-256-256-256S32 178.84 32 320c0 45.26 12 89.75 34.7 128.68l442.8-.68C532 409.75 544 365.26 544 320z"
            />
          </svg>

          <div slot="content" class="pt-3">
            <h3 class="font-bold">Rychlost</h3>
            <p>
              Rychlé načítání a lag free interakce je moje nejvyšší priorita.
            </p>
          </div>
        </ServiceCard>
        <ServiceCard>
          <div slot="ico">
            <svg
              class="absolute h-10 w-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-second"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="phone-laptop"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"
              />
            </svg>
          </div>
          <div slot="content" class="pt-3">
            <h3 class="font-bold">Responsibilita</h3>
            <p>Moje řešení je přizpůsobeno všem zařízení.</p>
          </div>
        </ServiceCard>
      </div>

      <div
        data-animate
        class="grid grid-cols-2 animation-duration-300 animation-ease-in animate-right-left"
      >
        <ServiceCard>
          <svg
            slot="ico"
            class="absolute h-10 w-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-second"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="lightbulb"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M176 0C73.05 0-.12 83.54 0 176.24c.06 44.28 16.5 84.67 43.56 115.54C69.21 321.03 93.85 368.68 96 384l.06 75.18c0 3.15.94 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84L256 384c2.26-15.72 26.99-63.19 52.44-92.22C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0zm47.94 454.31L206.85 480h-61.71l-17.09-25.69-.01-6.31h95.9v6.31zm.04-38.31h-95.97l-.07-32h96.08l-.04 32zm60.4-145.32c-13.99 15.96-36.33 48.1-50.58 81.31H118.21c-14.26-33.22-36.59-65.35-50.58-81.31C44.5 244.3 32.13 210.85 32.05 176 31.87 99.01 92.43 32 176 32c79.4 0 144 64.6 144 144 0 34.85-12.65 68.48-35.62 94.68zM176 64c-61.75 0-112 50.25-112 112 0 8.84 7.16 16 16 16s16-7.16 16-16c0-44.11 35.88-80 80-80 8.84 0 16-7.16 16-16s-7.16-16-16-16z"
            />
          </svg>
          <div slot="content" class="pt-3">
            <h3 class="font-bold">Intiutivnost</h3>
            <p>Preferuji snadné používání a intuitivní UI/UX.</p>
          </div>
        </ServiceCard>
        <ServiceCard>
          <svg
            slot="ico"
            class="absolute h-10 w-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-second"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="rocket-launch"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M368.05829,88.0293a55.99512,55.99512,0,1,0,55.99215,55.99414A56.01694,56.01694,0,0,0,368.05829,88.0293Zm0,79.99218a23.998,23.998,0,1,1,23.99608-23.998A24.02247,24.02247,0,0,1,368.05829,168.02148ZM505.1656,19.29492C503.98982,13.832,498.18123,8.0293,492.71835,6.86133,460.63244,0,435.48793,0,410.45084,0,307.26342,0,245.38261,55.19727,199.18734,127.98828H95.01555c-16.293,0-35.58786,11.92188-42.87692,26.4961L2.73242,253.27344A28.4,28.4,0,0,0,.2168,263.97656a24.00493,24.00493,0,0,0,23.99607,23.998H128.13466a95.98845,95.98845,0,0,1,95.98625,95.99023V487.95508a24.00243,24.00243,0,0,0,23.99608,23.998,28.53884,28.53884,0,0,0,10.70116-2.51562l98.71671-49.40039c14.55663-7.28516,26.46678-26.5625,26.46678-42.83984V312.76758C456.568,266.46094,511.982,204.37109,511.982,101.69336,512.0738,76.54492,512.0738,51.39648,505.1656,19.29492ZM37.15427,255.97656l43.60152-87.18164c1.85156-3.70508,10.11523-8.81054,14.25976-8.81054h85.08c-13.93554,28.06054-31.71287,63.99609-47.55465,95.99218l.0664.45313C131.08778,256.377,61.01753,255.97656,37.15427,255.97656Zm314.8513,161.22071c0,4.13085-5.09179,12.375-8.789,14.22461L256.115,475.01172c0-23.90234-.4043-94.06055-.46094-95.60938l.36719.04688c31.99606-15.82617,67.80267-33.58984,95.85929-47.541l.125.002Zm-102.078-70.51368a127.62739,127.62739,0,0,0-84.6347-84.55468c52.02731-103.98633,99.76945-230.13282,245.158-230.13282,21.164,0,41.29684,0,65.41987,4.1875,4.26562,24.377,4.1914,44.38477,4.11523,65.50977C479.98594,246.66406,353.00752,295.1543,249.92753,346.68359Zm-147.494-26.71289C54.35347,319.9707,2.03125,359.31836.168,480H0v32H32v-.23242C203.617,508.42969,216.8885,396.74414,165.80065,345.40039,150.85925,330.38477,127.22255,319.9707,102.43351,319.9707Zm52.914,109.39844c-12.83593,31.14844-57.63667,49.42969-123.36709,50.55078.06446-3.55469-1.11914-127.88867,70.45307-127.88867,15.09569,0,31.11521,6.29492,40.81051,16.03906C156.05456,380.94336,164.6483,406.80273,155.34753,429.36914Z"
            />
          </svg>
          <div slot="content" class="pt-3">
            <h3 class="font-bold">Dynamičnost</h3>
            <p>Stránky nemusí být statické a rád je přivádím k životu.</p>
          </div>
        </ServiceCard>
      </div>
    </div>
    <div
      data-animate
      class="mt-12 animation-duration-300 animation-ease-in animate-bottom-top"
    >
      <p>
        Každý projekt rozděluji do několika fází:
        <b>analýza potřeb projektu</b>, <b>wireframing</b>,
        <b>design a vývoj</b>. Tento proces mi dovoluje vytvořit kvalitní
        produkt zaměřený na cíle klienta.
      </p>
    </div>
  </div>
</section>
