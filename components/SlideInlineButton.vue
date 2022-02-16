<template>
  <button
    class="slide--item"
    :style="`background-image: url(${imageData})`">
    <div class="slide--inner">
      <h3 class="slide--title">{{ title }}</h3>
      <p class="slide--description">{{ description }}</p>
    </div>
  </button>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

const DEFAULT_IMAGE = 'https://picsum.photos/400?random=10'

export default {
  props: {
    image: {
      type: String,
      default: DEFAULT_IMAGE,
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  setup(props) {
    const imageData = computed(() => validateImageData(props.image))

    function validateImageData(data) {
      const isValid = (d) => typeof d === 'string' && d.length > 0
      if (isValid(data)) return data
      return DEFAULT_IMAGE
    }

    return {
      imageData,
    }
  }

}
</script>

<style lang="postcss" scoped>
  button.slide--item {

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @apply outline-none border-gray-100 border;


    .slide--inner {
      height: 100%;
      background: rgb(17,24,93);
      background: linear-gradient(190deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,.8) 100%);
      color: #fff;
      @apply flex flex-col justify-end flex-wrap p-3;

      .slide--title,
      .slide--description {
        opacity: 0;
        transform: scale(1, 0);
      }
    }

    &:hover,
    &:focus {
      text-align: left;

      .slide--title,
      .slide--description {
        opacity: 1;
        transform: scale(1, 1);
        transition: opacity 300ms ease 200ms,
          transform 150ms ease 300ms;
      }
    }
  }

  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  p {
    font-size: .75rem;
    line-height: 1rem;
  }
  .p-slide-index {
    font-size: .75rem; /* 10px */
    line-height: .75rem;
  }

  @media screen(md) {
    h3 {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .p-slide-index {
      font-size: .75rem; /* 12px */
      line-height: .75rem;
    }
  }
</style>
