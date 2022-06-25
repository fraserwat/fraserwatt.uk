<template>
  <div id="page-start" class="[ container ] [ max-width-1100 ]">
    <menu-header />
    <main class="pad-bottom-900" >
      <section class="[ greeting ] [ ]">
        <h1 class="color-white">
          Hi, I'm Fraser! I use data to grow organisations, write about technology, and build websites.
        </h1>
        <div class="profile-pic-container ] [  ]">
          <img
            class="[ profile-pic ] [ rad-max ]" 
            srcset="/images/fraser-watt.webp 2x" 
            src="/images/fraser-watt.png"
            alt="Fraser Watt" 
          />
        </div>
      </section>
      <section class="[ biog-contact ] [ ]">
        <article class="[ maintext ] [ bg-white rad-10 flow shadow ]">
          <h2 class="sr-only">About Me</h2>
          <p>I’ve worked in Data & Analyics for eight years, and as a self-employed contractor since the first half of 2021.</p>
          <p>Using a data-driven approach to enable growth across end-to-end analytics pipelines, I work where the project requires — from ETL and analytics engineering, to visualisation and commercial insights. I’ve had success doing this in both a B2B and B2C context at companies as varied as <b>Paddle</b>, <b>Facebook</b>, and <b>Otrium</b>.</p>
          <p>I also write about the intersection of technology and politics, and have been featured in <b>Tribune</b> and <b>Jacobin</b> magazines.</p>
          <p>From time to time I'm also available for front-end web development, where my focus is on accessible, lightweight and browser-agnostic implementation of your design.</p>
        </article>
        <div class="[ biog-contact__sub-box ] [ box-flex ]">
          <aside class="[ ] [ bg-blue color-white rad-10 shadow ]">
            <h2 class="sr-only">My Availability</h2>
            <p>I am taking Data & Analytics contracts for <b>Q3 2022</b>, and web development work on an adhoc basis.</p>
          </aside>
          <contact-form />
        </div>
      </section>
    </main>
    <modal-menu v-show="$store.state.modals.menuModal"/>
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
import MenuHeader from '~/components/MenuHeader.vue'
import ModalMenu from '~/components/ModalMenu.vue'

export default {
  name: 'IndexPage',
  components: { MenuHeader, ModalMenu, ContactForm },
}
</script>
