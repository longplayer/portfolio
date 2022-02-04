<template>
  <div class="slides">
    <div class="slides--container">
      <slot><!-- slides location --></slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
.slides {
  height: auto;

  &--container {
    @apply h-full flex flex-nowrap;

    .slide--item {
      flex: 1 1 0%;
      overflow: hidden;
      transition: flex-basis 400ms ease;

      &:hover,
      &:focus {
        flex: 1 1 70%;
      }
    }
  }
}
</style>
