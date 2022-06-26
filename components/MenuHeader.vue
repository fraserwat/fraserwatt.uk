<template>
    <div ref="header" class="header-container">
        <header class="[ header ] [ box-flex space-between ]">
            <NuxtLink to="/">
                <h2 class="[ fraser ] [ mobile-off color-white text-600 ]">Fraser Watt</h2>
                <h2 class="[ fraser ] [ mobile-on color-white text-600 ]">FW</h2>
            </NuxtLink>
            <nav class="[ menu ] [ mobile-off ]">
                <ul class="box-flex">
                    <li><a href="https://www.linkedin.com/in/fraser-watt">Data</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li>
                        <NuxtLink to="/#contact">
                            <button class="button">Contact</button>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <button id="hamburger" aria-label="Navigation Menu" :class="`[ hamburger ] [ ${modals.menuModal ? 'active' : ''} ] [ mobile-on bg-off-white ]`" @click="toggleHamburgerMenu"></button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: "MenuHeader",
    computed: {
        ...mapState(['modals', 'hamburger', 'activeModal', 'activeOverlay']),
    },
    methods: {
        ...mapActions(['changeModalState', 'saveHamburgerState']),
        toggleHamburgerMenu() {
            this.saveHamburgerState(this.$refs.header.querySelector('#hamburger'));
            if (this.hamburger.classList.contains('active')) {
                this.activeOverlay.classList.add('fade-out');
                this.activeModal.classList.add('slide-out');
                this.hamburger.classList.remove('active')
                setTimeout(() => {
                    this.changeModalState({modalName: 'menuModal', newState: !this.modals.menuModal});
                    this.activeOverlay.classList.remove('fade-out');
                    this.activeModal.classList.remove('slide-out');
                }, 200)
            } else {
                this.changeModalState({modalName: 'menuModal', newState: !this.modals.menuModal});
            }
        }
    }
}
</script>

<style scoped>
    .box-flex {
        align-items: center;
    }
    li + li {
        margin-left: 3rem;
    }
    a {
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
    }
    .button:hover {
        color: #F3F3F3;
        background-color: #F3F3F300;
        box-shadow:0px 0px 0px 2px #F3F3F3 inset;
    }
</style>