import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      fullname: "",
      pass: "",
      role: "",
      email: "",
      id: "",
      cart: [],
    },
    logged: false,
  },
  getters: {
    getItemFromCart: (state) => (id) => {
      return state.user.cart.filter((item) => id === item.id);
    },
    getUserCart: (state) => {
      return state.user.cart;
    },
    getCartItemsQ: (state) => {
      return state.user.cart.length;
    },
    getCartPrice: (state) => {
      let price = 0;

      state.user.cart.forEach((item) => {
        price = price + item.price * item.q;
      });

      return price;
    },
  },
  mutations: {
    setUser: (state, form) => {
      state.user = form;
    },
    setLogged: (state, logged) => {
      state.logged = logged;
    },
    pushItemToCart: (state, item) => {
      state.user.cart.push(item);
    },
    updateItemAdd: (state, item) => {
      state.user.cart.forEach((i) => {
        if (i.id === item.id) {
          i.q++;
        }
      });
    },
    updateItemSubs: (state, item) => {
      state.user.cart.forEach((i) => {
        if (i.id === item.id) {
          item.q == 0 ? (i.q = 0) : i.q--;
        }
      });
    },
    deleteItemFromCart: (state, itemId) => {
      state.user.cart = state.user.cart.filter((item) => {
        return item.id !== itemId;
      });
    },
  },
  actions: {
    loggingUser: (context, payload) => {
      context.commit("setUser", payload);
      context.commit("setLogged", true);
    },
    logoutUser: (context) => {
      const emptyUser = {
        fullname: "",
        pass: "",
        role: "",
        email: "",
        id: "",
        cart: [],
      };

      context.commit("setUser", emptyUser);
      context.commit("setLogged", false);
    },
    editUserInfo: (context, payload) => {
      context.commit("setUser", payload);
    },
    addItemToCart: (context, payload) => {
      if (context.getters.getItemFromCart(payload.id).length !== 0) {
        context.commit("updateItemQ", payload);
      } else {
        context.commit("pushItemToCart", payload);
      }
    },
    deleteItemFromCart: (context, id) => {
      context.commit("deleteItemFromCart", id);
    },
    updateItemAdd: (context, item) => {
      context.commit("updateItemAdd", item);
    },
    updateItemSubs: (context, item) => {
      context.commit("updateItemSubs", item);
    },
  },
  modules: {},
});
