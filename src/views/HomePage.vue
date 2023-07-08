<template>
  <div>
    <div v-if="loading" class="spinner">
      <div class="spinner-border text-danger" role="status" id="spinner">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div v-if="listado.length > 0">
        <ListadoComponent
          :items="listado"
          :itemsCart="storeState.user.cart"
          @addToCart="onAddToCart"
        />
      </div>
      <div v-else class="spinner">
        <h1 class="no-items">NO ITEMS IN STOCK YET</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ListadoComponent from "@/components/ListadoComponent.vue";
import MockapiController from "@/controllers/MockapiController";
import store from "@/store";

export default {
  name: "HomePage",
  components: {
    ListadoComponent,
  },
  data() {
    return {
      loading: true,
      listado: [],
      storeState: store.state,
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      MockapiController.getItems()
        .then((res) => {
          this.listado = res.data;
          this.loading = false;
        })
        .catch((err) => console.log("error getItems: ", err));
    },
    onAddToCart(item) {
      store.addItemToCart(item);
    },
    updateStock(i) {
      this.listado.forEach((item) => {
        if (item.id === i.id) {
          console.log(`stock: ${item.stock}, q: ${i.q}`);
          item.stock = item.stock - i.q;
        }
      });

      // this.itemsCarrito.forEach((item) => {
      //   if (item.name === i.name) {
      //     item.q++;
      //   }
      // });
    },
  },
};
</script>

<style scoped>
.spinner {
  min-height: 600px;
}

#spinner {
  margin-top: 300px;
}

.no-items {
  margin-top: 65px;
  padding-top: 300px;
}
</style>
