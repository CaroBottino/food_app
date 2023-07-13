<template>
  <div class="body">
    <h1 class="user-header">Información de usuario</h1>
    <div class="col d-flex justify-content-center">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="user.avatar" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ user.fullname }}</h5>
              <div v-if="edit">
                <div>
                  <label for="fullname">Fullname</label>
                  <input
                    type="text"
                    id="fullname"
                    v-model="user.fullname"
                    name="fullname"
                  />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="user.email"
                    name="email"
                  />
                </div>
                <div>
                  <label for="pass">Password</label>
                  <input
                    type="text"
                    id="pass"
                    v-model="user.pass"
                    name="pass"
                  />
                </div>
                <div>
                  <label for="role">Role</label>
                  <select id="role" v-model="user.role">
                    <option value="admin">admin</option>
                    <option value="buyer">buyer</option>
                  </select>
                </div>
                <div>
                  <label for="fullname">Avatar</label>
                  <input
                    type="text"
                    id="avatar"
                    v-model="user.avatar"
                    name="avatar"
                  />
                </div>

                <b-button v-on:click="editUser()">
                  <b-icon icon="check" class="nav-icon"></b-icon>
                </b-button>
              </div>
              <div v-else>
                <p class="card-text">email: {{ user.email }}</p>
                <p class="card-text">Password: {{ user.pass }}</p>
                <p class="card-text">role: {{ user.role }}</p>

                <b-button v-on:click="showEditMode()">
                  <b-icon icon="pencil" class="nav-icon"></b-icon>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="user.role === 'admin'" class="features-pannel">
      <h3>Tus items en venta</h3>

      <div class="new-item">
        <button type="button" class="btn btn-danger" @click="createItem">
          <b-icon icon="plus-circle-dotted" class="nav-icon"></b-icon>
          Nuevo Item
        </button>
      </div>

      <TableComponent
        :headers="headersAdmin"
        :items="itemsByUser"
        :actions="actionsAdmin"
        @editItem="onEditItem"
        @deleteItem="onDeleteItem"
      />
    </div>
    <div v-else class="features-pannel">
      <h3>Tu carrito de compras</h3>

      <div v-if="getUserCart.length > 0">
        <TableComponent
          :headers="headersBuyer"
          :items="getUserCart"
          :actions="actionsBuyer"
          @deleteItem="onDeleteItemFromCart"
        />
      </div>
      <div v-else>
        <h6>No agregaste items a tu carrito aún</h6>
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "UserPage",
  data() {
    return {
      user: this.$store.state.user,
      edit: false,
      roles: ["admin", "buyer"],
      headersAdmin: ["id", "name", "img", "price", "desc", "stock"],
      actionsAdmin: ["edit", "delete"],
      headersBuyer: ["id", "name", "img", "price", "q"],
      actionsBuyer: ["delete"],
      editItem: {
        id: "",
        name: "",
        img: "",
        price: 0,
        desc: "",
        stock: 0,
      },
    };
  },
  computed: {
    itemsByUser() {
      return this.$store.getters["items/getItemsByUser"](this.user.id);
    },
    ...mapGetters(["getUserCart"]),
  },
  components: {
    TableComponent,
  },
  methods: {
    showEditMode() {
      this.edit = true;
    },
    editUser() {
      this.$store
        .dispatch("editUserInfo", this.user)
        .then(() => {
          alert("User info edited");
          this.edit = false;
        })
        .catch((err) => {
          alert("error editando user: ", err);
        });
    },
    createItem() {
      this.$router.push({ name: "edit-item" });
    },
    onEditItem(edit) {
      this.$router.push({ name: "edit-item", params: { id: edit } });
    },
    onDeleteItem(id) {
      this.$store
        .dispatch("items/deleteItem", id)
        .then(() => {
          alert("item deleted");
          this.$store.dispatch("items/getItems");
        })
        .catch((err) => alert("error when deleting item: ", err));
    },
    onDeleteItemFromCart(itemId) {
      this.$store
        .dispatch("deleteItemFromCart", itemId)
        .then(this.$store.dispatch("editUserInfo", this.$store.state.user))
        .catch((err) => alert("error deleting item from cart: ", err));
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

.user-header {
  padding-top: 25px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
}

label {
  margin-right: 1rem;
}

img {
  min-height: 16rem;
  min-width: 16rem;
  padding: 1rem;
}

.features-pannel {
  margin-top: 2rem;
}

.new-item {
  padding-bottom: 1rem;
}
</style>
