<template>
  <main>
    <div class="a-spacing-large" />
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">
            All Products
          </h1>
          <div class="a-spacing-large" />
          <!-- Buttons -->
          <a
            class="a-button-buy-again"
            @click="$router.push('/products')"
          >Add a new product</a>
          <a
            class="a-button-history margin-right-10"
            @click="$router.push('/category')"
          >Add a new category</a>
          <a
            class="a-button-history margin-right-10"
            @click="$router.push('/owner')"
          >Add a new owner</a>
        </div>
      </div>
    </div>

    <!--  Listing page -->
    <div class="a-spacing-large" />
    <div class="container-fluid browsing-history">
      <div class="row">
        <div v-for="(product, idx) in products" :key="product._id" class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
          <div class="history-box">
            <!-- Product image -->
            <a href="#" class="a-link-normal">
              <img :src="product.photo" class="img-fluid img" style="width: 300px; height: 400px">
            </a>
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">{{ product.title }}</div>
              </span>
            </div>
            <!-- Product rating -->
            <div class="a-row">
              <a href="#">
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
              </a>
              <span class="a-letter-space" />
              <span class="a-color-tertiary a-size-small asin-reviews">(2343)</span>
            </div>
            <!-- Product price -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">${{ product.price }}</span>
              </span>
            </div>
            <!-- Product buttons -->
            <div class="a-row">
              <a class="a-button-history margin-right-10" @click="$router.push(`/products/${product._id}`)">Update</a>
              <a class="a-button-history margin-right-10" @click="onDeleteProduct(product._id, idx)">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  // thanks to ssr, asyncData is fetched before loading the page
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('http://localhost:3000/api/products')
      return {
        products: response.products
      }
    } catch (err) {}
  },
  methods: {
    async onDeleteProduct (id, idx) {
      try {
        const response = await this.$axios.$delete(`http://localhost:3000/api/products/${id}`)

        if (response.status) {
          this.products.splice(idx, 1)
          this.$router.push('/')
        }
      } catch (err) {

      }
    }
  }
}
</script>
<style">
.img {
  width: 500;
  height: 700;
}
</style>
