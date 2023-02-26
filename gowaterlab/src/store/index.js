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
    getCart: (state) => state.cart,
    totalMoney: (state) => {
      return state.cart.map(p => p.price * p.count).reduce((total, arg) => total + arg, 0);
    }
  },

  actions: {},

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'counter',
        storage: sessionStorage
      }
    ]
  }

});