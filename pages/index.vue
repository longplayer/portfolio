<template>
  <div data-scroll-section id="home" class="main">
    <section id="section-hero">
      <the-hero />
    </section>
    <section-about />
    <section-works />
    <section-experience />
    <section-contact />
  </div>
</template>

<script>
  import { onMounted } from '@nuxtjs/composition-api'
  import { useWindowScroll } from '@vueuse/core'

  export default {
    setup() {
      const { x, y } = useWindowScroll()
      onMounted(() => {})
      return { x, y }
    },
  }
</script>

<style lang="postcss">
  .main > section {
    @apply container mx-auto px-8 pb-8;

    &#section-hero {
      max-width: inherit;
      @apply px-0;
    }

    article {
      h2 {
        @apply my-6;
      }

      li {
        @apply mb-2;
      }
    }
  }
</style>
