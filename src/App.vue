<template>
  <div id="app">
    <NavbarComponent />

    <router-view />

    <CarritoComponent
      :items="storeState.user.cart"
      @updateStock="updateStock"
      @deleteFromCart="onDeleteFromCart"
    />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import CarritoComponent from "./components/CarritoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import store from "./store";

export default {
  name: "App",
  components: {
    NavbarComponent,
    CarritoComponent,
    FooterComponent,
  },
  data() {
    return {
      storeState: store.state,
    };
  },
  methods: {
    onDeleteFromCart(itemId) {
      store.deleteItemFromCart(itemId);
    },
    updateStock(i) {
      return i;
    },
  },
};
</script>

<style></style>
