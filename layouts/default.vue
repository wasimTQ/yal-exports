<template>
  <div>
    <div v-if="showContact" ref="overlay" id="overlay"></div>
    <Navbar />
    <ContactForm @close="closeContactForm" v-if="showContact" />
    <Nuxt />

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

<style scoped>
.scrollFromTop-enter-active,
.scrollFromTop-leave-active {
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.scrollFromTop-enter,
.scrollFromTop-leave-to {
  transform: translateY(-700px);
}
</style>