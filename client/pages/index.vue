<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">
          <!-- side bar -->
        </div>
        <!-- main content -->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <FeaturedProduct />
          <div class="mainResults">
            <ul class="s-result-list">
              <li v-for="product in products" :key="product._id" class="s-result-item celwidget">
                <div class="s-item-container">
                  <!-- best seller -->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">BestSeller</a>
                    </div>
                  </div>
                  <div>
                    <div class="row">
                      <!-- image -->
                      <div class="col-sm-3 text-center">
                        <a href="#">
                          <img :src="product.photo" alt="photo" class="img-fluid" style="width: 150px">
                        </a>
                      </div>
                      <div class="col-sm-9">
                        <div class="a-row a-spacing-small">
                          <!-- title and date -->
                          <nuxt-link :to="`/products/${product._id}`" class="a-link-normal">
                            <h2 class="a-size-medium">
                              {{ product.title }}
                              <span class="a-letter-space" />
                              <span class="a-letter-space" />
                              <span class="a-size-small a-color-secondary">Sep 3, 2019</span>
                            </h2>
                          </nuxt-link>
                        </div>
                        <!-- authors name -->
                        <div class="a-row a-spacing-small">
                          <span class="a-size-small a-color-secondary">by</span>
                          <span class="a-size-small a-color-secondary">
                            <a href="#" class="a-link-normal a-text-normal">{{ product.owner.name }}</a>
                          </span>
                        </div>
                        <!-- shipment -->
                        <div class="a-row">
                          <span class="a-size-small">Ships to USA</span>
                        </div>
                        <div class="row">
                          <div class="col-sm-7">
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">HardCover</a>
                            </div>
                            <!-- price -->
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">
                                <span class="a-offscreen">${{ product.price }}</span>
                                <span class="a-color-base sx-zero-spacing">
                                  <span class="sx-price sx-price-large">
                                    <sup class="sx-price-currency">$</sup>
                                    <span class="sx-price-whole">{{ product.price }}</span>
                                    <sup class="sx-price-fractional">00</sup>
                                  </span>
                                </span>
                              </a>
                              <span class="a-letter-space" />
                              <span class="ap-size-base-plus a-coor-secondary a-text-strike">$28.00</span>
                            </div>
                            <!-- Audible trial -->
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary">Free with Audible trial</span>
                            </div>
                            <hr>
                            <!-- other formats -->
                            <span class="a-size-small s-color-secondary">Other Formats:
                              <span class="a-letter-space" />
                              <a href="#" class="a-size-small a-link-normal a-text-normal">Audio CD</a>
                            </span>
                          </div>
                          <!--  ratings -->
                          <div class="col-sm-5">
                            <div class="a-row a-spacing-mini">
                              <!-- star ratings -->
                              <no-ssr>
                                <star-rating
                                  :rating="product.averageRating"
                                  :show-rating="false"
                                  :glow="1"
                                  :border-width="1"
                                  :rounded-corners="true"
                                  :read-only="true"
                                  :star-size="18"
                                />
                              </no-ssr>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import StarRating from 'vue-star-rating'
import featuredProduct from '../components/FeaturedProduct'
export default {
  components: {
    StarRating,
    featuredProduct
  },
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('/api/products')
      return {
        products: response.products
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
