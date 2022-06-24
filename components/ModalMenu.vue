<template>
  <div ref="modalMenu" class="modal-container">
    <nav class="[ modal-side ] [ menu-modal ] [ rad-8 bg-off-white ]">
        <ul>
            <li><a href="#" @click="toggleHamburgerMenu">Home</a></li>
            <li><a href="https://www.linkedin.com/in/fraser-watt/">Data</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="#contact" class="pad-0 box-flex" @click="toggleHamburgerMenu">
                <button class="[ button ] [ bg-blue color-off-white gap-top-300 ]">Contact</button></a>
            </li>
        </ul>
    </nav>
    <div class="[ modal-overlay ] [ mobile-on ]"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'ModalMenu',
    computed: {
        ...mapState(['modals', 'hamburger', 'activeOverlay', 'activeModal']),
    },
    mounted() {
        this.saveActiveOverlay(this.$refs.modalMenu.querySelector('.modal-overlay'));
        this.saveActiveModal(this.$refs.modalMenu.querySelector('.menu-modal'));
    },
    methods: {
        ...mapActions(['changeModalState', 'saveActiveOverlay', 'saveActiveModal']),
        toggleHamburgerMenu() {
            // We're running on the assumption any toggle while modal is open closes it
            this.activeOverlay.classList.add('fade-out');
            this.activeModal.classList.add('slide-out');
            this.hamburger.classList.remove('active');
            setTimeout( () => {
                this.activeOverlay.classList.remove('fade-out');
                this.activeModal.classList.remove('slide-out');
                this.changeModalState({modalName: 'menuModal', newState: !this.modals.menuModal});
            }, 200)
        }
    },
}
</script>

<style scoped>
  nav.modal {
    padding: 0 !important;
    width: 100%;
  }
  ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-block: 3rem;
    padding-inline: 1.5rem;
  }
  li + li {
    padding-top: 1.5rem;
    border-top: solid 1px rgba(97, 97, 97, 10%);
  }
</style>
