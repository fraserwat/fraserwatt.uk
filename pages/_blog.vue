<template>
  <div id="page-start" class="[ container ] [ max-width-1100 ]">
    <menu-header />
    <main class="pad-bottom-900 pad-top-900" >
      <p v-for="post in sortedPosts" :key="post.slug" class="gap-top-900 color-off-white">{{ post }}</p>
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
  name: 'Blog',
  components: { MenuHeader, ModalMenu },
  computed: {
    ...mapState(['posts']),
    ...mapGetters(['sortedPosts']),
  },
  mounted() {
  },
  methods: {
  },
}
</script>
