<template>
  <div>
    <div id="header">
      <div class="product-wrapper">
        <div class="text">
          <div id="line"></div>
          <p>
            Explore the products we
            <span>export</span>
          </p>
          <h4>
            We now produce ayurvedic
            <span>medicines and powders</span>
          </h4>
          <div class="explore">
            <a href="#products">Explore Now</a>
            <div id="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="15"
                viewBox="0 0 42.773 22.447"
              >
                <g id="arrow-down" transform="translate(-281.439 -778.439)">
                  <line
                    id="Line_20"
                    data-name="Line 20"
                    x2="20.326"
                    y2="20.326"
                    transform="translate(282.5 779.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="3"
                  />
                  <line
                    id="Line_21"
                    data-name="Line 21"
                    x1="20.326"
                    y2="20.326"
                    transform="translate(302.826 779.5)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="header-img">
          <img src="~/assets/products/productbg.svg" alt />
        </div>
      </div>
    </div>

    <div id="products-wrapper">
      <div id="products">
        <div class="product" v-for="(data, index) in AyurvedicData" :key="index">
          <img loading="lazy" :src="'/products/'+data.img+'.jpg'" :alt="data.heading" />
          <div class="text">
            <h2>{{data.heading}}</h2>
            <div class="used-for">
              <h5>Used for</h5>
              <ul>
                <li v-for="(item, index) in data.usedFor" :key="index">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="more-products">
        <div id="heading">
          <h2>More products</h2>
        </div>
        <div id="otherproducts">
          <div class="more-product" v-for="(data, index) in OtherData" :key="index">
            <div class="text">
              <h2>{{data.heading}}</h2>
              <div class="used-for">
                <h5>Used for</h5>
                <ul>
                  <li v-for="(item, index) in data.usedFor" :key="index">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ayurvedicData from "../middleware/ayurvedicdata";
import otherData from "../middleware/otherproductData";
export default {
  data() {
    return {
      AyurvedicData: ayurvedicData,
      OtherData: otherData,
    };
  },
};
</script>