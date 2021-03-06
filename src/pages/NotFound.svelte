<script>
  let pageX = document.documentElement.clientHeight;
  let pageY = document.documentElement.clientWidth;
  let mouseX = 0;
  let mouseY = 0;

  function moveEyes(e) {
    moseY = e.pageY;
    let yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
    mouseX = e.pageX / -pageX;
    let xAxis = -mouseX * 100 - 100;
    let ghostEyes = document.querySelector(".box__ghost-eyes");
    ghostEyes.style.transform = `translate(${xAxis}%,-${yAxis}%)`;
  }
</script>

<svelte:head>
  <title>404 | Stránka nenalezena</title>
</svelte:head>

<div class="error" on:mousemove={moveEyes}>
  <div class="box">
    <div class="box__ghost">
      <div class="symbol" />
      <div class="symbol" />
      <div class="symbol" />
      <div class="symbol" />
      <div class="symbol" />
      <div class="symbol" />

      <div class="box__ghost-container">
        <div class="box__ghost-eyes">
          <div class="box__eye-left" />
          <div class="box__eye-right" />
        </div>
        <div class="box__ghost-bottom">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div class="box__ghost-shadow" />
    </div>

    <div class="box__description">
      <div class="box__description-container">
        <div class="box__description-title">Whoops!</div>
        <div class="box__description-text">
          Zdá se, že jsme nemohli najít stránku, kterou hledáte
        </div>
      </div>
      <router-link to="/" class="box__button"> Go back</router-link>
    </div>
  </div>
</div>
