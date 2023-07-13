import MockapiController from "@/controllers/MockapiController";

export const itemsModule = {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    getItems: (state) => {
      return state.items;
    },
    getItemsByUser: (state) => (userId) => {
      return state.items.filter((item) => item.user === userId);
    },
    getItemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
  },
  actions: {
    getItems: (context) => {
      MockapiController.getItems().then((res) => {
        context.commit("setItems", res.data);
      });
    },
    createItem: (context, payload) => {
      MockapiController.createItem(payload);
    },
    updateItem: (context, payload) => {
      MockapiController.updateItem(payload.id, payload);
    },
    deleteItem: (context, payload) => {
      // console.log("context: ", context);
      // console.log("p: ", payload);
      MockapiController.deleteItem(payload);
    },
  },
};
