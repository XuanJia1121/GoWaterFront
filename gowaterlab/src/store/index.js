import { defineStore } from 'pinia';
import { apiLoginAction, allProductAction, test } from '@/http'


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
    setProducts(products){
      this.products = products;
    },
    allProducts() {
      return new Promise(async(resolve, reject)=>{
        const response = await allProductAction();
        this.setProducts(JSON.parse(response.data));
        resolve();
      })
    },
    addTocart(product){
      let itemIndex = this.cart.findIndex(item => item.id === product.id);
      if (itemIndex !== -1) {
        // Product is already in cart, update quantity
        this.cart[itemIndex].count += 1;
      } else {
        // Product is not in cart, add to cart
        product.count = 1;
        this.cart.push(product);
      }
    }

  },

  persist: {
    enabled: true,
  }

});