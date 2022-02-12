<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="locomotiveConfig"
    @init="onScrollinit"
    @scroll="onScroll"
    @scrollend="onScrollEnd"
  >
    <div class="app-container">
      <header>
        <TheMenu :ls="locomotive"/>
      </header>
      <Nuxt />
      <the-footer data-scroll-section />
    </div>
  </LocomotiveScroll>

</template>
<script>
import { onMounted, ref } from '@nuxtjs/composition-api'

const locomotiveBaseConfig = {
  smooth: true,
  direction: 'vertical',
}

export default {
  setup() {
    const scroller = ref(null)
    const locomotive = ref(null)
    const locomotiveConfig = {
      ...locomotiveBaseConfig,
      smartphone: locomotiveBaseConfig,
      tablet: locomotiveBaseConfig,
    }

    function onScrollinit () {
      // console.log('>>scroll init')
    }

    function onScroll () {
      // console.log('>>scrolling...')
    }

    function onScrollEnd () {
      console.log('>>scroll ended')
    }

    onMounted(() => {
      // console.log('>> MOUNTED', scroller.value.locomotive)
      locomotive.value = scroller.value.locomotive
    })

    return {
      locomotiveConfig,
      locomotive,
      scroller,
      onScroll,
      onScrollinit,
      onScrollEnd,
    }
  }
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
