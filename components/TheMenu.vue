<template>
  <nav class="navigation" :class="{'navigation--open': isMenuOpen}">
    <div class="navigation__floater">
      <nuxt-link :class="'logo__link'" :to="{ page: 'index' }">
        <the-logo class="logo__image" defaultTheme="light"/>
      </nuxt-link>
      <div class="navigation__trigger">
        <label>
          <input type="checkbox" class="toggler" @click="doToggleMenu($event)">
          <div class="hamburger"><div></div></div>
        </label>
      </div>
    </div>
    <ul v-if="isMenuOpen" class="navigation__list nav-visible">
      <li class="navigation__item">
        <nuxt-link :class="'navigation__link'" :to="{ page: 'index', hash: '#about'}">About Me</nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link :class="'navigation__link'" :to="{ page: 'index', hash: '#works'}">Works</nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link :class="'navigation__link'" :to="{ page: 'index', hash: '#experience'}">Experience</nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link :class="'navigation__link'" :to="{ page: 'index', hash: '#contact'}">Hire Me</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    doToggleMenu: function (event) {
      this.isMenuOpen = event.target.checked
    }
  }
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

  &__list {
    /* background-color: blueviolet; */
  }
  &__item {
    /* background-color: green; */
  }
  &__link {}

  .toggler{
    /* ALWAYS KEEPING THE TOGGLER OR THE CHECKBOX ON TOP OF EVERYTHING :  */
      z-index:2;
      height: 64px;
      width: 64px;
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
      height: 64px;
      width: 64px;
      padding: 0.5rem 0;
      transition: all 500ms ease ;
      @apply absolute top-0 left-0 flex items-center justify-center;

      /* CREATING THE MIDDLE LINE OF THE HAMBURGER : */
      > div{
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
              top: -24px;
              background: white;
              width: 100%;
              height: 2px;
              transition: all  0.4s ease;
          }

          &::after{
              top: 24px;
          }
      }
  }

  .toggler,
  .hamburger {
    width: 100%;
  }



  &--open {

    &__floater {

    }

    /* background-color: springgreen; */
    .navigation__list {}
    .hamburger {
      transform: scale(.2);
      opacity: 0;
    }
  }





}


</style>
