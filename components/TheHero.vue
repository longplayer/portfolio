<template>
  <div class="hero">
    <figure>
      <img :src="require('~/assets/img/hero-1.jpg')" alt="Montains landscape" />
    </figure>
    <div class="intro">
      <div class="slide-text">
        <div class="top">
          <div class="top--inner">
            <h1>Hi I'm</h1>
            <h1><strong>Pablo Contreras</strong></h1>
          </div>
        </div>
        <hr />
        <div class="bottom">
          <div class="bottom--inner">
            <p>I am a frontend developer who creates websites.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.hero {
  
  position: relative;
  overflow: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  @apply w-full h-screen;

  > figure {
    position: absolute;
    z-index: 1;
    @apply w-full h-full left-0 top-0;

    &::before {
      content: '';
      display: block;
      z-index: 1;
      background: rgb(17,24,93);
      background: linear-gradient(234deg, rgba(17,24,93,0.1) 0%, rgba(0,3,32,0.5) 100%);
      @apply w-full h-full absolute top-0 left-0;
    }

    img {
      object-fit: cover;
      @apply w-full h-full;
    }
  }

  > .intro {
    position: absolute;
    bottom: 0;
    transform: translate(4rem, -8rem);
    width: auto;
    height: auto;
    z-index: 2;
    overflow: hidden;
    @apply text-gray-50;

    .slide-text {
      position: relative;

      .top, .bottom {
        top: 0;
        height: 50%;
        overflow: hidden;
      }

      .top {
        &--inner {
          animation: showTopText 1s;
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
          bottom: 0;
          transform: translate(0, 100%);
        }
      }

      .bottom {
        &--inner {
          animation: showBottomText 0.5s;
          animation-delay: 1.75s;
          animation-fill-mode: forwards;
          top: 0;
          transform: translate(0, -100%);
        }
      }
    }
  }

  h1 {
    text-transform: capitalize;
    font-weight: 200;
  }

  p {
    @apply px-1;
  }

  hr {
    @apply my-8;
  }

  @media screen(md) {
    h1 {
      font-size: 8rem;
      line-height: 8rem;
    }
  }
}


@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
</style>
