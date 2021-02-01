<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3" />
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium" />
            <h2 style="text-align: center">
              Update {{ product.title }}
            </h2>
            <form>
              <!-- Category dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select v-model="categoryID" class="a-select-option">
                  <option
                    v-for="category in categories"
                    :key="category._id"
                    :value="category._id"
                  >
                    {{ category.type }}
                  </option>
                </select>
              </div>
              <!--  Owner dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select v-model="ownerID" class="a-select-option">
                  <option
                    v-for="owner in owners"
                    :key="owner._id"
                    :value="owner._id"
                  >
                    {{ owner.name }}
                  </option>
                </select>
              </div>
              <!-- Title input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px;">Title</label>
                <input v-model="title" type="text" style="width: 100%" class="a-input-text" :placeholder="product.title">
              </div>
              <!-- Price input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input v-model="price" type="text" style="width: 100%" class="a-input-text" :placeholder="product.price">
              </div>
              <!-- Stock quantity input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Stock quantity</label>
                <input v-model="stockQuantity" type="text" style="width: 100%" class="a-input-text" :placeholder="product.stockQuantity">
              </div>
              <!-- Description textarea -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Description</label>
                <textarea
                  v-model="description"
                  :placeholder="product.description"
                  style="width: 100%"
                />
              </div>
              <!-- Photo -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px; width: 100%;">Add photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button" style="width: 100%">
                    <i class="fal fa-plus" />
                    <input type="file" @change="onFileSelected">
                    <p style="margin-top: -70px; width: 100%; text-align: left">{{ fileName }}</p>
                  </label>
                </div>
              </div>
              <!-- Buttons -->
              <hr>
              <div class="a-spacing-top-medium">
                <!-- register button -->
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="onUpdateProduct">Update Product</span>
                  </span>
                </span>
                <!-- back to the top button -->
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text" @click="$router.back()">Back</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
          <div class="col-sm-3" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    try {
      const categories = $axios.$get('http://localhost:3000/api/categories')
      const owners = $axios.$get('http://localhost:3000/api/owners')
      const product = $axios.$get(`http://localhost:3000/api/products/${params.id}`)

      const [catResponse, ownerResponse, productResponse] = await Promise.all([
        categories,
        owners,
        product
      ])

      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        product: productResponse.product
      }
    } catch (err) {
      console.log(err)
    }
  },

  data () {
    return {
      categoryID: null,
      ownerID: null,
      title: '',
      price: '',
      stockQuantity: '',
      description: '',
      selectedFile: null,
      fileName: ''
    }
  },

  methods: {
    onFileSelected (evt) {
      this.selectedFile = evt.target.files[0]
      this.fileName = evt.target.files[0].name
    },

    async onUpdateProduct () {
      // define format as form-data
      const data = new FormData()
      data.append('title', this.title)
      data.append('price', this.price)
      data.append('description', this.description)
      data.append('stockQuantity', this.stockQuantity)
      data.append('ownerID', this.ownerID)
      data.append('categoryID', this.categoryID)
      data.append('photo', this.selectedFile, this.selectedFile.name)

      await this.$axios.$put(`http://localhost:3000/api/products/${this.$route.params.id}`, data)
      // redirct user to the top page
      this.$router.push('/')
    }

  }
}
</script>
