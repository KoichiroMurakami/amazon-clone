<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3" />
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium" />
            <h2 style="text-align: center">
              Add A New Product
            </h2>
            <form>
              <!-- Category dropdown -->
              <div class="a-spacing-top-medium">
                <label>Cateogry</label>
                <select class="a-select-option">
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                </select>
              </div>

              <!--  Owner dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option">
                  <option value="1">
                    1
                  </option>
                  <option value="2">
                    2
                  </option>
                </select>
              </div>
              <!-- Title input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px;">Title</label>
                <input type="text" style="width: 100%" class="a-input-text">
              </div>
              <!-- Price input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input type="text" style="width: 100%" class="a-input-text">
              </div>
              <!-- Description textarea -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <textarea placeholder="Provide details such as a product description." style="width: 100%" />
              </div>
              <!-- Photo -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Add photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus" />
                    <input type="file">
                    <p style="margin-top: -70px">photo</p>
                  </label>
                </div>
              </div>
              <!-- Register Button -->
              <hr>
              <div class="a-spacing-top-medium">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text">Add Product</span>
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
export default {}
</script>
