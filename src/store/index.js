import Vue from "vue";
import Vuex from "vuex";
import MockapiController from "@/controllers/MockapiController";
import User from "@/models/User";
import { itemsModule } from "./modules/items";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: new User(),
    logged: false,
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getLogged: (state) => {
      return state.logged;
    },
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
    getUserItems: (state) => {
      return state.items;
    },
    getUserOrders: (state) => {
      return state.user.orders;
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
          i.q = i.q < i.stock ? i.q + 1 : i.q;
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
    deleteItemFromBought: (state, itemId) => {
      state.user.orders = state.user.orders.filter((item) => {
        return item.id !== itemId;
      });
    },
    registerOrder: (state, order) => {
      order.id = new Date().toString();
      state.user.orders.push(order);
    },
    emptyCart: (state) => {
      state.user.cart = [];
    },
  },
  actions: {
    createUser: (context, payload) => {
      MockapiController.createUser(payload).then((res) => {
        context.commit("setUser", res.data);
        context.commit("setLogged", true);
      });
    },
    loggingUser: (context, payload) => {
      MockapiController.updateUser(payload.id, payload).then((res) => {
        context.commit("setUser", res.data);
        context.commit("setLogged", true);
      });
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
      MockapiController.updateUser(payload.id, payload).then((res) => {
        context.commit("setUser", res.data);
      });
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
    createOrder: (context, payload) => {
      context.commit("registerOrder", payload);
      context.commit("emptyCart");
    },
    deleteItemFromBought: (context, id) => {
      context.commit("deleteItemFromBought", id);
    },
  },
  modules: {
    items: itemsModule,
  },
});
