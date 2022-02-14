<template>
  <section>
    <section-title
      title="Some of my works"
      iconName="work"
      id="works"
    />
    <article>
      <ul>
        <li class="group" tabindex="0">
          <h2>
            <span>Websites</span>
          </h2>
          <ul>
            <li>Masterpiece Fair London</li>
            <li>Art Miami</li>
            <li>Art Wynwood</li>
            <li>Art of Miguel Fernandez</li>
            <li>Catherine Hunter</li>
          </ul>
        </li>
        <li class="group" tabindex="0">
          <h2>
            <span>UI / UX</span>
          </h2>
          <ul>
            <li>Art Fairs Floorplan redesign</li>
            <li>ArtCity app</li>
            <li>Mitchells' website</li>
            <li>88 Gallery's website</li>
          </ul>
        </li>
        <li class="group" tabindex="0">
          <h2>
            <span>Branding</span>
          </h2>
          <ul>
            <li>Madame Moustache</li>
            <li>Isler</li>
          </ul>
        </li>
        <li class="group" tabindex="0">
          <h2>
            <span>Print</span>
          </h2>
          <ul>
            <li>AS Documentayion</li>
            <li>MasterArt Directory 2013 to 2017</li>
          </ul>
        </li>
      </ul>

    </article>
  </section>
</template>

<style lang="postcss" scoped>
ul {

  li.group {

    @apply outline-none mb-8;
    &:last-child {
      margin-bottom: 0;
    }

    h2 {
      @apply relative mt-0 mb-8  py-8 overflow-hidden;

      span {
        z-index: 2;
        @apply relative;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        transform: translate(-98% ,90%);
        transition: transform 250ms ease-in;
        @apply bg-secondary;
      }

      &.active::after {
        transform: translate(0 ,0);
      }
    }

    &:hover h2::after,
    &:focus h2::after {
      transform: translate(0 ,0);
    }
  }
}

@media screen(md) {
  article > ul {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-gap: 16px;
    align-content: start;
  }
  h2::after {
    transform: translate(-99.2% ,90%);
  }
}
</style>
