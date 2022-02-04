<template>
  <div class="app-container">
    <header>
      <TheMenu />
    </header>
    <Nuxt />
    <the-footer />
  </div>
</template>
<script>
export default {
  scrollToTop: false
}
</script>

<style lang="postcss">
  /* layout */
  #__nuxt,
  #__layout {
    width: 100%;
    height: 100%;
  }

  .app-container {
    height: 100%;
    width: 100%;
    position: relative;

    > header {
      position: absolute;
      z-index:4;
      transform: translate(-2rem, 2rem);
      @apply top-0 right-0;

      > .navigation {
        @apply container mx-auto p-6 bg-yellow-300;
      }
    }

    > .main {
      position: relative;
      height: auto;
      z-index: 1;

      section {
        article {
          @apply overflow-hidden mt-8 md:mt-24;
        }
      }
    }

    > footer {

      position: relative;
      width: 100%;
      height: 12rem;
      margin-top: 24rem;
    }
  }
</style>
