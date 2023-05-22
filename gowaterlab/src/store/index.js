import { defineStore } from 'pinia';

export const useStore = defineStore('customerStore', {

  state: () => ({
    customer: {},
    products: [],
  }),

  getters: {
    
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