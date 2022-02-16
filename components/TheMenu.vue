<template>
  <nav
    class="navigation"
    :class="{'navigation--open': isMenuOpen, 'navigation--sticky': isSticky }"
  >
    <div class="navigation__floater">
      <button :class="'logo__link'" @click="scrollToTarget('top')">
        <the-logo class="logo__image" defaultTheme="light"/>
      </button>
      <div class="navigation__trigger">
        <label>
          <input ref="togglerInput" type="checkbox" class="toggler" @click="updateToggleStatus($event)">
          <div class="hamburger"><div></div></div>
        </label>
      </div>
    </div>
    <div class="navigation__fixer">
      <template v-if="isMenuOpen">
        <button class="close-menu" @click="setToggleStatusTo(false)">X</button>
        <ul class="navigation__list">
          <li class="navigation__item">
            <button
              :class="'navigation__link'"
              @click="scrollToTarget('#about')"
            >
              About Me
            </button>
          </li>
          <li class="navigation__item">
            <button
              :to="false"
              :class="'navigation__link'"
              @click="scrollToTarget('#works')"
            >
              Works
            </button>
          </li>
          <li class="navigation__item">
            <button
              :to="false"
              :class="'navigation__link'"
              @click="scrollToTarget('#experience')"
            >
              Experience
            </button>
          </li>
          <li class="navigation__item">
            <button
              :to="false"
              :class="'navigation__link'"
              @click="scrollToTarget('#contact')"
            >
              Hire Me
            </button>
          </li>
        </ul>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isMenuOpen: false,
    }
  },
  props: {
    ls: {
      type: Object,
      required: false,
    },
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateToggleStatus: function (event) {
      this.isMenuOpen = event.target.checked
    },
    setToggleStatusTo: function(value) {
      this.isMenuOpen = value
      this.$refs.togglerInput.checked = value
    },
    updateHistory: function(isHash, selector) {
      if (isHash) {
        this.$router.push({path: '/', hash: selector})
      } else {
        this.$router.push({path: '/'})
      }
    },
    scrollToTarget: function (targetSelector) {

      // locomtive scroll allow keyword value as targets
      // https://openbase.com/js/locomotive-scroll/documentation#instance-methods
      const isHashTarget = targetSelector.slice(0, 1) === '#'

      if(isHashTarget && this.$route.hash === targetSelector) return

      const locoScroll = this.ls // locomotiveScroll instance sent from parent
      const target = isHashTarget ? document.querySelector(targetSelector) : targetSelector

      // console.log('scroll to target: ', target)

      locoScroll.scrollTo(target) // allowed values: string, dom node, int
      locoScroll.update()

      // console.log(this.isSticky)
      this.setToggleStatusTo(false)
      this.updateHistory(isHashTarget, targetSelector)
    }
  },

  // lifecycle hooks
  mounted() {
    this.$nextTick(function() {})
  },
  created() {},
  updated() {},
}
</script>

<style lang="postcss">

