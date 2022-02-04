<template>
  <section>
    <section-title
      title="Keep in touch" 
      iconName="chat" 
    />
    <article>
      <p>Contact me for any question</p>
      <button
        type="button" 
        class="button" 
        @mousemove="trackMouse" 
        @click.prevent="sendMail">
        Hire me
      </button>
    </article>
  </section>
</template>

<script>
  export default {
    methods: {
      trackMouse (e) {
        const x = e.offsetX
        const y = e.offsetY
        e.target.style.setProperty('--mouse-x', x + 'px')
        e.target.style.setProperty('--mouse-y', y + 'px')
      },
      sendMail () {
        document.location.href = `mailto:${process.env.BASE_EMAIL}`
      }
    },
  }
</script>

<style lang="postcss" scoped>
  :root {
    --mouse-x: 0;
    --mouse-y: 0;
  }

  section {
    @apply container mx-auto px-8;

    article {
      @apply text-left md:text-center;

      button {
        @apply my-6;
      }
    }
  }

  /* button FX */
  .button {
    position: relative;
    overflow: hidden;
    padding: 1rem 3rem;
    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
    background: var(--blue-dark);
    color: #fff;
    font-size: 1rem;
    line-height: 1.25;
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: background-color 0.6s ease;

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      top: var(--mouse-y);
      left: var(--mouse-x);
      transform-style: flat;
      transform: translate3d(-50%, -50%, 0);
      background: hsl(0, 0%, 100%, 0.1);
      border-radius: 100%;
      transition: width 0.3s ease, height 0.3s ease;
    }
    &:focus,
    &:hover {
      background: var(--blue-darker);
    }
    &:active {
      &:after {
        width: 300px;
        height: 300px;
      }
    }
  }
</style>
