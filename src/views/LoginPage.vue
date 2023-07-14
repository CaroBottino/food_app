<template>
  <div class="body">
    <div class="top"></div>
    <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
      <p>Ups! Algo sucedió al intentar registrarte...</p>
      <ul>
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </div>

    <LoginComponent @submit="onLoginSubmit" @register="onRegisterSubmit" />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import MockapiController from "@/controllers/MockapiController";

export default {
  name: "LoginPage",
  components: {
    LoginComponent,
  },
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    onLoginSubmit(form) {
      this.errors = [];

      // como no puedo hacer un getUserByMail porque Mockapi solo me deja por id... lo hago asi jeje
      MockapiController.getUsers().then((res) => {
        let found = res.data.find((user) => {
          return user.email === form.email;
        });

        if (found) {
          this.$store.getters["getUserCart"].forEach((item) => {
            if (found.cart.find((i) => i.id == item.id)) {
              found.cart.forEach((j) => {
                if (j.id == item.id) {
                  j.q = j.q + item.q;
                }
              });
            } else {
              found.cart.push(item);
            }
          });

          this.$store.dispatch("loggingUser", found);
          this.$router.push({ name: "user" });
        } else {
          this.errors.push(
            "usuario o contraseña incorrectos... vuelva a intentar"
          );
          return;
        }
      });
    },
    onRegisterSubmit(form) {
      this.errors = [];

      // como no puedo hacer un getUserByMail porque Mockapi solo me deja por id... lo hago asi jeje
      MockapiController.getUsers().then((res) => {
        let found = res.data.find((user) => {
          return user.email === form.email;
        });

        if (found) {
          this.errors.push(
            "el email ya ha sido registrado, pruebe iniciar sesión con el mismo o crear una cuenta con un mail diferente"
          );
          return;
        } else {
          this.saveNewUser(form);
        }
      });
    },
    saveNewUser(form) {
      let newUser = {
        fullname: form.fullname,
        pass: form.pass,
        email: form.email,
        role: "buyer",
        cart: this.$store.getters["getUserCart"],
      };

      this.$store
        .dispatch("createUser", newUser)
        .then(this.$router.push({ name: "user" }))
        .catch((err) => {
          alert("error creando user: ", err);
        });
    },
  },
};
</script>

<style scoped>
.body {
  margin-top: 80px;
}

.alert {
  max-width: 70%;
  margin-left: 20%;
}

.top {
  min-height: 3rem;
}
</style>
