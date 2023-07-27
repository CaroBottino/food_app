<template>
  <div class="body">
    <div v-if="!orderSuccess && !orderError">
      <h1>Nueva orden</h1>

      <div>
        <h4>Estás a punto de comprar los siguientes productos...</h4>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Img</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in getUserCart" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ item.name }}</td>
              <td><img :src="item.img" /></td>
              <td>{{ item.price }}</td>
              <td>{{ item.q }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <hr />
        <h4>Precio final: $ {{ getCartPrice }}</h4>
        <hr />
        <h4>Te solicitamos los siguientes datos para continuar:</h4>
      </div>

      <b-form @submit.prevent="submitOrderHandler">
        <b-form-group
          id="input-group-email"
          label="Dirección:"
          label-for="address"
          description="Nunca vamos a compartir tu dirección con otras compañías."
        >
          <b-form-input
            id="address"
            v-model="form.address"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-pass" label="Notas:" label-for="notes">
          <b-form-input
            id="notes"
            v-model="form.notes"
            placeholder="cualquier info extra que creas podamos necesitar"
            type="text"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-pass"
          label="Método de pago:"
          label-for="payment"
          description="Por el momento sólo aceptamos efectivo al momento de la entrega"
        >
          <b-form-input
            id="payment"
            value="efectivo"
            type="text"
            disabled
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Comprar!</b-button>
      </b-form>
    </div>

    <div v-if="orderSuccess">
      <div class="space"></div>
      <h1>Gracias por tu orden!</h1>
      <p>
        🧁🍭🧋 Despacharemos en breve para que puedas disfrutarla lo antes
        posible 🍣🍕🍔
      </p>

      <b-button
        type="submit"
        variant="primary"
        class="btn-orders"
        @click="backToUserView"
      >
        Volver a tus ordenes
      </b-button>
    </div>
    <div v-if="orderError">
      <div class="space"></div>
      <h1>Ups! 😬</h1>
      <p>Tuvimos un problema creando tu orden...</p>
      <p>
        Intenta de nuevo... y si el problema persiste, comunícate con nosotros.
      </p>

      <b-button
        type="submit"
        variant="primary"
        class="btn-orders"
        @click="backToUserView"
      >
        Volver a tus ordenes
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Order from "@/models/Order";

export default {
  name: "OrderPage",
  data() {
    return {
      errors: [],
      form: new Order(),
      orderSuccess: false,
      orderError: false,
    };
  },
  computed: {
    ...mapGetters(["getUserCart", "getCartPrice"]),
  },
  methods: {
    submitOrderHandler() {
      this.form.finalPrice = this.getCartPrice;
      this.form.items = this.getUserCart;

      this.$store
        .dispatch("createOrder", this.form)
        .then(() => {
          this.$store.dispatch("editUserInfo", this.$store.state.user);
          this.orderSuccess = true;
        })
        .catch((err) => {
          this.errors.push(err);
          this.orderError = true;
        });
    },
    backToUserView() {
      this.$router.push({ name: "user" });
    },
  },
};
</script>

<style scoped>
.body {
  margin-top: 80px;
  min-height: 70rem;
  color: whitesmoke;
  align-content: center;
  background-color: #222222;
  max-width: 50%;
  margin-left: 25%;
}

h1 {
  padding: 1rem;
}

.table {
  color: whitesmoke;
}

img {
  max-height: 6rem;
  max-width: 6rem;
}

hr {
  background-color: white;
}

.space {
  padding: 4rem;
}

.btn-orders {
  margin-top: 1rem;
}
</style>
