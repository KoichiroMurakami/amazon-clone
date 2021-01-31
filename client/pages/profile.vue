<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3" />
        <div class="col-sm-6">
          <div class="a-spacing-top-medium" />
          <h2>Profile Page</h2>
          <form>
            <!-- name -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input
                v-model="name"
                :placeholder="$auth.$state.user.name"
                type="text"
                class="a-input-text"
                style="width: 100%"
              >
            </div>
            <!-- email -->
            <div class="a-spacing-top-medium">
              <label>Email</label>
              <input
                v-model="email"
                :placeholder="$auth.$state.user.email"
                class="a-input-text"
                style="width: 100%"
              >
            </div>
            <!-- password -->
            <div class="a-spacing-top-medium">
              <label>Password</label>
              <input
                v-model="password"
                type="password"
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
                    @click="onUpdateProfile"
                  >Update Profile</span>
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
        </div>
        <div class="col-sm-3" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async onUpdateProfile () {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try {
        const response = await this.$axios.$put('/api/auth/user', data)

        if (response.success) {
          this.name = ''
          this.email = ''
          this.password = ''

          await this.$auth.fetchUser()
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