.navigation {

  /* background-color: tomato; */
  height: auto;
  @apply relative h-auto;

  &__floater {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translate(50%, 50%);
    width: 11.75rem;
    @apply block h-auto mx-auto;
    @screen md {
      right: 0;
      transform: translate(-15%, 15%);
    }
    /* background-color: #646; */

    > .logo__link {
      display: block;
      .logo__image {
        @apply w-full h-auto m-0;
      }
    }
  }

  &__trigger {
    display: block;
    position: relative;
    /* background-color: burlywood; */
    @apply w-full h-16 mx-auto my-4;
  }

  &__fixer {
    .close-menu {
      transform: translate(-50%, 50%);
      @apply absolute right-0 top-0 w-14 h-14;
    }
  }

  &__list {
    /* background-color: blueviolet; */
  }
  &__item {
    /* background-color: green; */
  }
  &__link {

    &::before {
      transform: scaleX(0);
      transform-origin: bottom right;
    }
    &:hover::before,
    &:active::before,
    &:focus::before {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    &:focus {
      outline: none;
    }

    &::before {
      content: " ";
      display: block;
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      inset: 0 0 0 0;
      z-index: -1;
      transition: transform .3s ease;
      @apply bg-secondary;
    }

    position: relative;
    z-index: 1;
    font-size: 2.5rem;
    line-height: 3rem;
    @apply py-2 my-4;
    @screen md {
      font-size: 3rem;
      line-height: 3.75rem;
    }
  }

  .toggler{
    /* ALWAYS KEEPING THE TOGGLER OR THE CHECKBOX ON TOP OF EVERYTHING :  */
      z-index:2;
      height: 4rem;
      width: 4rem;
      @apply absolute top-0 left-0 cursor-pointer opacity-0;

      /* IF THE TOGGLER IS IN ITS CHECKED STATE, THEN SETTING THE BACKGROUND OF THE MIDDLE LAYER TO COMPLETE BLACK AND OPAQUE :  */
      &:checked + .hamburger > div{
          background: rgba(0,0,0,0);
      }

      &:checked + .hamburger > div::before{
          top: 0;
          transform: rotate(45deg);
          background: black;
      }

      /* AND ROTATING THE TOP AND BOTTOM LINES :  */
      &:checked + .hamburger > div::after{
          top: 0;
          transform: rotate(135deg);
          background: black;
      }

  }

  .hamburger{
      height: 4rem;
      width: 4rem;
      padding: 0.5rem 0;
      transition: all 500ms ease ;
      @apply absolute top-0 left-0 flex items-center justify-center;

      /* CREATING THE MIDDLE LINE OF THE HAMBURGER : */
      > div {
        position: relative;
        top: 0;
        left: 0;
        background: white;
        height: 2px;
        width: 100%;
        transition: all  0.4s ease;

        /* CREATING THE TOP AND BOTTOM LINES :
        TOP AT -10PX ABOVE THE MIDDLE ONE AND BOTTOM ONE IS 10PX BELOW THE MIDDLE: */
        &::before,
        &::after{
          content: '';
          position: absolute;
          background: white;
          width: 100%;
          height: 2px;
          top: 0;
          transform: translate(0, -1.5rem);
          transition: all  0.4s ease;
        }

        &::after{
          transform: translate(0, 1.5rem);
        }
      }
  }

  .toggler,
  .hamburger {
    width: 100%;
  }



  &--open {

    .navigation__floater {}

    .navigation__fixer {
      position: relative;
      height: 100vh;
      width: 100%;
      @apply flex bg-white;

      .navigation__list {
        @apply m-auto;
      }
    }

    /* background-color: springgreen; */
    .hamburger {
      transform: scale(.2);
      opacity: 0;
    }
  }

  &--sticky {

    .navigation__floater {
      display: flex;
      transform: translate(0, 0);
      @apply bg-primary right-0 w-full h-16;
      @screen lg {
        width: inherit;
        display: inherit;
        height: inherit;
        background-color: rgba(0, 0, 0, .2);
      }

      .logo__link {
        @apply h-auto w-24;
        .logo__image {
          @apply h-auto w-24 p-2;

        }
      }

      .navigation__trigger {
        width: 4rem;
        @apply m-auto mr-4;

        .toggler,
        .hamburger {
          width: 100%;
          height: 100%;
          padding: 0;
        }

        .hamburger {
          > div {

            &::before{
              transform: translate(0, -.75rem);
            }
            &::after{
              transform: translate(0, .75rem);
            }
          }
        }

      }

      /* @screen 2xl {
        .logo__link {
          width: inherit;
          height: inherit;
          .logo__image {
            width: 12rem;
            height: inherit;
          }
        }
        .navigation__trigger {
          width: inherit;
          margin: 0 1rem;
        }
      } */

    }
    .navigation__fixer {}
  }





}


</style>
