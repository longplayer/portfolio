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
      position: fixed;
      z-index:4;
      @apply top-0 right-0 w-full h-auto;
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
