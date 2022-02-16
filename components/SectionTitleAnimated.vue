<template>
  <h2 :class="{'active': show}">
    <span>
      <slot></slot>
    </span>
  </h2>
</template>

<script>
import { computed, onMounted } from '@nuxtjs/composition-api'
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const show = computed(() => props.isActive)

    onMounted(() => {
      // console.log(props.isActive)
    })

    return { show }
  },
}
</script>

<style lang="postcss" scoped>
h2 {
  @apply relative mt-0 mb-8  py-8 overflow-hidden;

  span {
    z-index: 2;
    @apply relative;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    transform: translate(-98% ,90%);
    transition: transform 250ms ease-in;
    @apply bg-secondary;
  }

  &:hover::after,
  &.active::after {
    transform: translate(0 ,0);
  }
}
</style>

<style lang="postcss">
.selected {
  &:hover h2::after,
  &:focus h2::after {
    transform: translate(0 ,0);
  }
}
</style>
