<template>
  <section>
    <section-title
      title="About me"
      iconName="person"
      id="about"
    />
    <article
        id="portrait"
      >
      <p>My name is Pablo. I'm a web developper always looking for new challenges. I've been making websites for about ten years, and I'm still passionate about it.  I love frontend, but I have also experience in backend. These are some technologies I love: javascript, vuejs, nuxt, tailwindcss, node-js.</p>
      <figure>
        <img :src="require('~/assets/img/lp-photo.png')" alt="Pablo portrait"></figure>
    </article>
  </section>
</template>

<script>
</script>

<style lang="postcss" scoped>
.main > section {
  max-width: 960px;

  article {
    @apply flex flex-wrap;

    p {
      flex: 1 1 auto;
      text-align: justify;
    }

    figure {
      flex: 1 1 auto;
      border-radius: 50%;
      overflow: hidden;
      aspect-ratio: 1 / 1;
      max-width: 15rem;

      @apply mt-8 mx-auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

}

@media screen(md) {

  .main > section {

    article p {
      flex: 1 1 60%;
      text-align: left;
    }
    article figure {
      @apply ml-8 my-auto;
    }
  }
}
</style>
