<template>
    <div class="icon-wrapper">
        <!-- :viewport="`0 0 ${width} ${height}`" -->
      <svg class='icon'
        :width="width"
        :height="height"
        :style="`margin-${textPosition}:${marge}`"
        viewport="0 0 48 48"
        preserveAspectRatio="xMidYMid meet" 
      >
        <use v-bind="{'xlink:href':'/portfolio/gm-sprite.svg#ico-' + name}"/>
      </svg>
      <slot></slot>
    </div>
</template>

<script>
// vue 2 version
export default {

  name: 'BaseIcon',
  
  props: {
    name: String,
    iconMarge: {
      type: String,
      default: '0.5rem'
    },
    textPosition: {
      type: String,
      default: 'right',
    },
    width: {  
      type: [Number, String],
      default: 48
    },
    height: {
      type: [Number, String],
      default: 48
    }
  },

  computed: {
    marge: function () {
      return this.iconMarge
    }
  }
}

// vue3 version
// import { computed } from 'vue'
// export default {
//   name: 'Icon',
//   props: {
//     name: String,
//     iconMarge: {
//       type: String,
//       default: '0.5rem'
//     },
//     textPosition: {
//       type: String,
//       default: 'right'
//     },
//     width: {
//       type: [Number, String],
//       default: 24
//     },
//     height: {
//       type: [Number, String],
//       default: 24
//     }
//   },
//   setup (props) {
//     const marge = computed(() => props.iconMarge)
//     return { marge }
//   }
// }
</script>

<style lang="postcss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-size: 1rem;
  font-weight: 600;

  > svg.icon {
    stroke: none;
    stroke-width: 0;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: currentColor;
    margin-right: 0.25rem; /* 8px */
    width: 1.5rem; /* force size on mobile */
    height: 1.5rem;
  }
}
@media screen(md) {
  .icon-wrapper > svg.icon {
    width: auto;
    height: auto;
  }
}
</style>
