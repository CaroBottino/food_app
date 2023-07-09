<template>
  <div>
    <b-sidebar id="sidebar-cart" title="Carrito" right shadow>
      <div v-if="getCartItemsQ == 0" class="px-3 py-2">
        <p>No hay items en su carrito</p>
      </div>
      <div v-else>
        <b-card
          v-for="(item, i) in getUserCart"
          :key="i"
          no-body
          class="overflow-hidden"
          style="max-width: 540px"
        >
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="item.img" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="item.name">
                <b-card-text>
                  <b-button-group class="float-center">
                    <b-button v-on:click="subtract(item)">-</b-button>
                    <b-button disabled>{{ item.q }}</b-button>
                    <b-button v-on:click="add(item)">+</b-button>
                    <b-button v-on:click="deleteItem(item)">
                      <b-icon icon="trash" aria-hidden="true"></b-icon>
                    </b-button>
                  </b-button-group>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <template #footer>
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Total: </strong>
          {{ getCartPrice | toPrice }}

          <b-button @click="buy" id="buy-btn">Pagar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FiltersComponent from "./FiltersComponent.vue";

export default {
  name: "CarritoComponent",
  components: {},
  mixins: [FiltersComponent],
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapGetters(["getUserCart", "getCartItemsQ", "getCartPrice"]),
  },
  methods: {
    add(item) {
      this.$store.dispatch("updateItemAdd", item);
    },
    subtract(item) {
      this.$store.dispatch("updateItemSubs", item);
    },
    deleteItem(item) {
      this.$store.dispatch("deleteItemFromCart", item.id);
    },
    buy() {
      console.log("iniciar compra...");
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 1rem;
}

button {
  font-size: x-small;
}

#buy-btn {
  margin-left: 2rem;
  font-size: small;
}
</style>
