<template>
    <header class="[ box-flex space-between ]">
        <h2 class="[ fraser ] [ mobile-on color-white text-600 ]">Fraser Watt</h2>
        <h2 class="[ fraser ] [ mobile-off color-white text-600 ]">FW</h2>
        <nav class="[ menu ] [ mobile-on ]">
            <ul class="box-flex">
                <li><a href="https://www.linkedin.com/in/fraser-watt/">Data</a></li>
                <!-- <li><a href="">Web</a></li> -->
                <li><a href="">Blog</a></li>
                <li><button class="button">Contact</button></li>
            </ul>
        </nav>
        <button class="[ hamburger ] [ mobile-off ]"></button>
    </header>
</template>

<script>
export default {
    name: "MenuHeader"
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
    }
</style>