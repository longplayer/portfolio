<template>
  <section>
    <section-title
      title="What can I do"
      iconName="done"
      id="experience"
    />
    <article>
      <ul>
        <li class="col-double">
          <div class="content">
            <h2>Websites:</h2>
            <ul>
              <li><strong>Creation</strong>: create all kinds of websites (blog, artists, galleries, more.)</li>
              <li><strong>Refont/Refresh</strong>: upgrade of your website to the latest web standards and improve your SEO score</li>
              <li><strong>Wordpress</strong>: create customized templates according to your specifications</li>
            </ul>
          </div>
          <slide-inline>
            <slide-inline-button
              title="88 Gallery"
              description="Contemproray Art Gallery located in London"
              image="https://www.padesignart.com/paris/assets/uploads/88-gallery.jpg" />
            <slide-inline-button
              title="Hello world"
              description="This is a small description for you"
              image="https://picsum.photos/400?random=1" />
            <slide-inline-button
              title="Hello world"
              description="This is a small description for you"
              image="https://picsum.photos/400?random=2" />
          </slide-inline>
        </li>
        <li class="col-double">
          <div class="content">
            <h2>Graphic Design:</h2>
            <ul>
              <li><strong>Logo Creation</strong>: create from scratch or just update your logo</li>
              <li><strong>Poster / Flyer / Visit Cards</strong>: design high-end visuals to suit all your requirements</li>
            </ul>
          </div>
          <slide-inline>
            <slide-inline-button
              title="Hello world"
              description="This is a small description for you"/>
            <slide-inline-button
              title="Hello world"
              description="This is a small description for you"/>
          </slide-inline>
        </li>
        <li class="col-double">
          <div class="content">
            <h2>Photography</h2>
            <ul>
              <li><strong>High definition 360° panoramics</strong>: 360-degree image capture on site</li>
              <li><strong>General ambiance</strong>: take the mood of your business and share it on your social networks or your website</li>
            </ul>
          </div>
          <slide-inline>
            <slide-inline-button
              title="Tefaf Maastricht"
              description="This is a small description for you"/>
            <slide-inline-button
              title="Masterpiece London"
              description="This is a small description for you"/>
          </slide-inline>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
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

  .content {
    flex: 1 1 100%;
    @apply mb-8 md:my-auto lg:pr-4;
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
