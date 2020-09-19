<template>
  <div>
    <div v-if="showContact" ref="overlay" id="overlay"></div>
    <Navbar />
    <div class="error">
      <h1>404 error</h1>
      <h2>Looks like you are lost!</h2>
      <a href="/">Go to Home</a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  components: {
    Navbar,
    Footer,
    ContactForm,
  },
  data() {
    return {
      showContact: false,
    };
  },
  methods: {
    showContactForm() {
      this.showContact = true;
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    },
    closeContactForm() {
      this.showContact = false;
      const body = document.querySelector("body");
      body.style.overflow = "scroll";
    },
  },
  created() {
    this.$nuxt.$on("contact", () => {
      this.showContactForm();
    });
  },
};
</script>