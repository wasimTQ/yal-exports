<template>
  <div>
    <div id="header">
      <div class="wrapper">
        <div class="text">
          <h2>Yal,</h2>
          <h4>
            where you get
            <strong>high quality Indian products exported worldwide</strong>
          </h4>
          <button @click="$nuxt.$emit('contact')" class="contact-btn">
            <a>Contact Us</a>
          </button>
        </div>
        <div class="header-img">
          <!-- <div class="circle"></div> -->
          <img src="/header-bg.svg" alt="" />
        </div>
      </div>
    </div>

    <section id="how-it-works">
      <div class="bef"></div>
      <h1>how it works</h1>
      <div id="hero">
        <ul class="steps">
          <li>
            We get your order by gmail,
            <br />
            <span>it might be any product.</span>
          </li>
          <li>
            We check if the product is available,
            <br />
            <span>you pay the amount of the product</span>
          </li>
          <li>
            Your amount will be hold by the bank,
            <br />
            <span>until the product reaches your hand.</span>
          </li>
          <li>
            Once the product reach your hand,
            <br />
            <span>you'll get message to your inbox.</span>
          </li>
        </ul>
        <img loading="lazy" src="~/assets/home-checkout.svg" />
      </div>
    </section>
    <section id="exporting">
      <h1>What we export</h1>
      <div class="aft"></div>
      <div class="items">
        <div class="items-export item-1">
          <p>Apparel</p>
          <!-- <img src="~/assets/assets/apparel.jpg" alt="Clothing apparel"> -->
        </div>
        <div class="items-export item-2">
          <p>Ayurvedic products</p>
          <!-- <img src="~/assets/assets/neem-leaves.jpg" alt="Ayurvedic products"> -->
        </div>
        <div class="items-export item-3">
          <p>Groceries</p>
          <!-- <img src="~/assets/assets/groceries.jpg" alt="Grocery items"> -->
        </div>
      </div>
      <a>
        <nuxt-link to="/products">view more</nuxt-link>
      </a>
    </section>
    <section id="faq">
      <div class="bef"></div>
      <h1 class="font-semibold">Frequently asked questions</h1>
      <div>
        <ul>
          <li v-for="(faq, index) in faqs" :key="index">
            <span class="ques">
              {{ faq.ques }}
              <img src="~/assets/arrow.svg" @click="showAns(index)" alt />
            </span>
            <span v-if="faq.open" class="ans">{{ faq.ans }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="contact">
      <h1>Need high quality medicinal ayurvedic products?</h1>
      <h2 @click="$nuxt.$emit('contact')">contact us</h2>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          ques: "What else should we export?",
          open: false,
          ans:
            "We export ayurvedic products, dresses, grocery items that are made in India. Also, anything else you want that are Indian products"
        },
        {
          ques: "How do you get your products?",
          open: false,
          ans: "You can get the products either via cargo, airways or roadways."
        },
        {
          ques: "Do we export worldwide?",
          open: false,
          ans: "Yes, we're now exporting worldwide."
        },
        {
          ques: "What payment method do we accept?",
          open: false,
          ans: "We accept banking payment only."
        },
        {
          ques: "Should we provide landscaping for worldwide?",
          open: false,
          ans:
            "Yes, we should provide landscaping worldwide. The price will change according to the country you're in"
        }
      ]
    };
  },
  methods: {
    showAns(i) {
      this.faqs.forEach(item => {
        if (item.open === true) item.open = false;
      });
      this.faqs[i].open = true;
    },
    emitContact() {
      this.$emit("contact");
    }
  }
};
</script>

<style scoped>
.header-img {
  position: absolute;
  top: -2em;
  right: 0;
}
</style>
