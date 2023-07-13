<template>
  <div class="body">
    <div v-if="loading" class="spinner">
      <div class="spinner-border text-danger" role="status" id="spinner">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div v-if="getItems.length > 0">
        <ListadoComponent
          :items="getItems"
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
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    ListadoComponent,
  },
  data() {
    return {
      loading: true,
      storeState: this.$store.state,
    };
  },
  computed: {
    ...mapGetters("items", ["getItems"]),
  },
  created() {
    this.$store
      .dispatch("items/getItems")
      .then((this.loading = false))
      .catch((err) => console.log("error getting items: ", err));
  },
  methods: {
    onAddToCart(item) {
      this.$store.dispatch("addItemToCart", item);
    },
  },
};
</script>

<style scoped>
.body {
  margin-top: 80px;
}
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
