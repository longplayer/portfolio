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
        <TheMenu
          :ls="locomotive"
          :is-sticky="isSticky" />
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
    const isSticky = ref(false)
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
      // console.log('>>scroll ended')
    }

    function initStickyHandler(position, ls) {
      const el = ls.el
      const triggerY = (ls.scroll.windowHeight / 100) * 25
      const classValue = 'sticky-menu'

      if (position.scroll.y < triggerY) {
        if(el.classList.contains(classValue)) {
          el.classList.remove(classValue)
          // console.log('>remove class', classValue)
        }
      } else {
        if(!el.classList.contains(classValue)) {
          el.classList.add(classValue)
          // console.log('>add class', classValue)
        }
      }
    }

    onMounted(() => {
      // console.log('>> MOUNTED', isSticky.value)
      locomotive.value = scroller.value.locomotive
      locomotive.value.on('scroll', (position) => {
        initStickyHandler(position, locomotive.value) //add class for sticy menu behavior
        isSticky.value = locomotive.value.el.classList.contains('sticky-menu')
      })
    })

    return {
      locomotiveConfig,
      locomotive,
      scroller,
      onScroll,
      onScrollinit,
      onScrollEnd,
      isSticky,
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
