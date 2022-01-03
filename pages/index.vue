<template>
  <div class="container mx-auto">
    <Logo />
    <h1 class="title text-6xl">Nuxt Boilerplate</h1>
    <h2 class="text-center text-xl">
      Nuxt starter pack with Tailwindcss and i18n
    </h2>

    <nav>
      <ul>
        <li>
          <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="link-list">
      <a href="https://nuxtjs.org/"
        target="_blank" rel="noopener noreferrer"
        class="btn"
      >
        Nuxt Documentation
      </a>
      <a href="https://github.com/nuxt/nuxt.js"
        target="_blank" rel="noopener noreferrer"
        class="btn btn-green"
      >
        GitHub
      </a>
    </div>

    <h3 class="text-xl mb-4">My Blog</h3>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.title {
  text-align: center;
}

.link-list {
  @apply w-3/6 mx-auto bg-green-100 p-4;
}
</style>
