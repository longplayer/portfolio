<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 fill-current"
    :class="isTrue ? trueClass : falseClass"
    viewBox="0 0 2048 2048"
    stroke="none"
    >
    <path v-if="isTrue" :d="icon.true" />
    <path v-else  :d="icon.false" />
  </svg>
</template>

<script>
// vue 3 version
// import { ref, computed } from 'vue'
// export default {
//   props: {
//     isTrue: {
//       type: Boolean,
//       required: true
//     },
//     svg: {
//       type: Object,
//       required: true
//     }
//   },
//   setup (props) {
//     const view = ref(0)
//     const trueClass = ref('text-green-700')
//     const falseClass = ref('text-red-700')
//     const icon = computed(() => props.svg)

//     return {
//       view,
//       trueClass,
//       falseClass,
//       icon
//     }
//   }
// }
</script>
