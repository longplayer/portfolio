<template>
  <section>
    <section-title
      title="What can I do"
      iconName="done"
      id="experience"
    />
    <article
      @focus="onSectionInOut"
      @focusout="onSectionInOut"
    >
      <ul>
          <!-- @focusout="activateGroup(-1)" -->
        <li
          class="col-double no-native-focus"
          tabindex="0"
          v-for="(data, indexA) in sectionData.content"
          :key="indexA"
          @focusin="activateGroup(indexA)"
          @mouseover="activateGroup(indexA)"
          @mouseleave="activateGroup(-1)"
        >
          <div class="content">
            <!-- <section-title-animated :is-active="getActiveStatus(indexA)"> -->
            <section-title-animated :is-active="false">
              {{ data.name }}
            </section-title-animated>
            <ul>
              <li
                v-for="(item, indexB) in data.items"
                :key="indexB"
              >
                <strong>{{ item.title }}</strong> {{ item.description }}
              </li>
            </ul>
          </div>
            <component :is="'slide-inline'">
              <component :is="'slide-inline-button'"
                v-for="(slide, indexC) in data.slides"
                :key="indexC"
                :title="slide.title ? slide.title : ''"
                :description="slide.description ? slide.description : ''"
                :image="slide.image ? slide.image : ''"
              >{{ slide.image }}</component>
            </component>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import SectionTitleAnimated from './SectionTitleAnimated.vue'
export default {
  components: { SectionTitleAnimated },
  setup () {
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
              title: 'Creation',
              description: 'create all kinds of websites (blog, artists, galleries, more.)',
            },
            {
              title: 'Refont/Refresh',
              description: 'upgrade of your website to the latest web standards and improve your SEO score',
            },
            {
              title: 'Wordpress',
              description: 'create customized templates according to your specifications',
            },
          ],
          slides: [
            {
              title: '88 Gallery',
              description: 'Contemproray Art Gallery located in London',
              image: 'https://www.padesignart.com/paris/assets/uploads/88-gallery.jpg'
            },
            {
              title: 'Hello World',
              description: 'This is a small description for you',
              image: 'https://picsum.photos/400?random=1'
            },
            {
              title: 'Hello World',
              description: 'This is a small description for you',
              image: ''
            },
          ]
        },
        {
          name: 'Graphic Design',
          items: [
            {
              title: 'Logo Creation',
              description: 'create from scratch or just update your logo',
            },
            {
              title: 'Poster / Flyer / Visit Cards',
              description: 'design high-end visuals to suit all your requirements',
            },
          ],
          slides: [
            {
              title: 'Hello World',
              description: 'This is a small description for you',
              image: ''
            },
            {
              title: 'Hello World',
              description: 'This is a small description for you',
              image: ''
            },
          ]
        },
        {
          name: 'Photography',
          items: [
            {
              title: 'High definition 360° panoramics',
              description: '360-degree image capture on site',
            },
            {
              title: 'General ambiance',
              description: 'take the mood of your business and share it on your social networks or your website',
            },
          ],
          slides: [
            {
              title: 'Hello World',
              description: 'This is a small description for you',
              image: ''
            },
            {
              title: 'Hello World',
              description: 'This is a small description for you',
              image: ''
            },
          ]
        },
      ]
    }

    function activateGroup (id) {
      // activeIndex.value = id
      console.log('>> Active index: ', id, activeIndex.value)
    }
    function getActiveStatus(status) {
      console.log('>> GetActiveIndex', status, activeIndex.value, (status === activeIndex.value))
      // return status === activeIndex.value
    }
    function onSectionInOut(event) {
      const type = event.type.toLowerCase()
      const targetTag = event.target.tagName.toLowerCase()

      console.log(event.target, type, targetTag)

      // Ignore other targets
      if (targetTag === 'li') {
        if(type === 'focusin') {}
        if(type === 'focusout') {}
      }
    }

    return {
      activateGroup,
      sectionData,
      activeIndex,
      getActiveStatus,
      onSectionInOut
    }
  }
}
</script>

<style lang="postcss" scoped>

.col-double {

  @apply flex flex-wrap content-start my-8;
  &:first-child {
    @apply mt-0;
  }
  &:last-child {
    @apply mb-0;
  }
  &:hover h2::after,
  &:focus h2::after {
    transform: translate(0 ,0);
  }

  .content {
    flex: 1 1 100%;
    @apply mb-8 lg:pr-4;

    h2 {
      margin-top: 0;
    }
    /* .main > section article h2 {} */
  }
  .slides {
    flex: 1 1 100%;
    width: 100%;
    min-height: 16rem;
  }

  @media screen(lg) {
    .content {
      flex: 1 1 50%;
      width: 50%;
    }
    .slides {
      flex: 1 1 50%;
      width: 50%;
      min-height: 24rem;
    }

  }
}
</style>
