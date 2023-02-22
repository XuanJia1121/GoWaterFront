import { defineStore } from 'pinia';
import { apiLoginAction } from '@/http'


export const useStore = defineStore('customerStore',{

  state: () => ({
    isLogin:false,
  }),
  
  getters: {
    showloginMsg: (state) => state.loginMsg
  },

  actions: {
    loginAction:(data)=>{
      return apiLoginAction(JSON.stringify(data));
    },
    setJwtToken:(token)=>{
      localStorage.setItem('myToken',token);
    },
    removeJwtToken:()=>{
      localStorage.removeItem('myToken');
    }
  },

});