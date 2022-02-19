<template>
  <section>
    <section-title
      :title="sectionData.title.text"
      :iconName="sectionData.title.icon"
      :id="sectionData.title.id"
    />
    <article>
      <ul>
        <!-- @focusin="activateGroup(indexA)"
        @mouseover="activateGroup(indexA)"
        @mouseleave="activateGroup(-1)" -->
        <li
          class="group no-native-focus"
          tabindex="0"
          v-for="(data, indexA) in sectionData.content"
          :key="indexA"
        >
          <!-- <section-title-animated :is-active="getActiveStatus(indexA)"> -->
          <section-title-animated >
            {{ data.name }}
          </section-title-animated>
          <ul>
            <li
              v-for="(item, indexB) in data.items"
              :key="indexB"
            >
              <span class="title">{{ item.title }}</span>
              <template v-if="item.description">
                <br><span class="description">
                  {{ item.description }}
                </span>
              </template>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup(){

    const activeIndex = ref(-1)
    const sectionData = {
      title: {
        text: 'Some of my works',
        icon: 'work',
        id: 'work'
      },
      content: [
        {
          name: 'websites',
          items: [
            {
              title: 'Masterpiece Fair London',
              description: 'Frontend',
            },
            {
              title: 'Art Miami websites',
              description: 'Frontend',
            },
            {
              title: 'Art of Miguel Fernandez',
              description: 'Frontend / Backend',
            },
            {
              title: 'Catherine Hunter',
              description: 'Frontend / Backend',
            },
          ]
        },
        {
          name: 'UI / UX',
          items: [
            {
              title: 'Art Fairs Floorplan Redesign',
              description: '',
            },
            {
              title: 'ArtCity design',
              description: '',
            },
            {
              title: 'Website: John Mitchells',
              description: '',
            },
            {
              title: 'Website: 88 Gallery',
              description: '',
            },
          ]
        },
        {
          name: 'Branding',
          items: [
            {
              title: 'Madame Moustache',
              description: '',
            },
            {
              title: 'Isler',
              description: '',
            },
          ]
        },
        {
          name: 'Print',
          items: [
            {
              title: 'Corporate Documentation',
              description: '',
            },
            {
              title: 'MasterArt\'s Directory, Edition 2013 to 2017',
              description: '',
            },
          ]
        },
      ]
    }

    function activateGroup (id) {
      activeIndex.value = id
      // console.log('>> Active index: ', id, activeIndex.value)
    }
    function getActiveStatus(status) {
      // console.log('>> GetActiveIndex', status, activeIndex.value)
      return status === activeIndex.value
    }


    return {
      sectionData,
      activateGroup,
      getActiveStatus,
      activeIndex,
    }
  }
}
</script>

<style lang="postcss" scoped>
ul {

  li.group {

    @apply outline-none mb-8;
    &:last-child {
      margin-bottom: 0;
    }

    &:hover h2::after,
    &:focus h2::after {
      transform: translate(0 ,0);
    }

    .title {
      line-height: 1.25rem;
    }
    .description {
      font-size: 1rem;
      line-height: 1.25rem;
      font-style: italic;
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

    li {
      line-height: 1.75rem;
      margin-bottom: 1rem;
    }
  }
  h2::after {
    transform: translate(-99.2% ,90%);
  }
}
</style>
