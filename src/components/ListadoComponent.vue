<template>
  <div>
    <div class="cards">
      <div class="card" v-for="(item, i) in items" :key="i">
        <img :src="item.img" :alt="item.name" style="opacity: 1" />
        <header>
          <h4>{{ item.name }}</h4>
          <p>{{ item.price | toPrice }}</p>
        </header>
        <footer>
          <b-button
            v-b-modal.modal-info
            v-on:click="showInfo(item)"
            :disabled="item.stock < 0"
          >
            <b-icon icon="info-lg" class="nav-icon"></b-icon>
          </b-button>
          <b-button v-if="isInCart(item)" class="icon-check">
            <b-icon icon="check-lg"></b-icon>
          </b-button>
          <b-button v-else v-on:click="addToCart(item)">
            <b-icon icon="cart-plus" class="nav-icon"></b-icon>
          </b-button>
        </footer>
      </div>
    </div>

    <InfoComponent :item="item" @addToCart="addToCart" />
  </div>
</template>

<script>
import InfoComponent from "./InfoComponent.vue";
import FiltersComponent from "./FiltersComponent.vue";
import CartItem from "@/models/CartItem";
import Item from "@/models/Item";

export default {
  name: "ListadoComponent",
  components: {
    InfoComponent,
  },
  props: {
    items: {
      Array,
      required: true,
    },
    itemsCart: {
      Array,
      required: true,
    },
  },
  mixins: [FiltersComponent],
  // computed: {
  //   filteredItems() {
  //     return this.$props.items.filter((i) => i.stock > 0);
  //   },
  // },
  data() {
    return {
      item: new Item(),
    };
  },
  methods: {
    addToCart(item) {
      let cartItem = new CartItem({
        id: item.id,
        name: item.name,
        img: item.img,
        price: item.price,
        q: item.q ? item.q : 1,
      });

      this.$emit("addToCart", cartItem);
    },
    showInfo(item) {
      this.item = item;
    },
    isInCart(item) {
      return this.$props.itemsCart.find((i) => i.id === item.id);
    },
  },
};
</script>

<style scoped>
.icon-check {
  background-color: green;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80vw;
  margin: 4rem auto;
}

.card {
  position: relative;
  margin: 2rem;
  width: 14rem;
  height: 26rem;
  border-radius: 1rem;
  background-color: #eee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
}

.card img {
  border-radius: 1rem 1rem 0 0;
  height: 16rem;
  width: 14rem;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
}

.card header {
  margin: 1rem;
}
.card h4 {
  font-weight: 700;
  margin: 0;
  font-size: larger;
}
.card p {
  font-size: 1rem;
}

.card button {
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  transition: opacity 0.2s ease;
  transition: background-color 0.6 ease;
  margin-left: 1rem;
  margin-right: 1rem;
}

.card footer {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
}
</style>
