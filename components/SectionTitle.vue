<template>
  <header>
    <h1>{{ title }}</h1>
    <div class="ico--circular">
      <base-icon
        :name="iconName"
        height="48"
        width="48"
        iconMarge="0"
      />
    </div>
    <hr>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      default: 'person'
    },
  }
}
</script>

<style lang="postcss" scoped>

header {

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 10;
  @apply bg-white md:relative;

  > h1 {
    flex: 1 1 80%;
    @apply my-8;
  }
  > div {
    flex: 0 0 3rem;
    @apply m-0;
  }
  > hr {
    flex: 1 1 100%;
    margin: 0 auto;
    width: 100%;
    height: auto;
    border: none;

    &::after {
      content: '';
      display:block;
      position: relative;
      width: 40%;
      height: .25rem;
      margin: 0 auto 0 0;
      @apply bg-yellow-300;
    }
  }

  @media screen(md) {
    > h1 {
      flex: 0 1 auto;
      @apply ml-auto my-24;
    }
    > div {
      flex: 0 0 6rem;
      @apply ml-20 mr-auto;
    }
    > hr {
      flex: 1 1 100%;

      &::after {
        width: 6rem;
        margin: 0 auto;
      }
    }
  }
}

/* circular icon types (put under tailwind utilities layer)*/
.ico--circular {
  aspect-ratio: 1 / 1;
  border: 2px solid currentColor;
  border-radius: 1.5rem;
  @apply inline-block w-12 h-12 overflow-hidden;

  .icon-wrapper {
    @apply flex justify-center content-center h-full;
  }
}

@media screen(md) {
  .ico--circular {
    border-width: 4px;
    border-radius: 3rem;
    @apply w-24 h-24;
  }
}

</style>
