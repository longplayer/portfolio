<template>
  <footer>
    <div class="footer--inner">
      <ul>
        <li v-for="(link, id) in links" :key="id">
          <a :href="link.url" :title="link.title" target="blank" rel="noopener noreferrer">
            <base-icon :name="link.name" :icon-marge="0" />
          </a>
        </li>
      </ul>
    </div>
    <span class="separator"></span>
  </footer>
</template>

<script>
export default {
  setup() {
    const links = [
      {
        name: 'github',
        title: 'Visit my Github profile',
        url: 'https://github.com/longplayer',
      },
      {
        name: 'gitlab',
        title: 'Visit my Gitlab profile',
        url: 'https://gitlab.com/longplayer',
      },
      {
        name: 'twitter',
        title: 'Visit my Twitter profile',
        url: 'https://twitter.com/longplayer80/likes',
      },
    ]

    return { links }
  },
}
</script>


<style lang="postcss" scoped>
footer {

  background-color: var(--blue-dark);
  @apply flex justify-center content-center;

  .separator {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--blue-dark);
    z-index: 0;
    transform: skewY(-5deg);
    transform-origin: top left;
  }

  .footer--inner {
    flex: 0 0 90%;
    width: 90%;
    height: auto;
    z-index: 1;
    @apply relative m-auto text-gray-50;

    ul {
      display: block;
      text-align: center;

      li {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;

        a {
          display: block;
          @apply p-4;
        }
      }
    }
  }
}
</style>
