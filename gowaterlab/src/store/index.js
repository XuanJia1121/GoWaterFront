import { defineStore } from 'pinia';

export const useStore = defineStore('customerStore',{

  state: () => ({
    loginMsg:'hello pinia'
  }),
  
  getters: {
    showloginMsg: (state) => state.loginMsg
  },

  actions: {
    
  },

});