import { useStore } from "@/store/index";
import { allProductAction } from '@/http'

export function addToCart(product) {
    const myStore = useStore();
    const cart = myStore.cart;
    let itemIndex = cart.findIndex(item => item.id === product.id);
    if (itemIndex !== -1) {
        // Product is already in cart, update quantity
        cart[itemIndex].count += 1;
    } else {
        // Product is not in cart, add to cart
        product.count = 1;
        cart.push(product);
    }
}

export function removeFromCart(id){
    const myStore = useStore();
    myStore.cart = myStore.cart.filter(p => p.id != id);
}

export function initProduct(){
    const myStore = useStore();
    return new Promise(async(resolve, reject)=>{
        const response = await allProductAction();
        myStore.products = (JSON.parse(response.data));
        resolve();
      })
}