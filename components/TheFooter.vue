<template>
  <footer>
    <div class="footer--inner">
      <p>content</p>
    </div>
    <span class="separator"></span>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  
  background-color: var(--blue-dark);
  @apply flex justify-center content-center;

  .separator {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--blue-dark);
    z-index: 0;
    transform: skewY(-5deg);
    transform-origin: top left;
  }

  .footer--inner {
    flex: 0 0 90%;
    width: 90%;
    height: 80%;
    z-index: 1;
    @apply relative m-auto text-gray-50;
  }
}
</style>
