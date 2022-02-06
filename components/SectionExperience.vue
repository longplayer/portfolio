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
            <h2>Website:</h2>
            <ul>
              <li><strong>Creation</strong>: using latest web technologies to create wonderfull experices</li>
              <li><strong>Refont/Refresh</strong>: update your current website to latest web standards and improve your SEO score</li>
              <li><strong>Wordpress</strong>: create custom templates adapted to your needs</li>
            </ul>
          </div>
          <slide-inline>
            <slide-inline-button 
              title="88 Gallery"
              description="Contemproray Art Gallery located in London"
              image="https://www.padesignart.com/paris/assets/uploads/88-gallery.jpg" />
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"
              image="https://picsum.photos/400?random=1" />
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"
              image="https://picsum.photos/400?random=2" />
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"
              image="https://picsum.photos/400?random=3" />
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"
              image="https://picsum.photos/400?random=4" />
          </slide-inline>
        </li>
        <li class="col-double">
          <div class="content">
            <h2>Graphic Design:</h2>
            <ul>
              <li><strong>(Re)branding</strong>: I can create word templates or prep</li>
              <li><strong>Logo Creation</strong>:</li>
              <li>poster / flyer / visit cards:</li>
            </ul>
          </div>
          <slide-inline>
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"/>
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"/>
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"/>
            <slide-inline-button 
              title="Hello world"
              description="This is a small fucking description for you"/>
          </slide-inline>
        </li>
        <li class="col-double">
          <div class="content">
            <h2>Photography</h2>
            <ul>
              <li><strong>360° Photo</strong>: High definition panoramics:</li>
            </ul>
          </div>
          <slide-inline>
            <slide-inline-button 
              title="Tefaf Maastricht"
              description="This is a small fucking description for you"/>
            <slide-inline-button 
              title="Masterpiece London"
              description="This is a small fucking description for you"/>
            <slide-inline-button 
              title="Brafa Art Fair"
              description="This is a small fucking description for you"/>
            <slide-inline-button 
              title="Biennale Paris"
              description="This is a small fucking description for you"/>
            <slide-inline-button 
              title="Cologne Art Fairt"
              description="This is a small fucking description for you"/>
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
