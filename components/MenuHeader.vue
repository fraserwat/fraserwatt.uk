<template>
    <header ref="header" class="[ box-flex space-between ]">
        <a href="#page-start" class="mobile-off">
            <h2 class="[ fraser ] [ color-white text-600 ]">Fraser Watt</h2>
        </a>
        <h2 class="[ fraser ] [ mobile-on color-white text-600 ]">FW</h2>
        <nav class="[ menu ] [ mobile-off ]">
            <ul class="box-flex">
                <li><a href="https://www.linkedin.com/in/fraser-watt/">Data</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="#contact"><button class="button">Contact</button></a></li>
            </ul>
        </nav>
        <button id="hamburger" class="[ hamburger ] [ mobile-on ]" @click="toggleHamburgerMenu"></button>
    </header>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "MenuHeader",
    methods: {
        ...mapActions(['changeModalState']),
        toggleHamburgerMenu() {
            const currentHamburgerState = this.$store.state.modals.menuModal;
            this.$refs.header.classList.toggle('z-index-2');
            this.$refs.header.querySelector('.hamburger').classList.toggle('active');
            this.changeModalState({modalName: 'menuModal', newState: !currentHamburgerState});
            console.log(this.$store.state.modals.menuModal)
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
    .button {
        border-radius: 8px;
        padding: .5rem 1rem;
        transition: .2s ease-in-out;
        background-color: #F3F3F3FF;
    }
    .button:hover {
        color: #F3F3F3;
        background-color: #F3F3F300;
        box-shadow:0px 0px 0px 2px #F3F3F3 inset;
    }
</style>