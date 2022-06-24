<template>
    <form 
        id="contact"
        ref="form"
        class="[ contact-form ] [ bg-white color-navy flow rad-10 box-flex shadow ]"
        action=""
        novalidate="novalidate"
        @submit.prevent="validateForm"
    >
        <h2 class="sr-only">Contact</h2>
        <input id="form-name" type="text" name="name" placeholder="Your Name" @change="validateName">
        <p v-show="formFields.name === false" class="[ error ] [ text-300 color-red weight-bold ]">Please enter your name.</p>
        <input id="form-email" type="email" name="email" placeholder="Email Address" @change="validateEmail">
        <p v-show="formFields.email === false" class="[ error ] [ text-300 color-red weight-bold ]">Please enter a valid email.</p>
        <textarea id="form-message" name="message" placeholder="Your message here" @input="updateWordCount" @change="validateMessage"></textarea>
        <p v-show="formFields.message === false" class="[ error ] [ text-300 color-red weight-bold ]">Try to include more information (~{{ 30 - wordCount }} more words).</p>
        <p>Please include details on your project, what services you require, and any rough timeframes or budgetary information.</p>
        <button type="submit" class="[ button ] [ bg-blue color-white ]">Contact me</button>
    </form>
</template>

<script>
export default {
    name: "ContactForm",
    data() {
        return {
            formFields: {
                name: undefined,
                email: undefined,
                message: undefined
            },
            wordCount: 0
        }
    },
    methods: {
        validateForm() {
            // Declare form fields
            const form = this.$refs.form
            const name = form.querySelector('#form-name')?.value;
            const email = form.querySelector('#form-email')?.value;
            const message = form.querySelector('#form-message')?.value;

            // Rerun validation for good measure
            this.validateName(name);
            this.validateEmail(email);
            this.validateMessage(message);

            // Check validation
            if (Object.values(this.formFields).every(val => val === true)) {
                // PUT MAILCHIMP API CALL HERE
            } else {
                form.classList.add('animate__animated', 'animate__headShake');
                setTimeout(() => {
                    form.classList.remove('animate__animated', 'animate__headShake');
                }, 600);
            }
        },
        updateWordCount(n) {
            const message = (typeof n === 'string') ? n : n.target.value;
            this.wordCount = message.split(/\s+\b|\./).length;
            if (this.wordCount >= 30) {
                this.formFields.message = true;
            }
        },
        validateName(n) {
            const regex = /[0-9]/;
            const name = (typeof n === 'string') ? n : n.target.value;
            this.formFields.name = name.length > 2 && !name.match(regex)
        },
        validateEmail(n) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const email = (typeof n === 'string') ? n : n.target.value;
            this.formFields.email = email.match(regex) != null;
        },
        validateMessage () {
            this.formFields.message = this.wordCount >= 30
        }
    }
}
</script>

<style>
    form {
        transition: 1s ease-in-out;
    }
    p.error {
        margin-top: .8rem;
    }
</style>