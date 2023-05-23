import { defineStore } from 'pinia';

export const useStore = defineStore('customerStore', {

  state: () => ({
    customer:{},
    cart:[],
    products:[],
    isLogin:false,
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