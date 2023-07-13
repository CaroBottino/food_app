<template>
  <div>
    <b-navbar class="navbar navbar-expand-lg fixed-top navbar-scroll">
      <div class="container-fluid">
        <router-link :to="{ name: 'home' }">
          <b-navbar-brand>App de pedidos</b-navbar-brand>
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <!--
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">
                <b-icon icon="search" class="nav-icon"></b-icon>
              </b-button>
            </b-nav-form>
            -->

            <b-nav-item-dropdown no-caret right v-if="storeState.logged">
              <template #button-content>
                <img :src="storeState.user.avatar" class="avatar" />
              </template>
              <b-dropdown-item>
                <router-link :to="{ name: 'user' }"> Profile </router-link>
              </b-dropdown-item>
              <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item right v-else>
              <router-link :to="{ name: 'login' }">
                <b-button class="nav-btn">
                  <b-icon icon="person-circle" class="nav-icon"></b-icon>
                </b-button>
              </router-link>
            </b-nav-item>

            <b-nav-item right>
              <b-button v-b-toggle.sidebar-cart class="nav-btn">
                <b-icon icon="cart" class="nav-icon"></b-icon>
                <div v-if="storeState.user.cart.length > 0" class="cart-dot">
                  <p class="cart-total">
                    {{ storeState.user.cart.length }}
                  </p>
                </div>
              </b-button>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      storeState: this.$store.state,
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("logoutUser");
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  min-width: 20rem;
  min-height: 4rem;
  z-index: 9;
  color: crimson;
  background: rgba(241, 241, 241, 0.676);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-scrolled .nav-link,
.navbar-scrolled .navbar-toggler .fa-bars {
  background: rgba(241, 241, 241, 0.676);
}

.navbar-light .navbar-brand {
  color: crimson;
}

.nav-icon {
  color: white;
}

button {
  border-radius: 50%;
  margin-left: 0.5rem;
  background-color: crimson;
  border-color: crimson;
  padding: 13px;
}

.button-content {
  border-radius: 50%;
  margin-left: 1rem;
  background-color: crimson;
  border-color: crimson;
}

.cart-dot {
  height: 1.8rem;
  width: 1.8rem;
  background-color: orange;
  border-radius: 50%;
  z-index: 3;
  position: absolute;
  bottom: 2.5rem;
  right: 0.4rem;
}

.cart-total {
  color: #fff;
  font-size: 1rem;
  text-align: center;
  margin-top: 2px;
}

.avatar {
  width: 55px;
  border-radius: 50%;
  border-style: none;
}
</style>
