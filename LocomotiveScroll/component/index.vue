<template>
  <div v-locomotive="{ options }" class="js-locomotive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LocomotiveScroll',
  emits: ['init', 'scroll', 'scrollend'],
  directives: {
    locomotive: {
      inserted(el, binding, vnode) {
        vnode.context.locomotive = new vnode.context.LocomotiveScroll({
          el,
          ...binding.value.options,
        })
        vnode.context.locomotive.on('scroll', (e) => {
          vnode.context.onScroll(e, () => {
            const isScrolling = vnode.context.locomotive.scroll.isScrolling
            if (vnode.context.isLastScrollEvent(isScrolling)) vnode.context.$emit('scrollend')
          })
          vnode.context.$emit('scroll')
        })
        vnode.context.$emit('init')
      },
      unbind(el, binding, vnode) {
        vnode.context.locomotive.destroy()
        vnode.context.locomotive = undefined
      },
    },
  },
  props: {
    gettedOptions: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    scrollCounter: 0,
    locomotive: undefined,
    defaultOptions: {
      smooth: true,
    },
  }),
  computed: {
    options() {
      return { ...this.defaultOptions, ...this.gettedOptions }
    },
  },
  /**
   *  You can remove mounted hook if you don't needs custom updates
   *  Call this.$nuxt.$emit('update-locomotive') wherever you want
   */
  mounted() {
    this.$nuxt.$on('update-locomotive', () => {
      // console.log('>>update-locomotive event')
      this?.locomotive?.update()
    })
  },
  methods: {
    isLastScrollEvent(isScrolling) {
      if (!isScrolling) this.scrollCounter++

      if (this.scrollCounter === 1) {
        this.scrollCounter = 0
        return true
      }

      return false
    },
    onScroll(e, atEnd) {
      const scrollState = this.$store.getters['scroll/getScroll']
      const updatedScrollData = {
        isScrolling: this.locomotive.scroll.isScrolling,
          limit: { ...e.limit },
          ...e.scroll, // x, y
      }

      if (typeof scrollState !== 'undefined') {
        this.$store.dispatch('scroll/setScroll', updatedScrollData)

        // use this callback to detect the last scrolling event and emit an event
        // scrollTo() callback (from locomotivescroll) doesn't allow do this
        // > Callback's called when scrollTo completes (note that it won't wait for lerp to stabilize)
        atEnd()
      }
    },
  },
}
</script>

<style>
@import './style.css';
</style>
