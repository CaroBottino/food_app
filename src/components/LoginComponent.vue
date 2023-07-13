<template>
  <div>
    <b-container fluid>
      <b-row>
        <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
          <p>Ups! Algunos campos no son como esperamos...</p>
          <ul>
            <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
          </ul>
        </div>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <!-- login form -->
          <b-form v-if="show" @submit="onSubmit">
            <b-form-group
              id="input-group-email"
              label="Email:"
              label-for="inputEmail"
              description="Nunca vamos a compartir tu email con otras compañías."
            >
              <b-form-input
                id="inputEmail"
                v-model="form.email"
                type="email"
                placeholder="caro@mail.com"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-pass"
              label="Password:"
              label-for="inputPass"
            >
              <b-form-input
                id="inputPass"
                v-model="form.pass"
                placeholder="caro1234"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="select-group-3">
              <p>
                ¿Aún no estás registrado? Registrate
                <a href="#" v-on:click="changeForm">aquí.</a>
              </p>
            </b-form-group>

            <b-button type="submit" variant="primary">Ingresar</b-button>
          </b-form>

          <!-- registration form -->
          <b-form v-else @submit="onRegister">
            <b-form-group
              id="input-group-1"
              label="Email:"
              label-for="input-1"
              description="Nunca vamos a compartir tu email con otras compañías."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Tu email, que será tu user"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Nombre y apellido:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.fullname"
                type="text"
                placeholder="Tu nombre y apellido"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label="Password:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="form.pass"
                placeholder="Ingresar contraseña"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="select-group-3">
              <p>
                ¿Ya tenés una cuenta? Ingresá
                <a href="#" v-on:click="changeForm">aquí.</a>
              </p>
            </b-form-group>

            <b-button type="submit" variant="primary">Registrarse</b-button>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      form: {
        fullname: "",
        email: "",
        pass: "",
      },
      show: true,
      errors: [],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("submit", this.form);
    },
    checkPassword(pass) {
      if (
        pass.length < 8 ||
        pass.length > 31 ||
        !pass.match(/[A-Z]/) ||
        !pass.match(/[0-9]/) ||
        !pass.match(/[.,:!?]/)
      ) {
        return false;
      }

      return true;
    },
    onRegister(event) {
      this.errors = [];

      event.preventDefault();

      if (!this.checkPassword(this.form.pass)) {
        this.errors.push(
          "La contraseña debe tener una cantidad mínica de 8 dígitos, máxima de 31 dígitos, al menos 1 mayúcula, al menos 1 número y al menos 1 caracter especial."
        );

        return;
      }

      this.$emit("register", this.form);
    },
    changeForm() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
form {
  color: antiquewhite;
  margin-top: 80px;
  margin-bottom: 70px;
}

button {
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.alert {
  max-width: 70%;
  margin-left: 20%;
}
</style>
