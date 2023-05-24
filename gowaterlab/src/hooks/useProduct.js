import { useStore } from "@/store/index";
import { allProductAction } from '@/http'

export async function initProducts() {
    const res = await allProductAction();
    const myStore = useStore();
    myStore.products = JSON.parse(res.data.value);
}

export function addProductToCart(product) {
    const myStore = useStore();
    const cart = myStore.cart;
    const found = cart.find(element => element.pid == product.pid);
    if (found == null) {
        cart.push({
            ...product,
            quantity:1
        });
    } else {
        found.quantity += 1;
    }
}

