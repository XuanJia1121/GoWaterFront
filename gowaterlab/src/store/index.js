import { defineStore } from 'pinia';

export const useStore = defineStore('customerStore', {

  state: () => ({
    isLogin: false,
    products: [],
    cart: []
  }),

  getters: {
    showloginMsg: (state) => state.loginMsg,
    getAllProduct: (state) => state.products,
    getCart: (state) => state.cart
  },

  actions: {},

  persist: {
    enabled: true,
  }

});