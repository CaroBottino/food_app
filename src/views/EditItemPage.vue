<template>
  <div class="body">
    <div v-if="storeState.user.role === 'admin'">
      <h1 v-if="itemId" class="edit-header">Editar item {{ itemId }}</h1>
      <h1 v-else class="edit-header">Crear nuevo item</h1>
      <div class="col d-flex justify-content-center">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                v-if="item.img"
                :src="item.img"
                class="img-fluid rounded-start"
                alt="..."
              />
              <img
                v-else
                src="https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <div>
                  <div class="row g-0">
                    <div class="col">
                      <label for="email">id</label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="id"
                        v-model="item.id"
                        name="id"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="row g-0">
                    <div class="col">
                      <label for="fullname">name</label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="name"
                        v-model="item.name"
                        name="name"
                      />
                    </div>
                  </div>

                  <div class="row g-0">
                    <div class="col">
                      <label for="img">image</label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        id="img"
                        v-model="item.img"
                        name="img"
                      />
                    </div>
                  </div>
                  <div class="row g-0">
                    <div class="col">
                      <label for="price">price</label>
                    </div>
                    <div class="col">
                      <input
                        type="number"
                        id="price"
                        v-model.number="item.price"
                        name="price"
                      />
                    </div>
                  </div>
                  <div class="row g-0">
                    <div class="col">
                      <label for="desc">description</label>
                    </div>
                    <div class="col">
                      <textarea
                        type="text"
                        id="desc"
                        v-model="item.desc"
                        name="desc"
                      />
                    </div>
                  </div>
                  <div class="row g-0">
                    <div class="col">
                      <label for="stock">stock</label>
                    </div>
                    <div class="col">
                      <input
                        type="number"
                        id="stok"
                        v-model.number="item.stock"
                        name="stock"
                      />
                    </div>
                  </div>

                  <div class="row g-0">
                    <b-button v-if="itemId" v-on:click="editItem()">
                      <b-icon icon="check" class="nav-icon"></b-icon>
                    </b-button>
                    <b-button v-else v-on:click="createItem()">
                      <b-icon icon="check" class="nav-icon"></b-icon>
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="edit-header">NOT ALLOWED</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditItemPage",
  data() {
    return {
      storeState: this.$store.state,
      itemId: this.$route.params.id,
      item: {
        id: "",
        name: "",
        img: "",
        price: 0,
        desc: "",
        stock: 0,
        user: this.$store.state.user.id,
      },
    };
  },
  created() {
    this.item = this.$store.getters["items/getItemById"](this.itemId);
  },
  methods: {
    editItem() {
      this.$store
        .dispatch("items/updateItem", this.item)
        .then(alert("item editado ok"))
        .catch((err) => alert("error updating item: ", err));
    },
    createItem() {
      this.$store
        .dispatch("items/createItem", this.item)
        .then(alert("item creado ok"))
        .catch((err) => alert("error creating item: ", err));
    },
  },
};
</script>

<style scoped>
.body {
  margin-top: 80px;
  margin-bottom: 70px;
  color: whitesmoke;
  align-content: center;
  background-color: #222222;
}
.edit-header {
  padding-top: 25px;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
}

img {
  margin: 15px;
}
</style>
