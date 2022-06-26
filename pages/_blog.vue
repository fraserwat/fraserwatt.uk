<template>
  <div id="page-start" class="[ container ] [ max-width-1100 ]">
    <menu-header />
    <main class="pad-bottom-900" >
    </main>
    <modal-menu v-show="$store.state.modals.menuModal"/>
  </div>
</template>

<script>
import MenuHeader from '~/components/MenuHeader.vue'
import ModalMenu from '~/components/ModalMenu.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Blog',
  components: { MenuHeader, ModalMenu },
}
</script>
