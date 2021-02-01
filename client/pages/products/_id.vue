<template>
  <main>
    <!-- breadcrumbs -->
    <div class="a-spacing-top-medium" />
    <div class="container-fluid">
      <div class="wayfinding-breadcrumbs-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a href="#" class="a-link-normal a-color-tertiary">{{ product.category.type }}</a>
            </span>
          </li>
          <li><span class="a-list-item">></span></li>
          <li>
            <span class="a-list-item">
              <a href="#" class="a-link-normal a-color-tertiary">{{ product.title }}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-container">
        <div class="row">
          <!-- 1st 3 grid: product image and author's section -->
          <div class="col-lg-3 col-md-3 col-sm-4">
            <div class="leftCol">
              <!-- image -->
              <div class="imgBlock">
                <div class="eBooksimg">
                  <img :src="product.photo" alt="img" class="img-fluid">
                </div>
              </div>
              <!--  follow author -->
              <div class="authorFollow">
                <hr class="a-divider-normal">
                <h1 class="authorFollowHeading">
                  Follow the author
                </h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <!-- author's image -->
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img :src="product.owner.photo" alt="img" class="img-fluid"></a>
                      </div>
                    </div>
                    <!-- author's name -->
                    <div class="col-xl-4 col-lg-3 col-md-3 col-sm-3 col-3">
                      <div class="authorNameCol">
                        <a href="#">{{ product.owner.name }}</a>
                      </div>
                    </div>
                    <!-- author's follow button -->
                    <div class="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-6">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Follow</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- middle 6 grid descriptions -->
          <div class="col-lg-6 col-md-6 col-sm-8">
            <div class="centerCol">
              <!-- product title -->
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle">{{ product.title }}</span>
                  <span class="smallTitle">PaperBack</span>
                </h1>
              </div>
              <div class="bylineinfo">
                by
                <a href="#" class="authorName">{{ product.owner.name }}
                  <i class="fas fa-chevron-down" style="font-size: 8px !important; color: #555 !important;" />
                  (Author)
                </a>
              </div>
              <div class="reviewGroup" />
              <hr style="margin-top: 10px;">
              <!--  a tags dummy data -->
              <div class="mediaMatrix">
                <div class="formats">
                  <a href="#" class="link-expander">
                    >
                    <span class="tmmShowPrompt">See all 18 formats and editions</span>
                  </a>
                  <ul>
                    <!-- kindle -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Kindle</span>
                              <br>
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links" />
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                Read with our
                                <span class="a-text-bold">Free App</span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- audible -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>
                                <img src="/img/audibleLogo.png" alt="logo" class="img-fluid" style="width: 20px;">
                                Audible
                              </span>
                              <br>
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links" />
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                Listen with our
                                <span class="a-text-bold">Audible Trial</span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <!-- paperback -->
                    <li class="swatchElement" style="width: 117px;">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>PaperBack</span>
                              <br>
                              <span class="a-color-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links" />
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini" />
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- description -->
              <div class="bookDescription">
                <div class="bookDescriptionInner">
                  {{ product.description }}
                </div>
                <!-- product specification -->
                <div class="aboutEbooksFeature">
                  <hr>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="a-declarative">
                        Length:<span><a href="#">386 pages<i class="a-icon a-icon-popover" /></a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- last 3 grid buying section-->
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input id="test-1" type="radio">
                        <label for="test1">Buy Now</label>
                      </form>
                    </div>
                    <!-- product price -->
                    <div class="float-right">
                      <div class="a-size-medium a-color-price offer-price a-text-normal">
                        ${{ product.price }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="a-section a-spacing-none">
                  <div class="row">
                    <div class="col-sm-5 col-5">
                      <select>
                        <option value="1">
                          Qty: &nbsp; 1
                        </option>
                        <option value="2">
                          Qty: &nbsp; 2
                        </option>
                        <option value="3">
                          Qty: &nbsp; 3
                        </option>
                        <option value="4">
                          Qty: &nbsp; 4
                        </option>
                        <option value="5">
                          Qty: &nbsp; 5
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="a-section a-spacing-top-small">
                  <div class="a-section a-spacing-none">
                    <span class="a-size-medium a-color-success">In Stock</span>
                  </div>
                  <div class="a-section a-spacing-mini">
                    Ships from and sold by Amazon.com
                  </div>
                </div>
                <div class="a-section">
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart" />
                        <input type="submit" class="a-button-input" name="submit.add-to-cart">
                        <span class="a-button-text">Add to Cart</span>
                      </span>
                    </span>
                  </div>
                  <div class="a-button-stack">
                    <span class="a-spacing-small a-button-primary a-button-icon">
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-buynow" />
                        <input type="submit" class="a-button-input" name="submit.add-to-cart">
                        <span class="a-button-text">Buy Now</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
                  <div class="a-spacing-top-small">
                    <div class="a-section a-spacing-none">
                      <div class="a-section a-spacing-none a-spacing-top-mini">
                        This item shps to
                        <b>California</b>
                        <b>Get it by Monday, Sept 23, - Monday, Sept 30</b>
                        Choose this date at checkout
                      </div>
                    </div>
                  </div>
                </div>
                <hr>
                <span class="a-declarative">
                  <a href="#" class="a-link-normal">
                    <div class="a-row a-spacing-mini">
                      <i class="fal fa-map-market-alt" />
                      <span class="a-size-small">Deliver to California</span>
                    </div>
                  </a>
                </span>
                <br>
                <hr>
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input id="test2" type="radio" name="radio-group">
                        <label for="test1">Buy Now</label>
                      </form>
                    </div>
                    <div class="float-right">
                      <span class="a-color-base offer-price a-text-normal">${{ product.price }}/span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="kcpAppBaseBox text-center">
              <img src="/img/readyondevice.png" alt="img" class="img-fluid">
            </div>
          </div>
        </div>
        <br>
        <hr>
        <div class="books-entity-teaser">
          <div class="bucket">
            <h2>More about the author</h2>
            <div class="content">
              <div class="row">
                <!-- authors  photo and button  -->
                <div class="col-md-2 col-sm-4 col-4">
                  <div class="authorContent">
                    <div class="authorImageSingle">
                      <a href="#"><img :src="product.owner.photo" alt="img" class="img-fluid"></a>
                    </div>
                    <div class="auhtorFollow">
                      <button class="followButton" type="button">
                        <span class="pr-fb-icon" />
                        <span class="pr-fb-text">Follow</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!--  authors about -->
                <div class="col-md-10 col-sm-8 col-8 pl-0">
                  <div class="mainContent">
                    <h3>Biography</h3>
                    <div id="authorBio">
                      {{ product.owner.about }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- passing data to another components  -->
        <ReviewSection :product="product" :reviews="reviews" />
      </div>
    </div>
  </main>
</template>
<script>
import ReviewSection from '../../components/ReviewSection'
export default {
  components: {
    ReviewSection
  },
  async asyncData ({ $axios, params }) {
    try {
      const singleProduct = $axios.$get(`/api/products/${params.id}`)
      const manyReviews = $axios.$get(`/api/reviews/${params.id}`)

      const [productResponse, reviewResponse] = await Promise.all([
        singleProduct, manyReviews
      ])

      return {
        product: productResponse.product,
        reviews: reviewResponse.reviews
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
<style>

</style>
