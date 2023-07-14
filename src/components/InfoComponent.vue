<template>
  <div>
    <b-modal id="modal-info" centered :title="item.name">
      <template #modal-header>
        <div class="w-100">
          <b-img rounded="top" :src="item.img"></b-img>
        </div>
      </template>

      <h3>{{ item.name }}</h3>
      <p class="my-4">{{ item.price | toPrice }}</p>
      <p>{{ item.desc }}</p>

      <template #modal-footer>
        <div class="w-100">
          <b-button-group class="float-left">
            <b-button v-on:click="subtract" :disabled="quantity == 1"
              >-</b-button
            >
            <b-button disabled>{{ quantity }}</b-button>
            <b-button v-on:click="add" :disabled="quantity >= item.stock"
              >+</b-button
            >
          </b-button-group>

          <b-button class="float-right" v-on:click="addToCart()">
            <b-icon icon="cart-plus" class="nav-icon"></b-icon>
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import FiltersComponent from "./FiltersComponent.vue";
import CartItem from "@/models/CartItem";

export default {
  name: "InfoComponent",
  props: {
    item: {
      Object,
      required: true,
    },
  },
  mixins: [FiltersComponent],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      let cartItem = new CartItem({
        id: this.item.id,
        name: this.item.name,
        img: this.item.img,
        price: this.item.price,
        q: this.quantity,
      });

      this.$emit("addToCart", cartItem);
      this.$bvModal.hide("modal-info");

      this.quantity = 1;
    },
    add() {
      this.quantity++;
    },
    subtract() {
      this.quantity == 0 ? (this.quantity = 0) : this.quantity--;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-height: 22rem;
}

.modal-header {
  padding: 0;
}

button:disabled {
  background-color: crimson;
}
</style>
