<template>
  <div data-scroll-container id="home" class="main">
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
export default {
  data () {
    return {
      lsm: null
    }
  },
  mounted () {
    this.lsm = new this.locomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })
    console.log('>lsm', this.lsm)
  }
}
</script>

<style lang="postcss">
@import url("locomotive-scroll/dist/locomotive-scroll.css");

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
