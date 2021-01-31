<template>
  <div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
      <div class="container-fluid dekstop-nav">
        <div class="row">
          <!-- Logo -->
          <div class="col-sm-2">
            <div class="logo-area">
              <a href="#">
                <img src="/img/logo.png" alt="logo" class="img-fluid">
              </a>
            </div>
          </div>
          <!-- Search bar -->
          <div class="col-sm-6 pt-0">
            <Search />
          </div>
          <div class="col-sm-4" />
        </div>
        <div class="row">
          <!-- delivery -->
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 pl-2">
            <div class="nav-global-location">
              <nuxt-link to="/address" class="nav-a nav-a-2">
                <div id="nav-packard-glow-loc-icon" class="nav-sprite" />
                <div id="glow-ingress-block">
                  <span id="glow-ingress-line1" class="nav-line-1">Deliver to</span>
                  <span id="glow-ingress-line2" class="nav-line-2">California</span>
                </div>
              </nuxt-link>
            </div>
          </div>
          <!-- Shopping -->
          <div class="col-xl-6 col-lg-5 col-md-4 col-sm-6 p-0">
            <div class="nav-fill">
              <div class="nav-shop">
                <nuxt-link to="/history" class="nav-a nav-a-2 nav-single-row-link">
                  <span class="nav-line-2">Browsing History
                    <span class="nav-icon nav-arrow" style="visibility:visible" />
                  </span>
                </nuxt-link>
              </div>
              <div class="nav-xshop-container">
                <div class="nav-xshop">
                  <a href="#" class="nav-a">Today's Deals</a>
                  <a href="#" class="nav-a">Your Amazon.com</a>
                  <a href="#" class="nav-a">Gift Cards</a>
                  <a href="#" class="nav-a">Registry</a>
                  <a href="#" class="nav-a">Sell</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Accounts and Order -->
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-4 p-0">
            <div class="nav-tools">
              <a id="icp-nav-flyout" href="#" class="nav-a nav-a-2 icp-link-style-2">
                <span class="icp-nav-link-inner">
                  <span class="nav-line-1">
                    <span class="icp-nav-globe-img-2" />
                    <span class="icp-nav-language">EN</span>
                  </span>
                  <span class="nav-line-2">
                    &nbsp;
                    <span class="nav-icon nav-arrow" style="visibility:visible" />
                  </span>
                </span>
              </a>
              <span class="icp-nav-link-border" />
              <template v-if="$auth.$state.loggedIn">
                <nuxt-link
                  id="nav-link-accountList"
                  to="/register"
                  tabindex="0"
                  class="nav-a nav-a-2"
                >
                  <span class="nav-line-1">Hello,</span>
                  <span class="nav-line-2">{{ $auth.$state.user.name }}</span>
                </nuxt-link>
              </template>
              <template v-else>
                <nuxt-link
                  id="nav-link-accountList"
                  to="/register"
                  tabindex="0"
                  class="nav-a nav-a-2"
                >
                  <span class="nav-line-1">Hello, Sign in</span>
                  <span class="nav-line-2">
                    Account &amp; Lists
                    <span class="nav-icon nav-arrow" style="visibility: visible" />
                  </span>
                </nuxt-link>
              </template>
              <nuxt-link to="/orders" class="nav-a nav-a-2 nav-single-row-link">
                <span class="nav-line-1" />
                <span class="nav-line-2">Orders</span>
              </nuxt-link>
              <nuxt-link id="nav-cart" to="/cart" class="nav-a nav-a-2">
                <span class="nav-line-1" aria-hidden="true" />
                <span class="nav-line-2" aria-hidden="true">Cart</span>
                <span class="nav-sprite nav-cart-icon" />
                <span id="nav-cart-count" class="nav-cart-count nav-cart-0" aria-hidden="true">0</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Search from './Search'
export default {
  components: {
    Search
  }
}
</script>
