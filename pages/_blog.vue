<template>
  <div id="page-start" class="[ container ] [ max-width-1100 ]">
    <menu-header />
    <main class="pad-bottom-900" >
      <h1 class="top-element color-off-white gap-bottom-900">Writing</h1>
      <section class="[ writingroll-container ] [ ] [ bg-off-white color-navy rad-10 pad-bottom-700 pad-left-500 pad-right-500 ]">
        <article v-for="post in sortedPosts" :key="post.slug" class="pad-top-700 flow-half">
          <h2>
            <a :href="post.slug" class="color-navy">{{ post.title }}</a>
          </h2>
          <div class="date-ext-container box-flex">
            <p class="color-blue">{{ new Date(post.createdAt).toLocaleDateString("en-UK") }}</p>
            <a :href="post.slug" v-if="post.external !== false" class="gap-left-300 pad-left-300 pad-right-300 color-off-white bg-blue rad-10">{{ post.external }}</a>
          </div>
          <p>
            <a :href="post.slug" class="color-navy">{{ post.subhead || getFirstParagraph(post.content) }}</a>
          </p>
        </article>
      </section>
    </main>
    <modal-menu v-show="$store.state.modals.menuModal"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import MenuHeader from '~/components/MenuHeader.vue'
import ModalMenu from '~/components/ModalMenu.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Writing',
  components: { MenuHeader, ModalMenu },
  computed: {
    ...mapState(['posts']),
    ...mapGetters(['sortedPosts']),
  },
  mounted() {
  },
  methods: {
    getFirstParagraph(content) {
      const regex = /([^(<p>)])(.*?)<\//
      return content.match(regex)[0].replace('</', '')
    }
  },
}
</script>
