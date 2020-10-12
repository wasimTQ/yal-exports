<template>
  <div>
    <header>
      <nav>
        <div class="nav-logo">
          <img src="~/assets/logo-nav.svg" alt="Yal Exporting Co." />
        </div>

        <ul class="ul" ref="ul">
          <li class="nav-items">
            <span @click="animation">
              <a>
                <nuxt-link exact-active-class="nav-active" to="/"
                  >Home</nuxt-link
                >
              </a>
            </span>
          </li>
          <li class="nav-items">
            <span @click="animation">
              <a>
                <nuxt-link exact-active-class="nav-active" to="/products"
                  >Products</nuxt-link
                >
              </a>
            </span>
          </li>
          <li class="nav-items">
            <span @click="animation">
              <a>
                <nuxt-link exact-active-class="nav-active" to="/landscape"
                  >Landscaping</nuxt-link
                >
              </a>
            </span>
          </li>
          <li class="nav-items">
            <span @click="animation">
              <a>
                <nuxt-link exact-active-class="nav-active" to="/scrap"
                  >Others</nuxt-link
                >
              </a>
            </span>
          </li>
          <li @click="$nuxt.$emit('contact')" class="nav-items contact-btn">
            <a>Contact Us</a>
          </li>
        </ul>
        <div v-if="width < 400" @click="animation" class="hamburger">
          <svg
            v-if="isNavActive"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>

          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
  data() {
    return {
      width: null,
      isNavActive: false,
      tween: new TimelineLite()
    };
  },
  created() {
    if (process.browser) {
      // console.log(window.innerWidth, window.innerHeight);
      this.width = window.innerWidth;
    }
  },
  mounted() {},
  methods: {
    menuBar() {
      this.tween.reversed() ? this.tween.play() : this.tween.reverse();
      setTimeout(this.animation(), 500);
    },
    animation() {
      const { ul } = this.$refs;
      if (this.isNavActive) {
        console.log("endin", this.isNavActive);
        this.tween
          .fromTo(
            ul,
            { height: 500, display: "flex", duration: 1.5 },
            { height: 0, display: "none" }
          )
          .fromTo(
            "nav ul li span",
            { y: 0, duration: 1.5 },
            {
              y: 150,
              stagger: 0.2,
              onComplete: function() {
                ul.style.pointerEvents = "none";
                console.log("done");
              }
            }
          );
        this.isNavActive = false;
        return;
      }
      console.log("starting", this.isNavActive);
      this.tween
        .fromTo(
          ul,
          { height: 0, display: "none", duration: 1.5 },
          { height: 500, display: "flex" }
        )
        .fromTo(
          "nav ul li span",
          { y: 150, duration: 1.5 },
          {
            y: 0,
            stagger: 0.2,
            onComplete: function() {
              ul.style.pointerEvents = "auto";
              console.log("done");
              console.log("completed", this.isNavActive);
            }
          }
        );
      this.isNavActive = true;
    }
  }
};
</script>
