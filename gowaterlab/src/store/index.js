import { defineStore } from 'pinia';
import { apiLoginAction, allProductAction, test } from '@/http'


export const useStore = defineStore('customerStore', {

  state: () => ({
    isLogin: false,
    products: [],
  }),

  getters: {
    showloginMsg: (state) => state.loginMsg,
    getAllProduct: (state) => state.products
  },

  actions: {

    //使用者相關
    loginAction: (data) => {
      return apiLoginAction(JSON.stringify(data));
    },
    setJwtToken: (token) => {
      sessionStorage.setItem('myToken', token);
    },
    removeJwtToken: () => {
      sessionStorage.removeItem('myToken');
    },


    //商品相關
    allProducts() {
      return new Promise(async(resolve, reject)=>{
        const response = await allProductAction();
        resolve(JSON.parse(response.data));
        console.log('find product finish');
      })
    }

  },

  persist: {
    enabled: true, // 这个配置代表存储生效，而且是整个store都存储
  }

});