<template>
  <div>
    <div id="header">
      <div class="wrapper">
        <div class="text">
          <h2>Yal's</h2>
          <h1>Efficient landscaping</h1>
          <h4>world class landscaping at your doorstep</h4>
          <button @click="$nuxt.$emit('contact')" class="contact-btn">BOOK NOW</button>
        </div>
        <div class="header-img">
          <div class="img img-1"></div>
          <div class="img img-2"></div>
        </div>
      </div>
    </div>
    <div id="whatwedo">
      <div class="imgs">
        <div class="img img-1"></div>
        <div class="img img-2"></div>
      </div>
      <div class="text">
        <h1>what we'll do</h1>
        <ul>
          <li>Vertical Gardening</li>
          <li>Bio Wall</li>
          <li>Lattice Fencing</li>
          <li>Drain Cell with Gio Textile</li>
          <li>Artificial Grass</li>
        </ul>
      </div>
    </div>
    <div id="works">
      <h1>our works</h1>
      <ul>
        <li>
          <img loading="lazy" src="~/assets/landscaping/Image 8.jpg" alt />
          <h4>Sterling Holiday Resort</h4>
          <p>kodaikanal</p>
        </li>
        <li>
          <img loading="lazy" src="~/assets/landscaping/Image 7.jpg" alt />
          <h4>Sundar Reddy Guest House</h4>
          <p>ecr</p>
        </li>
        <li>
          <img loading="lazy" src="~/assets/landscaping/Image 9.jpg" alt />
          <h4>Goutham finance farm house</h4>
          <p>cheyyar</p>
        </li>
      </ul>
    </div>
    <div id="hire-us">
      <h3>
        Make your household and offices look beautiful by
        <a
          @click="$nuxt.$emit('contact')"
        >Hiring Us</a>
      </h3>
    </div>
  </div>
</template>
