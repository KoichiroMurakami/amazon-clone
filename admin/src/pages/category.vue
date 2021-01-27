<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3" />
        <div class="col-sm-6">
          <div class="a-spacing-top-medium" />
          <h2>Add a New category</h2>
          <form>
            <div class="a-spacing-top-medium">
              <label>Type</label>
              <input
                v-model="type"
                type="text"
                class="a-input-text"
                style="width: 100%"
              >
            </div>
            <hr>
            <div class="a-spacing-top-large">
              <!--  register button  -->
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span
                    class="a-button-text"
                    @click="onAddcategory"
                  >Add Cartegory</span>
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
          <br>
          <ul class="list-group-item" style="margin-left: 0px;">
            <li v-for="category in categories" :key="category._id">
              {{ category.type }}
            </li>
          </ul>
        </div>
        <div class="col-sm-3" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('http://localhost:3000/api/categories')
      return {
        categories: response.categories
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      type: ''
    }
  },
  methods: {
    async onAddcategory () {
      try {
        const data = { type: this.type }
        await this.$axios.$post(
          'http://localhost:3000/api/categories',
          data
        )
        this.categories.push(data)
        this.type = ''
      } catch (error) {}
    }
  }
}
</script>
