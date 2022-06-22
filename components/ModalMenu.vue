<template>
  <div class="[ modal-overlay ] [ mobile-on ]">
    <nav class="[ modal-side ] [ rad-8 ]">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="https://www.linkedin.com/in/fraser-watt/">Data</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="#contact"><button class="button">Contact</button></a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ModalMenu',
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
    padding-block: 1.5rem;
    padding-inline: 1.5rem;
  }
  li + li {
    padding-top: 1.5rem;
    border-top: solid 1px rgba(97, 97, 97, 10%);
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    padding: 1.5rem;
  }
</style>
