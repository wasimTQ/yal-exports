<template>
  <div>
    <header>
      <nav>
        <div class="nav-logo">
          <img src="~/assets/logo-nav.svg" alt="Yal Exporting Co." />
        </div>

        <ul>
          <li class="nav-items">
            <span>
              <a>
                <nuxt-link to="/">Home</nuxt-link>
              </a>
            </span>
          </li>
          <li class="nav-items">
            <span>
              <a>
                <nuxt-link to="/products">Products</nuxt-link>
              </a>
            </span>
          </li>
          <li class="nav-items">
            <span>
              <a>
                <nuxt-link to="/landscape">Landscaping</nuxt-link>
              </a>
            </span>
          </li>
          <li @click="$nuxt.$emit('contact')" class="nav-items contact-btn">
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
