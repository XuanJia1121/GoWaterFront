import { defineStore } from 'pinia';

export const useStore = defineStore('customerStore', {

  state: () => ({
    customer:{},
    cart:[],
    products:[],
    isLogin:false,
  }),

  getters: {
     cartTotal : (state) => {
      let sum = 0;
      state.cart.forEach(p => {
        sum += p.price * p.quantity;
      })
      return sum;
     }
  },

  actions: {
    
  },

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