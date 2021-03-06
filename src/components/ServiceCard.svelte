<div class="text-center m-4">
  <div class="relative block h-28">
    <slot name="ico" />
    <svg
      class="absolute h-32 w-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#AEB1D555"
        d="M44.6,-60.1C55.9,-53.1,61.8,-37.6,69.1,-21.1C76.3,-4.6,84.9,12.9,82.7,29.2C80.6,45.4,67.8,60.5,52.2,68.1C36.6,75.7,18.3,75.8,0.4,75.3C-17.6,74.8,-35.1,73.7,-47.8,65.1C-60.4,56.6,-68.1,40.6,-74.1,23.7C-80.2,6.8,-84.6,-11.1,-78.3,-23.9C-72,-36.8,-55.1,-44.6,-40.2,-50.5C-25.4,-56.3,-12.7,-60.2,2,-63C16.6,-65.7,33.3,-67.2,44.6,-60.1Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
  <slot name="content" />
</div>
